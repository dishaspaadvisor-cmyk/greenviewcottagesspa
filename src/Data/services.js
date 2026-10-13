// services.js
const SPA_PHONE_NUMBER = "+918976854196";
const SPA_WHATSAPP_URL = "https://wa.me/918976854199";

const serviceList = [
  {
    slug: "full-body-massage",
    name: "Full Body Massage",
    duration: "60",
    description:
      "A relaxing full body massage to help relieve stress and promote relaxation.",
    features: ["Full-body relaxation", "Flowing strokes"],
    image: "service1.jpeg",
  },
  {
    slug: "full-body-oil-massage",
    name: "Full Body Oil Massage",
    duration: "60",
    description: "A soothing full body massage using massage oils.",
    features: ["Massage oils", "Full-body relaxation"],
    image: "service18.jpeg",
  },
  {
    slug: "full-body-dry-massage",
    name: "Full Body Dry Massage",
    duration: "60",
    description:
      "A traditional dry massage focused on relaxation and body comfort.",
    features: ["Oil-free massage", "Body comfort"],
    image: "service14.jpeg",
  },
  {
    slug: "full-body-thai-massage",
    name: "Full Body Thai Massage",
    duration: "60",
    description:
      "A traditional Thai massage using stretching and pressure techniques.",
    features: ["Assisted stretching", "Pressure techniques"],
    image: "service14.jpeg",
  },
  {
    slug: "swedish-massage",
    name: "Swedish Massage",
    duration: "60",
    description:
      "A gentle massage using flowing strokes to promote relaxation.",
    features: ["Gentle massage", "Flowing strokes"],
    image: "service1.jpeg",
  },
  {
    slug: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    duration: "90",
    description: "A focused massage targeting deeper muscle tension.",
    features: ["Firm pressure", "Focused muscle work"],
    image: "service14.jpeg",
  },
  {
    slug: "balinese-massage",
    name: "Balinese Massage",
    duration: "60",
    description:
      "A relaxing Balinese massage combining pressure and flowing movements.",
    features: ["Pressure techniques", "Flowing movements"],
    image: "service18.jpeg",
  },
  {
    slug: "french-aroma-massage",
    name: "French Aroma Massage",
    duration: "60",
    description:
      "A relaxing massage using aromatic oils and gentle massage techniques.",
    features: ["Aromatic oils", "Gentle massage"],
    image: "service18.jpeg",
  },
  {
    slug: "lomi-lomi-massage",
    name: "Lomi-Lomi Massage",
    duration: "60",
    description:
      "A Hawaiian-inspired massage featuring flowing, rhythmic strokes.",
    features: ["Rhythmic strokes", "Flowing movements"],
    image: "service1.jpeg",
  },
  {
    slug: "four-hand-massage",
    name: "Four Hand Massage",
    duration: "90",
    description: "A synchronized massage performed by two therapists.",
    features: ["Two therapists", "Synchronized massage"],
    image: "service8.jpeg",
  },
  {
    slug: "head-massage",
    name: "Head Massage",
    duration: "30",
    description:
      "A soothing head massage designed to ease tension and encourage relaxation.",
    features: ["Focused head massage", "Relaxation"],
    image: "service1.jpeg",
  },
  {
    slug: "back-massage",
    name: "Back Massage",
    duration: "60",
    description: "A focused massage for the back and surrounding muscles.",
    features: ["Back-focused massage", "Muscle relaxation"],
    image: "service14.jpeg",
  },
  {
    slug: "foot-reflexology",
    name: "Foot Reflexology",
    duration: "60",
    description:
      "A foot massage using pressure techniques for relaxation and comfort.",
    features: ["Foot massage", "Pressure techniques"],
    image: "service1.jpeg",
  },
  {
    slug: "heritage-ladies-special",
    name: "Heritage Ladies Special",
    duration: "90",
    description: "A special spa experience designed for ladies.",
    features: ["Ladies spa experience", "Relaxation"],
    image: "service18.jpeg",
  },
 
  {
    slug: "full-body-massage-scrub",
    name: "Full Body Massage + Scrub",
    duration: "90",
    description: "A full body massage combined with a body scrub.",
    features: ["Full-body massage", "Body scrub"],
    image: "service13.jpeg",
  },
  {
    slug: "full-body-thai-massage-scrub",
    name: "Full Body Thai Massage + Scrub",
    duration: "90",
    description: "A traditional Thai massage combined with a body scrub.",
    features: ["Thai massage", "Body scrub"],
    image: "service13.jpeg",
  },
  {
    slug: "four-hand-massage-scrub",
    name: "Four Hand Massage + Scrub",
    duration: "90",
    description:
      "A synchronized four-hand massage combined with a body scrub.",
    features: ["Four-hand massage", "Body scrub"],
    image: "service8.jpeg",
  },
  {
    slug: "full-body-oil-massage-jacuzzi",
    name: "Full Body Oil Massage + Jacuzzi",
    duration: "120",
    description:
      "A full body oil massage combined with a relaxing jacuzzi session.",
    features: ["Oil massage", "Jacuzzi session"],
    image: "service11.jpeg",
  },
  {
    slug: "full-body-thai-massage-jacuzzi",
    name: "Full Body Thai Massage + Jacuzzi",
    duration: "120",
    description: "A traditional Thai massage combined with a jacuzzi session.",
    features: ["Thai massage", "Jacuzzi session"],
    image: "service16.jpeg",
  },
  {
    slug: "full-body-massage-scrub-jacuzzi",
    name: "Full Body Massage + Scrub + Jacuzzi",
    duration: "120",
    description: "A full body massage, body scrub, and jacuzzi experience.",
    features: ["Full-body massage", "Body scrub", "Jacuzzi session"],
    image: "service11.jpeg",
  },
  {
    slug: "full-body-thai-massage-scrub-jacuzzi",
    name: "Full Body Thai Massage + Scrub + Jacuzzi",
    duration: "120",
    description:
      "A Thai massage combined with a body scrub and jacuzzi session.",
    features: ["Thai massage", "Body scrub", "Jacuzzi session"],
    image: "service16.jpeg",
  },
  {
    slug: "jacuzzi-massage",
    name: "Jacuzzi Massage",
    duration: "120",
    description: "A spa relaxation experience featuring a jacuzzi session.",
    features: ["Jacuzzi session", "Spa relaxation"],
    image: "service11.jpeg",
  },
  {
    slug: "four-hand-massage-jacuzzi",
    name: "Four Hand Massage + Jacuzzi",
    duration: "120",
    description:
      "A synchronized four-hand massage combined with a jacuzzi session.",
    features: ["Four-hand massage", "Jacuzzi session"],
    image: "service16.jpeg",
  },
  {
    slug: "four-hand-massage-scrub-jacuzzi",
    name: "Four Hand Massage + Scrub + Jacuzzi",
    duration: "120",
    description:
      "A four-hand massage combined with a body scrub and jacuzzi session.",
    features: ["Four-hand massage", "Body scrub", "Jacuzzi session"],
    image: "service11.jpeg",
  },
  {
    slug: "four-hand-couple-special",
    name: "Four Hand Couple Special Treatment",
    duration: "90",
    description:
      "A special couples spa package featuring a four-hand massage experience.",
    features: ["Couples package", "Four-hand massage"],
    image: "service8.jpeg",
  },
  {
    slug: "four-hand-couple-jacuzzi",
    name: "Four Hand Couple Treatment + Jacuzzi",
    duration: "120",
    description:
      "A couples spa package combining a four-hand massage experience with a jacuzzi session.",
    features: ["Couples package", "Four-hand massage", "Jacuzzi session"],
    image: "service9.jpeg",
  },
];

export const services = serviceList.map((service, index) => ({
  id: index + 1,
  slug: service.slug,
  name: service.name,
  title: service.name,
  description: service.description,
  duration: service.duration,
  duration1: `${service.duration} min`,
  duration2: "",
  price: "Price on call",
  features: service.features,
  thumbnail: `/uploads/services/${service.image}`,
  backgroundImage: `/uploads/services/${service.image}`,
  call: SPA_PHONE_NUMBER,
  whatsapp: `${SPA_WHATSAPP_URL}?text=${encodeURIComponent(
    `Hello Green View Cottages & Spa! I would like to enquire about ${service.name}, including price and availability.`
  )}`,
}));

export default services;