import { Project } from "@/types"

export const projectsData: Project[] = [
  {
    title: "Quantum Analytics Engine",
    slug: "quantum-analytics-engine",
    description:
      "A high-performance real-time data engine that processes 10M+ events per second. Integrated with WASM compiler modules.",
    longDescription:
      "This platform is an enterprise-scale analytics tool utilizing a distributed database backend and a high-performance Rust compiler running inside WebAssembly to yield sub-millisecond graph render times.",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Rust",
      "WebAssembly",
      "Tailwind CSS v4",
    ],
    github: "https://github.com/hariprasadalagesan/quantum-analytics",
    liveDemo: "https://quantum-demo.hariworks.com",
    images: [
      "/images/projects/quantum-1.jpg",
      "/images/projects/quantum-2.jpg",
    ],
    featured: true,
    category: "Data Infrastructure",
    status: "completed",
    role: "Lead Systems Architect",
    year: "2025",
  },
  {
    title: "Decentralized Credit Network",
    slug: "decentralized-credit-network",
    description:
      "A secure P2P borrowing protocol allowing users to secure collateralized loans using algorithmic risk pools.",
    longDescription:
      "A smart-contract borrowing mechanism developed using Solidity. Outfitted with React hooks, automated liquidity tracking, and wallet authentication.",
    technologies: ["React", "Ethers.js", "Solidity", "Tailwind CSS"],
    github: "https://github.com/hariprasadalagesan/credit-network",
    liveDemo: "https://credit-network-demo.hariworks.com",
    images: ["/images/projects/credit-1.jpg"],
    featured: true,
    category: "Web3 Finance",
    status: "beta",
    role: "Smart Contract Dev",
    year: "2024",
  },
  {
    title: "Serverless Deployment Pipeline",
    slug: "serverless-deployment-pipeline",
    description:
      "An open-source preview pipeline facilitating isolated environments for monolithic microservice backends.",
    longDescription:
      "A CLI tool and orchestrator written in Go that watches Git webhooks, packages codebases in Docker containers, and schedules previews on Kubernetes clusters.",
    technologies: ["Go", "Docker", "Kubernetes", "AWS ECS", "GitHub Actions"],
    github: "https://github.com/hariprasadalagesan/preview-pipeline",
    liveDemo: undefined,
    images: ["/images/projects/pipeline-1.jpg"],
    featured: false,
    category: "DevOps & Tooling",
    status: "maintenance",
    role: "DevOps Architect",
    year: "2024",
  },
]
