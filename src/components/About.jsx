import { createElement, useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaLeaf,
  FaSpa,
  FaClock,
} from "react-icons/fa";
import aboutData from "../Data/About";

const About = () => {
  const data = aboutData;
  const images = Array.isArray(data.image) ? data.image.filter(Boolean) : [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeIndex = images.length ? currentIndex % images.length : 0;

  useEffect(() => {
    if (images.length < 2) return undefined;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    let interval;

    const updateSlideshow = () => {
      window.clearInterval(interval);

      if (!motionPreference.matches) {
        interval = window.setInterval(() => {
          setCurrentIndex((previous) => (previous + 1) % images.length);
        }, 4000);
      }
    };

    updateSlideshow();
    motionPreference.addEventListener("change", updateSlideshow);

    return () => {
      window.clearInterval(interval);
      motionPreference.removeEventListener("change", updateSlideshow);
    };
  }, [images.length]);

  return (
    <>
      <section
        id="about"
        aria-labelledby="about-heading"
        className="overflow-hidden bg-[#F7F5EF] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Gallery */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-[#5C7057]/10 sm:h-48 sm:w-48" />

              <div className="relative overflow-hidden rounded-t-[100px] rounded-b-3xl bg-[#E7EBDD] shadow-xl sm:rounded-t-[150px]">
                {images.length > 0 ? (
                  <img
                    key={images[activeIndex]}
                    src={images[activeIndex]}
                    alt={`${data.imageAlt || data.name} — view ${activeIndex + 1}`}
                    title={data.imageTitle}
                    width={800}
                    height={900}
                    loading="lazy"
                    className="h-[380px] w-full object-cover sm:h-[480px] lg:h-[580px]"
                  />
                ) : (
                  <div className="flex h-[380px] items-center justify-center sm:h-[480px] lg:h-[580px]">
                    <FaLeaf
                      aria-hidden="true"
                      className="text-6xl text-[#5C7057]"
                    />
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-6 pb-14 pt-24 sm:px-8">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E7EBDD]">
                    Dhundai · Mount Abu
                  </p>
                  <p className="max-w-sm font-serif text-2xl leading-snug text-white sm:text-3xl">
                    A peaceful escape surrounded by nature
                  </p>
                </div>

                {images.length > 1 && (
                  <div
                    aria-label="Choose a gallery image"
                    className="absolute bottom-5 left-0 right-0 flex justify-center gap-2"
                  >
                    {images.map((image, index) => (
                      <button
                        key={`${image}-${index}`}
                        type="button"
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Show image ${index + 1}`}
                        aria-pressed={activeIndex === index}
                        className="flex h-7 w-7 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        <span
                          className={`block h-2 rounded-full transition-all duration-300 ${
                            activeIndex === index
                              ? "w-6 bg-white"
                              : "w-2 bg-white/50"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#5C7057]/20 bg-[#5C7057]/5 px-4 py-2">
                <FaLeaf aria-hidden="true" className="text-[#5C7057]" />
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5C7057]">
                  Nature · Spa · Stay
                </span>
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#5C7057]">
                {data.title}
              </p>

              <h2
                id="about-heading"
                className="mb-6 font-serif text-4xl leading-tight text-[#29372B] sm:text-5xl"
              >
                {data.name}
              </h2>

              <div className="mb-6 h-1 w-16 rounded-full bg-[#B69A63]" />

              <p className="mb-8 text-base leading-8 text-[#62685E]">
                {data.description}
              </p>

              <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  { icon: FaSpa, label: "Spa Services" },
                  { icon: FaLeaf, label: "Cottage Stays" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border border-[#5C7057]/15 bg-white/70 px-4 py-4"
                  >
                    {createElement(Icon, {
                      "aria-hidden": true,
                      className: "shrink-0 text-lg text-[#5C7057]",
                    })}
                    <span className="text-sm font-semibold text-[#29372B]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${data.phone.replace(/[^\d+]/g, "")}`}
                  className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-[#5C7057] px-8 py-3.5 font-semibold text-white shadow-md transition-colors hover:bg-[#465642] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5C7057]"
                >
                  <FaPhoneAlt aria-hidden="true" />
                  Call Now
                </a>

                <a
                  href={data.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full border border-[#5C7057] px-8 py-3.5 font-semibold text-[#465642] transition-colors hover:bg-[#5C7057]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5C7057]"
                >
                  <FaWhatsapp aria-hidden="true" className="text-xl" />
                  WhatsApp Us
                </a>
              </div>

              <div className="space-y-4 border-t border-[#5C7057]/20 pt-6">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[#5C7057]"
                  />
                  <div>
                    <p className="mb-1 text-sm font-semibold text-[#29372B]">
                      Find Us
                    </p>
                    <p className="text-sm leading-6 text-[#62685E]">
                      {data.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaClock
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[#5C7057]"
                  />
                  <div>
                    <p className="mb-1 text-sm font-semibold text-[#29372B]">
                      Cottage Check-in & Check-out
                    </p>
                    <p className="text-sm leading-6 text-[#62685E]">
                      Check-in: 12:00 PM · Check-out: 10:00 AM
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#62685E]">
                      Call or WhatsApp for spa timings and availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;