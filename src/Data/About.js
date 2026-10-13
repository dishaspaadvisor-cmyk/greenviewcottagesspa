const SPA_PHONE_NUMBER = "+918976854196";
const SPA_WHATSAPP_NUMBER = "+918976854199";
const WHATSAPP_MESSAGE =
  "Hello Green View Cottages & Spa! I would like to enquire about spa services or a cottage stay in Mount Abu.";

const about = {
  id: 1,
  title: "About Us",
  name: "Green View Cottages & Spa",
  address: "Dhundai, Mount Abu, Sirohi, Rajasthan 307501, India",
  description:
    "Green View Cottages & Spa is in Dhundai, Mount Abu, Rajasthan. We offer spa services and cottage stays. Contact us to ask about treatments, accommodation, prices, and availability for your visit.",
  image: [
    "/uploads/services/service1.jpg",
    "/uploads/services/service5.jpg",
    "/uploads/services/service3.jpg",
    "/uploads/services/service4.jpg",
    "/uploads/services/service16.jpg",
    "/uploads/services/service7.jpg",
  ],
  imageDescription:
    "Spa Services and Peaceful Cottage Stays in Mount Abu",
  imageAlt: "Green View Cottages & Spa in Dhundai, Mount Abu",
  imageTitle: "Discover Green View Cottages & Spa, Mount Abu",
  phone: SPA_PHONE_NUMBER,
  whatsapp: `https://wa.me/${SPA_WHATSAPP_NUMBER.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  offerButtonColor: "#5C7057",
  offerButtonTextColor: "#FFFFFF",
  offerButtonText: "Call Now",
};

export default about;