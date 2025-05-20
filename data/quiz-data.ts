export type Question = {
  id: number
  question: string
  options: {
    a: string
    b: string
    c: string
    d: string
  }
  correctAnswer: string
  concept: string
}

export const quizData: Question[] = [
  {
    id: 1,
    question: "What is the primary purpose of OpenAI's Swarm framework?",
    options: {
      a: "Train neural networks",
      b: "Generate text prompts",
      c: "Orchestrate multi-agent systems",
      d: "Build mobile apps",
    },
    correctAnswer: "c",
    concept:
      "Swarm is an experimental framework from OpenAI. It focuses on orchestrating multiple agents to work together. It introduces abstractions like Agents and Handoffs. This allows scalable and testable coordination between agents.",
  },
  {
    id: 2,
    question: 'In the Swarm framework, what are "Agents"?',
    options: {
      a: "Data storage units",
      b: "Rule-based systems",
      c: "Independent entities with tools and instructions",
      d: "Visualization modules",
    },
    correctAnswer: "c",
    concept:
      "Agents are core components in Swarm and the Agents SDK. They are autonomous units designed to handle specific tasks. Each agent has tools and instructions assigned to it. This modularity improves efficiency and scalability.",
  },
  {
    id: 3,
    question: 'What does the term "handoff" refer to in Swarm?',
    options: {
      a: "Logging actions",
      b: "Transferring control between agents",
      c: "Deleting unused agents",
      d: "Installing tools",
    },
    correctAnswer: "b",
    concept:
      "Handoff enables dynamic delegation among agents. An agent can pass control and context to another agent. This allows specialized handling of subtasks. It ensures the most suitable agent handles each request.",
  },
  {
    id: 4,
    question: "What is the OpenAI Agents SDK a successor to?",
    options: {
      a: "ChatGPT",
      b: "Swarm",
      c: "Whisper",
      d: "Codex",
    },
    correctAnswer: "b",
    concept:
      "The OpenAI Agents SDK is a production-ready evolution of Swarm. It inherits the architecture of agents and handoffs. This SDK is more powerful and developer-friendly. It's built for orchestrating real-world multi-agent workflows.",
  },
  {
    id: 5,
    question: "Which pattern involves breaking a task into sequenced sub-tasks?",
    options: {
      a: "Routing",
      b: "Parallelization",
      c: "Prompt Chaining",
      d: "Orchestrator-Worker",
    },
    correctAnswer: "c",
    concept:
      "Prompt Chaining divides a complex task into ordered steps. Each agent performs one task and passes the result onward. This ensures clarity and logical task progression. The Agents SDK supports chaining via agent sequences.",
  },
  {
    id: 6,
    question: "What is the main role of an orchestrator agent?",
    options: {
      a: "Execute frontend code",
      b: "Optimize memory",
      c: "Decompose and assign subtasks",
      d: "Handle billing",
    },
    correctAnswer: "c",
    concept:
      "An orchestrator breaks down a big task into parts. It assigns subtasks to specialized worker agents. This division ensures faster and more accurate task completion. It's a key pattern in multi-agent orchestration.",
  },
  {
    id: 7,
    question: "What does the routing pattern accomplish?",
    options: {
      a: "Stops agent execution",
      b: "Assigns tasks based on context",
      c: "Combines agent outputs",
      d: "Encrypts data",
    },
    correctAnswer: "b",
    concept:
      "Routing directs each subtask to the best-suited agent. It depends on the task type and agent capabilities. Swarm's handoffs help implement this mechanism. This ensures optimal handling of user requests.",
  },
  {
    id: 8,
    question: "How does the parallelization pattern enhance performance?",
    options: {
      a: "Adds redundancy",
      b: "Limits agent activity",
      c: "Runs tasks concurrently",
      d: "Prevents handoffs",
    },
    correctAnswer: "c",
    concept:
      "Parallelization lets agents work on different subtasks simultaneously. It improves speed and system throughput. Tasks don't wait for one another to complete. It's ideal for time-critical multi-agent tasks.",
  },
  {
    id: 9,
    question: "What is a key feature added in the OpenAI Agents SDK?",
    options: {
      a: "Quantum computing",
      b: "Guardrails for agent behavior",
      c: "Syntax highlighting",
      d: "Graphical UI",
    },
    correctAnswer: "b",
    concept:
      "The Agents SDK introduces guardrails for control. These guardrails evaluate agent behavior and output. They help maintain safety and task alignment. This enables evaluative and feedback-based loops.",
  },
  {
    id: 10,
    question: "Which design pattern uses feedback loops for improvement?",
    options: {
      a: "Routing",
      b: "Evaluator-Optimizer",
      c: "Prompt chaining",
      d: "Decomposition",
    },
    correctAnswer: "b",
    concept:
      "Evaluator-Optimizer is an iterative improvement pattern. One agent evaluates another's output and suggests changes. This cycle enhances output quality over time. The SDK's guardrails can support this behavior.",
  },
  {
    id: 11,
    question: "What makes Swarm lightweight and flexible for developers?",
    options: {
      a: "Uses Python exclusively",
      b: "No UI",
      c: "Minimalist design and abstractions",
      d: "Requires no internet",
    },
    correctAnswer: "c",
    concept:
      "Swarm is intentionally minimal and developer-friendly. It provides only essential abstractions: Agents and Handoffs. This simplicity encourages experimentation. Developers can rapidly prototype multi-agent systems.",
  },
  {
    id: 12,
    question: "What best describes a worker agent?",
    options: {
      a: "Leads orchestration",
      b: "Handles data analytics",
      c: "Performs a single focused task",
      d: "Builds UIs",
    },
    correctAnswer: "c",
    concept:
      "Worker agents focus on executing specific subtasks. They receive instructions from orchestrator agents. They ensure specialization and consistency. Each worker handles a defined scope efficiently.",
  },
  {
    id: 13,
    question: "What benefit does handoff provide in agent design?",
    options: {
      a: "Prevents loops",
      b: "Ensures security",
      c: "Dynamically reassigns control",
      d: "Adds authentication",
    },
    correctAnswer: "c",
    concept:
      "Handoff is crucial for flexible task management. It lets one agent pass control to another based on context. This enables real-time task redirection. It keeps user interactions relevant and expert-led.",
  },
  {
    id: 14,
    question: "What enables agents to act concurrently in a system?",
    options: {
      a: "REST APIs",
      b: "Parallel execution support",
      c: "Human moderation",
      d: "Time delays",
    },
    correctAnswer: "b",
    concept:
      "Concurrency allows agents to operate in parallel. This minimizes overall processing time. It's key for systems handling multiple user inputs. The SDK supports orchestrating these parallel flows.",
  },
  {
    id: 15,
    question: "Which of the following is NOT a core concept in the Agents SDK?",
    options: {
      a: "Prompt chaining",
      b: "Orchestrator-worker model",
      c: "Neural link compression",
      d: "Guardrails",
    },
    correctAnswer: "c",
    concept:
      "Prompt chaining, orchestration, and guardrails are core concepts. They are part of the SDK's framework for structured tasks. \"Neural link compression\" is not a defined concept here. It's not part of the Swarm or SDK design.",
  },
]
