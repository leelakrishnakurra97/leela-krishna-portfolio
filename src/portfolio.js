/* ==========================================================================
   KURRA LEELA KRISHNA - PORTFOLIO CONFIGURATION DATA
   Derived and enhanced from developerFolio specifications
   ========================================================================== */

export const greeting = {
  username: "Kurra Leela Krishna",
  shortName: "Leela Krishna",
  title: "Hello, I'm Leela Krishna",
  subTitle:
    "Motivated Computer Science (Cyber Security) undergraduate at VIT Vellore. Passionate about engineering high-performance full-stack applications, scalable backend microservices, cloud infrastructure, and network threat detection platforms.",
  resumeLink: "/assets/docs/Kurra_Leela_Krishna_Resume.pdf",
  resumeDriveLink:
    "https://drive.google.com/file/d/1EC4-3kT1pb1PxATGwxb35gnsiiGgkoQ7/view?usp=drive_link",
  location: "Vellore, Tamil Nadu 632014, India",
  phone: "+91 9000274859",
  email: "leelakrishna.kurra7@gmail.com",
  isHireable: true,
  statusText: "Open to Software Developer, Full-Stack & Cybersecurity Roles"
};

export const socialMediaLinks = {
  github: "https://github.com/leelakrishnakurra97",
  linkedin: "https://www.linkedin.com/in/leela-krishna-kurra",
  leetcode: "https://leetcode.com/u/leelakrishna_101/",
  instagram: "https://www.instagram.com/leelakrishna_123/?utm_source=ig_web_button_share_sheet",
  email: "mailto:leelakrishna.kurra7@gmail.com",
  display: true
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks",
    "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
  ],
  devIcons: [
    { skillName: "html-5", fontAwesomeClassname: "fa-brands fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fa-brands fa-css3-alt" },
    { skillName: "sass", fontAwesomeClassname: "fa-brands fa-sass" },
    { skillName: "JavaScript", fontAwesomeClassname: "fa-brands fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fa-brands fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fa-brands fa-node" },
    { skillName: "swift", fontAwesomeClassname: "fa-brands fa-swift" },
    { skillName: "npm", fontAwesomeClassname: "fa-brands fa-npm" },
    { skillName: "sql-database", fontAwesomeClassname: "fa-solid fa-database" },
    { skillName: "aws", fontAwesomeClassname: "fa-brands fa-aws" },
    { skillName: "firebase", fontAwesomeClassname: "fa-solid fa-fire" },
    { skillName: "python", fontAwesomeClassname: "fa-brands fa-python" },
    { skillName: "docker", fontAwesomeClassname: "fa-brands fa-docker" }
  ],
  domains: [
    {
      id: "fullstack",
      title: "Full Stack & Backend Development",
      icon: "fa-solid fa-layer-group",
      skills: [
        "⚡ Engineering scalable web applications with React, TypeScript, Node.js, Express.js, and FastAPI",
        "⚡ Designing performant RESTful APIs and real-time WebRTC communications with LiveKit",
        "⚡ Database modeling and query optimization using PostgreSQL, MongoDB, and MySQL",
        "⚡ Implementing robust security practices including JWT authentication and Role-Based Access Control (RBAC)"
      ]
    },
    {
      id: "security",
      title: "Cybersecurity & Network Forensics",
      icon: "fa-solid fa-shield-halved",
      skills: [
        "⚡ Deep packet inspection (.pcap / .pcapng) and protocol analysis using Wireshark and Python",
        "⚡ Building machine learning pipelines (Random Forest, Isolation Forest) for intelligent DNS anomaly detection",
        "⚡ Detecting covert data exfiltration, DNS tunneling, and algorithmically generated domains (DGAs)",
        "⚡ Implementing defensive security measures, vulnerability assessments, and secure code practices"
      ]
    },
    {
      id: "cloud",
      title: "Cloud Architecture & DevOps",
      icon: "fa-solid fa-cloud",
      skills: [
        "⚡ Certified Microsoft Azure Administrator (AZ-104) with experience in Azure compute, networking, and governance",
        "⚡ AWS Academy Graduate (Cloud Foundations): VPCs, EC2, S3, IAM, Lambda, and load balancing",
        "⚡ Containerization and deployment workflows using Docker, Linux environments, and Git/GitHub CI/CD"
      ]
    }
  ],

  softwareSkills: [
    { skillName: "Python", iconClass: "devicon-python-plain colored", category: "Languages" },
    { skillName: "TypeScript", iconClass: "devicon-typescript-plain colored", category: "Languages" },
    { skillName: "JavaScript", iconClass: "devicon-javascript-plain colored", category: "Languages" },
    { skillName: "C++", iconClass: "devicon-cplusplus-plain colored", category: "Languages" },
    { skillName: "Java", iconClass: "devicon-java-plain colored", category: "Languages" },
    { skillName: "C", iconClass: "devicon-c-plain colored", category: "Languages" },
    { skillName: "React", iconClass: "devicon-react-original colored", category: "Frontend" },
    { skillName: "HTML", iconClass: "devicon-html5-plain colored", category: "Frontend" },
    { skillName: "CSS", iconClass: "devicon-css3-plain colored", category: "Frontend" },
    { skillName: "FastAPI", iconClass: "devicon-fastapi-plain colored", category: "Backend" },
    { skillName: "Node.js", iconClass: "devicon-nodejs-plain colored", category: "Backend" },
    { skillName: "Express.js", iconClass: "devicon-express-original", category: "Backend" },
    { skillName: "PostgreSQL", iconClass: "devicon-postgresql-plain colored", category: "Databases" },
    { skillName: "MongoDB", iconClass: "devicon-mongodb-plain colored", category: "Databases" },
    { skillName: "MySQL", iconClass: "devicon-mysql-plain colored", category: "Databases" },
    { skillName: "Docker", iconClass: "devicon-docker-plain colored", category: "DevOps & Tools" },
    { skillName: "Linux", iconClass: "devicon-linux-plain colored", category: "DevOps & Tools" },
    { skillName: "Wireshark", iconClass: "fa-solid fa-network-wired", category: "Cybersecurity" },
    { skillName: "Network Security", iconClass: "fa-solid fa-shield-halved", category: "Cybersecurity" },
    { skillName: "Pandas", iconClass: "devicon-pandas-plain colored", category: "Data Science" },
    { skillName: "Scikit-Learn", iconClass: "devicon-scikitlearn-plain colored", category: "Data Science" },
    { skillName: "Git", iconClass: "devicon-git-plain colored", category: "Tools" },
    { skillName: "GitHub", iconClass: "devicon-github-original", category: "Tools" },
    { skillName: "Linux CLI", iconClass: "devicon-linux-plain colored", category: "Tools" },
    { skillName: "Docker Engine", iconClass: "devicon-docker-plain colored", category: "Tools" },
    { skillName: "Wireshark Packet Analysis", iconClass: "fa-solid fa-network-wired", category: "Tools" }
  ],
  display: true
};

export const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Backend Development (FastAPI, Node.js, Express)", progressPercentage: "92%" },
    { Stack: "Cybersecurity & Network Forensics (PCAP, Wireshark, DNS Security)", progressPercentage: "90%" },
    { Stack: "Frontend Engineering (React 18, TypeScript, Canvas, UI/UX)", progressPercentage: "88%" },
    { Stack: "Database Management (PostgreSQL, MySQL, MongoDB)", progressPercentage: "86%" },
    { Stack: "Cloud & DevOps (Azure AZ-104, AWS Cloud Foundations, Docker)", progressPercentage: "84%" }
  ]
};

export const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Vellore Institute of Technology (VIT), Vellore",
      logo: "/assets/images/vit_logo.png",
      subHeader: "Bachelor of Technology (B.Tech) - Computer Science and Engineering (Cyber Security)",
      duration: "2024 – 2028 (3rd Year)",
      grade: "CGPA: 9.16 / 10",
      location: "Vellore, Tamil Nadu"
    },
    {
      schoolName: "Sri Chaitanya Junior College",
      logo: "/assets/images/sri_chaitanya.png",
      subHeader: "Senior Secondary (Class XII) - MPC • Telangana State Board",
      duration: "Completed 2024",
      grade: "Percentage: 94.90%",
      location: "Telangana, India",
      desc: "Strong foundation in mathematics and analytical problem-solving, supported by consistent academic performance."
    },
    {
      schoolName: "Geetanjali Olympiad School",
      logo: "/assets/images/GEETANJALI_OLYMPIAD_SCHOOL_LOGO.png",
      subHeader: "Secondary Education (Class X)",
      duration: "Completed 2022",
      grade: "Percentage: 92.00%",
      location: "Telangana, India",
      desc: "Completed secondary education with a strong academic foundation."
    }
  ]
};

export const workExperiences = {
  display: true,
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Copter Code",
      location: "Chennai, Tamil Nadu, IN",
      date: "Jun 2026 – Jul 2026",
      desc: "Engineered and optimized core backend services, real-time communications, and database architectures for an enterprise Learning Management System (LMS).",
      descBullets: [
        "Built and optimized a scalable LMS with backend services and database integration, enabling efficient course, assignment, quiz and student-progress management while supporting large-scale data operations.",
        "Implemented secure JWT authentication and granular Role-Based Access Control (RBAC) across Student, Teacher, and Admin tiers.",
        "Developed interactive quiz engines, assignment workflows, progress tracking pipelines, and real-time virtual classroom rooms using React, TypeScript, PostgreSQL, and LiveKit WebRTC.",
        "Integrated Prisma ORM with PostgreSQL for structured database migrations, relation modeling, and efficient low-latency data access."
      ],
      techPills: ["React", "TypeScript", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "LiveKit WebRTC", "JWT", "Docker"],
      images: [
        {
          src: "/assets/images/copter_code/First_image.jpeg",
          title: "IITM Research Park",
          caption: "Internship cohort at the IIT Madras Research Park campus"
        },
        {
          src: "/assets/images/copter_code/Second_img.jpeg",
          title: "LMS Engineering Team",
          caption: "Full-Stack Developer team building the enterprise LMS at Copter Code, Chennai"
        },
        {
          src: "/assets/images/copter_code/Third_image.jpeg",
          title: "Engineering Floor",
          caption: "Developing core LMS architecture & real-time WebRTC communications"
        },
        {
          src: "/assets/images/copter_code/Fourth_img.jpeg",
          title: "Team & Mentors",
          caption: "Collaborative engineering session at IITM Research Park"
        }
      ]
    }
  ]
};

export const projects = [
  {
    id: "lms",
    category: "Full Stack",
    title: "Nexora Learning - Enterprise Learning Management System",
    subtitle: "Full-Stack LMS with AI Tutoring & LiveKit WebRTC Virtual Classrooms",
    repoName: "learning-management-system",
    github: "https://github.com/leelakrishnakurra97/learning-management-system",
    liveDemo: "https://github.com/leelakrishnakurra97/learning-management-system",
    featured: true,
    highlights: [
      "Dynamic 6-tier academic curriculum hierarchy with automated sequential topic progression",
      "Interactive low-latency WebRTC video classrooms with screen sharing via LiveKit",
      "24/7 AI-assisted homework tutoring integration powered by Google Gemini API",
      "Robust 4-role Access Control (Student, Teacher, Admin, Superadmin) with JWT security",
      "Comprehensive quiz engines, automated grading, and student progress telemetry"
    ],
    techStack: ["TypeScript 5.6", "React 18", "Vite", "Node.js", "Express", "Prisma ORM", "PostgreSQL 16", "LiveKit WebRTC", "Gemini AI", "Docker"]
  },
  {
    id: "netsentinel",
    category: "Cybersecurity",
    title: "NETSENTINEL - DNS Traffic Anomaly & Threat Detection",
    subtitle: "Enterprise DNS Forensics Platform for PCAP/PCAPNG Traffic",
    repoName: "network-traffic-anomaly-detection",
    github: "https://github.com/leelakrishnakurra97/network-traffic-anomaly-detection",
    liveDemo: "https://github.com/leelakrishnakurra97/network-traffic-anomaly-detection",
    featured: true,
    highlights: [
      "99.91% Attack Recall: Successfully identified covert DNS threats with only 10 misses across 11,662+ unseen test payloads",
      "Dual-mode parser capable of ingesting raw .pcap and .pcapng network capture files",
      "Zero data leakage architecture that strips raw domain identifiers & timestamps to prevent memorization",
      "Hybrid risk scoring engine pairing Random Forest and Isolation Forest anomaly models",
      "14 statistical DNS features extracted using Python, Pandas, and Wireshark inspection"
    ],
    techStack: ["Python 3.12", "FastAPI", "React 18", "Scikit-Learn", "Vite", "Pandas", "Wireshark", "PostgreSQL", "Tailwind CSS"]
  },
  {
    id: "play-horizon",
    category: "Frontend & Gaming",
    title: "Play Horizon - Arcade Suite",
    subtitle: "High-Performance Buildless Browser Arcade with Canvas Physics",
    repoName: "Play_Horizon_Arcade",
    github: "https://github.com/leelakrishnakurra97/Play_Horizon_Arcade",
    liveDemo: "https://leelakrishnakurra97.github.io/Play_Horizon_Arcade",
    featured: true,
    highlights: [
      "Zero-bundler modular architecture delivering near-instant browser load times",
      "Three complete featured games: Sudoku solver/generator, Neon Snake, and QuizMaster",
      "HTML5 Canvas 60 FPS game loop mechanics with pixel-perfect collision detection",
      "Persistent leaderboards and score histories powered by client-side localStorage",
      "Responsive glassmorphism UI with smooth animations and touch/keyboard controls"
    ],
    techStack: ["React 18 (ESM)", "JavaScript ES6+", "HTML5 Canvas", "CSS Glassmorphism", "GitHub Pages CI/CD"]
  },
  {
    id: "smart-society",
    category: "Full Stack",
    title: "Smart Society Management System",
    subtitle: "Residential Community Administration & Automated Billing Platform",
    repoName: "Smart_Society_Management_System",
    github: "https://github.com/leelakrishnakurra97/Smart_Society_Management_System",
    liveDemo: "https://github.com/leelakrishnakurra97/Smart_Society_Management_System",
    featured: false,
    highlights: [
      "Automates monthly maintenance fee calculations and real-time payment status tracking",
      "End-to-end complaint logging, assignment, and resolution notification workflows",
      "Community event hall and amenity booking reservation system preventing scheduling conflicts",
      "Role-based dashboards providing personalized views for administrators and residents",
      "Replaced manual paperwork and spreadsheets with secure relational database persistence"
    ],
    techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "JWT Auth", "Bcrypt", "Agile"]
  }
];

export const clubSection = {
  title: "Clubs & Leadership",
  subTitle: "LEADERSHIP, TECHNICAL ORGANIZING & COMMUNITY ENGAGEMENT",
  clubName: "IEEE Information Theory Society (IEEE ITS) - Student Chapter",
  institution: "Vellore Institute of Technology (VIT), Vellore",
  role: "Active Member & Technical Events Coordinator",
  description:
    "Active participant and technical organizer at the IEEE Information Theory Society (IEEE ITS) Student Chapter, VIT Vellore (established Feb 2023). Dedicated to spearheading university-wide hackathons, interactive coding workshops, and tech symposiums exploring the frontiers of information theory, quantum computing, deep learning, and scalable systems.",
  highlights: [
    "Contributed to the development and enhancement of the chapter website, supporting its digital presence and accessibility.",
    "Assisted with website improvements, content integration, and minor technical tasks to ensure a smooth user experience.",
    "Supported various chapter-related initiatives through technical assistance."
  ],
  gallery: [
    {
      src: "/assets/club/Screenshot 2026-10-18 144757.png",
      title: "IEEE ITS Chapter Team",
      caption: "Group snapshot of the IEEE ITS chapter members, student leads, and event coordinators at VIT Vellore."
    },
    {
      src: "/assets/club/WhatsApp Image 2026-10-18 at 00.51.21 (2).jpeg",
      title: "IEEE ITS Official Banner Creation",
      caption: "Crafting the official IEEE Information Theory Society hand-painted banner for university technical events."
    },
    {
      src: "/assets/club/WhatsApp Image 2026-10-18 at 00.51.17 (1).jpeg",
      title: "Technical Seminar",
      caption: "Hands-on tech session and seminar conducted in the campus auditorium for university students."
    },
    {
      src: "/assets/club/WhatsApp Image 2026-10-18 at 00.51.24 (2).jpeg",
      title: "Technical Outreach & Interactive Booth",
      caption: "Engaging students with interactive sessions."
    },
    {
      src: "/assets/club/WhatsApp Image 2026-10-18 at 00.51.26.jpeg",
      title: "Event Organizing Committee",
      caption: "Coordinating logistics, student registrations, and tech booth operations with fellow IEEE ITS organizers."
    }
  ]
};

export const certificationsSection = {
  title: "Achievements And Certifications 🏆",
  subTitle: "ACHIEVEMENTS, CERTIFICATIONS, AWARD LETTERS AND SOME COOL STUFF THAT I HAVE DONE !",
  certifications: [
    {
      title: "Microsoft Certified: Azure Administrator",
      subtitle:
        "Earned Microsoft Certified Azure Administrator Associate (AZ-104) validating expert skills in Azure compute, virtual networking, storage, Entra ID governance, and telemetry.",
      image: "/assets/certifications/azure_badge.png",
      imageAlt: "Microsoft Azure Administrator Associate Badge",
      pdfUrl: "/assets/certifications/azure_administrator_associate_cert.pdf",
      verifyUrl:
        "https://learn.microsoft.com/en-us/users/leelakrishnakurra-1673/credentials/certification/azure-administrator?source=docs&tab=credentials-tab",
      footer: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/en-us/users/leelakrishnakurra-1673/credentials/certification/azure-administrator?source=docs&tab=credentials-tab",
          isExternal: true
        },
        {
          name: "View PDF",
          url: "/assets/certifications/azure_administrator_associate_cert.pdf",
          isPdf: true
        }
      ]
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      subtitle:
        "Completed comprehensive AWS Academy training covering AWS global cloud architecture, IAM security, Amazon EC2, VPC networking, S3 storage, and cloud economics.",
      image: "/assets/certifications/aws_badge.png",
      imageAlt: "AWS Academy Cloud Foundations Badge",
      pdfUrl: "/assets/certifications/aws_cloud_foundations_cert.pdf",
      verifyUrl: "https://www.credly.com/go/MPHZhGIE",
      footer: [
        {
          name: "Certification",
          url: "https://www.credly.com/go/MPHZhGIE",
          isExternal: true
        },
        {
          name: "View PDF",
          url: "/assets/certifications/aws_cloud_foundations_cert.pdf",
          isPdf: true
        }
      ]
    },
    {
      title: "IEEE ITS Chapter Technical Coordinator",
      subtitle:
        "Elected technical events coordinator and core contributor at IEEE Information Theory Society (VIT Vellore), organizing university technical symposiums, hands-on workshops, and coding challenges.",
      image: "/assets/images/ieee_its_logo.png",
      imageAlt: "IEEE Information Theory Society Logo",
      footer: [
        {
          name: "IEEE ITS Chapter",
          url: "https://vit.ac.in",
          isExternal: true
        },
        {
          name: "Event Gallery",
          url: "#clubs",
          isInternal: true
        }
      ]
    }
  ]
};

export const codingProfiles = {
  leetcode: {
    username: "leelakrishna_101",
    url: "https://leetcode.com/u/leelakrishna_101/",
    headline: "Active Problem Solver on LeetCode",
    description: "",
    tags: ["Algorithms", "Data Structures", "Dynamic Programming", "Trees & Graphs", "Complexity Analysis"]
  },
  github: {
    username: "leelakrishnakurra97",
    url: "https://github.com/leelakrishnakurra97",
    headline: "Open Source Projects & Codebases",
    description: ""
  }
};

export const contactInfo = {
  title: "Contact Me",
  callIcon: "/assets/images/black-call-icon-png.png",
  subTitle: "DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.",
  number: "+91-9000274859",
  email: "leelakrishna.kurra7@gmail.com",
  location: "Vellore, Tamil Nadu 632014, India"
};
