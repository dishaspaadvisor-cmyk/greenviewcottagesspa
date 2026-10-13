import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FloatingButton = () => {
  const phoneNumber = "+918976854196";
  const whatsappNumber = "918976854199";

  const message = encodeURIComponent(
    "Hello Green View Cottages & Spa! I would like to enquire about spa services or a cottage stay in Mount Abu."
  );

  return (
    <div
      role="group"
      aria-label="Contact Green View Cottages & Spa"
      className="fixed right-4 z-50 flex flex-col gap-3 sm:right-6"
      style={{
        bottom: "calc(5.5rem + env(safe-area-inset-bottom, 0px))",
      }}
    >
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call Green View Cottages & Spa"
        title="Call Now"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-[#5C7057] text-white shadow-lg transition-colors hover:bg-[#465642] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5C7057] sm:h-14 sm:w-14"
      >
        <FaPhoneAlt aria-hidden="true" size={20} />
      </a>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Green View Cottages & Spa on WhatsApp"
        title="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-[#128C7E] text-white shadow-lg transition-colors hover:bg-[#0F7569] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#128C7E] sm:h-14 sm:w-14"
      >
        <FaWhatsapp aria-hidden="true" size={25} />
      </a>
    </div>
  );
};

export default FloatingButton;