import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaLeaf,
} from "react-icons/fa";
import contact from "../Data/contact";

const iconMap = {
  phone: FaPhone,
  email: FaEnvelope,
  whatsapp: FaWhatsapp,
  location: FaMapMarkerAlt,
  clock: FaClock,
};

const Contact = () => {
  const contactItems = contact.filter(
    (item) => item.icon !== "map" && item.info?.trim()
  );
  const mapItem = contact.find(
    (item) => item.icon === "map" && item.info?.trim()
  );

  const getAction = (item) => {
    if (item.icon === "phone") {
      return {
        href: `tel:${item.info.replace(/[^\d+]/g, "")}`,
        label: "Call Now",
        icon: FaPhone,
      };
    }

    if (item.icon === "whatsapp") {
      const message = encodeURIComponent(
        "Hello Green View Cottages & Spa! I would like to enquire about spa services or a cottage stay in Mount Abu."
      );

      return {
        href: `https://wa.me/${item.info.replace(/\D/g, "")}?text=${message}`,
        label: "WhatsApp Us",
        icon: FaWhatsapp,
        external: true,
      };
    }

    if (item.icon === "email") {
      return {
        href: `mailto:${item.info.trim()}`,
        label: "Send Email",
        icon: FaEnvelope,
      };
    }

    return null;
  };

  return (
    <>
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="bg-[#F7F5EF] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#5C7057]/20 bg-[#5C7057]/5 px-4 py-2">
              <FaLeaf aria-hidden="true" className="text-[#5C7057]" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5C7057]">
                Connect With Us
              </span>
            </div>

            <h2
              id="contact-heading"
              className="mb-5 font-serif text-4xl leading-tight text-[#29372B] sm:text-5xl"
            >
              Your Mount Abu escape starts here
            </h2>

            <p className="text-base leading-7 text-[#62685E]">
              Planning a relaxing spa visit or a peaceful cottage stay?
              Contact our team for availability, prices, and directions.
            </p>
          </div>

          <div
            className={`grid gap-8 lg:gap-12 ${
              mapItem ? "lg:grid-cols-2" : ""
            }`}
          >
            {/* Contact details */}
            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = iconMap[item.icon] || FaMapMarkerAlt;
                const action = getAction(item);
                const ActionIcon = action?.icon;

                return (
                  <div
                    key={item.id}
                    className="flex items-start gap-4 rounded-2xl border border-[#5C7057]/15 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#5C7057]/10">
                      <Icon
                        aria-hidden="true"
                        className="text-xl text-[#5C7057]"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="mb-2 text-lg font-semibold text-[#29372B]">
                        {item.title}
                      </h3>

                      <p className="break-words text-sm leading-6 text-[#62685E] sm:text-base">
                        {item.info}
                      </p>

                      {action && (
                        <a
                          href={action.href}
                          target={action.external ? "_blank" : undefined}
                          rel={
                            action.external
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="mt-4 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#5C7057] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#465642] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5C7057]"
                        >
                          <ActionIcon aria-hidden="true" />
                          {action.label}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Location map */}
            {mapItem && (
              <div className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-[#5C7057]/15 bg-white shadow-sm">
                <div className="border-b border-[#5C7057]/15 p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <FaMapMarkerAlt
                      aria-hidden="true"
                      className="text-[#5C7057]"
                    />
                    <h3 className="text-lg font-semibold text-[#29372B]">
                      Visit Green View Cottages & Spa
                    </h3>
                  </div>

                  <p className="text-sm leading-6 text-[#62685E]">
                    Dhundai, Mount Abu, Sirohi, Rajasthan 307501, India
                  </p>
                </div>

                <iframe
                  src={mapItem.info}
                  title="Location of Green View Cottages & Spa in Mount Abu"
                  className="min-h-[360px] w-full flex-1 border-0 sm:min-h-[450px]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="border-t border-[#5C7057]/15 bg-[#5C7057]/5 px-6 py-4">
                  <p className="text-sm leading-6 text-[#62685E]">
                    Call or WhatsApp us for help with directions before
                    your visit.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;