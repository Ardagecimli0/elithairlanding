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
      answer: t('faq.answers.q1'),
    },
    {
      question: t('faq.questions.q2'),
      answer: t('faq.answers.q2'),
    },
    {
      question: t('faq.questions.q3'),
      answer: t('faq.answers.q3'),
    },
    {
      question: t('faq.questions.q4'),
      answer: t('faq.answers.q4'),
    },
    {
      question: t('faq.questions.q5'),
      answer: t('faq.answers.q5'),
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
