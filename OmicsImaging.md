---
title: "Omics, Imaging Analysis"
logoImg: "RuiXiaoStamp.png"
theme : simple
transition: fade
highlightTheme: monokai
slideNumber: true
center: false
margin: 0.04
disableLayout: false
---
<style>
  html * { font-family: serif }
  #logo > img { opacity: 0.65 }
  img { object-fit:scale-down; border:0px !important; }
  .reveal h1, .reveal h3, .reveal h5 { font-size:1.3em; text-transform:none; text-align:center; }
  .reveal h2, .reveal h4, .reveal h6 { font-size:1.3em; text-transform:none; text-align:left; }
  hr { border: 1px solid darkred; }
  .reveal p, .reveal div { font-size:0.85em}
</style>

# Integrated Omics, Biomedical Imaging, and Sequencing Data Analysis
<hr/>

<div style="display:grid;gap:15px;">
<img style="grid-row:1;grid-column:1" src="resource/LSU.png"/>
<img style="grid-row:1;grid-column:3" src="resource/CU.png"/>
<img style="grid-row:2;grid-column:1" src="resource/Asuragen.png"/>
<img style="grid-row:2;grid-column:2" src="resource/Myokardia.png"/>
<img style="grid-row:2;grid-column:3" src="resource/BMS.png"/>
<p style="grid-row:1/3;grid-column:4;text-align:right" >
  <br/><br/><br/><br/>
  Rui Xiao, Ph.D.<br/>
  Principal Scientist<br/>
  Informatics & Predictive Sciences<br/>
  Bristol Myers Squibb<br/>
  2022-08-05
</p>
</div>

--

## Selected Publications:

:::block {style=font-size:15px}
1. **Xiao R**, Goldklang MP, Stearns KN, D'Armiento JM. Deep Learning in Computer Vision Provides Valuable Insights and Improved Efficiency for Lung Cytology and Histopathology. Am J Respir Crit Care Med. 2019;199:A5761
1. Goldklang MP, Tekabe Y, Zelonina T, Trischler J, **Xiao R**, Stearns K, Rodriguez K, Shields A, Romanov A, D'Armiento JM, Johnson LL. Single-photon emission computed tomography/computed tomography imaging of RAGE in smoking-induced lung injury. Respir Res. 2019 Jun 10;20(1):116.
1. Dunham-Snary KJ, Sandel MW, Sammy MJ, Westbrook DG, **Xiao R**, McMonigle RJ, Ratcliffe WF, Penn A, Young ME, Ballinger SW. Mitochondrial - nuclear genetic interaction modulates whole body metabolism, adiposity and gene expression in vivo. EBioMedicine. 2018 Oct;36:316-328
1. **Xiao R**, Goldklang MP, D'Armiento JM. Reply: Parenchymal Airspace Profiling Has Its Merits and Is a Valuable Addition to Existing Methods for Lung Morphometry. Am J Respir Cell Mol Biol. 2017 Jul;57(1):132-133.
1. Noël A, **Xiao R**, Perveen Z, Zaman H, Le Donne V, Penn A. Sex-specific lung functional changes in adult mice exposed only to second-hand smoke in utero. Respir Res. 2017 Jun 27;18(1):104.
1. Goldklang MP, Tekabe Y, Zelonina T, Trischler J, **Xiao R**, Stearns K, Romanov A, Muzio V, Shiomi T, Johnson LL, D'Armiento JM. Single-Photon Emission Computed Tomography/Computed Tomography Imaging in a Rabbit Model of Emphysema Reveals Ongoing Apoptosis In Vivo. Am J Respir Cell Mol Biol. 2016 Dec;55(6):848-857.
1. **Xiao R**, Goldklang MP, D'Armiento JM. Parenchymal Airspace Profiling: Sensitive Quantification and Characterization of Lung Structure Evaluating Parenchymal Destruction. Am J Respir Cell Mol Biol. 2016 Nov;55(5):708-715.
1. Xie T, Liang J, Liu N, Huan C, Zhang Y, Liu W, Kumar M, **Xiao R**, D'Armiento J, Metzger D, Chambon P, Papaioannou VE, Stripp BR, Jiang D, Noble PW. Transcription factor TBX4 regulates myofibroblast accumulation and lung fibrosis. J Clin Invest. 2016 Aug 1;126(8):3063-79.
1. **Xiao R**, Noël A, Perveen Z, Penn AL. In utero exposure to second-hand smoke activates pro-asthmatic and oncogenic miRNAs in adult asthmatic mice. Environ Mol Mutagen. 2016 Apr;57(3):190-9.
1. Noël A, **Xiao R**, Perveen Z, Zaman HM, Rouse RL, Paulsen DB, Penn AL. Incomplete lung recovery following sub-acute inhalation of combustion-derived ultrafine particles in mice. Part Fibre Toxicol. 2016 Feb 24;13:10.
1. **Xiao R**, Perveen Z, Rouse RL, Le Donne V, Paulsen DB, Ambalavanan N, Penn AL. In utero exposure to second-hand smoke aggravates the response to ovalbumin in adult mice. Am J Respir Cell Mol Biol. 2013 Dec;49(6):1102-9.
1. Nelson P, Ngoc Tran TD, Zhang H, Zolochevska O, Figueiredo M, Feng JM, Gutierrez DL, **Xiao R**, Yao S, Penn A, Yang LJ, Cheng H. Transient receptor potential melastatin 4 channel controls calcium signals and dental follicle stem cell differentiation. Stem Cells. 2013 Jan;31(1):167-77.
1. **Xiao R**, Perveen Z, Paulsen D, Rouse R, Ambalavanan N, Kearney M, Penn AL. In utero exposure to second-hand smoke aggravates adult responses to irritants: adult second-hand smoke. Am J Respir Cell Mol Biol. 2012 Dec;47(6):843-51.
1. Bui A, **Xiao R**, Perveen Z, Kleinow K, Penn A. Zebrafish embryos sequester and retain petrochemical combustion products: developmental and transcriptome consequences. Aquat Toxicol. 2012 Feb;108:23-32.
:::

---

## My academic research focused on the effects of smoke exposure both in utero and as adult - Background
<hr/>

<div style="display:grid;gap:25px;">

<div style="grid-row:1/3;grid-column:1/4">
  <ul style="float:left" >
  <li style="padding:8px 0px">According to <i>"Pregnancy Risk Assessment and Monitoring System, 2010."</i> </li>
    <ul>
      <li>25% of adults smoke regularly; </li>
      <li>10.7% females smoke during last 3 months of pregnancy.</li>
    </ul>
  <li style="padding:8px 0px">Epidemiological studies have associated in utero or prenatal exposure to second-hand smoke (SHS) with altered lung function and exacerbated asthmatic responses in children.</li>
  <li style="padding:8px 0px">Animal experiments can be designed to: i) expose pregnant female mice to side-stream smoke during day 6-19 of gestation; ii) assess the postnatal or adult responses to environmental stressors.</li>
  <img src="resource/SHSOVATimeline.png" />
  </ul>
</div>
<img style="grid-row:1;grid-column:4" src="resource/SmokeMother.jpg" />
<img style="grid-row:2;grid-column:4"  src="resource/SmokeMouse.jpg" />

</div>

---

