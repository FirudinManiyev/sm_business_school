import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import logo from "../../assets/logo.png";

const pageLinks = [
    { label: "Anasəhifə", path: "/" },
    { label: "Xidmətlər", path: "/services" },
    { label: "Haqqımızda", path: "/about" },
    { label: "Təlimlər", path: "/trainings" },
    { label: "Bloq", path: "/blog" },
    { label: "Təlimçilər", path: "/trainers" },
    { label: "Əlaqə", path: "/contact" },
    { label: "Tələbələr", path: "/students" },
];

const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/smbusinessschool/", icon: FaFacebookF },
    { label: "Instagram", href: "https://www.facebook.com/smbusinessschool/", icon: FaInstagram },
    { label: "LinkedIn", href: "https://www.linkedin.com/showcase/smbusinessschool/", icon: FaLinkedinIn },
    { label: "TikTok", href: "https://www.facebook.com/smbusinessschool/", icon: SiTiktok },
    { label: "YouTube", href: "https://www.facebook.com/smbusinessschool/", icon: FaYoutube },
];

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative border-t border-blue-100 bg-white">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-blue-50/60 via-white to-green-50/40" />

            <div className="relative mx-auto max-w-7xl px-4 pb-6 pt-14 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-4 border-b border-blue-100 pb-7 text-center md:border-none md:pb-0 md:text-left">
                        <Link
                            to="/"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3"
                        >
                            <div className="relative">
                                <div className="absolute -inset-1 rounded-full bg-linear-to-r from-blue-500 to-green-500 opacity-25 blur-md transition-opacity duration-300 group-hover:opacity-55" />
                                <img
                                    src={logo}
                                    alt="SM Business School"
                                    className="relative h-12 w-12 rounded-full border border-blue-100 object-cover"
                                />
                            </div>

                            <p className="text-lg font-extrabold uppercase tracking-[0.08em] text-blue-900">
                                SM Business School
                            </p>
                        </Link>

                        <p className="text-sm font-medium text-slate-600">
                            Pəşəkar təlimlərlə karyeranızı inkişaf etdirin. Müasir proqramlarla praktiki təcrübə.
                        </p>

                        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 md:justify-start">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-green-400 hover:bg-green-50 hover:text-green-700"
                                    >
                                        <Icon size={15} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div className="border-b border-blue-100 pb-7 text-center md:border-none md:pb-0 md:text-left lg:border-l lg:border-blue-100 lg:pl-8">
                        <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-blue-800">
                            Bütün SƏHİFƏLƏR
                        </h3>

                        <div className="mt-4 grid grid-cols-2 gap-2">
                            {pageLinks.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    rel="noopener noreferrer"
                                    className="group rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:bg-green-50 hover:text-green-700"
                                >
                                    <span className="relative inline-block after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-linear-to-r after:from-blue-600 after:to-green-500 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                                        {item.label}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="text-center md:text-left lg:border-l lg:border-green-100 lg:pl-8">
                        <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-green-800">
                            Əlaqə Məlumatları
                        </h3>
                        <div className="mt-4 space-y-3 text-sm text-slate-700">
                            <p className="flex items-start justify-center gap-3 md:justify-start">
                                <span className="mt-0.5 text-green-700">
                                    <FiPhoneCall size={16} />
                                </span>
                                <span>
                                    <span className="font-semibold text-slate-900">Nömrə:</span> (+994) 50 263 11 97
                                </span>
                            </p>
                            <p className="flex items-start justify-center gap-3 md:justify-start">
                                <span className="mt-0.5 text-blue-700">
                                    <FiMail size={16} />
                                </span>
                                <span>
                                    <span className="font-semibold text-slate-900">Email:</span> smbs.workspace@gmail.com
                                </span>
                            </p>
                            <p className="flex items-start justify-center gap-3 md:justify-start">
                                <span className="mt-0.5 text-green-700">
                                    <FiMapPin size={16} />
                                </span>
                                <span>
                                    <span className="font-semibold text-slate-900">Ünvan:</span> Bakı, Azərbaycan
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-blue-100 pt-5 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
                    <p>© {year} SM Business School. Bütün hüquqlar qorunur.</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                        Hazırladı Millisoft
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;