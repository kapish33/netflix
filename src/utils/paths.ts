import { type Path } from "@/types/path";
import { masterUrl } from "@utils/greedy";

export const BasePath = new URL(process.env.DOMAIN ?? "https://netflix-ashy-zeta.vercel.app");

export const Home: Path = {
    path: '/',
    name: process.env.NEXT_PUBLIC_APP_NAME ?? "NetFlix",
    "aria-label": "Home",
};

const About: Path = {
    path: 'about-us',
    name: "About",
    "aria-label": "About",
};

const Services: Path = {
    path: masterUrl,
    name: "Services",
    "aria-label": "Services",
};

const Contact: Path = {
    path: masterUrl,
    name: "Contact",
    "aria-label": "Contact",
};

const PrivacyPolicy: Path = {
    path: masterUrl,
    name: "Privacy Policy",
    "aria-label": "Privacy Policy",
};

const TermsOfService: Path = {
    path: "/terms-of-service",
    name: "Terms of Service",
    "aria-label": "Terms of Service",
};

export const HeaderPaths: Path[] = [
    About,
    Services,
    Contact,
];

export const FooterPaths: Path[] = [
    Contact,
    PrivacyPolicy,
    TermsOfService,
];
