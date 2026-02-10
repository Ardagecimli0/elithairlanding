import { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import i18n, { I18nextProvider, setLanguageBySlug } from './i18n';
import { useScrollReveal } from './hooks/useScrollReveal';
import WhatsAppButton from './components/WhatsAppButton';

import Hero from './sections/Hero';
import VideoSection from './sections/VideoSection';
import ProcessSteps from './sections/ProcessSteps';
import ResultsCarousel from './sections/ResultsCarousel';
import Testimonials from './sections/Testimonials';
import Package from './sections/Package';
import Reviews from './sections/Reviews';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';
import HairAnalysis from './sections/HairAnalysis';

import './App.css';

function ScrollReveal({ children }: { children: React.ReactNode }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div ref={ref} className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

function LandingPage() {
  const { slug } = useParams < { slug: string } > ();
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [currentLang, setCurrentLang] = useState('tr');
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const lang = setLanguageBySlug(slug || 'sac-ekimi');
    setCurrentLang(lang);
    forceUpdate(n => n + 1);
  }, [slug]);

  // Update browser tab title based on active language
  useEffect(() => {
    document.title = i18n.t('siteTitle');
  }, [currentLang]);

  const handleCtaClick = () => {
    setShowAnalysis(true);
  };

  const handleBack = () => {
    setShowAnalysis(false);
  };

  if (showAnalysis) {
    return (
      <>
        <HairAnalysis onBack={handleBack} lang={currentLang} />
        <WhatsAppButton />
      </>
    );
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-navy flex items-center justify-center text-white">Loading...</div>}>
      <main className="min-h-screen">
        <Hero onCtaClick={handleCtaClick} />
        <ScrollReveal><VideoSection onCtaClick={handleCtaClick} /></ScrollReveal>
        <ScrollReveal><ProcessSteps onCtaClick={handleCtaClick} /></ScrollReveal>
        <ScrollReveal><ResultsCarousel onCtaClick={handleCtaClick} /></ScrollReveal>
        <ScrollReveal><Testimonials onCtaClick={handleCtaClick} /></ScrollReveal>
        <ScrollReveal><Package onCtaClick={handleCtaClick} /></ScrollReveal>
        <ScrollReveal><Reviews onCtaClick={handleCtaClick} /></ScrollReveal>
        <ScrollReveal><FAQ /></ScrollReveal>
        <Footer />
        <WhatsAppButton />
      </main>
    </Suspense>
  );
}

function App() {
  return (
    <BrowserRouter>
      <I18nextProvider>
        <Routes>
          <Route path="/:slug" element={<LandingPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </I18nextProvider>
    </BrowserRouter>
  );
}

export default App;
