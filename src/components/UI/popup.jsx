import { useEffect, useId, useRef, useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaTimes, FaLeaf } from "react-icons/fa";

const popupdata = {
  title: "Green View Cottages & Spa",
  description:
    "Planning a relaxing spa visit or a peaceful cottage stay in Mount Abu?",
  phone: "+918976854196",
  whatsapp: "https://wa.me/918976854199",
};

const SESSION_KEY = "green-view-enquiry-popup-seen";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      // Continue when browser storage is unavailable.
    }

    const timer = window.setTimeout(() => {
      try {
        sessionStorage.setItem(SESSION_KEY, "true");
      } catch {
        // The popup still works without browser storage.
      }

      setIsOpen(true);
    }, 30000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const previousScrollY = window.scrollY;

    document.body.style.overflow = "hidden";
    dialog.showModal();
    closeButtonRef.current?.focus({ preventScroll: true });

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;

      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }

      window.scrollTo({ top: previousScrollY, behavior: "auto" });
    };
  }, [isOpen]);

  const closeModal = () => setIsOpen(false);

  const whatsappMessage = encodeURIComponent(
    "Hello Green View Cottages & Spa! I would like to enquire about spa services or a cottage stay in Mount Abu."
  );

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          closeModal();
        }
      }}
      onCancel={(event) => {
        event.preventDefault();
        closeModal();
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) closeModal();
      }}
      className="fixed inset-0 m-auto max-h-[90svh] w-[calc(100%-2rem)] max-w-md overflow-y-auto rounded-3xl border-0 bg-[#F7F5EF] p-0 text-[#29372B] shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      <div className="relative p-6 sm:p-8">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={closeModal}
          aria-label="Close enquiry popup"
          className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full text-[#62685E] transition-colors hover:bg-[#5C7057]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C7057]"
        >
          <FaTimes aria-hidden="true" size={18} />
        </button>

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#5C7057]/10">
          <FaLeaf aria-hidden="true" className="text-2xl text-[#5C7057]" />
        </div>

        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#5C7057]">
          Nature · Spa · Stay
        </p>

        <h2
          id={titleId}
          className="mb-4 text-center font-serif text-3xl leading-tight"
        >
          {popupdata.title}
        </h2>

        <p
          id={descriptionId}
          className="mb-6 text-center text-sm leading-7 text-[#62685E]"
        >
          {popupdata.description}
        </p>

        <div className="space-y-3">
          <a
            href={`tel:${popupdata.phone}`}
            className="flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-[#5C7057] px-5 py-3.5 font-semibold text-white transition-colors hover:bg-[#465642] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5C7057]"
          >
            <FaPhoneAlt aria-hidden="true" />
            Call Now
          </a>

          <a
            href={`${popupdata.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl border border-[#5C7057] px-5 py-3.5 font-semibold text-[#465642] transition-colors hover:bg-[#5C7057]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5C7057]"
          >
            <FaWhatsapp aria-hidden="true" className="text-xl" />
            WhatsApp Us
          </a>
        </div>

        <div className="mt-6 border-t border-[#5C7057]/15 pt-5 text-center">
          <p className="text-sm font-semibold">Dhundai, Mount Abu</p>
          <p className="mt-2 text-xs leading-6 text-[#62685E]">
            Contact us for current prices, spa timings, and availability.
          </p>
        </div>
      </div>
    </dialog>
  );
};

export default Popup;