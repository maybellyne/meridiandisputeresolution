const SITE_NAME = 'Meridian Dispute Resolution';
const SITE_URL = 'https://meridiandisputeresolution.ca';

export interface SEOMeta {
  title: string;
  description: string;
  canonical: string;
}

export function seo(title: string, description: string, path: string = '/'): SEOMeta {
  return {
    title: title === SITE_NAME ? SITE_NAME : `${title} | ${SITE_NAME}`,
    description,
    canonical: `${SITE_URL}${path}`,
  };
}
