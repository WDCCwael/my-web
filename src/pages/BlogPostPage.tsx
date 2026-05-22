import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, UserCircle, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPostData {
  title: string;
  date: string;
  author: string;
  category: string;
  imagePlaceholder: string;
  content: string;
}

const blogPostsData: Record<string, BlogPostData> = {
  "the-future-of-web-design": {
    title: "The Future of Web Design: Trends to Watch in 2025",
    date: "2025-04-15",
    author: "Jane Doe, Lead Designer",
    category: "Web Design",
    imagePlaceholder: "Abstract futuristic web design elements with vibrant colors",
    content: `
      <p class="mb-4 text-lg leading-relaxed">The digital landscape is in a constant state of flux, and web design is no exception. As we look towards 2025, several exciting trends are poised to redefine how we interact with websites and digital platforms. At WDC, we're always at the forefront of these changes, ensuring our clients benefit from the latest innovations.</p>
      <h2 class="text-2xl font-semibold my-6 gradient-text">1. AI-Powered Personalization</h2>
      <p class="mb-4 text-lg leading-relaxed">Artificial Intelligence will play an even more significant role in tailoring user experiences. Expect websites that adapt content, layouts, and recommendations in real-time based on individual user behavior and preferences.</p>
      <h2 class="text-2xl font-semibold my-6 gradient-text">2. Immersive 3D and AR Experiences</h2>
      <p class="mb-4 text-lg leading-relaxed">The line between the digital and physical worlds will continue to blur. Advances in WebGL, WebXR, and other technologies will make it easier to integrate 3D elements and Augmented Reality features directly into websites.</p>
      <h2 class="text-2xl font-semibold my-6 gradient-text">3. Sustainable and Ethical Design</h2>
      <p class="mb-4 text-lg leading-relaxed">There's a growing awareness of the environmental and social impact of digital technologies. Expect a greater emphasis on "green" web design – optimizing for lower energy consumption, using dark modes by default, and choosing eco-friendly hosting.</p>
      <p class="mt-8 text-lg leading-relaxed">Staying ahead of these trends is key to creating impactful digital experiences. At WDC, we're excited to explore these possibilities and help our clients build the websites of tomorrow, today.</p>
    `
  },
  "mastering-social-media-engagement": {
    title: "Mastering Social Media Engagement: A WDC Guide",
    date: "2025-03-28",
    author: "John Smith, Social Media Strategist",
    category: "Social Media",
    imagePlaceholder: "Network of connected social media icons glowing",
    content: `
      <p class="mb-4 text-lg leading-relaxed">In today's hyper-connected world, simply having a social media presence isn't enough. True success lies in fostering genuine engagement – creating meaningful interactions that build brand loyalty and drive results.</p>
      <h2 class="text-2xl font-semibold my-6 gradient-text">1. Know Your Audience Deeply</h2>
      <p class="mb-4 text-lg leading-relaxed">Before you can engage, you must understand. Dive deep into your audience demographics, interests, pain points, and online behaviors.</p>
      <h2 class="text-2xl font-semibold my-6 gradient-text">2. Create Valuable, Shareable Content</h2>
      <p class="mb-4 text-lg leading-relaxed">Content is king, but engagement is queen. Focus on creating content that provides real value – whether it's educational, entertaining, or inspiring.</p>
      <h2 class="text-2xl font-semibold my-6 gradient-text">3. Foster Two-Way Conversations</h2>
      <p class="mb-4 text-lg leading-relaxed">Social media is not a monologue; it's a dialogue. Respond to comments and messages promptly and authentically. Ask questions to encourage participation.</p>
      <p class="mt-8 text-lg leading-relaxed">By implementing these strategies, you can transform your social media channels from mere broadcast platforms into vibrant hubs of community and engagement.</p>
    `
  },
  "seo-secrets-for-business-growth": {
    title: "SEO Secrets for Sustainable Business Growth",
    date: "2025-03-10",
    author: "Alice Brown, SEO Specialist",
    category: "SEO",
    imagePlaceholder: "Magnifying glass over a glowing search results page",
    content: `
      <p class="mb-4 text-lg leading-relaxed">Search Engine Optimization (SEO) is the cornerstone of online visibility and sustainable business growth. In a digital marketplace teeming with competition, appearing on the first page of search results can be a game-changer.</p>
      <h2 class="text-2xl font-semibold my-6 gradient-text">1. Content is Still King, but Context is Queen</h2>
      <p class="mb-4 text-lg leading-relaxed">High-quality, relevant content remains crucial. However, search engines are increasingly sophisticated, prioritizing content that demonstrates expertise, authoritativeness, and trustworthiness (E-A-T).</p>
      <h2 class="text-2xl font-semibold my-6 gradient-text">2. Technical SEO: The Unsung Hero</h2>
      <p class="mb-4 text-lg leading-relaxed">A technically sound website is vital for SEO. This includes optimizing site speed, ensuring mobile-friendliness, implementing structured data markup, and managing crawlability and indexability.</p>
      <p class="mt-8 text-lg leading-relaxed">SEO is an ongoing process, not a one-time task. By consistently applying these principles, your business can achieve higher rankings, attract more organic traffic, and achieve sustainable growth.</p>
    `
  }
};

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const post = slug ? blogPostsData[slug] : undefined;

  if (!post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h1 className="text-4xl font-bold text-destructive mb-4">{t('blog.notFound')}</h1>
        <p className="text-muted-foreground mb-8">{t('blog.notFoundDesc')}</p>
        <Link to="/blog">
          <Button variant="outline">
            <ArrowLeft className="me-2 h-4 w-4 rtl:rotate-180" /> {t('blog.backToBlog')}
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link to="/blog">
            <Button variant="ghost" className="text-primary hover:text-accent mb-6">
              <ArrowLeft className="me-2 h-4 w-4 rtl:rotate-180" /> {t('blog.backToAll')}
            </Button>
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-foreground leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
            <div className="flex items-center">
              <CalendarDays size={16} className="me-1.5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <UserCircle size={16} className="me-1.5" />
              <span>{t('blog.by')} {post.author}</span>
            </div>
            <div className="flex items-center">
              <Tag size={16} className="me-1.5" />
              <span>{post.category}</span>
            </div>
          </div>
        </div>

        <div className="w-full h-72 md:h-96 rounded-lg overflow-hidden mb-10 shadow-lg bg-muted">
          <img className="w-full h-full object-cover" alt={post.title} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
        </div>
        
        <div
          className="prose prose-lg dark:prose-invert max-w-none text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-muted-foreground mb-4">{t('blog.share')}</p>
          <Link to="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {t('blog.contactUs')}
            </Button>
          </Link>
        </div>
      </article>
    </motion.div>
  );
};

export default BlogPostPage;
