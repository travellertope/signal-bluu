import { useSEO } from "@/hooks/useSEO";

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
}

const SEO = (props: SEOProps) => {
    useSEO(props);
    return null;
};

export default SEO;
