import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Users, Target, Lightbulb, Zap, Shield, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <Lightbulb size={48} />,
      title: t('about.innovation'),
      description: t('about.innovationDesc'),
      color: 'text-primary',
      hoverColor: 'rgba(56, 189, 248, 0.2)',
    },
    {
      icon: <Users size={48} />,
      title: t('about.collaboration'),
      description: t('about.collaborationDesc'),
      color: 'text-secondary',
      hoverColor: 'rgba(45, 212, 191, 0.2)',
    },
    {
      icon: <Target size={48} />,
      title: t('about.resultsDriven'),
      description: t('about.resultsDrivenDesc'),
      color: 'text-accent',
      hoverColor: 'rgba(192, 132, 252, 0.2)',
    },
  ];

  const whyChooseUs = [
    { icon: <Zap size={24} />, title: t('about.fastDelivery'), description: t('about.fastDeliveryDesc') },
    { icon: <Shield size={24} />, title: t('about.qualityGuaranteed'), description: t('about.qualityGuaranteedDesc') },
    { icon: <Heart size={24} />, title: t('about.clientCentric'), description: t('about.clientCentricDesc') },
  ];

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
          {t('about.heading')} <span className="gradient-text">{t('about.headingHighlight')}</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          {t('about.subheading')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6 gradient-text">{t('about.journeyTitle')}</h2>
          <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
            {t('about.journeyP1')}
          </p>
          <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
            {t('about.journeyP2')}
          </p>
        </div>
        <div className="flex justify-center">
          <img className="rounded-xl shadow-2xl w-full max-w-md object-cover h-80" alt="WDC team collaborating in a modern office" src="https://images.unsplash.com/photo-1677506048148-0c914dd8197b" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 gradient-text">{t('about.coreValues')}</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="glassmorphism-card p-8 rounded-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5, boxShadow: `0px 10px 20px ${value.hoverColor}` }}
            >
              <div className={`mx-auto mb-4 ${value.color}`}>{value.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 gradient-text">{t('about.whyChoose')}</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex items-start gap-4 p-6 glassmorphism-card rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-3 bg-primary/10 rounded-full text-primary flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="text-center glassmorphism-card rounded-xl p-8 md:p-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4 gradient-text">{t('about.missionTitle')}</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {t('about.missionText')}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
