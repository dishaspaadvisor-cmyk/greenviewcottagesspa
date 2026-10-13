import { useId, useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaHome,
  FaSpa,
  FaCalendarAlt,
  FaUser,
  FaPhone,
  FaChevronDown,
  FaLeaf,
} from "react-icons/fa";
import footerData from "../Data/footer";

const iconMap = {
  FaHome,
  FaSpa,
  FaCalendarAlt,
  FaUser,
  FaPhone,
};

const socialIcons = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  twitter: FaTwitter,
  youtube: FaYoutube,
  linkedin: FaLinkedinIn,
};

const toPhone = (number = "") => String(number).replace(/[^\d+]/g, "");

const toWhatsApp = (number = "") => {
  const digits = String(number).replace(/\D/g, "");
  return digits.length === 10 ? `91${digits}` : digits;
};

const whatsAppEnquiry = (number, message) =>
  `https://wa.me/${toWhatsApp(number)}?text=${encodeURIComponent(message)}`;

const Footer = () => {
  const {
    locations = [],
    links = [],
    services = [],
    contact = {},
    social = {},
    copyright,
  } = footerData;

  const [expandedServices, setExpandedServices] = useState({});
  const footerId = useId();

  const toggleService = (index) => {
    setExpandedServices((previous) => ({
      ...previous,
      [index]: !previous[index],
    }));
  };

  const socialLinks = Object.entries(social).filter(
    ([platform, url]) =>
      socialIcons[platform] &&
      typeof url === "string" &&
      /^https?:\/\//i.test(url.trim())
  );

  const focusClass =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D6C194]";

  return (
    <footer className="bg-[#29372B] pb-6 pt-14 text-[#E4E8DE] sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Brand and main actions */}
        <div className="mb-10 flex flex-col gap-6 border-b border-white/15 pb-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <div className="mb-3 flex items-center gap-2 text-[#D6C194]">
              <FaLeaf aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                Nature · Spa · Stay
              </span>
            </div>

            <h2 className="mb-3 font-serif text-3xl text-white sm:text-4xl">
              Green View Cottages & Spa
            </h2>

            <p className="text-sm leading-7 text-[#C6CFBF]">
              Spa services and peaceful cottage stays surrounded by the
              natural beauty of Mount Abu.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {contact.phone && (
              <a
                href={`tel:${toPhone(contact.phone)}`}
                className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#D6C194] px-6 py-3 text-sm font-semibold text-[#29372B] transition-colors hover:bg-[#E5D4AE] ${focusClass}`}
              >
                <FaPhoneAlt aria-hidden="true" />
                Call Now
              </a>
            )}

            {contact.whatsapp && (
              <a
                href={whatsAppEnquiry(
                  contact.whatsapp,
                  "Hello Green View Cottages & Spa! I would like to enquire about spa services or a cottage stay in Mount Abu."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#D6C194]/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 ${focusClass}`}
              >
                <FaWhatsapp aria-hidden="true" className="text-lg" />
                WhatsApp Us
              </a>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Explore */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-[#D6C194]">
              Explore Mount Abu
            </h3>

            <ul className="space-y-4 text-sm">
              {locations.map((location, index) => {
                const isExternal = /^https?:\/\//i.test(location.link);

                return (
                  <li key={`${location.title}-${index}`}>
                    <a
                      href={location.link}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className={`inline-flex items-start gap-3 leading-6 transition-colors hover:text-[#D6C194] ${focusClass}`}
                    >
                      <FaLeaf
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-[#D6C194]"
                      />
                      {location.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="mb-5 text-lg font-semibold text-[#D6C194]">
              Useful Links
            </h3>

            <ul className="space-y-4 text-sm">
              {links.map((link) => {
                const Icon = iconMap[link.icon] || FaLeaf;

                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={`inline-flex items-center gap-3 transition-colors hover:text-[#D6C194] ${focusClass}`}
                    >
                      <Icon
                        aria-hidden="true"
                        className="shrink-0 text-[#D6C194]"
                      />
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Spa and accommodation */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-[#D6C194]">
              Spa & Stays
            </h3>

            <ul className="space-y-3">
              {services.map((service, index) => {
                const isOpen = Boolean(expandedServices[index]);
                const buttonId = `${footerId}-button-${index}`;
                const panelId = `${footerId}-panel-${index}`;

                return (
                  <li
                    key={`${service.title}-${index}`}
                    className="rounded-xl border border-white/15 bg-white/5"
                  >
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleService(index)}
                      className={`flex min-h-[48px] w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors hover:text-[#D6C194] ${focusClass}`}
                    >
                      <span>{service.title}</span>
                      <FaChevronDown
                        aria-hidden="true"
                        className={`shrink-0 text-xs text-[#D6C194] transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      id={panelId}
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                      className="px-4 pb-4"
                    >
                      <div className="flex flex-wrap gap-2">
                        {service.call && (
                          <a
                            href={`tel:${toPhone(service.call)}`}
                            className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#D6C194] px-4 py-2 text-xs font-semibold text-[#29372B] transition-colors hover:bg-[#E5D4AE] ${focusClass}`}
                          >
                            <FaPhoneAlt aria-hidden="true" />
                            Call
                          </a>
                        )}

                        {service.whatsapp && (
                          <a
                            href={whatsAppEnquiry(
                              service.whatsapp,
                              `Hello Green View Cottages & Spa! I would like to enquire about ${service.title}.`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10 ${focusClass}`}
                          >
                            <FaWhatsapp aria-hidden="true" />
                            WhatsApp
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-[#D6C194]">
              Find & Contact Us
            </h3>

            <ul className="space-y-4 text-sm">
              {contact.phone && (
                <li className="flex items-start gap-3">
                  <FaPhoneAlt
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[#D6C194]"
                  />
                  <a
                    href={`tel:${toPhone(contact.phone)}`}
                    className={`break-words leading-6 transition-colors hover:text-[#D6C194] ${focusClass}`}
                  >
                    {contact.phone}
                  </a>
                </li>
              )}

              {contact.whatsapp && (
                <li className="flex items-start gap-3">
                  <FaWhatsapp
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[#D6C194]"
                  />
                  <a
                    href={whatsAppEnquiry(
                      contact.whatsapp,
                      "Hello Green View Cottages & Spa! I would like to enquire about spa services or a cottage stay in Mount Abu."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`break-words leading-6 transition-colors hover:text-[#D6C194] ${focusClass}`}
                  >
                    +{toWhatsApp(contact.whatsapp)}
                  </a>
                </li>
              )}

              {contact.email?.trim() && (
                <li className="flex items-start gap-3">
                  <FaEnvelope
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[#D6C194]"
                  />
                  <a
                    href={`mailto:${contact.email.trim()}`}
                    className={`min-w-0 break-words leading-6 transition-colors hover:text-[#D6C194] ${focusClass}`}
                  >
                    {contact.email}
                  </a>
                </li>
              )}

              {contact.address && (
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[#D6C194]"
                  />
                  <span className="leading-7">{contact.address}</span>
                </li>
              )}

              {contact.time && (
                <li className="flex items-start gap-3">
                  <FaClock
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[#D6C194]"
                  />
                  <span className="leading-7">{contact.time}</span>
                </li>
              )}
            </ul>

            {socialLinks.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map(([platform, url]) => {
                  const Icon = socialIcons[platform];

                  return (
                    <a
                      key={platform}
                      href={url.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Green View Cottages & Spa on ${platform}`}
                      className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-lg transition-colors hover:border-[#D6C194] hover:text-[#D6C194] ${focusClass}`}
                    >
                      <Icon aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/15 pt-6 text-center text-xs leading-6 text-[#C6CFBF] sm:text-sm">
          {copyright ||
            `© ${new Date().getFullYear()} Green View Cottages & Spa | All Rights Reserved`}
        </div>
      </div>
    </footer>
  );
};

export default Footer;