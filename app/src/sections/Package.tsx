import { useTranslation } from '../i18n';
import { Check } from 'lucide-react';

const Package = ({ onCtaClick }: { onCtaClick?: () => void }) => {
  const { t } = useTranslation();

  const features = [
    t('package.features.consultation'),
    t('package.features.pretest'),
    t('package.features.dhi'),
    t('package.features.certificate'),
    t('package.features.medications'),
    t('package.features.shampoo'),
    t('package.features.hotel'),
    t('package.features.transfer'),
    t('package.features.translator'),
  ];

  return (
    <section
      className="relative bg-navy py-16 md:py-24 bg-cover bg-center"
      style={{ backgroundImage: 'url(/src/assets/images/lacivert-alan-1.jpg)' }}
    >
      <div className="absolute inset-0 bg-navy/80" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-12">
          {t('package.title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Package Card */}
          <div className="bg-navy-light rounded-2xl overflow-hidden border border-white/10">
            <div className="p-6 text-center border-b border-white/10">
              <h3 className="text-coral text-xl font-bold mb-1">DHI</h3>
              <p className="text-white text-lg">{t('package.packageTitle')}</p>
            </div>

            <div className="p-6">
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/90 text-base">
                    <Check className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-white">
              <button onClick={onCtaClick} className="w-full bg-white text-navy font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                {t('package.ctaButton')}
              </button>
            </div>
          </div>

          {/* Why DHI Section */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              {t('package.whyTitle')}
            </h3>
            <p className="text-white/80 mb-6 text-base md:text-lg">
              {t('package.whyDescription')}
            </p>

            <div className="space-y-4">
              <div className="bg-navy-light rounded-xl p-5 border border-white/10">
                <h4 className="text-coral font-bold mb-2">{t('package.benefit1.title')}</h4>
                <p className="text-white/80 text-base">{t('package.benefit1.description')}</p>
              </div>

              <div className="bg-navy-light rounded-xl p-5 border border-white/10">
                <h4 className="text-coral font-bold mb-2">{t('package.benefit2.title')}</h4>
                <p className="text-white/80 text-base">{t('package.benefit2.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;
