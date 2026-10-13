const SPA_PHONE_NUMBER = "+918976854196";
const SPA_WHATSAPP_NUMBER = "918976854199";

const footerData = {
  locations: [
    { title: "Spa in Mount Abu", link: "#services" },
    { title: "Cottages in Mount Abu", link: "#about" },
    { title: "Spa in Dhundai, Mount Abu", link: "#contact" },
  ],

  links: [
    { id: "about", name: "About Us", icon: "FaHome" },
    { id: "services", name: "Spa Services", icon: "FaSpa" },
    { id: "interior", name: "Gallery", icon: "FaUser" },
    { id: "contact", name: "Contact Us", icon: "FaPhone" },
  ],

  services: [
    {
      title: "Cottage stay enquiry",
      call: SPA_PHONE_NUMBER,
      whatsapp: SPA_WHATSAPP_NUMBER,
    },
  ],

  contact: {
    phone: SPA_PHONE_NUMBER,
    whatsapp: SPA_WHATSAPP_NUMBER,
    email: "",
    address: "Dhundai, Mount Abu, Sirohi, Rajasthan 307501, India",
    time: "Check-in: 12:00 PM | Check-out: 10:00 AM",
  },

  social: {
    instagram: "",
    facebook: "",
    twitter: "",
    youtube: "",
    linkedin: "",
  },

  copyright: `© ${new Date().getFullYear()} Green View Cottages & Spa | All Rights Reserved`,
};

export default footerData;