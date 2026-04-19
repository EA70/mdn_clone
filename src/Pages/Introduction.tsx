import DocPage from '../Components/DocPage'

const headings = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'installation', label: 'Installation' },
  { id: 'premier-composant', label: 'Premier composant' },
]

export default function Introduction() {
  return (
    <DocPage breadcrumb="Guide / Démarrage / Introduction" title="Introduction" headings={headings}>

      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
        DevDocs est une bibliothèque React pour créer des interfaces rapides et accessibles.
      </p>

      <h2 id="installation" className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
        Installation
      </h2>
      <pre className="bg-slate-900 dark:bg-slate-800 text-slate-100 rounded-lg px-4 py-3 text-sm font-mono mb-8">
        npm install devdocs
      </pre>

      <h2 id="premier-composant" className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
        Premier composant
      </h2>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
        Une fois installé, importe les composants directement depuis le package principal.
      </p>

    </DocPage>
  )
}