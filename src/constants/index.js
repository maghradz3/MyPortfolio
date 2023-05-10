import {
  mobile,
  foodOrder,
  js,
  htmlCss,
  github,
  github2,
  ShoppingWeb,
  backend,
  creator,
  bankApp,
  mapApp,
  BankWeb,
  gitgithub,
  nextjs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Javascript",
    icon: js,
  },
  {
    title: "Html & Css",
    icon: htmlCss,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "HTML-CSS",
    company_name: "Starbucks",
    icon: htmlCss,
    iconBg: "#383E56",
    date: "Dec 2022 - Jan 2023",
    points: [
      "In HTML & CSS , I thoroughly mastered all the basic and additional issues that allow me to work on any project without any problems. I also studied the CSS support libraries, tailwind and Bootstrap at the basic level",
    ],
  },
  {
    title: "Javascript",
    company_name: "Tesla",
    icon: js,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Mar 2023",
    points: [
      "I learned all the basic and important features of JavaScript. Variables and data types, functions, Objects, Arrays, Control Flow, Dom Manipulation Event and Error Handling, Asynchronous Programming, Regular Expressions, Modules, ES6Features, JSON, OOP. I have worked on many interesting projects and I believe that I can handle difficult tasks. Also, in the process of studying, I studied several JavaScript support libraries",
    ],
  },
  {
    title: "React",
    company_name: "Shopify",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Mar 2023 - May 2023",
    points: [
      "I learned all types of fundamentals in React: Lists and Keys, State and Component life Cycle, Props & State, Components(Functional & Classes) useState & useEffect, Conditional Rendering, Forms, Routing: React Route. I also learned advanced topics: Networking: HTTP Requests: GET, PUT, POST, DELETE, fetch, Error boundaries, render Props, Contextm Higher Order Components, Refs & Portals. Hooks: useCallBack, useRef, useContext, useReducer, useMemo, Custome Hooks. I also learned React support library Redux and Next.js.",
    ],
  },
  {
    title: "Git & GitHub",
    company_name: "Meta",
    icon: gitgithub,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Apr 2023",
    points: [
      "In Git, I learned Distributed architecture, Branching & merging, working with commit history, Staging and committing, and Collaboration.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
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
    name: "Food-Order App (Responsive)",
    description:
      "In this application, from the server created in firebase, we bring the names of food with the appropriate price. The user can add the order to the cart. And he can place an order directly from the cart, after filling out a special order form.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: foodOrder,
    source_code_link: "https://maghradz3.github.io/Food-Order-App/",
  },
  {
    name: "Bankist Website (Responsive)",
    // description: `Bankist site with a slider, Reveal Sections, data tabs, and menu fade animations, smooth scrolling. Overall the site has a nice interface and transitions`,
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: BankWeb,
    source_code_link: "https://maghradz3.github.io/Bank-Website/",
  },
  {
    name: "Mapty (Desktop App)",
    // description:
    //   "This app tracks your activities on a map, specifically: running and cycling. After entering the information in the input fields, the application also calculates what your average speed was. The application was created with the help of the Leaflet JavaScript library. ",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: mapApp,
    source_code_link: "https://maghradz3.github.io/mapApp/",
  },
  {
    name: "Bank Application (Desktop App)",
    // description: `Authorization is required to use this application. 4 users have been created for the application: 1. User: id: lm, pas: 1997
    //   2.User: id:lmj, pas:1998 3.User 3: id: mg, pas: 1960 4.User 4: id: vm, pas:1956.
    // `,
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: bankApp,
    source_code_link: "https://maghradz3.github.io/Bank-application/",
  },

  {
    name: "Products Pages (Responsive)",
    // description: `product pages. in which the logic of pagination and transition to the detail page is written`,
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: ShoppingWeb,
    source_code_link: "https://maghradz3.github.io/Final-Project-Js/",
  },
];

export { services, technologies, experiences, testimonials, projects };
