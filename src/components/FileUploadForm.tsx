import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { useToast } from '@/components/ui/use-toast';
import { Upload, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface FileUploadFormProps {
  onUploadSuccess?: (post: Record<string, unknown>) => void;
}

const FileUploadForm: React.FC<FileUploadFormProps> = ({ onUploadSuccess }) => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && (selectedFile.type === 'application/msword' || selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setFile(selectedFile);
    } else {
      toast({
        title: "Error",
        description: "Please select a Word file (.doc or .docx)",
        variant: "destructive"
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title || !author) {
      toast({
        title: "Required fields",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const { error: fileError } = await supabase.storage
        .from('blog_documents')
        .upload(fileName, file);

      if (fileError) throw fileError;

      const { data: { publicUrl } } = supabase.storage
        .from('blog_documents')
        .getPublicUrl(fileName);

      const { data: post, error: postError } = await supabase
        .from('blog_posts')
        .insert([{ title, author, file_url: publicUrl }])
        .select()
        .single();

      if (postError) throw postError;

      toast({
        title: "Success",
        description: "Article uploaded successfully",
      });

      if (onUploadSuccess && post) {
        onUploadSuccess(post);
      }

      setFile(null);
      setTitle('');
      setAuthor('');
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while uploading",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto p-6 bg-card rounded-lg shadow-lg border border-border"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">{t('blog.articleTitle')}</Label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            placeholder={t('blog.articleTitle')}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="author">{t('blog.authorName')}</Label>
          <Input
            id="author"
            type="text"
            value={author}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)}
            placeholder={t('blog.authorName')}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="file">{t('blog.wordFile')}</Label>
          <Input
            id="file"
            type="file"
            onChange={handleFileChange}
            accept=".doc,.docx"
            className="w-full"
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="me-2 h-4 w-4 animate-spin" />
              {t('blog.uploading')}
            </>
          ) : (
            <>
              <Upload className="me-2 h-4 w-4" />
              {t('blog.uploadArticle')}
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
};

export default FileUploadForm;
