import { createElement, useId, useState } from "react";
import {
  FaHome,
  FaSpa,
  FaUser,
  FaPhone,
  FaPhoneAlt,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import aboutData from "../Data/About";

const headerLinks = [
  { id: "about", name: "About Us", icon: FaHome },
  { id: "services", name: "Spa Services", icon: FaSpa },
  { id: "interior", name: "Gallery", icon: FaUser },
  { id: "contact", name: "Contact", icon: FaPhone },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();

  const focusClass =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5C7057]";

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#5C7057]/15 bg-[#F7F5EF]/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[80px] items-center justify-between gap-3">
            {/* Logo */}
            <a
              href="#home"
              aria-label="Green View Cottages & Spa home"
              onClick={() => setIsMenuOpen(false)}
              className={`min-w-0 shrink rounded-lg ${focusClass}`}
            >
              <img
                src="/uploads/Green View Cottages & Spa logo.png"
                width={220}
                height={80}
                alt="Green View Cottages & Spa"
                className="max-h-16 w-[110px] object-contain min-[360px]:w-[140px] sm:w-[180px] lg:w-[200px]"
              />
            </a>

            {/* Desktop navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-1 xl:flex"
            >
              {headerLinks.map(({ id, name }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`rounded-full px-4 py-3 text-sm font-semibold text-[#29372B] transition-colors hover:bg-[#5C7057]/10 hover:text-[#465642] ${focusClass}`}
                >
                  {name}
                </a>
              ))}
            </nav>

            {/* Always-visible contact buttons */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <a
                href={`tel:${aboutData.phone.replace(/[^\d+]/g, "")}`}
                aria-label="Call Green View Cottages & Spa"
                className={`inline-flex h-11 min-w-[44px] items-center justify-center gap-2 rounded-full bg-[#5C7057] px-3 text-sm font-semibold text-white transition-colors hover:bg-[#465642] sm:px-5 ${focusClass}`}
              >
                <FaPhoneAlt aria-hidden="true" />
                <span className="hidden sm:inline">Call Now</span>
              </a>

              <a
                href={aboutData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Green View Cottages & Spa"
                className={`inline-flex h-11 min-w-[44px] items-center justify-center gap-2 rounded-full border border-[#5C7057] px-3 text-sm font-semibold text-[#465642] transition-colors hover:bg-[#5C7057]/10 sm:px-5 ${focusClass}`}
              >
                <FaWhatsapp aria-hidden="true" className="text-xl" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setIsMenuOpen((previous) => !previous)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") setIsMenuOpen(false);
                }}
                aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={isMenuOpen}
                aria-controls={menuId}
                className={`flex h-11 w-11 items-center justify-center rounded-full text-[#29372B] transition-colors hover:bg-[#5C7057]/10 xl:hidden ${focusClass}`}
              >
                {isMenuOpen ? (
                  <FaTimes aria-hidden="true" className="text-xl" />
                ) : (
                  <FaBars aria-hidden="true" className="text-xl" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile and tablet navigation */}
          <nav
            id={menuId}
            aria-label="Mobile navigation"
            hidden={!isMenuOpen}
            onKeyDown={(event) => {
              if (event.key === "Escape") setIsMenuOpen(false);
            }}
            className="border-t border-[#5C7057]/15 py-4 xl:hidden"
          >
            <div className="grid gap-2 sm:grid-cols-2">
              {headerLinks.map(({ id, name, icon: Icon }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex min-h-[48px] items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-[#29372B] transition-colors hover:bg-[#5C7057]/10 ${focusClass}`}
                >
                  {createElement(Icon, {
                    "aria-hidden": true,
                    className: "text-[#5C7057]",
                  })}
                  {name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;