import { useId, useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaLeaf,
  FaChevronDown,
} from "react-icons/fa";

const normalizeNumber = (number = "") => {
  const digits = String(number).replace(/\D/g, "");
  return digits.length === 10 ? `91${digits}` : digits;
};

const ServiceCard = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);
  const accordionId = useId();

  const phone = normalizeNumber(service.call);
  const whatsappValue = String(service.whatsapp || "").trim();
  const whatsappUrl = /^https:\/\/wa\.me\//i.test(whatsappValue)
    ? whatsappValue
    : whatsappValue
      ? `https://wa.me/${normalizeNumber(whatsappValue)}`
      : "";

  const durations = [service.duration1, service.duration2].filter(Boolean);

  return (
    <article className="min-w-0 self-start overflow-hidden rounded-3xl border border-[#5C7057]/15 bg-white shadow-sm">
      {/* Image stays visible */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#E7EBDD]">
        {service.thumbnail ? (
          <img
            src={service.thumbnail}
            alt={service.title}
            loading="lazy"
            width={600}
            height={450}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <FaLeaf
              aria-hidden="true"
              className="text-5xl text-[#5C7057]"
            />
          </div>
        )}

        <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-2 text-xs font-semibold text-[#465642] shadow-sm">
          Green View · Mount Abu
        </span>
      </div>

      <div className="p-4 sm:p-5">
        {/* Click title to expand service details */}
        <h3>
          <button
            id={`${accordionId}-title`}
            type="button"
            aria-expanded={isOpen}
            aria-controls={`${accordionId}-details`}
            onClick={() => setIsOpen((previous) => !previous)}
            className="flex min-h-[48px] w-full items-center justify-between gap-3 rounded-lg text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5C7057]"
          >
            <span className="break-words font-serif text-xl leading-tight text-[#29372B] sm:text-2xl">
              {service.title}
            </span>

            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#5C7057]/10 text-[#5C7057]">
              <FaChevronDown
                aria-hidden="true"
                className={`text-xs transition-transform duration-200 motion-reduce:transition-none ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </span>
          </button>
        </h3>

        {/* Only these details collapse */}
        <div
          id={`${accordionId}-details`}
          aria-labelledby={`${accordionId}-title`}
          hidden={!isOpen}
        >
          <div className="space-y-4 pb-4 pt-4">
            <p className="text-sm leading-7 text-[#62685E]">
              {service.description}
            </p>

            <p className="font-semibold text-[#465642]">
              {service.price || "Price on call"}
            </p>

            {service.features?.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {service.features.map((feature, index) => (
                  <li
                    key={`${feature}-${index}`}
                    className="rounded-full border border-[#5C7057]/15 bg-[#F7F5EF] px-3 py-1.5 text-xs font-medium text-[#465642]"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {durations.length > 0 && (
              <div className="flex items-start gap-2 rounded-xl bg-[#F7F5EF] px-4 py-3 text-sm text-[#62685E]">
                <FaClock
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#5C7057]"
                />
                <span>
                  Duration:{" "}
                  <span className="font-semibold text-[#29372B]">
                    {durations.join(" / ")}
                  </span>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Buttons stay visible even when details are closed */}
        <div
          className={`mt-4 grid gap-2 border-t border-[#5C7057]/15 pt-4 ${
            phone && whatsappUrl ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          {phone && (
            <a
              href={`tel:+${phone}`}
              aria-label={`Call to enquire about ${service.title}`}
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#5C7057] px-2 py-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C7057]"
            >
              <FaPhoneAlt aria-hidden="true" className="shrink-0" />
              Call Now
            </a>
          )}

          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire about ${service.title} on WhatsApp`}
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#5C7057] bg-[#F7F5EF] px-2 py-3 text-sm font-semibold text-[#465642] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C7057]"
            >
              <FaWhatsapp
                aria-hidden="true"
                className="shrink-0 text-lg"
              />
              WhatsApp
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;