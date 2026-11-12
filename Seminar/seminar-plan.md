# Reading seminar: Generic points on the staircase and irregularities in uniform distribution

**Paper:** Dmitry Dolgopyat and Omri Sarig, *Generic Points on the Staircase and Irregularities in Uniform Distribution*, arXiv:2609.33590v1, 27 September 2026, 184 pages.

**Audience:** participants familiar with graduate-level ergodic theory, learning the continued-fraction, translation-surface, and probability tools together.

**Format:** weekly, 90 minutes; 14 core meetings, with optional continuation. Dates and participants remain to be arranged. The schedule below is a proposed teaching plan, not the authors’ organization or a claim that every proof can be covered in 14 talks. Page numbers refer to the printed pages of the supplied v1 PDF.

## Purpose and intended outcome

The seminar has three goals: understand the main results and their meaning; study the techniques that make the proofs work; and understand why the problems are interesting. At the end, participants should be able to explain the arithmetic question, reconstruct the main proof dependencies, and present at least one substantial argument in detail.

Use Theorem 1.2 as the main destination: a criterion, expressed through even continued fractions, for the local discrepancy sequence to visit any two fixed half-integer levels with asymptotically equal frequencies. Its proof brings together the genericity characterization in Theorem 1.20 and the twist calculation in Theorem 4.5. Theorem 1.25 provides the broader genericity framework; Theorems 1.9–1.13 provide an illuminating parallel application to temporal limit laws.

The core seminar should understand the local limit theorems stated in Appendix D and check how their hypotheses are verified here. Proving those probability theorems from scratch would require a separate reading program in the authors’ 2023 monograph. Appendix C should be treated selectively: understand the geometric mechanism and work through one twist computation rather than reproduce every case.

## Announcement email

**Subject:** Reading seminar on discrepancy, the infinite staircase, and generic points

Hi everyone,

I’m organizing a reading seminar on Dmitry Dolgopyat and Omri Sarig’s *Generic Points on the Staircase and Irregularities in Uniform Distribution* (arXiv:2609.33590v1).

The starting question is simple: even though an irrational rotation is equidistributed, can the errors in counting visits to half the circle have a persistent bias? The paper connects this question to generic points for flows on the infinite staircase, using continued-fraction renormalization, symbolic dynamics, and local limit theorems for inhomogeneous Markov chains.

Our aim will be to understand the main results, learn the techniques behind them, and discuss why these problems are interesting. We’ll assume graduate-level ergodic theory and develop the other background as needed.

I propose meeting weekly for 90 minutes, initially following a 14-meeting plan through the main proof ideas. Participants will take turns presenting connected parts of the paper. I’ll give the opening talk and present again later in the seminar.

If you’re interested, please reply with your availability, relevant background, and any part of the paper you would especially like to present. We’ll settle the meeting time and divide the presentations once we know who is joining.

The paper is attached, and I’ll share the proposed reading schedule before we begin.

Best,

*Sending note: attach the supplied paper and share the schedule below. No date, location, or recipient list has been assumed.*

## Opening introduction: a suggested 8–10 minute script

Start with an irrational number α. Weyl’s theorem tells us that the sequence of fractional parts {jα} is equidistributed in the circle. In particular, roughly half of the first N points lie in the interval [0, 1/2).

Let

D_N(α) = #{0 ≤ j < N : {jα} ∈ [0, 1/2)} − N/2.

Weyl’s theorem says D_N(α)/N tends to zero. But that leaves open almost everything about the error itself. Does it stay mostly positive? Does its histogram drift away from zero? Does it visit two fixed values equally often?

These are different questions. The paper distinguishes sign bias, global bias, and local bias. For the last question, note that every D_N belongs to the half-integer lattice. We ask whether, for every fixed pair ξ₁ and ξ₂ in that lattice,

#{1 ≤ N ≤ n : D_N(α) = ξ₁} / #{1 ≤ N ≤ n : D_N(α) = ξ₂} → 1.

This is a ratio statement. There is no uniform probability measure on an infinite lattice, and we are not claiming that each level has a positive limiting frequency. The paper’s Table 1 gives a striking contrast: √3 has none of the three biases, whereas √2 has all three.

The main arithmetic theorem gives an explicit criterion when α has bounded continued-fraction coefficients. Expand β = 2α − 1 in its even continued fraction,

β = [2m₀; 2m₁, 2m₂, …].

Then equal-frequency ratios hold exactly when

(1/n) Σ_{j=1}^n [sgn(m₂ⱼ) − sgn(m₂ⱼ₋₁)] → 0.

One goal of our seminar is to understand why this arithmetic sign average governs the counting errors.

The first bridge is elementary. Define τ(x) to be +1 in the first half of the circle and −1 in the second. Consider the cylinder map

T_α(x,k) = ({x+α}, k+τ(x)).

Starting at (0,0), its height after N steps is exactly 2D_N(α). Counting the times the discrepancy equals a given value becomes counting visits to a given height. Suspending this map leads to a linear flow on the infinite staircase, an infinite-area translation surface.

This reformulation exposes the conceptual difficulty. An ergodic theorem can describe almost every starting point, but our arithmetic question singles out the starting point (0,0). We need a way to decide whether this particular point is generic. Since the natural measures are infinite, genericity is expressed through ratios of occupation integrals.

The proof uses renormalization to shorten a long orbit segment to a manageable size. Continued fractions supply the sequence of transformations. Symbolic dynamics then converts the relevant displacement into an additive functional of a Markov chain whose transition rules change with time.

This is where probability enters a deterministic problem. A central limit theorem describes broad windows near the moving center. To compare visits to individual levels, and to treat targets away from that center, one needs local limit estimates and exponential changes of measure. The authors must also handle points for which the useful estimates break down, showing that the appropriate extreme behavior rules out genericity.

So our route will be: understand the counting question; understand the geometric model; build the symbolic and probabilistic machinery; and return to the arithmetic criterion. We’ll aim to explain why each tool is needed and prove selected key steps carefully.

## First meeting: organizer’s 90-minute talk

- **0–10 minutes:** the discrepancy question and the three meanings of bias.
- **10–25:** definitions, the √2/√3 contrast, and Theorem 1.2. Explain bounded type and state the even-CFE criterion without developing the machinery yet.
- **25–45:** derive the cylinder-map identity; show the staircase picture and explain the suspension using §1.3.
- **45–60:** explain why almost-everywhere results do not settle the specified initial point, and why ratios replace probability averages.
- **60–75:** the proof map from §1.6; distinguish a CLT from a local limit theorem and explain why the chain is inhomogeneous.
- **75–90:** discussion, collect background needs, and allocate the first blocks of presentations.

Suggested board sequence: D_N definition → three biases → cylinder map → staircase picture → renormalization → changing Markov chain → local estimates → genericity → even-CFE criterion.

Ask everyone to read §§1.1–1.3 before this meeting. The organizer should also read §§1.4 and 1.6; §1.5 supplies optional historical context.

## Core schedule

The reading column is the presenter’s main assignment. Everyone else should read the section introductions, principal statements, and the presenter’s short guide. A technical chapter does not need to be reproduced line by line in a single meeting.

| Meeting | Main reading | Focus and concrete outcome | Presenter |
|---|---|---|---|
| 1. Why this problem? | §§1.1–1.4, 1.6 | Define the biases, state Theorem 1.2, and draw the proof map. | Organizer |
| 2. From arithmetic to genericity | §1.3, selected §1.4; Appendix A, pp. 145–148 | Derive the height/discrepancy identity; define ratio genericity; explain even CFE and bounded type. Use one explicit expansion. | Arithmetic/geometry lead |
| 3. Renormalization | §§2–4.2, pp. 27–36; Appendix B as needed | Explain the canonical matrix products, controlled fundamental domains, and uniform contraction. Show why renormalization depth is comparable to log T. Work through one matrix example. | Renormalization lead |
| 4. Symbolic coding and jumps | §§5–6, pp. 36–44 | Explain the changing Markov partitions and modified integer coordinates. Show how geometric displacement becomes a sum of symbolic jump functions, up to controlled error. | Symbolic dynamics lead |
| 5. The changing Markov chain | §7, pp. 44–49; Appendix D setup | Derive the transition law and explain uniform ellipticity and mixing. Identify exactly what changes with time. | Symbolic dynamics lead |
| 6. Why the limit theorems apply | §8, pp. 49–56; relevant Appendix D statements | Explain structure constants, irreducibility, bounded drift, and variance comparable to n. Present one geometric argument in detail; map the other hypotheses to their proofs. | Probability lead |
| 7. Returning from coding to orbit segments | §9, pp. 56–61; revisit §1.6.2 | Distinguish forward, backward, and symbolic walks. Explain conditioning on pure unstable segments and how it supports occupation estimates. | Symbolic or renormalization lead |
| 8. Temporal central and local limits | §10, pp. 61–67; Appendix D as needed | Explain the temporal CLT and local CLT, then recover Theorems 1.9 and 1.13. Track the factor 2 between discrepancy and height. | Probability lead |
| 9. Change of measure and pressure | §§11.1–11.3, pp. 68–70; selected Appendix D | Explain exponential tilting and pressure derivatives. Show why a moving target may require a change of measure rather than a central Gaussian approximation. | Pressure/genericity lead |
| 10. Comparing pressure descriptions | §§11.4–11.5, pp. 70–83 | State Proposition 11.7 precisely and explain the roles of its comparison lemmas. Prove one selected lemma; give a structured account of the rest. | Pressure/genericity lead |
| 11. Sufficient conditions for genericity | §12.1, pp. 83–91 | Follow the route from finite tilt-parameter convergence to occupation ratios. Make the use of local estimates and cylinder approximations explicit. | Pressure/genericity lead |
| 12. Necessary conditions for genericity | §12.2, pp. 91–100; revisit §1.6.4 | Explain why multiple finite limit points or infinite limit points obstruct genericity. Give the architecture of the extreme-target argument and one detailed step. | Pressure/genericity lead, with a respondent |
| 13. Back to the arithmetic criterion | §12.3, pp. 100–106; §4.3; selected Appendix C, pp. 151–160 | Reconstruct Theorems 1.20 and 1.2. Explain the twist formula and derive Corollary 1.12, distinguishing local bias from global bias. | Organizer, with arithmetic/geometry lead |
| 14. Synthesis and problems | Revisit §§1.2, 1.4, 1.6; proof locator p. 179 | Rebuild the whole proof together, explain which claims remain imported, discuss open problems, and decide whether to continue. | Short contributions from everyone |

Keep one or two calendar weeks unassigned for spillover. Meetings 3, 6, 10, and 12 are likely pressure points. If the group wants complete proofs of the hardest constructions, split those meetings rather than increase weekly reading indefinitely.

## Assigning presentations with an unknown number of participants

Assign connected blocks after collecting availability and interests. These are responsibilities, not permanent restrictions on who may speak.

| Block | Meetings | Suggested responsibility |
|---|---|---|
| Motivation and synthesis | 1, 13, shared 14 | Organizer; learn the twist calculation with another participant. |
| Arithmetic and renormalization | 2–3 | One participant or a pair; coordinate closely with the coding speakers. |
| Symbolic and probabilistic bridge | 4–5, 7 | One participant or a pair; keep one common notation guide. |
| Limit laws | 6, 8 | One participant; introduce only the Appendix D machinery actually used. |
| Pressure and genericity | 9–12 | Prefer two participants, one handling pressure comparisons and one the genericity arguments. |

With **three people total**, the organizer can take 1–3 and 13; a second person 4–5, 7, and 9–10; a third 6, 8, and 11–12. This is a substantial commitment, so allow co-presentations and spillover.

With **four or five people**, divide the five blocks sensibly, sharing the pressure/genericity block if possible. With **six or more**, split that block first, then split renormalization from arithmetic. Rotate respondents so each speaker has someone who has checked the main argument beforehand.

## A repeatable meeting format

For meetings after the opening:

- **10 minutes:** motivation, recap, and the statement this meeting is meant to establish.
- **50 minutes:** one main construction or argument, with interruptions for questions.
- **20 minutes:** a worked example, a proof repair, or collective discussion of a difficult step.
- **10 minutes:** what was proved, what was imported, unresolved questions, and the handoff to the next speaker.

Three days before presenting, share a short guide with: prerequisites; the two or three principal statements; the proof’s main steps; one worked example or lemma; and what will be used without proof. State clearly which parts everyone should read.

Maintain shared notes with four running items: a notation glossary, a theorem dependency map, a list of imported results, and a questions list. Aim for a useful one-page record per meeting rather than a second monograph.

At the end of each talk, ask: What problem did this step solve? Where did bounded type enter? What will the next step use?

## Technical checkpoints

1. **After meeting 3:** everyone can explain the exact initial-point obstacle and why the relevant depth is logarithmic in physical time.
2. **After meeting 7:** everyone can explain where the probability comes from, why the increments are neither IID nor stationary in general, and how the coding connects back to orbit segments.
3. **After meeting 10:** everyone can explain why a CLT alone does not establish fixed-level ratios, and what pressure and tilting add.
4. **After meeting 13:** everyone can trace the arithmetic criterion through the genericity theorem and the twist formula, and explain the two different scales in Corollary 1.12.

If a checkpoint fails, use a workshop before adding another technical layer.

## Questions and short exercises

- Derive the identity height(T_α^N(0,0)) = 2D_N(α), including the indexing convention.
- Explain why ratio equidistribution on an infinite lattice does not specify positive limiting frequencies.
- Check the even-CFE examples for √3 and √7 in §1.2.1 and evaluate the sign-average criterion.
- Illustrate why a CLT does not determine the probability of one lattice value; include a parity obstruction example.
- Explain how variance of order n at renormalization depth n leads to fluctuations of order √log T in physical time.
- Use a sign sum of order n^(2/3), as in the proof of Corollary 1.12, to distinguish the local-bias and global-bias criteria.
- Explain why genericity for area does not force asymptotically equal time in the positive and negative halves of the staircase; see Remark 1.24 and Corollary 1.38.

For the last meeting, discuss the paper’s open questions: can unbounded-type α yield non-exponential tilt profiles (§1.2.2)? Does convergence of the occupation ratio for just neighboring rectangles suffice for genericity (after Theorem 1.25)? Which ingredients of the framework might extend to the non-renormalizable setting described in §1.7? The last is a discussion direction, not an established theorem of this paper.

## Optional continuation

Choose according to interests; these are additional topics, not hidden prerequisites for completing the core seminar.

- **Ergodic integrals:** §13, pp. 106–123. Allow two meetings if studying the distributional results in detail. Distinguish randomness in the initial point from the random-time sampling in temporal limit laws.
- **Constructing prescribed tilt:** §14, pp. 123–135. Allow two meetings for the construction behind Theorems 1.26 and 1.4.
- **Dimension and category:** §15, pp. 135–144. Allow one or two meetings to explore how measure-zero exceptional behavior can have full Hausdorff dimension or be residual.
- **Deeper probability:** select a result from Appendix D and consult its proof in the cited 2023 monograph. Set a separate reading scope before committing.

## Organizer’s next steps

Send the invitation with the paper; collect availability and presentation interests; choose a weekly slot; allocate the first few blocks; share this plan; and prepare the opening talk. Confirm the later assignments after the renormalization checkpoint, when the group has a better sense of the pace.
