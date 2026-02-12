import { useTranslation } from '../i18n';

const WhatsAppButton = () => {
    const { t } = useTranslation();
    const phoneNumber = '905520000034';
    const message = encodeURIComponent(t('whatsapp.message'));
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            // className kısmına "outline-none" ve "focus:ring-0" eklendi
            className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-2 bg-[#25D366] rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 group outline-none focus:outline-none focus:ring-0"
            aria-label="WhatsApp"
        >
            <span className="text-white font-bold text-base flex items-center gap-2">
                {t('whatsapp.hi')} <span className="animate-wave text-xl">👋</span>
            </span>
            <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white">
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.166 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.828-6.81-8.066-7.126-.23-.316-1.93-2.57-1.93-4.9s1.222-3.476 1.656-3.952c.434-.476.948-.596 1.264-.596.316 0 .632.004.908.016.292.014.684-.11 1.07.816.39.948 1.328 3.242 1.444 3.476.118.234.196.508.04.816-.158.316-.236.512-.47.79-.234.276-.494.618-.704.828-.234.234-.478.49-.206.962.274.47 1.216 2.006 2.612 3.25 1.794 1.598 3.306 2.094 3.776 2.328.47.234.746.196 1.02-.118.274-.316 1.178-1.374 1.492-1.848.316-.476.632-.394 1.068-.236.434.158 2.762 1.302 3.234 1.538.47.236.786.354.904.55.116.196.116 1.138-.274 2.238z" />
            </svg>
        </a>
    );
};

export default WhatsAppButton;