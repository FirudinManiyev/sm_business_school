import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
    const [open, setOpen] = useState(false);

    const phoneNumber = "994502631197";
    const message = "Salam, məlumat almaq istəyirəm";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">

            {/* Chat Box */}
            <div
                className={`
          bg-white shadow-xl rounded-xl p-4 w-64 transition-all duration-300
          ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}
        `}
            >
                <p className="text-sm text-gray-700 mb-3">
                    Salam 👋 Necə kömək edə bilərik?
                </p>

                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded transition"
                >
                    <FaWhatsapp size={18} />
                    WhatsApp ilə yaz
                </a>
            </div>

            {/* Button */}
            <button
                onClick={() => setOpen(!open)}
                className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full cursor-pointer shadow-lg transition transform hover:scale-110"
            >
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></span>

                <FaWhatsapp size={24} className="relative z-10" />

                <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-300 border-2 border-white rounded-full"></span>
            </button>
        </div>
    );
}

export default WhatsAppButton;