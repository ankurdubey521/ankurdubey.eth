// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: "Ankur Dubey",
  domain: "ankurdubey.eth.limo", // add without https:// , used in meta tags and share urls
  image: "/images/pic.gif",
  email: "ankurdubey521@protonmail.com",
  googleAnalyticsV4: {
    enabled: false,
    id: ""
  },
  plausibleAnalytics: {
    enabled: false,
    domain: "template.karngyan.com",
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: "https://analytics.lookatx.dev" // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: false
  },
  social: {
    github: "ankurdubey521",
    linkedin: "ankurdubey521",
    facebook: "",
    twitter: "ankurdubey521",
    instagram: "ankurdubey521",
    codestats: "ankurdubey521" // https://codestats.net make a profile if you dont already have one.
  },
  buyMeACoffee: {
    enabled: true,
    url: "https://www.buymeacoffee.com/ankurdubey521"
  },
  projects: {
    enabled: true
  },
  blog: {
    enabled: false
  },
  resume: {
    enabled: false,
    pdfUrl: "/RESUME_GYAN_KARN_DARK.pdf" // add files in static folder
  },
  uses: {
    enabled: true,
    meta: [
      { title: "OS", value: "Arch Linux" },
      { title: "Memory", value: "32 GB 2667 MHz DDR4" },
      { title: "Keyboard", value: "Ducky One 2 Mecha Mini - Cherry MX Red" },
      { title: "Mouse", value: "Logitech G102" },
      {
        title: "Monitors",
        value: "2x 1080p 24in IPS LCD + 1x 1080p 17in IPS LCD + 1x 4k 43in TV"
      },
      {
        title: "Laptop • Processor • Graphics",
        value: "Acer Predator Helios 300 2019 • i7-9750H • NVIDIA GTX1660Ti"
      },
      { title: "Console", value: "PS5" }
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: true,
    meta: [
      {
        name: "Biconomy",
        src: "/images/biconomy.jpeg",
        url: "https://biconomy.io"
      },
      {
        name: "Microsoft",
        src: "/images/microsoft.png",
        url: "https://microsoft.com"
      },
      { name: "CrioDo", src: "/images/crio.png", url: "https://crio.do" }
    ]
  },
  recommendations: {
    enabled: true,
    meta: [
      {
        name: "Sreejith Kadavil",
        designation: "Microsoft Principal Manager",
        image: "/images/sreejith.jpeg",
        linkedin: "https://www.linkedin.com/in/sreejith-sreedhar-kadavil",
        content:
          "   Ankur did his internship in my team in MSFT and he did a great job delivering the project of developing a tool.He was given a very high level requirement and he could analyse, learn and execute the project.Ankur is a great engineer and I would love to work with him again in the future!"
      }
    ]
  },
  loadingIndicator: {
    name: "pulse"
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  strings: {
    en_US: {
      download: "download",
      nav: {
        home: "home",
        blog: "blog",
        projects: "projects",
        uses: "uses",
        resume: "résumé",
        buyMeACoffee: "buy me a beer",
        signIn: "sign in",
        signOut: "sign out"
      },
      hero: {
        iBlogTech: "i blog tech",
        haveALook: "have a look",
        friendlyNeighborhood: "your friendly neighborhood",
        description:
          "I am a Linux nerd and love everything that involves designing systems that run on a scale.Currently working in the field of Crypto at Biconomy. I'm also an avid gamer with my favourite genre being Souls-borne.",
        words: ["serial software engineer intern", "developer", "gamer", "engineer", "programmer", "linux nerd"]
      },
      githubCalendar: {
        header: "contributions",
        subtext: "github calendar heatmap"
      },
      blog: {
        header: "blog",
        subtext:
          "i try to write once in a while. let me know your thoughts in comments or mail@karngyan.com"
      },
      recentBlog: {
        header: "recent blogs",
        subtext: "it takes a lot of time to write man"
      },
      uses: {
        header: "uses",
        subtext:
          "a quick summary of what I use on a daily basis to code and some codestats.net flex"
      },
      projects: {
        header: "projects",
        subtext:
          "this page lists some of my personal and work projects. every project has some story, click on the title to read"
      },
      recommendations: {
        header: "recommendations",
        subtext: "what do my mentors say"
      }
    }
  }
};
