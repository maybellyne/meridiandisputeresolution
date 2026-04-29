export interface ServiceRecord {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  body: string[];
  points: string[];
  neutralityNote: string;
}

export const services: ServiceRecord[] = [
  {
    slug: 'workplace',
    title: 'Workplace & Organizational Mediation',
    shortTitle: 'Workplace',
    description:
      'Structured, neutral mediation for workplace conflict, team breakdown, and organizational disputes.',
    body: [
      'Workplace conflict rarely resolves on its own. Left unaddressed, disputes between colleagues, between staff and leadership, or within teams erode trust, reduce productivity, and increase turnover. Formal HR processes can escalate tension rather than resolve it. Meridian provides a structured alternative — neutral, confidential, and focused on practical outcomes.',
      'We work with organizations, teams, and individuals navigating a range of workplace disputes. Our process is designed to bring structure to difficult conversations, identify shared interests beneath entrenched positions, and support parties in reaching agreements they can act on.',
    ],
    points: [
      'Leadership and management conflict',
      'Team breakdown and interpersonal disputes',
      'Formal workplace grievances',
      'Harassment and discrimination complaints',
      'Return-to-work facilitation',
      'Organizational restructuring conflict',
    ],
    neutralityNote:
      'Meridian does not represent either party and does not provide legal or HR advice. Organizations are encouraged to engage independent legal counsel in parallel where appropriate.',
  },
  {
    slug: 'family',
    title: 'Family & Separation Mediation',
    shortTitle: 'Family',
    description:
      'Neutral facilitation for separation, parenting arrangements, and family disputes — structured to protect relationships where possible.',
    body: [
      'Family disputes carry weight that most other conflicts do not. The decisions made during separation or family breakdown affect parenting, finances, housing, and long-term relationships. Litigation is costly, adversarial, and often damaging to the very relationships — particularly with children — that matter most. Mediation offers a structured alternative that keeps decision-making with the parties.',
      'Meridian provides neutral facilitation for families navigating separation, custody and parenting arrangements, property discussions, and broader family conflict. Sessions are structured to support productive dialogue, even in circumstances where direct communication has broken down.',
    ],
    points: [
      'Separation and divorce discussions',
      'Parenting plans and custody arrangements',
      'Property and asset division dialogue',
      'Co-parenting communication frameworks',
      'Extended family conflict',
      'Elder care and family decision-making',
    ],
    neutralityNote:
      'Meridian does not provide legal advice and does not act as counsel for either party. Independent legal review of any agreement reached is strongly recommended before signing.',
  },
  {
    slug: 'commercial',
    title: 'Commercial Dispute Mediation',
    shortTitle: 'Commercial',
    description:
      'Business dispute resolution focused on preserving operations, relationships, and confidentiality.',
    body: [
      'Commercial disputes can stall operations, strain business relationships, and generate significant legal cost — often with outcomes that satisfy neither party. Litigation is public, slow, and expensive. Arbitration can replicate many of those costs. Mediation offers a faster, private, and more flexible path to resolution that keeps control with the parties themselves.',
      'Meridian facilitates structured dialogue between business parties navigating contract, partnership, supplier, and operational disputes. Our approach is practical and focused: identify what each party needs to move forward, surface options neither party has yet considered, and support a negotiated outcome that preserves the working relationship where possible.',
    ],
    points: [
      'Contract interpretation and breach',
      'Partnership and shareholder disputes',
      'Supplier and vendor conflicts',
      'Franchise and licensing disagreements',
      'Operational and governance disputes',
      'Business relationship breakdown',
    ],
    neutralityNote:
      'Meridian does not act as legal counsel and does not provide legal advice. Commercial agreements reached through mediation should be reviewed by independent legal counsel before execution.',
  },
  {
    slug: 'estate',
    title: 'Estate & Inheritance Mediation',
    shortTitle: 'Estate',
    description:
      'Structured resolution for inheritance disputes, executor conflicts, and estate administration disagreements.',
    body: [
      'Estate disputes frequently arise during periods of grief, when family relationships are already under strain and decision-making capacity is at its lowest. Disagreements over the interpretation of a will, the conduct of an executor, or the distribution of assets can fracture families and generate legal costs that reduce the very estate being disputed. Early intervention through mediation can preserve both assets and relationships.',
      'Meridian provides a confidential, structured process for families, beneficiaries, and estate administrators navigating inheritance conflict. We do not take sides. Our role is to create the conditions for productive dialogue and support parties in reaching an agreement they can stand behind.',
    ],
    points: [
      'Inheritance and distribution disputes',
      'Will interpretation disagreements',
      'Executor and trustee conflicts',
      'Multi-beneficiary negotiations',
      'Estate administration disputes',
      'Family property and asset conflicts',
    ],
    neutralityNote:
      'Meridian does not provide legal or estate planning advice. Agreements reached through mediation should be reviewed by independent legal counsel before being finalized.',
  },
];
