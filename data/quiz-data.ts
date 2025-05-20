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
      concept: "Swarm is an experimental framework from OpenAI. It focuses on orchestrating multiple agents to work together. It introduces abstractions like Agents and Handoffs. This allows scalable and testable coordination between agents."
    },
    {
      id: 2,
      question: "In the Swarm framework, what are 'Agents'?",
      options: {
        a: "Data storage units",
        b: "Rule-based systems",
        c: "Independent entities with tools and instructions",
        d: "Visualization modules",
      },
      correctAnswer: "c",
      concept: "Agents are core components in Swarm and the Agents SDK. They are autonomous units designed to handle specific tasks. Each agent has tools and instructions assigned to it. This modularity improves efficiency and scalability."
    },
    {
      id: 3,
      question: "What does the term 'handoff' refer to in Swarm?",
      options: {
        a: "Logging actions",
        b: "Transferring control between agents",
        c: "Deleting unused agents",
        d: "Installing tools",
      },
      correctAnswer: "b",
      concept: "Handoff enables dynamic delegation among agents. An agent can pass control and context to another agent. This allows specialized handling of subtasks. It ensures the most suitable agent handles each request."
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
      concept: "The OpenAI Agents SDK is a production-ready evolution of Swarm. It inherits the architecture of agents and handoffs. This SDK is more powerful and developer-friendly. It's built for orchestrating real-world multi-agent workflows."
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
      concept: "Prompt Chaining divides a complex task into ordered steps. Each agent performs one task and passes the result onward. This ensures clarity and logical task progression. The Agents SDK supports chaining via agent sequences."
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
      concept: "An orchestrator breaks down a big task into parts. It assigns subtasks to specialized worker agents. This division ensures faster and more accurate task completion. It's a key pattern in multi-agent orchestration."
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
      concept: "Routing directs each subtask to the best-suited agent. It depends on the task type and agent capabilities. Swarm's handoffs help implement this mechanism. This ensures optimal handling of user requests."
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
      concept: "Parallelization lets agents work on different subtasks simultaneously. It improves speed and system throughput. Tasks don't wait for one another to complete. It's ideal for time-critical multi-agent tasks."
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
      concept: "The Agents SDK introduces guardrails for control. These guardrails evaluate agent behavior and output. They help maintain safety and task alignment. This enables evaluative and feedback-based loops."
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
      concept: "Evaluator-Optimizer is an iterative improvement pattern. One agent evaluates another's output and suggests changes. This cycle enhances output quality over time. The SDK's guardrails can support this behavior."
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
      concept: "Swarm is intentionally minimal and developer-friendly. It provides only essential abstractions: Agents and Handoffs. This simplicity encourages experimentation. Developers can rapidly prototype multi-agent systems."
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
      concept: "Worker agents focus on executing specific subtasks. They receive instructions from orchestrator agents. They ensure specialization and consistency. Each worker handles a defined scope efficiently."
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
      concept: "Handoff is crucial for flexible task management. It lets one agent pass control to another based on context. This enables real-time task redirection. It keeps user interactions relevant and expert-led."
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
      concept: "Concurrency allows agents to operate in parallel. This minimizes overall processing time. It's key for systems handling multiple user inputs. The SDK supports orchestrating these parallel flows."
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
      concept: "Prompt chaining, orchestration, and guardrails are core concepts. They are part of the SDK's framework for structured tasks. 'Neural link compression' is not a defined concept here. It's not part of the Swarm or SDK design."
    },
    {
      id: 16,
      question: "What is OpenRouter primarily designed to do?",
      options: {
        a: "Build LLMs from scratch",
        b: "Host models in its data centers",
        c: "Provide a unified API interface to many LLMs",
        d: "Replace OpenAI entirely",
      },
      correctAnswer: "c",
      concept: "OpenRouter serves as a proxy platform that connects users to 200+ models via a single API. It routes traffic to third-party providers like OpenAI, Anthropic, and Mistral. This simplifies integration and avoids managing multiple APIs. It enhances flexibility without replacing any specific provider."
    },
    {
      id: 17,
      question: "How many requests per day does OpenRouter typically allow for its free models?",
      options: {
        a: "20",
        b: "150",
        c: "200",
        d: "1000",
      },
      correctAnswer: "c",
      concept: "OpenRouter's free models come with a 200 requests/day global limit. This applies across all free models with ':free' suffix. Some also enforce 20 requests per minute. These limits are meant for fair access and server load management."
    },
    {
      id: 18,
      question: "What type of API structure does OpenRouter follow for compatibility?",
      options: {
        a: "REST API from Anthropic",
        b: "Custom XML format",
        c: "OpenAI Chat Completion API",
        d: "HuggingFace Inference API",
      },
      correctAnswer: "c",
      concept: "OpenRouter mimics the OpenAI Chat Completion API endpoints. You can switch to OpenRouter by changing the base URL and API key. No major code changes are needed if you use OpenAI SDKs. This compatibility enables rapid migration and prototyping."
    },
    {
      id: 19,
      question: "What is the API base URL for OpenRouter?",
      options: {
        a: "https://api.openai.com/v1",
        b: "https://openrouter.ai/api/v1",
        c: "https://chat.openrouter.com",
        d: "https://router.openai.com/api",
      },
      correctAnswer: "b",
      concept: "OpenRouter provides a RESTful API using https://openrouter.ai/api/v1. It mirrors the structure of OpenAI's /v1/chat/completions. Only the base URL and API key differ from OpenAI. This makes switching almost frictionless."
    },
    {
      id: 20,
      question: "Which of the following best describes OpenRouter's hosting model?",
      options: {
        a: "It trains and hosts all models",
        b: "It proxies requests to third-party LLM providers",
        c: "It only hosts Google models",
        d: "It caches only previous responses",
      },
      correctAnswer: "b",
      concept: "OpenRouter does not host LLMs directly. Instead, it routes requests to providers like Together AI or Fireworks. It acts as a middle layer, handling auth and formatting. This allows scaling access to 200+ models efficiently."
    },
    {
      id: 21,
      question: "Which Google Gemini models support OpenAI Chat Completion API?",
      options: {
        a: "Gemini 1.5 only",
        b: "Gemini Pro 1.0",
        c: "Gemini 2.0 Flash and Flash-Lite",
        d: "Gemini Nano",
      },
      correctAnswer: "c",
      concept: "Google Gemini 2.0 Flash and Flash-Lite now support the OpenAI API format. They can be used with OpenAI SDK and agents via OpenRouter or Gemini API. Flash supports 15 RPM; Flash-Lite allows 30 RPM. Both are optimal for dev/testing with 1,500 daily RPD."
    },
    {
      id: 22,
      question: "How many free models are currently available on OpenRouter (March 2025)?",
      options: {
        a: "25",
        b: "40",
        c: "50",
        d: "100",
      },
      correctAnswer: "c",
      concept: "As of March 2025, OpenRouter has 50 free models, per official X posts. These include 6 high-context models with 1M+ token windows. Free models are often marked with :free in the model ID. They're suitable for dev, research, and casual use."
    },
    {
      id: 23,
      question: "What kind of usage limit is enforced on most free OpenRouter models?",
      options: {
        a: "Time-based usage only",
        b: "Unlimited access with login",
        c: "Token limits only",
        d: "RPD and RPM limits",
      },
      correctAnswer: "d",
      concept: "OpenRouter free models enforce both Requests Per Day (200) and Requests Per Minute (usually 20). Token limits (TPM) are also considered per model. These ensure fair access without abuse."
    },
    {
      id: 24,
      question: "What is the benefit of OpenRouter supporting function calling?",
      options: {
        a: "Allows building new models",
        b: "Lets models execute code directly",
        c: "Enables integration of external tools via model suggestions",
        d: "Disables model output formatting",
      },
      correctAnswer: "c",
      concept: "Function calling lets models suggest which external tool to use. Developers define tools using JSON schemas. The model picks the tool and arguments; the app runs it. This is ideal for building tool-using agents."
    },
    {
      id: 25,
      question: "What does the suffix :free signify in OpenRouter model IDs?",
      options: {
        a: "Model is deprecated",
        b: "Model is in test phase",
        c: "Model is available for free use",
        d: "Model uses fewer tokens",
      },
      correctAnswer: "c",
      concept: "Models with :free at the end are zero-cost for users. Examples: deepseek-chat-v3-0324:free These may have lower priority or rate limits. They are ideal for learning, prototyping, and testing."
    },
    {
      id: 26,
      question: "Where can users view token usage and costs on OpenRouter?",
      options: {
        a: "In the browser console",
        b: "In the terminal logs",
        c: "On the OpenRouter Activity page",
        d: "From the payment receipt",
      },
      correctAnswer: "c",
      concept: "OpenRouter provides an Activity dashboard for tracking: Input/output tokens, Daily/monthly costs, Per-model usage. This improves visibility and budgeting."
    },
    {
      id: 27,
      question: "How can developers integrate OpenRouter with OpenAI SDKs?",
      options: {
        a: "By modifying the SDK internals",
        b: "By adding a plugin",
        c: "By changing base URL and API key only",
        d: "By converting the SDK to GraphQL",
      },
      correctAnswer: "c",
      concept: "OpenRouter mimics the OpenAI API format exactly. So developers just need to swap the URL and key. No refactor is required when using OpenAI SDK. It saves development time and complexity."
    },
    {
      id: 28,
      question: "What type of access does OpenRouter provide to Gemini models?",
      options: {
        a: "Full unrestricted access",
        b: "Access only via Google APIs",
        c: "Access through OpenAI-compatible endpoints",
        d: "Access via download only",
      },
      correctAnswer: "c",
      concept: "OpenRouter enables using Gemini 2.0 Flash & Flash-Lite through OpenAI-style endpoints. This helps integrate Gemini into existing OpenAI-based code. It blends Gemini with agent frameworks like OpenAI Agents SDK."
    },
    {
      id: 29,
      question: "Which model version is available free on OpenRouter with a 1M token context?",
      options: {
        a: "GPT-2",
        b: "OpenChat 3.5",
        c: "Claude Instant",
        d: "DeepSeek V3 0324",
      },
      correctAnswer: "d",
      concept: "DeepSeek V3 0324:free is a high-context model (1M+ tokens). It's listed as a free model on OpenRouter. This makes it useful for long documents or coding tasks. High-context models are rare in free tiers."
    },
    {
      id: 30,
      question: "What is the main reason OpenRouter is preferred for development and testing?",
      options: {
        a: "It provides offline access",
        b: "It offers premium support",
        c: "It has high limits like Gemini",
        d: "It supports many models despite daily limits",
      },
      correctAnswer: "d",
      concept: "Though the RPD limit is 200, OpenRouter provides 50+ models. This makes it great for testing variety over quantity. It's also a backup when paid models are unavailable. Its diversity makes it a flexible development tool."
    },
    {
      id: 31,
      question: "What role does OpenRouter play in the tool-calling process?",
      options: {
        a: "Executes tools directly",
        b: "Routes calls to OpenAI only",
        c: "Lets models suggest tool calls; developers execute",
        d: "Stores tool data",
      },
      correctAnswer: "c",
      concept: "OpenRouter allows the model to suggest tool names and arguments. The final execution is handled by the developer's backend. It matches OpenAI's function calling interface. Useful in building AI agents that interact with APIs."
    },
    {
      id: 32,
      question: "What advantage do Gemini Flash and Flash-Lite offer over OpenRouter free models?",
      options: {
        a: "Lower latency",
        b: "No authentication",
        c: "Higher daily rate limit (1,500 RPD)",
        d: "Less context window",
      },
      correctAnswer: "c",
      concept: "Gemini Flash and Flash-Lite allow up to 1,500 requests/day, far exceeding OpenRouter's 200/day free cap. They're better suited for heavier dev and test workloads. They also support OpenAI-compatible interfaces."
    },
    {
      id: 33,
      question: "What makes OpenRouter a good fallback platform for AI development?",
      options: {
        a: "Unlimited access",
        b: "Multiple LLMs in one API",
        c: "Auto-train new models",
        d: "Offline toolkit",
      },
      correctAnswer: "b",
      concept: "OpenRouter is ideal for testing different models quickly. It supports 200+ models, 50 of them free. So when primary APIs are down or limited, OpenRouter serves as a multi-model backup."
    },
    {
      id: 34,
      question: "Which feature allows you to interact with many models in a single chatroom on OpenRouter?",
      options: {
        a: "Playground Mode",
        b: "API Logs",
        c: "Chatroom UI",
        d: "Context Switcher",
      },
      correctAnswer: "c",
      concept: "OpenRouter's Chatroom UI allows interaction with multiple models. Found at https://openrouter.ai/chat, it supports up to 1.5B tokens for direct testing. A great tool for experimenting without code."
    },
    {
      id: 35,
      question: "How does OpenRouter ensure model availability and performance?",
      options: {
        a: "Only uses one model per task",
        b: "Automatically balances load across providers",
        c: "Blocks requests during peak time",
        d: "Reduces token limits dynamically",
      },
      correctAnswer: "b",
      concept: "OpenRouter's routing engine chooses the best provider based on latency, availability, and pricing. It handles load balancing and fallback logic. This ensures high uptime even when some models are down."
    },
    {
      id: 36,
      question: "What is the primary purpose of LiteLLM?",
      options: {
        a: "Visualize AI workflows",
        b: "Unify API access to various LLMs",
        c: "Store API keys in a database",
        d: "Build front-end interfaces",
      },
      correctAnswer: "b",
      concept: "LiteLLM is a Python SDK that acts as a unified interface for interacting with over 100 LLMs like OpenAI, Anthropic, Gemini, HuggingFace, etc. It simplifies LLM integration by offering consistent API, retries, fallbacks, and streaming. Used by CrewAI to abstract LLM switching This lets you focus on logic, not vendor-specific APIs."
    },
    {
      id: 37,
      question: "How can you install the LiteLLM SDK?",
      options: {
        a: "install litellm-sdk",
        b: "npm install litellm",
        c: "pip install litellm",
        d: "pip install openai-agents",
      },
      correctAnswer: "c",
      concept: "LiteLLM is installed using pip install litellm. It requires Python (3.6+) and is lightweight and fast to set up. Once installed, you can use it for LLM completions, streaming, and fallbacks. Additional integrations may require optional packages."
    },
    {
      id: 38,
      question: "How are API keys configured in LiteLLM for model access?",
      options: {
        a: "By storing in a database",
        b: "Through command-line arguments",
        c: "By setting environment variables",
        d: "Hardcoded in the SDK",
      },
      correctAnswer: "c",
      concept: "To use LiteLLM with different LLM providers, you need to set API keys as environment variables. These include keys for OpenAI, Anthropic, Google Gemini, etc. Using os.environ['PROVIDER_API_KEY'] = '...' allows secure key access. This makes switching between models seamless."
    },
    {
      id: 39,
      question: "Which function is used in LiteLLM to interact with LLMs?",
      options: {
        a: "generate_response()",
        b: "litellm_chat()",
        c: "completion()",
        d: "prompt_response()",
      },
      correctAnswer: "c",
      concept: "LiteLLM uses a standard function completion() to send prompts to LLMs. It accepts the model name and message history as parameters. The response mimics OpenAI's structure, supporting consistency. Just change the model name to switch providers."
    },
    {
      id: 40,
      question: "What parameter enables real-time output in LiteLLM?",
      options: {
        a: "output_live=true",
        b: "stream=true",
        c: "async=true",
        d: "live_mode=true",
      },
      correctAnswer: "b",
      concept: "LiteLLM supports real-time streaming of responses from models like GPT. This is useful for chat interfaces or dynamic outputs. You can enable it by setting stream=true in the completion call. You then iterate over the response parts."
    },
    {
      id: 41,
      question: "Why is fallback logic important in LiteLLM?",
      options: {
        a: "To avoid streaming",
        b: "To prevent API key usage",
        c: "To ensure response even if one model fails",
        d: "To reduce LLM accuracy",
      },
      correctAnswer: "c",
      concept: "Fallbacks allow your app to switch to another LLM if the first one fails. This ensures high availability and robust performance. LiteLLM makes this process easier with try-except and retry logic. Used in CrewAI for multi-model agent stability."
    },
    {
      id: 42,
      question: "What is the benefit of LiteLLM mapping all exceptions to OpenAIError types?",
      options: {
        a: "It supports only OpenAI",
        b: "It simplifies error handling",
        c: "It logs all requests automatically",
        d: "It adds new models",
      },
      correctAnswer: "b",
      concept: "LiteLLM maps errors from different providers into OpenAI-style exceptions. This means developers can handle errors using familiar classes like OpenAIError. You don't need to learn provider-specific exceptions. It improves debugging and consistency."
    },
    {
      id: 43,
      question: "Which is NOT a logging integration supported by LiteLLM?",
      options: {
        a: "Lunary",
        b: "Langfuse",
        c: "Helicone",
        d: "Docker",
      },
      correctAnswer: "d",
      concept: "LiteLLM offers logging and observability with tools like Lunary, Langfuse, and Helicone. You can send success or error callbacks to monitor LLM activity. Just set environment keys and use the success_callback list. Great for production usage and debugging."
    },
    {
      id: 44,
      question: "Which of the following is supported by LiteLLM?",
      options: {
        a: "Only OpenAI models",
        b: "Only local models",
        c: "Over 100 models from many providers",
        d: "Only LangChain tools",
      },
      correctAnswer: "c",
      concept: "LiteLLM supports OpenAI, Gemini, Anthropic, HuggingFace, Ollama, Azure OpenAI, and more. Each provider is accessed using the model name like claude-3, gemini-2.0, etc. You don't need to install multiple SDKs. Everything is unified in one SDK."
    },
    {
      id: 45,
      question: "Why use a config.yaml file with LiteLLM?",
      options: {
        a: "To compile Python code",
        b: "To store frontend UI components",
        c: "To manage model settings and keys",
        d: "To train new models",
      },
      correctAnswer: "c",
      concept: "You can store model parameters like names and keys in a YAML file. This makes configuration easier and separates logic from code. Perfect for deploying at scale or managing multiple models. The file can define retries, timeouts, and more."
    },
    {
      id: 46,
      question: "What major change was made in CrewAI LLM integration?",
      options: {
        a: "It removed LangChain entirely",
        b: "It added PyTorch",
        c: "It switched to LiteLLM for model integration",
        d: "It only supports Gemini now",
      },
      correctAnswer: "c",
      concept: "CrewAI switched from LangChain to LiteLLM for LLM interaction. However, it still supports LangChain tools within its agent structure. This offers the best of both worlds—flexibility and tool access. CrewAI agents can now use fallback, streaming, and retries from LiteLLM."
    },
    {
      id: 47,
      question: "What was unique about the agent demo using LiteLLM and Gemini?",
      options: {
        a: "It only used Azure",
        b: "It replied in SQL",
        c: "It only replied in haikus",
        d: "It generated code only",
      },
      correctAnswer: "c",
      concept: "LiteLLM can be integrated with openai-agents to create custom agents. One demo creates a Gemini-based agent that replies only in haikus. It uses @function_tool to inject functions like weather retrieval. Useful for creative AI and instructional demos."
    },
    {
      id: 48,
      question: "Which library is used to enable async support in notebooks for LiteLLM?",
      options: {
        a: "asyncio_tools",
        b: "fast_async",
        c: "nest_asyncio",
        d: "loop_async",
      },
      correctAnswer: "c",
      concept: "In Jupyter/Colab, nest_asyncio is used to allow async functions. LiteLLM supports async completions for performance. Before running agents in notebooks, enable async runtime. It prevents event loop errors."
    },
    {
      id: 49,
      question: "What is the purpose of get_weather() in the haiku agent example?",
      options: {
        a: "Make API calls to OpenWeather",
        b: "Demonstrate tool usage with a placeholder",
        c: "Fetch Gemini model configs",
        d: "Log user activity",
      },
      correctAnswer: "b",
      concept: "In demos, functions like get_weather(city) are used as placeholders. These simulate real APIs and demonstrate function tools. For production, replace them with real API logic. Helps understand how AI can call external functions."
    },
    {
      id: 50,
      question: "Can you still use LangChain tools with CrewAI and LiteLLM?",
      options: {
        a: "No, LangChain is unsupported now",
        b: "Only if using OpenAI",
        c: "Yes, LangChain tools are still supported",
        d: "Only for fallback",
      },
      correctAnswer: "c",
      concept: "Even though CrewAI now uses LiteLLM, LangChain tools are still compatible. You can combine both to build advanced, tool-using agents. LangChain handles memory, tools, routing, etc. LiteLLM handles completions and model switching."
    },
    {
      id: 51,
      question: "What is the default LLM provider used by the OpenAI Agents SDK?",
      options: {
        a: "Anthropic",
        b: "Hugging Face",
        c: "OpenAI",
        d: "VertexAI",
      },
      correctAnswer: "c",
      concept: "OpenAI Agents SDK uses OpenAI as the default model provider. To use other providers like Gemini or Anthropic, developers must configure them explicitly. This can be done at agent, run, or global level. The flexibility allows multi-model support across providers."
    },
    {
      id: 52,
      question: "What method is used to prevent tracing logs in the OpenAI Agents SDK?",
      options: {
        a: "disable_tracing()",
        b: "set_tracing_disabled(True)",
        c: "stop_tracing()",
        d: "tracing(False)",
      },
      correctAnswer: "b",
      concept: "The function set_tracing_disabled(True) is used to turn off internal telemetry logs. It improves output clarity during development or demos. This can be important for reducing clutter in debugging or notebooks. Always use this for clean output unless tracing is required."
    },
    {
      id: 53,
      question: "In which level do you pass the external client using RunConfig?",
      options: {
        a: "Global level",
        b: "Agent level",
        c: "Function level",
        d: "Run level",
      },
      correctAnswer: "d",
      concept: "The Run level configuration uses RunConfig to set up the model and client per execution. This allows different runs to use different models dynamically. It doesn't modify the agent permanently. Useful for testing multiple providers in one script."
    },
    {
      id: 54,
      question: "What is the base URL required for Gemini models using the OpenAI format?",
      options: {
        a: "https://api.google.com/gemini",
        b: "https://generativelanguage.googleapis.com/v1beta/openai/",
        c: "https://gemini.openai.com/v1",
        d: "https://vertexai.googleapis.com/gemini",
      },
      correctAnswer: "b",
      concept: "To use Gemini with OpenAI Agents, you must connect via Google's OpenAI-compatible proxy endpoint. The valid base URL is: https://generativelanguage.googleapis.com/v1beta/openai/ This enables Gemini models to respond using OpenAI API structure."
    },
    {
      id: 55,
      question: "What class is used to represent the Gemini model with custom configuration?",
      options: {
        a: "LiteLLMModel",
        b: "GeminiModel",
        c: "OpenAIChatCompletionsModel",
        d: "ChatModel",
      },
      correctAnswer: "c",
      concept: "When using Gemini via OpenAI format, OpenAIChatCompletionsModel wraps the configuration. You can pass the model name like 'gemini-2.0-flash' and your AsyncOpenAI client. It treats Gemini like a drop-in OpenAI replacement. This design simplifies integration for developers."
    },
    {
      id: 56,
      question: "Which of the following supports both synchronous and asynchronous execution of agents?",
      options: {
        a: "openai.ChatCompletion.create()",
        b: "Runner.run_sync() and Runner.run()",
        c: "Gemini.run_agent()",
        d: "Agent.execute()",
      },
      correctAnswer: "b",
      concept: "Runner.run() is the async version and Runner.run_sync() is the sync version. They are provided by OpenAI Agents SDK to execute agent conversations. You can use either depending on your app's architecture. Async is better for I/O-bound or web-based environments."
    },
    {
      id: 57,
      question: "How do you globally configure Gemini as the default LLM provider?",
      options: {
        a: "Use set_default_openai_client() with AsyncOpenAI()",
        b: "Assign directly in agent constructor",
        c: "Call run_sync() with Gemini",
        d: "Add Gemini key in .env only",
      },
      correctAnswer: "a",
      concept: "To set Gemini globally, use set_default_openai_client() with your configured AsyncOpenAI client. This ensures all agents and runs default to Gemini without repeating configs. It's a good practice when your whole project depends on a non-OpenAI provider. Also combine with set_default_openai_api('chat_completions') for full compatibility."
    },
    {
      id: 58,
      question: "What is the primary purpose of the Chainlit framework?",
      options: {
        a: "Data visualization for ML models",
        b: "Managing databases for AI projects",
        c: "Simplifying UI development for conversational AI",
        d: "Automating backend infrastructure",
      },
      correctAnswer: "c",
      concept: "Chainlit is built to simplify UI creation for conversational AI applications. It allows Python developers to build chat interfaces without frontend work. This enables faster prototyping of chatbot and assistant apps. The focus is on conversation-driven interactions."
    },
    {
      id: 59,
      question: "Which programming language is Chainlit primarily built for?",
      options: {
        a: "Java",
        b: "JavaScript",
        c: "C++",
        d: "Python",
      },
      correctAnswer: "d",
      concept: "Chainlit is a Python-first framework—everything from logic to UI is written in Python. This eliminates the need for separate frontend stacks. It is ideal for AI/ML engineers and Python developers. Being async-friendly also makes it scalable for real-time apps."
    },
    {
      id: 60,
      question: "Which of the following UI elements is not supported by Chainlit?",
      options: {
        a: "Interactive Buttons",
        b: "File Uploads",
        c: "DataFrames",
        d: "Audio and Video",
      },
      correctAnswer: "c",
      concept: "Chainlit supports rich UI elements like buttons, images, forms, audio, video, and file uploads. It is designed for conversational UIs rather than tabular data display like DataFrames. Unlike Streamlit, it focuses on dialogues, not dashboards. Hence, DataFrames are not its core focus."
    },
    {
      id: 61,
      question: "What feature of Chainlit allows it to handle multiple users or tasks concurrently?",
      options: {
        a: "Background Scheduler",
        b: "Async Python Support",
        c: "Batch Processing",
        d: "Queue Manager",
      },
      correctAnswer: "b",
      concept: "Chainlit is built with asyncio in mind, supporting asynchronous Python functions. This enables it to handle multiple user sessions and long-running LLM calls efficiently. It ensures real-time, responsive interactions across conversations. Asynchronous support boosts scalability and performance."
    },
    {
      id: 62,
      question: "Which statement best describes Chainlit's middleware and hook system?",
      options: {
        a: "It's used to manage static file hosting.",
        b: "It's used for UI theming and animation.",
        c: "It allows customization of conversation flow and behavior.",
        d: "It automatically translates user input.",
      },
      correctAnswer: "c",
      concept: "Chainlit's middleware and hooks let developers inject custom logic at various stages. This includes logging, authentication, modifying messages, and more. It helps extend Chainlit's core behavior without altering the main code. Hooks make the chatbot logic more flexible and powerful."
    },
    {
      id: 63,
      question: "What does the uv tool primarily do in Python projects?",
      options: {
        a: "Acts as a web server",
        b: "Replaces pip and venv for dependency management",
        c: "Provides data analytics capabilities",
        d: "Runs Python scripts in Docker"
      },
      correctAnswer: "b",
      concept: "uv is a fast Python package manager that replaces pip, venv, and pip-tools. It simplifies environment creation and dependency installation. With uv, you can set up virtual environments and install packages in one step. It ensures reproducible and efficient Python setups."
    },
    {
      id: 64,
      question: "What is the purpose of the .env file in the Gemini agent project?",
      options: {
        a: "Styling UI with CSS",
        b: "Defining routes",
        c: "Storing API keys securely",
        d: "Managing database connections only"
      },
      correctAnswer: "c",
      concept: "The .env file stores sensitive configuration variables like API keys. With python-dotenv, these variables are automatically loaded into the environment. This keeps secrets out of your codebase and allows safe sharing of projects. Gemini API keys are stored in .env for secure access."
    },
    {
      id: 65,
      question: "Which command activates the Python virtual environment on macOS when using uv?",
      options: {
        a: "activate.bat",
        b: ".venv\\Scripts\\activate",
        c: "source .venv/bin/activate",
        d: "venv start"
      },
      correctAnswer: "c",
      concept: "After creating a virtual environment with uv venv, you must activate it. On macOS/Linux, the command is source .venv/bin/activate. This ensures installed packages are scoped to your project. Activation allows running project-specific dependencies."
    },
    {
      id: 66,
      question: "How do you run a Chainlit application with uv?",
      options: {
        a: "uv install chainlit",
        b: "uv chainlit",
        c: "uv run chainlit run main.py -w",
        d: "chainlit start"
      },
      correctAnswer: "c",
      concept: "uv run lets you execute scripts using the local environment. To run a Chainlit app, use uv run chainlit run main.py -w. The -w flag enables autoreload on file changes during development. This command starts the Chainlit UI and your chatbot logic."
    },
    {
      id: 67,
      question: "In streamed output, what type of event returns the AI-generated message?",
      options: {
        a: "tool_call_output_item",
        b: "error_event_item",
        c: "message_output_item",
        d: "agent_setup_item"
      },
      correctAnswer: "c",
      concept: "message_output_item contains the agent's generated messages in a conversation. It is the main event for extracting and displaying AI responses. You can filter and print this event for chatbot output. It works alongside other events like tool outputs in streaming."
    },
    {
      id: 68,
      question: "What is the purpose of tool_call_output_item in streamed agent execution?",
      options: {
        a: "Handles user input",
        b: "Tracks environment state",
        c: "Displays tool function outputs",
        d: "Indicates UI updates"
      },
      correctAnswer: "c",
      concept: "When agents invoke external tools (functions), their results are emitted as tool_call_output_item. This event allows agents to access dynamic data during a task. You can use it to show intermediate results like joke counts. It's essential for tool-enhanced agent behavior."
    },
    {
      id: 69,
      question: "Why are asynchronous methods used with streamed agent runners?",
      options: {
        a: "To save disk space",
        b: "To fetch UI elements faster",
        c: "To handle real-time outputs without blocking",
        d: "To compile Python files in parallel"
      },
      correctAnswer: "c",
      concept: "Asynchronous (async/await) execution is used to handle concurrent streaming responses. It prevents blocking the main thread during agent actions or long responses. This is ideal for chat UIs where users expect continuous, fluid interaction. Streamed agents rely on asyncio for efficiency."
    },
    {
      id: 70,
      question: "What is the role of the Runner.run_streamed() function?",
      options: {
        a: "Initializes the Chainlit server",
        b: "Loads Python environment variables",
        c: "Executes the agent and yields streamed events",
        d: "Trains the LLM model"
      },
      correctAnswer: "c",
      concept: "Runner.run_streamed() executes an agent task and returns an event stream. You can iterate over the stream to receive tool calls, messages, and other outputs. This enables real-time feedback and progress tracking in AI agents. It's central to building responsive conversational agents."
    },
    {
      id: 71,
      question: "What should be used to extract readable messages from streamed output events?",
      options: {
        a: "extract_text_output()",
        b: "ItemHelpers.text_message_output()",
        c: "message_stream()",
        d: "chat_printer()"
      },
      correctAnswer: "b",
      concept: "ItemHelpers.text_message_output() is a utility to extract readable message content. It formats the message_output_item into plain text. This helps developers display agent messages clearly in the terminal or UI. It's commonly used inside the event stream loop."
    },
    {
      id: 72,
      question: "Why is Chainlit preferred for conversational AI UI compared to Streamlit or Gradio?",
      options: {
        a: "Better visualization libraries",
        b: "Lower RAM usage",
        c: "Native support for chat and messaging flow",
        d: "Easier database integration"
      },
      correctAnswer: "c",
      concept: "Chainlit is designed specifically for chatbot and assistant interfaces. Unlike Streamlit or Gradio, it supports chat messages, user inputs, and tools. It's optimized for conversational flows with real-time interactivity. This makes it ideal for LLM-based apps and prototyping agents."
    },
    {
      id: 73,
      question: "What is the main role of the @function_tool decorator in the OpenAI Agents SDK?",
      options: {
        a: "Secures tool access",
        b: "Registers a Python function as an agent tool",
        c: "Logs agent outputs",
        d: "Activates multi-agent workflows"
      },
      correctAnswer: "b",
      concept: "The @function_tool decorator marks Python functions as tools usable by agents. This allows LLMs to invoke those functions during their reasoning process. It simplifies integration of custom logic or external APIs. Function tools extend agent capabilities beyond pure text generation."
    },
    {
      id: 74,
      question: "Which tool allows agents to retrieve information from OpenAI Vector Stores?",
      options: {
        a: "WebSearchTool",
        b: "DataExplorerTool",
        c: "FileSearchTool",
        d: "QueryBuilderTool"
      },
      correctAnswer: "c",
      concept: "FileSearchTool is a hosted tool that connects agents to vectorized document stores. Agents can use it to perform semantic searches and retrieve relevant info. This is useful in RAG (retrieval-augmented generation) workflows. It enhances factual accuracy and context retention for agents."
    },
    {
      id: 75,
      question: "What is a key benefit of dynamic tool invocation in LLM reasoning?",
      options: {
        a: "Faster web searches",
        b: "Manual control of tasks",
        c: "Agents autonomously decide when to use tools",
        d: "Removes the need for API keys"
      },
      correctAnswer: "c",
      concept: "Dynamic tool invocation allows agents to interrupt reasoning, use tools, and resume. LLMs make autonomous decisions about when and how to call tools. This improves adaptability in complex or evolving tasks. It leads to more intelligent and proactive agents."
    },
    {
      id: 76,
      question: "What does 'Agents as Tools' mean in the SDK context?",
      options: {
        a: "Agents storing other agents in memory",
        b: "Agents using other agents to perform subtasks",
        c: "Tool usage without code",
        d: "Creating agents with no instructions"
      },
      correctAnswer: "b",
      concept: "'Agents as Tools' refers to agents calling other agents like they would call functions. This supports hierarchical and collaborative task handling. It enables modular, scalable workflows with specialized sub-agents. One orchestrator agent can delegate tasks to helper agents."
    },
    {
      id: 77,
      question: "What is one future feature that improves agent memory and context retention?",
      options: {
        a: "Fast cache refresh",
        b: "Short-term state sharing",
        c: "Long-term memory integration",
        d: "Infinite input token size"
      },
      correctAnswer: "c",
      concept: "Long-term memory allows agents to recall past conversations, facts, or preferences. It helps in tasks like project tracking, support, or personalized responses. Agents store data in vector databases or memory modules. This moves beyond token-limited context windows."
    },
    {
      id: 78,
      question: "What does 'multi-agent orchestration' enable in AI agent systems?",
      options: {
        a: "Faster computation",
        b: "Singular-agent workflows",
        c: "Real-time collaboration among multiple agents",
        d: "Direct device control"
      },
      correctAnswer: "c",
      concept: "Multi-agent orchestration lets specialized agents work together on complex tasks. An orchestrator agent coordinates their roles and task flow. Frameworks like CrewAI and LangGraph are built for this. It reflects real-world team collaboration in digital environments."
    },
    {
      id: 79,
      question: "What is the primary use of the as_tool() method in OpenAI Agents SDK?",
      options: {
        a: "To convert a string into a chatbot message",
        b: "To hand off full conversation control to another agent",
        c: "To enable one agent to call another agent like a function",
        d: "To stop an agent from processing user input"
      },
      correctAnswer: "c",
      concept: "The as_tool() method transforms an agent into a callable tool. This allows modular delegation where an agent processes specific input. Unlike handoffs, it doesn't transfer the full conversation history. The calling agent retains control of the dialogue."
    },
    {
      id: 80,
      question: "Which of the following best describes how input is passed when using as_tool()?",
      options: {
        a: "Full conversation history is passed to the tool agent",
        b: "Only user name is passed",
        c: "A specific generated input string is passed",
        d: "No input is passed at all"
      },
      correctAnswer: "c",
      concept: "When using as_tool(), only generated input (not the full history) is passed. This makes it suitable for task-specific functions and simpler integration. The tool agent only sees the input required for its sub-task. This keeps agents decoupled and focused."
    },
    {
      id: 81,
      question: "In the as_tool() approach, who maintains control over the conversation flow?",
      options: {
        a: "The tool agent",
        b: "The system",
        c: "The user",
        d: "The calling/original agent"
      },
      correctAnswer: "d",
      concept: "Using as_tool(), the calling agent delegates a task to another agent. After execution, the tool agent returns output to the calling agent. The original agent remains in charge of the conversation. This maintains centralized control with modular delegation."
    },
    {
      id: 82,
      question: "Which benefit is most associated with using as_tool() in a multi-agent system?",
      options: {
        a: "Increased memory sharing between agents",
        b: "Full transfer of conversation context",
        c: "Modular and scalable agent composition",
        d: "Real-time voice transcription"
      },
      correctAnswer: "c",
      concept: "as_tool() promotes modularity in system design. Each agent can act as a specialized tool without context overhead. This enhances code maintainability and scalability. It's ideal for systems where agents serve narrow tasks."
    },
    {
      id: 83,
      question: "How is as_tool() different from a handoff?",
      options: {
        a: "It allows real-time editing of another agent",
        b: "It gives the full conversation control to the new agent",
        c: "It sends only specific input, not full conversation history",
        d: "It sends JSON input to the tool agent"
      },
      correctAnswer: "c",
      concept: "Handoff sends full conversation history and passes control. In contrast, as_tool() only passes input for a sub-task. The original agent resumes control after getting the output. This makes as_tool() suitable for controlled task delegation."
    },
    {
      id: 84,
      question: "In which scenario would as_tool() be preferable over a handoff?",
      options: {
        a: "When the new agent needs full context to make decisions",
        b: "When executing a single-purpose task like a product lookup",
        c: "When transferring conversation permanently",
        d: "When training a new model"
      },
      correctAnswer: "b",
      concept: "Use as_tool() for narrow, task-focused operations. This avoids unnecessary context sharing and keeps things efficient. The tool agent performs its function and returns output. It's best when full conversation history isn't needed."
    },
    {
      id: 85,
      question: "What role does the triage_agent play in the as_tool() usage example?",
      options: {
        a: "It acts as a storage layer",
        b: "It performs final post-processing",
        c: "It routes queries to the right agent tool",
        d: "It generates product images"
      },
      correctAnswer: "c",
      concept: "The triage_agent handles initial user input. It chooses which tool agent (e.g., shopping or support) to call. Based on user intent, it delegates tasks and handles the output. This orchestrator design improves modularity."
    },
    {
      id: 86,
      question: "What is the primary characteristic of Local Context in OpenAI Agents SDK?",
      options: {
        a: "It is sent to the LLM for processing",
        b: "It contains the entire conversation history",
        c: "It is internal data not exposed to the LLM",
        d: "It represents user messages only"
      },
      correctAnswer: "c",
      concept: "Local context holds internal data used during agent execution. It is never sent to the LLM or included in prompts. Typically encapsulated in dataclasses or models. Used for backend logic like user info or helper functions."
    },
    {
      id: 87,
      question: "How is local context passed to an agent run?",
      options: {
        a: "Embedded in the conversation history",
        b: "Through the context parameter of the run method",
        c: "Added to the system prompt manually",
        d: "Via environment variables"
      },
      correctAnswer: "b",
      concept: "Local context is passed using the context argument in Runner.run(). The SDK wraps this in a RunContextWrapper. It becomes accessible in tools and lifecycle hooks during the run. Ensures consistent access across all parts of the run."
    },
    {
      id: 88,
      question: "Which of the following can be stored in local context?",
      options: {
        a: "Conversation messages visible to LLM",
        b: "User-specific data and helper functions",
        c: "System prompts and instructions",
        d: "User input history for LLM awareness"
      },
      correctAnswer: "b",
      concept: "Local context stores data like usernames, user IDs, or loggers. It can also include helper functions or dependencies. This data supports the agent's internal logic. It is not visible to or processed by the LLM."
    },
    {
      id: 89,
      question: "What is Agent/LLM Context in the OpenAI Agents SDK?",
      options: {
        a: "Internal data not shared with LLM",
        b: "External API calls used by tools",
        c: "The conversation history and prompts seen by the LLM",
        d: "Configuration settings of the SDK"
      },
      correctAnswer: "c",
      concept: "Agent/LLM context is the information the LLM sees. Includes system prompts, instructions, and user messages. Guides the LLM's response generation process. Can be augmented with retrieval or function tools."
    },
    {
      id: 90,
      question: "Why would you include user details in the agent's instructions?",
      options: {
        a: "To share local context with the LLM",
        b: "To customize and guide the LLM's responses",
        c: "To log the user activity externally",
        d: "To bypass agent restrictions"
      },
      correctAnswer: "b",
      concept: "Including user details in instructions exposes that data to the LLM. It helps personalize or contextualize LLM responses. This is part of the Agent/LLM context, not local context. Supports improved and tailored conversations."
    },
    {
      id: 91,
      question: "How does a tool function access local context in the example code?",
      options: {
        a: "By reading environment variables",
        b: "Via a special argument wrapper containing the context",
        c: "Through global variables only",
        d: "By parsing conversation history"
      },
      correctAnswer: "b",
      concept: "Tool functions receive a RunContextWrapper argument. This wrapper exposes the local context data. Enables tools to use internal data without LLM exposure. Promotes clean and type-safe context management."
    },
    {
      id: 92,
      question: "What happens to the local context after the agent run finishes?",
      options: {
        a: "It is sent back to the user as a response",
        b: "It is discarded or retained only internally",
        c: "It is appended to the conversation history for next runs",
        d: "It is logged and exposed to LLMs in the next prompt"
      },
      correctAnswer: "b",
      concept: "Local context is purely internal and transient per run. It supports execution but is not part of conversation output. Ensures data privacy and separation from LLM inputs. Only visible to tools and hooks during the run lifecycle."
    },
    {
      id: 93,
      question: "What is the purpose of a handoff in the OpenAI Agents SDK?",
      options: {
        a: "To combine multiple agents into one",
        b: "To delegate tasks from one agent to another specialized agent",
        c: "To speed up agent responses",
        d: "To log agent conversations"
      },
      correctAnswer: "b",
      concept: "Handoffs enable task delegation between agents. They facilitate specialization by letting agents focus on distinct domains. Useful in multi-agent systems for dividing responsibilities. Improves efficiency and accuracy in handling user requests."
    },
    {
      id: 94,
      question: "How do you specify which agents a triage agent can delegate tasks to?",
      options: {
        a: "Using the tools parameter",
        b: "Using the handoffs parameter in the agent creation",
        c: "Adding agents to a global list",
        d: "Embedding agents inside the instruction text"
      },
      correctAnswer: "b",
      concept: "Agents to which tasks can be delegated are listed in the handoffs parameter. This defines which agents are available for task delegation. The triage agent decides which to hand off based on the request. It structures the delegation workflow clearly."
    },
    {
      id: 95,
      question: "In the example, what role does the triage agent play?",
      options: {
        a: "Executes all tasks by itself",
        b: "Determines which specialist agent handles a request",
        c: "Logs user input for analysis",
        d: "Responds directly without delegation"
      },
      correctAnswer: "b",
      concept: "The triage agent acts as a decision-maker. It assesses user input to route tasks appropriately. Delegates specialized tasks to relevant agents. Centralizes task distribution in multi-agent systems."
    },
    {
      id: 96,
      question: "What benefit does customizing a handoff using the handoff() function provide?",
      options: {
        a: "Changes the agent's core AI model",
        b: "Allows renaming and describing the handoff tool",
        c: "Enables direct LLM training",
        d: "Disables handoffs temporarily"
      },
      correctAnswer: "b",
      concept: "handoff() enables custom naming of handoff tools. You can also override descriptions for clarity. Supports fine-tuning the delegation interface. Enhances control over multi-agent communication."
    },
    {
      id: 97,
      question: "Which of these is NOT true about handoffs?",
      options: {
        a: "They improve modularity of agents",
        b: "They allow specialized handling of tasks",
        c: "They send local context directly to the LLM",
        d: "They facilitate efficient task management"
      },
      correctAnswer: "c",
      concept: "Handoffs delegate tasks without sending local context to LLM. They improve modularity and specialization of agents. Allow clear separation of concerns in workflows. Help agents work efficiently on different parts of tasks."
    },
    {
      id: 98,
      question: "What happens when you run the triage agent with user input?",
      options: {
        a: "It responds without consulting other agents",
        b: "It automatically delegates to the appropriate specialist agent",
        c: "It stops if unsure about the task",
        d: "It requests user confirmation before delegating"
      },
      correctAnswer: "b",
      concept: "Triage agent evaluates the input to choose the best agent. Delegates task automatically to specialist agents. Ensures user requests are handled by experts. Streamlines the user interaction flow."
    },
    {
      id: 99,
      question: "Why might a multi-agent system use handoffs instead of a single agent?",
      options: {
        a: "To reduce computing costs by running fewer agents",
        b: "To ensure each agent handles tasks it's specialized for",
        c: "To confuse users with multiple agents",
        d: "To bypass API rate limits"
      },
      correctAnswer: "b",
      concept: "Handoffs allow task specialization by different agents. Each agent focuses on a domain, improving accuracy. Distributes workload efficiently in complex scenarios. Enhances maintainability and scalability of AI systems."
    },
    {
      id: 100,
      question: "Why is structured output important in AI agent responses?",
      options: {
        a: "It allows agents to generate longer text",
        b: "It ensures predictable and usable data formats",
        c: "It reduces agent response speed",
        d: "It makes responses more vague"
      },
      correctAnswer: "b",
      concept: "Structured outputs enforce specific data formats. They make parsing and integration easier. Help automate workflows by providing reliable data. Improve consistency and reduce ambiguity in responses."
    },
    {
      id: 101,
      question: "What distinguishes 'Structured Outputs' from simple 'JSON mode'?",
      options: {
        a: "JSON mode guarantees schema adherence",
        b: "Structured Outputs guarantee schema adherence",
        c: "JSON mode outputs text only",
        d: "Structured Outputs allow free text formatting"
      },
      correctAnswer: "b",
      concept: "JSON mode ensures valid JSON formatting only. Structured Outputs enforce adherence to a predefined schema. Schema guarantees data integrity and usability. Critical for reliable system integrations and automation."
    },
    {
      id: 102,
      question: "What is the role of Pydantic in the OpenAI Agents SDK?",
      options: {
        a: "To generate free text responses",
        b: "To define data models for structured outputs",
        c: "To speed up agent computation",
        d: "To translate responses into multiple languages"
      },
      correctAnswer: "b",
      concept: "Pydantic provides Python models for data validation. It ensures agent outputs conform to expected schemas. Facilitates structured output enforcement. Improves robustness of AI system responses."
    },
    {
      id: 103,
      question: "What is the purpose of input guardrails in the PIAIC agent example?",
      options: {
        a: "To verify user inputs are relevant to PIAIC topics",
        b: "To improve agent output grammar",
        c: "To allow off-topic questions",
        d: "To speed up input processing"
      },
      correctAnswer: "a",
      concept: "Input guardrails restrict queries to relevant topics. They prevent processing of irrelevant or invalid inputs. Enhance agent focus and accuracy. Support safe and reliable interactions."
    },
    {
      id: 104,
      question: "What happens if the input guardrail is tripped in the PIAIC agent?",
      options: {
        a: "The agent processes the input anyway",
        b: "The system shows an error message and stops processing",
        c: "The agent guesses the answer regardless",
        d: "The input is redirected to another agent"
      },
      correctAnswer: "b",
      concept: "Guardrails act as safety checks for input relevance. If tripped, they stop execution and notify the user. Prevent invalid or unrelated processing. Ensure agent stays on topic and reliable."
    },
    {
      id: 105,
      question: "What is the role of output guardrails in the PIAIC agent example?",
      options: {
        a: "To check the relevance of agent's response to PIAIC topics",
        b: "To format the output text prettily",
        c: "To speed up response generation",
        d: "To translate output into multiple languages"
      },
      correctAnswer: "a",
      concept: "Output guardrails verify responses stay relevant. They prevent off-topic or nonsensical answers. Ensure quality control after agent processing. Maintain topical accuracy in outputs."
    },
    {
      id: 106,
      question: "What technology does the PIAIC agent example use to model output validation?",
      options: {
        a: "TensorFlow",
        b: "Pydantic models",
        c: "Regular expressions",
        d: "SQL schemas"
      },
      correctAnswer: "b",
      concept: "Pydantic defines structured schemas for output validation. Enforces consistent response formats. Ensures automated error checking. Improves integration with downstream systems."
    },
    {
      id: 107,
      question: "What is the benefit of using a Jupyter Notebook for the PIAIC Guardrails example?",
      options: {
        a: "It allows interactive development and testing",
        b: "It prevents any code execution errors",
        c: "It runs the agent faster than other IDEs",
        d: "It automatically translates code to other languages"
      },
      correctAnswer: "a",
      concept: "Jupyter Notebooks enable step-by-step execution. Provide markdown for documentation alongside code. Facilitate interactive experimentation and debugging. Ideal for educational and prototype purposes."
    },
    {
      id: 108,
      question: "Which Python package is essential to run the PIAIC guardrails example locally?",
      options: {
        a: "numpy",
        b: "agents",
        c: "matplotlib",
        d: "scikit-learn"
      },
      correctAnswer: "b",
      concept: "The agents package contains the OpenAI Agents SDK. Includes tools for agent creation and guardrails. Required for running the example notebook. Supports structured output and input/output guardrails."
    },
    {
      id: 109,
      question: "What is a tripwire in the context of the PIAIC agent guardrails?",
      options: {
        a: "A debugging tool",
        b: "A mechanism to stop processing on off-topic content",
        c: "A method to speed up agent response",
        d: "A function to enhance output style"
      },
      correctAnswer: "b",
      concept: "Tripwires detect off-topic or invalid inputs/outputs. They halt agent execution immediately. Provide safety by preventing irrelevant data processing. Maintain integrity of the agent's domain focus."
    },
    {
      id: 110,
      question: "What is the primary purpose of tracing in OpenAI Agents?",
      options: {
        a: "To speed up agent responses",
        b: "To record and monitor agent interactions and function calls",
        c: "To convert outputs to different languages",
        d: "To replace the need for testing"
      },
      correctAnswer: "b",
      concept: "Tracing captures function calls, arguments, and outputs. It enables developers to monitor agent decisions and behaviors. Helps debug, analyze, and improve workflows. Essential for transparency and system understanding."
    },
    {
      id: 111,
      question: "Which of the following is recorded by automatic logging in tracing?",
      options: {
        a: "Code compilation logs",
        b: "GPU usage statistics",
        c: "Function calls and their input/output",
        d: "Browser logs"
      },
      correctAnswer: "c",
      concept: "Automatic logging records every function an agent calls. It logs input arguments and resulting outputs. Useful for backtracking execution flows. Improves visibility and accountability."
    },
    {
      id: 112,
      question: "How does tracing assist in error handling?",
      options: {
        a: "It prevents all errors",
        b: "It hides sensitive data",
        c: "It logs failed function calls and errors",
        d: "It redirects errors to another agent"
      },
      correctAnswer: "c",
      concept: "Tracing detects and logs any failed executions. Error messages are captured for debugging. Helps quickly identify issues in workflows. Saves time in troubleshooting and testing."
    },
    {
      id: 113,
      question: "What does the visualization feature of tracing provide?",
      options: {
        a: "A pie chart of performance metrics",
        b: "A static table of logs",
        c: "Step-by-step views of function executions",
        d: "A summary report of all agents"
      },
      correctAnswer: "c",
      concept: "Tracing provides a visual representation of task flows. Shows how each agent and function interacts. Useful for understanding execution paths. Makes debugging and optimization more intuitive."
    },
    {
      id: 114,
      question: "How does OpenAI's tracing integrate with DevTools?",
      options: {
        a: "It disables remote monitoring",
        b: "It replaces guardrails",
        c: "It enables centralized tracking and collaboration",
        d: "It encrypts agent responses"
      },
      correctAnswer: "c",
      concept: "Integration with DevTools allows shared visibility. Supports collaborative debugging by teams. Centralized UI enhances the developer experience. Ideal for managing production-level agents."
    },
    {
      id: 115,
      question: "What can custom tracing handlers be used for?",
      options: {
        a: "Disabling all logs",
        b: "Skipping functions",
        c: "Exporting and logging trace data in custom formats",
        d: "Making agents faster"
      },
      correctAnswer: "c",
      concept: "Custom handlers let developers define tracing behavior. Useful for exporting logs to custom destinations. Supports specialized monitoring or compliance use cases. Improves flexibility and observability."
    },
    {
      id: 116,
      question: "Which metric does tracing help measure in agent workflows?",
      options: {
        a: "UI latency",
        b: "Execution time and performance",
        c: "Memory overflow",
        d: "Agent happiness"
      },
      correctAnswer: "b",
      concept: "Tracing records the time taken by functions and agents. It helps spot bottlenecks in execution. Used to optimize workflows and reduce latency. Improves efficiency in multi-agent systems."
    },
    {
      id: 117,
      question: "What is one benefit of tracing in multi-agent systems?",
      options: {
        a: "It disables agent collaboration",
        b: "It isolates agents from each other",
        c: "It traces interactions across all agents",
        d: "It limits execution flow"
      },
      correctAnswer: "c",
      concept: "Tracing provides visibility into multi-agent workflows. Tracks task delegation and interaction between agents. Helps optimize collaborative behaviors. Ensures coordinated execution across the system."
    },
    {
      id: 118,
      question: "Which of the following is NOT a use case of tracing?",
      options: {
        a: "Debugging workflows",
        b: "Reducing response time",
        c: "Hiding agent actions",
        d: "Compliance auditing"
      },
      correctAnswer: "c",
      concept: "Tracing is meant for transparency and visibility. Used to debug, monitor, and audit agent behaviors. Reduces ambiguity in task execution. Critical for trusted AI systems."
    },
    {
      id: 119,
      question: "How does tracing help optimize agent performance?",
      options: {
        a: "By removing extra memory",
        b: "By visualizing UI states",
        c: "By identifying slow or inefficient function calls",
        d: "By compressing outputs"
      },
      correctAnswer: "c",
      concept: "Performance monitoring pinpoints slow tasks. Developers can refactor or parallelize slow functions. Tracing data leads to faster workflows. Improves system responsiveness and efficiency."
    },
    {
      id: 120,
      question: "What does the term 'lifecycle' refer to in OpenAI Agents SDK?",
      options: {
        a: "Only the creation of agents",
        b: "Agent's memory structure",
        c: "Complete stages from initialization to output",
        d: "The agent's environment setup"
      },
      correctAnswer: "c",
      concept: "The lifecycle describes every phase an agent goes through. This starts at initialization and ends with task completion. It enables structured monitoring of agent behavior. Each phase can be observed or hooked into."
    },
    {
      id: 121,
      question: "Which class is used to monitor agent-level lifecycle events?",
      options: {
        a: "RunManager",
        b: "AgentHooks",
        c: "TaskTracker",
        d: "LifeStageObserver"
      },
      correctAnswer: "b",
      concept: "AgentHooks allows observation of an individual agent's behavior. It provides hooks for start, end, and tool usage. This is useful for injecting custom logic during execution. Gives fine-grained control over agent operations."
    },
    {
      id: 122,
      question: "What class is used for monitoring system-wide agent executions?",
      options: {
        a: "WorkflowManager",
        b: "EventChain",
        c: "RunHooks",
        d: "ControlFlow"
      },
      correctAnswer: "c",
      concept: "RunHooks monitor high-level lifecycle events. They span multiple agents or a complete run. Track events like agent switching and tool invocation. Useful for orchestration or analytics at scale."
    },
    {
      id: 123,
      question: "Which RunHook is triggered when an agent finishes its task?",
      options: {
        a: "on_tool_end",
        b: "on_agent_start",
        c: "on_agent_end",
        d: "on_handoff"
      },
      correctAnswer: "c",
      concept: "on_agent_end runs when the agent produces its final output. This marks the completion of the agent's work. Often used for logging or cleanup operations. A key phase in understanding the agent lifecycle."
    },
    {
      id: 124,
      question: "Which method in RunHooks handles tool completion?",
      options: {
        a: "on_end",
        b: "on_tool_finish",
        c: "on_tool_end",
        d: "on_execute"
      },
      correctAnswer: "c",
      concept: "on_tool_end fires after a tool has finished running. Captures final output from the tool. Allows logging or modification of results. Essential for tracing and debugging tools."
    },
    {
      id: 125,
      question: "What is the purpose of on_handoff in RunHooks?",
      options: {
        a: "Export task to cloud",
        b: "Change an agent's memory",
        c: "Handle control transfer between agents",
        d: "Restart an agent process"
      },
      correctAnswer: "c",
      concept: "on_handoff gets triggered when control shifts between agents. This occurs in multi-agent workflows. Useful for tracking collaboration and communication. Ensures smooth transitions in agent ecosystems."
    },
    {
      id: 126,
      question: "Which hook is used when an agent is first activated?",
      options: {
        a: "on_run_start",
        b: "on_tool_start",
        c: "on_agent_start",
        d: "on_init"
      },
      correctAnswer: "c",
      concept: "on_agent_start runs before the agent begins its task. A good place to initialize counters or log inputs. Triggered every time the agent becomes active. Vital for tracking agent entry points."
    },
    {
      id: 127,
      question: "AgentHooks and RunHooks are examples of what concept?",
      options: {
        a: "Lifecycle Events",
        b: "Agent Models",
        c: "Token Streams",
        d: "OpenAI Plugins"
      },
      correctAnswer: "a",
      concept: "Both AgentHooks and RunHooks are lifecycle hooks. They provide entry points during specific lifecycle phases. Used to inject custom logic or monitor behavior. They help build observable and reactive systems."
    },
    {
      id: 128,
      question: "What can on_tool_start be used for?",
      options: {
        a: "Monitoring before a tool runs",
        b: "Finishing a session",
        c: "Shutting down the agent",
        d: "Resetting tracing"
      },
      correctAnswer: "a",
      concept: "on_tool_start triggers before a tool is executed. Used to log or modify input before processing. Helpful for debugging or enforcing constraints. Improves traceability and control of external tool usage."
    },
    {
      id: 129,
      question: "Which lifecycle class focuses on one agent's actions?",
      options: {
        a: "AgentLifecycle",
        b: "RunHooks",
        c: "AgentHooks",
        d: "TaskManager"
      },
      correctAnswer: "c",
      concept: "AgentHooks is tailored to individual agent behavior. Monitors start, end, and tool usage at the agent level. Useful when fine-grained control is required. Ideal for debugging a specific agent."
    },
    {
      id: 130,
      question: "How are hooks added to an agent run in OpenAI SDK?",
      options: {
        a: "Via run_config",
        b: "Using the hooks argument in Runner.run",
        c: "By overriding built-in methods",
        d: "Through external APIs only"
      },
      correctAnswer: "b",
      concept: "Hooks are passed to the Runner.run() call. This binds them to the execution context. Enables the lifecycle methods to be triggered. Simple and clean for lifecycle injection."
    },
    {
      id: 131,
      question: "What type of methods are hook methods typically?",
      options: {
        a: "Sync static methods",
        b: "Decorators",
        c: "Async instance methods",
        d: "Lambda functions"
      },
      correctAnswer: "c",
      concept: "Hooks like on_agent_start or on_tool_end are async. This lets them perform I/O or await dependent events. Ensures efficient and non-blocking behavior. Aligns with Python async design patterns."
    },
    {
      id: 132,
      question: "What is the main use of lifecycle management in agents?",
      options: {
        a: "Replacing models",
        b: "Observing and controlling execution phases",
        c: "Creating UI widgets",
        d: "Enabling file uploads"
      },
      correctAnswer: "b",
      concept: "Lifecycle management ensures visibility into agent actions. Allows reaction to key events like start, end, and handoffs. Supports robust workflows with traceable execution. Essential for production-level observability and control."
    },
    {
      id: 135,
      question: "What is the primary purpose of Episodic Memory in AI agents?",
      options: {
        a: "Store general world knowledge",
        b: "Remember specific interaction logs",
        c: "Retain procedural rules",
        d: "Manage API call sequences"
      },
      correctAnswer: "b",
      concept: "Episodic memory stores timestamped logs of agent-user interactions (e.g., 'At 3 PM, user asked for weather'). It helps agents recall past events like conversation history or tool usage records."
    },
    {
      id: 136,
      question: "Which memory type would store 'Paris is the capital of France'?",
      options: {
        a: "Procedural",
        b: "Temporal",
        c: "Semantic",
        d: "Episodic"
      },
      correctAnswer: "c",
      concept: "Semantic memory handles factual knowledge and concepts. Unlike episodic memory's event logs, it stores universal truths, user profiles, or extracted knowledge from documents."
    },
    {
      id: 137,
      question: "What distinguishes Zep's memory architecture?",
      options: {
        a: "Uses vector databases exclusively",
        b: "Implements a temporal knowledge graph",
        c: "Focuses on summarization techniques",
        d: "Requires OpenAI models"
      },
      correctAnswer: "b",
      concept: "Zep tracks evolving relationships between entities over time using graph structures. This enables temporal reasoning (e.g., 'User's preference changed from X to Y last week')."
    },
    {
      id: 138,
      question: "Hot Path memory refers to:",
      options: {
        a: "Long-term database storage",
        b: "The agent's immediate working context",
        c: "Archived historical data",
        d: "Asynchronous memory updates"
      },
      correctAnswer: "b",
      concept: "Hot Path is short-term memory within the LLM's context window. It includes active conversation history and temporary variables for real-time decision-making."
    },
    {
      id: 139,
      question: "Which tool allows OpenAI Agents to integrate LangMem?",
      options: {
        a: "Wrapping core API as SDK tools",
        b: "Using Zep's cloud service",
        c: "Direct LangChain integration",
        d: "MemGPT's self-editing function"
      },
      correctAnswer: "a",
      concept: "LangMem's create_search_memory_tool and create_manage_memory_tool can be added as OpenAI Agent tools, enabling memory operations via function calling."
    },
    {
      id: 140,
      question: "Procedural memory is BEST used for:",
      options: {
        a: "Storing API response data",
        b: "Dynamic system prompt updates",
        c: "Timezone calculations",
        d: "User authentication"
      },
      correctAnswer: "b",
      concept: "Procedural memory retains 'how-to' knowledge like tool usage patterns or instruction templates. It helps agents refine operational rules over time."
    },
    {
      id: 141,
      question: "MemGPT solves which key limitation?",
      options: {
        a: "LLM context window constraints",
        b: "Lack of multilingual support",
        c: "High cloud storage costs",
        d: "Real-time API latency",
      },
      correctAnswer: "a",
      concept: "MemGPT's OS-like architecture swaps memory between fast \"core\" (active context) and slow \"archival\" (external storage), virtually extending context capacity."
    },
    {
      id: 142,
      question: "For multi-user isolation, LangMem uses:",
      options: {
        a: "Episodic segmentation",
        b: "Memory namespacing",
        c: "Temporal partitioning",
        d: "Graph sharding",
      },
      correctAnswer: "b",
      concept: "Namespaces logically separate memories by user/context (e.g., user123_session456). This prevents data leakage between different agent instances."
    },
    {
      id: 143,
      question: "Bi-temporal modeling in Zep tracks:",
      options: {
        a: "Event time vs. ingestion time",
        b: "User time vs. server time",
        c: "Episodic vs. semantic time",
        d: "Short-term vs. long-term time",
      },
      correctAnswer: "a",
      concept: "Zep records when facts were true in reality and when they were learned by the system. This helps resolve conflicts from delayed data updates."
    },
    {
      id: 144,
      question: "Background memory updates are:",
      options: {
        a: "Synchronous with responses",
        b: "Processed after agent replies",
        c: "Limited to semantic memory",
        d: "Handled by MemGPT exclusively",
      },
      correctAnswer: "b",
      concept: "Asynchronous background processing reduces latency by decoupling memory consolidation (e.g., summarization) from immediate conversation flow."
    },
    {
      id: 145,
      question: "Which is NOT a LangMem feature?",
      options: {
        a: "Storage-agnostic API",
        b: "Native LangGraph integration",
        c: "Temporal graph queries",
        d: "Hot-path memory tools",
      },
      correctAnswer: "c",
      concept: "Temporal graphs are Zep's specialty. LangMem focuses on memory operations (store/recall) with pluggable backends like PostgreSQL."
    },
    {
      id: 146,
      question: "A customer support agent recalling past tickets uses:",
      options: {
        a: "Episodic + Semantic memory",
        b: "Procedural + Temporal memory",
        c: "Only Hot Path memory",
        d: "Graphiti architecture",
      },
      correctAnswer: "a",
      concept: "Episodic memory recalls ticket history, while semantic memory stores customer profiles. Combined, they enable personalized support."
    },
    {
      id: 147,
      question: "For low-cost self-hosting, you might choose:",
      options: {
        a: "Zep Cloud",
        b: "LangMem + AsyncPostgresStore",
        c: "MemGPT Enterprise",
        d: "Proprietary SaaS solutions",
      },
      correctAnswer: "b",
      concept: "Open-source LangMem with self-managed PostgreSQL avoids cloud service fees. Zep's Graphiti can also be self-hosted but requires more setup."
    }
]
