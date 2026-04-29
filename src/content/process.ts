export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Free Initial Consultation',
    description:
      'A structured 30-minute conversation — by phone or video — to assess your situation, confirm that mediation is appropriate, and explain how the process works. There is no obligation to proceed, and no fee for this session. Meridian will be direct with you if your matter is not well-suited to mediation.',
  },
  {
    number: 2,
    title: 'Preparation',
    description:
      'Once parties have agreed to proceed, Meridian sends each party a preparation framework: an outline of what to expect, questions to consider in advance, and any documents relevant to the session. This preparation is what separates a structured process from an unstructured conversation.',
  },
  {
    number: 3,
    title: 'Mediation Sessions',
    description:
      'Sessions are facilitated by a neutral mediator who has no stake in the outcome. Depending on the dispute, sessions may be conducted jointly, separately (caucus format), or in a combination of both. The mediator guides discussion — not toward a predetermined answer, but toward an outcome the parties themselves can reach and accept.',
  },
  {
    number: 4,
    title: 'Resolution Framework',
    description:
      'Where agreement is reached, Meridian documents the terms in a written resolution framework. This is not a legal contract — it is a clear record of what was agreed. Parties are encouraged to have independent legal counsel review the document before signing. Where no agreement is reached, all legal rights are preserved.',
  },
];
