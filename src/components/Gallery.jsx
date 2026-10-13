import { createElement, useRef, useState } from "react";
import {
  FaExpand,
  FaArrowLeft,
  FaArrowRight,
  FaMapMarkerAlt,
  FaLeaf,
  FaSpa,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import aboutData from "../Data/About";
import interiorData from "../Data/interior";

const Gallery360 = ({ virtualTourUrl = "" }) => {
  const [activeImage, setActiveImage] = useState(0);
  const galleryRef = useRef(null);

  const images = Array.isArray(interiorData.image)
    ? interiorData.image.filter(Boolean)
    : [];

  const activeIndex = images.length ? activeImage % images.length : 0;
  const tourUrl = /^https?:\/\//i.test(virtualTourUrl.trim())
    ? virtualTourUrl.trim()
    : "";

  const changeImage = (direction) => {
    if (images.length < 2) return;

    setActiveImage(
      (previous) => (previous + direction + images.length) % images.length
    );
  };

  const expandGallery = async () => {
    const element = galleryRef.current;

    if (!element || !images.length) return;

    try {
      if (element.requestFullscreen) {
        await element.requestFullscreen();
        return;
      }
    } catch {
      // Open the image if fullscreen is unavailable.
    }

    window.open(images[activeIndex], "_blank", "noopener,noreferrer");
  };

  const features = [
    {
      icon: FaMapMarkerAlt,
      title: "Mount Abu Location",
      description:
        "Find us in Dhundai, Mount Abu, surrounded by the peaceful hills of Rajasthan.",
    },
    {
      icon: FaLeaf,
      title: "Nature & Cottage Stays",
      description:
        "Contact us to ask about cottage stays and accommodation availability.",
    },
    {
      icon: FaSpa,
      title: "Spa Services",
      description:
        "Make time for relaxation. Contact our team for treatments, timings, and availability.",
    },
  ];

  const focusClass =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5C7057]";

  return (
    <section
      id="interior"
      aria-labelledby="gallery360-heading"
      className="bg-[#F7F5EF] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#5C7057]/20 bg-[#5C7057]/5 px-4 py-2">
            <FaLeaf aria-hidden="true" className="text-[#5C7057]" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5C7057]">
              Discover Our Retreat
            </span>
          </div>

          <h2
            id="gallery360-heading"
            className="mb-5 font-serif text-4xl leading-tight text-[#29372B] sm:text-5xl"
          >
            A closer look at Green View
          </h2>

          <p className="text-base leading-7 text-[#62685E]">
            Explore photos of Green View Cottages & Spa before planning
            your spa visit or cottage stay in Mount Abu.
          </p>
        </div>

        {/* Photo gallery */}
        {images.length > 0 && (
          <div className="mx-auto max-w-5xl">
            <div
              ref={galleryRef}
              role="region"
              aria-label="Retreat photo gallery"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  changeImage(-1);
                }

                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  changeImage(1);
                }
              }}
              className={`relative overflow-hidden rounded-3xl bg-[#29372B] shadow-xl ${focusClass}`}
            >
              <img
                src={images[activeIndex]}
                alt={`Green View Cottages & Spa, Mount Abu — photo ${activeIndex + 1
                  }`}
                loading="lazy"
                className="h-[360px] w-full object-contain sm:h-[480px] lg:h-[560px]"
              />

              <button
                type="button"
                onClick={expandGallery}
                aria-label="Open gallery fullscreen"
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <FaExpand aria-hidden="true" />
              </button>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => changeImage(-1)}
                    aria-label="Previous photo"
                    className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <FaArrowLeft aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => changeImage(1)}
                    aria-label="Next photo"
                    className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <FaArrowRight aria-hidden="true" />
                  </button>
                </>
              )}

              <div
                aria-live="polite"
                aria-atomic="true"
                className="absolute bottom-4 right-4 rounded-full bg-black/60 px-4 py-2 text-sm text-white"
              >
                Photo {activeIndex + 1} of {images.length}
              </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div
                aria-label="Choose a retreat photo"
                className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6"
              >
                {images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`Show photo ${index + 1}`}
                    aria-pressed={activeIndex === index}
                    className={`overflow-hidden rounded-xl border-2 p-1 transition-colors ${focusClass} ${activeIndex === index
                        ? "border-[#5C7057] bg-white"
                        : "border-transparent hover:border-[#5C7057]/40"
                      }`}
                  >
                    <img
                      src={image}
                      alt=""
                      loading="lazy"
                      className="h-20 w-full rounded-lg object-cover sm:h-24"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Optional real 360° tour */}
        {tourUrl && (
          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-[#5C7057]/20 bg-white">
            <div className="p-6">
              <h3 className="font-serif text-2xl text-[#29372B]">
                Explore Our 360° Virtual Tour
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#62685E]">
                Move around the interactive view to explore the retreat.
              </p>
            </div>

            <iframe
              src={tourUrl}
              title="Green View Cottages & Spa 360-degree virtual tour"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[400px] w-full border-0 sm:h-[550px]"
            />
          </div>
        )}

        {/* Retreat features */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#5C7057]/15 bg-white p-6"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5C7057]/10">
                {createElement(Icon, {
                  "aria-hidden": true,
                  className: "text-xl text-[#5C7057]",
                })}
              </div>

              <h3 className="mb-3 text-lg font-semibold text-[#29372B]">
                {title}
              </h3>

              <p className="text-sm leading-7 text-[#62685E]">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Call and WhatsApp */}
        <div className="mt-12 text-center">
          <p className="mb-6 font-serif text-2xl text-[#29372B]">
            Plan your visit to Green View Cottages & Spa
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${aboutData.phone.replace(/[^\d+]/g, "")}`}
              className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#5C7057] px-8 py-3.5 font-semibold text-white transition-colors hover:bg-[#465642] ${focusClass}`}
            >
              <FaPhoneAlt aria-hidden="true" />
              Call Now
            </a>

            <a
              href={aboutData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#5C7057] px-8 py-3.5 font-semibold text-[#465642] transition-colors hover:bg-[#5C7057]/10 ${focusClass}`}
            >
              <FaWhatsapp aria-hidden="true" className="text-xl" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery360;