export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;

  images: {
    user: string[];
    admin?: string[];
  };

  features: {
    user: string[];
    admin?: string[];
  };

  caseStudy: {
    problem: string;
    solution: string;
    result: string;
    architecture: string[];
    detailedAdminFlow?: string[];
  };

  github: string;
  live: string;
};

// Central repos link reused where a project is private / enterprise work.
const REPOS = "https://github.com/dk-pv?tab=repositories";
const PROFILE = "https://github.com/dk-pv";

export const projects: Project[] = [
  {
    slug: "ragno-power-system",
    title: "Ragno Power System — Solar Dealer CRM",
    category: "application",

    description:
      "A full-stack Solar Dealer CRM built to manage the complete sales and installation lifecycle, from lead acquisition and pipeline tracking to installation work, document collection, follow-ups and reporting. The platform features separate Admin and Staff access, dedicated lead and work pipelines, solar plan management, activity tracking, role-based permissions, notifications and operational reports. Built with Next.js, TypeScript, Django REST Framework and PostgreSQL.",

    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "JWT Authentication",
      "Cloudinary",
    ],

    image: "/ragno-power-system.png",

    images: {
      user: ["/ragno-power-system.png"],
      admin: [],
    },

    features: {
      user: [
        "Staff workspace for viewing and managing assigned activities, subject to the Staff role's enabled permissions",

        "Lead follow-up activities with titles, descriptions, assigned staff, due dates and completion notes",

        "Work activity tracking with pending and completed states, completion history and activity reopening where permitted",

        "Role-aware navigation that exposes only the application modules available to the signed-in user",

        "Personal notification feed for relevant activity assignments and status changes",

        "Lead and installation-work activity history accessible through the appropriate permitted module",
      ],

      admin: [
        "Centralized lead management with customer contact details, location, solar plan, deal amount, source, status and staff assignment",

        "Dedicated sales pipeline with New, Initial Contact, Hot, Superhot, Won and Lost stages",

        "Lead search by customer name, phone number, email, location, PIN code or record ID",

        "Advanced lead filtering, sorting, pagination, pinned records and bulk operations",

        "Controlled lead-stage transitions with terminal Won and Lost outcomes",

        "One-time conversion of Won leads into installation Works, preserving the customer details, selected plan and confirmed amount",

        "Separate Work management workspace with installation details, assigned staff, due dates and confirmed pricing",

        "Installation pipeline covering Loan Work / Documents, Feasibility, Structure Work, Electrical Work, KSEB Documentation, Subsidy Documentation and Completed",

        "Work pipeline board and list views with stage changes, search, filtering, sorting and bulk stage updates",

        "Solar plan management with system capacity, pricing and active/inactive status",

        "Work document checklist covering bank passbook, Aadhaar card, PAN card, electricity bill, contact details, site photo, land tax paper, name and signature, DCR, GPS photo and inverter serial number",

        "Document uploads with file-type and size validation, private Cloudinary storage, replacement handling and completion summaries",

        "Lead and Work activity management with assigned staff, due dates, pending/completed states and completion notes",

        "Dashboard with lead and Work summaries, stage breakdowns, follow-up counts, recent records and a CRM timeline",

        "Reports for leads, Works, activities and follow-ups, staff activity and CRM history",

        "Period-based reporting with filters, summary metrics, record-level details and CSV exports",

        "User administration with account creation, editing, role assignment, activation and deactivation",

        "Role and access management for Admin and Staff, with permissions assigned at the module level",

        "Notification center for lead creation, lead conversion, activity assignments, activity status changes and completed work",

        "WhatsApp message preparation using lead-specific contact details and reusable follow-up templates",

        "Department management and CRM data-management utilities",
      ],
    },

    caseStudy: {
      problem:
        "Solar dealer operations involve two connected workflows: converting prospects into customers and coordinating the installation work that follows a successful sale. Lead tracking, follow-ups, installation stages, customer documents and staff responsibilities need to remain connected. A disconnected process makes it harder to track outstanding work, identify incomplete documentation and understand overall sales and installation progress.",

      solution:
        "Built a full-stack Solar Dealer CRM with dedicated lead and installation-work modules. Leads move through a controlled sales pipeline, and a Won lead can be converted into a Work without losing its customer information, selected solar plan or confirmed amount. The Work then progresses through seven installation stages, with assigned staff, due dates, activities and document requirements. The application combines this workflow with role-based module access, a dashboard, notifications and period-based reporting. The backend uses Django REST Framework and PostgreSQL, while the Next.js frontend provides searchable tables, pipeline boards, detail pages and management screens.",

      result:
        "The implemented application brings lead management, sales-stage tracking, lead conversion, installation work, customer documentation, activities and reporting into one CRM. Its data model connects each installation Work to its originating lead, while separate pipelines make sales progress and installation progress independently trackable. Quantitative business outcomes and production deployment status have not been verified.",

      architecture: [
        "Frontend: Next.js App Router, React, TypeScript and Tailwind CSS",

        "Backend: Python, Django and Django REST Framework with modular applications for accounts, leads, Works, activities, dashboard, reports, notifications and maintenance",

        "Database: PostgreSQL with relational models, database migrations, constraints and indexes",

        "Authentication: JWT access and refresh tokens with server-side request authentication",

        "Authorization: Custom Admin and Staff roles, module-level permissions and server-side API access checks",

        "Lead lifecycle: Controlled sales-stage transitions and transactional conversion of Won leads into installation Works",

        "Work management: Separate installation pipeline with assignable staff, due dates, activities and document-completion tracking",

        "File storage: Private Cloudinary document storage with file-content validation, restricted downloads and replacement handling",

        "Reporting: Dedicated reporting APIs with period filters, summaries, detailed records and CSV export support",

        "Frontend data layer: Centralized API utilities, authenticated application shell, permission-aware navigation and reusable management components",
      ],

      detailedAdminFlow: [
        "Administrator signs in and accesses the modules granted to the Admin role",

        "Reviews the dashboard for lead totals, installation progress, follow-ups and recent CRM activity",

        "Creates or manages solar plans, including system capacity and pricing",

        "Creates leads with customer details, contact information, location, solar plan, amount, lead source and assigned staff",

        "Tracks leads through New, Initial Contact, Hot and Superhot stages",

        "Marks successful opportunities as Won or unsuccessful opportunities as Lost, subject to the pipeline's transition rules",

        "Converts a Won lead into an installation Work, preserving its customer information, solar plan and confirmed amount",

        "Assigns installation work, sets due dates and advances the Work through the installation pipeline",

        "Reviews the required loan and customer documents and subsidy documentation, including checklist completion",

        "Coordinates follow-ups, phone calls, site visits, customer meetings and Work activities",

        "Reviews lead, Work, activity, staff and CRM history reports over selected periods",

        "Exports report data for further analysis",

        "Manages user accounts, departments and module-level role permissions",

        "Reviews notifications and monitors the progress of sales and installation operations",
      ],
    },

    github:
      "[https://github.com/dk-pv?tab=repositories](https://github.com/dk-pv?tab=repositories)",

    live: "[https://github.com/dk-pv](https://github.com/dk-pv)",
  },
  {
    slug: "emarath-erp",
    title: "Emarath ERP",
    category: "application",
    description:
      "CRM-centered ERP for lead management and sales operations — leads, pipeline, activities, call analytics, GPS field tracking, documents and reporting in one role-scoped system. Built with a NestJS + PostgreSQL backend and a Next.js frontend.",

    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],

    image: "/emarath.webp",

    images: {
      user: ["/emarath.webp"],
    },

    features: {
      user: [
        "Lead workspace built for 15,000+ records — server-side pagination, trigram search and advanced multi-field filters",
        "Kanban sales pipeline with configurable stages and drag-and-drop",
        "Activity worklists with overdue/today buckets and multi-assignee follow-ups",
        "Call dashboard with summaries, leaderboard and per-agent analytics",
        "Live GPS map of field check-ins and location history",
        "Document storage with per-file access control",
      ],
      admin: [
        "Five-role access model — every list, search and export is scoped at the database-query level",
        "Spreadsheet lead import with column mapping, validation and per-row error reporting",
        "Eight lead reports — converted, lost, by source, no-activity, overdue follow-ups and more",
        "Custom fields, saved filters and per-user column preferences",
      ],
    },

    caseStudy: {
      problem:
        "The business depended on a third-party ERP it had outgrown and needed a from-scratch rebuild at feature parity — without losing the lead data, workflows and reporting its sales team runs on daily.",
      solution:
        "I'm building the platform end to end: a NestJS API over a PostgreSQL schema of ~23 models, and the Next.js workspace on top. The hardest part is the role-scoped query engine — composable Prisma where-builders that fuse role scoping, trigram search, advanced filters and custom-field conditions into a single database query, so an agent can never reach another agent's records through any list, search or export path, while staying fast at 15,000+ leads. I also built the async spreadsheet-import pipeline with progress tracking and per-row error reporting.",
      result:
        "A production CRM/ERP the sales team runs daily — lead management, pipeline, calls, field tracking and reporting in one system, backed by 485 passing unit tests.",
      architecture: [
        "Backend: NestJS with composable per-module query builders over Prisma and PostgreSQL",
        "Access: JWT in HttpOnly cookies with rotated refresh tokens; five roles enforced at the query level",
        "Search: PostgreSQL pg_trgm trigram indexes for fast lead search at scale",
        "Files: S3 document storage with short-lived presigned URLs",
        "Frontend: Next.js App Router with a custom in-house component library",
        "Deployment: Vercel (frontend), Render (API), Neon PostgreSQL",
      ],
    },

    github: REPOS,
    live: PROFILE,
  },

  {
    slug: "enterprise-erp",
    title: "SDEC ERP",
    category: "application",
    description:
      "Company-wide ERP that runs sales, development, HR, finance and user management as permission-scoped modules — including a full attendance-to-payroll pipeline. Next.js frontend over a Node.js/Express + PostgreSQL API with Socket.IO realtime.",

    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
    ],

    image: "/enterprise-erp.webp",

    images: {
      user: ["/enterprise-erp.webp"],
    },

    features: {
      user: [
        "Module workspace — users see only the modules their permissions grant",
        "Sales CRM: lead lifecycle and scoring, deal pipeline, targets, incentives and team reports",
        "Development: kanban boards, sprints, bugs, blockers and tickets with threaded discussions",
        "HR self-service: attendance, leave requests and payslips",
        "Finance: income, expenses, transactions and reports",
      ],
      admin: [
        "Registry-based RBAC — ~170 granular permission keys shared by API guards and the UI",
        "Attendance engine: per-day punch records, late flags and analytics over a company-holiday calendar",
        "Payroll: config-driven calculation (PF/ESI, loss-of-pay, paid-leave quotas) stored as immutable monthly snapshots with payslip export",
        "SuperAdmin master dashboard across all modules",
        "In-app notifications pushed over per-user Socket.IO rooms",
      ],
    },

    caseStudy: {
      problem:
        "The company ran sales, project delivery, HR and finance in separate tools — no shared access model, duplicated data, and no reliable link between attendance records and payroll.",
      solution:
        "I work across the platform's modules. The deepest piece is the attendance-to-payroll pipeline: an analytics service that turns raw punch records and the company-holiday calendar into working days, worked days and loss-of-pay under a paid-leave-quota policy, feeding a pure, config-driven payroll calculation whose output is stored as an immutable per-employee monthly snapshot — with a matching frontend calculation so the live preview, stored payroll and payslip always agree. Access control is a registry of ~170 permission keys enforced by API middleware and mirrored in the UI, so each module is visible only to roles that hold its permissions.",
      result:
        "One ERP where each department works inside its own permission-scoped module — and attendance, leave and payroll flow through a single verified calculation instead of separate records.",
      architecture: [
        "Backend: Node.js/Express with Prisma over a ~75-model PostgreSQL schema",
        "Access: token-based auth with per-request server validation and registry-based RBAC (~170 permission keys)",
        "Realtime: Socket.IO — per-user notification rooms, plus presence and typing indicators in task discussions",
        "Payroll: pure, config-driven calculation with immutable monthly snapshots and payslip export",
        "Files & mail: Cloudinary attachments and SendGrid transactional email",
        "Frontend: Next.js App Router with a permission-driven module registry",
      ],
    },

    github: REPOS,
    live: PROFILE,
  },

  {
    slug: "fleettrack",
    title: "FleetTrack",
    category: "application",
    description:
      "Multi-tenant fleet-tracking platform — a NestJS API polls third-party GPS providers, normalizes vehicle telemetry into PostgreSQL and streams live positions over Socket.IO to map dashboards for admins and client fleets.",

    tech: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
      "Docker",
      "TypeScript",
    ],

    image: "/fleettrack.webp",

    images: {
      user: ["/fleettrack.webp", "/fleettrack-login.webp"],
    },

    features: {
      user: [
        "Live fleet map with per-vehicle status derived from fix freshness — moving, idle or offline",
        "Trip lifecycle from request to completion, with breadcrumb route replay of finished trips",
        "Trip costs — estimated vs actual across six components, with receipts per component",
        "Proof of delivery with photos, signature and delivery geolocation",
        "PDF reports: trip summary, driver performance and vehicle utilization",
      ],
      admin: [
        "Vehicle and client management with tenant-scoped vehicle assignment",
        "Trip-request approval workflow — client proposes, admin approves and assigns a driver",
        "GPS provider integration settings with write-only, masked credentials",
        "In-portal notifications for trip and delivery events, pushed over scoped socket rooms",
      ],
    },

    caseStudy: {
      problem:
        "Fleet operators had no live view of their vehicles — third-party GPS trackers came with separate, incompatible portals and no shared trip history.",
      solution:
        "I built the telemetry pipeline end to end: a cron-driven sync that polls two GPS providers, normalizes their incompatible APIs behind one adapter interface, resolves vehicle identity by IMEI against a cached inventory, rejects stale and out-of-order fixes, and derives moving/idle/offline status from fix freshness. Updates fan out over Socket.IO rooms scoped per client tenant, with breadcrumbs recorded for route replay. The code carries fixes for real production incidents — duplicate vehicle rows, forged freshness timestamps — not just the happy path.",
      result:
        "Admins and client fleets share one live operational view — continuous tracking, queryable trip history with replay, costs and proof of delivery — deployed as Docker services with health checks and automatic migrations.",
      architecture: [
        "Ingestion: reentrancy-guarded cron sync over GPS provider adapters with IMEI identity resolution",
        "Realtime: JWT-authenticated Socket.IO rooms per client tenant, plus admin broadcast",
        "Data: PostgreSQL (~18 models) — location history, trip breadcrumbs, costs, proof of delivery, notifications",
        "Reports: server-generated PDFs — trip summary, driver performance, vehicle utilization",
        "Auth: JWT over two principals — admin users and client tenants — with role guards",
        "Deployment: Docker multi-stage builds with health checks and migrate-on-start (Neon PostgreSQL)",
      ],
    },

    github: REPOS,
    live: PROFILE,
  },

  {
    slug: "vrs-realinvest",
    title: "VRS RealInvest",
    category: "application",
    description:
      "Marketing and content platform for an Australian buyer's agency — a public Next.js site showcasing secured properties, webinars and client testimonials, managed through a custom admin CMS over an Express/MongoDB API.",

    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],

    image: "/vrs.webp",

    images: {
      user: ["/vrs-user1.webp", "/vrs-user2.webp", "/vrs-user3.webp"],
      admin: ["/vrs-admin1.webp", "/vrs-admin2.webp", "/vrs-admin3.webp"],
    },

    features: {
      user: [
        "Secured-property showcase with cover and gallery imagery and price-comparison details",
        "Webinar listings with live status",
        "Blog, team profiles and client testimonials — text and video",
      ],
      admin: [
        "Custom CMS for properties, webinars, blog, team and testimonials",
        "Streaming media uploads to Cloudinary — cover plus up to ten gallery images or video per property",
        "Dashboard with aggregated content and webinar statistics",
        "JWT authentication with superadmin/admin roles",
      ],
    },

    caseStudy: {
      problem:
        "The agency needed its secured deals, webinars and client proof presented on a fast public site — with a way for non-technical staff to manage all of it without touching code.",
      solution:
        "I built the three pieces: the public Next.js site, the admin CMS, and the Express/MongoDB API between them. The main engineering was the media pipeline — multi-file uploads streamed from memory buffers to Cloudinary in parallel (cover plus gallery, image and video) — and the dashboard endpoint that assembles content statistics in a single parallel aggregation pass.",
      result:
        "The platform is live at vrsrealinvest.com.au — the agency publishes properties, webinars, blog posts and testimonials through its own CMS.",
      architecture: [
        "Frontend: two Next.js apps — the public site and the admin CMS",
        "Backend: Node.js with an Express REST API and Mongoose models",
        "Media: streaming multi-file uploads to Cloudinary with parallel processing",
        "Auth: JWT with role-gated admin management",
        "Content: properties, webinars, blog, team and testimonials as CMS collections",
      ],
    },

    github: REPOS,
    live: "https://vrsrealinvest.com.au",
  },

  {
    slug: "limoxy",
    title: "Royal Limoxy",
    category: "application",
    description:
      "Booking and transfer management for a chauffeur service — automated invoicing, payment-link tracking and supplier management. Built with Next.js, Node.js/Express and MongoDB.",

    tech: ["Next.js", "Node.js", "Express.js", "MongoDB"],

    image: "/limoxy.webp",

    images: {
      user: ["/limoxy-user1.webp", "/limoxy-user2.webp"],
      admin: ["/limoxy-admin1.webp", "/limoxy-admin2.webp"],
    },

    features: {
      user: [
        "Simple booking flow — trip details, then a payment link",
        "Real-time booking confirmation",
        "Secure payment via generated payment links",
        "Invoice and voucher downloads",
        "Booking history tracking",
      ],
      admin: [
        "Manual booking creation with full client and trip details",
        "Booking status management (Pending / Confirmed / Completed)",
        "Booking dashboard with filters and search",
        "Supplier management (add, assign and manage vendors)",
        "Payment link generation and real-time payment status",
        "Automated invoice and voucher generation with commission calculation",
        "Analytics dashboard for revenue, bookings and performance",
      ],
    },

    caseStudy: {
      problem:
        "The client managed bookings, suppliers and invoices manually, causing data inconsistencies, delayed confirmations and no visibility into payment status or revenue.",
      solution:
        "I automated the full workflow: booking creation with automatic pricing, supplier assignment with commission control, payment-link generation with live status tracking, and invoices and vouchers generated on successful payment — all run from one admin dashboard.",
      result:
        "Bookings, suppliers, payments and invoicing now run from one dashboard — payment status updates in real time, and the invoice and voucher generate themselves when a payment lands.",
      detailedAdminFlow: [
        "Admin logs in securely and accesses the dashboard",
        "Creates a booking by entering client and trip details",
        "System calculates pricing and stores the booking",
        "Admin assigns a supplier and sets commission",
        "Booking is saved with a unique reference ID",
        "Admin generates a payment link and sends it to the client",
        "System tracks payment status in real time",
        "On successful payment, the invoice is auto-generated",
        "Voucher is generated and sent to the client",
        "Admin monitors all bookings via the dashboard",
      ],
      architecture: [
        "Frontend: Next.js for the admin panel and user interface",
        "Backend: Express.js handling business logic, APIs, auth and integrations",
        "Database: MongoDB storing bookings, users, suppliers, payments and invoices",
        "Payments: External payment gateway for secure transactions",
        "Security: Role-based access (Admin / Super Admin) with secure sessions",
      ],
    },

    github: REPOS,
    live: "https://royal-limoxy-user.vercel.app/",
  },

  {
    slug: "fetch-kids",
    title: "Fetch Kids",
    category: "application",
    description:
      "E-commerce platform for customizable school and student products — a storefront with product customization and checkout, plus an admin panel for products, customized orders, order processing and delivery workflows.",

    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],

    image: "/fetch-kids.webp",

    images: {
      user: ["/fetch-kids.webp"],
    },

    features: {
      user: [
        "Product browsing with search and filtering",
        "Product customization for personalised school and student items",
        "Cart and checkout flow",
      ],
      admin: [
        "Product management (create, update, delete)",
        "Customized-order management and processing",
        "Delivery workflow tracking",
        "Sales reporting and insights",
      ],
    },

    caseStudy: {
      problem:
        "A retail business selling customizable school and student products needed an e-commerce system that could carry per-order customization through ordering, processing and delivery — beyond what off-the-shelf storefronts handle.",
      solution:
        "I built the platform end to end: a Next.js storefront with a product-customization flow, an Express/MongoDB API, and an admin panel that manages products and walks each customized order through processing and delivery.",
      result:
        "Customized orders flow from storefront to delivery in one system, with product management and sales reporting for the business.",
      architecture: [
        "Frontend: Next.js storefront with product customization",
        "Backend: Node.js with an Express.js REST API",
        "Database: MongoDB",
        "Admin: order processing and delivery workflow management",
        "Deployment: Vercel with a cloud-hosted API",
      ],
    },

    github: REPOS,
    live: "https://fetch-kids.vercel.app",
  },

  {
    slug: "moodbyteal",
    title: "MoodByteal",
    category: "website",
    description:
      "Website for MoodByteal, a luxury interior design studio in the UAE — a minimal, black-themed showcase of villa, private, commercial and apartment interiors. Built with Next.js, Tailwind CSS and Framer Motion.",

    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],

    image: "/teal.webp",

    images: {
      user: ["/teal-1.webp", "/teal-2.webp", "/teal-3.webp"],
    },

    features: {
      user: [
        "Categorized work grid — villa, private, commercial and apartment interiors",
        "Per-project detail pages with image galleries",
        "Lenis smooth scrolling with Framer Motion page and section transitions",
        "Contact form with EmailJS delivery and WhatsApp quick contact",
      ],
    },

    caseStudy: {
      problem:
        "The studio needed its interior work presented with the same restraint as its interiors — structured, categorized and visual-first, in a way a generic template couldn't carry.",
      solution:
        "I designed and built the site as a static Next.js app: a categorized work grid with per-project galleries, Lenis smooth scrolling, and Framer Motion transitions tuned to stay out of the way of the photography.",
      result:
        "The site is live at moodbyteal.com — the studio's work, categorized and browsable, in a black-on-black identity.",
      architecture: [
        "Frontend: Next.js App Router with a static content model",
        "Styling: Tailwind CSS",
        "Motion: Framer Motion transitions with Lenis smooth scrolling",
        "Contact: EmailJS-powered form, no backend required",
      ],
    },

    github: REPOS,
    live: "https://www.moodbyteal.com/",
  },
];
