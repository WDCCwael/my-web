import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Code, Users, Film, Search, Palette, Megaphone, TrendingUp, MonitorSmartphone } from 'lucide-react';

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

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    { title: t('services.webDesign'), description: t('services.webDesignDesc'), icon: <MonitorSmartphone size={40} className="text-primary" />, iconBg: 'bg-primary/10' },
    { title: t('services.socialMedia'), description: t('services.socialMediaDesc'), icon: <Users size={40} className="text-secondary" />, iconBg: 'bg-secondary/10' },
    { title: t('services.videoProduction'), description: t('services.videoProductionDesc'), icon: <Film size={40} className="text-accent" />, iconBg: 'bg-accent/10' },
    { title: t('services.seo'), description: t('services.seoDesc'), icon: <Search size={40} className="text-primary" />, iconBg: 'bg-primary/10' },
    { title: t('services.branding'), description: t('services.brandingDesc'), icon: <Palette size={40} className="text-secondary" />, iconBg: 'bg-secondary/10' },
    { title: t('services.advertising'), description: t('services.advertisingDesc'), icon: <Megaphone size={40} className="text-accent" />, iconBg: 'bg-accent/10' },
    { title: t('services.strategy'), description: t('services.strategyDesc'), icon: <TrendingUp size={40} className="text-primary" />, iconBg: 'bg-primary/10' },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {t('services.heading')} <span className="gradient-text">{t('services.headingHighlight')}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            {t('services.subheading')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex"
            >
              <Card className="w-full flex flex-col glassmorphism-card hover:shadow-xl hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="items-center text-center">
                  <div className={`p-4 rounded-full ${service.iconBg} mb-4`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center">
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
