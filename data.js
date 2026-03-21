// data.js
const PM_DATA = [
  { id: 'p1', name: 'Alice Chen', role: 'Senior Product Manager', products: ['c1', 'c3', 'e1'] },
  { id: 'p2', name: 'Bob Smith', role: 'Product Manager', products: ['c2', 'c5', 'm1'] },
  { id: 'p3', name: 'Charlie Davis', role: 'Associate Product Manager', products: ['c6', 'r2', 'r3'] },
  { id: 'p4', name: 'Diana King', role: 'VP of Product', products: ['c7', 'r4', 'r5'] },
  { id: 'p5', name: 'Evan Wright', role: 'Product Manager', products: ['c4', 'r1', 'i1'] }
];

const PRODUCT_DATA = [
  { id: 'c1', category: 'Candidate Experience (CX)', name: 'CMS / Design Studio', desc: 'Design Studio to create and manage dynamic, brand-aligned career sites without code.', ownerId: 'p1' },
  { id: 'c2', category: 'Candidate Experience (CX)', name: 'Career Site', desc: 'The front-end destination designed for ultimate talent discovery and employer branding.', ownerId: 'p2' },
  { id: 'c3', category: 'Candidate Experience (CX)', name: 'Chatbot', desc: 'Conversational AI to screen candidates, answer FAQs, and convert visitors.', ownerId: 'p1' },
  { id: 'c4', category: 'Candidate Experience (CX)', name: 'Events', desc: 'Capabilities for managing career fairs, campus hiring, and networking events natively.', ownerId: 'p5' },
  { id: 'c5', category: 'Candidate Experience (CX)', name: 'Application (HA)', desc: 'Hosted Apply module directly integrated for quick candidate drop-off reduction.', ownerId: 'p2' },
  { id: 'c6', category: 'Candidate Experience (CX)', name: 'Voice Agent (One Way Interview)', desc: 'AI-activated voice screening and one-way recorded interviews.', ownerId: 'p3' },
  { id: 'c7', category: 'Candidate Experience (CX)', name: 'Video Capture', desc: 'Video generation and hosting for authentic employee testimonials.', ownerId: 'p4' },
  
  { id: 'r1', category: 'Recruiter Experience (RX)', name: 'Talent Marketplace', desc: 'Visual portal routing optimal talent profiles into recruiter pipelines.', ownerId: 'p5' },
  { id: 'r2', category: 'Recruiter Experience (RX)', name: 'Referrals', desc: 'Social and direct referral tracking to enhance employee-sourced pipelines.', ownerId: 'p3' },
  { id: 'r3', category: 'Recruiter Experience (RX)', name: 'ERGs', desc: 'Employee Resource Groups management mapped into the talent sourcing network.', ownerId: 'p3' },
  { id: 'r4', category: 'Recruiter Experience (RX)', name: 'Career Pathing', desc: 'AI trajectory mapping to aid recruiters in matching roles internally.', ownerId: 'p4' },
  { id: 'r5', category: 'Recruiter Experience (RX)', name: 'Mentoring', desc: 'Connectivity framework pairing senior experts with incoming recruits.', ownerId: 'p4' },

  { id: 'e1', category: 'Employee Experience (EX)', name: 'Internal Talent Discovery', desc: 'Tools for employees to discover their next internal career jump.', ownerId: 'p1' },
  { id: 'm1', category: 'Manager Experience (MX)', name: 'Hiring Manager Portal', desc: 'Streamlined candidate review workflows and feedback pipelines.', ownerId: 'p2' },
  { id: 'i1', category: 'Integrations', name: 'Real-Time Sync Engine', desc: 'Bi-directional architecture connecting HR systems natively.', ownerId: 'p5' }
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
