import { Education } from '@/lib/types';

export const educationData: Education[] = [
  {
    institution: 'Algoma University',
    degree: 'Honours Bachelor of Computer Science',
    date: '2026',
    gpa: '83.95%',
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
  },
  {
    institution: 'George Brown College',
    degree: 'Computer Programming and Analysis',
    date: '2022 - 2023',
    gpa: '3.72/4.0',
    honours: true,
    coursework: ['Java', 'Python', 'SQL', 'Software Design', 'Web Development'],
  },
];
