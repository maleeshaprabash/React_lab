import { useEffect, useRef } from "react";

const features = [
    {
        num: '01 —', icon: '⚡',
        iconBg: 'rgba(91,255,195,0.1)', iconColor: 'var(--color-accent)',
        title: 'Live Code Editor',
        desc: 'Write JSX and see your component render in real time. No setup, no installs. Just open and code.',
    },
    {
        num: '02 —', icon: '🧪',
        iconBg: 'rgba(255,107,107,0.1)', iconColor: 'var(--color-accent2)',
        title: 'Instant Tests',
        desc: "Every exercise has automated tests. Pass them all to unlock the next lesson — like a game, but you're learning.",
    },
    {
        num: '03 —', icon: '🏗️',
        iconBg: 'rgba(255,209,102,0.1)', iconColor: 'var(--color-accent3)',
        title: 'Real Projects',
        desc: "Don't just do exercises. Build a todo app, a weather app, and a portfolio site you can actually ship.",
    },
    {
        num: '04 —', icon: '🤖',
        iconBg: 'rgba(167,139,250,0.1)', iconColor: '#a78bfa',
        title: 'AI Hints',
        desc: "Stuck? Get a nudge without spoiling the answer. Learn to fish, don't just get the fish.",
    },
    {
        num: '05 —', icon: '📊',
        iconBg: 'rgba(56,189,248,0.1)', iconColor: '#38bdf8',
        title: 'Progress Tracking',
        desc: "Visual skill trees show exactly where you are and what's next. No guessing what to study.",
    },
    {
        num: '06 —', icon: '👥',
        iconBg: 'rgba(91,255,195,0.1)', iconColor: 'var(--color-accent)',
        title: 'Peer Review',
        desc: 'Get your project code reviewed by other learners and mentors. Code review is a job skill too.',
    },
];

const Features = () => {

  const sectionRef = useRef(null);

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {e.target.classList.add('visible'); observer.unobserve(e.target); }
      }),
      {threshold: 0.1}
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="features" 
      className="px-12 py-28">
        <div className="animate-[reveal_2s_ease_forwards]">
            <div className="font-dm-mono text-[0.7rem] tracking-widest uppercase text-(--color-accent) mb-5 flex items-center gap-2.5">
              <span 
                className="text-(--color-muted)"
                >
                  //
              </span>
                Why ReactLab
            </div>

            <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3.5rem)] text-(--color-text) tracking-[-0.03em] leading-[1.05] max-w-[16ch]">
              Everything you need to go from zero to hired.
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-16 border border-(--color-border) rounded-xl overflow-hidden animate-[reveal_2s_ease_forwards] [animation-delay:100ms]">
          {features.map((f) => (
            <div 
              key={f.num}
              className="bg-(--color-card) py-10 px-9 relative overflow-hidden transition-colors duration-300 hover:bg-[#1a1a25] group">

                <span className="absolute top-0 left-0 right-0 h-0.5 bg-(--color-accent) scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>

                <div className="font-dm-mono text-[0.65rem] text-(--color-muted) tracking-widest mb-7">
                  {f.num}
                </div>

                <div className="w-11 h-11 rounded-lg flex items-center justify-center text-xl mb-5"
                  style={{ background: f.iconBg, color: f.iconColor }}>
                  {f.icon}
                </div>

                <h3 className="font-syne tracking-wide text-(--color-text) font-bold text-[1.25rem] mb-3">
                  {f.title}
                </h3>
                
                <p className="text-[0.9rem] text-(--color-muted) leading-relaxed tracking-wide">{f.desc}</p>
              </div>
          ))}
        </div>
    </section>
  )
}

export default Features
