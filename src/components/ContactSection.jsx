import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Rocket } from 'lucide-react';

const ContactSection = () => {
  const email = "w@wdc-c.com";
  const phone = "+201060630958";

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-card to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <Rocket size={48} className="mx-auto mb-4 text-primary" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Let’s Take Your Brand to <span className="gradient-text">New Heights</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg text-muted-foreground">
            Ready to transform your digital presence? Get in touch today!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto glassmorphism-card p-8 md:p-12 rounded-xl shadow-2xl"
        >
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Mail size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Email Us</h3>
                <a href={`mailto:${email}`} className="text-primary hover:underline break-all">
                  {email}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-secondary/10 rounded-full">
                <Phone size={24} className="text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Call Us</h3>
                <a href={`tel:${phone}`} className="text-secondary hover:underline">
                  {phone}
                </a>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 text-center"
          >
            {/* The form will be added here in a future step if requested by the user */}
             <a href={`mailto:${email}?subject=Inquiry%20from%20WDC%20Website&body=Hello%20WDC%20Team,%0D%0A%0D%0AI'd%20like%20to%20inquire%20about...`}>
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Send an Email Inquiry
                <Rocket className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;