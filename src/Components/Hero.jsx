import '../index.css'

const Hero = () => {
  return (
    
    <section className="min-h-screen flex flex-col justify-center  px-12 pt-30 pb-20 relative overflow-hidden">
        <div 
            className="animate-[gridshift_20s_linear_infinite]"
            style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "linear-gradient(rgba(91, 255, 195, 0.04) 1px, transparent 1px),linear-gradient(90deg, rgba(91, 255, 195, 0.04) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
            }}>
        </div>

        <div 
            className='absolute h-150 w-150 rounded-full pointer-events-none animate-[orbpulse_6s_infinite] ease-in-out -top-25 -right-25'
            style={{
                background: 'radial-gradient(circle, rgba(91,255,195,0.12) 0%, transparent 70%)',
            }}>
        </div>

        <div 
            className='absolute h-100 w-100 rounded-full pointer-events-none animate-[orbpulse_8s_infinite_reverse] ease-in-out -bottom-12 left-[20%]'
            style={{
                background: 'radial-gradient(circle, rgba(255,107,107,0.08) 0%, transparent 70%)',
            }}>
        </div>
        
        <div className='relative'>
            <div className='font-dm-mono text-(--color-accent) text-[11.52px] text-accent tracking-[0.15em] uppercase mb-6 opacity flex items-center gap-2.5'>
                <div className='h-px w-8 bg-(--color-accent)'></div>
                Interactive React Curriculum
            </div>

            <h1 className='font-syne text-(--color-text) font-extrabold leading-[0.95] tracking-tight max-w-[14ch] text-[clamp(3.2rem,8vw,7rem)]'>
                Stop{' '}
                <span className='relative text-(--color-muted)'>
                    watching
                    <div 
                        className='absolute left-0 top-1/2 h-0.75 w-full bg-(--color-accent2) -translate-y-1/2'>
                    </div>
                </span>
                <br/> Start 
                <span className='text-(--color-accent)'> building.</span>
            </h1>

            <p 
                className='text-(--color-muted) max-w-120 leading-[1.7] mt-7 text-[17.6px] font-dm-sans'
                style={{ 
                    animation: 'fadeUp 0.7s 0.5s ease forwards' 
                    }}>
                    ReactLab turns React concepts into real projects. Write code directly in your browser, get
                    instant feedback, and build a portfolio while you learn.
            </p>

            <div className='flex gap-4 items-center mt-11'>
                <a 
                    href='#'
                    className='font-dm-mono text-[0.82rem] font-medium bg-(--color-accent) text-black px-8 py-3.5 rounded tracking-wider inline-flex hover:shadow-[0_12px_40px_rgba(91,255,195,0.3)] transition-all duration-200 hover:-translate-y-0.5'
                    style={{
                        cursor: 'none',
                    }}
                    > Get started free →
                </a>

                <a 
                    href='#features'
                    className='font-dm-mono text-(--color-muted) tracking-wider text-[0.82rem] inline-flex hover:text-(--color-text) transition-colors duration-200 gap-2 group'
                    style={{
                        cursor: 'none',
                    }}
                    > See how it works    
                    <span className='transition-transform duration-200 group-hover:translate-x-1'>
                        →
                    </span>
                </a>
            </div>

            <div className='flex items-center gap-5 mt-16'>
                <div className='flex'>
                    {[
                        ['JK', '#5bffc3'],
                        ['SM', '#ff6b6b'],
                        ['AR', '#ffd166'],
                        ['TP', '#a78bfa'],
                        ['+', '#38bdf8'],
                    ].map(([label, bg]) => (
                        <div
                            key={label} 
                            className='w-8 h-8 rounded-full border-2 -mr-2 font-dm-mono text-[0.65rem] font-medium flex items-center justify-center text-black'
                            style={{
                                background: bg
                            }}
                            >
                                {label}
                        </div>
                    ))}
                </div>

                <div className='font-dm-mono text-[0.72rem] text-(--color-muted)'>
                    <strong 
                        className='text-(--color-text)'>4,200+</strong> beginners learning React now
                </div>
            </div>
        </div> 
    </section>
  )
}

export default Hero