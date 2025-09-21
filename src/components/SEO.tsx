import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = "Humans of Origin - Authentic Stories from Kerala, India",
  description = "Discover authentic human experiences and cultural stories from Kerala, India. Explore Malayalam heritage, backwaters culture, and personal narratives from God's Own Country.",
  keywords = "Kerala stories, Malayalam culture, Kerala heritage, South India narratives, backwaters culture, Kerala traditions, Indian stories",
  image = "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=630&fit=crop",
  url = "https://origin-tales-unfold.lovable.app/",
  type = "website"
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;