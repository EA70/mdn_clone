type Heading = { id: string; label: string }

type Props = {
    headings: Heading[]
}

export default function TableOfContents({ headings }: Props) {
    return (
        <aside className="fixed dark:bg-slate-900 top-16 right-0 w-48 h-screen px-4 py-8 border-l dark:border-slate-700 border-slate-200 bg-white max-lg:hidden" >
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Sur cette page
            </p>

            <div className="flex flex-col gap-1">

                {headings.map((heading) => (
                    <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className="text-sm text-slate-500 dark:text-slate-400 dark:hover:text-white hover:text-slate-900 transition-colors py-0.5"
                    >
                        {heading.label}
                    </a>
                ))}

            </div>
        </aside>
    )
}