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
        "Founded a software startup dedicated to empowering small, independent restaurants through affordable solutions. Conducted market research to understand industry needs and, as the sole full stack developer, developed a comprehensive content management system, dashboard and individualized websites. Gained valuable experience in product development, market analysis, and demonstrated proficiency in designing and implementing full stack solutions. Technologies: Typescript, React/Next.js, Firebase.",
    },
  ],
  skills: [
    "Java",
    "Python",
    "C",
    "Golang",
    "Haskell",
    "Scala",
    "JavaScript",
    "TypeScript",
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
      techStack: ["Startup", "TypeScript", "React/Next.js"],
      description:
        "Full stack dashboard enabling customer profiling, bookings and venue management. Includes a content management system for populating websites. Open-sourced from my startup.",
      logo: JarockiMeLogo,
      link: {
        label: "github",
        href: "https://github.com/EthanHosier/Trello-clone",
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
      ],
      description:
        "MVP for my idea of a proximity-based social media mobile app. Profiles of nearby app users dynamically pop up on users' phones as they walk past each other, facilitating real-time interactions.",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "ARM Compiler & Emulator",
      techStack: ["University Project", "Group Project", "C"],
      description:
        "Fully emulated ARMv8 environment, with compilation of C programs into binary.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/EthanHosier/armv8-compilor-emulater",
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
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Wacc Compilor",
      techStack: ["In Progress", "University Project", "Scala"],
      description:
        "Given a valid Wacc input file, generates executable code compatible with the x86-64 architecture.",
      logo: "",
    },
  ],
} as const;
