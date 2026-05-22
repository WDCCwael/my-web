import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, UserCircle, Plus } from 'lucide-react';
import FileUploadForm from '@/components/FileUploadForm';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';

interface BlogPost {
  id: string;
  title: string;
  author: string;
  created_at: string;
  file_url?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const BlogPage: React.FC = () => {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const { toast } = useToast();
  const { t } = useTranslation();

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogPosts(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while loading articles",
        variant: "destructive"
      });
    }
  };

  const handleUploadSuccess = (newPost: Record<string, unknown>) => {
    setBlogPosts([newPost as BlogPost, ...blogPosts]);
    setShowUploadForm(false);
    toast({
      title: "Success",
      description: "Article published successfully"
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          {t('blog.headingPrefix')} <span className="gradient-text">{t('blog.heading')}</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          {t('blog.subheading')}
        </p>
        <Button
          onClick={() => setShowUploadForm(!showUploadForm)}
          className="mt-6"
          variant="outline"
        >
          {showUploadForm ? (
            t('blog.cancel')
          ) : (
            <>
              <Plus className="me-2 h-4 w-4" />
              {t('blog.addNew')}
            </>
          )}
        </Button>
      </div>

      {showUploadForm && (
        <div className="mb-12">
          <FileUploadForm onUploadSuccess={handleUploadSuccess} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="w-full flex flex-col glassmorphism-card overflow-hidden group transform transition-all duration-300 hover:shadow-2xl hover:border-primary">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                  <div className="flex items-center">
                    <CalendarDays size={14} className="me-1" />
                    <span>{new Date(post.created_at).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <UserCircle size={14} className="me-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                {post.file_url && (
                  <a
                    href={post.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm"
                  >
                    {t('blog.download')}
                  </a>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogPage;
