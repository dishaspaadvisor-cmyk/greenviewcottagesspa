import { useEffect, useId, useRef, useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaTimes } from "react-icons/fa";

const popupdata = {
  image: "/uploads/services/popup.png", // Your image path
  phone: "+918976854196",
  whatsapp: "https://wa.me/918976854199",
};

const SESSION_KEY = "green-view-spa-offer-seen";
const TIMER_DURATION = 5 * 60 * 1000;

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [remaining, setRemaining] = useState(300);

  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const deadlineRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      // Storage may be unavailable.
    }

    const timeout = window.setTimeout(() => {
      deadlineRef.current = Date.now() + TIMER_DURATION;
      setRemaining(300);
      setIsOpen(true);

      try {
        sessionStorage.setItem(SESSION_KEY, "true");
      } catch {
        // Continue without storage.
      }
    }, 15000);

    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    if (!dialog) return;

    document.body.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();
    closeRef.current?.focus({ preventScroll: true });

    const updateTimer = () => {
      const seconds = Math.max(
        0,
        Math.ceil((deadlineRef.current - Date.now()) / 1000)
      );

      setRemaining(seconds);
      return seconds;
    };

    updateTimer();

    const interval = window.setInterval(() => {
      if (updateTimer() === 0) window.clearInterval(interval);
    }, 1000);

    return () => {
      window.clearInterval(interval);
      dialog.close();
      document.body.style.overflow = previousOverflow;

      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, [isOpen]);

  const expired = remaining === 0;
  const minutes = String(Math.floor(remaining / 60)).padStart(2, "0");
  const seconds = String(remaining % 60).padStart(2, "0");

  const message = encodeURIComponent(
    expired
      ? "Hello! Please share current spa prices and availability at Green View Cottages & Spa."
      : "Hello! I am interested in your 25% spa discount and services starting from ₹1,499. Please share offer details and availability."
  );

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        setIsOpen(false);
      }}
      className="fixed inset-0 m-auto max-h-[90svh] w-[calc(100%_-_2rem)] max-w-[340px] overflow-y-auto rounded-2xl border-0 bg-[#FFFDF8] p-0 text-[#29372B] shadow-2xl backdrop:bg-black/55"
    >
      
{/* Full image without cropping */}
<div className="relative overflow-hidden bg-[#E7EBDD]">
  <img
    src={popupdata.image}
    alt="Green View Cottages & Spa offer"
    className="block max-h-[25svh] w-full object-cover"
  />

  <button
    ref={closeRef}
    type="button"
    onClick={() => setIsOpen(false)}
    aria-label="Close offer"
    className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
  >
    <FaTimes aria-hidden="true" size={15} />
  </button>
</div>

      <div className="px-5 pb-5 pt-4 text-center">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5C7057]">
          Green View Cottages & Spa
        </p>

        <h2 id={titleId} className="font-serif text-2xl leading-tight">
          {expired ? "Your moment of relaxation" : "A little break, just for you"}
        </h2>

        {!expired && (
          <div className="my-4 flex items-center justify-center gap-5">
            <div>
              <p className="text-3xl font-bold text-[#5C7057]">25% OFF</p>
              <p className="mt-1 text-xs text-[#62685E]">Special spa offer</p>
            </div>

            <div className="h-10 w-px bg-[#5C7057]/20" />

            <div>
              <p className="text-[11px] text-[#62685E]">Starting from</p>
              <p className="text-3xl font-bold">₹1,499</p>
            </div>
          </div>
        )}

        {/* Compact countdown */}
        <div className="my-4 flex items-center justify-center gap-3 rounded-lg bg-[#5C7057]/10 px-3 py-2.5">
          <span className="text-xs font-medium text-[#465642]">
            {expired ? "Offer timer ended" : "Offer countdown"}
          </span>
          <span
            role="timer"
            aria-label={`${minutes} minutes ${seconds} seconds remaining`}
            className="text-lg font-bold tabular-nums text-[#29372B]"
          >
            {minutes}:{seconds}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${popupdata.phone}`}
            className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#5C7057] px-2 py-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C7057]"
          >
            <FaPhoneAlt aria-hidden="true" />
            Call Now
          </a>

          <a
            href={`${popupdata.whatsapp}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#5C7057] px-2 py-3 text-sm font-semibold text-[#465642] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C7057]"
          >
            <FaWhatsapp aria-hidden="true" size={18} />
            WhatsApp
          </a>
        </div>

        <p className="mt-3 text-[11px] leading-5 text-[#62685E]">
          Dhundai, Mount Abu · Enquire for offer details.
        </p>
      </div>
    </dialog>
  );
};

export default Popup;