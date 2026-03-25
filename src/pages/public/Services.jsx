import { useState } from "react";
import {
    ArrowRight,
    Briefcase,
    Users,
    BookOpen,
    ClipboardCheck,
    Calculator,
    FileText,
    UsersRound,
    ChevronDown,
} from "lucide-react";

const adviceItems = [
    {
        id: 1,
        icon: BookOpen,
        title: "Yeni başlayan mühasiblər üçün karyera məsləhətləri",
        accent: "blue",
        content:
            "Mühasibatlığa yeni başlayırsınızsa, ilkin mərhələdə 1C, Excel və vergi hesabatlarının əsas məntiqini yaxşı mənimsəyin. Praktiki tapşırıqlarla portfel yaradın və hər ay ən az bir real case üzərində işləyin.",
    },
    {
        id: 2,
        icon: Users,
        title: "Yeni başlayan HR (kadr kargüzarı) mütəxəssisləri üçün məsləhətlər",
        accent: "green",
        content:
            "HR sahəsində güclü başlanğıc üçün əmək qanunvericiliyini və sənəd dövriyyəsini öyrənin. Namizəd dəyərləndirmə, ünsiyyət və müsahibə bacarıqlarınızı inkişaf etdirin. Kiçik şirkətlərdə təcrübə toplamaq sizi sürətlə irəli aparacaq.",
    },
    {
        id: 3,
        icon: Briefcase,
        title: "İş müsahibəsinə hazırlıq və CV strategiyası",
        accent: "blue",
        content:
            "CV-ni hər vakansiyaya uyğunlaşdırın, nəticə yönümlü cümlələr yazın və müsahibədə STAR metodundan istifadə edin. Güclü tərəflərinizi konkret nümunələrlə təqdim edin və şirkət haqqında əvvəlcədən araşdırma aparın.",
    },
];

const serviceTracks = [
    {
        title: "Mühasibatlıq",
        desc: "Vergi, 1C və maliyyə hesabatları üzrə praktiki yönümlü təlimlər.",
        icon: Calculator,
        color: "blue",
    },
    {
        title: "HR və Kadr Kargüzarlığı",
        desc: "İşə qəbul, sənədləşmə və əmək qanunvericiliyi üzrə sistemli hazırlıq.",
        icon: UsersRound,
        color: "green",
    },
    {
        title: "Karyera Hazırlığı",
        desc: "CV, müsahibə və peşəkar təqdimat bacarıqları ilə iş bazarına çıxış.",
        icon: FileText,
        color: "blue",
    },
];

const heroStats = [
    { label: "Mentor", value: "25+" },
    { label: "Praktiki Tapşırıq", value: "120+" },
    { label: "Karyera Dəstəyi", value: "100%" },
];

function ServicesHero() {
    return (
        <div className="relative overflow-hidden bg-linear-to-b from-blue-100/85 via-blue-50 to-white">
            <div className="pointer-events-none absolute -right-20 top-8 h-56 w-56 rounded-full bg-green-300/30 blur-3xl" />
            <div className="pointer-events-none absolute -left-12 bottom-0 h-48 w-48 rounded-full bg-blue-300/40 blur-2xl" />

            <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-16 text-center sm:px-6 lg:px-8 lg:pt-20">
                <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                    <Briefcase size={14} className="mr-2" />
                    Karyera İnkişafı
                </span>

                <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                    Karyera Məsləhətləri
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                    Mühasibatlıq və İnsan Resursları sahələrində uğurlu karyera qurmaq üçün
                    praktiki istiqamətlər və real bazar tövsiyələri.
                </p>

                <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
                    {heroStats.map((item) => (
                        <div
                            key={item.label}
                            className="rounded-2xl border border-blue-100 bg-white/90 px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                        >
                            <p className="text-2xl font-extrabold text-blue-800">{item.value}</p>
                            <p className="mt-1 text-sm font-medium text-slate-600">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ServiceTracks() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-green-700">İstiqamətlər</p>
                    <h2 className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl">Xidmət Bölmələrimiz</h2>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {serviceTracks.map((track) => {
                    const Icon = track.icon;
                    const themeClass =
                        track.color === "green"
                            ? "border-green-200 bg-green-100/65"
                            : "border-blue-200 bg-blue-100/65";

                    return (
                        <article
                            key={track.title}
                            className={`group rounded-2xl border ${themeClass} p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                        >
                            <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-white text-blue-700 shadow-sm transition-transform duration-300 group-hover:scale-105">
                                <Icon size={20} />
                            </span>
                            <h3 className="text-lg font-bold text-slate-900">{track.title}</h3>
                            <p className="mt-2 text-sm leading-7 text-slate-600">{track.desc}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

function AdviceAccordion({ items, openId, onToggle }) {
    return (
        <div className="space-y-4">
            {items.map((item, index) => {
                const Icon = item.icon;
                const isOpen = openId === item.id;
                const cardColor =
                    item.accent === "green"
                        ? "border-green-200 bg-green-100/60"
                        : "border-blue-200 bg-blue-100/65";

                return (
                    <article
                        key={item.id}
                        className={`overflow-hidden rounded-2xl border ${cardColor} shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md`}
                        style={{ animationDelay: `${index * 80}ms` }}
                    >
                        <button
                            type="button"
                            onClick={() => onToggle(item.id)}
                            className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                        >
                            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-blue-600 shadow-sm">
                                    <Icon size={18} />
                                </span>

                                <h3 className="text-base font-bold text-slate-800 sm:text-xl">
                                    {item.title}
                                </h3>
                            </div>

                            <ChevronDown
                                size={22}
                                className={`shrink-0 text-slate-600 transition-transform duration-300 ${
                                    isOpen ? "rotate-180" : "rotate-0"
                                }`}
                            />
                        </button>

                        <div
                            className={`grid transition-all duration-300 ${
                                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                            <div className="overflow-hidden">
                                <div className="border-t border-white/70 px-5 pb-5 pt-4 sm:px-6">
                                    <p className="text-sm leading-7 text-slate-700 sm:text-base">{item.content}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}

function Services() {
    const [openId, setOpenId] = useState(1);

    const toggleItem = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="bg-slate-100">
            <ServicesHero />

            <ServiceTracks />

            <div className="mx-auto max-w-7xl px-4 pb-8 pt-2 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Praktiki Məsləhətlər</p>
                    <h2 className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                        Açılıb-Bağlanan Karyera Tövsiyələri
                    </h2>
                </div>

                <AdviceAccordion items={adviceItems} openId={openId} onToggle={toggleItem} />
            </div>

            <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {[
                        {
                            icon: BookOpen,
                            title: "Baza Bacarıqlar",
                            text: "Əsas biliklər və terminlər üzrə möhkəm baza formalaşdırılır.",
                        },
                        {
                            icon: ClipboardCheck,
                            title: "Praktiki Tapşırıqlar",
                            text: "Real iş ssenarilərinə uyğun məşqlərlə təcrübə artırılır.",
                        },
                        {
                            icon: Users,
                            title: "Mentor Dəstəyi",
                            text: "Mütəxəssislərlə geribildirim və düzgün istiqamətləndirmə verilir.",
                        },
                        {
                            icon: Briefcase,
                            title: "İşə Hazırlıq",
                            text: "CV, müsahibə və peşəkar təqdimatla iş bazarına çıxış sürətlənir.",
                        },
                    ].map((step, idx) => {
                        const Icon = step.icon;

                        return (
                            <article
                                key={step.title}
                                className="rounded-2xl border border-white bg-white/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                style={{ animationDelay: `${idx * 90}ms` }}
                            >
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-100 text-blue-700">
                                        <Icon size={18} />
                                    </span>
                                    <span className="text-xs font-bold text-slate-400">0{idx + 1}</span>
                                </div>
                                <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                                <p className="mt-2 text-sm leading-7 text-slate-600">{step.text}</p>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-7 rounded-3xl border border-blue-200 bg-linear-to-r from-blue-100 to-green-100 p-6 shadow-sm sm:p-8">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Növbəti Addım</p>
                            <h3 className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                                Karyeranızı bu gün planlamağa başlayın
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                                Sizə uyğun istiqaməti seçin və peşəkar inkişaf yol xəritənizi bizimlə qurun.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
                        >
                            Konsultasiya Al
                            <ArrowRight size={16} className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
