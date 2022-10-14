const projects = [
  {
    name: "Algo Vote",
    description:
      "Developed a full stack web application for creating decentralized elections with Algorand",
    technologies:
      "React, Node.js, Docker, Nginx, Google Cloud, Algorand Blockchain",
    about: [
      "Wrote smart contracts on the Algorand blockchain using TEAL to verify and count votes as well as manage voting permissions",
      "Leveraged React, Node.js, Docker, and Google Cloud to develop a full stack web application, deployed at algo‑vote.com",
    ],
    github: "https://github.com/AdrianJendo/AlgoVote",
    website: "https://algo-vote.com",
  },
  {
    name: "Stockwatch",
    description:
      "Created a scalable full stack web application for analyzing equities, currencies, and crypto",
    technologies: "React, Python Flask, Docker, Nginx, MongoDB, PostgreSQL",
    about: [
      "Utilized multiple financial APIs to develop a tool for visualizing relative equity performance with Python Pandas and Chart.js",
      "Developed a squarified treemapping algorithm to analyze price changes of portfolios and stock indices in a heatmap",
      "Protected frontend routes and API endpoints by implementing user authentication with JSON Web Tokens and cookies",
    ],
    github: "https://github.com/AdrianJendo/stockwatch",
  },
  {
    name: "Computer Vision Traffic Sign Detector",
    description:
      "Successfully trained a Convolutional Neural Network to detect 43 classes of traffic signs in a full stack web application",
    technologies: "React, Python Flask, Docker, Nginx",
    about: [
      "Reduced overfitting with regularization techniques such as dropout layers, max pooling, and a validation set",
      "Varied model parameters such as batch size, activation function, and dropout rate to achieve a test set accuracy of 96.6%",
    ],
    github: "https://github.com/AdrianJendo/traffic-sign-detector",
  },
  {
    name: "Graph Traversal Visualizer",
    description:
      "Graph traversal visualizer for directed, undirected, weighted, and unweighted graphs",
    technologies: "React",
    github: "https://github.com/AdrianJendo/Graph-Traversal",
    website: "https://adrianjendo.github.io/Graph-Traversal/",
    about: [],
  },
  {
    name: "Stock Portfolio Rebalancer",
    description:
      "Python application for automating portfolio rebalancing",
    technologies: "Python",
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
      "Path finding visualizer using Dijkstra’s Algorithm and A* Algorithm",
    technologies: "React",
    github: "https://github.com/AdrianJendo/path_finding",
    website: "https://adrianjendo.github.io/path_finding/",
    about: [],
  },
  {
    name: "Sorting Algorithm Visualizer",
    description:
      "Sorting visualizer for sorting algorithms such as merge sort, quick sort, and heap sort",
    technologies: "React",
    github: "https://github.com/AdrianJendo/sortingvisualizer",
    website: "https://adrianjendo.github.io/sortingvisualizer/",
    about: [],
  },
  {
    name: "Sudoku Solving Algorithm",
    description: "Sudoku solving algorithm using recursive backtracking",
    technologies: "React",
    github: "https://github.com/AdrianJendo/Sudoku-Solver",
    website: "https://adrianjendo.github.io/Sudoku-Solver/",
    about: [],
  },
];

export default projects;
