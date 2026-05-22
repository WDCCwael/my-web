import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { useToast } from '@/components/ui/use-toast';
import { Upload, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const FileUploadForm = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && (selectedFile.type === 'application/msword' || selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setFile(selectedFile);
    } else {
      toast({
        title: "خطأ في الملف",
        description: "يرجى اختيار ملف Word (.doc أو .docx)",
        variant: "destructive"
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !title || !author) {
      toast({
        title: "حقول مطلوبة",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      // Upload file to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const { data: fileData, error: fileError } = await supabase.storage
        .from('blog_documents')
        .upload(fileName, file);

      if (fileError) throw fileError;

      // Get public URL for the uploaded file
      const { data: { publicUrl } } = supabase.storage
        .from('blog_documents')
        .getPublicUrl(fileName);

      // Create blog post entry
      const { data: post, error: postError } = await supabase
        .from('blog_posts')
        .insert([
          {
            title,
            author,
            file_url: publicUrl,
          }
        ])
        .select()
        .single();

      if (postError) throw postError;

      toast({
        title: "تم التحميل بنجاح",
        description: "تم تحميل الملف وإنشاء المقال بنجاح",
      });

      if (onUploadSuccess) {
        onUploadSuccess(post);
      }

      // Reset form
      setFile(null);
      setTitle('');
      setAuthor('');
    } catch (error) {
      toast({
        title: "خطأ",
        description: "حدث خطأ أثناء تحميل الملف",
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
          <Label htmlFor="title">عنوان المقال</Label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="أدخل عنوان المقال"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="author">اسم الكاتب</Label>
          <Input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="أدخل اسم الكاتب"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="file">ملف Word</Label>
          <Input
            id="file"
            type="file"
            onChange={handleFileChange}
            accept=".doc,.docx"
            className="w-full"
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              جاري التحميل...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              تحميل المقال
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
};

export default FileUploadForm;