import { Experience } from '@/lib/types';

export const experienceData: Experience[] = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      date: "2020 - Present",
      description: [
        "Scaled core services to 120K req/min with a 42% reduction in p95 latency by re-architecting request routing and caching.",
        "Reduced monthly cloud spend by 28% through workload consolidation and autoscaling policy tuning.",
        "Introduced contract testing and chaos drills that cut incident recovery time by 55% over two quarters.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Digital Solutions Co.",
      date: "2018 - 2020",
      description: [
        "Built ingestion pipelines handling 15M events/day with a 0.3% error rate and deterministic replays.",
        "Improved API reliability from 99.2% to 99.95% by adding canary releases and rollback automation.",
        "Optimized query paths to cut dashboard load times by 60% for enterprise customers.",
      ],
    },
  ];
