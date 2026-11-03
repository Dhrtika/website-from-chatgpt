/**
 * Editable source of truth for the site's public content.
 * Review experience, dates, qualifications and clinical scope before publishing.
 * No procedure counts are displayed until they are reconciled with clinic logs.
 */
export const site = {
  name: "Dhrtika Bhatia",
  initials: "DB",
  domain: "https://www.dhrtika.com",
  eyebrow: "CLINICIAN  /  RESEARCHER  /  INNOVATOR",
  headline: "Dentistry with precision. Care with purpose.",
  introduction:
    "An internationally trained dentist bringing clinical experience, research-driven thinking, and an enthusiasm for digital innovation to patient-centered care.",
  educationLine: "DMD Candidate · Temple University · Class of 2027",
  availability: "Expected graduation · May 2027",
  // Replace with real published links only; null removes the link from the UI.
  resumeUrl: null as string | null,
  linkedinUrl: null as string | null,
  email: null as string | null,
  portraitPath: null as string | null, // e.g. "/images/dhrtika-portrait.jpg"
  expertise: [
    {
      number: "01",
      title: "Comprehensive & restorative dentistry",
      description:
        "Direct and indirect restorations, crown and bridge workflows, removable prosthodontics, endodontic care, and comprehensive treatment planning.",
      tags: ["Restorative", "Prosthodontics", "Treatment planning"],
    },
    {
      number: "02",
      title: "Surgical & implant exposure",
      description:
        "Clinical experience with dental extractions and implant-restorative workflows, complemented by assisting and observation in complex oral and maxillofacial surgery.",
      tags: ["Oral surgery", "Implant restoration", "Interdisciplinary care"],
    },
    {
      number: "03",
      title: "Digital dentistry & innovation",
      description:
        "A growing focus on digital impressions, CAD/CAM workflows, 3D printing, and the thoughtful application of emerging technology in clinical dentistry.",
      tags: ["Digital workflows", "CAD/CAM", "3D printing"],
    },
  ],
  experience: [
    {
      organization: "Temple University · Kornberg School of Dentistry",
      role: "Doctor of Dental Medicine Candidate",
      period: "2025—2027 (expected)",
      details: "Advanced clinical education in comprehensive patient care, restorative treatment, and interdisciplinary planning.",
    },
    {
      organization: "University of Pennsylvania · School of Dental Medicine",
      role: "Periodontal Research Specialist",
      period: "2023—2025",
      details: "Contributed to investigations of periodontal inflammation, diabetes-associated mechanisms, and translational biomarker research.",
    },
    {
      organization: "UC San Diego · Moores Cancer Center",
      role: "Research Associate",
      period: "2022—2023",
      details: "Supported research on salivary biomarkers, molecular assays, clinical data, and analysis related to HPV-associated disease.",
    },
    {
      organization: "Bharati Vidyapeeth · India",
      role: "Bachelor of Dental Surgery",
      period: "2016—2021",
      details: "Established a foundation in clinical dentistry, patient management, and treatment across multiple dental specialties.",
    },
  ],
  research: [
    {
      index: "01 / ONCOLOGY",
      title: "Salivary biomarkers & oral oncology",
      description: "Exploring molecular signals and minimally invasive monitoring in HPV-associated disease.",
      detail: "UC San Diego · Moores Cancer Center",
    },
    {
      index: "02 / PERIODONTOLOGY",
      title: "Inflammation and systemic health",
      description: "Investigating periodontal tissue biology and mechanisms connecting diabetes and oral health.",
      detail: "University of Pennsylvania",
    },
    {
      index: "03 / INNOVATION",
      title: "Digital workflows & restorative design",
      description: "An interest in technology-enabled planning, precision fabrication, and accessible clinical innovation.",
      detail: "Ongoing professional interests",
    },
  ],
  about:
    "My journey began in India and has evolved through clinical dentistry, oncology research, periodontal science, and advanced dental education in the United States. I'm drawn to the intersection of evidence, craftsmanship, and technology—and to making complex care feel personal. Outside dentistry, I enjoy photography, surfing, sailing, and exploring new places.",
  contactHeadline: "Let's build something meaningful.",
  contactBody:
    "I'm interested in connecting with dental practices and clinical leaders who value comprehensive care, mentorship, innovation, and long-term professional growth.",
};
