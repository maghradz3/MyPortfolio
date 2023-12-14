import {
  mobile,
  mui,
  framerMotion,
  memoryGame,
  foodOrder,
  nextjs14,
  eEcommerce,
  reviewsPortal,
  js,
  htmlCss,
  github,
  ShoppingWeb,
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
  threejs,
  gptma,
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
    name: "MUI",
    icon: mui,
  },
  {
    name: "Framer motion",
    icon: framerMotion,
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
    name: "Nextjs 14",
    icon: nextjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
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

    icon: htmlCss,
    iconBg: "#383E56",
    date: "Dec 2022 - Jan 2023",
    points: [
      "In HTML & CSS , I thoroughly mastered all the basic and additional issues that allow me to work on any project without any problems. I also studied the CSS support libraries, tailwind and Bootstrap at the basic level",
    ],
  },
  {
    title: "Javascript",

    icon: js,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Mar 2023",
    points: [
      "I learned all the basic and important features of JavaScript. Variables and data types, functions, Objects, Arrays, Control Flow, Dom Manipulation Event and Error Handling, Asynchronous Programming, Regular Expressions, Modules, ES6Features, JSON, OOP. I have worked on many interesting projects and I believe that I can handle difficult tasks. Also, in the process of studying, I studied several JavaScript support libraries",
    ],
  },
  {
    title: "React",

    icon: reactjs,
    iconBg: "#383E56",
    date: "Mar 2023 - May 2023",
    points: [
      "I learned all types of fundamentals in React: Lists and Keys, State and Component life Cycle, Props & State, Components(Functional & Classes) useState & useEffect, Conditional Rendering, Forms, Routing: React Route. I also learned advanced topics: Networking: HTTP Requests: GET, PUT, POST, DELETE, fetch, Error boundaries, render Props, Contextm Higher Order Components, Refs & Portals. Hooks: useCallBack, useRef, useContext, useReducer, useMemo, Custome Hooks. I also learned React support library Redux and Next.js.",
    ],
  },
  {
    title: "Git & GitHub",

    icon: gitgithub,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Apr 2023",
    points: [
      "In Git, I learned Distributed architecture, Branching & merging, working with commit history, Staging and committing, and Collaboration.",
    ],
  },
  {
    title: "Javascript/React animations and styling",

    icon: framerMotion,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - May 2023",
    points: [
      "During this period, I learned React and JavaScript animations, including one of the most interesting libraries, Framer motion. I also studied Material UI for styles",
    ],
  },
  {
    title: "Node.js/express.s/MongoDB",

    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Sep 2023",
    points: [
      "During this period, I learned Nodejs Express.js and MongoDB and worked on one fullstack project.",
    ],
  },
  {
    title: "Nextjs 14",

    icon: nextjs14,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Dec 2023",
    points: [
      "During this period, I learned nexjs14 with every new updates, server actions, next auth and etc. covered several courses on Udemy and implemented several good project.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "MaToursGPT",
    description: `The OpenAI API, specifically the ChatGPT 3.5 turbo version, is integrated into the project. The project is divided into several parts, first is authentication, for which the clerk library is used. Users can register/login via email, Linkdin or GIthub.
      Users from the browser can immediately connect to the page with their Google profile, and from mobile devices, they must be verified by email confirmation.
      1. A chatbot is integrated into the site, which is the ChatGPT 3.5 turbo version.
      2. An integrated prompt specifically for tours that takes two parameters, a country and a city, and generates the top 3 places to see in that city.
      3. The cities searched by users are automatically stored in the database, and other users can see the mentioned tours on the tours page.
      4. User profile page showing user information, logged in devices and number of tokens available for chatbot service.`,
    tags: [
      {
        name: "Nextjs 14",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },

      {
        name: "Tanstack Query",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Prisma",
        color: "blue-text-gradient",
      },
      {
        name: "Planetscale Database",
        color: "pink-text-gradient",
      },
    ],
    image: gptma,
    source_code_link: "https://ma-tours-gpt.vercel.app/",
  },
  {
    name: "Reviews Portal (Responsive)",
    description:
      "Reviews portal, a full stack project with many functionalities. Register/Login With JWT tokens, users can add new reviews under specific categories and rate them. Other users can like or dislike reviews as well as comment below the review. Unauthorized users can only see reviews in read-only format. Authorized users have their own page where they can view their uploaded reviews and delete or edit them. The application has an admin panel that allows the admin to view and control users, their registration date, lock/unlock, delete and assign admin. The app has a search feature that searches for text from the title, content, tags, and the entire app in general. It has a tag autocompletion feature. It also has sorting by rating and number of likes. The application has dark/light themes, and also supports English and Georgian languages. is fully responsive",
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
        name: "MUI",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: reviewsPortal,
    source_code_link: "https://master.d27f5crjw8848s.amplifyapp.com/",
  },
  {
    name: "e-Ecommerce site (Responsive)",
    description:
      "An e-commerce site that has a registration and login form. It has two panels, an admin panel to manage the page and a user panel to order products. The site also has sorting, searching and pagination options. Products are divided into categories",
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
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: eEcommerce,
    source_code_link: "https://e-ecommercelm.netlify.app/?page=1",
  },
  {
    name: "Memory Game (Responsive)",
    description:
      "This is a famous memory game. You can see the rules directly in the game, Georgian and English versions have been added. The game is designed for 2 players. Also added the logic that the loser of 2 players fulfills the wish generated by the game",
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
    image: memoryGame,
    source_code_link: "https://memory-gamelm.netlify.app/",
  },
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
    description: `Bankist site with a slider, Reveal Sections, data tabs, and menu fade animations, smooth scrolling. Overall the site has a nice interface and transitions`,
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
    description:
      "This app tracks your activities on a map, specifically: running and cycling. After entering the information in the input fields, the application also calculates what your average speed was. The application was created with the help of the Leaflet JavaScript library. ",
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
    description: `Authorization is required to use this application. 4 users have been created for the application: 1. User: id: lm, pas: 1997
      2.User: id:lmj, pas:1998 3.User 3: id: mg, pas: 1960 4.User 4: id: vm, pas:1956.
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
    description: `product pages. in which the logic of pagination and transition to the detail page is written`,
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

export { services, technologies, experiences, projects };
