import { FaPhoneAlt, FaWhatsapp, FaClock, FaLeaf } from "react-icons/fa";

const normalizeNumber = (number = "") => {
  const digits = String(number).replace(/\D/g, "");
  return digits.length === 10 ? `91${digits}` : digits;
};

const ServiceCard = ({ service }) => {
  const phone = normalizeNumber(service.call);
  const whatsappValue = String(service.whatsapp || "").trim();
  const whatsappUrl = /^https:\/\/wa\.me\//i.test(whatsappValue)
    ? whatsappValue
    : whatsappValue
      ? `https://wa.me/${normalizeNumber(whatsappValue)}`
      : "";

  const durations = [service.duration1, service.duration2].filter(Boolean);

  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-[#5C7057]/15 bg-white shadow-sm">
      {/* Service image */}
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

      {/* Service details */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-3 break-words font-serif text-2xl leading-tight text-[#29372B]">
          {service.title}
        </h3>

        <p className="mb-5 text-sm leading-7 text-[#62685E]">
          {service.description}
        </p>

        <p className="mb-5 font-semibold text-[#465642]">
          {service.price || "Price on call"}
        </p>

        {service.features?.length > 0 && (
          <ul className="mb-5 flex flex-wrap gap-2">
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

        {/* Duration and always-visible buttons */}
        <div className="mt-auto">
          {durations.length > 0 && (
            <div className="mb-5 flex items-start gap-2 rounded-xl bg-[#F7F5EF] px-4 py-3 text-sm text-[#62685E]">
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

          <div
            className={`grid gap-3 border-t border-[#5C7057]/15 pt-5 ${
              phone && whatsappUrl ? "grid-cols-2" : "grid-cols-1"
            }`}
          >
            {phone && (
              <a
                href={`tel:+${phone}`}
                aria-label={`Call to enquire about ${service.title}`}
                className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#5C7057] px-3 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#465642] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5C7057]"
              >
                <FaPhoneAlt aria-hidden="true" className="shrink-0" />
                <span>Call Now</span>
              </a>
            )}

            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Enquire about ${service.title} on WhatsApp`}
                className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#5C7057] bg-[#F7F5EF] px-3 py-3 text-sm font-semibold text-[#465642] transition-colors hover:bg-[#E7EBDD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5C7057]"
              >
                <FaWhatsapp
                  aria-hidden="true"
                  className="shrink-0 text-lg"
                />
                <span>WhatsApp</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;