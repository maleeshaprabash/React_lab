import { useState } from "react"

const Items =[
    'useState', 'useEffect', 'Components', 'Props', 'Hooks',
    'React Router', 'Context API', 'useReducer', 'Tailwind CSS',
    'REST APIs', 'Zustand', 'TypeScript Basics',
]

const Ticker = () => {

    const all = [...Items,...Items]
    return (
        <div className="border-t border-b border-(--color-border) p-3.5 overflow-hidden bg-(--color-surface)">
            <div className="flex whitespace-nowrap animate-[tick_20s_linear_infinite]">
                {all.map((Items, Index) =>(
                    <span
                        key={Index}
                        className="flex font-dm-mono text-[0.72rem] text-(--color-muted) tracking-widest px-10 items-center gap-3">
                        <span
                            className="w-1 h-1 rounded-full bg-(--color-accent)"/>
                        {Items} 
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Ticker
