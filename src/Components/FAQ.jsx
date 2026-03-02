import { useState } from 'react';

const faqs = [
  {
    q: 'Do I need any experience to start?',
    a: "Nope. ReactLab starts from absolute zero — we assume you know basic HTML and CSS, and teach you JavaScript and React from the ground up. If you've never touched a terminal before, you're still in the right place.",
  },
  {
    q: 'How long does the full course take?',
    a: 'Most students complete the core curriculum in 6–10 weeks at ~1 hour per day. The projects add another 2–4 weeks. Everyone moves at their own pace — there are no deadlines.',
  },
  {
    q: 'Is the certificate worth anything?',
    a: "The certificate alone won't get you a job — but the projects you build absolutely will. Employers want to see what you can build. ReactLab helps you build a portfolio of real apps you can show off in interviews.",
  },
  {
    q: 'Can I cancel my Pro subscription?',
    a: 'Yes, anytime with one click. No cancellation fees, no hoops to jump through. You keep access until the end of your billing period.',
  },
  {
    q: 'Does this cover React 18 / 19 features?',
    a: 'Absolutely. The curriculum is kept up to date with the latest stable React. We cover Hooks, Suspense, the new use() hook, React Server Components concepts, and more.',
  },
];


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="px-12 py-24 bg-(--color-surface) border border-(--color-border)">
      <div className="animate-[reveal_2s_ease_forwards]">
        <div className="font-dm-mono text-[0.7rem] tracking-wide uppercase text-(--color-accent) flex gap-2.5 items-center mb-5">
          <span className="text-(--color-muted)">
            //
          </span>
          FAQ
        </div>

        <h2 className="font-syne font-extrabold text-(--color-text) tracking-tight leading-[1.05] max-w-[16ch] text-[clamp(2rem,4vw,3.5rem)]">
          Got questions?
        </h2>
      </div>

      <div className="mt-14 max-w-175 animate-[reveal_2s_ease_forwards]">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`border-b border-(--color-border) py-6 ${openIndex === i ? 'open' : ''}`}
          >
            <div
              className="flex justify-between items-center font-syne text-(--color-text) text-[1.05rem] font-medium tracking-wide transition-colors duration-200 hover:text-(--color-accent) cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {item.q}
              <span className="text-[1.3rem] text-(--color-muted) transition-transform duration-300"
              style={{ transform: openIndex === i ? 'rotate(45deg)' : 'none' }}
              >
                +
              </span>
            </div>

            {openIndex === i && (
              <p className="text-(--color-muted) text-[0.9rem] leading-[1.75] mt-4">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
