import { useState } from 'react';
import { useTranslation } from '../i18n';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BeforeAfter1 from '../assets/images/before-after1.jpg';
import BeforeAfter2 from '../assets/images/before-after2.jpg';
import BeforeAfter3 from '../assets/images/before-after3.jpg';
import Okan1 from '../assets/images/okan-1.jpg';
import Sevket1 from '../assets/images/sefket-1.jpg';

interface Result {
  id: number;
  name: string;
  grafts: number;
  image: string;
  details: {
    singleGraft: number;
    multiGraft: number;
    punch: string;
    technique: string;
    density: string;
    duration: string;
  };
}

const ResultsCarousel = ({ onCtaClick }: { onCtaClick?: () => void }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(2); // Start with Okan Y. in center

  const results: Result[] = [
    {
      id: 1,
      name: 'Çağatay T.',
      grafts: 4000,
      image: BeforeAfter1,
      details: {
        singleGraft: 2600,
        multiGraft: 1400,
        punch: '3.5x0.85 mm',
        technique: 'DHI',
        density: '4/5',
        duration: '06:53 Saat',
      },
    },
    {
      id: 2,
      name: 'Rafet El Roman',
      grafts: 2600,
      image: BeforeAfter2,
      details: {
        singleGraft: 1450,
        multiGraft: 1150,
        punch: '3.5x0.85 mm',
        technique: 'DHI',
        density: '4/5',
        duration: '03:01 Saat',
      },
    },
    {
      id: 3,
      name: 'Kerim Engizek',
      grafts: 4000,
      image: BeforeAfter3,
      details: {
        singleGraft: 1260,
        multiGraft: 2740,
        punch: '3.5x0.85 mm',
        technique: 'DHI',
        density: '3/5',
        duration: '06:30  Saat',
      },
    },
    {
      id: 4,
      name: 'Okan Y.',
      grafts: 4700,
      image: Okan1,
      details: {
        singleGraft: 2100,
        multiGraft: 2600,
        punch: '3.5x0.85 mm',
        technique: 'DHI',
        density: '4/5',
        duration: '04:52 Saat',
      },
    },
    {
      id: 5,
      name: 'Şevket A.',
      grafts: 4500,
      image: Sevket1,
      details: {
        singleGraft: 1700,
        multiGraft: 2800,
        punch: '3.5x0.85 mm',
        technique: 'DHI',
        density: '4/5',
        duration: '09:61 Saat',
      },
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % results.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length);
  };

  // Get visible cards (previous, current, next)
  const getVisibleCards = () => {
    const prev = (currentIndex - 1 + results.length) % results.length;
    const next = (currentIndex + 1) % results.length;
    return [
      { ...results[prev], position: 'left' },
      { ...results[currentIndex], position: 'center' },
      { ...results[next], position: 'right' },
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="bg-navy py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
            <span className="text-coral">{t('results.title').split(' ')[0]} {t('results.title').split(' ')[1]}</span>{' '}
            {t('results.title').split(' ').slice(2).join(' ')}
          </h2>
          <p className="text-white/80">{t('results.description')}</p>
        </div>

        {/* Carousel - Multi-card view on desktop */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div className="flex items-start justify-center gap-4 md:gap-6 px-12 md:px-20">
            {visibleCards.map((card, idx) => (
              <div
                key={`${card.id}-${idx}`}
                className={`transition-all duration-500 flex-shrink-0 ${card.position === 'center'
                  ? 'w-full md:w-[420px] scale-100 opacity-100 z-10'
                  : 'hidden md:block w-[320px] scale-90 opacity-50'
                  }`}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                  {/* Before/After Image */}
                  <div className={`relative ${card.position === 'center' ? 'h-56 md:h-72' : 'h-44 md:h-56'}`}>
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className={`${card.position === 'center' ? 'bg-navy-light p-5' : 'bg-navy-light/70 p-4'} text-center`}>
                    <h3 className={`${card.position === 'center' ? 'text-xl' : 'text-base'} text-white font-bold`}>{card.name}</h3>
                    <p className={`${card.position === 'center' ? 'text-coral text-lg' : 'text-coral/70'} font-semibold`}>
                      {card.grafts} {t('results.graftCount')}
                    </p>
                  </div>

                  {/* Details - Vertical layout, shown on all cards */}
                  <div className={`${card.position === 'center' ? 'p-5 md:p-6' : 'p-3 md:p-4'} bg-white`}>
                    <div className={`space-y-2 ${card.position === 'center' ? 'text-base md:text-lg' : 'text-sm md:text-base'}`}>
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-500">{t('results.details.singleGraft')}:</span>
                        <span className="font-bold text-navy">{card.details.singleGraft}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-500">{t('results.details.multiGraft')}:</span>
                        <span className="font-bold text-navy">{card.details.multiGraft}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-500">{t('results.details.punch')}:</span>
                        <span className="font-bold text-navy">{card.details.punch}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-500">{t('results.details.technique')}:</span>
                        <span className="font-bold text-navy">{card.details.technique}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-500">{t('results.details.density')}:</span>
                        <span className="font-bold text-navy">{card.details.density}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">{t('results.details.duration')}:</span>
                        <span className="font-bold text-navy">{card.details.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {results.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button onClick={onCtaClick} className="bg-coral hover:bg-coral-dark text-white font-semibold py-4 px-12 rounded-full transition-colors duration-300">
            {t('results.ctaButton')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultsCarousel;
