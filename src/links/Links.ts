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

export const serveSection = () => {
  const t = useTranslations("serveSection");

  return [
    { id: 1, icon: "◆", text: t("SectionSecondTexts.text1") },
    { id: 2, icon: "◆", text: t("SectionSecondTexts.text2") },
    { id: 3, icon: "◆", text: t("SectionSecondTexts.text3") },
    { id: 4, icon: "◆", text: t("SectionSecondTexts.text4") },
    { id: 5, icon: "◆", text: t("SectionSecondTexts.text5") },
    { id: 6, icon: "◆", text: t("SectionSecondTexts.text6") },
    { id: 7, icon: "◆", text: t("SectionSecondTexts.text7") },
    { id: 8, icon: "◆", text: t("SectionSecondTexts.text8") },
    { id: 9, icon: "◆", text: t("SectionSecondTexts.text9") },
    { id: 10, icon: "◆", text: t("SectionSecondTexts.text10") },
    { id: 11, icon: "◆", text: t("SectionSecondTexts.text11") },
    { id: 12, icon: "◆", text: t("SectionSecondTexts.text12") }
  ];
};