import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-muted-foreground hover:text-primary transition-colors"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon size={22} />
  </motion.a>
);

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/180bafe4ceac739ddb00d50f2cf54d6a.png";

  const socialLinks: SocialLinkProps[] = [
    { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  ];

  const quickLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/portfolio', label: t('nav.portfolio') },
    { to: '/blog', label: t('nav.blog') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const services = [
    t('footer.webDesign'),
    t('footer.socialMedia'),
    t('footer.seoAnalytics'),
    t('footer.digitalAds'),
    t('footer.brandingIdentity'),
    t('footer.videoProduction'),
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border/40 bg-background pt-12 pb-6"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logoUrl} alt="WDC Logo" className="h-10 w-10 object-contain" />
              <span className="font-bold text-xl gradient-text">WDC</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <SocialLink key={social.label} href={social.href} icon={social.icon} label={social.label} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.ourServices')}</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.contactInfo')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:w@wdc-c.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  w@wdc-c.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+201060630958" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +20 106 063 0958
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {t('footer.copyright')}
          </p>
          <p className="text-xs text-muted-foreground/70">
            {t('footer.motto')}
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
