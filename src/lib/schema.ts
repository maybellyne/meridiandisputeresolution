import type { ServiceRecord } from '../content/services';
import type { FAQRecord } from '../content/faq';

const SITE_URL = 'https://meridiandisputeresolution.ca';

const PROVIDER = {
  '@type': 'Organization' as const,
  name: 'Meridian Dispute Resolution Inc',
  url: SITE_URL,
  areaServed: 'Canada',
  address: {
    '@type': 'PostalAddress' as const,
    addressRegion: 'SK',
    addressCountry: 'CA',
  },
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  ...PROVIDER,
};

export function serviceSchema(service: ServiceRecord) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: PROVIDER,
    areaServed: {
      '@type': 'Place',
      name: 'Saskatchewan, Canada',
    },
    serviceType: 'Mediation',
  };
}

export function faqPageSchema(items: FAQRecord[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: String(item.a),
      },
    })),
  };
}