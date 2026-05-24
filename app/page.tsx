export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          For Product Managers &amp; Customer Success
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Route Customer Feedback to the{' '}
          <span className="text-[#58a6ff]">Right GitHub Issue</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Paste feedback, get instant AI matching to existing issues — or auto-create new ones with smart labels and team assignments.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start for $14/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required to try. Cancel anytime.</p>
      </section>

      {/* How it works */}
      <section className="mb-20">
        <h2 className="text-xl font-semibold text-white text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { step: '1', title: 'Connect GitHub', desc: 'Link your repo in seconds via OAuth.' },
            { step: '2', title: 'Submit Feedback', desc: 'Paste feedback or send via webhook.' },
            { step: '3', title: 'Auto-Route', desc: 'AI matches or creates issues with labels.' },
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-[#58a6ff] font-bold text-lg mb-2">{item.step}</div>
              <div className="text-white font-medium mb-1">{item.title}</div>
              <div className="text-[#8b949e] text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-xl font-semibold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-4xl font-bold text-white mb-1">$14<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to tame feedback chaos</p>
          <ul className="text-left space-y-2 mb-8 text-sm">
            {[
              'Unlimited feedback submissions',
              'AI issue matching & creation',
              'Smart label suggestions',
              'Webhook + manual input',
              'GitHub OAuth integration',
              'Priority email support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which GitHub plans are supported?',
              a: 'Any GitHub plan works — Free, Team, or Enterprise. We use the standard GitHub API.',
            },
            {
              q: 'How does the AI matching work?',
              a: 'We embed your feedback and existing issue titles/bodies, then find the closest semantic match above a confidence threshold.',
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel from your billing portal at any time. No questions asked, no lock-in.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-white font-medium mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} FeedbackRouter. All rights reserved.
      </footer>
    </main>
  )
}
