import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Zap, Shield, Heart } from 'lucide-react';

const values = [
  {
    icon: <Lightbulb size={48} />,
    title: 'Innovation',
    description: 'We constantly explore new technologies and creative approaches to deliver forward-thinking solutions.',
    color: 'text-primary',
    hoverColor: 'rgba(56, 189, 248, 0.2)',
  },
  {
    icon: <Users size={48} />,
    title: 'Collaboration',
    description: 'We work closely with our clients, fostering partnerships built on trust and mutual success.',
    color: 'text-secondary',
    hoverColor: 'rgba(45, 212, 191, 0.2)',
  },
  {
    icon: <Target size={48} />,
    title: 'Results-Driven',
    description: 'Our focus is on delivering measurable outcomes that contribute to our clients\' growth and objectives.',
    color: 'text-accent',
    hoverColor: 'rgba(192, 132, 252, 0.2)',
  },
];

const whyChooseUs = [
  { icon: <Zap size={24} />, title: 'Fast Delivery', description: 'We deliver projects on time without compromising quality.' },
  { icon: <Shield size={24} />, title: 'Quality Guaranteed', description: 'Every project goes through rigorous quality checks.' },
  { icon: <Heart size={24} />, title: 'Client-Centric', description: 'Your vision is our priority. We listen, understand, and deliver.' },
];

const AboutPage = () => {
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
          About <span className="gradient-text">WDC</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          Discover the story, mission, and values that drive our creative & development powerhouse.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6 gradient-text">Our Journey</h2>
          <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
            WDC (World Development Creativity) was founded with a singular vision: to bridge the gap between cutting-edge development and groundbreaking creativity. We believe that the most impactful digital solutions are born at the intersection of technology and art.
          </p>
          <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
            Over the years, we've partnered with businesses of all sizes, from ambitious startups to established enterprises, helping them navigate the complexities of the digital landscape and achieve their strategic goals. Our passion for innovation and commitment to excellence are the cornerstones of our success.
          </p>
        </div>
        <div className="flex justify-center">
          <img className="rounded-xl shadow-2xl w-full max-w-md object-cover h-80" alt="WDC team collaborating in a modern office" src="https://images.unsplash.com/photo-1677506048148-0c914dd8197b" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 gradient-text">Our Core Values</h2>
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
        <h2 className="text-3xl font-bold text-center mb-10 gradient-text">Why Choose WDC?</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex items-start space-x-4 p-6 glassmorphism-card rounded-lg"
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
        <h2 className="text-3xl font-bold mb-4 gradient-text">Our Mission</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          To empower businesses worldwide with innovative digital solutions that combine cutting-edge technology with creative excellence. We strive to be the trusted partner that transforms ideas into impactful digital experiences, driving growth and success for every client we serve.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
