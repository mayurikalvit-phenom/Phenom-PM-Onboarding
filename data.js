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
          { id: 't1_1', title: 'Set up Okta, Slack, and email accounts' },
          { id: 't1_2', title: 'Read Phenom Company Overview & Vision' },
          { id: 't1_3', title: 'Schedule 15-min intro with your manager' }
        ]
      },
      {
        day: 2,
        tasks: [
          { id: 't2_1', title: 'Review the full products list in the hub' },
          { id: 't2_2', title: 'Read the intro document for your assigned product' },
          { id: 't2_3', title: 'Join the #product-team Slack channel' }
        ]
      },
      {
        day: 3,
        tasks: [
          { id: 't3_1', title: 'Complete Security & Compliance Training' },
          { id: 't3_2', title: 'Review Jira board structure and PM workflows' }
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
          { id: 't2_1_1', title: 'Review last quarters OKRs' },
          { id: 't2_1_2', title: 'Meet with Engineering lead' }
        ]
      },
      {
        day: 2,
        tasks: [
          { id: 't2_2_1', title: 'Shadow a customer support call' },
          { id: 't2_2_2', title: 'Review customer feedback channels' }
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
          { id: 't3_1_1', title: 'Write your first PRD draft' },
          { id: 't3_1_2', title: 'Meet with Design partner for UX/UI sync' }
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
          { id: 't4_1_1', title: 'Present 30-day observations to team' },
          { id: 't4_1_2', title: 'Take over backlog grooming & sprint planning' }
        ]
      }
    ]
  }
];
