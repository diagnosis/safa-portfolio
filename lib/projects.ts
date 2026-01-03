export type Project = {
    slug: string;
    title: string;
    description: string;
    longDescription?: string; // Full paragraph
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
    thumbnail?: string;
    featured: boolean;

    // New detailed fields
    problem?: string;
    solution?: string;
    features?: string[];
    challenges?: string[];
    learnings?: string[];
    architecture?: string;
    screenshots?: string[];
};

export const projects: Project[] = [
    {
        slug: 'deploy-watch',
        title: 'Deploy Watch - GitHub Deployment Monitor',
        description: 'Real-time GitHub deployment monitoring with SSE broadcasting, OAuth authentication, webhook integration, and analytics dashboard.',
        longDescription:
            'A production-grade deployment monitoring platform that tracks GitHub push events in real-time using Server-Sent Events. Features OAuth 2.0 authentication, user-specific event broadcasting with Go channels, webhook processing, and a React analytics dashboard. Built to master Go concurrency patterns and real-time web architecture.',

        techStack: [
            'Go 1.23',
            'Chi Router',
            'PostgreSQL',
            'Server-Sent Events (SSE)',
            'OAuth 2.0',
            'React',
            'TypeScript',
            'TanStack Router',
            'TanStack Query',
            'Tailwind CSS',
            'Vite',
            'Fly.io',
            'Vercel'
        ],

        liveUrl: 'https://deploy-watch.vercel.app',
        githubUrl: 'https://github.com/diagnosis/deploy-watch',
        featured: true,

        problem:
            'Build a production real-time monitoring system to master advanced Go patterns (SSE broadcasting, OAuth flows, webhook processing) and understand the challenges of deploying full-stack applications across different platforms with cross-origin authentication.',

        solution:
            'Designed a Hub-and-Spoke broadcaster using Go channels for user-specific SSE event distribution. Integrated GitHub OAuth 2.0 for authentication and GitHub webhooks for event ingestion. Backend deployed on Fly.io, frontend on Vercel, with careful CORS and cross-origin cookie configuration for production.',

        features: [
            'Real-time Server-Sent Events (SSE) for instant deploy notifications',
            'User-specific event broadcasting with Go channels (Hub pattern)',
            'GitHub OAuth 2.0 authentication flow',
            'GitHub webhook integration for push event processing',
            'Deploy history with PostgreSQL persistence',
            'Analytics dashboard (total, daily, weekly, monthly stats)',
            'Repository-level deploy tracking and rankings',
            'Visual notification system with animated highlights',
            'Multi-repository support via webhook configuration',
            'Production deployment with SameSite cookie handling'
        ],

        screenshots: [
            '/projects/deploy-watch/ss5.webp',
            '/projects/deploy-watch/ss1.webp',
            '/projects/deploy-watch/ss4.webp',
            '/projects/deploy-watch/ss3.webp',
            '/projects/deploy-watch/ss2.webp',
            '/projects/deploy-watch/ss7.webp'
            , '/projects/deploy-watch/ss6.webp'
        ],

        challenges: [
            'Implementing thread-safe user-specific SSE broadcasting without mutexes',
            'OAuth 2.0 flow with cross-origin cookie limitations (SameSite=None)',
            'GitHub webhook signature verification and event parsing',
            'CORS configuration for Vercel frontend + Fly.io backend',
            'Session management across different domains in production',
            'EventSource reconnection handling in React',
            'Deploying SSE long-lived connections on serverless platforms'
        ],

        learnings: [
            'SSE vs WebSocket trade-offs (unidirectional simplicity)',
            'Go channels for safe concurrent user-specific broadcasting',
            'OAuth 2.0 state parameter security and CSRF protection',
            'Cross-origin authentication patterns (SameSite cookies, CORS)',
            'GitHub webhook event structures and processing patterns',
            'Production deployment challenges (cookies, CORS, proxies)',
            'TanStack Query integration with real-time updates',
            'When to use environment-based configuration vs build-time'
        ],

        architecture:
            'Backend: Go with Chi router running on Fly.io. SSE Broadcaster uses Hub-and-Spoke pattern with Go channels for user-specific message routing. OAuth handler manages GitHub authentication flow with secure state cookies. Webhook handler processes GitHub push events, stores to PostgreSQL, and broadcasts to connected users via SSE. Middleware chain handles CORS, auth, correlation IDs, and logging. Frontend: React SPA on Vercel with TanStack Router for routing and TanStack Query for server state. EventSource API maintains SSE connection with automatic reconnection. Vite proxy for local development, direct API calls in production with cross-origin cookie support.'
    },
    {
        slug: 'realtime-chat-app',
        title: 'Real-Time WebSocket Chat',
        description: 'Production WebSocket chat application with Go backend, message history, online user tracking, and mobile-responsive design.',
        longDescription:
            'A real-time chat application built from scratch to learn WebSocket patterns, Go concurrency, and SPA architecture. Features include instant messaging, online user presence, message history persistence, and a custom vanilla JavaScript router. Deployed on Fly.io with full mobile support.',

        techStack: [
            'Go',
            'Gorilla WebSocket',
            'Vanilla JavaScript',
            'Tailwind CSS',
            'SPA Router (Custom)',
            'Fly.io',
            'Docker'
        ],

        liveUrl: 'https://chat-app-sd.fly.dev',
        githubUrl: 'https://github.com/diagnosis/chat-app',
        featured: false,

        problem:
            'Build a production-ready real-time chat to deeply understand WebSocket communication, Go concurrency patterns (channels, goroutines), and single-page application architecture without frameworks.',

        solution:
            'Designed a Hub-and-Spoke architecture using Go channels for safe concurrent access. Implemented a custom SPA router in vanilla JavaScript to avoid framework overhead while learning core concepts. WebSocket connections handle bidirectional real-time messaging with automatic reconnection and message history.',

        features: [
            'Real-time bidirectional messaging via WebSocket',
            'Hub pattern with Go channels (no mutexes needed)',
            'Fan-in/fan-out concurrency for message broadcasting',
            'Message history (last 20 messages) persisted in-memory',
            'Online users tracking with live updates',
            'Join/leave notifications',
            'Custom SPA router (home → chat navigation)',
            'Mobile-responsive design with toggle sidebar',
            'Dynamic WebSocket URL for local/production environments',
            'Auto-scroll to latest messages'
        ],

        screenshots: [
            '/projects/chat-app/home.webp',
            '/projects/chat-app/chat-desktop.webp',
            '/projects/chat-app/chat-mobile.webp'
        ],

        challenges: [
            'Understanding Go channels vs mutexes for safe concurrent state',
            'Preventing race conditions in multi-user scenarios',
            'Building SPA routing from scratch without React Router',
            'WebSocket connection handling across page refreshes',
            'Making sidebar overlay work smoothly on mobile',
            'Deploying WebSocket apps (different from HTTP-only apps)'
        ],

        learnings: [
            'Go concurrency: channels serialize access, eliminating mutex needs',
            'Hub pattern: single goroutine owns all shared state',
            'WebSocket lifecycle: open, message, close, error handling',
            'SPA principles: history.pushState, popstate events, dynamic rendering',
            'Deployment: Dockerfile multi-stage builds, environment variables',
            'Why "share memory by communicating" is powerful in Go'
        ],

        architecture:
            'Backend: Go with Hub pattern managing all client connections in a single goroutine. Channels (register, unregister, broadcast) provide safe message passing between goroutines. WebSocket connections run ReadPump and WritePump in separate goroutines per client. Message history stored as []byte slice in Hub (last 20). Frontend: Vanilla JavaScript SPA with custom router handling URL changes and view rendering. WebSocket connects dynamically (ws:// local, wss:// production). Tailwind CSS for responsive mobile-first design.'
    },
    {
        slug: 'interactive-todo-app',
        title: 'Interactive Todo Application',
        description: 'Full-stack team-based task management platform with authentication, teams, assignments, and secure role-based access.',
        longDescription:
            'A production-ready full-stack application designed for real-world workflows: team creation, user membership, task assignment, and secure authentication. Uses modern Go backend architecture with PostgreSQL and a React SPA frontend with TanStack ecosystem. Includes professional-grade test coverage and token security practices.',

        techStack: [
            'Go',
            'PostgreSQL',
            'React',
            'TypeScript',
            'Tailwind',
            'Vite',
            'TanStack Router',
            'TanStack Query',
            'Axios Interceptors',
            'Playwright',
            'Docker'
        ],

        liveUrl: 'https://interactive-todo.safadev.app',
        githubUrl: 'https://github.com/diagnosis/interactive-todo', // change if different
        featured: false,

        problem:
            'Build a realistic example that demonstrates how to architect and deliver a modern full-stack application that includes security, authentication, teams, permissions, database persistence, and CI-ready test coverage.',

        solution:
            'I designed a complete multi-user task management system with Go backend and a React SPA. It includes secure JWT authentication, role-based authorization, team membership, task assignment, and real-time refresh token rotation. The frontend and backend communicate through a clean REST architecture.',

        features: [
            'JWT authentication + refresh tokens stored in HttpOnly cookies',
            'Team membership and roles (manager, member)',
            'Create / edit / assign tasks within a team',
            'Task access rules (reporter vs assignee permissions)',
            'Modular Go backend with services, handlers, and repositories',
            'SPA routing with TanStack Router',
            'Smart caching + optimistic UI with TanStack Query',
            'Fully tested API with Playwright automation',
            'Secure password hashing and refresh-token rotation'
        ],
        screenshots: [
            '/projects/interactive-todo/register.webp',
            '/projects/interactive-todo/login.webp',
            '/projects/interactive-todo/profile-settings.webp',
            '/projects/interactive-todo/create-team.webp',
            '/projects/interactive-todo/select-team.webp',
            '/projects/interactive-todo/team-dashboard.webp',
            '/projects/interactive-todo/create-task.webp',
            '/projects/interactive-todo/view-task.webp',
            '/projects/interactive-todo/edit-task.webp',


        ],

        challenges: [
            'Designing a clean architecture in Go with clear separation of concerns',
            'Secure token rotation and revocation for logout-all sessions',
            'Protecting routes with middleware + role-authorization',
            'Managing server-state cache invalidation and automatic refresh',
            'Writing end-to-end tests that simulate real user workflows'
        ],

        learnings: [
            'Secure auth patterns (refresh tokens, hashing, access token rotation)',
            'Clean service-layer architecture in Go using Chi and pgx',
            'React SPA architecture with advanced TanStack ecosystem',
            'Database design decisions with indexing and query optimization',
            'Writing reliable E2E test suites for APIs'
        ],

        architecture:
            'Backend: Go with layered architecture (handlers → services → stores). Uses Chi router, pgx, migration scripts, typed errors, and middleware for auth and role enforcement. Refresh tokens stored hashed in PostgreSQL. Frontend: React + TanStack Router for routing and TanStack Query for server-state caching and optimistic UI. Auth handled via Axios interceptors + localStorage + secure HttpOnly cookies. Tests: API-first test suite built in Playwright with isolated teams, users, and task logic.'
    }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);