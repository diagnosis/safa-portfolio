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
        featured: true,

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