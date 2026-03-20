// data.js
const PM_DATA = [
  { id: 'p1', name: 'Alice Chen', role: 'Senior Product Manager', products: ['prod1', 'prod4'] },
  { id: 'p2', name: 'Bob Smith', role: 'Product Manager', products: ['prod2'] },
  { id: 'p3', name: 'Charlie Davis', role: 'Associate Product Manager', products: ['prod3'] },
  { id: 'p4', name: 'Diana King', role: 'VP of Product', products: [] },
  { id: 'p5', name: 'Evan Wright', role: 'Product Manager', products: ['prod5', 'prod6'] },
];

const PRODUCT_DATA = [
  { id: 'prod1', name: 'Candidate Experience Portal', desc: 'The main careers site module for candidates to apply and track status.', ownerId: 'p1' },
  { id: 'prod2', name: 'AI Scheduling Assistant', desc: 'Automated interview scheduling tool using Phenom AI.', ownerId: 'p2' },
  { id: 'prod3', name: 'Analytics Dashboard', desc: 'Internal reporting for talent acquisition teams.', ownerId: 'p3' },
  { id: 'prod4', name: 'Employee Referrals', desc: 'Internal tool for employees to refer candidates.', ownerId: 'p1' },
  { id: 'prod5', name: 'CRM Campaigns', desc: 'Email marketing tools for recruiters to engage talent pools.', ownerId: 'p5' },
  { id: 'prod6', name: 'University Recruiting App', desc: 'Mobile app for career fairs and university events.', ownerId: 'p5' }
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
