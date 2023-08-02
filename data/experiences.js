import Image from "next/image";

const experiences = [
  {
    jobTitle: "Software Engineer Intern - Valuations Product",
    company: "Carta 💸",
    description: [
      "Designed and implemented end-to-end solution to enable Amazon S3 file-uploads on web form, increasing conversion by 20%",
      "Developed Python service to auto-fill form inputs with data exposed through gRPC APIs, improving form completion time by 50%",
      "Spearheaded tech-debt sprint by replacing inefficient React components and reducing Sentry noise by 130 daily alerts",
      "Created Amplitude dashboards for in-depth user behavior analysis, facilitating the identification of critical user drop-off points, and resulting in data-driven optimizations to increase user engagement",
    ],
    technologies:
      "Python, Django, React, Kafka, gRPC, Jenkins, Kubernetes, Sentry, GraphQL",
    date: "Summer 2023",
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
    jobTitle: "Software Engineer Intern - Valuations Platform",
    company: "Carta 💸",
    description: [
      "Utilized object oriented principles to implement email tracking service for Datadog, enabling company-wide email observability",
      "Created a client-side interceptor to track gRPC caller origin metrics, enabling API throttling capabilities and Datadog monitoring",
      "Updated exception logic to reduce noise logged to Sentry by 76%, resulting in easier identification of application critical errors",
      "Identified faulty test cases using Jenkins and applied root cause analysis to correct errors in Python test suite",
    ],
    technologies:
      "Python, Django, gRPC, Datadog, Jenkins, Kubernetes, Sentry, GraphQL",
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
    technologies: "React, Python, MS SQL Server, REST",
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
    description: [
      "Spearheaded project to upgrade frontend state management framework to Redux, removing unwanted side effects caused by previous library and improving maintainability of frontend codebase",
      "Implemented API priority queue to reduce backend server load by 20% and decrease loading times of vital UI components",
      "Developed mobile traffic volumes feature with React and Python, receiving client praise for enhanced product value",
      "Wrote backend test cases in Python to unit test APIs and enable quick verification of system functionality in CI/CD pipelines",
    ],
    technologies: "React, Python, PostgreSQL, MongoDB, Docker, REST",
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
    description: [
      "Developed web applications with R Shiny to enable researchers to systematically conduct Bayesian network meta-analysis",
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
