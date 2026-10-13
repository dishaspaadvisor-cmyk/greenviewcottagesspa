import { useId, useState } from "react";
import {
  FaChevronDown,
  FaLeaf,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import faqdata from "../Data/faqdata";
import aboutData from "../Data/About";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const accordionId = useId();

  const toggleAccordion = (index) => {
    setActiveIndex((previous) => (previous === index ? null : index));
  };

  return (
    <>
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="bg-[#F7F5EF] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-3 lg:gap-14">
            {/* Introduction */}
            <div className="lg:sticky lg:top-24">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#5C7057]/20 bg-[#5C7057]/5 px-4 py-2">
                <FaLeaf aria-hidden="true" className="text-[#5C7057]" />
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5C7057]">
                  Before Your Visit
                </span>
              </div>

              <h2
                id="faq-heading"
                className="mb-5 font-serif text-4xl leading-tight text-[#29372B] sm:text-5xl"
              >
                A little clarity,
                <br />
                a calmer getaway.
              </h2>

              <div className="mb-6 h-1 w-16 rounded-full bg-[#B69A63]" />

              <p className="mb-8 text-base leading-7 text-[#62685E]">
                Explore common questions about our spa services and cottage
                stays in Mount Abu.
              </p>

              <div className="rounded-2xl border border-[#5C7057]/15 bg-white p-6">
                <h3 className="mb-2 text-lg font-semibold text-[#29372B]">
                  Have another question?
                </h3>

                <p className="mb-5 text-sm leading-6 text-[#62685E]">
                  Contact our team for availability, prices, and help planning
                  your visit.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={`tel:${aboutData.phone.replace(/[^\d+]/g, "")}`}
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#5C7057] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#465642] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5C7057]"
                  >
                    <FaPhoneAlt aria-hidden="true" />
                    Call Now
                  </a>

                  <a
                    href={aboutData.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#5C7057] px-5 py-2.5 text-sm font-semibold text-[#465642] transition-colors hover:bg-[#5C7057]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5C7057]"
                  >
                    <FaWhatsapp aria-hidden="true" className="text-lg" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ accordion */}
            <div className="space-y-4 lg:col-span-2">
              {faqdata.map((item, index) => {
                const isOpen = activeIndex === index;
                const buttonId = `${accordionId}-button-${index}`;
                const panelId = `${accordionId}-panel-${index}`;
                const answers = Array.isArray(item.answer)
                  ? item.answer
                  : [item.answer];

                return (
                  <div
                    key={item.question}
                    className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                      isOpen
                        ? "border-[#5C7057]/40 bg-white shadow-sm"
                        : "border-[#5C7057]/15 bg-white/70 hover:border-[#5C7057]/30"
                    }`}
                  >
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggleAccordion(index)}
                        className="flex w-full items-center justify-between gap-4 p-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#5C7057] sm:p-6"
                      >
                        <span className="flex items-start gap-3 sm:gap-4">
                          <span
                            aria-hidden="true"
                            className="mt-0.5 text-sm font-semibold text-[#5C7057]"
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-base font-semibold leading-6 text-[#29372B] sm:text-lg">
                            {item.question}
                          </span>
                        </span>

                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                            isOpen
                              ? "bg-[#5C7057] text-white"
                              : "bg-[#5C7057]/10 text-[#5C7057]"
                          }`}
                        >
                          <FaChevronDown
                            aria-hidden="true"
                            className={`text-xs transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </button>
                    </h3>

                    <div
                      id={panelId}
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                      className="px-5 pb-6 sm:px-6"
                    >
                      <div className="space-y-3 border-t border-[#5C7057]/15 pt-5">
                        {answers.filter(Boolean).map((point, pointIndex) => (
                          <p
                            key={pointIndex}
                            className="text-sm leading-7 text-[#62685E] sm:text-base"
                          >
                            {point}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;