import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Keyboard } from "swiper/modules";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaLeaf,
  FaArrowLeft,
  FaArrowRight,
  FaExpand,
} from "react-icons/fa";
import aboutData from "../Data/About";
import interior from "../Data/interior";

import "swiper/css";

const Interior = () => {
  const swiperRef = useRef(null);
  const galleryRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenError, setFullscreenError] = useState("");

  const images = Array.isArray(interior.image)
    ? interior.image.filter(Boolean)
    : [];

  const phone = aboutData.phone.replace(/[^\d+]/g, "");

  const updateNavigation = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    setActiveIndex(swiper.realIndex);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === galleryRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const updateAutoplay = () => {
      const swiper = swiperRef.current;
      if (!swiper || swiper.destroyed) return;

      if (motionPreference.matches) {
        swiper.autoplay?.stop();
      } else {
        swiper.autoplay?.start();
      }
    };

    motionPreference.addEventListener("change", updateAutoplay);
    return () =>
      motionPreference.removeEventListener("change", updateAutoplay);
  }, []);

  const toggleFullscreen = async () => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    setFullscreenError("");
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await gallery.requestFullscreen();
      }
    } catch {
      setFullscreenError("Fullscreen view is not available in this browser.");
    }
  };

  const focusClass =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5C7057]";

  return (
    <>
      <section
        id="interior"
        aria-labelledby="interior-heading"
        className="bg-[#F7F5EF] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#5C7057]/20 bg-[#5C7057]/5 px-4 py-2">
                <FaLeaf aria-hidden="true" className="text-[#5C7057]" />
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5C7057]">
                  Our Gallery
                </span>
              </div>

              <h2
                id="interior-heading"
                className="mb-5 font-serif text-4xl leading-tight text-[#29372B] sm:text-5xl"
              >
                Discover your peaceful escape
              </h2>

              <p className="text-base leading-7 text-[#62685E]">
                Take a look around Green View Cottages & Spa and picture
                your next relaxing visit to Mount Abu.
              </p>
            </div>

          </div>

          {/* Gallery slider */}
          {images.length > 0 && (
            <div
              ref={galleryRef}
              className="gallery-fullscreen min-w-0"
              role="region"
              aria-label="Green View Cottages & Spa photo gallery"
            >
              <div className="mb-3 flex justify-between gap-3">
                {images.length > 1 ? (
                  <div className="flex shrink-0 gap-3">
                    <button
                      type="button"
                      aria-label="Previous gallery photo"
                      disabled={isBeginning}
                      onClick={() => swiperRef.current?.slidePrev()}
                      className={`flex h-11 w-11 items-center justify-center rounded-full border border-[#5C7057]/30 text-[#5C7057] transition-colors hover:bg-[#5C7057]/10 disabled:cursor-not-allowed disabled:opacity-40 ${focusClass}`}
                    >
                      <FaArrowLeft aria-hidden="true" />
                    </button>

                    <button
                      type="button"
                      aria-label="Next gallery photo"
                      disabled={isEnd}
                      onClick={() => swiperRef.current?.slideNext()}
                      className={`flex h-11 w-11 items-center justify-center rounded-full bg-[#5C7057] text-white transition-colors hover:bg-[#465642] disabled:cursor-not-allowed disabled:opacity-40 ${focusClass}`}
                    >
                      <FaArrowRight aria-hidden="true" />
                    </button>
                  </div>
                ) : (
                  <span />
                )}

                <button
                  type="button"
                  onClick={toggleFullscreen}
                  aria-label={
                    isFullscreen
                      ? "Exit gallery fullscreen"
                      : "View gallery fullscreen"
                  }
                  className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#5C7057]/30 px-4 py-2 text-sm font-semibold text-[#465642] transition-colors hover:bg-[#5C7057]/10 ${focusClass}`}
                >
                  <FaExpand aria-hidden="true" />
                  {isFullscreen ? "Exit fullscreen" : "Fullscreen"}
                </button>
              </div>

              <Swiper
                modules={[Autoplay, A11y, Keyboard]}
                spaceBetween={20}
                slidesPerView={1}
                watchOverflow
                keyboard={{ enabled: true, onlyInViewport: true }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 24 },
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;

                  if (
                    window.matchMedia("(prefers-reduced-motion: reduce)").matches
                  ) {
                    swiper.autoplay?.stop();
                  }

                  updateNavigation(swiper);
                }}
                onSlideChange={updateNavigation}
                onResize={updateNavigation}
                onBreakpoint={updateNavigation}
                onFocusCapture={() => swiperRef.current?.autoplay?.stop()}
                className="!pb-4"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={`${image}-${index}`}>
                    <div className="overflow-hidden rounded-3xl border border-[#5C7057]/15 bg-white">
                      <img
                        src={image}
                        alt={`Green View Cottages & Spa photo ${index + 1}`}
                        loading="lazy"
                        width={600}
                        height={700}
                        className="h-[300px] w-full object-cover sm:h-[340px] lg:h-[380px]"
                      />

                      <div className="flex items-center justify-between gap-3 px-5 py-4">
                        <span className="text-sm font-medium text-[#29372B]">
                          Green View · Mount Abu
                        </span>
                        <span className="text-xs text-[#62685E]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div
                aria-label="Choose a gallery photo"
                className="flex gap-3 overflow-x-auto pb-2"
              >
                {images.map((image, index) => (
                  <button
                    key={`${image}-thumbnail`}
                    type="button"
                    onClick={() => swiperRef.current?.slideTo(index)}
                    aria-label={`Show gallery photo ${index + 1}`}
                    aria-pressed={activeIndex === index}
                    className={`h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 p-1 sm:h-24 sm:w-24 ${focusClass} ${
                      activeIndex === index
                        ? "border-[#5C7057] bg-white"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </button>
                ))}
              </div>

              {fullscreenError && (
                <p role="status" className="mt-3 text-sm text-[#62685E]">
                  {fullscreenError}
                </p>
              )}
            </div>
          )}

          {/* Always-visible contact buttons */}
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#5C7057]/15 bg-white px-6 py-7 sm:flex-row sm:px-8">
            <div className="text-center sm:text-left">
              <h3 className="mb-2 font-serif text-2xl text-[#29372B]">
                Make time for a relaxing getaway
              </h3>
              <p className="text-sm leading-6 text-[#62685E]">
                Enquire about spa services and cottage stays.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={`tel:${phone}`}
                className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#5C7057] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#465642] ${focusClass}`}
              >
                <FaPhoneAlt aria-hidden="true" />
                Call Now
              </a>

              <a
                href={aboutData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#5C7057] px-6 py-3 text-sm font-semibold text-[#465642] transition-colors hover:bg-[#5C7057]/10 ${focusClass}`}
              >
                <FaWhatsapp aria-hidden="true" className="text-lg" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Interior;