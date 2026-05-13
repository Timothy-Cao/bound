# World Rules

These are the load-bearing mechanics of the setting. Any new scene, character, or plot point must respect these. If a story idea breaks a rule, either the idea changes or the rule changes, but the rule does not get quietly violated.

## Mechanism

### R1. Stimulus injection is real but specific.
Certain sensory patterns trigger neural and autonomic responses that exceed normal perception, directly inducing sleep, panic, memory retrieval, cardiac change. The mechanism was discovered through closed-loop optimization on millions of monitored eldercare patients (2059–2062), not through traditional neuroscience.

### R2. Lethal memotoxins (as of 2080) require three bound components.
Image + sound + scent. All three must be encoded by the same brain. All three must consolidate into a single bound memory object. Only then can later partial cues trigger the fatal autonomic cascade.

### R3. Binding requires memory fidelity and consolidation.
Components must be encoded clearly. Binding completes during sleep, especially deep / REM consolidation. Vague exposure does not bind. Sleep-deprived, drunk, distracted, or cognitively impaired brains bind less reliably.

### R3a. Binding rewrites retrospective memory.
The same neural process that fuses sensory components during consolidation also modifies the subject's memory of the original encoding events. Bound subjects remember exposures as cleaner, more inevitable, and more complete than they were. Near-binding and partial exposure produce milder distortions. The subject cannot distinguish a real memory from a binding-smoothed memory; the smoothing *is* the memory now. Witnesses are mechanistically unreliable about what they encoded, including their own certainty. This is the canonical basis for unreliable-narrator scenes (notably Marina's *"I'm too certain"* arc in FILES 009–011).

### R4. Components do not need to be experienced together.
Image on Monday, scent on Wednesday, sound on Friday, the brain can complete the pattern after the fact. This is what makes memotoxins terrifying and tractable for terror: components can be delivered separately and the victim assembles them.

### R5. Completion can fire long after final exposure.
Once Bound, a person can survive for months or years until a partial cue (smelling a perfume, hearing a phrase) completes the internal pattern and fires the cascade. Sudden public deaths happen. They are not rare.

## Defense

### R6. Countermeasures work partially, never fully.
Goggles, masks, filters help during encoding. After binding, they don't. Detection catches known patterns; new variants slip through. False positives in censor AI degrade everything else.

### R7. Cognitive dilution prevents binding.
Sleep fragmentation, anticholinergics, controlled alcohol, benzodiazepines, sensory saturation, all interfere with consolidation. Vulnerability inversely correlates with cognitive sharpness. The most attentive, well-rested, high-memory people are the most at risk.

### R8. Censor AI can become contaminated.
A system trained to recognize hazardous patterns has, by definition, encoded them. Some censor systems are themselves vectors. This is a known and recurring problem.

## Population-level

### R9. Not everyone is equally vulnerable.
Risk depends on age, neurology, attention, memory fidelity, sleep quality, prior exposure, dilution practices. Roughly **2–5%** of fully-exposed individuals proceed to fatal binding from **fresh, deployed components**. Completion rates from **legacy components** (LCI exploits) are lower, typically **0.5–2%**, because decades-old sensory memories have lower fidelity and looser cross-modal associations. This is why mass-casualty attacks kill thousands, not millions. It is also why LCI-based attacks like the 2079 Verrick broadcast need much larger exposed populations to produce comparable casualty counts.

### R9a. The cascade is not instantaneous.
The autonomic cascade typically completes over **30 seconds to several minutes** after triggering exposure. Subjects are usually aware that something is wrong before dying. Cascade times under 10 seconds are rare and indicate extremely tight binding. Cascade times can extend to several hours under partial-completion conditions (subject may feel ill for hours, even appear to recover, then die during sleep consolidation). Marina Idris's cascade in FILE 011 was approximately 90 seconds. The unidentified woman in FILE 005 entered cascade during sleep consolidation roughly two hours after the third component was encoded.

### R10. Society survives because death is hard.
The three-component requirement is the load-bearing constraint that keeps civilization functioning. Erode it and the world unravels. The 2080 story era is set right at the leading edge of that erosion. Two-component memotoxins are emerging in classified contexts. Single-component is not yet possible.

**Note on the Triune**: three-component (Triune) configurations are the *common* form, not the *only* form. Natural variation in neurology means some bound subjects can be killed by two-component patterns and some require four. The Triune is the operationally common configuration because it is the most reliable across the susceptible population. Two-component patterns work on a subset of the population only; four-component patterns are more reliable but harder to deploy. The Triune is a statistical sweet spot, not a biological law.

### R10a. The 2034 susceptibility substrate.
Memotoxins exist as a deployable phenomenon only because the NCV-34 pandemic of 2034–2037 (endemic thereafter) altered the neurological substrate of essentially the entire global population. The virus's long-tail effect was not only the documented cognitive decline in 5–8% of survivors but also a subclinical, population-wide alteration of multimodal binding pathways. Most carriers had no symptoms. Their brains were simply *slightly more susceptible* to the kind of binding-grade encoding that lethal memotoxins exploit. By 2080, an estimated 85–95% of living humans had been infected at some point and carried this susceptibility.

Before 2034, the same mechanism existed in principle but was much harder to trigger. Natural-occurring memotoxin-like events happened throughout pre-pandemic history. They were rare, individual, and attributed to other causes: psychogenic illness, sudden unexplained nocturnal death syndrome, panic-triggered cardiac events, mass hysteria, Stendhal syndrome, voodoo death. They were never recognized as a pattern because *they did not occur as a pattern*. Pre-pandemic brains rejected the binding more reliably than post-pandemic brains do.

This is the canonical answer to the question *why didn't humans accidentally encounter memotoxins before AI*: because pre-pandemic neurology made the binding mechanism difficult to trigger and impossible to deploy reliably. The pandemic provided the substrate. AI provided the precision. Without both, the crisis would not have happened.

### R11. Latent Component Inheritance (LCI).
A memotoxin's three components do not need to be deployed by the same attacker or produced in the same era. Any sensory pattern encoded in a brain by past exposure remains available indefinitely as a candidate component for a future memotoxin. Old songs, common scents, childhood images can be retroactively weaponized by an attacker who synthesizes the matching components. Formally identified after 2076; first publicly-confirmed exploit was the 2079 Verrick broadcast attack. See [research-frontiers.md](research-frontiers.md) for detail. Asymmetric: defenders can shape future exposure but cannot reach into past brains.

### R12. Disclosure Cost.
Any widely-known defense becomes attackable. Defense effectiveness inversely correlates with public disclosure. The dual of R6: where R6 says countermeasures catch only known *patterns*, R12 says attackers neutralize known *techniques*. Communities with effective defenses hoard them. Public-facing defenses are decoy, obsolete, or actively-being-countered. The best defenses are inherited (family/community), classified (state), or tribal (religious/ethnic). The middle class, which relies on publicly-disclosed defense, is most exposed. See [community-defense.md](../world/community-defense.md) for texture.

## Exposure classification (canonical)

Public health uses five classes:

| Class | Name | State |
|---|---|---|
| 0 | **Clean** | No known component exposure to any registered memotoxin |
| 1 | **Marked** | One component of a known memotoxin encoded |
| 2 | **Twice-Marked** | Two components encoded |
| 3 | **Sealed** | All three components experienced; binding incomplete or unverified |
| 4 | **Bound** | Binding confirmed; subject is in cascade or vulnerable to terminal re-trigger |

Slang: *tagged* (Marked), *twiced* (Twice-Marked), *loaded* / *primed* / *sitting on it* (Sealed), *lit* / *going* (Bound, terminal).

A Sealed subject can survive indefinitely if binding never consolidates. Clinical management of Sealed patients is the central public-health activity of the 2080s.

## Drafting checklist

When introducing a memotoxin, attack, or sensory-medicine scene, verify:

- Is the threat three-component? (If not, who has it and how? It should be a major plot point.)
- How was the victim exposed to each component? (Mass broadcast? Chokepoint? Targeted?)
- What's the current exposure class of each affected character?
- If binding fires, what's the trigger and where did consolidation happen?
- Were any countermeasures in play? Did they fail in a specific, plausible way?
