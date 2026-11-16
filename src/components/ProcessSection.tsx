import Reveal from "@/components/motion/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Tell us the goal",
    body: "One WhatsApp message or email: your project topic and deadline, your child's class and subjects, or your event date. That's genuinely all we need to start.",
  },
  {
    n: "02",
    title: "Agree the plan",
    body: "You get a clear scope, timeline and price in writing — what exactly is included, what it costs, and when you'll see results. No surprises later.",
  },
  {
    n: "03",
    title: "Watch it happen",
    body: "Milestone demos for projects, regular sessions and assessments for students, design drafts for events. You see progress as it happens, not at the end.",
  },
  {
    n: "04",
    title: "Own the result",
    body: "Source code and documentation, a child who understands the subject, a live invitation link collecting RSVPs. Delivered with walkthrough support — and it's fully yours.",
  },
];

/** How working with Invytra works — identical promise across divisions. */
export default function ProcessSection() {
  return (
    <section className="border-b border-line bg-bg-2">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mb-12">
          <Reveal>
            <p className="index-chip"><b>03</b> How it works</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-4 max-w-[20ch] font-display text-[clamp(2.4rem,6vw,4.2rem)] text-ink">
              Simple to start. <span className="display-italic">Serious about delivery.</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 80}>
              <div className="border-t-2 border-coal pt-5">
                <p className="font-serif text-5xl font-medium text-gold-dark">{step.n}</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-[1.8] text-ink-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
