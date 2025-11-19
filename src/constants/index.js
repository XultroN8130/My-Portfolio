import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  facemask,
  iot,
  networking,
  coding,
  weblink,
  Cplus,
  python,
  java,
  express,
  django,
  flask,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "c++",
    icon: Cplus,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "flask",
    icon: flask,
  },
  
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Trident Techlabs LTD.",
    icon: meta,
    iconBg: "#253c7f",
    date: "October 2024 - Till Date",
    points: [
      "Built and maintained full-stack applications using React.js, Django, and Flask, improving API efficiency and UI performance, which increased overall user engagement by 30%.",
      "Automated and stabilized deployments through Docker-based containerization, optimizing CI/CD workflows and improving code quality by 20% through rigorous debugging, testing, and peer reviews.",
      "Strengthened system scalability and reliability by identifying and resolving backend bottlenecks, integrating caching layers, and enhancing system resilience for high-traffic environments.",
      "Collaborated closely with cross-functional teams to ensure secure, high-performance delivery, aligning technical implementations with project goals and ensuring consistent, high-quality output across development cycles.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Syntecsys PVT. LTD. Now RoSSaRah Services",
    icon: tesla,
    iconBg: "#ffffffff",
    date: "Feb 2024 - Sep 2024",
    points: [
        "Developed and maintained a large-scale network analysis system using React.js, Django, Flask, Kubernetes, and Apache Spark, improving data processing speed by 40% through optimized backend architecture.",
        "Implemented real-time data visualization and analytics dashboards, reducing troubleshooting time for network issues by 30% and enabling faster decision-making.",
        "Optimized database queries, indexing strategies, and data pipelines, reducing database latency by 50% and enhancing overall data retrieval efficiency.",
        "Collaborated with engineering teams to improve system performance, streamline deployment workflows, and deliver scalable, reliable solutions for continuous network monitoring.",
    ],
  },
  {
    title: "B.Tech - Electronics & Communication",
    company_name: "ABES Engineering College",
    icon: shopify,
    iconBg: "#ffffffff",
    date: "Aug 2019 - Sep 2024",
    points: [
      "Did B.tech in Electronics & Communication in year 2024",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "CISCO Netcad Networking Certification",
    name: "CISCO Netcad Networking Certification",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Podstream",
    description:
      "Podstream is a full-stack podcast streaming platform built using the MERN stack, designed to let users discover, stream, and manage their favorite podcasts smoothly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
            {
        name: "Node",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://podstream.netlify.app/",
  },
  {
    name: "CSPM",
    description:
      "Covid-19 Safety Protocol System is an AI and IoT based safety monitoring system that uses face mask detection and vital sign sensors to track COVID-19 compliance in real time.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "IOT",
        color: "green-text-gradient",
      },
      {
        name: "Arduino",
        color: "pink-text-gradient",
      },
    ],
    image: facemask,
    source_code_link: "https://github.com/XultroN8130/Covid-19-Safety-Protocol-Measuring-System",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const licenses = [
  {
    name: "Networking Certification",
    description: "CISCO Netcad Networking Certification",
    image: networking,
    link: "https://www.credly.com/badges/c41d0ccb-2e82-41dc-8b0f-8a405be0df15?source=linked_in_profile",
  },
  {
    name: "Introduction to IoT",
    description: "CISCO Netcad IOT Certification",
    image: iot,
    link: "https://www.credly.com/badges/de9f6a3a-86ce-4311-bece-256ba015a973?source=linked_in_profile",
  },
  {
    name: "Coding Profiles",
    description: "200+ Problems Solved on LeetCode, GFG",
    image: coding,
    link: "https://leetcode.com/u/shantanu1607/",
  },
];

export { services, technologies, experiences, testimonials, projects, licenses };
