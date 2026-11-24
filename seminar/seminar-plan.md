---
title: Seminar plan
permalink: /seminar/seminar-plan/
---

<script>
  document.documentElement.lang = 'en';
  window.MathJax = {
    options: {
      enableAssistiveMml: false
    }
  };
</script>
<script src="/mathjax.js" defer></script>

<style>
  #markdown-toc {
    box-sizing: border-box;
    font-size: 13px;
    line-height: 1.5;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px 16px 16px 32px;
    background: #f8f9fa;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  }

  #markdown-toc li {
    margin: 8px 0;
  }

  #markdown-toc ul {
    padding-left: 18px;
  }

  #markdown-toc a {
    color: #245b91;
    text-decoration: none;
    overflow-wrap: anywhere;
  }

  #markdown-toc a:hover {
    text-decoration: underline;
  }

  /* Sidebar on wide screens */
  @media (min-width: 1200px) {
    body {
      padding-left: 260px;
    }

    #markdown-toc {
      position: fixed;
      top: 30px;
      left: 20px;
      width: 220px;
      max-height: calc(100vh - 60px);
      overflow-y: auto;
      margin: 0;
    }

    #toc-heading {
      display: none;
    }
  }
</style>

# Reading seminar: Generic points on the staircase and irregularities in uniform distribution
{:.no_toc}

## Contents
{: #toc-heading .no_toc}

* TOC
{:toc}

We are reading Dmitry Dolgopyat and Omri Sarig’s *Generic Points on the Staircase and Irregularities in Uniform Distribution*. The seminar aims to understand the main results, study the techniques behind them, and explore why the problems are interesting.

**Paper:** <a href="https://arxiv.org/abs/2609.33590v1" target="_blank" rel="noopener noreferrer">arXiv:2609.33590v1</a>, 27 September 2026.

**Format:** weekly meetings of approximately 90 minutes, with a 60-minute introductory meeting. The proposed program has 14 meetings and may be adjusted as we progress.

**Time and location:** to be announced.

**Background:** familiarity with graduate-level ergodic theory. We will develop continued fraction expansions, translation surface, and probability tools as needed.

## News

The meeting time, location, and dates will be announced here. Slides and notes will be added to the schedule as they become available.

**19 November 2026 — First meeting:** Thursday, 10:00–11:00, in room 209 of the Schreiber Building, Tel Aviv University.

**26 November 2026:** Thursday, 10:00–11:00, in room 309 of the Schreiber Building. Note that it is not the same room as the previous week.

## About the paper

For an irrational number $\alpha$, the sequence of fractional parts $\{j\alpha\}$ is equidistributed in the circle. Nevertheless, the discrepancies (error term)

$$
D_N(\alpha)
=
\#\left\{0 \le j < N : \{j\alpha\} \in [0,1/2)\right\}
-\frac{N}{2}
$$

can exhibit several forms of bias. The paper studies these phenomena through linear flows on the infinite staircase, connecting continued fractions, renormalization, symbolic dynamics, and limit theorems for Markov chains.

Our main route leads to the criterion for equidistribution of the discrepancy sequence in Theorem 1.2. 


## Schedule and meeting materials

The schedule is provisional. We begin with the prerequisites, using the temporal central limit theorem as a guide to the proof. We then develop the shared machinery before treating the main results separately.

Unassigned speakers are marked “TBA”; a dash in the materials column means that no materials have been posted yet. Section and page references refer to the arXiv v1 PDF.

| Meeting | Topic | Reading | Speaker | Slides and notes |
|---|---|---|---|---|
| 1 | Arithmetic questions and dynamical formulation | §§1.1–1.3; selected §1.4 | Carlos & Chen | [Part I](discrepancies_and_bias.pdf)<br>[Part II](from_the_cylinder_map_to_the_staircase.pdf) |
| 2 | The proof skeleton | §1.6; §10.1, especially pp. 62–63, as an overview of the steps and required tools | Chen | — |
| 3 | Renormalization | §§2–4.2, pp. 27–36; Appendix A for even continued fractions; Appendix B for the denseness estimates used in §4 | Yonatan | — |
| 4 | The renormalized stair coordinate of the origin | §4.3; statement of the twist formula from Appendix C, pp. 151–160 | TBA | — |
| 5 | Symbolic coding and jump functions | §§5–6, pp. 36–44 | Carlos | — |
| 6 | The inhomogeneous Markov chain | §7, pp. 44–49; Appendix D setup | TBA | — |
| 7 | Irreducibility, drift, and variance | §8, pp. 49–56; relevant Appendix D statements | TBA | — |
| 8 | From the chain back to orbit segments | §9, pp. 56–61; §1.6.2 | TBA | — |
| 9 | Temporal CLT and explicit centering: Theorems 1.35, 1.9, and 1.10 | §10.1, pp. 61–64; Theorem D.7; selected Appendix C arguments | TBA | — |
| 10 | Temporal local limit theorem: Theorems 1.36 and 1.13 | §10.2, pp. 64–67; Theorem D.21 | TBA | — |
| 11 | Change of measure and pressure | §§11.1–11.3, pp. 68–70; statement and role of Proposition 11.7 | TBA | — |
| 12 | Sufficient condition for genericity | §12.1, pp. 83–91 | TBA | — |
| 13 | Necessary condition and arithmetic consequences: Theorems 1.20, 1.25, 1.2, and 1.3 | §§12.2–12.3, pp. 91–106 | TBA | — |
| 14 (optional) | Constructing prescribed tilt: Theorems 1.26 and 1.4 | §14, pp. 123–135 | TBA | — |

In meeting 4, we introduce the renormalized stair coordinate and explain the twist formula, initially taking its proof as a black box. We revisit selected arguments from Appendix C in meeting 9, when the formula makes the CLT centering explicit.

For meeting 11, we use Proposition 11.7 without covering its full proof in §§11.4–11.5.

Meeting 13 may be split into two sessions: one on the necessary condition for genericity (§12.2), and one on the arithmetic consequences (§12.3).

## Reading and participation

Participants take turns presenting. Before each meeting, read the relevant section introductions and principal statements, together with any preparation suggested by the speaker. Presentations will explain the main constructions and develop selected arguments in detail.

The probability results summarized in Appendix D will be used with attention to their hypotheses; proving all of them from scratch is outside the core program.

## Further topics

Depending on the group’s interests and available time, we may cover the optional construction of prescribed tilt (§14), growth and distribution of Birkhoff integrals (§13), or the Hausdorff dimension and Baire category of generic and non-generic points (§15).

## Join the mailing list

To receive seminar announcements, please sign up below.

<iframe
  src="https://docs.google.com/forms/d/e/1FAIpQLSc3Lu8Zv87b6Zf6b4Pwj20fZx-V_sieVXtfqPQuVQMlokwuWg/viewform?embedded=true&amp;hl=en"
  width="100%"
  height="650"
  frameborder="0"
  marginheight="0"
  marginwidth="0"
  title="Seminar mailing list signup">
  Loading…
</iframe>