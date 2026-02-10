import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '../i18n';
import IbrahimImage from '../assets/images/ibrahim.png';
import TolgaImage from '../assets/images/tolga.png';
import MustafaImage from '../assets/images/mustafa-1.png';
import AlexanderImage from '../assets/images/alexander-1.png';
import MorganImage from '../assets/images/morgan-1.png';
import QutaibaImage from '../assets/images/qutaiba-1.png';
import DaltonImage from '../assets/images/dalton.png';

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

const Reviews = ({ onCtaClick }: { onCtaClick?: () => void }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews: Review[] = [
    {
      id: 1,
      name: 'İbrahim Alnuaimi',
      avatar: IbrahimImage,
      rating: 5,
      text: 'Harika bir hastane, personeli son derece deneyimli, iyi bir deneyim. Herkesin bu hastaneyi ziyaret etmesini ve saç ekimini yaptırmasını tavsiye ediyorum.',
    },
    {
      id: 2,
      name: 'Tolga Yıldız',
      avatar: TolgaImage,
      rating: 5,
      text: 'Sorumlu ve kaliteli bir saç ekim kliniği ararken Elithair ile karşılaştım. Genel hizmet, konaklama ve personel mükemmel şekilde koordine edilmiştir ve tüm sorularınıza ihtiyacınız olan yanıtları alırsınız. Öneririm.',
    },
    {
      id: 3,
      name: 'Mustafa Kattan',
      avatar: MustafaImage,
      rating: 5,
      text: 'Açıkçası harika bir deneyim ve hepsi seçkin sağlık personeli sayesinde. Saç ekimi dünyasında uzmanlaşmış tam ve entegre bir hastanedir. Teşekkürler Elithair',
    },
    {
      id: 4,
      name: 'Alexander Müller',
      avatar: AlexanderImage,
      rating: 5,
      text: 'Almanya\'dan geldim ve hizmet kalitesi beklentilerimin çok üzerindeydi. Klinik son derece modern ve personel çok ilgili. Kesinlikle tavsiye ediyorum.',
    },
    {
      id: 5,
      name: 'Morgan',
      avatar: MorganImage,
      rating: 5,
      text: 'Saç ekimi için en doğru adres burası. Operasyon öncesi ve sonrası süreç çok profesyonelce yönetildi. Sonuçlardan son derece memnunum.',
    },
    {
      id: 6,
      name: 'Qutaiba',
      avatar: QutaibaImage,
      rating: 5,
      text: 'DHI tekniği ile yapılan saç ekimim mükemmel sonuçlar verdi. 6 ay sonra saçlarım tamamen doğal görünüyor. Elithair ekibine teşekkür ederim.',
    },
    {
      id: 7,
      name: 'Dalton',
      avatar: DaltonImage,
      rating: 5,
      text: 'Havaalanından otele, otelden kliniğe tüm transferler kusursuzdu. Operasyon ağrısız geçti ve sonuçlar inanılmaz. 5 yıldızlı bir deneyim.',
    },
    {
      id: 8,
      name: 'David Schmidt',
      avatar: AlexanderImage,
      rating: 5,
      text: 'Profesyonel ekip, lüks konaklama ve mükemmel sonuçlar. Elithair\'ı arkadaşlarıma da öneriyorum. Saç ekimi düşünenler için en iyi tercih.',
    },
    {
      id: 9,
      name: 'Karim',
      avatar: MustafaImage,
      rating: 5,
      text: 'Elithair App sayesinde tedavi sürecimi adım adım takip edebildim. Doktorlar ve hemşireler çok ilgiliydi. Sonuçlardan çok memnunum.',
    },
    {
      id: 10,
      name: 'Hasan Kaplan',
      avatar: IbrahimImage,
      rating: 5,
      text: 'Deep Sleep yöntemi sayesinde operasyon sırasında hiçbir ağrı hissetmedim. Uyandığımda her şey bitmişti. Kesinlikle tavsiye ederim.',
    },
    {
      id: 11,
      name: 'Pierre Dupont',
      avatar: MorganImage,
      rating: 5,
      text: 'Fransa\'dan gelip Elithair\'da saç ekimi yaptırdım. Tercüman desteği, otel ve klinik hizmeti her şey harika. Sonuçlar da muhteşem oldu.',
    },
    {
      id: 12,
      name: 'Serkan Aydın',
      avatar: TolgaImage,
      rating: 5,
      text: 'Daha önce başka bir klinikte saç ekimi yaptırmıştım ama sonuçlar tatmin edici değildi. Elithair ile farkı gördüm, gerçek profesyonellik burada.',
    },
  ];

  const reviewsPerPage = 2;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleReviews = reviews.slice(currentIndex * reviewsPerPage, currentIndex * reviewsPerPage + reviewsPerPage);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-navy text-center mb-12 max-w-3xl mx-auto">
          {t('reviews.title')}
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 bg-navy/10 hover:bg-navy/20 rounded-full flex items-center justify-center text-navy transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 bg-navy/10 hover:bg-navy/20 rounded-full flex items-center justify-center text-navy transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200"
              >
                {/* Header with Avatar */}
                <div className="bg-navy p-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="font-bold text-navy text-lg mb-2">{review.name}</h3>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400" fill="#FACC15" />
                    ))}
                  </div>

                  <p className="text-gray-600 text-base leading-relaxed">{review.text}</p>
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
                className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentIndex ? 'bg-navy' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button onClick={onCtaClick} className="bg-coral hover:bg-coral-dark text-white font-semibold py-4 px-12 rounded-full transition-colors duration-300">
            {t('reviews.ctaButton')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
