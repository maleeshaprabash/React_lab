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
                    <span className="text-(--color-muted)">
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

            <div className="bg-(--color-surface) border border-(--color-border) rounded-xl overflow-hidden font-dm-mono text-[0.82rem] leading-[1.7] animate-[reveal_2s_ease_forwards] [animation-delay:150ms]">
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-(--color-border) bg-(--color-card)">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28ca42]"></span>
                    <span className="font-dm-mono text-[0.7rem] text-(--color-muted) ml-2"> counter.jsx - lesson 3: useState</span>
                </div>

                <div className="p-6 overflow-x-auto">
                    <pre className="whitespace-pre text-(--color-text)">
                        <span className="cm">{'// Challenge: Make the button work!'}</span>{'\n'}
                        <span className="cm">{'// Add state to track the count.'}</span>{'\n\n'}
                        <span className="k">import</span>{' { '}
                        <span className="comp">useState</span>{' } '}
                        <span className="k">from</span>{' '}
                        <span className="str">'react'</span>{'\n\n'}
                        <span className="k">function</span>{' '}
                        <span className="fn">Counter</span>{'() {\n'}
                        {'  '}<span className="cm">{'// Your code here'}</span>{'\n'}
                        {'  '}<span className="k">const</span>
                        {' [count, setCount] = '}
                        <span className="comp">useState</span>{'('}
                        <span className="val">0</span>{')\n\n'}
                        {'  '}<span className="k">return</span>{' (\n'}
                        {'    <'}<span className="tag">div</span>{' '}
                        <span className="attr">className</span>{'='}
                        <span className="str">"counter"</span>{'>\n'}
                        {'      <'}<span className="tag">h2</span>{'>Count: {count}</'}
                        <span className="tag">h2</span>{'>\n'}
                        {'      <'}<span className="tag">button</span>{'\n'}
                        {'        '}<span className="attr">onClick</span>
                        {'={() => '}<span className="fn">setCount</span>
                        {'(count + '}<span className="val">1</span>{')}\n'}
                        {'      >\n        Click me!\n      </'}
                        <span className="tag">button</span>{'>\n'}
                        {'    </'}<span className="tag">div</span>{'>\n  )\n}\n\n'}
                        <span className="k">export default</span>{' '}
                        <span className="comp">Counter</span>
                    </pre>
                </div>

                <div className="border-t border-(--color-border) px-5 py-3.5 flex items-center gap-3 text-[0.7rem] font-dm-mono">
                    <span className="text-[#28ca42]">All 3 tests passing</span>
                    <span className="text-(--color-muted)">+50 XP earned</span>
                </div>
            </div>
        </div>  
    </section>
  )
}

export default CodePreview
