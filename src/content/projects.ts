import { Project } from "@/types"

export const projectsData: Project[] = [
  {
    title: "Lead Management System API",
    slug: "lead-management-system",
    description:
      "A secure RESTful API for tracking sales leads. Implements JWT token-based authentication and role-based permissions.",
    longDescription:
      "Built with FastAPI and SQLAlchemy, this backend service exposes endpoints for managing sales pipelines. It includes password hashing with bcrypt, access tokens, and pagination to optimize server response times.",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "JWT"],
    github: "https://github.com/hariprasadalagesan/lead-management-api",
    liveDemo: undefined,
    images: ["/images/projects/leads-1.jpg"],
    featured: true,
    category: "Backend Development",
    status: "completed",
    role: "Backend Developer",
    year: "2026",
    problemStatement:
      "Sales teams struggle to organize inbound leads, leading to slow response times, duplicate entries, and high security risks with shared credentials.",
    solution:
      "Developed a centralized, role-based RESTful API that standardizes lead storage, tracks pipeline stages, and restricts endpoint access through JWT authentication.",
    architecture:
      "FastAPI routes handle incoming JSON payloads, SQLModel classes define database models, and SQLAlchemy ORM manages transactional sessions linked to MySQL.",
    features: [
      "JWT Role-Based Authorization",
      "Password hashing with bcrypt",
      "Dynamic lead filter query parameters",
      "Paginated response schemas to reduce payload weight",
      "Database connection pooling to optimize connections",
    ],
    challenges:
      "Configuring database connection pooling in MySQL during bulk updates to prevent thread execution lockups under concurrent requests.",
    learned:
      "Learned how to design optimized database indexes, partition router modules, and write secure, stateless authentication middleware.",
  },
  {
    title: "Smart Home Automation (MQTT + ESP32)",
    slug: "home-automation",
    description:
      "An IoT controller connecting local sensors and relays to an MQTT broker, offering low-latency web triggers.",
    longDescription:
      "Developed using C++ on ESP32 microcontrollers. Communicates state anomalies over MQTT. Features a Python listener backend that logs telemetry data in a MySQL database for visual query processing.",
    technologies: ["Python", "C++", "ESP32", "MQTT", "MySQL"],
    github: "https://github.com/hariprasadalagesan/smart-home-mqtt",
    liveDemo: undefined,
    images: ["/images/projects/iot-1.jpg"],
    featured: true,
    category: "IoT & Automation",
    status: "in-progress",
    role: "IoT Systems Developer",
    year: "2026",
    problemStatement:
      "Typical consumer smart devices rely heavily on proprietary cloud servers, creating privacy risks and introducing high device-to-cloud latency.",
    solution:
      "Prototyped a local IoT architecture routing controller telemetry signals through a local Mosquitto MQTT broker, logging records inside a local MySQL database.",
    architecture:
      "ESP32 microcontrollers write device metrics to MQTT channels. A background Python daemon listens to these topics, deserializes payloads, and updates databases.",
    features: [
      "Sub-100ms relay response times",
      "ESP32 C++ sensor interface telemetry logs",
      "Python daemon listener routing to SQL databases",
      "Offline-first local connection recovery logic",
      "JSON payload data structure formatting",
    ],
    challenges:
      "Preventing sensor telemetry data dropping during high-frequency Wi-Fi network packet collisions.",
    learned:
      "Deepened understanding of event-driven messaging pipelines, network socket boundaries, and asynchronous database insertions in Python.",
  },
  {
    title: "E-Commerce Backend API",
    slug: "ecommerce-backend",
    description:
      "A backend service modeling inventory, cart orders, and transactions using relational database schemas.",
    longDescription:
      "Features database models constructed in FastAPI using SQLModel. Implements transactional safety checks for inventory depletion during user checkouts, logging operations via custom interceptors.",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "Docker"],
    github: "https://github.com/hariprasadalagesan/ecommerce-backend",
    liveDemo: undefined,
    images: ["/images/projects/ecommerce-1.jpg"],
    featured: true,
    category: "Backend Development",
    status: "completed",
    role: "Backend Developer",
    year: "2025",
    problemStatement:
      "E-commerce databases often encounter race conditions where multiple customers attempt to purchase the final item in stock simultaneously.",
    solution:
      "Configured inventory depletion checks wrapped inside database transactions, rolling back checkout processes if stock levels drop below zero.",
    architecture:
      "FastAPI backend using SQLAlchemy database transactions to ensure database consistency during concurrent checkout routines.",
    features: [
      "Transactional order processing",
      "MySQL inventory relational mapping",
      "Category sorting and filtering queries",
      "Order receipt serialization formats",
      "Dockerized container builds for quick deployment",
    ],
    challenges:
      "Securing database concurrency levels and testing edge case database inventory locks under simulated workloads.",
    learned:
      "Mastered relational constraints, transaction isolation levels, and model validation using Pydantic schemas.",
  },
  {
    title: "Spotify Data Analytics",
    slug: "spotify-analysis",
    description:
      "A data processing pipeline fetching personal playlist streams via Spotify API, cleaning data using Pandas.",
    longDescription:
      "Fetches user tracks and listen histories. Applies data cleaning operations, filters top genres, and exports structured aggregates into local databases for analytical processing.",
    technologies: ["Python", "Pandas", "Spotify API", "MySQL"],
    github: "https://github.com/hariprasadalagesan/spotify-analytics",
    liveDemo: undefined,
    images: ["/images/projects/analytics-1.jpg"],
    featured: false,
    category: "Data Analytics",
    status: "completed",
    role: "Data Analyst",
    year: "2025",
    problemStatement:
      "Users have minimal insight into their streaming patterns beyond Spotify's annual wrapped events, missing long-term genre shifts and streaming frequency trends.",
    solution:
      "Built a Python analytical parser that pulls stream logs via Spotify API, processes the raw data in Pandas, and stores clean aggregates.",
    architecture:
      "OAuth2 authentication queries Spotify APIs. Pandas handles dataframe cleanups and aggregation, writing structural statistics to database tables.",
    features: [
      "Automated API stream ingestion scripts",
      "Pandas dataframe data cleaning pipeline",
      "Data exports to local MySQL tables",
      "Genre listener categorization logic",
      "Historical data comparisons",
    ],
    challenges:
      "Handling Spotify API rate limits during bulk stream history requests without blocking processing loops.",
    learned:
      "Gained hands-on experience in API pagination, rate-limit retry mechanisms, and data analysis using Pandas.",
  },
  {
    title: "Employee Management System",
    slug: "employee-management-system",
    description:
      "A database-driven application facilitating clean CRUD operations to manage corporate departments and roles.",
    longDescription:
      "Exposes API paths to create, update, and search employees by designation. Utilizes structured joins in SQLAlchemy to optimize database retrievals.",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "MySQL"],
    github: "https://github.com/hariprasadalagesan/employee-management",
    liveDemo: undefined,
    images: ["/images/projects/employee-1.jpg"],
    featured: false,
    category: "Backend Development",
    status: "completed",
    role: "Backend Developer",
    year: "2025",
    problemStatement:
      "Human resource teams struggle to sync employee records across departments, resulting in outdated rosters and manual updates.",
    solution:
      "Developed an API backend that centralizes employee profiles, departments, and roles, using foreign key constraints to maintain sync.",
    architecture:
      "SQLModel maps database models. SQLAlchemy handles transactions, executing query joins to retrieve departments and roles in a single database roundtrip.",
    features: [
      "Employee, Department, and Role CRUD endpoints",
      "Foreign key constraint validation",
      "SQLAlchemy join query optimizations",
      "Clean REST response models",
    ],
    challenges:
      "Managing SQL session life cycles in FastAPI endpoints to prevent database connection leaks.",
    learned:
      "Learned the details of database relational constraints, session lifecycles, and relational database normalization.",
  },
  {
    title: "Personal Portfolio (HariWorks)",
    slug: "hariworks-portfolio",
    description:
      "A premium Next.js 16 personal brand site showcasing design system tokens, responsive grids, and standard relative colors.",
    longDescription:
      "Built with Next.js 16, TypeScript, and Tailwind CSS v4. Features a strictly typed content layer separating data and copy from presentation components, running on React Server Components.",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
    ],
    github: "https://github.com/hariprasadalagesan/myweb",
    liveDemo: "https://hariworks.com",
    images: ["/images/projects/portfolio-1.jpg"],
    featured: false,
    category: "Frontend Development",
    status: "completed",
    role: "Frontend Designer",
    year: "2026",
    problemStatement:
      "Personal developer portfolios often look generic, lack proper accessibility, and suffer from poor performance due to heavy client-side JavaScript libraries.",
    solution:
      "Built a customized brand platform using Next.js 16 App Router, isolating Client Components to achieve a lightweight client bundle.",
    architecture:
      "React Server Components handle layout and content data mappings, while client-side scripts are isolated to visual rendering nodes.",
    features: [
      "Zero client hydration cost for content wrappers",
      "Standard CSS relative colors syntax",
      "prefers-reduced-motion animation bounds",
      "Statically pre-rendered dynamic project case study pages",
    ],
    challenges:
      "Ensuring all interactive UI features work seamlessly under strict TypeScript compiler rules.",
    learned:
      "Gained expertise in Next.js Server Components, Tailwind v4 configurations, and advanced accessibilities.",
  },
]
