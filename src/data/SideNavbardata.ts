import type { NavSection } from "../types/SidebarNav";


export const navData: NavSection[] = [
    {
        section: 'Démarrage',
        links: [
            { label: 'Introduction', to: '/introduction' },
            { label: 'Installation', to: '/installation' },
            { label: 'Configuration', to: '/configuration' },
        ],
    },
    {
        section: 'Fondamentaux',
        links: [
            { label: 'Composants', to: '/composants' },
            { label: 'Routage', to: '/routage' },
        ],
    },
];