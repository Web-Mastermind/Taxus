import { useTranslations } from "next-intl";

export const navLinks = () => {
  const t = useTranslations("Header");

  return [
    { id: 1, to: "/", title: t("services") },
    { id: 2, to: "/banking", title: t("banking") },
    { id: 3, to: "/about", title: t("about") },
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

// export const servicesSection = [
//   { id: 1, title: "Company registration", text: "We ensure the processes of setting up and maintenance of a company, as well as search for local personnel, sale of ready-made companies, and liquidations.", to: "/" },
//   { id: 2, title: "Corporate accounts", text: "We assist in opening both bank and EMI accounts, as well as getting corporate cards and even LEI numbers for investors.", to: "/" },
//   { id: 3, title: "Obtaining Licenses", text: "Some businesses are under specific state regulations. We accompany you while getting Gaming licenses, EMI licenses and Crypto licenses.", to: "/" },
//   { id: 4, title: "Payment processing", text: "The full scope of services relating to merchant account opening with reliable payment systems, PCI DSS certifications, chargeback prevention and KYC verifications for your end-users.", to: "/" },
//   { id: 5, title: "Accounting & Audit", text: "We take all the hassle of preparation and submission of reports, accounting, and audit procedures. We keep an eye on deadlines for VAT, OSS, and VIES periods to let you concentrate on business.", to: "/" },
//   { id: 6, title: "Contract review and drafting", text: "No business can operate without proper contracts for every aspect – Documents for Websites, NDA, Marketing Agreements, Consulting Agreements, Software Development Agreements, License Agreements, etc.", to: "/" },
//   { id: 7, title: "Corporate Structuring", text: "We can enhance your current corporate structure and offer tax planning & asset protection measures.", to: "/" },
//   { id: 8, title: "IP & TM registration", text: "Intellectual property is a valuable asset for any IT company. With our help, you can protect your trademark or logo in your country or around the world.", to: "/" }
// ]

export const servicesSection = () => {
  const t = useTranslations("servicesSection");

  return [
    { id: 1, title: t("Services.title1"), text: t("Services.text1"), to: "/" },
    { id: 2, title: t("Services.title2"), text: t("Services.text2"), to: "/" },
    { id: 3, title: t("Services.title3"), text: t("Services.text3"), to: "/" },
    { id: 4, title: t("Services.title4"), text: t("Services.text4"), to: "/" },
    { id: 5, title: t("Services.title5"), text: t("Services.text5"), to: "/" },
    { id: 6, title: t("Services.title6"), text: t("Services.text6"), to: "/" },
    { id: 7, title: t("Services.title7"), text: t("Services.text7"), to: "/" },
    { id: 8, title: t("Services.title8"), text: t("Services.text8"), to: "/" }
  ];
};

export const bankingSection = () => {
  const t = useTranslations("bankingSection")

  return [
    { id: 1, icon: "◆", text: t("subText1") },
    { id: 2, icon: "◆", text: t("subText2") },
    { id: 3, icon: "◆", text: t("subText3") },
    { id: 4, icon: "◆", text: t("subText4") }
  ]
};

export const processSection = () => {
  const t = useTranslations("processSection");

  return [
    { id: 1, count: "1", title: t("process.title1"), text: t("process.text1"), to: "/" },
    { id: 2, count: "2", title: t("process.title2"), text: t("process.text2"), to: "/" },
    { id: 3, count: "3", title: t("process.title3"), text: t("process.text3"), to: "/" },
    { id: 4, count: "4", title: t("process.title4"), text: t("process.text4"), to: "/" },
    { id: 5, count: "5", title: t("process.title5"), text: t("process.text5"), to: "/" },
    { id: 6, count: "6", title: t("process.title6"), text: t("process.text6"), to: "/" }
  ];
};

export const benefitsSection = () => {
  const t = useTranslations("benefitsSection");

  return [
    { id: 1, img: "/assets/icons/TeamIcon.svg", title: t("Benefits.title1"), text: t("Benefits.text1") },
    { id: 2, img: "/assets/icons/StrategyIcon.svg", title: t("Benefits.title2"), text: t("Benefits.text2") },
    { id: 3, img: "/assets/icons/EffectiveIcon.svg", title: t("Benefits.title3"), text: t("Benefits.text3") },
    { id: 4, img: "/assets/icons/TargetIcon.svg", title: t("Benefits.title4"), text: t("Benefits.text4") }
  ]
};

export const reviewsSection = () => {
  const t = useTranslations("reviewSection");

  return [
    { id: 1, text: t("Benefits.text1"), name: "Elena S.", job: "CLO" },
    { id: 2, text: t("Benefits.text2"), name: "Jason C.", job: "Co-founder" },
    { id: 3, text: t("Benefits.text3"), name: "Denys V.", job: "CEO" },
  ]
};

export const footer = () => {
  const t = useTranslations("footer");

  return {
    footerItems: {
      Services: [
        { id: 1, text: t("services.text1"), to: "/" },
        { id: 2, text: t("services.text2"), to: "/" },
        { id: 3, text: t("services.text3"), to: "/" },
        { id: 4, text: t("services.text4"), to: "/" },
        { id: 5, text: t("services.text5"), to: "/" }
      ],
      Company: [
        { id: 1, text: t("company.text1"), to: "/about" },
        { id: 2, text: t("company.text2"), to: "/" },
        { id: 3, text: t("company.text3"), to: "/" },
        { id: 4, text: t("company.text4"), to: "/" },
        { id: 5, text: t("company.text5"), to: "/" },
        { id: 6, text: t("company.text6"), to: "/" }
      ],
      Legal: [
        { id: 1, text: t("legal.text1"), to: "/" },
        { id: 2, text: t("legal.text2"), to: "/" },
        { id: 3, text: t("legal.text3"), to: "/" },
      ]
    }
  };
}

export const aboutPage = () => {
  const t = useTranslations("aboutPage");

  return [
    { id: 1, title: t("pageSubItems.title1"), text: t("pageSubItems.text1") },
    { id: 2, title: t("pageSubItems.title2"), text: t("pageSubItems.text2") },
    { id: 3, title: t("pageSubItems.title3"), text: t("pageSubItems.text3") }
  ]
};

export const aboutSectionIndustries = () => {
  const t = useTranslations("aboutSectionIndustries")

  return [
    { id: 1, title: t("IndustriesSubItems.title1"), text: t("IndustriesSubItems.text1") },
    { id: 2, title: t("IndustriesSubItems.title2"), text: t("IndustriesSubItems.text2") },
    { id: 3, title: t("IndustriesSubItems.title3"), text: t("IndustriesSubItems.text3") },
    { id: 4, title: t("IndustriesSubItems.title4"), text: t("IndustriesSubItems.text4") }
  ]
};

export const aboutSectionHistory = () => {
  const t = useTranslations("aboutSectionBenefits");

  return [
    { id: 1, img: "/assets/icons/TargetIcon.svg", title: t("aboutBenefitsSubItems.title1"), text: t("aboutBenefitsSubItems.text1") },
    { id: 2, img: "/assets/icons/CaseIcon.svg", title: t("aboutBenefitsSubItems.title2"), text: t("aboutBenefitsSubItems.text2") },
    { id: 3, img: "/assets/icons/ShieldIcon.svg", title: t("aboutBenefitsSubItems.title3"), text: t("aboutBenefitsSubItems.text3") },
    { id: 4, img: "/assets/icons/CostIcon.svg", title: t("aboutBenefitsSubItems.title4"), text: t("aboutBenefitsSubItems.text4") }
  ]
};


export const bankingSectionAccounts = [
  { id: 1, img: "/assets/icons/OfficeIcon.svg", title: "Business Accounts", text: "Your Business Account, wherever you are" },
  { id: 2, img: "/assets/icons/EarthIcon.svg", title: "Worldwide Payments", text: "International Business Payments" },
  { id: 3, img: "/assets/icons/EffectiveIcon.svg", title: "Business Escrow ", text: "Safeguard Your Transactions " },
  { id: 4, img: "/assets/icons/FinanceLogo.svg", title: "Corporate Cards ", text: "Create cardholders and issue your new cards!" }
]

export const bankingSectionComponent = [
  { id: 1, title: "Open an IBAN accounts", text: "Get your own IBAN accounts to easily manage your everyday" },
  { id: 2, title: "Manage your money entirely onlin", text: "Enjoy the convenience of online banking without ever needing to visit a branch." },
  { id: 3, title: "Instant Account Number Issuing", text: "Get your account number immediately and start managing your finances without delay" },
  { id: 4, title: "Multi-Currency Accounts", text: "Easily handle multiple currencies in a single account, perfect for global transactions and international customers" }
]

export const bankingSectionComponentPayments = [
  { id: 1, title: "Instant Euro Transfers", text: "Send and receive EUR instantly with the SEPA network." },
  { id: 2, title: "Cross border SWIFT payments", text: "We offer fast, secure, and transparent cross-border transfers through the SWIFT network, the global standard for international money transfers." },
  { id: 3, title: "Save Time with Bulk Payments", text: "Reduce costs and streamline transactions with bulk payments." },
  { id: 4, title: "Manage Foreign Exchange (FX)", text: "Buy, sell, and transfer foreign currencies conveniently." },
  { id: 5, title: "Local Uk Payents ", text: "Effortless transactions in GBP, leveraging Faster Payments, CHAPS, and Direct Debits " }
]