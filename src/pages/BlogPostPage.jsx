import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, UserCircle, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Dummy data - in a real app, this would come from an API or CMS
const blogPostsData = {
  "the-future-of-web-design": {
    title: "The Future of Web Design: Trends to Watch in 2025",
    date: "2025-04-15",
    author: "Jane Doe, Lead Designer",
    category: "Web Design",
    imagePlaceholder: "Abstract futuristic web design elements with vibrant colors",
    content: `
      <p class="mb-4 text-lg leading-relaxed">The digital landscape is in a constant state of flux, and web design is no exception. As we look towards 2025, several exciting trends are poised to redefine how we interact with websites and digital platforms. At WDC, we're always at the forefront of these changes, ensuring our clients benefit from the latest innovations.</p>
      <h2 class="text-2xl font-semibold my-6 gradient-text">1. AI-Powered Personalization</h2>
      <p class="mb-4 text-lg leading-relaxed">Artificial Intelligence will play an even more significant role in tailoring user experiences. Expect websites that adapt content, layouts, and recommendations in real-time based on individual user behavior and preferences. This means a more relevant and engaging journey for every visitor.</p>
      <img  class="my-8 rounded-lg shadow-xl w-full h-auto object-cover" alt="AI brain interface graphic" src="https://images.unsplash.com/photo-1677696795198-5ac0e21060ed" />
      <h2 class="text-2xl font-semibold my-6 gradient-text">2. Immersive 3D and AR Experiences</h2>
      <p class="mb-4 text-lg leading-relaxed">The line between the digital and physical worlds will continue to blur. Advances in WebGL, WebXR, and other technologies will make it easier to integrate 3D elements and Augmented Reality (AR) features directly into websites. This is particularly exciting for e-commerce, virtual tours, and interactive storytelling.</p>
      <h2 class="text-2xl font-semibold my-6 gradient-text">3. Sustainable and Ethical Design</h2>
      <p class="mb-4 text-lg leading-relaxed">There's a growing awareness of the environmental and social impact of digital technologies. Expect a greater emphasis on "green" web design – optimizing for lower energy consumption, using dark modes by default, and choosing eco-friendly hosting. Ethical considerations, such as data privacy and accessibility, will also be paramount.</p>
      <img  class="my-8 rounded-lg shadow-xl w-full h-auto object-cover" alt="Green leaf on a computer screen" src="https://images.unsplash.com/photo-1558052643-9a9e9ea8e50a" />
      <h2 class="text-2xl font-semibold my-6 gradient-text">4. Microinteractions and Advanced Animations</h2>
      <p class="mb-4 text-lg leading-relaxed">Subtle yet meaningful microinteractions will continue to enhance user engagement. Think delightful hover effects, smooth page transitions, and intuitive feedback for user actions. Advanced animations, powered by libraries like Framer Motion, will create more dynamic and expressive interfaces.</p>
      <p class="mt-8 text-lg leading-relaxed">Staying ahead of these trends is key to creating impactful digital experiences. At WDC, we're excited to explore these possibilities and help our clients build the websites of tomorrow, today.</p>
    `
  },
  "mastering-social-media-engagement": {
    title: "Mastering Social Media Engagement: A WDC Guide",
    date: "2025-03-28",
    author: "John Smith, Social Media Strategist",
    category: "Social Media",
    imagePlaceholder: "Network of connected social media icons glowing",
    content: `
      <p class="mb-4 text-lg leading-relaxed">In today's hyper-connected world, simply having a social media presence isn't enough. True success lies in fostering genuine engagement – creating meaningful interactions that build brand loyalty and drive results. This guide from WDC will equip you with strategies to master social media engagement.</p>
      <h2 class="text-2xl font-semibold my-6 gradient-text">1. Know Your Audience Deeply</h2>
      <p class="mb-4 text-lg leading-relaxed">Before you can engage, you must understand. Dive deep into your audience demographics, interests, pain points, and online behaviors. What platforms do they frequent? What content resonates with them? Use analytics tools and conduct surveys to gather these insights.</p>
      <img  class="my-8 rounded-lg shadow-xl w-full h-auto object-cover" alt="Diverse group of people on social media" src="https://images.unsplash.com/photo-1581455462040-83e5b78aa087" />
      <h2 class="text-2xl font-semibold my-6 gradient-text">2. Create Valuable, Shareable Content</h2>
      <p class="mb-4 text-lg leading-relaxed">Content is king, but engagement is queen. Focus on creating content that provides real value – whether it's educational, entertaining, or inspiring. Think visually appealing graphics, informative articles, engaging videos, and interactive polls or quizzes. Make it easy for your audience to share your content.</p>
      <h2 class="text-2xl font-semibold my-6 gradient-text">3. Foster Two-Way Conversations</h2>
      <p class="mb-4 text-lg leading-relaxed">Social media is not a monologue; it's a dialogue. Respond to comments and messages promptly and authentically. Ask questions to encourage participation. Run Q&A sessions with experts. Show your audience that you're listening and that their opinions matter.</p>
      <img  class="my-8 rounded-lg shadow-xl w-full h-auto object-cover" alt="Speech bubbles indicating conversation" src="https://images.unsplash.com/photo-1696041752094-1be601b7053f" />
      <h2 class="text-2xl font-semibold my-6 gradient-text">4. Leverage User-Generated Content (UGC)</h2>
      <p class="mb-4 text-lg leading-relaxed">Encourage your audience to create content related to your brand. UGC is authentic, trustworthy, and a powerful way to build community. Run contests, create branded hashtags, and showcase customer stories or photos.</p>
      <p class="mt-8 text-lg leading-relaxed">By implementing these strategies, you can transform your social media channels from mere broadcast platforms into vibrant hubs of community and engagement. WDC is here to help you craft and execute a winning social media strategy.</p>
    `
  },
   "seo-secrets-for-business-growth": {
    title: "SEO Secrets for Sustainable Business Growth",
    date: "2025-03-10",
    author: "Alice Brown, SEO Specialist",
    category: "SEO",
    imagePlaceholder: "Magnifying glass over a glowing search results page",
    content: `
      <p class="mb-4 text-lg leading-relaxed">Search Engine Optimization (SEO) is the cornerstone of online visibility and sustainable business growth. In a digital marketplace teeming with competition, appearing on the first page of search results can be a game-changer. This WDC insight delves into key SEO secrets to help your business thrive.</p>
      <h2 class="text-2xl font-semibold my-6 gradient-text">1. Content is Still King, but Context is Queen</h2>
      <p class="mb-4 text-lg leading-relaxed">High-quality, relevant content remains crucial. However, search engines are increasingly sophisticated, prioritizing content that demonstrates expertise, authoritativeness, and trustworthiness (E-A-T). Focus on creating comprehensive content that thoroughly answers user queries and provides unique value. Understand user intent behind keywords, not just the keywords themselves.</p>
      <img  class="my-8 rounded-lg shadow-xl w-full h-auto object-cover" alt="Content creation process with keywords" src="https://images.unsplash.com/photo-1592441306630-1902ebe76b6f" />
      <h2 class="text-2xl font-semibold my-6 gradient-text">2. Technical SEO: The Unsung Hero</h2>
      <p class="mb-4 text-lg leading-relaxed">A technically sound website is vital for SEO. This includes optimizing site speed, ensuring mobile-friendliness, implementing structured data markup, having a clear site architecture, and managing crawlability and indexability. Regular technical audits can uncover issues hindering your performance.</p>
      <h2 class="text-2xl font-semibold my-6 gradient-text">3. The Power of High-Quality Backlinks</h2>
      <p class="mb-4 text-lg leading-relaxed">Backlinks from reputable and relevant websites act as votes of confidence for search engines. Focus on earning natural, high-quality links through great content, outreach, and building relationships. Avoid spammy link-building tactics, as they can harm your rankings.</p>
      <img  class="my-8 rounded-lg shadow-xl w-full h-auto object-cover" alt="Network of interconnected websites showing backlinks" src="https://images.unsplash.com/photo-1695445496726-47afb87e7c4d" />
      <h2 class="text-2xl font-semibold my-6 gradient-text">4. Local SEO for Local Businesses</h2>
      <p class="mb-4 text-lg leading-relaxed">If you serve a local clientele, optimizing for local search is essential. This involves claiming and optimizing your Google Business Profile, building local citations, encouraging customer reviews, and creating location-specific content.</p>
      <p class="mt-8 text-lg leading-relaxed">SEO is an ongoing process, not a one-time task. By consistently applying these principles and adapting to algorithm changes, your business can achieve higher rankings, attract more organic traffic, and achieve sustainable growth. WDC's SEO experts are ready to guide you on this journey.</p>
    `
  },
  "the-power-of-video-storytelling": {
    title: "The Power of Video Storytelling in Modern Marketing",
    date: "2025-02-20",
    author: "Mike Green, Head of Video Production",
    category: "Video Production",
    imagePlaceholder: "Film reel and play button icon with dynamic background",
    content: `
      <p class="mb-4 text-lg leading-relaxed">In an era of information overload, capturing and retaining audience attention is more challenging than ever. Video storytelling has emerged as a uniquely powerful tool for brands to cut through the noise, connect on an emotional level, and drive meaningful action. At WDC, we harness the art and science of video to tell your brand's story.</p>
      <h2 class="text-2xl font-semibold my-6 gradient-text">1. Videos Evoke Emotion and Build Connection</h2>
      <p class="mb-4 text-lg leading-relaxed">Humans are wired for stories. Videos, with their combination of visuals, sound, and narrative, can evoke powerful emotions far more effectively than text or static images alone. A well-crafted brand story can foster empathy, build trust, and create a lasting connection with your audience.</p>
      <img  class="my-8 rounded-lg shadow-xl w-full h-auto object-cover" alt="People watching an emotional video on a screen" src="https://images.unsplash.com/photo-1541848756149-e3843fcbbde0" />
      <h2 class="text-2xl font-semibold my-6 gradient-text">2. Increased Engagement and Shareability</h2>
      <p class="mb-4 text-lg leading-relaxed">Video content consistently sees higher engagement rates across all digital platforms. People are more likely to watch, like, comment on, and share videos. This organic reach can significantly expand your brand's visibility and attract new audiences.</p>
      <h2 class="text-2xl font-semibold my-6 gradient-text">3. Improved Information Retention</h2>
      <p class="mb-4 text-lg leading-relaxed">Viewers retain significantly more information from a video compared to text. Complex ideas, product features, or service benefits can be explained more clearly and memorably through video, leading to better understanding and recall.</p>
      <img  class="my-8 rounded-lg shadow-xl w-full h-auto object-cover" alt="Brain processing information from a video" src="https://images.unsplash.com/photo-1579623003002-841f9dee24d0" />
      <h2 class="text-2xl font-semibold my-6 gradient-text">4. Boosts Conversions and ROI</h2>
      <p class="mb-4 text-lg leading-relaxed">Strategically placed videos, such as product demos, customer testimonials, or explainer videos, can significantly influence purchasing decisions. Including videos on landing pages can increase conversion rates, and video ads often yield a higher return on investment (ROI) compared to other ad formats.</p>
      <p class="mt-8 text-lg leading-relaxed">From concept development and scripting to filming and post-production, WDC's video production team creates high-impact visual narratives that resonate with your target audience and achieve your marketing objectives. Let's tell your story.</p>
    `
  }
};


const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPostsData[slug];

  if (!post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h1 className="text-4xl font-bold text-destructive mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">Sorry, the blog post you are looking for does not exist.</p>
        <Link to="/blog">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link to="/blog">
            <Button variant="ghost" className="text-primary hover:text-accent mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Posts
            </Button>
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-foreground leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center space-x-4 text-sm text-muted-foreground mb-2">
            <div className="flex items-center">
              <CalendarDays size={16} className="mr-1.5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <UserCircle size={16} className="mr-1.5" />
              <span>By {post.author}</span>
            </div>
            <div className="flex items-center">
              <Tag size={16} className="mr-1.5" />
              <span>{post.category}</span>
            </div>
          </div>
        </div>

        <div className="w-full h-72 md:h-96 rounded-lg overflow-hidden mb-10 shadow-lg bg-muted">
           <img  class="w-full h-full object-cover" alt={post.title} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
        </div>
        
        <div
          className="prose prose-lg dark:prose-invert max-w-none text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 border-t border-border pt-8 text-center">
            <p className="text-muted-foreground mb-4">Enjoyed this article? Share it with your network!</p>
            {/* Add social sharing buttons here if needed */}
            <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Have Questions? Contact Us
                </Button>
            </Link>
        </div>
      </article>
    </motion.div>
  );
};

export default BlogPostPage;