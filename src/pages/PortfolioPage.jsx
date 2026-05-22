import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/e091e70f716442e8f2725b9c113bea53.jpg", alt: "Business Strategy Lightbulb", title: "Innovative Business Ideas", description: "Transforming ideas into actionable business strategies.", slug: "innovative-ideas" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/4ade32ab1a0a8022ea8999f15cb6b2d1.jpg", alt: "Financial Pie Chart with Chess Pieces", title: "Strategic Financial Planning", description: "Strategic planning for financial services and products.", slug: "strategic-finance" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/a2face32105138529239c4312c393710.jpg", alt: "Social Media Likes", title: "Social Media Campaign Success", description: "Achieving widespread engagement with viral social campaigns.", slug: "viral-campaigns" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/e0bc20a9edd514ac5f2cc004e576174f.jpg", alt: "Social Media Marketing on Phone Screen", title: "Mobile Social Marketing", description: "Optimizing social media marketing for mobile audiences.", slug: "mobile-social" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/788a90871d5138f3ea05fb164ca5aaa0.jpg", alt: "Data Analytics on Tablet", title: "Tablet Analytics Dashboard", description: "Interactive analytics dashboards for on-the-go insights.", slug: "tablet-analytics" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/62c590ce58b93f9bd8ba03654eb47927.jpg", alt: "Financial Reports and Calculator", title: "Financial Reporting Solutions", description: "Clear and concise financial reporting for businesses.", slug: "financial-reporting" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/7e3d72bca773c7da4312725441316389.jpg", alt: "Business Growth Chart Abstract", title: "Abstract Growth Visuals", description: "Representing business growth through abstract visuals.", slug: "abstract-growth" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/cc4668e6c71db15e46173f88de759202.jpg", alt: "Marketing Strategy on Tablet", title: "Digital Marketing Strategy", description: "Comprehensive digital marketing strategies for online success.", slug: "digital-strategy" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/36f54fdfc14d43488567da456dc06e71.jpg", alt: "Digital Marketing Icons", title: "Omnichannel Marketing", description: "Integrating multiple channels for a cohesive marketing approach.", slug: "omnichannel-marketing" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/39bd39fa98a1895f2f56949c7c65998d.jpg", alt: "Marketing Icons Circle", title: "Holistic Marketing Solutions", description: "Providing 360-degree marketing solutions for brands.", slug: "holistic-solutions" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/fda19b1e4586f2e0c4cb125bf65eb858.jpg", alt: "Website Launch Rocket Illustration", title: "Successful Website Launches", description: "Ensuring smooth and successful website launches.", slug: "website-launch" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/23f848cb7ad15819b92ba296e7261244.jpg", alt: "Digital Marketing Isometric", title: "Isometric Marketing Visuals", description: "Creative isometric designs for marketing materials.", slug: "isometric-marketing" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/9e0dc6da738620d20a6ecf83c3d36f64.jpg", alt: "Team Collaboration Illustration", title: "Collaborative Project Management", description: "Streamlining project management with collaborative tools.", slug: "project-collaboration" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/8ff0d17781fa46dbb334d48731fe5f2c.jpg", alt: "Social Media Interaction Illustration", title: "Community Building Online", description: "Building and nurturing online communities for brands.", slug: "community-building" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/021696e815800cc79d31a103929909b1.jpg", alt: "Mobile Marketing Illustration", title: "Mobile-First Marketing", description: "Designing marketing strategies with a mobile-first approach.", slug: "mobile-first" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/d22e810244e82a3750c0a112303cb538.jpg", alt: "PPC Campaign Illustration", title: "PPC Campaign Optimization", description: "Optimizing Pay-Per-Click campaigns for maximum ROI.", slug: "ppc-optimization" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/7cc8ef6bd49181a3d494cc35cee98f3b.jpg", alt: "Growth Arrow Illustration", title: "Accelerated Growth Strategies", description: "Implementing strategies for rapid business growth.", slug: "accelerated-growth" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/6899d73fedb22948943c7265382c6db4.jpg", alt: "Laptop Search Illustration", title: "Search Engine Dominance", description: "Helping businesses dominate search engine rankings.", slug: "search-dominance" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/60cc6082f10c894e30e944a09132cf46.jpg", alt: "Digital Word Cloud", title: "Digital Transformation", description: "Guiding businesses through digital transformation.", slug: "digital-transformation" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/d1dd4e110bccdb4f73d20d7ac8d9b394.jpg", alt: "Website URL on Screen", title: "Effective Web Presence", description: "Establishing a strong and effective online presence.", slug: "web-presence" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/b7ade0602657ac27e09d1865512e1fb4.jpg", alt: "Business Analytics Charts", title: "Advanced Business Analytics", description: "Providing advanced analytics for informed decision-making.", slug: "advanced-analytics" },
  { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/602dd964-0f57-4bc6-be2b-94708998e4a2/8723d016966dc4a7924653c9c0fb189b.jpg", alt: "Business Growth Graph", title: "Growth & Partnership", description: "Fostering growth through strategic partnerships and insights.", slug: "growth-partnership" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07, // Adjusted delay for more items
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const PortfolioPage = () => {
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
          Our <span className="gradient-text">Work</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore a selection of projects that showcase our commitment to creativity, innovation, and results.
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
              {item.src ? (
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-56 bg-muted flex items-center justify-center">
                  {/* This is a fallback for items without src, you might want a specific placeholder image */}
                  <img  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={item.alt} src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                </div>
              )}
              <CardContent className="p-5 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 flex-grow">{item.description}</p>
                {/* Link to a detailed project page can be added here if project detail pages are implemented */}
                {/* For now, it's a placeholder or could link to a modal */}
                <Button variant="link" className="text-primary p-0 self-start hover:text-accent mt-auto text-sm">
                  Learn More <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
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