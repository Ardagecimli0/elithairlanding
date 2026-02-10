import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useTranslation } from '../i18n';

interface QuizAnswers {
    gender: string;
    hairLoss: string;
    hairColor: string;
    duration: string;
    previousTransplant: string;
    timeline: string;
}

interface ContactForm {
    name: string;
    email: string;
    countryCode: string;
    phone: string;
    commercialConsent: boolean;
    privacyConsent: boolean;
}

// Step definitions using i18n keys - icons stay the same regardless of language
const getSteps = (t: (key: string) => string) => [
    {
        question: t('quiz.steps.gender.question'),
        key: 'gender' as keyof QuizAnswers,
        options: [
            { label: t('quiz.steps.gender.female'), icon: '👩' },
            { label: t('quiz.steps.gender.male'), icon: '👨' },
        ],
    },
    {
        question: t('quiz.steps.hairLoss.question'),
        key: 'hairLoss' as keyof QuizAnswers,
        options: [
            { label: t('quiz.steps.hairLoss.receding'), icon: '📉' },
            { label: t('quiz.steps.hairLoss.crownBald'), icon: '🔵' },
            { label: t('quiz.steps.hairLoss.topThinning'), icon: '⭕' },
            { label: t('quiz.steps.hairLoss.thinning'), icon: '🌾' },
            { label: t('quiz.steps.hairLoss.beard'), icon: '🧔' },
        ],
    },
    {
        question: t('quiz.steps.hairColor.question'),
        key: 'hairColor' as keyof QuizAnswers,
        options: [
            { label: t('quiz.steps.hairColor.blonde'), icon: '🟡' },
            { label: t('quiz.steps.hairColor.brown'), icon: '🟤' },
            { label: t('quiz.steps.hairColor.grey'), icon: '⚪' },
            { label: t('quiz.steps.hairColor.red'), icon: '🔴' },
            { label: t('quiz.steps.hairColor.black'), icon: '⚫' },
        ],
    },
    {
        question: t('quiz.steps.duration.question'),
        key: 'duration' as keyof QuizAnswers,
        options: [
            { label: t('quiz.steps.duration.lessThan1'), icon: '📅' },
            { label: t('quiz.steps.duration.1to3'), icon: '📆' },
            { label: t('quiz.steps.duration.3to5'), icon: '🗓️' },
            { label: t('quiz.steps.duration.moreThan5'), icon: '⏳' },
        ],
    },
    {
        question: t('quiz.steps.previousTransplant.question'),
        key: 'previousTransplant' as keyof QuizAnswers,
        options: [
            { label: t('quiz.steps.previousTransplant.yes'), icon: '✅' },
            { label: t('quiz.steps.previousTransplant.no'), icon: '❌' },
        ],
    },
    {
        question: t('quiz.steps.timeline.question'),
        key: 'timeline' as keyof QuizAnswers,
        options: [
            { label: t('quiz.steps.timeline.asap'), icon: '⚡' },
            { label: t('quiz.steps.timeline.3months'), icon: '📅' },
            { label: t('quiz.steps.timeline.12months'), icon: '📆' },
            { label: t('quiz.steps.timeline.justInfo'), icon: 'ℹ️' },
        ],
    },
];

// International phone validation rules: [minDigits, maxDigits]
const PHONE_RULES: Record<string, { min: number; max: number; label: string }> = {
    '+90': { min: 10, max: 10, label: 'Türkiye' },
    '+49': { min: 10, max: 11, label: 'Almanya' },
    '+44': { min: 10, max: 10, label: 'İngiltere' },
    '+1': { min: 10, max: 10, label: 'ABD/Kanada' },
    '+33': { min: 9, max: 9, label: 'Fransa' },
    '+39': { min: 9, max: 10, label: 'İtalya' },
    '+31': { min: 9, max: 9, label: 'Hollanda' },
    '+34': { min: 9, max: 9, label: 'İspanya' },
    '+43': { min: 10, max: 11, label: 'Avusturya' },
    '+32': { min: 8, max: 9, label: 'Belçika' },
    '+46': { min: 9, max: 9, label: 'İsveç' },
    '+47': { min: 8, max: 8, label: 'Norveç' },
    '+45': { min: 8, max: 8, label: 'Danimarka' },
    '+41': { min: 9, max: 9, label: 'İsviçre' },
    '+48': { min: 9, max: 9, label: 'Polonya' },
    '+7': { min: 10, max: 10, label: 'Rusya' },
    '+966': { min: 9, max: 9, label: 'Suudi Arabistan' },
    '+971': { min: 9, max: 9, label: 'BAE' },
    '+974': { min: 8, max: 8, label: 'Katar' },
    '+965': { min: 8, max: 8, label: 'Kuveyt' },
};

const validatePhone = (code: string, phone: string): string => {
    const digits = phone.replace(/\D/g, '');
    if (!digits) return '';
    const rule = PHONE_RULES[code];
    if (!rule) return '';
    if (digits.length < rule.min) {
        return `${rule.label} numarası en az ${rule.min} hane olmalıdır (${digits.length}/${rule.min})`;
    }
    if (digits.length > rule.max) {
        return `${rule.label} numarası en fazla ${rule.max} hane olmalıdır (${digits.length}/${rule.max})`;
    }
    if (code === '+90' && digits[0] !== '5') {
        return 'Türkiye numarası 5 ile başlamalıdır';
    }
    if (code === '+49' && !['1', '5', '6', '7', '8'].includes(digits[0])) {
        return 'Almanya numarası 1, 5, 6, 7 veya 8 ile başlamalıdır';
    }
    if (code === '+7' && digits[0] !== '9') {
        return 'Rusya numarası 9 ile başlamalıdır';
    }
    if (code === '+44' && digits[0] !== '7') {
        return 'İngiltere cep numarası 7 ile başlamalıdır';
    }
    if (code === '+1' && ['0', '1'].includes(digits[0])) {
        return 'ABD numarası 0 veya 1 ile başlayamaz';
    }
    if (code === '+966' && digits[0] !== '5') {
        return 'Suudi Arabistan numarası 5 ile başlamalıdır';
    }
    if (code === '+971' && digits[0] !== '5') {
        return 'BAE numarası 5 ile başlamalıdır';
    }
    if (code === '+39' && digits[0] !== '3') {
        return 'İtalya cep numarası 3 ile başlamalıdır';
    }
    if (code === '+33' && !['6', '7'].includes(digits[0])) {
        return 'Fransa cep numarası 6 veya 7 ile başlamalıdır';
    }
    return '';
};


interface HairAnalysisProps {
    onBack: () => void;
    lang?: string;
}

const HairAnalysis = ({ onBack, lang }: HairAnalysisProps) => {
    const { t } = useTranslation();
    const STEPS = getSteps(t);

    const [currentStep, setCurrentStep] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [answers, setAnswers] = useState < QuizAnswers > ({
        gender: '',
        hairLoss: '',
        hairColor: '',
        duration: '',
        previousTransplant: '',
        timeline: '',
    });
    const [form, setForm] = useState < ContactForm > ({
        name: '',
        email: '',
        countryCode: '+90',
        phone: '',
        commercialConsent: false,
        privacyConsent: false,
    });
    const [phoneError, setPhoneError] = useState('');

    const totalSteps = STEPS.length;
    const progress = ((currentStep + 1) / (totalSteps + 1)) * 100;

    const handleSelect = (key: keyof QuizAnswers, value: string) => {
        setAnswers((prev) => ({ ...prev, [key]: value }));
        if (currentStep < totalSteps - 1) {
            setTimeout(() => setCurrentStep((prev) => prev + 1), 300);
        } else {
            setTimeout(() => setShowForm(true), 300);
        }
    };

    const handleBack = () => {
        if (showForm) {
            setShowForm(false);
        } else if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        } else {
            onBack();
        }
    };

    const handlePhoneChange = (value: string) => {
        const digits = value.replace(/[^\d]/g, '');
        setForm({ ...form, phone: digits });
        setPhoneError(validatePhone(form.countryCode, digits));
    };

    const handleCountryChange = (code: string) => {
        setForm({ ...form, countryCode: code, phone: '' });
        setPhoneError('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const err = validatePhone(form.countryCode, form.phone);
        if (err) {
            setPhoneError(err);
            return;
        }
        const name = encodeURIComponent(form.name);
        const phone = encodeURIComponent(form.countryCode + form.phone);
        const email = encodeURIComponent(form.email);
        const url = `https://info-elitklinik.zohobookings.eu/#/htconsultation?Name=${name}&Contact%20Number=${phone}&Email=${email}`;
        window.open(url, '_blank');
    };

    return (
        <div className="min-h-screen bg-[#f0e6dc] flex flex-col">
            {/* Header */}
            <header className="bg-navy w-full py-3 px-4 sm:px-8 flex items-center justify-center">
                <img
                    src="/src/assets/images/Elithair-Logo-Primary.svg"
                    alt="Elithair"
                    className="h-8 md:h-10 object-contain"
                />
            </header>

            {/* Content */}
            <div className="flex-1 flex items-start justify-center px-4 py-8 md:py-16">
                <div className="w-full max-w-xl">
                    {/* Title */}
                    <h1 className="text-xl md:text-2xl text-coral text-center mb-6">
                        {t('quiz.title')}
                    </h1>

                    {/* Card */}
                    <div className="bg-navy rounded-2xl overflow-hidden shadow-xl">
                        {/* Progress Bar */}
                        <div className="px-6 pt-6">
                            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-white rounded-full transition-all duration-500 ease-out"
                                    style={{ width: `${showForm ? 100 : progress}%` }}
                                />
                            </div>
                        </div>

                        {!showForm ? (
                            /* Quiz Steps */
                            <div className="p-6">
                                {/* Back button */}
                                <button
                                    onClick={handleBack}
                                    className="flex items-center gap-1 text-white/70 hover:text-white transition-colors mb-4"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>

                                <h2 className="text-white text-center text-lg mb-6">
                                    {STEPS[currentStep].question}
                                </h2>

                                <div className="space-y-3 max-w-sm mx-auto">
                                    {STEPS[currentStep].options.map((option) => (
                                        <button
                                            key={option.label}
                                            onClick={() =>
                                                handleSelect(STEPS[currentStep].key, option.label)
                                            }
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all duration-200 ${answers[STEPS[currentStep].key] === option.label
                                                ? 'border-coral bg-coral/20 text-white'
                                                : 'border-white/30 bg-white/10 text-white hover:border-white/60 hover:bg-white/20'
                                                }`}
                                        >
                                            <span className="text-2xl">{option.icon}</span>
                                            <span className="text-base">{option.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            /* Contact Form */
                            <div className="p-6">
                                <button
                                    onClick={handleBack}
                                    className="flex items-center gap-1 text-white/70 hover:text-white transition-colors mb-4"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>

                                <h2 className="text-white text-center text-lg mb-6">
                                    {t('quiz.contactTitle')}
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
                                    {/* Name */}
                                    <div className="flex items-center gap-3 border-2 border-coral rounded-xl px-4 py-3 bg-white/5">
                                        <span className="text-coral">👤</span>
                                        <input
                                            type="text"
                                            placeholder={t('quiz.form.name')}
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            className="bg-transparent text-white placeholder-white/50 outline-none flex-1 text-base"
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-center gap-3 border-2 border-coral rounded-xl px-4 py-3 bg-white/5">
                                        <span className="text-coral">✉️</span>
                                        <input
                                            type="email"
                                            placeholder={t('quiz.form.email')}
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            className="bg-transparent text-white placeholder-white/50 outline-none flex-1 text-base"
                                            required
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <select
                                                value={form.countryCode}
                                                onChange={(e) => handleCountryChange(e.target.value)}
                                                className="bg-navy border-2 border-white/30 rounded-xl px-3 py-3 text-white text-base outline-none"
                                            >
                                                <option value="+90">🇹🇷 TR (+90)</option>
                                                <option value="+49">🇩🇪 DE (+49)</option>
                                                <option value="+44">🇬🇧 UK (+44)</option>
                                                <option value="+1">🇺🇸 US (+1)</option>
                                                <option value="+33">🇫🇷 FR (+33)</option>
                                                <option value="+39">🇮🇹 IT (+39)</option>
                                                <option value="+31">🇳🇱 NL (+31)</option>
                                                <option value="+34">🇪🇸 ES (+34)</option>
                                                <option value="+43">🇦🇹 AT (+43)</option>
                                                <option value="+32">🇧🇪 BE (+32)</option>
                                                <option value="+46">🇸🇪 SE (+46)</option>
                                                <option value="+47">🇳🇴 NO (+47)</option>
                                                <option value="+45">🇩🇰 DK (+45)</option>
                                                <option value="+41">🇨🇭 CH (+41)</option>
                                                <option value="+48">🇵🇱 PL (+48)</option>
                                                <option value="+7">🇷🇺 RU (+7)</option>
                                                <option value="+966">🇸🇦 SA (+966)</option>
                                                <option value="+971">🇦🇪 AE (+971)</option>
                                                <option value="+974">🇶🇦 QA (+974)</option>
                                                <option value="+965">🇰🇼 KW (+965)</option>
                                            </select>
                                            <div className={`flex-1 flex items-center gap-3 border-2 ${phoneError ? 'border-red-400' : 'border-white/30'} rounded-xl px-4 py-3 bg-white/5 transition-colors`}>
                                                <span className="text-white/50">📞</span>
                                                <input
                                                    type="tel"
                                                    placeholder={t('quiz.form.phone')}
                                                    value={form.phone}
                                                    onChange={(e) => handlePhoneChange(e.target.value)}
                                                    className="bg-transparent text-white placeholder-white/50 outline-none flex-1 text-base"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        {phoneError && (
                                            <p className="text-red-400 text-sm mt-1.5 ml-1 animate-pulse">
                                                ⚠️ {phoneError}
                                            </p>
                                        )}
                                    </div>

                                    {/* Consents */}
                                    <div className="space-y-3 text-sm text-white/70">
                                        <label className="flex items-start gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={form.commercialConsent}
                                                onChange={(e) => setForm({ ...form, commercialConsent: e.target.checked })}
                                                className="mt-0.5 accent-coral"
                                            />
                                            <span>{t('quiz.form.commercialConsent')}</span>
                                        </label>
                                        <label className="flex items-start gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={form.privacyConsent}
                                                onChange={(e) => setForm({ ...form, privacyConsent: e.target.checked })}
                                                className="mt-0.5 accent-coral"
                                                required
                                            />
                                            <span>
                                                {t('quiz.form.privacyConsent')}{' '}
                                                <a href="#" className="text-coral underline">{t('quiz.form.kvkkLink')}</a> ve{' '}
                                                <a href="#" className="text-coral underline">{t('quiz.form.privacyLink')}</a>
                                                'nı kabul etmiş olursunuz
                                            </span>
                                        </label>
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="w-full bg-[#c8d530] hover:bg-[#b5c22a] text-navy font-bold py-4 rounded-full transition-colors duration-300 text-lg"
                                    >
                                        {t('quiz.form.submit')}
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HairAnalysis;
