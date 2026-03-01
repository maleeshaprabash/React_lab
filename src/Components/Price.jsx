const plans = [
    {
        tier: 'Starter', price: '0', period: 'forever free',
        featured: false, badge: null,
        features: [
            { text: '10 lessons unlocked', active: true },
            { text: 'Live code editor', active: true },
            { text: 'Community forum', active: true },
            { text: 'Project challenges', active: false },
            { text: 'AI hints', active: false },
            { text: 'Certificate', active: false },
        ],
        btnLabel: 'Start free', featured_btn: false,
    },
    {
        tier: 'Pro', price: '19', period: 'per month · cancel anytime',
        featured: true, badge: 'MOST POPULAR',
        features: [
            { text: 'All 120+ lessons', active: true },
            { text: 'Live code editor', active: true },
            { text: 'Community forum', active: true },
            { text: '8 full projects', active: true },
            { text: 'Unlimited AI hints', active: true },
            { text: 'Completion certificate', active: true },
        ],
        btnLabel: 'Get started →', featured_btn: true,
    },
    {
        tier: 'Team', price: '49', period: 'per seat / month',
        featured: false, badge: null,
        features: [
            { text: 'Everything in Pro', active: true },
            { text: 'Admin dashboard', active: true },
            { text: 'Team progress tracking', active: true },
            { text: 'Custom learning paths', active: true },
            { text: 'Priority support', active: true },
            { text: 'Invoicing & SSO', active: true },
        ],
        btnLabel: 'Contact sales', featured_btn: false,
    },
];

const Price = () => {
  return (
    <section id="price" className="px-12 py-25">
        <div 
          className="animate-[reveal_2s_ease_forwards]">
            <div className="font-dm-mono text-[0.7rem] tracking-widest uppercase text-(--color-accent) mb-5 flex gap-2.5 items-center">
              <span className="text-(--color-muted)">//</span>
              Pricing
            </div>

            <h2 className="font-syne text-(--color-text) font-extrabold tracking-tight leading-[1.05] max-w-[16ch] text-[clamp(2rem,4vw,3.5rem)]">
              Simple, fair pricing.
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 animate-[reveal_2s_ease_forwards] [animatio-delay:100ms]">
        {plans.map((plan) => (
          <div 
            key={plan.tier}
            className={`relative rounded-xl p-10 border transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] ${plan.featured
               ? 'border-(--color-accent) bg-linear-to-br from-card to-[#1a2420]'
               : 'border-(--color-border) bg-(--color-card)'
            }`}>
            {plan.badge && (
              <div className="absolute -top-3 left-9 font-dm-mono text-[0.65rem] tracking-widest bg-(--color-accent) text-black px-3 py-1 rounded-full font-medium">
                {plan.badge}
              </div>
            )}
            <div className="font-dm-mono text-[0.72rem] text-(--color-muted) tracking-widest uppercase mb-5">{plan.tier}</div>
            <div className="font-syne text-[3.5rem] font-extrabold tracking-tight leading-none mb-1.5 text-(--color-text)">
              <sup className="text-2xl align-top mt-2 font-normal">$</sup>{plan.price}
            </div>
            <div className="text-(--color-muted) font-dm-mono text-[0.72rem] mb-7">{plan.period}</div>
            <hr className="border-t border-(--color-border) mb-7"/>
            <ul className="flex flex-col gap-3.5 mb-9">
              {plan.features.map((f) => (
                <li
                  key={f.text}
                  className={`text-[0.87rem] flex items-center gap-2.5 ${f.active ? 'text-(--color-text)' : 'text-(--color-muted)'}`}>
                    <span className={f.active ? 'text-(--color-accent) text-[0.9rem]' : 'text-[#444] text-[0.9rem]'}>
                      {f.active ? '✓' : '✗'}
                    </span>
                    {f.text}
                  </li>
              ))}
            </ul>

            <button 
              className={`w-full font-dm-mono text-[0.78rem] py-3.5 rounded-md border tracking-[0.05em] transition-all duration-200 ${plan.featured_btn
                ? 'bg-(--color-accent) border-(--color-accent) font-medium hover:opacity-80'
                : 'bg-transparent border-(--color-border) text-(--color-text) hover:border-(--color-text)'
              }`}>
                {plan.btnLabel}
              </button>
          </div>
        ))}
          
        </div>
    </section>
  )
}

export default Price
