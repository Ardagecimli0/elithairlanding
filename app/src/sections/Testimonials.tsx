import { useState } from 'react';
import { useTranslation } from '../i18n';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = ({ onCtaClick }: { onCtaClick?: () => void }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState < string | null > (null);

  const testimonials = [
    {
      id: 1,
      image: '/src/assets/images/hamza-kapak.jpg',
      videoUrl: '/src/assets/HamzaExperience.mp4',
    },
    {
      id: 2,
      image: '/src/assets/images/lucas-kapak.jpg',
      videoUrl: '/src/assets/LucasExperience.mp4',
    },
    {
      id: 3,
      image: '/src/assets/images/beridin-kapak.jpg',
      videoUrl: '/src/assets/BeridinExperience.mp4',
    },
  ];

  const totalPages = testimonials.length - 1;

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 2
  );

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-navy text-center mb-12">
          {t('testimonials.title')}
        </h2>

        {/* Video Grid - 2 at a time */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-navy/20 flex items-center justify-center group-hover:bg-navy/30 transition-colors">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 text-navy ml-1" fill="#003B6B" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(totalPages)].map((_, index) => (
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
          <button onClick={onCtaClick} className="bg-coral hover:bg-coral-dark text-white font-semibold py-4 px-12 rounded-full transition-colors duration-300">
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
