"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

export type Language = 'es' | 'en' | 'pt'

interface Translations {
  nav: {
    practice: string
    classes: string
    experience: string
    about: string
    plans: string
    contact: string
    language: string
  }
  hero: {
    subtitle: string
    cta: string
    ctaSecondary: string
  }
  practice: {
    title: string
    description: string
    breath: { title: string; description: string }
    movement: { title: string; description: string }
    presence: { title: string; description: string }
    transformation: { title: string; description: string }
  }
  classes: {
    title: string
    subtitle: string
    virtual: {
      title: string
      description: string
      schedule: string
    }
    presential: {
      title: string
      description: string
      schedule: string
      location: string
    }
    levels: {
      title: string
      description: string
    }
    reserve: string
  }
  experience: {
    title: string
    subtitle: string
  }
  aboutRafaela: {
    title: string
    subtitle: string
    description: string[]
  }
  plans: {
    title: string
    subtitle: string
    popular: string
    weekly1: { title: string; price: string; period: string; features: string[] }
    weekly2: { title: string; price: string; period: string; features: string[] }
    single: { title: string; price: string; period: string; features: string[] }
    select: string
  }
  contact: {
    title: string
    subtitle: string
    whatsapp: string
    instagram: string
    location: string
  }
  footer: {
    rights: string
    developer: string
  }
}

const translations: Record<Language, Translations> = {
  es: {
    nav: {
      practice: 'La Práctica',
      classes: 'Clases',
      experience: 'Experiencia',
      about: 'Rafaela',
      plans: 'Planes',
      contact: 'Contacto',
      language: 'Idioma',
    },
    hero: {
      subtitle: 'Respirá, practicá, volvé a vos',
      cta: 'Reservar clase',
      ctaSecondary: 'Ver horarios',
    },
    practice: {
      title: 'La Práctica',
      description: 'Ashtanga Yoga es una práctica de respiración, presencia y movimiento consciente. Una secuencia que se repite y se transforma con vos, clase a clase, desde el ritmo propio de cada cuerpo.',
      breath: {
        title: 'Respiración',
        description: 'El ujjayi pranayama guía cada movimiento, creando un ritmo interno que aquieta la mente.',
      },
      movement: {
        title: 'Movimiento',
        description: 'Secuencias fluidas que honran la tradición milenaria del Ashtanga Vinyasa Yoga.',
      },
      presence: {
        title: 'Presencia',
        description: 'Cada postura es una meditación en movimiento, una oportunidad para estar completamente presente.',
      },
      transformation: {
        title: 'Transformación',
        description: 'A través de la práctica constante, el cuerpo y la mente se transforman sutilmente.',
      },
    },
    classes: {
      title: 'Clases',
      subtitle: 'Encuentra tu espacio de práctica',
      virtual: {
        title: 'Clases Virtuales',
        description: 'Práctica guiada en vivo para sostener tu rutina desde donde estés.',
        schedule: 'Lunes y Miércoles — 17:30',
      },
      presential: {
        title: 'Clases Presenciales',
        description: 'Encuentros cuidados para profundizar la técnica, la respiración y la escucha del cuerpo.',
        schedule: 'Lunes y Miércoles — 19:30',
        location: 'Renacer Studio — Pinares, Maldonado',
      },
      levels: {
        title: 'Todos los Niveles',
        description: 'No necesitás experiencia previa. La práctica se acompaña según tu proceso.',
      },
      reserve: 'Reservar',
    },
    experience: {
      title: 'Experiencia',
      subtitle: 'Práctica, presencia y movimiento',
    },
    aboutRafaela: {
      title: 'Rafaela',
      subtitle: 'Guía de práctica',
      description: [
        'Mi camino con el yoga comenzó como una búsqueda personal de equilibrio, presencia y quietud interior. En el Ashtanga encontré una práctica honesta: exigente, sensible y profundamente transformadora.',
        'Cada encuentro en el mat es una oportunidad para escuchar el cuerpo, ordenar la respiración y observar cómo estamos habitando el presente.',
        'Mi intención es acompañar una práctica cercana y cuidada, donde cada persona pueda avanzar a su ritmo y encontrar su propio flujo.',
      ],
    },
    plans: {
      title: 'Planes',
      subtitle: 'Elegí tu ritmo de práctica',
      popular: 'Popular',
      weekly1: {
        title: '1 vez por semana',
        price: '$1800',
        period: '/ mes',
        features: ['1 clase semanal', 'Virtual o presencial', 'Flexibilidad horaria'],
      },
      weekly2: {
        title: '2 veces por semana',
        price: '$2200',
        period: '/ mes',
        features: ['2 clases semanales', 'Virtual o presencial', 'Mayor compromiso', 'Mejor valor'],
      },
      single: {
        title: 'Clase suelta',
        price: '$600',
        period: '',
        features: ['Sin compromiso', 'Pago por clase', 'Ideal para probar'],
      },
      select: 'Seleccionar',
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Conectemos',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      location: 'Ubicación',
    },
    footer: {
      rights: '© 2026 Samudra Vinyāsa. Todos los derechos reservados.',
      developer: 'Desarrollado por Martin Pintos · Analista de Sistemas',
    },
  },
  en: {
    nav: {
      practice: 'The Practice',
      classes: 'Classes',
      experience: 'Experience',
      about: 'Rafaela',
      plans: 'Plans',
      contact: 'Contact',
      language: 'Language',
    },
    hero: {
      subtitle: 'Breathe, practice, return to yourself',
      cta: 'Book a class',
      ctaSecondary: 'View schedule',
    },
    practice: {
      title: 'The Practice',
      description: 'Ashtanga Yoga is a practice of breath, presence, and conscious movement. A sequence that repeats and evolves with you, class by class, at the rhythm of your own body.',
      breath: {
        title: 'Breath',
        description: 'Ujjayi pranayama guides each movement, creating an internal rhythm that quiets the mind.',
      },
      movement: {
        title: 'Movement',
        description: 'Flowing sequences that honor the ancient tradition of Ashtanga Vinyasa Yoga.',
      },
      presence: {
        title: 'Presence',
        description: 'Each posture is a meditation in motion, an opportunity to be completely present.',
      },
      transformation: {
        title: 'Transformation',
        description: 'Through consistent practice, body and mind are subtly transformed.',
      },
    },
    classes: {
      title: 'Classes',
      subtitle: 'Find your practice space',
      virtual: {
        title: 'Virtual Classes',
        description: 'Live guided practice to support your routine wherever you are.',
        schedule: 'Monday and Wednesday — 5:30 PM',
      },
      presential: {
        title: 'In-Person Classes',
        description: 'Carefully held sessions to deepen technique, breath, and body awareness.',
        schedule: 'Monday and Wednesday — 7:30 PM',
        location: 'Renacer Studio — Pinares, Maldonado',
      },
      levels: {
        title: 'All Levels',
        description: 'No previous experience is needed. The practice is guided according to your process.',
      },
      reserve: 'Reserve',
    },
    experience: {
      title: 'Experience',
      subtitle: 'Practice, presence, and movement',
    },
    aboutRafaela: {
      title: 'Rafaela',
      subtitle: 'Practice Guide',
      description: [
        'My journey with yoga began as a personal search for balance, presence, and inner stillness. In Ashtanga I found an honest practice: demanding, sensitive, and deeply transformative.',
        'Every meeting on the mat is an opportunity to listen to the body, organize the breath, and observe how we are inhabiting the present.',
        'My intention is to guide a close and careful practice, where each person can move at their own rhythm and find their own flow.',
      ],
    },
    plans: {
      title: 'Plans',
      subtitle: 'Choose your practice rhythm',
      popular: 'Popular',
      weekly1: {
        title: 'Once a week',
        price: '$1800',
        period: '/ month',
        features: ['1 weekly class', 'Online or in person', 'Flexible scheduling'],
      },
      weekly2: {
        title: 'Twice a week',
        price: '$2200',
        period: '/ month',
        features: ['2 weekly classes', 'Online or in person', 'Greater commitment', 'Best value'],
      },
      single: {
        title: 'Single class',
        price: '$600',
        period: '',
        features: ['No commitment', 'Pay per class', 'Ideal for trying it out'],
      },
      select: 'Select',
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's connect",
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      location: 'Location',
    },
    footer: {
      rights: '© 2026 Samudra Vinyāsa. All rights reserved.',
      developer: 'Developed by Martin Pintos · Systems Analyst',
    },
  },
  pt: {
    nav: {
      practice: 'A Prática',
      classes: 'Aulas',
      experience: 'Experiência',
      about: 'Rafaela',
      plans: 'Planos',
      contact: 'Contato',
      language: 'Idioma',
    },
    hero: {
      subtitle: 'Respire, pratique, volte para si',
      cta: 'Reservar aula',
      ctaSecondary: 'Ver horários',
    },
    practice: {
      title: 'A Prática',
      description: 'Ashtanga Yoga é uma prática de respiração, presença e movimento consciente. Uma sequência que se repete e se transforma com você, aula após aula, no ritmo do seu próprio corpo.',
      breath: {
        title: 'Respiração',
        description: 'O ujjayi pranayama guia cada movimento, criando um ritmo interno que aquieta a mente.',
      },
      movement: {
        title: 'Movimento',
        description: 'Sequências fluidas que honram a tradição milenar do Ashtanga Vinyasa Yoga.',
      },
      presence: {
        title: 'Presença',
        description: 'Cada postura é uma meditação em movimento, uma oportunidade de estar completamente presente.',
      },
      transformation: {
        title: 'Transformação',
        description: 'Através da prática constante, corpo e mente se transformam sutilmente.',
      },
    },
    classes: {
      title: 'Aulas',
      subtitle: 'Encontre seu espaço de prática',
      virtual: {
        title: 'Aulas Virtuais',
        description: 'Prática guiada ao vivo para sustentar sua rotina onde você estiver.',
        schedule: 'Segunda e Quarta — 17:30',
      },
      presential: {
        title: 'Aulas Presenciais',
        description: 'Encontros cuidados para aprofundar técnica, respiração e escuta do corpo.',
        schedule: 'Segunda e Quarta — 19:30',
        location: 'Renacer Studio — Pinares, Maldonado',
      },
      levels: {
        title: 'Todos os Níveis',
        description: 'Não é preciso ter experiência prévia. A prática acompanha o seu processo.',
      },
      reserve: 'Reservar',
    },
    experience: {
      title: 'Experiência',
      subtitle: 'Prática, presença e movimento',
    },
    aboutRafaela: {
      title: 'Rafaela',
      subtitle: 'Guia de prática',
      description: [
        'Minha jornada com o yoga começou como uma busca pessoal por equilíbrio, presença e quietude interior. No Ashtanga encontrei uma prática honesta: exigente, sensível e profundamente transformadora.',
        'Cada encontro no tapete é uma oportunidade para escutar o corpo, organizar a respiração e observar como estamos habitando o presente.',
        'Minha intenção é acompanhar uma prática próxima e cuidada, onde cada pessoa possa avançar no seu ritmo e encontrar seu próprio fluxo.',
      ],
    },
    plans: {
      title: 'Planos',
      subtitle: 'Escolha seu ritmo de prática',
      popular: 'Popular',
      weekly1: {
        title: '1 vez por semana',
        price: '$1800',
        period: '/ mês',
        features: ['1 aula semanal', 'Virtual ou presencial', 'Horários flexíveis'],
      },
      weekly2: {
        title: '2 vezes por semana',
        price: '$2200',
        period: '/ mês',
        features: ['2 aulas semanais', 'Virtual ou presencial', 'Maior compromisso', 'Melhor valor'],
      },
      single: {
        title: 'Aula avulsa',
        price: '$600',
        period: '',
        features: ['Sem compromisso', 'Pagamento por aula', 'Ideal para experimentar'],
      },
      select: 'Selecionar',
    },
    contact: {
      title: 'Contato',
      subtitle: 'Vamos nos conectar',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      location: 'Localização',
    },
    footer: {
      rights: '© 2026 Samudra Vinyāsa. Todos os direitos reservados.',
      developer: 'Desenvolvido por Martin Pintos · Analista de Sistemas',
    },
  },
}

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  return (
    <I18nContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

export const languageNames: Record<Language, string> = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
}
