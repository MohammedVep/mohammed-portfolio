import { Education } from '@/lib/types';

export const educationData: Education[] = [
  {
    institution: 'Algoma University',
    degree: 'Honours Bachelor of Computer Science ',
    date: 'Graduated in June 2026',
    gpa: '3.7/4.0',
    honours: true,
    proofUrl: '/Mohammed_Vepari_BCS_Honours_Degree_Proof.pdf',
    proofLabel: 'View Degree Proof',
    coursework: [
      'Operating Systems',
      'Distributed Systems (85%)',
      'Theory of Computing',
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'Database Systems',
      'Discrete Mathematics',
      'Web Application Development',
    ],
    awards: [
      'Algoma University Pathways Scholarship Award - Summit (2024-2025)',
      'Algoma university Pathways Scholarship Award - Summit (2025-2026)'
    ]
  },
  {
    institution: 'George Brown College',
    degree: 'Computer Programming and Analysis (3 year advanced diploma program)',
    date: 'Graduated in September 2023',
    gpa: '3.72/4.0',
    honours: true,
    coursework: ['Spring Boot', 'Python', 'SQL', 'Software Design', 'Web Development']
  }
];
