export const personalInfo = {
  name: "Amna Yousaf",
  title: "Software Engineer | Full-Stack & Mobile Developer | Applied AI",
  location: "Karachi, Pakistan",
  email: "amnayousuf538@gmail.com",
  github: "https://github.com/Amnayousaf25",
  vercel: "https://vercel.com/amna-yousafs-projects",
  linkedin: "https://www.linkedin.com/in/amna-yousaf-131a533a4/",
  resumePdf: "/Amna_Yousaf_CV.pdf",
  photo: "/amna-portrait.png",
  web3formsKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "",
  summaryStatement: "Software Engineer building scalable full-stack web applications, cross-platform mobile solutions, and intelligent AI integrations. Grounded in robust Computer Science foundations and production-grade engineering."
};

export const aboutContent = {
  headline: "Software Engineer specializing in Full-Stack Systems & Applied AI",
  paragraphs: [
    "I am a Software Engineer and Computer Science scholar with a strong analytical foundation in algorithms, software architecture, and relational database engineering. Driven by the craft of building resilient digital products, I bridge intuitive user experiences with high-performance backend systems.",
    "Across 6 months of hands-on software engineering internship experience in live production environments, I have engineered scalable web applications, cross-platform mobile solutions, and business intelligence dashboards using React, Next.js, React Native/Expo, Python Flask, and SQL. I excel at converting complex product requirements into clean, maintainable, and testable code.",
    "My technical focus actively intersects modern software engineering with Artificial Intelligence. I integrate state-of-the-art Large Language Models (LLMs) such as Google Gemini into production workflows, design context-aware applications, and continuously deepen my expertise in machine learning systems."
  ],
  stats: [
    { label: "Hands-on Internship Experience", value: "6 Mos" },
    { label: "Public Engineering Repos", value: "16+" },
    { label: "Computer Science Degree", value: "BS CS" },
    { label: "Graduation Target", value: "2027" }
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: "AI & Backend", primary: true },
      { name: "JavaScript (ES6+)", level: "Advanced", primary: true },
      { name: "TypeScript", level: "Advanced", primary: true },
      { name: "SQL", level: "Relational Queries", primary: true },
      { name: "Dart", level: "Mobile (Flutter)", primary: true }
    ]
  },
  {
    category: "Web & Mobile Engineering",
    icon: "Layers",
    skills: [
      { name: "React.js", level: "Frontend UI", primary: true },
      { name: "Next.js", level: "Full-Stack", primary: true },
      { name: "React Native & Expo", level: "Mobile Apps", primary: true },
      { name: "HTML5 / Modern CSS", level: "Responsive Design", primary: true }
    ]
  },
  {
    category: "Backend & APIs",
    icon: "Database",
    skills: [
      { name: "RESTful APIs", level: "Design & Integration", primary: true },
      { name: "Python Flask", level: "API Services", primary: true },
      { name: "MySQL & Relational DBs", level: "Schema Design", primary: true },
      { name: "Database Normalization", level: "Structured Data", primary: true }
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: "Brain",
    skills: [
      { name: "LLM API Integration (Gemini)", level: "Applied AI", primary: true },
      { name: "Prompt Engineering", level: "AI Workflows", primary: true },
      { name: "Machine Learning Foundations", level: "Core Concepts", primary: true },
      { name: "Data Analysis & Power BI", level: "Analytics", primary: true }
    ]
  },
  {
    category: "Tools & Core Foundations",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: "Version Control", primary: true },
      { name: "Postman", level: "API Testing", primary: true },
      { name: "Vercel & CI/CD", level: "Deployment", primary: true },
      { name: "Data Structures & OOP", level: "CS Fundamentals", primary: true }
    ]
  }
];

export const experienceData = [
  {
    title: "Software Engineering Intern",
    company: "Geeks of Kolachi",
    location: "Karachi, Pakistan",
    period: "Jun 2026 – Sep 2026",
    type: "Internship (3 Months)",
    description: "Built application functionality across web and mobile projects using React and React Native/Expo, alongside business intelligence tools.",
    highlights: [
      "Developed web and mobile application features using React and React Native/Expo, ensuring smooth cross-platform execution.",
      "Built business intelligence visual dashboards with Power BI to analyze internal data trends and operational metrics.",
      "Translated business requirements into working, debugged application components.",
      "Applied relational database and software engineering concepts on internal tooling using Git/GitHub for team version control."
    ],
    techStack: ["React", "React Native", "Expo", "Power BI", "JavaScript", "Git", "GitHub"]
  },
  {
    title: "Web Development Intern",
    company: "OPTIMARK Solution",
    location: "Karachi, Pakistan",
    period: "Sep 2025 – Nov 2025",
    type: "Internship (3 Months)",
    description: "Developed production website components using JavaScript and Next.js, handling end-to-end Vercel deployments.",
    highlights: [
      "Developed and debugged responsive UI components for live client-facing web projects using JavaScript, React, and Next.js.",
      "Collaborated within existing team codebases adhering to strict component architecture and code formatting standards.",
      "Managed domain-related deployment tasks end-to-end on Vercel, resolving post-deployment build and configuration issues.",
      "Recognized by company leadership for exceptional reliability and consistent on-time feature delivery throughout the internship."
    ],
    techStack: ["JavaScript", "Next.js", "React", "HTML5/CSS3", "Vercel", "Domain Management"]
  }
];

export const projectsData = [
  {
    id: "ai-study-assistant",
    title: "AI Study Assistant",
    type: "Mobile Application",
    category: "Mobile",
    isAiMl: true,
    featured: true,
    technologies: ["React Native", "Expo", "TypeScript", "Gemini LLM API"],
    summary: "Cross-platform mobile study assistant integrating Google's Gemini LLM API to generate customized study material and answer questions in real time.",
    github: "https://github.com/Amnayousaf25",
    demo: "https://vercel.com/amna-yousafs-projects",
    problem: "Students frequently struggle to get immediate, structured explanations and study aids tailored to their specific learning questions while studying on mobile devices.",
    solution: "Built a responsive cross-platform mobile application using React Native and Expo that connects directly with Google's Gemini API for instantaneous, interactive study guidance.",
    architecture: [
      "Frontend: Component-driven React Native UI built with TypeScript for strict type safety.",
      "State & API Layer: Asynchronous API request/response handling with real-time markdown-style response parsing for study notes.",
      "Cross-Platform Deployment: Configured with Expo SDK for seamless execution on both iOS and Android environments."
    ],
    contributions: [
      "Architected the TypeScript codebase and modular screen structure.",
      "Implemented secure API key management and error handling for LLM timeouts.",
      "Designed a clean chat interface optimized for mobile typography and rapid reading."
    ],
    outcomes: "Successfully delivered an intuitive mobile AI tool capable of generating real-time study notes, quiz questions, and topic summaries."
  },
  {
    id: "resume-builder",
    title: "Resume Builder Web Application",
    type: "Full-Stack Web Application",
    category: "Web",
    isAiMl: false,
    featured: true,
    technologies: ["Next.js", "TypeScript", "React", "Vercel CI/CD"],
    summary: "Production-ready web application enabling users to build, format, preview, and export customized professional resumes with real-time rendering.",
    github: "https://github.com/Amnayousaf25",
    demo: "https://vercel.com/amna-yousafs-projects",
    problem: "Job applicants often face formatting issues and rigid template options when creating resumes online without live feedback.",
    solution: "Created a full-featured Resume Builder with multi-step dynamic forms, instant side-by-side preview, optimized image uploads, and customizable typography.",
    architecture: [
      "Framework: Next.js App Router for server-rendered page efficiency and client-side form interactivity.",
      "State Management: Reactive local state handling multi-step form data (Experience, Education, Skills, Photo).",
      "Deployment Pipeline: Integrated Vercel automated CI/CD pipeline for instantaneous production releases upon Git commits."
    ],
    contributions: [
      "Built multi-step form components with input validation and dynamic section addition.",
      "Engineered real-time preview component that updates continuously as user types.",
      "Configured production deployment and image compression handlers."
    ],
    outcomes: "Deployed a live, accessible web app on Vercel that streamlines resume generation."
  },
  {
    id: "library-management",
    title: "Library Management System",
    type: "Backend & Systems Application",
    category: "Backend",
    isAiMl: false,
    featured: true,
    technologies: ["Flask", "Python", "SQL", "MySQL", "Operating Systems SJF Algorithm"],
    summary: "Backend management system applying relational database design and SQL operations, combined with Shortest Job First (SJF) OS queue scheduling logic.",
    github: "https://github.com/Amnayousaf25",
    demo: "https://github.com/Amnayousaf25",
    problem: "Managing book inventories and processing user checkout requests efficiently requires structured relational data storage and optimal task queue execution.",
    solution: "Designed a Flask-based backend server with normalized SQL database schemas and implemented OS Shortest Job First (SJF) scheduling logic to prioritize request processing based on estimated execution times.",
    architecture: [
      "Backend: Flask Python server handling RESTful routing and business logic.",
      "Database: Relational SQL tables (Users, Books, Transactions, Queues) with primary/foreign key constraints.",
      "Algorithm Integration: SJF queue algorithm to sort pending book requests and minimize average waiting time."
    ],
    contributions: [
      "Designed the relational database schema and wrote optimized SQL query scripts.",
      "Implemented Flask API endpoints for inventory updates and user reservations.",
      "Integrated Operating System SJF algorithm into the request handler queue."
    ],
    outcomes: "Demonstrated strong core Computer Science foundations by bridging relational database engineering with OS scheduling algorithms."
  },
  {
    id: "nextjs-hackathon-app",
    title: "Next.js Hackathon Web Application",
    type: "Web Application",
    category: "Web",
    isAiMl: false,
    featured: true,
    technologies: ["Next.js", "TypeScript", "React", "CSS Modules"],
    summary: "Production-ready web application delivered under strict 3-day hackathon constraints, rapidly translating specifications into functional code.",
    github: "https://github.com/Amnayousaf25",
    demo: "https://vercel.com/amna-yousafs-projects",
    problem: "Rapid delivery of a stable, feature-complete web product under high-pressure competitive hackathon conditions.",
    solution: "Leveraged Next.js component-based architecture and TypeScript to rapidly iterate and ship a responsive UI with full cross-device compatibility.",
    architecture: [
      "Frontend: Modular React component tree with TypeScript interfaces for reliable data passing.",
      "Styling: Responsive CSS design system optimized for fast load times and clean presentation."
    ],
    contributions: [
      "Translated written requirements into UI components within hours.",
      "Handled responsive layouts and debugging under tight time deadlines."
    ],
    outcomes: "Successfully shipped a functional production application within 72 hours."
  }
];

export const aiMlSectionContent = {
  title: "AI & Machine Learning Focus",
  subtitle: "Applying modern artificial intelligence APIs while deepening theoretical computer science and ML foundations.",
  builtItems: [
    {
      title: "Gemini LLM Integration",
      description: "Implemented real-time prompt orchestration, API error handling, and structured response parsing in React Native application.",
      tech: "React Native, TypeScript, Gemini API"
    },
    {
      title: "Intelligent UI Components",
      description: "Designed chat interfaces, dynamic prompt generators, and conversational user experiences for mobile environments.",
      tech: "React, Mobile UX, REST APIs"
    }
  ],
  exploringItems: [
    {
      title: "GIAIC AI & Computing Program",
      description: "Participating in technical training focused on Artificial Intelligence, computing, and modern IT technologies.",
      status: "Active Program"
    },
    {
      title: "Machine Learning Fundamentals",
      description: "Studying supervised learning, model evaluation metrics, regression models, and data preprocessing in Python.",
      status: "Active Study"
    }
  ]
};

export const formalEducation = {
  degree: "Bachelor of Science in Computer Science (BSCS)",
  institution: "Jinnah University for Women",
  location: "Karachi, Pakistan",
  status: "Expected 2027",
  coursework: [
    "Object-Oriented Programming (OOP)",
    "Data Structures & Algorithms (DSA)",
    "Database Management Systems (DBMS)",
    "Software Engineering Fundamentals",
    "Operating Systems (OS)",
    "Computer Networks",
    "Web Development",
    "Human-Computer Interaction (HCI)"
  ]
};

export const technicalEducation = [
  {
    program: "GIAIC",
    title: "Governor Sindh Initiative for Artificial Intelligence & Computing",
    institution: "Governor House Sindh",
    type: "Technical Education Program",
    focus: "Artificial Intelligence, Computing & Modern IT Technologies",
    status: "Active Program",
    description: "Specialized initiative providing hands-on instruction in cutting-edge computing concepts, AI concepts, and modern software development practices.",
    technologies: ["Artificial Intelligence", "Computing", "Modern IT Technologies", "Python"]
  },
  {
    program: "NAVTTC Certification",
    title: "App Development — Flutter",
    institution: "National Vocational and Technical Training Commission (NAVTTC)",
    type: "Professional Certification",
    focus: "Cross-Platform Mobile Application Development with Flutter & Dart",
    status: "Completed Certification",
    description: "Government-recognized technical certification program covering cross-platform mobile architecture, Dart language fundamentals, widget UI layout, and API integration in Flutter.",
    technologies: ["Flutter", "Dart", "Mobile UI", "Cross-Platform", "State Management"]
  },
  {
    program: "Microscholarship",
    title: "English Access Microscholarship Program",
    institution: "U.S. Embassy Sponsored",
    type: "Professional Development",
    focus: "English Language Proficiency & Professional Communication",
    status: "Completed Program",
    description: "Two-year intensive program recognizing high English language proficiency, leadership, and professional communication skills.",
    technologies: ["Professional Communication", "Technical Writing", "Presentation Skills"]
  }
];
