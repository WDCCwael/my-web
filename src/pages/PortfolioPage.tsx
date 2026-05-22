import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const portfolioItems = [
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/cb21cda36e159d917e3875075197d44a.jpg", alt: "Facebook Likes Illustration", title: "Social Media Engagement", description: "Boosting likes and interactions on social platforms.", slug: "social-likes" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/67b33e1e7fd8680d2fa6a6442de99b8e.jpg", alt: "Marketing Campaign Illustration", title: "Targeted Ad Campaigns", description: "Crafting effective ad campaigns to reach specific audiences.", slug: "ad-campaigns" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/d1a278574ca308790a94ac8ec1d27b61.jpg", alt: "Email Marketing and Target Illustration", title: "Email Marketing Strategy", description: "Developing targeted email strategies for customer retention.", slug: "email-strategy" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/9e50b15d901d47536d7bb940f8c74462.jpg", alt: "Data Analytics Illustration", title: "Data-Driven Insights", description: "Utilizing analytics to inform marketing decisions and improve ROI.", slug: "data-insights" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/5cdbd84caaa605bdf879955a8d5ff135.jpg", alt: "Growth Percentage Illustration", title: "Business Growth Solutions", description: "Strategies focused on increasing business growth percentages.", slug: "business-growth" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/dd4e5fc7bfd861a291ef2b79f60ba9b2.jpg", alt: "Key to Success Illustration", title: "Strategic Key Solutions", description: "Providing key strategies for unlocking business potential.", slug: "key-solutions" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/afaf919d559981312178af7af5940c28.jpg", alt: "SEO Optimization Illustration", title: "SEO & Visibility", description: "Enhancing online visibility through advanced SEO techniques.", slug: "seo-visibility" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/be3f27da1088731ecbc53f42d1819c99.jpg", alt: "Lead Generation Illustration", title: "Lead Generation Magnet", description: "Attracting and capturing high-quality leads for businesses.", slug: "lead-generation" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/839fc1e2d1dce5135a5dbf6474bafce8.jpg", alt: "E-commerce Solution Illustration", title: "E-commerce Excellence", description: "Building and optimizing online stores for maximum sales.", slug: "ecommerce-excellence" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/31292a0b93a3e68c8aac8b91fc8097b9.jpg", alt: "Content Marketing Illustration", title: "Content Marketing Mastery", description: "Creating compelling content that engages and converts.", slug: "content-mastery" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/5c82ee3fbc9d74d695c4f154fddd0e6b.jpg", alt: "Financial Planning Chart", title: "Investment Strategy Visuals", description: "Visualizing complex financial data for investment strategies.", slug: "investment-visuals" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/fc9790caa428d22154391a910b1b854f.jpg", alt: "Financial Calculator Illustration", title: "Financial Tools Development", description: "Developing custom financial tools and calculators.", slug: "financial-tools" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const PortfolioPage: React.FC = () => {
  const { t } = useTranslation();

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
          {t('portfolio.pageHeading')} <span className="gradient-text">{t('portfolio.pageHeadingHighlight')}</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          {t('portfolio.pageSubheading')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.slug}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Card className="w-full flex flex-col glassmorphism-card overflow-hidden group transform transition-all duration-300 hover:shadow-2xl hover:border-primary h-full">
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <CardContent className="p-5 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 flex-grow">{item.description}</p>
                <Button variant="link" className="text-primary p-0 self-start hover:text-accent mt-auto text-sm">
                  {t('portfolio.learnMore')} <ArrowRight className="ms-1.5 h-3.5 w-3.5 rtl:rotate-180" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
