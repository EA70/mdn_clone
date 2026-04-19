import DocPage from '../Components/DocPage'

const headings = [
  { id: 'base', label: 'Configuration de base' },
  { id: 'options', label: 'Options disponibles' },
  { id: 'exemple', label: 'Exemple complet' },
]

export default function Configuration() {
  return (
    <DocPage breadcrumb="Guide / Démarrage / Configuration" title="Configuration" headings={headings}>

      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
        Configure DevDocs selon les besoins de ton projet.
      </p>

      <h2 id="base" className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
        Configuration de base
      </h2>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
        Crée un fichier <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700 dark:text-blue-400">devdocs.config.ts</code> à la racine du projet.
      </p>

      <h2 id="options" className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
        Options disponibles
      </h2>
      <pre className="bg-slate-900 dark:bg-slate-800 text-slate-100 rounded-lg px-4 py-3 text-sm font-mono mb-8">
        {`export default {
  theme: 'light',
  lang: 'fr',
  sidebar: true,
}`}
      </pre>

      <h2 id="exemple" className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
        Exemple complet
      </h2>
      <pre className="bg-slate-900 dark:bg-slate-800 text-slate-100 rounded-lg px-4 py-3 text-sm font-mono mb-8">
        {`import { defineConfig } from 'devdocs'

export default defineConfig({
  theme: 'light',
  lang: 'fr',
})`}
      </pre>

    </DocPage>
  )
}