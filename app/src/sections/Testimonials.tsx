import { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../i18n';
import { Play, X } from 'lucide-react';
import HamzaImage from '../assets/images/hamza-kapak.jpg';
import HamzaVideo from '../assets/HamzaExperience.mp4';
import LucasImage from '../assets/images/lucas-kapak.jpg';
import LucasVideo from '../assets/LucasExperience.mp4';
import BeridinImage from '../assets/images/beridin-kapak.jpg';
import BeridinVideo from '../assets/BeridinExperience.mp4';

const Testimonials = ({ onCtaClick }: { onCtaClick?: () => void }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState < string | null > (null);
  const scrollRef = useRef < HTMLDivElement > (null);

  const testimonials = [
    {
      id: 1,
      image: HamzaImage,
      videoUrl: HamzaVideo,
    },
    {
      id: 2,
      image: LucasImage,
      videoUrl: LucasVideo,
    },
    {
      id: 3,
      image: BeridinImage,
      videoUrl: BeridinVideo,
    },
  ];

  // Desktop pagination (shows 2 at a time)
  const totalDesktopPages = testimonials.length - 1;
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 2);

  // Sync mobile scroll with dot indicator
  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const handleScroll = () => {
      const scrollLeft = scrollEl.scrollLeft;
      const cardWidth = scrollEl.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    };

    scrollEl.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollEl.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    }
  };

  // Helper to highlight specific words in coral
  const highlightWords = (text: string, words: string[]) => {
    const pattern = words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
    const regex = new RegExp(`(${pattern})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? <span key={i} className="text-coral">{part}</span> : part
    );
  };

  const titleHighlightWords = ['Saç Ekimi', 'Hair Transplant', 'Haartransplantation', 'Greffe de Cheveux', 'Trasplante Capilar', 'Trapianto di Capelli', 'Пересадка Волос'];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-navy text-center mb-12">
          {highlightWords(t('testimonials.title'), titleHighlightWords)}
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Mobile: horizontal scroll, 1 video at a time */}
          <div
            ref={scrollRef}
            className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full snap-start relative rounded-xl overflow-hidden shadow-lg group cursor-pointer aspect-video"
                onClick={() => setPlayingVideo(testimonial.videoUrl)}
              >
                <img
                  src={testimonial.image}
                  alt="Elithair Experience"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/20 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-navy ml-1" fill="#003B6B" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: 2-column grid */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer aspect-video"
                onClick={() => setPlayingVideo(testimonial.videoUrl)}
              >
                <img
                  src={testimonial.image}
                  alt="Elithair Experience"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-navy/20 flex items-center justify-center group-hover:bg-navy/30 transition-colors">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 text-navy ml-1" fill="#003B6B" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile dots */}
          <div className="flex md:hidden justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-navy' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>

          {/* Desktop dots */}
          <div className="hidden md:flex justify-center gap-2 mt-6">
            {[...Array(totalDesktopPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-navy' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button onClick={onCtaClick} className="bg-coral hover:bg-coral-dark text-white font-semibold py-5 px-10 md:px-14 rounded-full transition-colors duration-300 text-lg md:text-xl">
            {t('testimonials.ctaButton')}
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {playingVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setPlayingVideo(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-white hover:text-coral transition-colors"
              onClick={() => setPlayingVideo(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <video
              controls
              autoPlay
              className="w-full h-full rounded-lg"
            >
              <source src={playingVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
