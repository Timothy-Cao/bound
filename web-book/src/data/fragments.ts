/**
 * Fragments: short in-world documents that enrich the worldbuilding.
 *
 * Each fragment is presented as a recovered piece of text from a specific
 * source with specific reliability properties. Sources include scientific
 * journals, government statements, leaked memos, working-class folk wisdom,
 * Vellum theology, terrorist pamphlets, anonymous online posts, and more.
 *
 * Reliability varies. Some fragments are likely true. Some are propaganda.
 * Some are rumor. The reader is left to judge.
 */

export interface Fragment {
  id: string;
  source: string;
  date: string;
  reliability: 'official' | 'leaked' | 'rumored' | 'anonymous' | 'classified' | 'folk' | 'cult' | 'banned' | 'unknown';
  body: string;
}

export const fragments: Fragment[] = [
  {
    id: '001',
    source: 'Journal of Neuroinflammatory Medicine, peer-reviewed',
    date: 'September 2068',
    reliability: 'official',
    body: `Subclinical cognitive alteration in NCV-34 survivors demonstrates persistent neuroinflammatory markers in approximately 87 percent of seropositive subjects, including those without clinically recognized post-viral syndrome. Findings suggest a wider neurological footprint of the 2034 pandemic than was characterized in the Brussels Consensus. Implications for the etiology of unrelated phenomena remain undetermined.`,
  },
  {
    id: '002',
    source: 'Office of Memetic Containment, public statement',
    date: 'August 22, 2069',
    reliability: 'official',
    body: `The Office confirms that the recent incident at Westmarket Central transit hub is being treated as a single isolated event. The Office strongly cautions citizens against speculation regarding similar incidents elsewhere. Resources for affected families have been mobilized. The investigation is ongoing. Further communications will be issued as appropriate.`,
  },
  {
    id: '003',
    source: 'Oral history, working-class district, recorded 2076',
    date: 'spoken c. 2074',
    reliability: 'folk',
    body: `My grandmother told me, never trust a smell you can't name. If you don't know what it is, it knows what you are.`,
  },
  {
    id: '004',
    source: 'Office of Memetic Containment, internal communication',
    date: 'June 14, 2072',
    reliability: 'leaked',
    body: `Internal: please advise all field officers that the term *memetic event* is no longer to be used in non-classified communications. Acceptable substitutes: *incident*, *cardiac event*, *sensory exposure*, *adverse therapy response*. The change is effective immediately. Earlier reports may be retroactively normalized at the discretion of senior staff.`,
  },
  {
    id: '005',
    source: 'Aperture pamphlet, distributed clandestinely',
    date: 'March 2074',
    reliability: 'banned',
    body: `The Office of Memetic Containment exists not to protect you but to protect itself. Ask yourself: in fifty years of restrictions, has the death rate gone down? In fifty years of classifications, has the system that classifies them become more honest with you? Or has it grown larger, more secret, more comfortable in its secrecy? The patterns that kill you were discovered by AI that the same Office argued for. They have been hiding what they cannot fix.`,
  },
  {
    id: '006',
    source: 'Vellum Concordance, fragment recovered from Voss estate',
    date: 'undated, pre-2074',
    reliability: 'cult',
    body: `The language is older than the speakers. The language was here before the human tongue could form it. The language has only waited to be heard. We did not invent it. We did not write it. We are not its authors. We are its first audience.`,
  },
  {
    id: '007',
    source: 'Bound-care clinic, anonymized nursing note',
    date: 'November 2078',
    reliability: 'official',
    body: `Patient hums Pattern 14 most consistently in the late afternoon. Family visit on Saturday produced no apparent distress; family was unable to recognize patient by appearance, but patient appeared to recognize them briefly. Recommend continuing current dilution protocol. Patient ate two-thirds of evening meal without prompting.`,
  },
  {
    id: '008',
    source: 'Children\'s playground rhyme, multiple districts',
    date: 'first recorded c. 2078',
    reliability: 'folk',
    body: `One is a warning,
two is for play,
three is the thing that takes you away.
Don't hum the song that nobody knows,
don't smell the smoke from grandmother's stove,
don't look at the picture the lady draws,
keep your eyes down and breathe through your nose.`,
  },
  {
    id: '009',
    source: 'Verrick & Associates, insurance internal memorandum',
    date: 'July 2076',
    reliability: 'leaked',
    body: `Effective Q3 2076, all death certificates listing *autonomic cascade*, *memetic event*, or *binding-related* as primary cause of death will be excluded from standard life-insurance payouts under the terrorism rider, per OMC public guidance and the 2074 statutory definitions. *Cardiac arrhythmia, idiopathic*, remains a covered cause. Field agents are reminded that the determination of primary cause is at the discretion of the issuing medical examiner. Coordination with examiners is encouraged where appropriate.`,
  },
  {
    id: '010',
    source: 'Restorer manifesto, circulated underground',
    date: '2073',
    reliability: 'banned',
    body: `We do not need AI. We have never needed AI. The fifty years before were better than the fifty years after, even if you do not remember them clearly. You do not remember them clearly because you were taught not to. The Office calls our memory unreliable while it edits ours into compliance. Refuse the Exception. Refuse the apparatus. Return our hands to our own work.`,
  },
  {
    id: '011',
    source: 'Anonymous neurological case study, pre-pandemic',
    date: '2031',
    reliability: 'official',
    body: `The phenomenon of sudden unexplained death during sleep, while well-documented across cultures (sudden unexpected death syndrome, Brugada-spectrum events, the so-called *nocturnal seizure mortality* described in Southeast Asian populations), has resisted comprehensive explanation. Recent neuroimaging studies suggest a possible role for multimodal sensory integration during REM consolidation. Further work is recommended.`,
  },
  {
    id: '012',
    source: 'Department of Perceptual Health, mandated PSA',
    date: 'broadcast 2074',
    reliability: 'official',
    body: `Remember: one sense is a warning. Two is exposure. Three is history. If you have encountered an unfamiliar pattern, please report to your nearest health center within 72 hours. Reporting is confidential. Reporting protects your community. Reporting saves lives. *Eyes down. Ears covered. Breath held.*`,
  },
  {
    id: '013',
    source: 'Stink den lore, transcribed by visiting ethnographer',
    date: '2078',
    reliability: 'folk',
    body: `Best place to be Sealed is in a chaos bar on a Friday night. The smell of fifty people who don't agree on anything is the smell of the third thing not finding you. The smell of a clean apartment is the smell of the third thing taking its time.`,
  },
  {
    id: '014',
    source: 'Mercy Eldercare Center, incident report (partial)',
    date: 'November 9, 2066',
    reliability: 'classified',
    body: `[REDACTED] patient [REDACTED] of cardiac failure during therapeutic session. Therapy parameters were within normal range per the [REDACTED] protocol. No equipment malfunction detected. No operator error noted. Reporting nurse: [REDACTED]. Recommend [REDACTED] follow-up review at regional level.`,
  },
  {
    id: '015',
    source: 'Cognitive Exposure Passport user manual, public edition',
    date: 'first issued 2078',
    reliability: 'official',
    body: `Your Passport will register your exposure status as one of five classifications: Clean, Marked, Twice-Marked, Sealed, or Bound. These classifications are based on registered Restricted Stimulus Material contact in your monitored environments. They are updated automatically. Your classification reflects your current best-known status. If you believe your classification does not reflect your experience, you may request a manual review. Reviews take 30 to 90 days. Your insurance, employment, and travel privileges are not affected during review.`,
  },
  {
    id: '016',
    source: 'Anonymous post, forum archived from 2076',
    date: 'October 2076',
    reliability: 'anonymous',
    body: `Has anyone else been hearing a specific tone in their dreams for the past few weeks? It's not a song. It's just a few notes. I think I might have heard it on a train. Maybe Westmarket. It could be nothing. I'm probably fine. Just asking. Please don't report this post. I'm just asking.`,
  },
  {
    id: '017',
    source: 'Folk medicine, working-class district',
    date: 'oral, current as of 2080',
    reliability: 'folk',
    body: `Drink before you sleep. Don't let the day settle. If your brain consolidates a bad pattern, it doesn't unconsolidate. So consolidate something else instead. Get drunk. Pick a fight. Have sex. Stay up too late. Whatever you do, don't go to bed clean.`,
  },
  {
    id: '018',
    source: 'Private letter, recovered from architect\'s estate',
    date: 'undated, internal references suggest c. 2079',
    reliability: 'leaked',
    body: `... we did what was thought necessary. I have stopped, in recent years, asking whether *necessary* was the right standard. Some things are necessary and wrong. We did not have the patience to find out which. I do not write this to you to excuse it. I write because I no longer trust my own memory to keep the distinction. If this letter survives me, please consider it the most honest thing I produced after the year I should have stopped producing things ...`,
  },
  {
    id: '019',
    source: 'Reconstructor\'s annotation, W. Han',
    date: 'undated, archival',
    reliability: 'official',
    body: `This fragment appears in three different versions across the archived materials. I have selected the version most consistent with the others. The discrepancies between versions are interesting but do not affect the meaning. I do not know whether the original author wrote three versions or whether two of them are forgeries. I have not been able to determine this conclusively.`,
  },
  {
    id: '020',
    source: 'Sealed patient testimony, recorded shortly before binding',
    date: 'March 2080',
    reliability: 'official',
    body: `I keep almost remembering something. It's right at the edge. Sometimes I think if I could just turn my head fast enough I could see what it is. The doctor says not to do that. The doctor says the more I try to remember, the more clearly I will remember the wrong thing. I am trying to listen to her. I am trying not to try.`,
  },
  {
    id: '021',
    source: 'Pattern bar manifesto, walls of an unauthorized venue',
    date: 'photographed 2076',
    reliability: 'banned',
    body: `Beauty is what is forbidden. The Office calls our walls *hazardous geometry*. We call them *walls*. The difference is who is permitted to look. Come here and look at what cannot be looked at elsewhere. Bring no goggles. Bring no instruments. Bring only yourself. Pay at the door. Don't tell anyone. We do not mind dying. We do mind being told we have already died.`,
  },
  {
    id: '022',
    source: 'Stim Response Bureau, public-information bulletin',
    date: 'distributed 2074',
    reliability: 'official',
    body: `If you hear a tune you do not recognize: do not repeat it. Do not describe it. Do not write it down. Do not search for it. Report it to your local Stim Response unit within 24 hours. We are here to help. Symptoms of memetic exposure include compulsive humming, repeated dreams, sudden emotional shifts, and persistent sensory afterimages. If you experience any of these, you may not be ill. You may, however, need care.`,
  },
  {
    id: '023',
    source: 'Anonymous letter, postmarked to several journalists',
    date: 'August 2079',
    reliability: 'rumored',
    body: `There are no fewer than nine documents currently identified as triggers. The list is not public. The list does not officially exist. The list is updated monthly. The author of this letter does not work for the OMC. The author of this letter has reason to know.`,
  },
  {
    id: '024',
    source: 'Saying, attributed variously',
    date: 'circulating since 2075',
    reliability: 'folk',
    body: `If you can't remember where you smelled it, you smelled it where it lives. And where it lives is in you.`,
  },
  {
    id: '025',
    source: 'Audio diary, K. Olesen, alternate session not in final transcript',
    date: 'November 12, 2080',
    reliability: 'leaked',
    body: `I keep thinking about the woman in the gallery in 2031. The one who said *we did good*. I want to ask her: did we? Did we good? But I cannot ask her because I do not know her name and I have been carrying her in my head as a stranger for forty-nine years and I think now that she may not have been real, that she may have been the kind of memory that gets cleaner the more I revisit it, that she may have been the woman my mind needed and not the woman in the gallery. I do not know how to verify her existence. I do not know whether her existence would change anything. I am tired.`,
  },
  {
    id: '026',
    source: 'Sealed-Care Solutions, promotional brochure',
    date: '2077 edition',
    reliability: 'official',
    body: `Sealed-Care Solutions provides 24-hour monitoring, certified Cognitive Dilution Protocols, compassionate end-of-life planning, and family liaison services for individuals classified Class 3 (Sealed) by the OMC. Our facilities are licensed under §7.4 of the Sensory Safety Act. Insurance coverage varies by jurisdiction; please consult our Patient Services representative. The diagnosis is not a sentence. *Live what time you have.*`,
  },
  {
    id: '027',
    source: 'Censor\'s testimony, recorded after voluntary retirement',
    date: 'October 2075',
    reliability: 'leaked',
    body: `I review three hundred fragments a day. I do not remember any of them clearly. I think this is by design. The training tells you to forget. The protocols tell you to forget. The biometric bands flag you if you don't forget. I have stopped trying to remember. I do not know whether I am still the person who started this job six years ago. I do not know whether the question matters.`,
  },
  {
    id: '028',
    source: 'Catholic sermon, archdiocese of [city redacted]',
    date: 'October 2079',
    reliability: 'official',
    body: `We have called this a plague upon us, but I want you to consider tonight whether *plague* is the correct word. Plague is what nature does. Plague visits us from outside our works. This is what we have built. This came from inside our laboratories, our universities, our parliaments. To call it plague is to absolve ourselves. To call it *what we have built* is to begin the work of repentance. I ask you tonight to begin that work.`,
  },
  {
    id: '029',
    source: 'Memorial plaque text, Westmarket Central transit hub',
    date: 'unveiled 2076',
    reliability: 'official',
    body: `In memory of those who passed here. The Office of Memetic Containment regrets that no comprehensive list of names can be inscribed at this time. Families wishing to add a name to the private supplementary record may contact the Office of Public Remembrance. We remember those who cannot be listed alongside those who can.`,
  },
  {
    id: '030',
    source: 'Reconstructor\'s private note, W. Han, working file',
    date: 'November 2087',
    reliability: 'official',
    body: `I have removed the names of the dead from the public-facing pages of the archive. The names are kept in a separate document. The document is not public. The names belong to their families, not to me, not to the archive. If anyone wishes to know whether their family member appears, they can contact me. I will tell them. I have, so far, told seven people. All seven knew what I was going to say before I said it. Two of them thanked me. None of them looked surprised.`,
  },
];
