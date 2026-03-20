// data.js
const PM_DATA = [
  { id: 'p1', name: 'Alice Chen', role: 'Senior Product Manager', products: ['c1', 'c3', 'm3'] },
  { id: 'p2', name: 'Bob Smith', role: 'Product Manager', products: ['c2', 'c4', 'r2', 'r4'] },
  { id: 'p3', name: 'Charlie Davis', role: 'Associate Product Manager', products: ['c6', 'e1', 'e2', 'e4'] },
  { id: 'p4', name: 'Diana King', role: 'VP of Product', products: ['e3', 'm1', 'm2', 'i1'] },
  { id: 'p5', name: 'Evan Wright', role: 'Product Manager', products: ['c5', 'r1', 'r3'] },
];

const PRODUCT_DATA = [
  { id: 'c1', category: 'Candidate Experience', name: 'Personalized Career Site', desc: 'Dynamic, brand-aligned destination for talent discovery.', ownerId: 'p1' },
  { id: 'c2', category: 'Candidate Experience', name: 'Phenom CMS', desc: 'Content management system for configuring careers sites without code.', ownerId: 'p2' },
  { id: 'c3', category: 'Candidate Experience', name: 'Chatbot', desc: 'Conversational AI to screen, answer FAQs, and convert candidates.', ownerId: 'p1' },
  { id: 'c4', category: 'Candidate Experience', name: 'Hosted Apply', desc: 'Seamless application workflow directly integrated via the career site.', ownerId: 'p2' },
  { id: 'c5', category: 'Candidate Experience', name: 'University Recruiting & Events', desc: 'Platform for career fairs, campus events, and talent capture.', ownerId: 'p5' },
  { id: 'c6', category: 'Candidate Experience', name: 'Talent Companion & Video Hub', desc: 'Advanced media platform for candidate enablement and employer branding.', ownerId: 'p3' },
  
  { id: 'e1', category: 'Employee Experience', name: 'Internal Talent Marketplace', desc: 'Platform for internal mobility and job discovery.', ownerId: 'p3' },
  { id: 'e2', category: 'Employee Experience', name: 'Referrals & Alumni Portal', desc: 'Tools for employees to refer external candidates and engage alumni.', ownerId: 'p3' },
  { id: 'e3', category: 'Employee Experience', name: 'Career Pathing & Mentoring', desc: 'AI-driven skill matching to map career trajectories and assign mentors.', ownerId: 'p4' },
  { id: 'e4', category: 'Employee Experience', name: 'Gigs & ERGs', desc: 'Short-term projects for internal skill building and employee resource group management.', ownerId: 'p3' },
  
  { id: 'r1', category: 'Recruiter Experience', name: 'Talent CRM', desc: 'Centralized hub to build pipelines, source passive talent, and track relationships.', ownerId: 'p5' },
  { id: 'r2', category: 'Recruiter Experience', name: 'AI Scheduling', desc: 'Automated 1:1, sequential, and panel interview scheduling.', ownerId: 'p2' },
  { id: 'r3', category: 'Recruiter Experience', name: 'Omnichannel Campaigns', desc: 'Email, SMS, and WhatsApp campaign creation with talent analytics.', ownerId: 'p5' },
  { id: 'r4', category: 'Recruiter Experience', name: 'Structured Interviews & Video', desc: 'Pre-recorded video evaluations and structured interview scorecards.', ownerId: 'p2' },
  
  { id: 'm1', category: 'Manager & HR Experience', name: 'Hiring Manager Portal', desc: 'Dedicated app for hiring managers to review resumes and feedback.', ownerId: 'p4' },
  { id: 'm2', category: 'Manager & HR Experience', name: 'Talent Analytics & Forecasting', desc: 'Deep insights into time-to-hire, diversity, and talent pipelines.', ownerId: 'p4' },
  { id: 'm3', category: 'Manager & HR Experience', name: 'Skills Ontology & AI', desc: 'Enterprise talent graph powering fit-scoring, gig-matching and bias detection.', ownerId: 'p1' },
  
  { id: 'i1', category: 'HRIT & Integrations', name: 'Automation & Integration Engine', desc: 'Bi-directional architecture connecting ATS/HCM systems (Real-Time Connectors, APIs).', ownerId: 'p4' }
];

const ONBOARDING_PLAN = [
  {
    week: 1,
    days: [
      {
        day: 1,
        tasks: [
          { id: 't1_1', title: 'Set up Okta, Slack, and email accounts', details: 'Ensure you have access to Phenom portals and join #product, #design, and #engineering slack channels.' },
          { id: 't1_2', title: 'Read Phenom Company Overview & Vision', details: 'Read the latest strategy document on Confluence so you understand the core product pillars.' },
          { id: 't1_3', title: 'Schedule 15-min intro with your manager', details: 'A quick sync to align on expectations and clarify your 30-day goals.' }
        ]
      },
      {
        day: 2,
        tasks: [
          { id: 't2_1', title: 'Review the full products list in the hub', details: 'Use the Products tab to see the ecosystem and figure out the owners for modules adjacent to yours.' },
          { id: 't2_2', title: 'Read the intro document for your assigned product', details: 'Review the PRD and UX files of the product you will be directly managing.' },
          { id: 't2_3', title: 'Join the #product-team Slack channel', details: 'Introduce yourself and read through recent product announcements.' }
        ]
      },
      {
        day: 3,
        tasks: [
          { id: 't3_1', title: 'Complete Security & Compliance Training', details: 'Mandatory infosec training found in the Learning portal (due by end of week 1).' },
          { id: 't3_2', title: 'Review Jira board structure and PM workflows', details: 'Locate the Jira board for your squad and observe the grooming process guidelines.' }
        ]
      }
    ]
  },
  {
    week: 2,
    days: [
      {
        day: 1,
        tasks: [
          { id: 't2_1_1', title: 'Review last quarters OKRs', details: 'Go to the strategy hub and review what the product team delivered last quarter.' },
          { id: 't2_1_2', title: 'Meet with Engineering lead', details: 'Set up time with your tech lead to understand architecture and tech debt.' }
        ]
      },
      {
        day: 2,
        tasks: [
          { id: 't2_2_1', title: 'Shadow a customer support call', details: 'Listen in on a customer call to hear firsthand about pain points.' },
          { id: 't2_2_2', title: 'Review customer feedback channels', details: 'Check through Pendo or Zendesk to observe common bug reports.' }
        ]
      }
    ]
  },
  {
    week: 3,
    days: [
      {
        day: 1,
        tasks: [
          { id: 't3_1_1', title: 'Write your first PRD draft', details: 'Draft a one-pager for a small feature to get familiar with our PRD template.' },
          { id: 't3_1_2', title: 'Meet with Design partner for UX/UI sync', details: 'Review wireframes with your product designer.' }
        ]
      }
    ]
  },
  {
    week: 4,
    days: [
      {
        day: 1,
        tasks: [
          { id: 't4_1_1', title: 'Present 30-day observations to team', details: 'A short 5-minute presentation on your fresh perspective of the product so far.' },
          { id: 't4_1_2', title: 'Take over backlog grooming & sprint planning', details: 'Officially start driving the agile ceremonies for your squad.' }
        ]
      }
    ]
  }
];
