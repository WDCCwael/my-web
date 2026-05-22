import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';

const portfolioImages = [
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/cb21cda36e159d917e3875075197d44a.jpg", alt: "Facebook Likes Illustration", titleKey: "Social Media Boost" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/67b33e1e7fd8680d2fa6a6442de99b8e.jpg", alt: "Marketing Campaign Illustration", titleKey: "Targeted Campaigns" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/d1a278574ca308790a94ac8ec1d27b61.jpg", alt: "Email Marketing and Target Illustration", titleKey: "Email Strategy" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/9e50b15d901d47536d7bb940f8c74462.jpg", alt: "Data Analytics Illustration", titleKey: "Analytics Driven" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/5cdbd84caaa605bdf879955a8d5ff135.jpg", alt: "Growth Percentage Illustration", titleKey: "Business Growth" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/dd4e5fc7bfd861a291ef2b79f60ba9b2.jpg", alt: "Key to Success Illustration", titleKey: "Strategic Solutions" },
];

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const PortfolioPreviewSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {t('portfolio.heading')} <span className="gradient-text">{t('portfolio.headingHighlight')}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            {t('portfolio.subheading')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioImages.slice(0, 6).map((image, index) => ( 
            <motion.div
              key={index}
              custom={index}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="overflow-hidden glassmorphism-card group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-0 relative">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{image.titleKey}</h3>
                    <Link to="/portfolio">
                      <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-black">
                        <Eye className="me-2 h-4 w-4" /> {t('portfolio.viewMore')}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <Link to="/portfolio">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {t('portfolio.viewFullPortfolio')}
              <Eye className="ms-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreviewSection;
