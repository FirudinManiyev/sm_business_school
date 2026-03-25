import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import logo from "../../assets/logo.png";

const navItems = [
    { label: "Anasəhifə", path: "/" },
    { label: "Haqqımızda", path: "/about" },
    { label: "Bloq", path: "/blog" },
    { label: "Xidmətlər", path: "/services" },
];

const mobileExtraItems = [
    { label: "Təlimçilər", path: "/trainers" },
    { label: "Təlimlər", path: "/trainings" },
    { label: "Tələbələr", path: "/students" },
];

const socialItems = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        `relative px-1 py-2 text-sm font-semibold tracking-wide transition-colors duration-300 ${
            isActive ? "text-blue-700" : "text-slate-700 hover:text-green-600"
        } after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-blue-600 after:to-green-500 after:transition-transform after:duration-300 hover:after:scale-x-100`;

    return (
        <header className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/85 backdrop-blur-xl">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between gap-4">
                    <Link to="/" className="group flex min-w-0 items-center gap-3">
                        <div className="relative">
                            <div className="absolute -inset-1 rounded-full bg-linear-to-r from-blue-500 to-green-500 opacity-30 blur-md transition-opacity duration-300 group-hover:opacity-60" />
                            <img
                                src={logo}
                                alt="SM Business School"
                                className="relative h-12 w-12 rounded-full border border-blue-100 object-cover shadow-sm"
                            />
                        </div>

                        <div className="min-w-0 leading-tight">
                            <p className="truncate text-base font-extrabold uppercase tracking-[0.08em] text-blue-800 sm:text-lg">
                                SM Business School
                            </p>
                            <p className="truncate text-xs font-medium text-slate-500 sm:text-sm">
                                Təhsildə peşəkar inkişaf mərkəzi
                            </p>
                        </div>
                    </Link>

                    <nav className="hidden items-center gap-7 lg:flex">
                        {navItems.map((item) => (
                            <NavLink key={item.path} to={item.path} className={linkClass}>
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-3 lg:flex">
                        <NavLink
                            to="/contact"
                            className="rounded-full bg-linear-to-r from-blue-600 to-green-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-200"
                        >
                            Əlaqə
                        </NavLink>

                        <span className="h-6 w-px bg-slate-300" aria-hidden="true" />

                        <div className="ml-1 flex items-center gap-2">
                            {socialItems.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-green-400 hover:bg-green-50 hover:text-green-600"
                                    >
                                        <Icon size={14} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => setMobileOpen((prev) => !prev)}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                        className="grid h-11 w-11 place-items-center rounded-xl border border-blue-100 bg-white/90 text-blue-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow md:h-12 md:w-12 lg:hidden"
                    >
                        {mobileOpen ? (
                            <HiOutlineXMark size={24} className="text-green-700" />
                        ) : (
                            <HiOutlineBars3 size={24} />
                        )}
                    </button>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-300 lg:hidden ${
                        mobileOpen ? "max-h-105 pb-5" : "max-h-0"
                    }`}
                >
                    <div className="mt-2 rounded-2xl border border-blue-100 bg-linear-to-b from-blue-50/70 to-white p-4 shadow-sm">
                        <nav className="flex flex-col gap-1">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setMobileOpen(false)}
                                    className={({ isActive }) =>
                                        `rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-300 ${
                                            isActive
                                                ? "bg-blue-100 text-blue-800"
                                                : "text-slate-700 hover:bg-green-50 hover:text-green-700"
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}

                            {mobileExtraItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setMobileOpen(false)}
                                    className={({ isActive }) =>
                                        `rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-300 ${
                                            isActive
                                                ? "bg-blue-100 text-blue-800"
                                                : "text-slate-700 hover:bg-green-50 hover:text-green-700"
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </nav>

                        <div className="mt-4 flex items-center justify-between gap-3">
                            <NavLink
                                to="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="flex-1 rounded-xl bg-linear-to-r from-blue-600 to-green-500 px-4 py-3 text-center text-sm font-semibold text-white"
                            >
                                Əlaqə
                            </NavLink>

                            <span className="h-7 w-px bg-slate-300" aria-hidden="true" />

                            <div className="flex items-center gap-2">
                                {socialItems.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            aria-label={social.label}
                                            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-600 transition-colors duration-300 hover:border-green-400 hover:text-green-600"
                                        >
                                            <Icon size={15} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;