const CTA = () => {
  return (
    <section className="bg-(--color-surface) items-center text-center border-b border-t border-(--color-border) px-12 py-30 overflow-hidden">
        <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-syne font-extrabold text-(--color-text) mb-8 relative leading-none tracking-wide">
            Your first component 
            <br/>
            is <span className="text-(--color-accent)">5 minutes</span> away.
        </h2>

        <p className="text-(--color-muted) text-[1.05rem] mb-11 relative font-dm-sans">
            No credit card required. Start with 10 free lessons.
        </p>
        <a 
            href="#"
            className="font-dm-mono text-[0.9rem] font-medium bg-(--color-accent) text-black inline-flex px-10 py-4.5 rounded tracking-wider shadow-[0_12px_40px_rgba(91,255,195,0.3)]"
            style={{
                cursor: 'none',
            }}
            >
                Start building for free →
        </a>
    </section>
  )
}

export default CTA
