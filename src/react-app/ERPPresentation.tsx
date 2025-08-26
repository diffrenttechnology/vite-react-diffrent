import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home, Users, Search, CheckCircle, Settings, Play, Pause, RotateCcw, Eye, TrendingUp, AlertTriangle, Lightbulb, Target } from 'lucide-react';

const ERPPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [viewMode, setViewMode] = useState('presentation'); // 'presentation', 'overview'
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);

  const slides = [
    // Slide 0: Title Page
    {
      type: 'title',
      content: {
        title: 'Norske beslutningstakeres utfordringer og erfaringer med å anskaffe ERP-system',
        subtitle: 'SIMPLIFYING BUSINESS',
        company: 'Amesto Solutions'
      }
    },
    // Slide 1: Table of Contents
    {
      type: 'toc',
      content: {
        title: 'Innholdsfortegnelse',
        sections: [
          { title: 'FORORD', subtitle: 'Ærlige innblikk fra beslutningstakere som har anskaffet et ERP-system', page: 3, icon: Eye },
          { title: '1. OPPDAGELSESFASEN', subtitle: 'Utfordringer i oppdagelsesfasen', page: 4, icon: Search },
          { title: '2. VURDERINGSESFASEN', subtitle: 'Utfordringer i vurderingsfasen', page: 7, icon: Users },
          { title: '3. ANSKAFFELSESFASEN', subtitle: 'Utfordringer i anskaffelsesfasen', page: 10, icon: CheckCircle },
          { title: '4. BRUKSFASEN', subtitle: 'Utfordringer i bruksfasen', page: 13, icon: Settings },
          { title: 'Valg av ERP handler ikke bare om system', subtitle: '', page: 16, icon: Lightbulb },
          { title: 'Hva nå?', subtitle: '', page: 17, icon: Target }
        ]
      }
    },
    // Slide 2: Forord
    {
      type: 'content',
      content: {
        title: 'ÆRLIGE INNBLIKK FRA BESLUTNINGSTAKERE SOM HAR ANSKAFFET ET ERP-SYSTEM',
        text: `En ERP-anskaffelse er blant de mest omfattende investeringene en virksomhet kan gjøre. Ofte forbindes prosessen med valg av teknologi og funksjonalitet, men hva opplever egentlig norske beslutningstakere i praksis, før systemene vurderes og beslutningene tas?

For å finne svaret har Amesto Solutions gjennomført kvalitative intervjuer med ledere og nøkkelpersoner – CEOs, CFOs, CTOs og økonomiansvarlige – fra ulike bransjer og organisasjonsstørrelser.`,
        phases: [
          'Den tidlige fasen av ERP-anskaffelsen – vi har kalt denne fasen for Oppdagelse.',
          'Den krevende fasen av ERP-anskaffelsen - vi har kalt denne fasen for Vurdering.',
          'Den kritiske fasen av ERP-anskaffelsen - vi har kalt denne fasen for Anskaffelse.',
          'Og selvsagt den kontinuerlige fasen - vi har kalt denne fasen for Bruk (Optimalisering).'
        ]
      }
    },
    // Slide 3: Oppdagelse Intro
    {
      type: 'phase-intro',
      content: {
        number: '1',
        title: 'Oppdagelse',
        subtitle: 'En tidlig, men krevende fase.',
        description: 'Du blir bevisst på et behov eller problem.',
        characteristics: [
          'Du opplever utfordringer eller forbedringspotensial med eksisterende ERP-system',
          'Du forsøker å utbedre eksisterende system. Dersom det ikke er mulig starter du å orientere deg i markedet, og søker etter informasjon og innsikt om nytt ERP-system.'
        ],
        question: '"Hva er egentlig problemet vårt, og hvilke løsninger finnes?"',
        icon: Search,
        color: '#ff6b6b'
      }
    },
    // Slide 4: Oppdagelse Challenges Interactive
    {
      type: 'interactive-challenges',
      content: {
        title: 'Utfordringene i oppdagelsesfasen',
        phase: 'oppdagelse',
        challenges: [
          {
            id: 1,
            number: '1.1',
            title: 'Mangel på bestillerkompetanse',
            description: 'Mange virksomheter starter ERP-anskaffelsen med begrenset forståelse av systemlandskapet. Manglende kunnskap om tekniske muligheter, relevante aktører og realistiske forventninger fører til en famlende tilnærming.',
            impact: 'Høy',
            severity: 85
          },
          {
            id: 2,
            number: '1.2',
            title: 'Begrenset strukturert tilnærming til systemvalg',
            description: 'Virksomheter mangler ofte en etablert metodikk for å evaluere og velge ERP-systemer. Beslutninger tas gjerne ad-hoc uten systematisk tilnærming.',
            impact: 'Høy',
            severity: 80
          },
          {
            id: 3,
            number: '1.3',
            title: 'Ineffektiv markedsorientering',
            description: 'Den innledende oppdagelsesfasen blir ofte unødig bred og ineffektiv. Mange googler generelle begreper som "ERP" og kontakter for mange leverandører samtidig.',
            impact: 'Medium',
            severity: 65
          },
          {
            id: 4,
            number: '1.4',
            title: 'Manglende prosessforståelse i egen organisasjon',
            description: 'Flere beslutningstakere har ikke dokumentert eller analysert virksomhetens arbeidsprosesser i tilstrekkelig grad.',
            impact: 'Høy',
            severity: 75
          },
          {
            id: 5,
            number: '1.5',
            title: 'Begrensede informasjonskilder',
            description: 'Mange beslutningstakere rapporterer at det er utfordrende å finne pålitelig og objektiv informasjon om ERP-systemer.',
            impact: 'Medium',
            severity: 60
          },
          {
            id: 6,
            number: '1.6',
            title: 'Rolleforvirring i initieringsfasen',
            description: 'Ansvaret for ERP-anskaffelsen plasseres forskjellig i ulike organisasjoner. Historisk var IT-avdelingen driveren, mens nå er det ofte CFO.',
            impact: 'Medium',
            severity: 55
          }
        ]
      }
    },
    // Slide 5: Vurdering Intro
    {
      type: 'phase-intro',
      content: {
        number: '2',
        title: 'Vurdering',
        subtitle: 'Den krevende og kritiske fasen.',
        description: 'Utforsker muligheter og sammenligner løsninger.',
        characteristics: [
          'Du avklarer krav og prioriteringer',
          'Du ser på ulike systemer og leverandører',
          'Du involverer interne beslutningstakere'
        ],
        question: '"Hva passer best for oss, og hvem kan vi stole på?"',
        icon: Users,
        color: '#4ecdc4'
      }
    },
    // Slide 6: Vurdering Challenges Interactive
    {
      type: 'interactive-challenges',
      content: {
        title: 'Utfordringene i vurderingsfasen',
        phase: 'vurdering',
        challenges: [
          {
            id: 1,
            number: '2.1',
            title: 'Over-spesifisering av krav',
            description: 'Mange virksomheter faller i fellen med å detaljspesifisere absolutt alt basert på hvordan de jobber i dag. Dette resulterer i at de i realiteten forsøker å gjenskape det gamle systemet i ny teknologi.',
            impact: 'Høy',
            severity: 90
          },
          {
            id: 2,
            number: '2.2',
            title: 'Beskrivelse av nåsituasjon fremfor fremtidsbehov',
            description: 'I stedet for å tenke fremover og definere hvor virksomheten ønsker å være om 3 til 5 år, fokuserer mange utelukkende på dagens funksjonalitet.',
            impact: 'Høy',
            severity: 85
          },
          {
            id: 3,
            number: '2.3',
            title: 'Kompetansegap mellom leverandør og kunde',
            description: 'Det er ofte en betydelig kunnskapskløft mellom leverandører og kunder når det gjelder mulighetene i moderne ERP-systemer.',
            impact: 'Høy',
            severity: 80
          },
          {
            id: 4,
            number: '2.4',
            title: 'Misforståelser om skyteknologi',
            description: 'Skybaserte ERP-løsninger er nå standard, men mange virksomheter misforstår fortsatt hva dette faktisk innebærer.',
            impact: 'Medium',
            severity: 70
          }
        ]
      }
    },
    // Slide 7: Anskaffelse Intro
    {
      type: 'phase-intro',
      content: {
        number: '3',
        title: 'Anskaffelse',
        subtitle: 'Den kritiske fasen.',
        description: 'Du tar en beslutning og inngår en avtale.',
        characteristics: [
          'Du henter inn tilbud',
          'Du gjennomfører evaluering og forhandlinger',
          'Du forbereder implementering'
        ],
        question: '"Hva får vi, hva koster det, og hvordan kommer vi i gang?"',
        icon: CheckCircle,
        color: '#45b7d1'
      }
    },
    // Slide 8: Anskaffelse Challenges Interactive
    {
      type: 'interactive-challenges',
      content: {
        title: 'Utfordringene i anskaffelsesfasen',
        phase: 'anskaffelse',
        challenges: [
          {
            id: 1,
            number: '3.1',
            title: 'Endringsmotstand på brukernivå',
            description: 'Motstand mot endring er en av de mest undervurderte utfordringene i ERP-prosjekter. Mange organisasjoner har en kulturell motstand mot nye arbeidsmetoder.',
            impact: 'Kritisk',
            severity: 95
          },
          {
            id: 2,
            number: '3.2',
            title: 'Manglende forståelse for eget ansvar',
            description: 'Mange kunder forventer at leverandøren skal ta totalansvar for prosjektet, mens realiteten er at kunden må ta aktivt ansvar for data, prosesser og intern organisering.',
            impact: 'Høy',
            severity: 85
          },
          {
            id: 3,
            number: '3.3',
            title: 'Utilstrekkelig allokering av interne ressurser',
            description: 'Virksomheter undervurderer systematisk hvor mye intern tid og ressurser som kreves for vellykket ERP-implementering.',
            impact: 'Høy',
            severity: 88
          },
          {
            id: 4,
            number: '3.4',
            title: 'Dårlig eller manglende prosjektledelse',
            description: 'Mangelfull prosjektledelse er en gjennomgående utfordring. Mange prosjektledere mangler erfaring med ERP-implementering.',
            impact: 'Kritisk',
            severity: 92
          }
        ]
      }
    },
    // Slide 9: Bruk Intro
    {
      type: 'phase-intro',
      content: {
        number: '4',
        title: 'Bruk',
        subtitle: 'Den kontinuerlige fasen.',
        description: 'Implementering og bruk av løsningen i praksis',
        characteristics: [
          'Du gjennomfører opplæring og gjør tilpasninger',
          'Du danner erfaringer med leverandør og system',
          'Du gjennomfører selve implementeringen og opplæringen',
          'Du gjør KPI-oppfølging og gevinstrealisering'
        ],
        question: '"Hvordan får vi mest mulig ut av investeringen?"',
        icon: Settings,
        color: '#96ceb4'
      }
    },
    // Slide 10: Bruk Challenges Interactive
    {
      type: 'interactive-challenges',
      content: {
        title: 'Utfordringene i bruksfasen',
        phase: 'bruk',
        challenges: [
          {
            id: 1,
            number: '4.1',
            title: 'Økt kompleksitet i daglige rutiner',
            description: 'Til tross for bedre tekniske muligheter opplever brukere ofte økt kompleksitet i sine daglige arbeidsrutiner etter implementering.',
            impact: 'Høy',
            severity: 82
          },
          {
            id: 2,
            number: '4.2',
            title: 'Rapporteringsutfordringer',
            description: 'Mangel på intuitive rapporteringsverktøy og høy terskel for å lære nye rapporteringsmetoder skaper frustrasjon hos økonomi- og lederteam.',
            impact: 'Medium',
            severity: 70
          },
          {
            id: 3,
            number: '4.3',
            title: 'Mangel på proaktiv oppfølging',
            description: 'Noen hevder at leverandører ofte blir for reaktive etter implementering, med fokus på feilretting fremfor verdiskapning.',
            impact: 'Medium',
            severity: 65
          },
          {
            id: 4,
            number: '4.4',
            title: 'Utilstrekkelig endringsledelse',
            description: 'Endringsledelse er et område som ofte nedprioriteres når budsjett presses eller tidslinjer forskyves.',
            impact: 'Høy',
            severity: 88
          }
        ]
      }
    },
    // Slide 11: Interactive Dashboard
    {
      type: 'dashboard',
      content: {
        title: 'ERP-utfordringer Dashboard',
        subtitle: 'Interaktiv oversikt over alle utfordringer',
        phases: [
          { name: 'Oppdagelse', challenges: 12, avgSeverity: 72, color: '#ff6b6b' },
          { name: 'Vurdering', challenges: 14, avgSeverity: 76, color: '#4ecdc4' },
          { name: 'Anskaffelse', challenges: 14, avgSeverity: 84, color: '#45b7d1' },
          { name: 'Bruk', challenges: 14, avgSeverity: 78, color: '#96ceb4' }
        ]
      }
    },
    // Slide 12: Conclusion
    {
      type: 'conclusion',
      content: {
        title: 'ERP handler ikke bare om systemer',
        subtitle: '– det handler om mennesker, prosesser og beslutninger.',
        description: `Erfaringene fra norske virksomheter viser at utfordringene ikke stopper ved systemvalg eller implementering. Tvert imot: Den reelle verdiskapingen skjer etter "go live", når systemet skal integreres i kulturen, styrke hverdagen og støtte forretningen videre.

Å lykkes i hele ERP-reisen krever mer enn teknologi. Det krever strategisk eierskap, tverrfaglig samarbeid og kontinuerlig utvikling – fra første idé til realisert gevinst.`
      }
    },
    // Slide 13: What Now
    {
      type: 'what-now',
      content: {
        title: 'Hva nå?',
        subtitle: 'Vil du unngå de vanligste fallgruvene – og sikre at ERP-investeringen faktisk leverer verdi?',
        steps: [
          'Gjør en strukturert gjennomgang av hvor dere står i dag',
          'Definer tydelige mål, ansvar og forvaltningsmodell for videre utvikling',
          'Søk sparring med noen som kjenner både systemene og dynamikken i organisasjonen'
        ],
        cta: 'Kontakt oss for en uforpliktende samtale om hvordan dere kan styrke styringen, forvaltningen og verdiskapingen i ERP-reisen. Vi deler gjerne erfaringer, metoder og konkrete anbefalinger – og hjelper dere videre, uansett hvor dere er i prosessen.',
        contact: {
          company: 'Amesto Solutions',
          address: 'Smeltedigelen 1, 0152 Oslo',
          phone: '+47 922 03 214',
          email: 'kontakt@amesto.no',
          website: 'amestosolutions.no'
        }
      }
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  // Animation trigger
  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const resetPresentation = () => {
    setCurrentSlide(0);
    setIsAutoPlay(false);
    setSelectedChallenge(null);
  };

  const renderInteractiveChallenges = (slide: any) => {
    return (
      <div className="h-full overflow-y-auto" style={{backgroundColor: '#F5F0EB'}}>
        <div className="p-16">
          <h1 className="text-4xl font-bold text-black mb-4">{slide.content.title}</h1>
          <p className="text-lg text-gray-600 mb-8">Klikk på utfordringene for mer informasjon</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl">
            {slide.content.challenges.map((challenge: any, index: number) => (
              <div
                key={challenge.id}
                className={`bg-white p-6 rounded-xl shadow-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  selectedChallenge === challenge.id ? 'border-amber-500 ring-4 ring-amber-200' : 'border-gray-200 hover:border-amber-300'
                }`}
                onClick={() => setSelectedChallenge(selectedChallenge === challenge.id ? null : challenge.id)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold" style={{color: '#a88157'}}>
                    {challenge.number} {challenge.title}
                  </h3>
                  <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    challenge.impact === 'Kritisk' ? 'bg-red-100 text-red-800' :
                    challenge.impact === 'Høy' ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {challenge.impact}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Alvorlighetsgrad</span>
                    <span className="text-sm font-semibold">{challenge.severity}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: selectedChallenge === challenge.id ? `${challenge.severity}%` : '0%',
                        backgroundColor: challenge.severity >= 85 ? '#ef4444' : challenge.severity >= 70 ? '#f59e0b' : '#10b981'
                      }}
                    ></div>
                  </div>
                </div>
                
                <p className={`text-gray-800 leading-relaxed transition-all duration-300 ${
                  selectedChallenge === challenge.id ? 'max-h-96 opacity-100' : 'max-h-20 opacity-70'
                } overflow-hidden`}>
                  {challenge.description}
                </p>
                
                {selectedChallenge === challenge.id && (
                  <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="flex items-center">
                      <AlertTriangle size={16} className="text-amber-600 mr-2" />
                      <span className="text-sm font-semibold text-amber-800">Klikk igjen for å skjule detaljer</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderDashboard = (slide: any) => {
    return (
      <div className="h-full" style={{backgroundColor: '#000'}}>
        <div className="p-16 text-white">
          <h1 className="text-4xl font-bold mb-4">{slide.content.title}</h1>
          <p className="text-xl opacity-80 mb-12">{slide.content.subtitle}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {slide.content.phases.map((phase: any, index: number) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105"
                style={{
                  animation: `slideInUp 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{phase.name}</h3>
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{backgroundColor: phase.color}}
                  ></div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/70">Utfordringer:</span>
                    <span className="font-semibold">{phase.challenges}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Avg. alvorlighet:</span>
                    <span className="font-semibold">{phase.avgSeverity}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-1500 ease-out"
                      style={{
                        width: `${phase.avgSeverity}%`,
                        backgroundColor: phase.color
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <TrendingUp className="mr-3" style={{color: '#a88157'}} />
              Hovedfunn fra undersøkelsen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
                  <span>54 totale utfordringer identifisert</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-orange-500 mr-3"></div>
                  <span>Anskaffelsesfasen har høyest risiko</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                  <span>Endringsmotstand er største utfordring</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                  <span>Strukturert tilnærming reduserer risiko</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSlide = (slide: any) => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="h-full flex flex-col justify-center items-center text-center relative" style={{background: 'linear-gradient(135deg, #000 0%, #333 100%)'}}>
            <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 20 0 L 0 0 0 20" fill="none" stroke="white" stroke-width="0.5"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%" height="100%" fill="url(%23grid)" /%3E%3C/svg%3E")'}}></div>
            <div className="relative z-10" style={{animation: 'fadeIn 1s ease-out'}}>
              <div className="text-sm font-medium text-white/80 mb-8 tracking-widest animate-pulse">{slide.content.subtitle}</div>
              <h1 className="text-5xl font-bold text-white mb-8 max-w-4xl leading-tight" style={{animation: 'slideInUp 1s ease-out 0.3s both'}}>{slide.content.title}</h1>
              <div className="text-2xl text-white/90 mt-12" style={{animation: 'slideInUp 1s ease-out 0.6s both'}}>{slide.content.company}</div>
              <div className="mt-8 text-white/60" style={{animation: 'slideInUp 1s ease-out 0.9s both'}}>
                Klikk for å starte presentasjonen →
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          </div>
        );

      case 'toc':
        return (
          <div className="h-full flex flex-col justify-center px-16" style={{backgroundColor: '#F5F0EB'}}>
            <div className="text-sm font-medium text-gray-600 mb-4 tracking-widest">RAPPORT</div>
            <h1 className="text-5xl font-bold text-black mb-12" style={{animation: `slideInLeft 0.8s ease-out`}}>{slide.content.title}</h1>
            <div className="space-y-4 max-w-4xl">
              {slide.content.sections.map((section: any, index: number) => {
                const IconComponent = section.icon;
                return (
                  <div 
                    key={index} 
                    className="border border-gray-200 rounded-lg p-6 bg-white hover:bg-gray-50 cursor-pointer transition-all duration-300 transform hover:scale-102 hover:shadow-lg"
                    style={{animation: `slideInRight 0.8s ease-out ${index * 0.1}s both`}}
                    onClick={() => goToSlide(index + 2)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <IconComponent size={24} className="mr-4" style={{color: '#a88157'}} />
                        <div>
                          <h3 className="text-lg font-bold text-black mb-1">{section.title}</h3>
                          {section.subtitle && <p className="text-gray-700">{section.subtitle}</p>}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 font-medium mr-4">s. {section.page}</span>
                        <ChevronRight size={20} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'interactive-challenges':
        return renderInteractiveChallenges(slide);

      case 'dashboard':
        return renderDashboard(slide);

      default:
        // Keep existing slide renderers for other types
        return renderOriginalSlide(slide);
    }
  };

  const renderOriginalSlide = (slide: any) => {
    // Original slide rendering logic for remaining slide types
    switch (slide.type) {
      case 'content':
        return (
          <div className="h-full flex flex-col justify-center px-16" style={{backgroundColor: '#F5F0EB'}}>
            <h1 className="text-3xl font-bold text-black mb-8 max-w-4xl leading-tight" style={{animation: `fadeInUp 0.8s ease-out`}}>{slide.content.title}</h1>
            <div className="space-y-6 max-w-4xl">
              <p className="text-lg text-gray-800 leading-relaxed" style={{animation: `fadeInUp 0.8s ease-out 0.2s both`}}>{slide.content.text}</p>
              <div className="mt-8" style={{animation: `fadeInUp 0.8s ease-out 0.4s both`}}>
                <p className="text-lg text-gray-800 mb-4">Resultatet er et ærlig bilde av hvilke utfordringer som preger:</p>
                <ul className="space-y-3">
                  {slide.content.phases.map((phase: string, index: number) => (
                    <li key={index} className="text-gray-800 flex items-start" style={{animation: `slideInLeft 0.6s ease-out ${0.6 + index * 0.1}s both`}}>
                      <span className="mr-3 mt-2 w-2 h-2 rounded-full" style={{backgroundColor: '#a88157'}}></span>
                      {phase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case 'phase-intro':
        const IconComponent = slide.content.icon;
        return (
          <div className="h-full flex items-center" style={{backgroundColor: '#000'}}>
            <div className="w-1/2 h-full relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <IconComponent 
                  size={200} 
                  color={slide.content.color || '#a88157'} 
                  opacity={0.2}
                  style={{animation: `rotate360 20s linear infinite`}}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50"></div>
            </div>
            <div className="w-1/2 p-16 text-white">
              <div className="text-8xl font-bold mb-4 animate-pulse" style={{color: slide.content.color || '#a88157'}}>{slide.content.number}</div>
              <h1 className="text-5xl font-bold mb-4" style={{animation: `slideInRight 0.8s ease-out`}}>{slide.content.title}</h1>
              <p className="text-xl mb-8 opacity-90" style={{animation: `slideInRight 0.8s ease-out 0.2s both`}}>{slide.content.subtitle}</p>
              <p className="text-lg mb-8" style={{animation: `slideInRight 0.8s ease-out 0.4s both`}}>{slide.content.description}</p>
              
              <div className="mb-8" style={{animation: `slideInRight 0.8s ease-out 0.6s both`}}>
                <h3 className="text-lg font-semibold mb-4" style={{color: slide.content.color || '#a88157'}}>KJENNETEGN PÅ {slide.content.title.toUpperCase()}SFASEN:</h3>
                <ul className="space-y-3">
                  {slide.content.characteristics.map((char: string, index: number) => (
                    <li key={index} className="text-white/90 flex items-start" style={{animation: `slideInLeft 0.6s ease-out ${0.8 + index * 0.1}s both`}}>
                      <span className="mr-3 mt-2 w-1 h-1 rounded-full bg-white"></span>
                      {char}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-white/20 backdrop-blur-sm" style={{backgroundColor: `${slide.content.color || '#a88157'}20`, animation: `fadeIn 0.8s ease-out 1s both`}}>
                <h4 className="font-semibold mb-2" style={{color: slide.content.color || '#a88157'}}>SPØRSMÅLET DU ØNSKER BESVART ER:</h4>
                <p className="text-white/90 italic text-lg">{slide.content.question}</p>
              </div>
            </div>
          </div>
        );

      case 'conclusion':
        return (
          <div className="h-full flex items-center justify-center" style={{backgroundColor: '#000'}}>
            <div className="text-center max-w-5xl px-16">
              <h1 className="text-5xl font-bold text-white mb-6" style={{animation: `fadeInUp 1s ease-out`}}>{slide.content.title}</h1>
              <h2 className="text-3xl text-white/80 mb-12" style={{animation: `fadeInUp 1s ease-out 0.3s both`}}>{slide.content.subtitle}</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-white/90 leading-relaxed whitespace-pre-line" style={{animation: `fadeInUp 1s ease-out 0.6s both`}}>{slide.content.description}</p>
              </div>
              <div className="mt-12 flex justify-center space-x-4" style={{animation: `fadeInUp 1s ease-out 0.9s both`}}>
                <Lightbulb size={32} className="text-yellow-400 animate-pulse" />
                <Users size={32} className="text-blue-400 animate-bounce" />
                <TrendingUp size={32} className="text-green-400 animate-pulse" />
              </div>
            </div>
          </div>
        );

      case 'what-now':
        return (
          <div className="h-full flex items-center" style={{backgroundColor: '#F5F0EB'}}>
            <div className="w-full p-16">
              <h1 className="text-6xl font-bold text-black mb-8" style={{animation: `bounceIn 1s ease-out`}}>{slide.content.title}</h1>
              <p className="text-xl text-gray-800 mb-8 max-w-4xl" style={{animation: `fadeInUp 0.8s ease-out 0.2s both`}}>{slide.content.subtitle}</p>
              
              <div className="mb-8" style={{animation: `fadeInUp 0.8s ease-out 0.4s both`}}>
                <p className="text-lg text-gray-800 mb-6">Da er neste steg enkelt:</p>
                <div className="space-y-6 mb-8">
                  {slide.content.steps.map((step: string, index: number) => (
                    <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300" style={{animation: `slideInLeft 0.6s ease-out ${0.6 + index * 0.2}s both`}}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 text-white font-bold" style={{backgroundColor: '#a88157'}}>
                        {index + 1}
                      </div>
                      <p className="text-gray-800 flex-1">{step}</p>
                      <CheckCircle size={20} className="text-green-500 ml-4" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8 max-w-4xl hover:shadow-xl transition-all duration-300" style={{animation: `fadeInUp 0.8s ease-out 1s both`}}>
                <div className="flex items-start">
                  <Target className="mr-4 mt-1" style={{color: '#a88157'}} size={24} />
                  <p className="text-gray-800 leading-relaxed">{slide.content.cta}</p>
                </div>
              </div>

              <div className="bg-gray-800 text-white p-6 rounded-xl max-w-md" style={{animation: `slideInUp 0.8s ease-out 1.2s both`}}>
                <div className="font-bold text-lg mb-2">{slide.content.contact.company}</div>
                <div className="space-y-1 text-sm opacity-90">
                  <div>{slide.content.contact.address}</div>
                  <div className="hover:text-blue-300 cursor-pointer transition-colors">t: {slide.content.contact.phone}</div>
                  <div className="hover:text-blue-300 cursor-pointer transition-colors">e: {slide.content.contact.email}</div>
                  <div className="hover:text-blue-300 cursor-pointer transition-colors">w: {slide.content.contact.website}</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Slide not found</div>;
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 relative overflow-hidden">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes rotate360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
      `}</style>

      {/* Main slide content */}
      <div className="w-full h-full" key={animationKey}>
        {renderSlide(slides[currentSlide])}
      </div>

      {/* Enhanced Navigation Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-black/90 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-2xl border border-white/20">
        {/* Auto-play controls */}
        <button
          onClick={toggleAutoPlay}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
          title={isAutoPlay ? 'Pause auto-play' : 'Start auto-play'}
        >
          {isAutoPlay ? <Pause size={18} color="white" /> : <Play size={18} color="white" />}
        </button>

        <div className="w-px h-6 bg-white/30"></div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft size={18} color="white" />
        </button>

        {/* Slide indicators */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-8 h-3 bg-white' 
                  : 'w-3 h-3 bg-white/40 hover:bg-white/60 hover:scale-125'
              }`}
              title={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
        >
          <ChevronRight size={18} color="white" />
        </button>

        <div className="w-px h-6 bg-white/30"></div>

        {/* Reset button */}
        <button
          onClick={resetPresentation}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
          title="Reset presentation"
        >
          <RotateCcw size={18} color="white" />
        </button>
      </div>

      {/* Enhanced slide counter with progress */}
      <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm rounded-2xl px-6 py-3 text-white border border-white/20">
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium">{currentSlide + 1} / {slides.length}</span>
          <div className="w-16 h-1 bg-white/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-500 ease-out"
              style={{width: `${((currentSlide + 1) / slides.length) * 100}%`}}
            ></div>
          </div>
        </div>
      </div>

      {/* View mode toggle */}
      <div className="absolute top-6 left-6 flex space-x-2">
        <button
          onClick={() => setViewMode('presentation')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            viewMode === 'presentation' 
              ? 'bg-white text-black shadow-lg' 
              : 'bg-black/60 text-white hover:bg-black/80'
          }`}
        >
          Presentasjon
        </button>
        <button
          onClick={() => {setViewMode('overview'); goToSlide(11);}}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            viewMode === 'overview' 
              ? 'bg-white text-black shadow-lg' 
              : 'bg-black/60 text-white hover:bg-black/80'
          }`}
        >
          Dashboard
        </button>
      </div>

      {/* Phase indicator */}
      {currentSlide >= 3 && currentSlide <= 10 && (
        <div className="absolute top-1/2 left-6 transform -translate-y-1/2 space-y-4">
          {[
            { name: 'Oppdagelse', slides: [3, 4], color: '#ff6b6b', icon: Search },
            { name: 'Vurdering', slides: [5, 6], color: '#4ecdc4', icon: Users },
            { name: 'Anskaffelse', slides: [7, 8], color: '#45b7d1', icon: CheckCircle },
            { name: 'Bruk', slides: [9, 10], color: '#96ceb4', icon: Settings }
          ].map((phase, index) => {
            const IconComp = phase.icon;
            const isActive = phase.slides.includes(currentSlide);
            return (
              <div
                key={index}
                className={`flex items-center space-x-3 p-3 rounded-r-lg transition-all duration-300 ${
                  isActive ? 'bg-white/20 backdrop-blur-sm transform translate-x-0' : 'transform -translate-x-8 opacity-60 hover:translate-x-0 hover:opacity-100'
                }`}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{backgroundColor: phase.color}}
                ></div>
                <IconComp size={16} color={isActive ? 'white' : '#ccc'} />
                <span className={`text-sm font-medium ${isActive ? 'text-white' : 'text-gray-300'}`}>
                  {phase.name}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/* Amesto branding */}
      <div className="absolute bottom-6 right-6 text-right">
        <div className="text-black font-bold text-xl drop-shadow-lg">amesto</div>
        <div className="text-gray-600 text-sm">Solutions</div>
      </div>

      {/* Keyboard navigation hint */}
      <div className="absolute bottom-20 left-6 text-xs text-gray-500 bg-white/80 px-3 py-1 rounded-full">
        Bruk ← → eller klikk for navigasjon
      </div>

      {/* Auto-play progress bar */}
      {isAutoPlay && (
        <div className="absolute top-0 left-0 w-full h-1 bg-black/20">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-8000 ease-linear"
            style={{
              width: '100%',
              animation: 'autoPlayProgress 8s linear infinite'
            }}
          ></div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes rotate360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes autoPlayProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
        .hover\\:scale-110:hover {
          transform: scale(1.1);
        }
        .hover\\:scale-125:hover {
          transform: scale(1.25);
        }
      `}</style>
    </div>
  );
};

export default ERPPresentation;
