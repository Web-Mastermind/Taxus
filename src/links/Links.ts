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
  const t = useTranslations("ExpertiseSection");

  return [
    { id: 1, image: "/assets/icons/CaseIcon.svg", alt: "Case Icon", title: t("SectionFirstTexts.expertiseTitle"), text: t("SectionFirstTexts.expertiseText") },
    { id: 2, image: "/assets/icons/IdeaIcon.svg", alt: "Idea Icon", title: t("SectionSecondTexts.expertiseTitle"), text: t("SectionSecondTexts.expertiseText") },
    { id: 3, image: "/assets/icons/FinanceLogo.svg", alt: "Finance Icon", title: t("SectionThirdTexts.expertiseTitle"), text: t("SectionThirdTexts.expertiseText") },
    { id: 4, image: "/assets/icons/GlobalIcon.svg", alt: "Global Icon", title: t("SectionFourTexts.expertiseTitle"), text: t("SectionFourTexts.expertiseText") }
  ];
};

export const serveSection = () => {
  const t = useTranslations("ServeSection");

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

export const servicesSection = () => {
  const t = useTranslations("ServicesSection");

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
  const t = useTranslations("BankingSection")

  return [
    { id: 1, icon: "◆", text: t("subText1") },
    { id: 2, icon: "◆", text: t("subText2") },
    { id: 3, icon: "◆", text: t("subText3") },
    { id: 4, icon: "◆", text: t("subText4") }
  ]
};

export const processSection = () => {
  const t = useTranslations("ProcessSection");

  return [
    { id: 1, count: "1", title: t("Process.title1"), text: t("Process.text1"), to: "/" },
    { id: 2, count: "2", title: t("Process.title2"), text: t("Process.text2"), to: "/" },
    { id: 3, count: "3", title: t("Process.title3"), text: t("Process.text3"), to: "/" },
    { id: 4, count: "4", title: t("Process.title4"), text: t("Process.text4"), to: "/" },
    { id: 5, count: "5", title: t("Process.title5"), text: t("Process.text5"), to: "/" },
    { id: 6, count: "6", title: t("Process.title6"), text: t("Process.text6"), to: "/" }
  ];
};

export const benefitsSection = () => {
  const t = useTranslations("BenefitsSection");

  return [
    { id: 1, img: "/assets/icons/TeamIcon.svg", title: t("Benefits.title1"), text: t("Benefits.text1") },
    { id: 2, img: "/assets/icons/StrategyIcon.svg", title: t("Benefits.title2"), text: t("Benefits.text2") },
    { id: 3, img: "/assets/icons/EffectiveIcon.svg", title: t("Benefits.title3"), text: t("Benefits.text3") },
    { id: 4, img: "/assets/icons/TargetIcon.svg", title: t("Benefits.title4"), text: t("Benefits.text4") }
  ]
};

export const reviewsSection = () => {
  const t = useTranslations("ReviewSection");

  return [
    { id: 1, text: t("Benefits.text1"), name: "Elena S.", job: "CLO" },
    { id: 2, text: t("Benefits.text2"), name: "Jason C.", job: "Co-founder" },
    { id: 3, text: t("Benefits.text3"), name: "Denys V.", job: "CEO" },
  ]
};

export const footer = () => {
  const t = useTranslations("Footer");

  return {
    footerItems: {
      Services: [
        { id: 1, text: t("Services.text1"), to: "/company" },
        { id: 2, text: t("Services.text2"), to: "/" },
        { id: 3, text: t("Services.text3"), to: "/" },
        { id: 4, text: t("Services.text4"), to: "/" },
        { id: 5, text: t("Services.text5"), to: "/" }
      ],
      Company: [
        { id: 1, text: t("Company.text1"), to: "/about" },
        { id: 2, text: t("Company.text2"), to: "/" },
        { id: 3, text: t("Company.text3"), to: "/" },
        { id: 4, text: t("Company.text4"), to: "/" },
        { id: 5, text: t("Company.text5"), to: "/" },
        { id: 6, text: t("Company.text6"), to: "/" }
      ],
      Legal: [
        { id: 1, text: t("Legal.text1"), to: "/" },
        { id: 2, text: t("Legal.text2"), to: "/" },
        { id: 3, text: t("Legal.text3"), to: "/" },
      ]
    }
  };
}

export const aboutPage = () => {
  const t = useTranslations("AboutPage");

  return [
    { id: 1, title: t("PageSubItems.title1"), text: t("PageSubItems.text1") },
    { id: 2, title: t("PageSubItems.title2"), text: t("PageSubItems.text2") },
    { id: 3, title: t("PageSubItems.title3"), text: t("PageSubItems.text3") }
  ]
};

export const aboutSectionIndustries = () => {
  const t = useTranslations("AboutSectionIndustries")

  return [
    { id: 1, title: t("IndustriesSubItems.title1"), text: t("IndustriesSubItems.text1") },
    { id: 2, title: t("IndustriesSubItems.title2"), text: t("IndustriesSubItems.text2") },
    { id: 3, title: t("IndustriesSubItems.title3"), text: t("IndustriesSubItems.text3") },
    { id: 4, title: t("IndustriesSubItems.title4"), text: t("IndustriesSubItems.text4") }
  ]
};

export const aboutSectionHistory = () => {
  const t = useTranslations("AboutSectionBenefits");

  return [
    { id: 1, img: "/assets/icons/TargetIcon.svg", title: t("AboutBenefitsSubItems.title1"), text: t("AboutBenefitsSubItems.text1") },
    { id: 2, img: "/assets/icons/CaseIcon.svg", title: t("AboutBenefitsSubItems.title2"), text: t("AboutBenefitsSubItems.text2") },
    { id: 3, img: "/assets/icons/ShieldIcon.svg", title: t("AboutBenefitsSubItems.title3"), text: t("AboutBenefitsSubItems.text3") },
    { id: 4, img: "/assets/icons/CostIcon.svg", title: t("AboutBenefitsSubItems.title4"), text: t("AboutBenefitsSubItems.text4") }
  ]
};


export const bankingSectionAccounts = () => {
  const t = useTranslations("BankingSectionCards");
  return [
    { id: 1, img: "/assets/icons/OfficeIcon.svg", title: t("AboutCardsSubItems.title1"), text: t("AboutCardsSubItems.text1") },
    { id: 2, img: "/assets/icons/EarthIcon.svg", title: t("AboutCardsSubItems.title2"), text: t("AboutCardsSubItems.text2") },
    { id: 3, img: "/assets/icons/EffectiveIcon.svg", title: t("AboutCardsSubItems.title3"), text: t("AboutCardsSubItems.text3") },
    { id: 4, img: "/assets/icons/FinanceLogo.svg", title: t("AboutCardsSubItems.title4"), text: t("AboutCardsSubItems.text4") }
  ]
}

export const bankingSectionAccountsRight = () => {
  const t = useTranslations("BankingSectionOffer");
  return [
    { id: 1, title: t("title1"), text: t("text1") },
    { id: 2, title: t("title2"), text: t("text2") },
    { id: 3, title: t("title3"), text: t("text3") },
    { id: 4, title: t("title4"), text: t("text4") }
  ]
}

export const bankingSectionComponentPayments = () => {
  const t = useTranslations("BankingSectionPayments");
  return [
    { id: 1, title: t("AboutPaymentsSubItems.title1"), text: t("AboutPaymentsSubItems.text1") },
    { id: 2, title: t("AboutPaymentsSubItems.title2"), text: t("AboutPaymentsSubItems.text2") },
    { id: 3, title: t("AboutPaymentsSubItems.title3"), text: t("AboutPaymentsSubItems.text3") },
    { id: 4, title: t("AboutPaymentsSubItems.title4"), text: t("AboutPaymentsSubItems.text4") },
    { id: 5, title: t("AboutPaymentsSubItems.title5"), text: t("AboutPaymentsSubItems.text5") },
  ]
}

// export const ServicesSection = [
//   { id: 1, title: "Company registration", text: "We ensure the processes of setting up and maintenance of a company, as well as search for local personnel, sale of ready-made companies, and liquidations.", to: "/" },
//   { id: 2, title: "Corporate accounts", text: "We assist in opening both bank and EMI accounts, as well as getting corporate cards and even LEI numbers for investors.", to: "/" },
//   { id: 3, title: "Obtaining Licenses", text: "Some businesses are under specific state regulations. We accompany you while getting Gaming licenses, EMI licenses and Crypto licenses.", to: "/" },
//   { id: 4, title: "Payment processing", text: "The full scope of services relating to merchant account opening with reliable payment systems, PCI DSS certifications, chargeback prevention and KYC verifications for your end-users.", to: "/" },
//   { id: 5, title: "Accounting & Audit", text: "We take all the hassle of preparation and submission of reports, accounting, and audit procedures. We keep an eye on deadlines for VAT, OSS, and VIES periods to let you concentrate on business.", to: "/" },
//   { id: 6, title: "Contract review and drafting", text: "No business can operate without proper contracts for every aspect – Documents for Websites, NDA, Marketing Agreements, Consulting Agreements, Software Development Agreements, License Agreements, etc.", to: "/" },
//   { id: 7, title: "Corporate Structuring", text: "We can enhance your current corporate structure and offer tax planning & asset protection measures.", to: "/" },
//   { id: 8, title: "IP & TM registration", text: "Intellectual property is a valuable asset for any IT company. With our help, you can protect your trademark or logo in your country or around the world.", to: "/" }
// ]

export const bankingSectionPrivate = () => {
  const t = useTranslations("BankingSectionPrivate");

  return [
    { id: 1, title: t("AboutPrivateSubItems.title1"), text: t("AboutPrivateSubItems.text1") },
    { id: 2, title: t("AboutPrivateSubItems.title2"), text: t("AboutPrivateSubItems.text2") },
    { id: 3, title: t("AboutPrivateSubItems.title3"), text: t("AboutPrivateSubItems.text3") },
    { id: 4, title: t("AboutPrivateSubItems.title4"), text: t("AboutPrivateSubItems.text4") },
    { id: 5, title: t("AboutPrivateSubItems.title5"), text: t("AboutPrivateSubItems.text5") }
  ]
}

export const bankingSectionEscrow = () => {
  const t = useTranslations("BankingSectionEscrow");
  return [
    { id: 1, img: "/assets/icons/ShieldIcon.svg", title: t("AboutEscrowSubItems.title1"), text: t("AboutEscrowSubItems.text1") },
    { id: 2, img: "/assets/icons/SafeBoxIcon.svg", title: t("AboutEscrowSubItems.title2"), text: t("AboutEscrowSubItems.text2") },
    { id: 3, img: "/assets/icons/EffectiveIcon.svg", title: t("AboutEscrowSubItems.title3"), text: t("AboutEscrowSubItems.text3") }
  ]
}

export const bankingSectionPartner = () => {
  const t = useTranslations("BankingSectionPartner");

  return [
    { id: 1, title: t("SectionPartnerSubItems.title1"), text: t("SectionPartnerSubItems.text1") },
    { id: 2, title: t("SectionPartnerSubItems.title2"), text: t("SectionPartnerSubItems.text2") },
    { id: 3, title: t("SectionPartnerSubItems.title3"), text: t("SectionPartnerSubItems.text3") },
    { id: 4, title: t("SectionPartnerSubItems.title4"), text: t("SectionPartnerSubItems.text4") },
    { id: 5, title: t("SectionPartnerSubItems.title5"), text: t("SectionPartnerSubItems.text5") },
    { id: 6, title: t("SectionPartnerSubItems.title6"), text: t("SectionPartnerSubItems.text6") }
  ]
}

export const bankingSectionFees = () => {
  const t = useTranslations("BankingSectionFees");
  return [
    { id: 1, title: t("SectionFeesTableItems.title1"), priceUK: t("SectionFeesTableItems.tableUKPrice1"), priceEU: t("SectionFeesTableItems.tableUEPrice1"), priceWorld: t("SectionFeesTableItems.worldPrice1"), priceRisk: "Lorem Ipsum" },
    { id: 2, title: t("SectionFeesTableItems.title2"), priceUK: t("SectionFeesTableItems.tableUKPrice2"), priceEU: t("SectionFeesTableItems.tableUEPrice2"), priceWorld: t("SectionFeesTableItems.worldPrice2"), priceRisk: "Lorem Ipsum" },
    { id: 3, title: t("SectionFeesTableItems.title3"), priceUK: t("SectionFeesTableItems.tableUKPrice3"), priceEU: t("SectionFeesTableItems.tableUEPrice3"), priceWorld: t("SectionFeesTableItems.worldPrice3"), priceRisk: "Lorem Ipsum" },
    { id: 4, title: t("SectionFeesTableItems.title4"), priceUK: t("SectionFeesTableItems.tableUKPrice4"), priceEU: t("SectionFeesTableItems.tableUEPrice4"), priceWorld: t("SectionFeesTableItems.worldPrice4"), priceRisk: "Lorem Ipsum" },
    { id: 5, title: t("SectionFeesTableItems.title5"), priceUK: t("SectionFeesTableItems.tableUKPrice5"), priceEU: t("SectionFeesTableItems.tableUEPrice5"), priceWorld: t("SectionFeesTableItems.worldPrice5"), priceRisk: "Lorem Ipsum" },
    { id: 6, title: t("SectionFeesTableItems.title6"), priceUK: t("SectionFeesTableItems.tableUKPrice6"), priceEU: t("SectionFeesTableItems.tableUEPrice6"), priceWorld: t("SectionFeesTableItems.worldPrice6"), priceRisk: "Lorem Ipsum" },
    { id: 7, title: t("SectionFeesTableItems.title7"), priceUK: t("SectionFeesTableItems.tableUKPrice7"), priceEU: t("SectionFeesTableItems.tableUEPrice7"), priceWorld: t("SectionFeesTableItems.worldPrice7"), priceRisk: "Lorem Ipsum" },
    { id: 8, title: t("SectionFeesTableItems.title8"), priceUK: t("SectionFeesTableItems.tableUKPrice8"), priceEU: t("SectionFeesTableItems.tableUEPrice8"), priceWorld: t("SectionFeesTableItems.worldPrice8"), priceRisk: "Lorem Ipsum" },
    { id: 9, title: t("SectionFeesTableItems.title9"), priceUK: t("SectionFeesTableItems.tableUKPrice9"), priceEU: t("SectionFeesTableItems.tableUEPrice9"), priceWorld: t("SectionFeesTableItems.worldPrice9"), priceRisk: "Lorem Ipsum" }
  ]
}

export const CompanySectionCorporate = [
  { id: 1, title: "Liability Protection", text: "By setting up a company, you can protect your personal assets from any liabilities that your business may incur. ", subText: "This means that if your company is sued or goes bankrupt, your personal assets (such as your home or savings) will be safe." },
  { id: 2, title: "Tax Advantages", text: "Depending on the country where you set up your company, you may be able to take advantage of lower tax rates or other tax incentives. ", subText: "This can save you a significant amount of money in taxes each year." },
  { id: 3, title: "Credibility and Reliability", text: "Having a properly set up company can increase your credibility with clients, partners, and investors. ", subText: "It shows that you are serious about your business and are willing to invest in its long-term success." },
  { id: 4, title: "Access to New Markets", text: "By setting up a company in a new country, you can gain access to new markets and customers. ", subText: "This can help you expand your business and increase your revenue." }
]