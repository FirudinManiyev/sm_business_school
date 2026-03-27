import { BookOpen, Users, GraduationCap, TrendingUp, Clock3, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet";

function Dashboard() {
    const stats = [
        {
            title: "Courses",
            value: 12,
            icon: <BookOpen size={20} />,
            bg: "bg-blue-600",
        },
        {
            title: "Students",
            value: 340,
            icon: <GraduationCap size={20} />,
            bg: "bg-blue-500",
        },
        {
            title: "Trainers",
            value: 8,
            icon: <Users size={20} />,
            bg: "bg-blue-700",
        },
    ];

    return (
        <section className="space-y-6">
            <Helmet>
                <title>SM Business School - Admin</title>
            </Helmet>

            <div className="rounded-3xl border border-blue-100 bg-blue-50/50 p-5 shadow-sm sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Overview</p>
                        <h2 className="mt-1 text-3xl font-extrabold text-slate-900">Dashboard</h2>
                        <p className="mt-1 text-sm text-slate-600">Platformanın son vəziyyətini buradan izləyin.</p>
                    </div>

                    <div className="inline-flex items-center rounded-2xl border border-blue-200 bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                        <TrendingUp size={16} className="mr-2" />
                        System active
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500">{item.title}</p>
                                <h3 className="mt-1 text-3xl font-extrabold text-slate-900">{item.value}</h3>
                            </div>

                            <div className={`grid h-11 w-11 place-items-center rounded-xl text-white shadow-sm ${item.bg}`}>
                                {item.icon}
                            </div>
                        </div>

                        <div className="mt-4 flex items-center text-xs font-semibold text-slate-500">
                            <CheckCircle2 size={14} className="mr-1 text-green-600" />
                            Updated now
                        </div>
                    </div>
                ))}

            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="mb-3 text-lg font-bold text-slate-900">
                        Recent Activity
                    </h3>

                    <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex items-start gap-2">
                            <span className="mt-0.5 text-green-600"><Clock3 size={14} /></span>
                            + New student added
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-0.5 text-blue-600"><Clock3 size={14} /></span>
                            + New course created
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-0.5 text-slate-600"><Clock3 size={14} /></span>
                            + Trainer updated
                        </li>
                    </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="mb-3 text-lg font-bold text-slate-900">
                        Quick Info
                    </h3>

                    <p className="text-sm leading-7 text-slate-600">
                        Admin paneldən kurslar, tələbələr, təlimçilər və bloq məzmunlarını idarə edə bilərsiniz.
                        Məlumatlar cədvəldə real vaxtda yenilənir və əməliyyatlar üçün modal interfeys istifadə olunur.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;