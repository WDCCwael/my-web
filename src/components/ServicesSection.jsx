import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Code, Users, Film, Search, Palette, Megaphone, TrendingUp, MonitorSmartphone } from 'lucide-react';

const services = [
  { title: 'Website Design & Development', description: 'High-performance, SEO-optimized, and mobile-friendly websites that convert visitors into customers.', icon: <MonitorSmartphone size={40} className="text-primary" />, iconBg: 'bg-primary/10' },
  { title: 'Social Media Management', description: 'Engaging content strategies, community building, and targeted ad campaigns across all platforms.', icon: <Users size={40} className="text-secondary" />, iconBg: 'bg-secondary/10' },
  { title: 'Video Production', description: 'Cinematic brand storytelling and high-impact visuals that captivate your audience.', icon: <Film size={40} className="text-accent" />, iconBg: 'bg-accent/10' },
  { title: 'SEO & Marketing Analytics', description: 'Data-driven strategies to boost your search visibility and maximize conversions.', icon: <Search size={40} className="text-primary" />, iconBg: 'bg-primary/10' },
  { title: 'Branding & Identity', description: 'Unique logos, cohesive brand guidelines, and visual identities that leave lasting impressions.', icon: <Palette size={40} className="text-secondary" />, iconBg: 'bg-secondary/10' },
  { title: 'Digital Advertising', description: 'High-ROI campaigns on Google, Facebook, Instagram, TikTok and more platforms.', icon: <Megaphone size={40} className="text-accent" />, iconBg: 'bg-accent/10' },
  { title: 'Business Strategy & Growth', description: 'Market insights, brand positioning, and revenue optimization for sustainable growth.', icon: <TrendingUp size={40} className="text-primary" />, iconBg: 'bg-primary/10' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const ServicesSection = () => {
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
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Delivering innovation, creativity, and measurable results across a spectrum of digital services.
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
