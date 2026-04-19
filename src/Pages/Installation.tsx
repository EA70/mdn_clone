import DocPage from '../Components/DocPage'

const headings = [
    { id: 'prerequis', label: 'Prérequis' },
    { id: 'npm', label: 'Via npm' },
    { id: 'verification', label: 'Vérification' },
]

export default function Installation() {
    return (
        <DocPage breadcrumb="Guide / Démarrage / Installation" title="Installation" headings={headings}>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Suis ces étapes pour installer DevDocs dans ton projet.
            </p>

            <h2 id="prerequis" className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Prérequis
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Node.js 18+ et npm 9+ sont requis.
            </p>

            <h2 id="npm" className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Via npm
            </h2>
            <pre className="bg-slate-900 dark:bg-slate-800 text-slate-100 rounded-lg px-4 py-3 text-sm font-mono mb-8">
                npm install devdocs
            </pre>

            <h2 id="verification" className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Vérification
            </h2>
            <pre className="bg-slate-900 dark:bg-slate-800 text-slate-100 rounded-lg px-4 py-3 text-sm font-mono mb-8">
                import {'{'} version {'}'} from 'devdocs'{'\n'}
                console.log(version)
            </pre>

        </DocPage>
    )
}