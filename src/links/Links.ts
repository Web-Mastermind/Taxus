import { useTranslations } from "next-intl";

export const navLinks = () => {
  const t = useTranslations("Header");

  return [
    { id: 1, to: "/", title: t("services") },
    { id: 2, to: "/", title: t("banking") },
    { id: 3, to: "/", title: t("about") },
    { id: 4, to: "/", title: t("blog") },
    { id: 5, to: "/", title: t("contact") }
  ];
};

export const experience = () => {
  const t = useTranslations("Main");

  return [
    { id: 1, text: t("years"), subTexts: t("yearsText") },
    { id: 2, text: t("network"), subTexts: t("networkText") },
    { id: 3, text: t("clients"), subTexts: t("clientsText") },
    { id: 4, text: t("project"), subTexts: t("projectText") }
  ];
};

export const expertise = () => {
  const t = useTranslations("expertiseSection");

  return [
    { id: 1, image: "/assets/icons/CaseIcon.svg", alt: "Case Icon", title: t("SectionFirstTexts.expertiseTitle"), text: t("SectionFirstTexts.expertiseText") },
    { id: 2, image: "/assets/icons/IdeaIcon.svg", alt: "Idea Icon", title: t("SectionSecondTexts.expertiseTitle"), text: t("SectionSecondTexts.expertiseText") },
    { id: 3, image: "/assets/icons/FinanceLogo.svg", alt: "Finance Icon", title: t("SectionThirdTexts.expertiseTitle"), text: t("SectionThirdTexts.expertiseText") },
    { id: 4, image: "/assets/icons/GlobalIcon.svg", alt: "Global Icon", title: t("SectionFourTexts.expertiseTitle"), text: t("SectionFourTexts.expertiseText") }
  ];
};

export const serveSection = [
  { id: 1, icon: "◆", text: "Software development companies" },
  { id: 2, icon: "◆", text: "E-commerce platforms" },
  { id: 3, icon: "◆", text: "Fintech projects" },
  { id: 4, icon: "◆", text: "Payment processing providers" },
  { id: 5, icon: "◆", text: "Cryptocurrency exchanges" },
  { id: 6, icon: "◆", text: "White Label" },
  { id: 7, icon: "◆", text: "IT out staff and outsource companies" },
  { id: 8, icon: "◆", text: "Social Networks" },
  { id: 9, icon: "◆", text: "Startups" },
  { id: 10, icon: "◆", text: "Mobile Apps" },
  { id: 11, icon: "◆", text: "Gaming & Gambling business" },
  { id: 12, icon: "◆", text: "Marketing platforms" }
];