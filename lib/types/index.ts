export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  date: string;
  gpa: string;
  honours: boolean;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  metrics?: string;
  formalProof?: string;
}
