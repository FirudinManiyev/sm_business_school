import { useMemo, useState } from "react";
import { Mail, MapPin, MessageCircle, PhoneCall, SendHorizonal } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Helmet } from "react-helmet";

const socialLinks = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/smbusinessschool/",
        icon: FaFacebookF,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/smbusinessschool/",
        icon: FaInstagram,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/showcase/smbusinessschool/",
        icon: FaLinkedinIn,
    },
];

const initialForm = {
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
};

function Contact() {
    const [formData, setFormData] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const inputClass = useMemo(
        () =>
            "w-full rounded-2xl border bg-white/95 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-300 focus:-translate-y-0.5 focus:border-blue-400 focus:shadow-md focus:shadow-blue-100",
        []
    );

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const validate = () => {
        const nextErrors = {};

        if (!formData.fullName.trim()) nextErrors.fullName = "Ad və soyad mütləqdir.";
        if (!formData.phone.trim()) nextErrors.phone = "Telefon nömrəsi mütləqdir.";
        if (!formData.email.trim()) {
            nextErrors.email = "Email mütləqdir.";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            nextErrors.email = "Email formatı düzgün deyil.";
        }
        if (!formData.subject.trim()) nextErrors.subject = "Mövzu seçin.";
        if (!formData.message.trim()) {
            nextErrors.message = "Mesaj boş ola bilməz.";
        } else if (formData.message.trim().length < 10) {
            nextErrors.message = "Mesaj ən az 10 simvol olmalıdır.";
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validate()) return;

        setSubmitted(true);
        setFormData(initialForm);

        setTimeout(() => {
            setSubmitted(false);
        }, 3500);
    };

    return (
        <>
            <Helmet>
                <title>Əlaqə</title>
            </Helmet>
            <section className="relative overflow-hidden bg-slate-100 py-12 sm:py-16">
                <div className="pointer-events-none absolute -left-28 top-14 h-64 w-64 rounded-full bg-blue-300/30 blur-3xl" />
                <div className="pointer-events-none absolute -right-20 bottom-6 h-72 w-72 rounded-full bg-green-300/30 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                            <MessageCircle size={15} className="mr-2" />
                            Bizimlə Əlaqə
                        </span>
                        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                            Sualınız var? Biz yazmağa hazırıq.
                        </h1>
                        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                            Təlimlər, proqramlar və əməkdaşlıq imkanları barədə bizimlə əlaqə saxlayın.
                            Komandamız sizə ən qısa zamanda geri dönüş edəcək.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                        <div className="rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-8">
                            <h2 className="text-2xl font-bold text-slate-900">Əlaqə Məlumatları</h2>
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                Sizə uyğun vaxtda bizimlə əlaqə saxlayın. Təklif və suallarınızı məmnuniyyətlə
                                cavablandırarıq.
                            </p>

                            <div className="mt-6 space-y-4">
                                <div className="group flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/70">
                                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-blue-700 shadow-sm">
                                        <PhoneCall size={18} />
                                    </span>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Telefon</p>
                                        <p className="mt-1 text-sm font-semibold text-slate-800">(+994) 50 263 11 97</p>
                                    </div>
                                </div>

                                <div className="group flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-green-200 hover:bg-green-50/70">
                                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-green-700 shadow-sm">
                                        <Mail size={18} />
                                    </span>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Email</p>
                                        <p className="mt-1 text-sm font-semibold text-slate-800">smbs.workspace@gmail.com</p>
                                    </div>
                                </div>

                                <div className="group flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/70">
                                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-blue-700 shadow-sm">
                                        <MapPin size={18} />
                                    </span>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Ünvan</p>
                                        <p className="mt-1 text-sm font-semibold text-slate-800">Bakı, Azərbaycan</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-7 border-t border-slate-100 pt-6">
                                <p className="text-sm font-semibold text-slate-700">Sosial media</p>
                                <div className="mt-3 flex items-center gap-2">
                                    {socialLinks.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={item.label}
                                                className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-green-400 hover:bg-green-50 hover:text-green-700"
                                            >
                                                <Icon size={14} />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-green-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-8">
                            <h2 className="text-2xl font-bold text-slate-900">Mesaj Göndər</h2>
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                Formu doldurun, komandamız sizə ən qısa zamanda geri dönüş etsin.
                            </p>

                            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                                <div>
                                    <input
                                        name="fullName"
                                        type="text"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Ad və Soyad"
                                        className={`${inputClass} ${errors.fullName ? "border-red-300" : "border-slate-200"}`}
                                    />
                                    {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <input
                                            name="phone"
                                            type="text"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Telefon"
                                            className={`${inputClass} ${errors.phone ? "border-red-300" : "border-slate-200"}`}
                                        />
                                        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                                    </div>

                                    <div>
                                        <input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email"
                                            className={`${inputClass} ${errors.email ? "border-red-300" : "border-slate-200"}`}
                                        />
                                        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                                    </div>
                                </div>

                                <div>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`${inputClass} ${errors.subject ? "border-red-300" : "border-slate-200"}`}
                                    >
                                        <option value="">Mövzu seçin</option>
                                        <option value="Təlimlər">Təlimlər</option>
                                        <option value="Qiymətlər">Qiymətlər</option>
                                        <option value="Korporativ əməkdaşlıq">Korporativ əməkdaşlıq</option>
                                        <option value="Digər">Digər</option>
                                    </select>
                                    {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject}</p>}
                                </div>

                                <div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="Mesajınızı yazın..."
                                        className={`${inputClass} resize-none ${errors.message ? "border-red-300" : "border-slate-200"}`}
                                    />
                                    {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center rounded-2xl bg-linear-to-r from-blue-600 to-green-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                                >
                                    Mesajı Göndər
                                    <SendHorizonal size={16} className="ml-2" />
                                </button>

                                {submitted && (
                                    <p className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                                        Mesajınız uğurla göndərildi. Tezliklə sizinlə əlaqə saxlayacağıq.
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
