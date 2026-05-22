import React from 'react';
import ServicesSection from '@/components/ServicesSection'; // Reusing the component
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ServicesSection />
      <div className="py-16 md:py-24 bg-background text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
                initial={{ opacity:0, y:20}}
                animate={{ opacity:1, y:0}}
                transition={{delay:0.2, duration:0.5}}
                className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 text-foreground"
            >
                Ready to Start Your Project?
            </motion.h2>
            <motion.p 
                initial={{ opacity:0, y:20}}
                animate={{ opacity:1, y:0}}
                transition={{delay:0.4, duration:0.5}}
                className="max-w-xl mx-auto text-lg text-muted-foreground mb-8"
            >
                Let WDC's expertise elevate your brand. Contact us today for a consultation and let's discuss how we can achieve your business goals together.
            </motion.p>
            <motion.div
                initial={{ opacity:0, y:20}}
                animate={{ opacity:1, y:0}}
                transition={{delay:0.6, duration:0.5}}
            >
                <Link to="/contact">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Get a Free Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </Link>
            </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;