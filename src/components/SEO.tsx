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
  title = "Humans of Origin - Authentic Stories from Around the World",
  description = "Discover authentic human experiences and cultural stories from diverse backgrounds. Explore identity, heritage, and connection through real narratives from around the globe.",
  keywords = "human stories, cultural identity, heritage, diversity, authentic narratives, global community",
  image = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=630&fit=crop",
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