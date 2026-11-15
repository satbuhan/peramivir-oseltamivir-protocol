/* =========================================================================
   Content data for the interactive IV-peramivir-vs-oral-oseltamivir
   protocol (route-guided antiviral selection in suspected or confirmed
   primary influenza pneumonia).

   Reference 1 is the authors' own systematic review — an unpublished
   manuscript submission (single-author blinded submission per its own
   declarations; PRISMA 2020; 103-entry bibliography, every entry carrying
   its own DOI) — whose attached decision-algorithm figure is reproduced,
   unchanged, on this page. Every other reference below (2-35) was
   independently located and cross-checked against a real, locatable
   primary source (the trial/cohort report itself, a guideline document,
   or an indexing record showing matching title/journal/year/DOI) rather
   than taken on trust from the manuscript's own reference list.

   Three of the manuscript's own cited sources could NOT be independently
   verified after repeated, differently-worded searches and are therefore
   NOT reproduced here, even though the manuscript cites them:
     - its ref [2] (Viasus D et al, Medicine (Baltimore) 2011) — the
       specific "pneumonia in >40% of a Spanish H1N1 cohort" figure in
       Box 1's rationale is dropped rather than attached to an
       unconfirmed source;
     - its ref [12] (Shen Y, "Critical updates in the 2024 influenza
       clinical practice guidelines of the WHO", Infect Dis Immun,
       DOI 10.1097/ID9.0000000000000161) — that DOI and title/author/
       journal combination could not be found anywhere; the WHO-2024-
       guideline citations on this page rely instead on the manuscript's
       other two guideline references, which did verify (IDSA 2018 [4]
       and the Meixner 2025 WHO-guideline update [5]);
     - its ref [29] (Bay P et al, "How to manage antivirals in critically
       ill patients with influenza?", Clin Microbiol Infect 2025) —
       likewise not independently locatable; the coinfection/complications
       and extend-therapy rationale this ref backed is carried instead by
       refs [7] and [25] below, which did verify.
   This is flagged here rather than silently dropped — see METHODOLOGY.md.
   ========================================================================= */

// Date this tool's content and citations were last built/checked
// together (see assets/app.js's References summary, and the hub
// README's "Content search index"-adjacent conventions doc).
const VERIFIED = "2026-11-15";

const REFERENCES = [
  {
    id: 1,
    kind: "Systematic review — source of this algorithm",
    text: "Intravenous Peramivir versus Oral Oseltamivir in Primary Influenza Pneumonia and Severe Influenza: A Systematic Review of Comparative Clinical Outcomes. Unpublished manuscript submission (single-author blinded submission). PRISMA 2020; RoB-2 / ROBINS-I risk-of-bias assessment; GRADE certainty rating; clinical significance by Cohen's d (MCID 0.5) and a 24-hour absolute anchor. This page's algorithm is reproduced, unchanged, from that review's attached decision-algorithm figure.",
    url: null
  },
  { id: 2, kind: "Retrospective cohort study", text: "Lee N, Choi KW, Chan PK, et al. Outcomes of adults hospitalised with severe influenza. Thorax. 2010;65(6):510-515.", url: "https://doi.org/10.1136/thx.2009.130799" },
  { id: 3, kind: "Individual participant data meta-analysis", text: "Muthuri SG, Venkatesan S, Myles PR, et al. Impact of neuraminidase inhibitors on influenza A(H1N1)pdm09-related pneumonia: an individual participant data meta-analysis. Influenza Other Respir Viruses. 2016;10(3):192-204.", url: "https://doi.org/10.1111/irv.12363" },
  { id: 4, kind: "Society guideline", text: "Uyeki TM, Bernstein HH, Bradley JS, et al. Clinical Practice Guidelines by the Infectious Diseases Society of America: 2018 Update on Diagnosis, Treatment, Chemoprophylaxis, and Institutional Outbreak Management of Seasonal Influenza. Clin Infect Dis. 2019;68(6):e1-e47.", url: "https://doi.org/10.1093/cid/ciy866" },
  { id: 5, kind: "Guideline summary", text: "Meixner J, Nußbaumer-Streit B, Sommer I. WHO clinical practice guidelines for influenza: an update. Gesundheitswesen. 2025;87(7):484-486.", url: "https://doi.org/10.1055/a-2571-3357" },
  { id: 6, kind: "Individual participant data meta-analysis", text: "Muthuri SG, Venkatesan S, Myles PR, et al. Effectiveness of neuraminidase inhibitors in reducing mortality in patients admitted to hospital with influenza A H1N1pdm09 virus infection: a meta-analysis of individual participant data. Lancet Respir Med. 2014;2(5):395-404.", url: "https://doi.org/10.1016/S2213-2600(14)70041-4" },
  { id: 7, kind: "Cohort study", text: "Lee N, Leo YS, Cao B, et al. Neuraminidase inhibitors, superinfection and corticosteroids affect survival of influenza patients. Eur Respir J. 2015;45(6):1642-1652.", url: "https://doi.org/10.1183/09031936.00169714" },
  { id: 8, kind: "Meta-analysis of randomized trials", text: "Dobson J, Whitley RJ, Pocock S, et al. Oseltamivir treatment for influenza in adults: a meta-analysis of randomised controlled trials. Lancet. 2015;385(9979):1729-1737.", url: "https://doi.org/10.1016/S0140-6736(14)62449-1" },
  { id: 9, kind: "Pharmacokinetic review", text: "Chairat K, Tarning J, White NJ, Lindegardh N. Pharmacokinetic properties of anti-influenza neuraminidase inhibitors. J Clin Pharmacol. 2013;53(2):119-139.", url: "https://doi.org/10.1177/0091270012440280" },
  { id: 10, kind: "Randomized controlled trial (pilot)", text: "Hsieh YH, Dugas AF, LoVecchio F, et al. Intravenous peramivir vs oral oseltamivir in high-risk emergency department patients with influenza: results from a pilot randomized controlled study. Influenza Other Respir Viruses. 2021;15(1):121-131.", url: "https://doi.org/10.1111/irv.12794" },
  { id: 11, kind: "Retrospective cohort study", text: "Yoshino Y, Seo K, Koga I, Kitazawa T, Ota Y. Clinical efficacy of peramivir in adult patients with seasonal influenza during the winter of 2012 in Japan. Clin Respir J. 2015;9(2):228-232.", url: "https://doi.org/10.1111/crj.12129" },
  { id: 12, kind: "Retrospective cohort study", text: "Byun YH, Kim JE, Paek SH, et al. Effectiveness of antiviral treatment with intravenous peramivir and oral oseltamivir for seasonal influenza in children. Children (Basel). 2025;12(1):26.", url: "https://doi.org/10.3390/children12010026" },
  { id: 13, kind: "Randomized controlled trial", text: "Kohno S, Yen MY, Cheong HJ, et al. Phase III randomized, double-blind study comparing single-dose intravenous peramivir with oral oseltamivir in patients with seasonal influenza virus infection. Antimicrob Agents Chemother. 2011;55(11):5267-5276.", url: "https://doi.org/10.1128/AAC.00360-11" },
  { id: 14, kind: "Randomized controlled trial (phase 2)", text: "Ison MG, Hui DS, Clezy K, et al. A clinical trial of intravenous peramivir compared with oral oseltamivir for the treatment of seasonal influenza in hospitalized adults. Antivir Ther. 2013;18(5):651-661.", url: "https://doi.org/10.3851/IMP2442" },
  { id: 15, kind: "Randomized controlled trial — the pneumonia-specific trial", text: "Chen HD, Wang X, Yu SL, et al. Clinical Effectiveness of Intravenous Peramivir Compared With Oseltamivir in Patients With Severe Influenza A With Primary Viral Pneumonia: A Randomized Controlled Study. Open Forum Infect Dis. 2021;8(1):ofaa562.", url: "https://doi.org/10.1093/ofid/ofaa562" },
  { id: 16, kind: "Randomized controlled trial", text: "Nakamura S, Miyazaki T, Izumikawa K, et al. Efficacy and Safety of Intravenous Peramivir Compared With Oseltamivir in High-Risk Patients Infected With Influenza A and B Viruses: A Multicenter Randomized Controlled Study. Open Forum Infect Dis. 2017;4(3):ofx129.", url: "https://doi.org/10.1093/ofid/ofx129" },
  { id: 17, kind: "Randomized controlled trial (open-label)", text: "Kato M, Saisho Y, Tanaka H, et al. Effect of peramivir on respiratory symptom improvement in patients with influenza virus infection and pre-existing chronic respiratory disease: findings of a randomized, open-label study. Influenza Other Respir Viruses. 2021;15(1):132-141.", url: "https://doi.org/10.1111/irv.12788" },
  { id: 18, kind: "Randomized controlled trial (open-label) — companion report", text: "Kato M, Saisho Y, Tanaka H, et al. Improvement of respiratory symptoms and health-related quality of life with peramivir in influenza patients with chronic respiratory disease: additional outcomes of a randomized, open-label study. Influenza Other Respir Viruses. 2021;15(5):651-660.", url: "https://doi.org/10.1111/irv.12835" },
  { id: 19, kind: "Randomized controlled trial (open-label)", text: "Hirotsu N, Saisho Y, Hasegawa T, et al. Clinical and virologic effects of four neuraminidase inhibitors in influenza A virus-infected children (aged 4-12 years): an open-label, randomized study in Japan. Expert Rev Anti Infect Ther. 2018;16(2):173-182.", url: "https://doi.org/10.1080/14787210.2018.1421945" },
  { id: 20, kind: "Retrospective propensity-matched cohort study", text: "Xu M, Cai T, Yue T, et al. Comparative effectiveness of oseltamivir versus peramivir for hospitalized children (aged 0-5 years) with influenza infection. Int J Infect Dis. 2023;128:157-165.", url: "https://doi.org/10.1016/j.ijid.2022.12.043" },
  { id: 21, kind: "Open-label trial / comparator cohort", text: "Lee N, Chan PK, Tam WW, et al. Virological response to peramivir treatment in adults hospitalised for influenza-associated lower respiratory tract infections. Int J Antimicrob Agents. 2016;48(2):215-219.", url: "https://doi.org/10.1016/j.ijantimicag.2016.05.003" },
  { id: 22, kind: "Pharmacokinetic study", text: "Saisho Y, Ishibashi T, Fukuyama H, et al. Pharmacokinetics and safety of intravenous peramivir, neuraminidase inhibitor of influenza virus, in healthy Japanese subjects. Antivir Ther. 2017;22(4):313-323.", url: "https://doi.org/10.3851/IMP3104" },
  { id: 23, kind: "Pharmacokinetic study", text: "Funatsu Y, Tasaka S, Asami T, et al. Pharmacokinetics of intravenous peramivir in the airway epithelial lining fluid of healthy volunteers. Antivir Ther. 2016;21(7):621-625.", url: "https://doi.org/10.3851/IMP3096" },
  { id: 24, kind: "Retrospective multicenter cohort study", text: "Zou Q, Zheng S, Wang X, et al. Influenza A-associated severe pneumonia in hospitalized patients: risk factors and NAI treatments. Int J Infect Dis. 2020;92:208-213.", url: "https://doi.org/10.1016/j.ijid.2020.01.017" },
  { id: 25, kind: "Retrospective cohort study", text: "Yeh CY, Wang FD, Chuang YC, et al. Clinical outcomes and prognostic factors of patients with severe influenza receiving intravenous peramivir salvage therapy in intensive care units. J Microbiol Immunol Infect. 2018;51(6):697-704.", url: "https://doi.org/10.1016/j.jmii.2017.06.001" },
  { id: 26, kind: "Retrospective multicenter cohort study", text: "Lee JS, Lee MS, Park Y, et al. Clinical Effectiveness of Intravenous Peramivir versus Oseltamivir for the Treatment of Influenza in Hospitalized Patients. Infect Drug Resist. 2020;13:1479-1484.", url: "https://doi.org/10.2147/IDR.S247421" },
  { id: 27, kind: "Randomized controlled trial (phase 3)", text: "Marty FM, Vidal-Puigserver J, Clark C, et al. Intravenous zanamivir or oral oseltamivir for hospitalised patients with influenza: an international, randomised, double-blind, double-dummy, phase 3 trial. Lancet Respir Med. 2017;5(2):135-146.", url: "https://doi.org/10.1016/S2213-2600(16)30435-0" },
  { id: 28, kind: "Narrative review", text: "Slain D. Intravenous Zanamivir: A Viable Option for Critically Ill Patients With Influenza. Ann Pharmacother. 2021;55(6):760-771.", url: "https://doi.org/10.1177/1060028020963616" },
  { id: 29, kind: "Surveillance / virologic characterization study", text: "Takashita E, Kiso M, Fujisaki S, et al. Characterization of a large cluster of influenza A(H1N1)pdm09 viruses cross-resistant to oseltamivir and peramivir during the 2013-2014 influenza season in Japan. Antimicrob Agents Chemother. 2015;59(5):2607-2617.", url: "https://doi.org/10.1128/AAC.04836-14" },
  { id: 30, kind: "Laboratory / virologic study", text: "Takashita E, Fujisaki S, Yokoyama M, et al. In Vitro Characterization of Multidrug-Resistant Influenza A(H1N1)pdm09 Viruses Carrying a Dual Neuraminidase Mutation Isolated from Immunocompromised Patients. Pathogens. 2020;9(9):725.", url: "https://doi.org/10.3390/pathogens9090725" },
  { id: 31, kind: "Systematic review and meta-analysis", text: "Lee J, Park JH, Jwa H, Kim YH. Comparison of Efficacy of Intravenous Peramivir and Oral Oseltamivir for the Treatment of Influenza: Systematic Review and Meta-Analysis. Yonsei Med J. 2017;58(4):778-785.", url: "https://doi.org/10.3349/ymj.2017.58.4.778" },
  { id: 32, kind: "Meta-analysis", text: "Chen JY, Wei SK, Lai CC, et al. A Meta-Analysis Comparing the Efficacy and Safety of Peramivir with Other Neuraminidase Inhibitors for Influenza Treatment. Medicina (Kaunas). 2020;56(2):63.", url: "https://doi.org/10.3390/medicina56020063" },
  { id: 33, kind: "Meta-analysis of randomized trials", text: "Fang YH, Hsu TH, Lin TY, et al. Comparing intravenous peramivir with oral oseltamivir for patients with influenza: a meta-analysis of randomized controlled trials. Expert Rev Anti Infect Ther. 2021;19(8):1039-1046.", url: "https://doi.org/10.1080/14787210.2021.1878025" },
  { id: 34, kind: "Systematic review and network meta-analysis", text: "Gao Y, Guyatt G, Uyeki TM, et al. Antivirals for treatment of severe influenza: a systematic review and network meta-analysis of randomised controlled trials. Lancet. 2024;404(10454):753-763.", url: "https://doi.org/10.1016/S0140-6736(24)01307-2" },
  { id: 35, kind: "Retrospective cohort study", text: "Yoo JW, Choi SH, Huh JW, Lim CM, Koh Y, Hong SB. Peramivir is as effective as oral oseltamivir in the treatment of severe seasonal influenza. J Med Virol. 2015;87(10):1649-1655.", url: "https://doi.org/10.1002/jmv.24232" }
];

/* Each node mirrors one box, decision diamond, or the evidence-summary
   banner from the source figure ("Antiviral selection in suspected or
   confirmed primary influenza pneumonia"). label/sub text is byte-exact
   to the figure; everything else (meaning, rationale, cautions) is
   paraphrased, sourced explanatory content.
   type: "process" | "decision" | "branch" | "terminal" */
const NODES = [
  {
    id: "entry",
    type: "terminal",
    label: "Suspected or confirmed influenza pneumonia",
    sub: "(fever, respiratory symptoms, new infiltrate on imaging; send RT-PCR)",
    meaning:
      "This opens the algorithm on the pneumonia phenotype of influenza specifically — the virus itself driving lower respiratory tract injury without an initial bacterial pathogen — which more often affects patients with chronic cardiopulmonary disease, pregnancy, obesity, or immunosuppression. RT-PCR is sent, but treatment (next box) does not wait for it to come back.",
    rationale:
      "Pneumonia accounts for a large share of influenza hospitalisations and deaths in the IPD meta-analyses this review draws on, which is why the entry point is built around clinical and radiological suspicion rather than a positive test — a confirmed result is initiated in parallel, not as a gate.",
    cautions: [
      "The specific triad “fever, respiratory symptoms, new infiltrate on imaging” is not a verbatim manuscript phrase — the review's own eligibility criteria describe the target population more generally as “radiologically confirmed primary influenza pneumonia or severe influenza requiring hospitalisation.”",
      "The figure names only RT-PCR; the review's own case definition for laboratory confirmation also accepts rapid antigen testing or viral culture."
    ],
    refs: [2, 3]
  },
  {
    id: "immediate_nai",
    type: "process",
    tone: "key",
    label: "Start a neuraminidase inhibitor immediately",
    sub: "Do not wait for test results; treat even if >48 h from symptom onset",
    meaning:
      "Every hospitalised patient with suspected or confirmed influenza pneumonia should start NAI therapy on presentation — before RT-PCR returns, and regardless of how long symptoms have been present.",
    rationale:
      "Across observational cohorts and individual-participant-data meta-analyses of hospitalised influenza, early NAI treatment is the strongest and most consistent modifiable predictor of survival and shorter stay — more important than which NAI is chosen. One IPD meta-analysis found treatment within two days of onset roughly halved the odds of death compared with later treatment.",
    cautions: [
      "This box is sourced from external clinical practice guidelines (IDSA 2018, WHO 2024 update) rather than from the review's own head-to-head peramivir-vs-oseltamivir trials — those guidelines are themselves backed by the observational NAI-timing cohorts cited here.",
      "The exact figure “>48 h” does not appear in the review's own text, which instead says treatment “within two days of symptom onset” and “irrespective of symptom duration.”"
    ],
    refs: [3, 4, 5, 6, 7]
  },
  {
    id: "d1",
    type: "decision",
    label: "Is the enteral route reliable?",
    sub: "(no vomiting, ileus, GI bleeding, refractory shock or inability to swallow / tube-feed)",
    meaning:
      "This checks whether oral or enteral administration and absorption of oseltamivir can actually be relied on — vomiting, ileus, GI bleeding, shock, or inability to swallow or tube-feed all compromise it.",
    rationale:
      "Because the review's own synthesis found IV peramivir and oral oseltamivir clinically equivalent in hospitalised influenza and pneumonia — no mortality or length-of-stay advantage either way — route reliability, not superior efficacy, is what actually decides the choice here. Oseltamivir is an oral prodrug needing GI absorption and hepatic esterase activation, either of which critical illness or feeding intolerance can compromise; it also itself causes nausea and vomiting.",
    cautions: [
      "The review's own wording for these conditions varies: “shock” / “severe shock” rather than the figure's “refractory shock”, and “reduced / disturbed / altered consciousness” or “enteral feeding intolerance” rather than the figure's “inability to swallow / tube-feed.”",
      "Hepatic dysfunction, which can also impair the esterase step that activates oral oseltamivir, is named in the review's text but not listed on this box."
    ],
    refs: [8, 9, 10, 11, 12]
  },
  {
    id: "oral_oseltamivir",
    type: "branch",
    label: "YES: oral or enteral oseltamivir",
    sub: "75 mg twice daily for ≥5 days (renal dose adjustment; weight-based in children); consider longer course in severe or immunocompromised patients",
    meaning:
      "When enteral delivery is reliable, standard-dose oral or enteral oseltamivir for at least 5 days is the default — extended when clinical or virological resolution is slow.",
    rationale:
      "Oseltamivir is the established, guideline-preferred NAI once enteral absorption is reliable, is widely available and generally lower-cost, and a propensity-matched cohort of 1,662 hospitalised children aged 0-5 found higher recovery and shorter stay with oseltamivir than peramivir in severe influenza A specifically. More than two-thirds of hospitalised adults with influenza-related lower-respiratory-tract complications needed more than 5 days of therapy in one cohort, which is why the course length is written as a floor, not a fixed duration.",
    cautions: [
      "Specific renal CrCl cut-offs, renal-adjusted doses, and paediatric mg/kg doses for oseltamivir are not given in the review — only “renal dose adjustment” and “weight-based in children”, drawn from general NAI pharmacokinetic sources rather than an oseltamivir-specific regimen.",
      "“Weight-based in children” is stated in the review against peramivir, not oseltamivir — no paediatric oseltamivir dose is actually given in the text.",
      "Extending the course in immunocompromised patients reflects external guideline practice (e.g. IDSA), not a finding of this review's own comparative synthesis.",
      "A separate observational signal (not reflected in this box's 75 mg dose) found double-dose oseltamivir (150 mg twice daily) associated with better survival than standard dose in one severe-pneumonia cohort — flagged in the review as needing confirmation, not yet adopted here."
    ],
    refs: [4, 5, 13, 14, 20, 24]
  },
  {
    id: "iv_peramivir",
    type: "branch",
    label: "NO: intravenous peramivir",
    sub: "300–600 mg once daily for ≥5 days (renal dose adjustment; weight-based in children); a single dose is insufficient in pneumonia",
    meaning:
      "When the enteral route is unreliable, multi-day IV peramivir — not the single-dose regimen used for uncomplicated outpatient influenza — is given instead, adjusted for renal function or by weight in children.",
    rationale:
      "IV peramivir bypasses GI absorption and hepatic esterase conversion entirely, reaches inhibitory airway concentrations quickly and for a sustained period, and the review found it at least as well tolerated as oseltamivir with similar mortality, ICU, and length-of-stay outcomes. Multi-day dosing is specified because single 300–600 mg infusions were only validated for uncomplicated outpatient influenza — the one pneumonia-specific trial used a 5-day course.",
    cautions: [
      "No trial in this review actually tested 600 mg once daily for 5 or more days in pneumonia: the pneumonia-specific trial used 300 mg daily × 5 days, a phase 2 hospitalised trial used 200 or 400 mg daily × 5 days, and one severe-pneumonia cohort found 600 mg/day was not better than 300 mg/day. The 300–600 mg range reflects external severe-influenza dosing/labelling rather than a superiority finding.",
      "“A single dose is insufficient in pneumonia” is stated more cautiously in the review itself: a single dose is called “probably insufficient”, not categorically ruled out.",
      "Critically ill children can have a larger volume of distribution and faster peramivir clearance than package-insert data suggest, raising a real risk of underdosing in young children with severe disease — a caution not reflected in this box's “weight-based in children” line."
    ],
    refs: [9, 13, 14, 15, 19, 21, 22, 23, 24, 26]
  },
  {
    id: "supportive_care",
    type: "process",
    label: "Supportive and adjunctive care for all patients",
    sub: "Oxygen / ventilatory support; cultures and empirical antibiotics if bacterial coinfection suspected; avoid routine corticosteroids for influenza",
    meaning:
      "Both antiviral branches converge here: respiratory or organ support as needed, evaluation and treatment of suspected bacterial superinfection, and avoiding routine systemic corticosteroids for influenza itself.",
    rationale:
      "The review describes what looks like a ceiling effect of neuraminidase inhibition once pneumonia is established — outcomes and mortality at that point are driven largely by the host response, bacterial coinfection, and organ support, not by which antiviral was chosen. ICU salvage-therapy data back this: bacteraemia and septic shock, not antiviral choice, predicted death.",
    cautions: [
      "“Avoid routine corticosteroids for influenza” does not appear anywhere in the review's own body text — corticosteroids are mentioned only in two reference titles. This line reflects external clinical practice guidance, not a finding of this review.",
      "Likewise, ordering bacterial cultures and starting empirical antibiotics for suspected coinfection are standard external practice, not something the review's own synthesis evaluated directly — the review does identify bacterial coinfection, bacteraemia, and septic shock as major outcome drivers, just not this specific management step."
    ],
    refs: [2, 3, 7, 25]
  },
  {
    id: "d2",
    type: "decision",
    label: "Reassess at 48–72 h: clinical improvement?",
    sub: null,
    meaning:
      "Clinical re-evaluation after 2–3 days of antiviral and supportive therapy, to tell whether the patient is defervescing and stabilising, or whether treatment failure, a complication, or antiviral resistance needs to be considered.",
    rationale:
      "Median times to clinical stability or fever resolution in the hospitalised studies this review includes generally fall in the 1–3 day range, which is what makes 48–72 hours a reasonable checkpoint — patients who are not on that trajectory by then disproportionately turn out to have slow viral or clinical resolution, bacterial coinfection, or possible resistance.",
    cautions: [
      "The exact “48–72 h” window is not stated as a formal rule in the review's own text; it reflects standard clinical practice rather than a review finding.",
      "The review itself notes that outcome definitions for “clinical improvement” — fever thresholds, symptom scales, stability criteria — varied across its included studies, so this checkpoint is deliberately left as a clinical judgement rather than a fixed numeric threshold."
    ],
    refs: [14, 15, 11, 26, 21]
  },
  {
    id: "complete_course",
    type: "branch",
    label: "YES: complete the course",
    sub: "Switch IV peramivir to oral oseltamivir when the enteral route becomes reliable",
    meaning:
      "In a patient who is improving, finish the full course of at least 5 days — and if that course started as IV peramivir (because the enteral route was unreliable at the time), step down to oral oseltamivir once enteral absorption is restored.",
    rationale:
      "Standard hospitalised and pneumonia regimens run at least 5 days, longer when resolution is slow. Because the two agents are clinically equivalent and peramivir's whole rationale on this page is route reliability rather than superior efficacy, switching back to oral oseltamivir once that reliability returns is a straightforward stewardship step, not a clinical trade-off.",
    cautions: [
      "Sequential IV-to-oral step-down from peramivir to oseltamivir is not stated anywhere in the review's own text — the review discusses switching only in the context of salvage therapy after treatment failure. This step reflects standard antimicrobial stewardship practice rather than a reviewed finding.",
      "This branch is reached by both initial-choice branches (oral oseltamivir patients simply complete their course; only IV peramivir patients actually need the described switch)."
    ],
    refs: [14, 15, 21]
  },
  {
    id: "search_complications",
    type: "branch",
    tone: "alarm",
    label: "NO: search for coinfection or complications; test for NA resistance (H275Y)",
    sub: "H275Y confers cross-resistance to peramivir: consider IV zanamivir; extend therapy",
    meaning:
      "If the patient is not improving by 48–72 hours: look for secondary bacterial infection or non-viral complications (bacteraemia, septic shock, ARDS), test for the H275Y neuraminidase resistance substitution, and extend the antiviral course beyond 5 days if resistance is not the explanation.",
    rationale:
      "Non-response and death in severe influenza pneumonia and ICU salvage cohorts are driven mainly by bacterial superinfection, bacteraemia, septic shock, and respiratory failure rather than antiviral choice. Separately, H275Y is a documented cross-resistance pathway shared by oseltamivir and peramivir in A(H1N1)pdm09 viruses — reported in real community and school-outbreak clusters, and enhanced by dual neuraminidase substitutions in immunocompromised patients — so peramivir is not a fallback for documented H275Y-resistant infection.",
    cautions: [
      "This is the one box where the figure and the review's own text meaningfully diverge: the review never recommends IV zanamivir for H275Y resistance. It mentions IV zanamivir only to say that in a large phase 3 trial it was not superior to oral oseltamivir in hospitalised patients, and that it is not widely available. “Consider IV zanamivir” for resistance reflects external guidelines and pharmacology literature, not this review's own synthesis — and its limited availability should be weighed alongside it.",
      "Routine resistance testing at 48–72 hours of non-improvement is not stated as an operational protocol in the review, which discusses H275Y mainly from a surveillance/virology angle.",
      "H275Y is specifically a resistance pathway described in A(H1N1)pdm09 viruses — the review does not state that it applies the same way to A(H3N2), H7N9, or influenza B.",
      "“Consider IV zanamivir; extend therapy” bundles two different situations together: confirmed H275Y resistance (where continuing either oseltamivir or peramivir is undermined by cross-resistance, and an alternative agent is needed) versus slow resolution without resistance (where simply extending the current agent beyond 5 days is what the evidence actually supports)."
    ],
    refs: [2, 7, 21, 25, 27, 28, 29, 30]
  },
  {
    id: "evidence_summary",
    type: "terminal",
    tone: "note",
    label:
      "Evidence: peramivir is non-inferior but not superior to oseltamivir; fever resolves ~7–11 h sooner (below MCID); no mortality difference (GRADE low to very low)",
    sub: null,
    meaning:
      "This closing banner is the review's own bottom line: don't mistake peramivir's IV route or statistically faster fever resolution for clinical superiority over oral oseltamivir.",
    rationale:
      "A 7–11-hour fever advantage (Cohen's d ≈ 0.2–0.4) falls below both the review's own distribution-based minimal-clinically-important-difference threshold (d = 0.5) and its 24-hour absolute anchor, with no reduction in mortality, ICU admission, mechanical ventilation, or hospital stay across the review's included RCTs, cohorts, and prior meta-analyses. Certainty of evidence is rated low to very low for the pneumonia-specific and mortality outcomes specifically (moderate for adverse events).",
    cautions: [
      "Formal statistical non-inferiority was established mainly in outpatient, uncomplicated influenza; for hospitalised mortality the review is explicit that observational data “suggests” non-inferiority but “cannot establish equivalence”, and the one pneumonia-specific RCT (n = 40) “cannot exclude clinically meaningful differences in patient-important outcomes.”",
      "GRADE certainty is not uniform across outcomes: mortality and length of hospital/ICU stay are rated very low, fever resolution / symptom alleviation / viral clearance / progression to pneumonia are rated low, and adverse events are rated moderate."
    ],
    refs: [31, 32, 33, 34, 13, 14, 15, 16, 10, 11, 35, 26]
  }
];

const GLOSSARY = [
  { match: "NAI", full: "neuraminidase inhibitor", def: "The antiviral drug class that includes oseltamivir, peramivir, and zanamivir, which block the viral neuraminidase enzyme needed for new virus particles to leave an infected cell." },
  { match: "RT-PCR", full: "reverse transcription polymerase chain reaction", def: "A molecular test that detects viral genetic material directly; more sensitive than rapid antigen testing but often with a slower turnaround." },
  { match: "H275Y", full: "histidine-275-to-tyrosine substitution", def: "A substitution in the influenza neuraminidase enzyme (at position 275 in N1 numbering) that confers resistance to oseltamivir and, in A(H1N1)pdm09 viruses, cross-resistance to peramivir as well." },
  { match: "MCID", full: "minimal clinically important difference", def: "The smallest difference in an outcome that patients or clinicians would consider meaningful — used here as a threshold (Cohen's d = 0.5) to judge whether a statistically significant finding is actually clinically important." },
  { match: "GRADE", full: "Grading of Recommendations Assessment, Development and Evaluation", def: "A structured framework for rating how much confidence to place in a body of evidence, from very low to high certainty." },
  { match: "ARDS", full: "acute respiratory distress syndrome", def: "Severe, diffuse lung injury causing acute hypoxaemic respiratory failure — a recognised complication of severe influenza pneumonia." },
  { match: "ICU", full: "intensive care unit", def: "A hospital unit providing the highest level of monitoring and organ support for critically ill patients." }
];

// Clinical agent (drug) names to visually emphasise wherever they appear —
// in the diagram boxes themselves and in the readout panel's prose. This
// is a rendering-only concern (app.js wraps each match in a styled span at
// render time); it never touches label/sub, which stay byte-exact as
// authored. Matching is case-insensitive and whole-word, longest name
// first.
const AGENTS = ["oseltamivir", "peramivir", "zanamivir", "baloxavir marboxil"];
