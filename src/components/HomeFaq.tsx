import Reveal from "@/components/motion/Reveal";
import FaqList from "@/components/FaqList";
import { HOME_FAQS } from "@/content/guides";

/** General Invytra questions, answered on the homepage. */
export default function HomeFaq() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="eyebrow mb-4 text-center">Before you ask</p>
          <h2 className="mb-10 text-center font-serif text-4xl leading-tight text-ink md:text-5xl">
            Frequently asked questions
          </h2>
        </Reveal>
        <FaqList faqs={HOME_FAQS} />
      </div>
    </section>
  );
}
