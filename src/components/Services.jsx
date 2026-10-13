import { FaLeaf } from "react-icons/fa";
import services from "../Data/services.js";
import ServiceCard from "./serviceCard";

const Services = () => {
  return (
    <>
      <section
        id="services"
        aria-labelledby="services-heading"
        className="scroll-mt-24 bg-[#F7F5EF] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#5C7057]/20 bg-[#5C7057]/5 px-4 py-2">
              <FaLeaf aria-hidden="true" className="text-[#5C7057]" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5C7057]">
                Relax · Unwind · Refresh
              </span>
            </div>

            <h2
              id="services-heading"
              className="mb-5 font-serif text-4xl leading-tight text-[#29372B] sm:text-5xl"
            >
              Spa Services in Mount Abu
            </h2>

            <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-[#B69A63]" />

            <p className="text-base leading-7 text-[#62685E] sm:text-lg sm:leading-8">
              Make time for relaxation at Green View Cottages & Spa.
              Explore our treatments and contact us to find a session
              that suits your visit.
            </p>
          </div>

          {/* Responsive service cards */}
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <p className="mt-8 text-center text-sm leading-6 text-[#62685E]">
            For treatment prices, session timings, and availability,
            use the Call or WhatsApp buttons on each card.
          </p>
        </div>
      </section>
    </>
  );
};

export default Services;