const WhatsAppButton = () => {
    const phoneNumber = '905520000034';
    const message = encodeURIComponent('Merhaba, saç ekimi hakkında bilgi almak istiyorum.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300"
            aria-label="WhatsApp"
        >
            <svg viewBox="0 0 32 32" className="w-9 h-9 fill-white">
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.166 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.828-6.81-8.066-7.126-.23-.316-1.93-2.57-1.93-4.9s1.222-3.476 1.656-3.952c.434-.476.948-.596 1.264-.596.316 0 .632.004.908.016.292.014.684-.11 1.07.816.39.948 1.328 3.242 1.444 3.476.118.234.196.508.04.816-.158.316-.236.512-.47.79-.234.276-.494.618-.704.828-.234.234-.478.49-.206.962.274.47 1.216 2.006 2.612 3.25 1.794 1.598 3.306 2.094 3.776 2.328.47.234.746.196 1.02-.118.274-.316 1.178-1.374 1.492-1.848.316-.476.632-.394 1.068-.236.434.158 2.762 1.302 3.234 1.538.47.236.786.354.904.55.116.196.116 1.138-.274 2.238z" />
            </svg>
        </a>
    );
};

export default WhatsAppButton;
