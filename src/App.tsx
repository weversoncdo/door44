import React, { useState, useEffect } from 'react';
import { NavSection, ActiveView } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductionsPage } from './pages/ProductionsPage';

// Home Page Sections
import { Page01Hero } from './components/pages/Page01Hero';
import { Page02About } from './components/pages/Page02About';
import { PartnersSection } from './components/sections/PartnersSection';
import { FormSection } from './components/sections/FormSection';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [currentSection, setCurrentSection] = useState<NavSection>('INÍCIO');

  // Smooth scroll helper to navigate to specific DIV by ID on the Home page
  const scrollToHomeDiv = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navigate to a section on the home page (handles both being on home or on producoes)
  const handleNavigateHomeSection = (section: 'INÍCIO' | 'SOBRE' | 'PARCEIROS' | 'ORÇAMENTO' | 'CONTATO') => {
    const targetMap: Record<string, string> = {
      'INÍCIO': 'inicio',
      'SOBRE': 'sobre',
      'PARCEIROS': 'parceiros',
      'ORÇAMENTO': 'formulario',
      'CONTATO': 'formulario',
    };

    const targetId = targetMap[section] || 'inicio';

    if (activeView !== 'home') {
      setActiveView('home');
      // Wait for the Home view to render in the DOM, then scroll
      setTimeout(() => {
        scrollToHomeDiv(targetId);
      }, 60);
    } else {
      scrollToHomeDiv(targetId);
    }
    setCurrentSection(section === 'CONTATO' ? 'ORÇAMENTO' : section);
  };

  const handleGoToProductions = () => {
    setActiveView('producoes');
    setCurrentSection('PRODUÇÕES');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Observe active section when scrolling on the Home page
  useEffect(() => {
    if (activeView !== 'home') return;

    const sectionIds = [
      { id: 'inicio', section: 'INÍCIO' as NavSection },
      { id: 'sobre', section: 'SOBRE' as NavSection },
      { id: 'parceiros', section: 'PARCEIROS' as NavSection },
      { id: 'formulario', section: 'ORÇAMENTO' as NavSection },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const item = sectionIds[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setCurrentSection(item.section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeView]);

  return (
    <div className="min-h-screen bg-[#08080a] text-white flex flex-col font-sans selection:bg-[#e11d24] selection:text-white relative overflow-x-hidden max-w-full w-full">
      {/* Navbar with SOBRE, PRODUÇÕES, PARCEIROS, ORÇAMENTO */}
      <Header
        currentSection={currentSection}
        activeView={activeView}
        onNavigateHomeSection={handleNavigateHomeSection}
        onGoToProductions={handleGoToProductions}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-18 sm:pt-20 overflow-x-hidden max-w-full w-full">
        {activeView === 'home' ? (
          /* HOME PAGE WITH DEDICATED DIVS FOR SOBRE, PARCEIROS, FORMULÁRIO */
          <div className="w-full max-w-full flex flex-col overflow-x-hidden">
            {/* DIV INÍCIO */}
            <div id="inicio" className="relative scroll-mt-20">
              <Page01Hero
                onNext={() => handleNavigateHomeSection('SOBRE')}
                onExploreProductions={handleGoToProductions}
              />
            </div>

            {/* DIV SOBRE (Sobre Nós com imagem oficial do símbolo) */}
            <div id="sobre" className="relative scroll-mt-20">
              <Page02About
                onGoToProductions={handleGoToProductions}
              />
            </div>

            {/* DIV PARCEIROS (Quadros com logos e textos exatos conforme imagens anexadas) */}
            <div id="parceiros" className="relative scroll-mt-20">
              <PartnersSection />
            </div>

            {/* DIV FORMULÁRIO (Formulário em um DIV sozinho como solicitado) */}
            <div id="formulario" className="relative scroll-mt-20">
              <FormSection />
            </div>
          </div>
        ) : (
          /* PÁGINA DEDICADA DE PRODUÇÕES (Trabalhada com catálogo, filtros e casos de sucesso) */
          <ProductionsPage
            onBackToHome={() => handleNavigateHomeSection('INÍCIO')}
            onNavigateSection={handleNavigateHomeSection}
          />
        )}
      </main>

      {/* FOOTER COM REDES SOCIAIS, ENDEREÇO, LOGO DOOR44 E CRÉDITO AGÊNCIA WKA */}
      <Footer
        onNavigateHomeSection={handleNavigateHomeSection}
        onGoToProductions={handleGoToProductions}
      />

      {/* ÍCONE DE WHATSAPP FLUTUANTE */}
      <FloatingWhatsApp />
    </div>
  );
}
