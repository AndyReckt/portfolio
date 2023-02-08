export default {
  about: {
    image:
      "https://cdn.discordapp.com/avatars/726953781903884388/8b007da4226e040487bb1e801bce5626.png?size=2048",
    name: "Alexandre NEDE",
    job: "Étudiant",
    description:
          "Bonjour, je suis NEDE Alexandre, j'ai 18 ans, et je suis étudiant en BTS SIO.",
    socialLinks: [
      {
        name: "Github",
        icon: "fa-brands fa-github",
        color: "gray",
        to: "https://github.com/AndyReckt",
      },
      {
        name: "Twitter",
        color: "#33fffc",
        icon: "fa-brands fa-twitter",
        to: "https://twitter.com/andyysucks",
      },
      {
        name: "Telegram",
        color: "#33acff",
        icon: "fa-brands fa-telegram",
        to: "https://t.me/andyreckt",
      },
      {
        name: "LinkedIn",
        color: "#33acff",
        icon: "fa-brands fa-linkedin",
        to: "https://www.linkedin.com/in/alexandre-nede/",
      },
    ],
  },
  journey: {
    experience: "Bts SIO",
    totalProjects: 4,
    work: "Étudiant",
  },
  skills: [
    {
      name: "Java",
      percent: 75,
      color: "#fb9513",
    },
    {
      name: "Javascript",
      percent: 55,
      color: "#DDC123",
    },
    {
      name: "Typescript",
      percent: 40,
      color: "#13a3fb",
    },
    {
      name: "Front-End",
      percent: 30,
      color: "#45e53f",
    },
    {
      name: "Back-End",
      percent: 65,
      color: "#DB3FE5",
    },
  ],
  projects: [
    // status list: NEW - 1, Coming Soon - 2, Active - 3, Maintenance - 4, It's Over - 5, Closed - 6
    {
      name: "Holiday",
      description: "Back-end de serveurs minecraft",
      status: 3,
      to: "https://github.com/andyreckt/holiday",
    },
    {
      name: "Sunset",
      description: "API pour rendre plus facile le développement de commandes de jeu sur minecraft",
      status: 3,
      to: "https://github.com/andyreckt/sunset",
    },    
  ],
};
