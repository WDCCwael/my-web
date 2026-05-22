import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = [
    { name: t('testimonials.t1Name'), role: t('testimonials.t1Role'), content: t('testimonials.t1Content'), rating: 5 },
    { name: t('testimonials.t2Name'), role: t('testimonials.t2Role'), content: t('testimonials.t2Content'), rating: 5 },
    { name: t('testimonials.t3Name'), role: t('testimonials.t3Role'), content: t('testimonials.t3Content'), rating: 5 },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {t('testimonials.heading')} <span className="gradient-text">{t('testimonials.headingHighlight')}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            {t('testimonials.subheading')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="glassmorphism-card h-full hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  <Quote size={32} className="text-primary/30 mb-4" />
                  <p className="text-muted-foreground mb-6 flex-grow italic leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
