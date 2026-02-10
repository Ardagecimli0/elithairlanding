import { useTranslation } from '../i18n';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('faq.questions.q1'),
      answer: 'Pre-test bolumumuz, ameliyat oncesi tum gerekli saglik kontrollerini kapsar. Bu, operasyonun guvenligi ve basarisi icin kritik oneme sahiptir. Kan testleri, enfeksiyon taramalari ve sac analizi bu bolumde yapilir.',
    },
    {
      question: t('faq.questions.q2'),
      answer: 'DHI (Direct Hair Implantation) teknigi, sac koklerinin alindiktan hemen sonra ozel bir pensetle dogrudan ekilmesini saglar. Bu yontem, graftlerin disarida bekletilmesini ortadan kaldirarak koklerin hayatta kalma oranini artirir ve daha dogal sonuclar verir.',
    },
    {
      question: t('faq.questions.q3'),
      answer: 'Sac ekimi sonrasi 12 aylik ucretsiz danismanlik hizmeti sunuyoruz. Elithair App uzerinden surecinizi takip edebilir, uzmanlarimiza sorularinizi iletebilir ve duzenli kontrollerinizi planlayabilirsiniz.',
    },
    {
      question: t('faq.questions.q4'),
      answer: '5 yildizli otellerde konaklama imkani sunuyoruz. Oteliniz klinigimize yakin mesafede olup, tum transferleriniz sirketimiz tarafindan ucretsiz olarak saglanmaktadir. Kahvalti dahil konaklama secenekleri mevcuttur.',
    },
    {
      question: t('faq.questions.q5'),
      answer: 'Oncesi: Online konsultasyon, fotograf paylasimi ve seyahat planlamasi. Sonrasi: Ilk 3 gun klinikte kontrol, 10. gun yara bakimi, 3-6-12 aylik takip randevulari ve surekli online destek.',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          {t('faq.title')}
        </h2>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left text-navy font-semibold hover:no-underline py-4 text-base md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 text-base md:text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
