import { useTranslation } from '../i18n';
import { Check, Building2, Star, Users, Scissors } from 'lucide-react';
import ElithairLogoPrimary from '../assets/images/Elithair-Logo-Primary.svg';
import GoogleReviews from '../assets/images/Google-Reviews-Elithair.svg';
import HeroClinic from '../assets/images/hero-clinic.jpg';
import HeroVideo from '../assets/Hero.mp4';
import MetroLogo from '../assets/images/metro.svg';
import ExpressLogo from '../assets/images/Express.svg';
import TheSunLogo from '../assets/images/the-sun.svg';
import TheMailLogo from '../assets/images/the-mail.svg';

const Hero = ({ onCtaClick }: { onCtaClick?: () => void }) => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Building2,
      title: t('stats.stat1.title'),
      subtitle: t('stats.stat1.subtitle'),
    },
    {
      icon: Star,
      title: t('stats.stat2.title'),
      subtitle: t('stats.stat2.subtitle'),
    },
    {
      icon: Scissors,
      title: t('stats.stat3.title'),
      subtitle: t('stats.stat3.subtitle'),
    },
    {
      icon: Users,
      title: t('stats.stat4.title'),
      subtitle: t('stats.stat4.subtitle'),
    },
  ];

  return (
    <section className="relative">
      {/* Header - Navy Background */}
      <header className="bg-navy w-full z-20 flex items-center justify-between px-4 sm:px-8 py-1 relative h-11">
        {/* Logo artık solda */}
        <div className="flex items-center gap-2 ml-2 sm:ml-4">
          <img
            src={ElithairLogoPrimary}
            alt="Elithair"
            className="h-7 md:h-9 object-contain"
          />
        </div>

        {/* Google Reviews alanı */}
        <img
          src={GoogleReviews}
          alt="Google Reviews Elithair 4.96"
          className="h-16 md:h-20 object-contain relative z-30 translate-y-3 md:translate-y-5"
        />
      </header>

      {/* Video Section */}
      <div className="relative">
        <div className="relative h-[50vh] md:h-[85vh] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
            poster={HeroClinic}
          >
            <source src={HeroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/20 to-navy/60" />

          {/* Desktop: Glass Card centered */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center z-10">
            <div className="max-w-lg w-full">
              <div className="glass-card p-8 lg:p-10 text-center">
                <h1 className="text-3xl lg:text-4xl font-bold text-navy mb-6 leading-tight">
                  <span className="text-coral">{t('hero.title').split(' ')[0]} {t('hero.title').split(' ')[1]} {t('hero.title').split(' ')[2]}</span>{' '}
                  {t('hero.title').split(' ').slice(3).join(' ')}
                </h1>

                <ul className="space-y-3 mb-8 text-left max-w-md mx-auto">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t('hero.bullet1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t('hero.bullet2')}</span>
                  </li>
                </ul>

                <button onClick={onCtaClick} className="w-full max-w-xs bg-coral hover:bg-coral-dark text-white font-semibold py-4 px-8 rounded-full transition-colors duration-300 mb-6">
                  {t('hero.ctaButton')}
                </button>

                {/* Media Logos */}
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <img src={MetroLogo} alt="Metro" className="h-4 object-contain" />
                  <img src={ExpressLogo} alt="Express" className="h-4 object-contain" />
                  <img src={TheSunLogo} alt="The Sun" className="h-4 object-contain" />
                  <img src={TheMailLogo} alt="Daily Mail" className="h-4 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Card below video */}
        <div className="md:hidden relative z-10 bg-navy pb-8">
          <div className="container mx-auto px-4 -mt-16">
            <div className="max-w-2xl mx-auto">
              <div className="glass-card p-6 text-center">
                <h1 className="text-2xl font-bold text-navy mb-6 leading-tight">
                  <span className="text-coral">{t('hero.title').split(' ')[0]} {t('hero.title').split(' ')[1]} {t('hero.title').split(' ')[2]}</span>{' '}
                  {t('hero.title').split(' ').slice(3).join(' ')}
                </h1>

                <ul className="space-y-3 mb-8 text-left max-w-md mx-auto">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t('hero.bullet1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t('hero.bullet2')}</span>
                  </li>
                </ul>

                <button onClick={onCtaClick} className="w-full max-w-xs bg-coral hover:bg-coral-dark text-white font-semibold py-4 px-8 rounded-full transition-colors duration-300 mb-6">
                  {t('hero.ctaButton')}
                </button>

                {/* Media Logos */}
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <img src={MetroLogo} alt="Metro" className="h-4 object-contain" />
                  <img src={ExpressLogo} alt="Express" className="h-4 object-contain" />
                  <img src={TheSunLogo} alt="The Sun" className="h-4 object-contain" />
                  <img src={TheMailLogo} alt="Daily Mail" className="h-4 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-navy rounded-xl p-4 md:p-6 text-center text-white"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-coral" />
                <div className="text-base md:text-lg font-semibold">
                  <span className="text-coral">{stat.title.split(' ')[0]}</span>{' '}
                  {stat.title.split(' ').slice(1).join(' ')}
                </div>
                <div className="text-sm md:text-base text-white/80 mt-1">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
