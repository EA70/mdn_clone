import TableMatiere from './TableMatiere'

type Heading = { id: string; label: string }

type Props = {
  breadcrumb: string
  title: string
  headings: Heading[]
  children: React.ReactNode
}

export default function DocPage({ breadcrumb, title, headings, children }: Props) {
  return (
    <>
      <div className="flex-1 flex justify-center pr-48">
        <div className="w-full max-w-4xl">
          <p className="text-sm text-slate-400 dark:text-slate-500 mb-4">{breadcrumb}</p>
          <h1 id={title.toLowerCase()} className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
            {title}
          </h1>
          {children}
        </div>
      </div>
      <TableMatiere headings={headings} />
    </>
  )
}