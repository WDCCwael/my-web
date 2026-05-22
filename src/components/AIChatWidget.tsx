import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface StreamConfig {
  endpoint?: string;
  headers?: Record<string, string>;
}

const MOCK_RESPONSES = [
  "I'd be happy to help you with your digital marketing needs! WDC offers comprehensive solutions including website design, SEO optimization, social media management, and more.",
  "Great question! Our web development team specializes in creating high-performance, mobile-responsive websites using the latest technologies like React, Next.js, and Tailwind CSS.",
  "WDC has helped over 150+ businesses grow their online presence. We'd love to discuss how we can help your business too! Feel free to reach out at w@wdc-c.com.",
  "Our social media management services include content creation, community management, paid advertising campaigns, and detailed analytics reporting across all major platforms.",
  "For SEO, we focus on both on-page and off-page optimization, keyword research, technical SEO audits, and content strategy to improve your search rankings organically.",
];

const generateId = () => Math.random().toString(36).substring(2, 9);

const simulateStreaming = (
  text: string,
  onChunk: (chunk: string) => void,
  onComplete: () => void
): (() => void) => {
  let index = 0;
  let cancelled = false;
  const words = text.split(' ');

  const stream = () => {
    if (cancelled || index >= words.length) {
      if (!cancelled) onComplete();
      return;
    }
    const chunk = (index === 0 ? '' : ' ') + words[index];
    onChunk(chunk);
    index++;
    setTimeout(stream, 30 + Math.random() * 50);
  };

  setTimeout(stream, 500);
  return () => { cancelled = true; };
};

const AIChatWidget: React.FC<{ streamConfig?: StreamConfig }> = ({ streamConfig }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [streamingContent, setStreamingContent] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const cancelStreamRef = useRef<(() => void) | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingContent, scrollToBottom]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: generateId(),
        role: 'assistant',
        content: t('chat.welcome'),
        timestamp: new Date(),
      }]);
    }
  }, [isOpen, messages.length, t]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    const userMessage: ChatMessage = {
      id: generateId(),
      role: 'user',
      content: trimmed,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    setStreamingContent('');

    if (streamConfig?.endpoint) {
      try {
        const response = await fetch(streamConfig.endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...streamConfig.headers,
          },
          body: JSON.stringify({ message: trimmed, history: messages }),
        });

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        let fullContent = '';

        if (reader) {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const chunk = decoder.decode(value, { stream: true });
            fullContent += chunk;
            setStreamingContent(fullContent);
          }
        }

        setMessages(prev => [...prev, {
          id: generateId(),
          role: 'assistant',
          content: fullContent,
          timestamp: new Date(),
        }]);
        setStreamingContent('');
        setIsTyping(false);
      } catch {
        setMessages(prev => [...prev, {
          id: generateId(),
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
          timestamp: new Date(),
        }]);
        setStreamingContent('');
        setIsTyping(false);
      }
    } else {
      const mockResponse = MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)];
      let accumulated = '';

      cancelStreamRef.current = simulateStreaming(
        mockResponse,
        (chunk) => {
          accumulated += chunk;
          setStreamingContent(accumulated);
        },
        () => {
          setMessages(prev => [...prev, {
            id: generateId(),
            role: 'assistant',
            content: accumulated,
            timestamp: new Date(),
          }]);
          setStreamingContent('');
          setIsTyping(false);
          cancelStreamRef.current = null;
        }
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={`fixed bottom-24 ${isRTL ? 'start-6' : 'end-6'} z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] flex flex-col rounded-2xl overflow-hidden
              backdrop-blur-md bg-slate-900/40 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"
                >
                  <Bot size={20} className="text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{t('chat.title')}</h3>
                  <p className="text-xs text-muted-foreground">{t('chat.subtitle')}</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
              >
                <X size={18} />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
              <AnimatePresence initial={false}>
                {messages.map((msg, index) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index === messages.length - 1 ? 0.1 : 0 }}
                    className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.role === 'user' ? 'bg-primary/20' : 'bg-accent/20'
                    }`}>
                      {msg.role === 'user' ? <User size={14} className="text-primary" /> : <Bot size={14} className="text-accent" />}
                    </div>
                    <div className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-primary/20 text-foreground rounded-tr-sm'
                        : 'bg-white/5 text-foreground rounded-tl-sm'
                    }`}>
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && streamingContent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2 flex-row"
                >
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 bg-accent/20">
                    <Bot size={14} className="text-accent" />
                  </div>
                  <div className="max-w-[80%] px-3.5 py-2.5 rounded-2xl rounded-tl-sm bg-white/5 text-foreground text-sm leading-relaxed">
                    {streamingContent}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="inline-block w-1.5 h-4 bg-primary ms-0.5 align-middle"
                    />
                  </div>
                </motion.div>
              )}

              {isTyping && !streamingContent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 items-center"
                >
                  <div className="w-7 h-7 rounded-full flex items-center justify-center bg-accent/20">
                    <Bot size={14} className="text-accent" />
                  </div>
                  <div className="flex gap-1 px-3.5 py-3 rounded-2xl rounded-tl-sm bg-white/5">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-muted-foreground"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 bg-white/5">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={t('chat.placeholder')}
                  disabled={isTyping}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all disabled:opacity-50"
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="p-2.5 rounded-xl bg-primary/20 text-primary hover:bg-primary/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <Send size={18} className={isRTL ? 'rotate-180' : ''} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-24 ${isRTL ? 'start-6' : 'end-6'} z-50 p-4 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-md bg-primary/20 border border-white/10 text-primary hover:bg-primary/30 transition-colors`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
        transition={{ delay: isOpen ? 0 : 1.2, duration: 0.4, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open AI Chat"
      >
        <MessageSquare size={24} />
        <span className="absolute -top-1 -end-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
      </motion.button>
    </>
  );
};

export default AIChatWidget;
