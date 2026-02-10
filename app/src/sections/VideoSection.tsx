import { useState } from 'react';
import { useTranslation } from '../i18n';
import { Play, X } from 'lucide-react';

const VideoSection = ({ onCtaClick }: { onCtaClick?: () => void }) => {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Title & Description */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            {t('videoSection.heading')} <span className="text-coral">{t('videoSection.highlight')}</span> {t('videoSection.headingSuffix')}
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto text-base md:text-lg">
            {t('videoSection.description')}
          </p>
        </div>

        {/* Video Thumbnail */}
        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <img
            src="/src/assets/images/Instagram-post-1073-1-e1720776015653.webp"
            alt="Elithair Clinic"
            className="w-full aspect-video object-cover"
          />

          {/* Play Button Overlay */}
          <div
            className="absolute inset-0 bg-navy/30 flex items-center justify-center cursor-pointer"
            onClick={() => setShowVideo(true)}
          >
            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300">
              <Play className="w-8 h-8 text-navy ml-1" fill="#003B6B" />
            </div>
          </div>


        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button onClick={onCtaClick} className="bg-coral hover:bg-coral-dark text-white font-semibold py-4 px-12 rounded-full transition-colors duration-300">
            {t('videoSection.ctaButton')}
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              className="absolute -top-12 right-0 text-white hover:text-coral transition-colors"
              onClick={() => setShowVideo(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <video
              controls
              autoPlay
              className="w-full h-full rounded-lg"
            >
              <source src="/src/assets/ElitHairQuality.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
