import Image from "next/image";

const experiences = [
  {
    jobTitle: "Software Engineer Intern",
    company: "Carta 💸",
    header:
      "Developing APIs and backend services with Python and Django to improve Carta’s 409A Valuations platform",
    description: [
      "Led implementation of gRPC APIs to decrease latency between backend services by 85% and allow bidirectional data streaming",
      "Utilized gRPC interceptors to track API usage metrics, enabling per‑team throttling capabilities and increasing observability",
      "Updated exception logic to reduce noise logged to Sentry by 76%, resulting in easier identification of application critical errors",
      "Added email‑sending metrics and monitors to Datadog, enabling detection of bug that caused consistent email service downtime",
    ],
    technologies:
      "Python, Django, REST, GraphQL, gRPC, Jenkins, Kubernetes, Datadog",
    date: "Fall 2022",
    location: "Kitchener, Ontario",
    url: "https://www.carta.com/",
    logo: (
      <Image
        src="/carta.png"
        alt="Carta"
        height="50px"
        width="100px"
        style={{ borderRadius: "20%" }}
      />
    ),
  },
  {
    jobTitle: "Full Stack Developer Intern",
    company: "TD Asset Management 🏦",
    header:
      "Improving functionality of internal trading & analytics platform used by Portfolio Managers at TD Bank",
    description: [
      "Directed project to synchronize next business day holdings with MS SQL Server and Python, decreasing trading latency by 60%",
      "Enhanced trading platform usability by creating a React feature to submit trades for multiple portfolios simultaneously",
      "Discovered and resolved error in annualized volatility calculation for portfolio performance report using Python Pandas",
    ],
    technologies: "React.js, Python, MS SQL Server, REST",
    date: "Winter 2022",
    location: "Toronto, Ontario",
    url: "https://www.td.com/ca/en/asset-management/",
    logo: (
      <Image
        src="/td.png"
        alt="TD"
        height="75px"
        width="75px"
        style={{ borderRadius: "50%" }}
      />
    ),
  },
  {
    jobTitle: "Full Stack Developer Intern",
    company: "PiinPoint 📍",
    header:
      "Developing full stack features and tools for a global Software Startup focused on geospatial analytics",
    description: [
      "Spearheaded project to upgrade frontend state management framework to Redux, removing unwanted side effects caused by previous library and improving maintainability of frontend codebase",
      "Implemented API priority queue to reduce backend server load by 20% and decrease loading times of vital UI components",
      "Developed mobile traffic volumes feature with React and Python, receiving client praise for enhanced product value",
      "Wrote backend test cases in Python to unit test APIs and enable quick verification of system functionality in CI/CD pipelines",
    ],
    technologies: "React.js, Python, PostgreSQL, MongoDB, Docker, REST",
    date: "Summer 2021",
    location: "Kitchener, Ontario",
    url: "https://www.piinpoint.com/",
    logo: (
      <Image
        src="/piinpoint.png"
        alt="PiinPoint"
        height="75px"
        width="75px"
        style={{ borderRadius: "50%" }}
      />
    ),
  },
  {
    jobTitle: "Data Science Intern",
    company: "Cytel 💉",
    header:
      "Creating web applications and scripts with R and Python for analyzing adaptive clinical trials",
    description: [
      "Developed web applications with R Shiny to enable researchers to systematically conduct Bayesian network meta‑analysis",
      "Web scraped abstracts using Python Selenium to train NLP model for parsing publications based on sentiment analysis",
    ],
    technologies: "Python, R",
    date: "Fall 2020",
    location: "Vancouver, British Columbia",
    url: "https://www.cytel.com/",
    logo: (
      <Image
        src="/cytel.png"
        alt="Cytel"
        height="50px"
        width="100px"
        style={{ borderRadius: "20%" }}
      />
    ),
  },
];

export default experiences;
