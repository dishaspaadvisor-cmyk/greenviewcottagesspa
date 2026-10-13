import { useEffect, useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import aboutData from "../Data/About";

const heroSlides = [
  {
    image: "/uploads/heroImages/hero1.jpg",
    heading: "No 1 spa in Mount Abu",
    text: "Relax and unwind at Green View Cottages & Spa.",
  },
  {
    image: "/uploads/heroImages/hero4.webp",
    heading: "Best spa in Mount Abu",
    text: "Discover spa services in the peaceful hills of Mount Abu.",
  },
  {
    image: "/uploads/heroImages/hero3.webp",
    heading: "Spa & Cottage Stays in Mount Abu",
    text: "Enjoy a refreshing spa visit or a peaceful cottage getaway.",
  },
  {
    image: "/uploads/heroImages/hero2.jpg",
    heading: "Best spa services in Mount Abu",
    text: "Visit Green View Cottages & Spa in Dhundai, Mount Abu.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let interval;

    const updateSlideshow = () => {
      window.clearInterval(interval);

      if (!motionPreference.matches) {
        interval = window.setInterval(() => {
          setCurrentSlide((previous) => (previous + 1) % heroSlides.length);
        }, 5000);
      }
    };

    updateSlideshow();
    motionPreference.addEventListener("change", updateSlideshow);

    return () => {
      window.clearInterval(interval);
      motionPreference.removeEventListener("change", updateSlideshow);
    };
  }, []);

  const slide = heroSlides[currentSlide];
  const whatsappMessage = encodeURIComponent(
    "Hello Green View Cottages & Spa! I would like to enquire about spa services in Mount Abu."
  );
  const whatsappUrl = `${aboutData.whatsapp}${
    aboutData.whatsapp.includes("?") ? "&" : "?"
  }text=${whatsappMessage}`;

  return (
    <>
      <section
        id="home"
        aria-labelledby="hero-heading"
        className="relative isolate flex min-h-[calc(100svh-80px)] items-center overflow-hidden bg-[#29372B]"
      >
        {/* Background slideshow */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          {heroSlides.map((item, index) => (
            <img
              key={item.image}
              src={item.image}
              alt=""
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 motion-reduce:transition-none ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17241B]/80 via-transparent to-black/15" />
        </div>

        {/* Slide text and contact buttons */}
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5D4AE] sm:text-sm">
              Green View Cottages & Spa · Mount Abu
            </p>

            <h1
              id="hero-heading"
              className="mb-6 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-7xl"
            >
              {slide.heading}
            </h1>

            <p className="mx-auto mb-9 max-w-2xl text-base leading-7 text-white/90 sm:text-xl sm:leading-8">
              {slide.text}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`tel:${aboutData.phone.replace(/[^\d+]/g, "")}`}
                className="inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#5C7057] px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[#465642] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:min-w-[180px]"
              >
                <FaPhoneAlt aria-hidden="true" />
                Call Now
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full border border-white/70 bg-black/20 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:min-w-[180px]"
              >
                <FaWhatsapp aria-hidden="true" className="text-xl" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;