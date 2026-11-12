const projects = [
  {
    title: "AI-enabled delivery framework",
    organization: "Financial services",
    period: "Current portfolio",
    status: "In development",
    categories: ["ai", "automation", "governance", "leadership"],
    tags: ["Agentic AI", "Delivery design", "Governance", "Knowledge systems"],
    summary: "A reusable framework for AI-assisted requirements, workflow development, testing, governance, and operational handoffs.",
    challenge: "Complex analytics delivery can become slow and fragmented when requirements, development assets, approvals, and support knowledge live in separate places.",
    contribution: "Leads strategy, solution architecture, cross-functional development, orchestration design, user experience, and the operating model for consistent handoffs.",
    impact: "Designed to improve delivery consistency, reduce avoidable rework, and make institutional knowledge reusable while preserving quality and controls.",
    technology: "Agentic AI patterns, large language models, workflow orchestration, enterprise knowledge bases, automation utilities, and governed delivery practices."
  },
  {
    title: "Identity document validation capability",
    organization: "Financial services",
    period: "Current portfolio",
    status: "Delivered and expanding",
    categories: ["automation", "data", "governance", "leadership"],
    tags: ["Document intelligence", "Validation controls", "Batch processing"],
    summary: "An enterprise validation capability that strengthens account-opening controls and supports broader historical and ongoing review needs.",
    challenge: "Manual validation created operational friction, external dependency, and uneven control coverage across channels.",
    contribution: "Led strategy and delivery across operations, product, technology, risk, and compliance; then shaped the next phase for scalable batch processing and broader coverage.",
    impact: "Improved throughput and control visibility while creating a path to expand validation coverage. Specific productivity and cost figures are withheld pending publication approval.",
    technology: "Document extraction, validation logic, exception handling, batch processing, operational controls, and cross-functional governance."
  },
  {
    title: "Regulatory investigation data foundation",
    organization: "Financial services",
    period: "Current portfolio",
    status: "Delivered",
    categories: ["data", "ai", "automation"],
    tags: ["Data staging", "Machine learning", "LLM enablement", "ETL"],
    summary: "Reusable data staging that consolidates customer, transaction, claims, and case information into analyst-ready views.",
    challenge: "Investigators had to gather information manually across multiple systems before analysis could begin.",
    contribution: "Led delivery of consolidated data views and repeatable processing patterns, then partnered with AI and product teams to extend the foundation into predictive routing and narrative support.",
    impact: "Reduced manual data gathering and enabled downstream machine-learning and generative-AI use cases. Sensitive scale and capacity figures are intentionally excluded.",
    technology: "Data integration, ETL, batch processing, analyst-ready views, predictive modeling, and LLM-enabled documentation."
  },
  {
    title: "Responsible AI portfolio enablement",
    organization: "Financial services",
    period: "Current portfolio",
    status: "Ongoing",
    categories: ["ai", "governance", "leadership"],
    tags: ["AI strategy", "Use-case intake", "Workshops", "Production readiness"],
    summary: "A structured approach to move AI ideas from education and discovery into prioritized, governed, production-ready opportunities.",
    challenge: "Emerging AI demand was broad, while teams needed a consistent way to assess value, feasibility, controls, and readiness.",
    contribution: "Leads workshops, ideation, portfolio intake, prioritization, governance coordination, leadership reporting, and alignment with enterprise technology partners.",
    impact: "Expanded practical AI fluency and created a repeatable path from idea to governed delivery. Opportunity counts are withheld until externally approved.",
    technology: "Generative AI, prompt engineering, knowledge bases, AI assistants, governance reviews, and change enablement."
  },
  {
    title: "Due diligence data modernization",
    organization: "Financial services",
    period: "Current portfolio",
    status: "In development",
    categories: ["data", "ai", "automation", "governance"],
    tags: ["KYC", "Data integration", "Exception-based review", "AI assistance"],
    summary: "A reusable data-staging approach that brings customer profiles, transaction summaries, risk indicators, and supporting detail into review-ready views.",
    challenge: "Reviewers need complete, consistent context without repeating manual collection across enterprise sources.",
    contribution: "Directs design and development using proven staging patterns while coordinating governance and a future path for AI-assisted review narratives.",
    impact: "Aims to accelerate review preparation and support more consistent exception-based processing; projected capacity benefits are not presented as achieved results.",
    technology: "Data staging, risk indicators, transaction summarization, batch processing, exception handling, and AI-assisted narratives."
  },
  {
    title: "Regulatory automation portfolio",
    organization: "Financial services",
    period: "2022 - 2024",
    status: "Delivered",
    categories: ["automation", "data", "leadership"],
    tags: ["Portfolio management", "Alteryx", "Python", "SQL"],
    summary: "A multi-year book of work that converted regulatory operations needs into prioritized analytics and automation delivery.",
    challenge: "A growing pipeline of operational requests required consistent intake, capacity planning, requirements, delivery ownership, and benefit tracking.",
    contribution: "Managed prioritization, developer capacity, sprint planning, requirements, stakeholder engagement, delivery timelines, and benefit governance.",
    impact: "Established a durable portfolio operating rhythm and delivered multiple production automations while maintaining clear control ownership.",
    technology: "Alteryx, Python, SQL, requirements management, agile planning, production controls, and benefit governance."
  },
  {
    title: "Production support operating model",
    organization: "Financial services",
    period: "2022 - 2024",
    status: "Delivered",
    categories: ["governance", "leadership", "automation"],
    tags: ["Break-fix", "SLA", "Knowledge transfer", "Controls"],
    summary: "A structured support program for faster issue triage, stronger first-line capability, and reliable production workflows.",
    challenge: "Production issues frequently escalated to developers, slowing resolution and concentrating support knowledge in too few people.",
    contribution: "Standardized triage, documented resolution paths, trained first-line support, and reinforced ownership, peer review, and stakeholder communication.",
    impact: "Improved same-day resolution capability, reduced avoidable escalations, and strengthened production resilience.",
    technology: "Incident triage, production controls, knowledge management, service levels, and targeted technical training."
  },
  {
    title: "Data integrity and audit readiness",
    organization: "Financial services",
    period: "2022 - 2024",
    status: "Delivered",
    categories: ["data", "governance"],
    tags: ["Data quality", "Reconciliation", "Audit", "Reporting controls"],
    summary: "Cross-functional remediation of source-to-reporting discrepancies across regulated data and reporting inventories.",
    challenge: "Data mismatches and legacy logic created control risk and required evidence-backed remediation before audit deadlines.",
    contribution: "Partnered with business stakeholders to validate sources, reconcile differences, refine requirements, enhance logic, and document controls.",
    impact: "Strengthened accuracy, control effectiveness, and audit readiness while preserving reporting continuity.",
    technology: "SQL, SAS, Alteryx, reconciliation, data-quality validation, controls documentation, and audit evidence."
  },
  {
    title: "Cloud data and self-service BI",
    organization: "Dematic",
    period: "2020 - 2022",
    status: "Delivered",
    categories: ["data", "automation"],
    tags: ["Snowflake", "Power BI", "Power Apps", "ETL"],
    summary: "Cloud data workflows and KPI products that integrated enterprise sources and improved performance visibility across regional teams.",
    challenge: "Business reporting depended on manual refreshes and fragmented data sources, limiting timely access to operational performance.",
    contribution: "Developed SQL queries, automated ETL, dimensional models, dashboards, and business applications with close stakeholder collaboration.",
    impact: "Reduced refresh and reporting effort while enabling more consistent self-service analytics and operational decision support.",
    technology: "Snowflake, SQL, Alteryx, Power Query, Power BI, Power Apps, dimensional modeling, and DirectQuery."
  },
  {
    title: "Customer segmentation and credit strategy",
    organization: "EXL Service",
    period: "2017 - 2019",
    status: "Delivered",
    categories: ["data", "leadership"],
    tags: ["SAS", "SQL", "K-Means", "Regression"],
    summary: "Segmentation and predictive models that supported acquisition strategy, credit recommendations, and portfolio decision-making.",
    challenge: "Large customer portfolios required evidence-based segmentation and offer strategies that balanced growth, relevance, and risk.",
    contribution: "Developed clustering and regression models, created customer personas, automated analysis, and translated findings for product and marketing stakeholders.",
    impact: "Improved the precision of acquisition and cross-sell decisions; client-specific metrics are omitted from this public version.",
    technology: "SAS, SQL, R, K-Means, regression, experimentation, customer analytics, and stakeholder storytelling."
  },
  {
    title: "Marketing reporting automation",
    organization: "EXL Service",
    period: "2016 - 2019",
    status: "Delivered",
    categories: ["data", "automation"],
    tags: ["SAS macros", "Tableau", "MicroStrategy", "ETL"],
    summary: "Automated recurring product and campaign reporting while expanding self-service access to marketing performance insights.",
    challenge: "Manual reporting cycles consumed analyst time and delayed access to consistent performance measures.",
    contribution: "Built reusable SAS routines, streamlined ETL, and designed self-service dashboards for recurring KPI analysis.",
    impact: "Reduced manual reporting effort and improved the reliability and speed of performance insight.",
    technology: "SAS, SQL, ETL, Tableau, MicroStrategy, KPI design, and data-quality controls."
  },
  {
    title: "Consumer segmentation strategy",
    organization: "Analytics Quotient",
    period: "2015 - 2016",
    status: "Delivered",
    categories: ["data"],
    tags: ["SPSS", "K-Means", "CHAID", "Marketing analytics"],
    summary: "National consumer research transformed into actionable audience segments and product-targeting recommendations.",
    challenge: "A large consumer survey dataset needed to be cleansed, organized, and converted into differentiated behavioral profiles.",
    contribution: "Built K-Means segments and a CHAID decision tree, then connected statistical findings to multichannel marketing recommendations.",
    impact: "Created clearer targeting logic for product rollout strategy without exposing client-specific commercial detail.",
    technology: "SPSS, K-Means clustering, CHAID, survey analytics, consumer profiling, and campaign strategy."
  },
  {
    title: "Global marketing data foundation",
    organization: "Mu Sigma",
    period: "2015",
    status: "Delivered",
    categories: ["data", "automation"],
    tags: ["SAS", "SQL", "Salesforce", "Tableau"],
    summary: "A consolidated marketing dataset and dashboard layer supporting recurring reporting and customer-journey analysis across global regions.",
    challenge: "Marketing data from multiple touchpoints required consistent preparation before teams could analyze campaign performance and customer journeys.",
    contribution: "Developed data consolidation workflows, performed regression analysis, and designed interactive performance dashboards.",
    impact: "Reduced recurring data preparation and improved access to cross-region marketing insight.",
    technology: "SAS, SQL, Salesforce data, regression, Tableau, campaign KPIs, and customer-journey analytics."
  }
];

const skills = [
  { category: "AI & Advanced Analytics", capabilities: "Generative AI, agentic AI solution design, LLM enablement, AI governance, machine learning, predictive modeling, NLP, prompt engineering", application: "AI strategy, governed adoption, decision support, workflow assistance" },
  { category: "Data Engineering & Automation", capabilities: "ETL pipelines, data modeling, Alteryx, AWS Glue, AWS Lambda, PySpark, UiPath, Camunda DMN", application: "Reusable data products, workflow automation, batch processing, controls" },
  { category: "Programming & Data Science", capabilities: "Python, SQL, SAS, R, NumPy, Pandas, SciPy, scikit-learn, TensorFlow, C++, VBA", application: "Analysis, model development, data transformation, automation" },
  { category: "Business Intelligence", capabilities: "Power BI, Tableau, MicroStrategy, Power Apps, KPI and OKR design", application: "Executive visibility, self-service analytics, operational reporting" },
  { category: "Data Platforms", capabilities: "Snowflake, Microsoft SQL Server, MySQL, MongoDB, Hadoop, Spark, Hive, Impala", application: "Cloud data warehousing, relational and NoSQL analysis, big-data processing" },
  { category: "Leadership & Delivery", capabilities: "Portfolio strategy, stakeholder management, capacity planning, governance, production reliability, audit readiness, coaching, mentoring", application: "Enterprise execution, adoption, controls, and capability building" }
];

const projectGrid = document.querySelector("#project-grid");
const projectEmpty = document.querySelector("#project-empty");
const projectSearch = document.querySelector("#project-search");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const modal = document.querySelector("#project-modal");
const modalContent = document.querySelector("#modal-content");
let activeFilter = "all";

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function projectCard(project, index) {
  return `<article class="project-card" data-index="${index}">
    <div class="project-meta"><span>${escapeHtml(project.organization)}</span><span class="project-status">${escapeHtml(project.status)}</span></div>
    <h3>${escapeHtml(project.title)}</h3>
    <p>${escapeHtml(project.summary)}</p>
    <div class="project-tags">${project.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
    <button type="button" data-project="${index}">View project details <span aria-hidden="true">→</span></button>
  </article>`;
}

function renderProjects() {
  const query = projectSearch.value.trim().toLowerCase();
  const visible = projects.map((project, index) => ({ project, index })).filter(({ project }) => {
    const categoryMatch = activeFilter === "all" || project.categories.includes(activeFilter);
    const text = [project.title, project.organization, project.summary, project.tags.join(" ")].join(" ").toLowerCase();
    return categoryMatch && (!query || text.includes(query));
  });
  projectGrid.innerHTML = visible.map(({ project, index }) => projectCard(project, index)).join("");
  projectEmpty.hidden = visible.length > 0;
  projectGrid.querySelectorAll("[data-project]").forEach(button => {
    button.addEventListener("click", () => openProject(projects[Number(button.dataset.project)]));
  });
}

function openProject(project) {
  modalContent.innerHTML = `
    <div class="project-meta"><span>${escapeHtml(project.organization)} · ${escapeHtml(project.period)}</span><span class="project-status">${escapeHtml(project.status)}</span></div>
    <h2 id="modal-title">${escapeHtml(project.title)}</h2>
    <div class="project-tags">${project.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
    <section class="modal-section"><h3>Business challenge</h3><p>${escapeHtml(project.challenge)}</p></section>
    <section class="modal-section"><h3>Leadership and contribution</h3><p>${escapeHtml(project.contribution)}</p></section>
    <section class="modal-section"><h3>Business impact</h3><p>${escapeHtml(project.impact)}</p></section>
    <section class="modal-section"><h3>Technology and methods</h3><p>${escapeHtml(project.technology)}</p></section>`;
  if (typeof modal.showModal === "function") modal.showModal();
  else modal.setAttribute("open", "");
  document.body.classList.add("modal-open");
}

function closeModal() {
  if (typeof modal.close === "function") modal.close();
  else modal.removeAttribute("open");
  document.body.classList.remove("modal-open");
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach(item => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderProjects();
  });
});
projectSearch.addEventListener("input", renderProjects);
modal.querySelector(".modal-close").addEventListener("click", closeModal);
modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
modal.addEventListener("cancel", () => document.body.classList.remove("modal-open"));

const skillsBody = document.querySelector("#skills-body");
const skillsSearch = document.querySelector("#skills-search");
const skillsCategory = document.querySelector("#skills-category");
const skillsEmpty = document.querySelector("#skills-empty");

function renderSkills() {
  const query = skillsSearch.value.trim().toLowerCase();
  const category = skillsCategory.value;
  const visible = skills.filter(skill => {
    const categoryMatch = category === "all" || skill.category === category;
    const text = `${skill.category} ${skill.capabilities} ${skill.application}`.toLowerCase();
    return categoryMatch && (!query || text.includes(query));
  });
  skillsBody.innerHTML = visible.map(skill => `<tr><td>${escapeHtml(skill.category)}</td><td>${escapeHtml(skill.capabilities)}</td><td>${escapeHtml(skill.application)}</td></tr>`).join("");
  skillsEmpty.hidden = visible.length > 0;
}

skillsSearch.addEventListener("input", renderSkills);
skillsCategory.addEventListener("change", renderSkills);

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#site-menu");
navToggle.addEventListener("click", () => {
  const open = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!open));
  navLinks.classList.toggle("open", !open);
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}));

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-40% 0px -50%", threshold: 0 });

document.querySelectorAll("main section[id]").forEach(section => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .1 });
document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

renderProjects();
renderSkills();

