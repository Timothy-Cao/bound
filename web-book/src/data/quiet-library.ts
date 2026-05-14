/**
 * The Quiet Library: SSDO-internal registry of trigger texts.
 * Officially does not exist. Maintained, per R18, as a private record
 * of documents identified as reliable Madeleine triggers.
 *
 * Most entries are heavily redacted. A few have partial descriptions
 * preserved by the reconstructor (Wei Han). The registry is presented
 * here as if Wei has reconstructed it from leaked partial sources.
 */

export interface QuietLibraryEntry {
  id: string;
  classification: string;
  dateAdded: string;
  /** Estimated mortality rate among credentialed readers, as documented in the leaked partial source. */
  mortalityRate: string;
  /** Brief description if available; "[REDACTED]" if not. */
  description: string;
  /** Wei's archivist note, if any. */
  archivistNote?: string;
}

export const quietLibraryEntries: QuietLibraryEntry[] = [
  {
    id: 'QL-001',
    classification: 'Restricted, §7.2(c), indefinite',
    dateAdded: 'September 14, 2067',
    mortalityRate: '0.8%',
    description: `Internal Memorandum, Office of Cognitive Rehabilitation, 14 September 2067. Four-signature classification decision regarding the phenomenon hereafter designated Triune Stimulus.`,
    archivistNote: `This is the document Marina Idris read on the morning of her death. The original was destroyed by the OMC after partial declassification in 2089. The reconstructed version appears in this archive as FILE 004. Anyone reading the reconstruction with the other components encoded should consider themselves at measurable risk.`,
  },
  {
    id: 'QL-002',
    classification: 'Restricted, §4.1(a)',
    dateAdded: 'May 7, 2070',
    mortalityRate: '1.2%',
    description: `Sensory Therapy: Foundational Principles. Anand et al., manuscript prepared for publication in Q2 2067, withdrawn at the recommendation of the Working Group. Original unpublished. Two photocopies survive, both held by the OMC.`,
    archivistNote: `I have not accessed this document. I have read summaries of its content in declassified reviews. The summaries themselves may be triggering. I have not included those summaries in this archive.`,
  },
  {
    id: 'QL-003',
    classification: 'Restricted, §7.2(b)',
    dateAdded: 'November 22, 2071',
    mortalityRate: '[REDACTED]',
    description: `[REDACTED]`,
    archivistNote: `Entry exists in the leaked partial registry. The content is not described. The classification suggests visual material rather than text. I do not know what it is.`,
  },
  {
    id: 'QL-004',
    classification: 'Restricted, §4.1(c) (literary)',
    dateAdded: 'February 2, 2074',
    mortalityRate: 'estimated 2.1% (retroactive)',
    description: `On the Composition of Calm. Novel, [author redacted], first published 2058. Retroactively added to the registry after a 2074 statistical review of reading-correlated mortality among book-club populations. Approximately seventeen hundred verified deaths attributable to credentialed reading between 2058 and 2074.`,
    archivistNote: `One of the great novels of its era. I read it when I was nineteen, before I understood what I was doing. I have not been able to find anyone who was certain of its title until I located the registry. The book was withdrawn from circulation in 2074. I do not have access to the surviving copies. I am told they are kept in a sealed wing of the Library of [REDACTED].`,
  },
  {
    id: 'QL-005',
    classification: 'Restricted, §7.4',
    dateAdded: 'June 18, 2074',
    mortalityRate: '[REDACTED]',
    description: `Sensory Therapy Protocols Manual, draft version, eldercare deployment. Internal use only. Restricted prior to publication.`,
    archivistNote: `The clinical staff who trained on the unredacted draft in late 2073 and early 2074 had a documented elevated mortality rate over the following three years. The pattern was not identified until 2076. The Manual was not officially classified until 2074. The interval between identification and classification was attributed by the OMC to administrative delay.`,
  },
  {
    id: 'QL-006',
    classification: 'Restricted, §7.2(c)',
    dateAdded: 'March 11, 2075',
    mortalityRate: '0.4%',
    description: `[REDACTED] (audio diary, recovered from estate of [REDACTED])`,
    archivistNote: `The entry suggests a recorded oral document rather than a written one. The Madeleine Effect operates through evocation rather than literal pattern, and audio recordings of evocative speech can serve as triggers. I do not know which specific recording this is.`,
  },
  {
    id: 'QL-007',
    classification: 'Restricted, §7.2(c)',
    dateAdded: 'September 30, 2075',
    mortalityRate: 'estimated 1.8%',
    description: `[REDACTED]`,
    archivistNote: `Entry redacted at the level of title. I have no information about this entry.`,
  },
  {
    id: 'QL-008',
    classification: 'Restricted, §4.1(c) (literary)',
    dateAdded: 'April 6, 2076',
    mortalityRate: '[REDACTED]',
    description: `[REDACTED]. Novel, pre-2050. Retroactively added to the registry after publisher-coordinated population review.`,
    archivistNote: `One of approximately fourteen pre-2070 novels added to the registry between 2074 and 2079. The publishing industry's relationship with the OMC during this period is opaque to me. I have not yet recovered records of the negotiations.`,
  },
  {
    id: 'QL-009',
    classification: 'Restricted, §7.4',
    dateAdded: 'July 23, 2076',
    mortalityRate: '3.0%',
    description: `[REDACTED] (cookbook). Restricted after a five-state mortality cluster correlated with home recipe reproduction.`,
    archivistNote: `This is the highest-mortality entry in the leaked partial registry that I have been able to identify. Three percent of credentialed readers. The Office attributed the cluster initially to a contaminated commercial broth base; revised attribution to the cookbook itself in late 2077.`,
  },
  {
    id: 'QL-010',
    classification: 'Restricted, §4.1(a)',
    dateAdded: 'December 14, 2077',
    mortalityRate: '[REDACTED]',
    description: `[REDACTED]`,
    archivistNote: `Entry exists. Nothing further available to me.`,
  },
  {
    id: 'QL-011',
    classification: 'Restricted, §7.2(c)',
    dateAdded: 'June 7, 2079',
    mortalityRate: 'estimated 0.6%',
    description: `Audio Diary, K. Olesen, personal recording dated November 17, 2080.`,
    archivistNote: `Yes. This entry was added to the registry within months of Karl Olesen's death. The recording was released to the public archive in 2086, partially redacted at the widow's request. The redacted version appears in this archive as FILE 012. The transcription you read in the archive is not the full recording. The full recording, by the OMC's determination, kills approximately 0.6 percent of its credentialed listeners. The transcript is somewhat less lethal. I do not know by how much.`,
  },
  {
    id: 'QL-012',
    classification: 'Restricted, §7.2(c)',
    dateAdded: 'February 28, 2086',
    mortalityRate: 'pending review',
    description: `*The Archive of Bound* (partial, public release). Online publication, W. Han, archivist. Added to the registry on technical grounds; mortality assessment pending population review.`,
    archivistNote: `Yes. The archive you are currently reading appears on the OMC's internal registry. The classification is a formal acknowledgment that material in this archive may trigger evoked completion in some readers. The mortality estimate is not yet finalized. I cannot tell you what it will be when it is. I can tell you that I have read the archive multiple times, that I am still alive, and that nothing I have included was something I felt I could responsibly remove. The reader who has reached this entry has presumably already made their own choice about reading. I trust their judgment more than I trust my own.`,
  },
];
