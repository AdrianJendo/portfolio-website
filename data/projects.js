const projects = [
  {
    name: "Wall Robot",
    description:
      "Successfully led team of 5 students to build a mechatronics device for traversing a wall and locating a target on the other side",
    technologies: ["Rust", "Jira"],
    about: [
      "Implemented path traversal algorithms and PID control system in Rust to ensure efficient and consistent course navigation",
      "Interfaced software with gyroscope and time-of-flight sensor to provide reliable location data and consistent course completion",
      "Organized timeline, requirements, tasks, and meetings to maximize productivity and difused mission-critical blockers",
    ],
    github: "https://github.com/cameronkinsella/mikoto-bot",
    demo: "https://www.youtube.com/embed/txkZcLdLhW8",
  },
  {
    name: "Algo Vote",
    description:
      "Developed a full stack web application for creating decentralized elections with Algorand",
    technologies: [
      "React",
      "Node.js",
      "Docker",
      "Nginx",
      "Google Cloud",
      "Algorand Blockchain",
    ],
    about: [
      "Wrote smart contracts on the Algorand blockchain using TEAL to verify and count votes as well as manage voting permissions",
      "Leveraged React, Node.js, Docker, and Google Cloud to develop a full stack web application",
    ],
    github: "https://github.com/AdrianJendo/AlgoVote",
    demo: "https://www.youtube.com/embed/XcajWRSSkpM",
  },
  {
    name: "Stockwatch",
    description:
      "Created a scalable full stack web application for analyzing equities, currencies, and crypto",
    technologies: [
      "React",
      "Python Flask",
      "Docker",
      "Nginx",
      "MongoDB",
      "PostgreSQL",
    ],
    about: [
      "Utilized multiple financial APIs to develop a tool for visualizing relative equity performance with Python Pandas and Chart.js",
      "Developed a squarified treemapping algorithm to analyze price changes of portfolios and stock indices in a heatmap",
      "Protected frontend routes and API endpoints by implementing user authentication with JSON Web Tokens and cookies",
    ],
    github: "https://github.com/AdrianJendo/stockwatch",
    demo: "https://www.youtube.com/embed/hsqSVIbqJtM",
  },
  {
    name: "Computer Vision Traffic Sign Detector",
    description:
      "Successfully trained a Convolutional Neural Network to detect 43 classes of traffic signs in a full stack web application",
    technologies: ["React", "Python Flask", "Docker", "Nginx"],
    about: [
      "Reduced overfitting with regularization techniques such as dropout layers, max pooling, and a validation set",
      "Varied model parameters such as batch size, activation function, and dropout rate to achieve a test set accuracy of 96.6%",
    ],
    github: "https://github.com/AdrianJendo/traffic-sign-detector",
    demo: "https://www.youtube.com/embed/-5v7f7f2Nt4",
  },
  {
    name: "Graph Traversal Visualizer",
    description:
      "Developed graph traversal visualizer for directed, undirected, weighted, and unweighted graphs",
    technologies: ["React"],
    github: "https://github.com/AdrianJendo/Graph-Traversal",
    website: "https://adrianjendo.github.io/Graph-Traversal/",
    about: [
      "Implemented graph traversal algorithms such as breadth-first search, depth-first search, and Dijkstra's algorithm",
    ],
    demo: "https://www.youtube.com/embed/01acRfJYP8I",
  },
  {
    name: "Stock Portfolio Rebalancer",
    description: "Python application for automating portfolio rebalancing",
    technologies: ["Python"],
    github: "https://github.com/AdrianJendo/portfolio-balancer",
    about: [
      "Utilized the Interactive Brokers API to execute portfolio management",
      "Imported portfolio data from excel using Python Pandas and balanced portfolio based on imported weights",
      "Used Yahoo Finance API to collect price data and Python Matplotlib to export graphs of portfolio performance",
      "Implemented Cron Jobs to automate portfolio rebalancing process and generate periodic performance graphs",
    ],
  },
  {
    name: "Path Finding Visualizer",
    description:
      "Interactive path finding visualizer using Dijkstra's Algorithm and A* Algorithm",
    technologies: ["React"],
    github: "https://github.com/AdrianJendo/path_finding",
    website: "https://adrianjendo.github.io/path_finding/",
    about: [
      "Developed interactive UI with React, enabling the user to create and traverse mazes using common path finding algorithms",
    ],
    demo: "https://www.youtube.com/embed/EMIDdPRaycQ",
  },
  {
    name: "Sorting Algorithm Visualizer",
    description:
      "Sorting visualizer for sorting algorithms such as merge sort, quick sort, and heap sort",
    technologies: ["React"],
    github: "https://github.com/AdrianJendo/sortingvisualizer",
    website: "https://adrianjendo.github.io/sortingvisualizer/",
    about: [
      "Developed interactive UI with React, enabling the user to visualize common sorting algorithms with variable array size and speed",
    ],
    demo: "https://www.youtube.com/embed/0Uc5_Btl-Bs",
  },
  {
    name: "Sudoku Solving Algorithm",
    description: "Sudoku solving algorithm using recursive backtracking",
    technologies: ["React"],
    github: "https://github.com/AdrianJendo/Sudoku-Solver",
    website: "https://adrianjendo.github.io/Sudoku-Solver/",
    about: [
      "Implemented file uploads to allow user to upload custom sudoku boards",
    ],
    demo: "https://www.youtube.com/embed/mYu07Ch48Mc",
  },
];

export default projects;
