import { useTranslation } from '../i18n';

const ProcessSteps = ({ onCtaClick }: { onCtaClick?: () => void }) => {
  const { t } = useTranslation();

  const steps = [
    {
      image: '/src/assets/images/step1-photo.jpg',
      title: t('steps.step1.title'),
      description: t('steps.step1.description'),
    },
    {
      image: '/src/assets/images/step2-consultation.jpg',
      title: t('steps.step2.title'),
      description: t('steps.step2.description'),
    },
    {
      image: '/src/assets/images/step3-transfer.jpg',
      title: t('steps.step3.title'),
      description: t('steps.step3.description'),
    },
    {
      image: '/src/assets/images/step4-analysis.jpg',
      title: t('steps.step4.title'),
      description: t('steps.step4.description'),
    },
    {
      image: '/src/assets/images/step5-treatment.jpg',
      title: t('steps.step5.title'),
      description: t('steps.step5.description'),
    },
    {
      image: '/src/assets/images/step6-app.jpg',
      title: t('steps.step6.title'),
      description: t('steps.step6.description'),
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-navy text-center mb-12">
          {t('steps.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image with Step Number on top */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                {/* Step Number Badge - Top Right */}
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-coral mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button onClick={onCtaClick} className="bg-coral hover:bg-coral-dark text-white font-semibold py-4 px-12 rounded-full transition-colors duration-300">
            {t('steps.ctaButton')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
