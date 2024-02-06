import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ethan Hosier",
  initials: "EH",
  location: "London, UK",
  locationLink:
    "https://www.google.com/maps/search/london/@51.4850816,-0.1998848,14z?entry=ttu",
  about:
    "Second Year Computing Student at Imperial College London, passionate about writing software.",
  summary:
    "Ever since I taught myself Python when I was 13, I've had a passion for writing software. I spend lots of my free time learning new technologies and building cool things. I'd love to connect and help with any projects you are working on!",

  avatarUrl:
    "https://avatars.githubusercontent.com/u/80335311?s=400&u=e3ffb939cb151c470f31de4b85cff93dfaa6f4b0&v=4",
  personalWebsiteUrl: "https://ethanhosier.com",
  contact: {
    email: "ethanjhosier@gmail.com",
    tel: "+447476133726",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/EthanHosier",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ethan-hosier-623474253/",
        icon: LinkedInIcon,
      },
      {
        name: "CV",
        url: "/resume.pdf",
        icon: "",
      },
    ],
  },
  education: [
    {
      school: "Imperial College London",
      degree: "Bachelor's Degree in Computing",
      start: "2022",
      end: "2025",
    },
  ],
  work: [
    {
      company: "321 Restaurants",
      link: "",
      badges: ["Founder"],
      title: "Full Stack Developer / Founder",
      logo: ParabolLogo,
      start: "2023",
      end: "",
      description:
        "Founded a software startup dedicated to empowering small, independent restaurants through affordable solutions. Conducted market research to understand industry needs and, as the sole full stack developer, developed a comprehensive content management system, dashboard and individualized websites. Gained valuable experience in product development, market analysis, and demonstrated proficiency in designing and implementing full stack solutions.",
      technologies: ["TypeScript", "React/Next.js", "Firebase"],
    },
  ],
  hackathons: [
    {
      name: "IC Hack",
      link: "https://github.com/fm0ss/financial_tool_ichack",
      title: "AI Trading Statements Analyser",
      start: "February 2024",
      end: "",
      badges: ["24H"],
      description:
        "As part of a team of 5 Imperial Computing students, developed an AI powered tool that performed web scraping and analysis of trading statements from the London Stock Exchange website. Our tool successfully navigated the statements' biased and overly positive corporate language, providing fact checking and context to the user by searching the web with LangChain. As an individual, I trained a custom BERT language model to perform sentiment analysis on the positivity of each sentence within the statement. I also built out the entire frontend of the app, as well as some of the backend.",
      technologies: [
        "Python",
        "Flask",
        "TypeScript",
        "React/Next.js",
        "LangChain",
        "Docker",
        "Hugging Face",
        "OpenAI",
      ],
    },
    {
      name: "AI Ventures Hackathon",
      link: "https://github.com/EthanHosier/ai-hack/",
      title: "GILO Consulting",
      start: "January 2024",
      end: "",
      badges: ["24H"],
      description:
        "Worked with two business students to create an AI-powered consulting platform, which we pitched to VCs. Our platform aimed to tackle issues faced such as the high costs of traditional consulting, limited access to expertise and support, difficulty finding the right experts, and a lack of transparency and accountability. As the sole technical member of our team, developed gainshare contract generation, consultant profiles, a dashboard, and a chatbot custom-trained to match our clients directly to the most relevant consultants. Gained valuable experience working in a team with diverse skillsets and producing software quickly.",
      technologies: ["TypeScript", "React/Next.js", "OpenAI"],
    },
  ],
  skills: [
    "Java",
    "Python",
    "C",
    "Golang",
    "Haskell",
    "Scala",
    "TypeScript",
    "JavaScript",

    "SQL",
    "React/Next.js",
    "React Native",
    "Node.js",
    "Pandas",
    "Pytorch",
  ],
  projects: [
    {
      title: "Large Language Model (GPT)",
      techStack: ["Side Project", "Python", "Pytorch", "Jupyter Notebook"],
      description:
        "Large language model from scratch, trained on the OpenWebText dataset. Capable of generating human-like text using next token prediction.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/EthanHosier/LLM",
      },
    },
    {
      title: "Restaurant Dashboard & CMS",
      techStack: ["Startup", "TypeScript", "React/Next.js", "Firebase"],
      description:
        "Full stack dashboard enabling customer profiling, bookings and venue management. Includes a content management system for populating websites. Open-sourced from my startup.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://github.com/EthanHosier/Restaurant-Dashboard-CMS",
      },
    },
    {
      title: "Pop Up!",
      techStack: [
        "Side Project",
        "MVP",
        "JavaScript",
        "React Native",
        "Bluetooth",
        "Firebase",
      ],
      description:
        "MVP for my idea of a proximity-based social media mobile app. Profiles of nearby app users dynamically pop up on users' phones as they walk past each other, facilitating real-time interactions.",
      logo: Howdy,
      link: {
        label: "github.com",
        href: "https://github.com/EthanHosier/smDemo",
      },
    },
    {
      title: "ARMv8 AArch64 – Assembler and Emulator",
      techStack: ["University Project", "Group Project", "C"],
      description:
        "AArch64 emulator that simulates the execution of an AArch64 binary file on a Raspberry Pi, and AArch64 assembler that translates an AArch64 assembly source file containing A64 instructions into a binary file that can subsequently be executed by the emulator.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/EthanHosier/armv8-compilor-emulater",
      },
    },
    {
      title: "RSS Aggregator",
      techStack: ["Side Project", "Golang", "PostgreSQL", "REST"],
      description:
        "RSS feed web scraper with a REST API and authentication using api keys and middleware. Stores scraped results in a postreSQL database.",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/EthanHosier/rssagg",
      },
    },
    {
      title: "Trello Clone",
      techStack: ["Side Project", "TypeScript", "Next.js", "Prisma", "MySQL"],
      description:
        "Full stack Trello clone with authentication, organizations, workspaces, stripe subscriptions and CRUD operations implemented with server actions.",
      logo: JarockiMeLogo,
      link: {
        label: "github",
        href: "https://github.com/EthanHosier/Trello-clone",
      },
    },
    {
      title: "Digit Recognition Neural Network (No ML/Maths Libraries)",
      techStack: ["Side Project", "Java", "Machine Learning"],
      description:
        "Deep multilayer perceptron neural network for handwritten digit recognition, without any machine learning or maths libraries. Implemented backpropagation from scratch.",
      logo: YearProgressLogo,
      link: {
        label: "github.com",
        href: "https://github.com/EthanHosier/mnist-digits-nn",
      },
    },
    {
      title: "Airbnb Clone",
      techStack: ["Side Project", "Typescript", "React Native", "Expo"],
      description: "Airbnb mobile app clone, developed with React Native.",
      logo: BarepapersLogo,
      link: {
        label: "github.com",
        href: "https://github.com/EthanHosier/airbnb",
      },
    },
    {
      title: "Wacc Compilor",
      techStack: [
        "In Progress",
        "University Project",
        "Group project",
        "Scala",
      ],
      description:
        "Given a valid Wacc input file, generates executable code compatible with the x86-64 architecture.",
      logo: "",
    },
  ],
} as const;
