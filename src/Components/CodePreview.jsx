const CodePreview = () => {

    const steps = [
        ['01', 'Read the concept explained with real examples'],
        ['02', 'Write your solution in the embedded editor'],
        ['03', 'Pass all tests to unlock the next challenge'],
    ];

  return (
    <section 
        id="code"
        className="px-12 py-24 bg-(--color-surface) border-t border-b border-(--color-border)"
    >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-[reveal_2s_ease_forwards]">
                <div className="font-dm-mono text-[0.7rem] tracking-wide uppercase text-(--color-accent) mb-5 flex items-center gap-2.5">
                    <span 
                        className="text-(--color-muted)"
                        >
                        //
                    </span>

                    How it works
                </div>

                <h2 className="font-syne font-extrabold tracking-wide leading-[1.05] max-w-[16ch] text-[clamp(2rem,4vw,3.5rem)] text-(--color-text)">
                    Write real React. Right now.
                </h2>

                <p className="text-(--color-muted) text-[0.95rem] leading-[1.75] mt-5 max-w-100">
                    Every lesson comes with a live editor. Read the concept, write the code, run the tests.
                    Repeat until it clicks.
                </p>

                <div className="mt-9 flex flex-col gap-3.5">
                    {steps.map(([num,text]) => (
                        <div
                            key={num}
                            className="flex items-start gap-3.5">
                            <span className="font-dm-mono text-[0.7rem] text-(--color-accent) min-w-6 mt-0.5">{num}</span>
                            <span className="text-[0.9rem text-(--color-muted) leading-[1.6]">{text}</span>
                        </div>
                    ))}
                </div>

            </div>

        </div>
      
    </section>
  )
}

export default CodePreview
