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
      subtitle: 'Flujo del océano',
      cta: 'Reservar clase',
      ctaSecondary: 'Ver horarios',
    },
    practice: {
      title: 'La Práctica',
      description: 'Ashtanga Yoga es un camino de transformación a través del movimiento consciente, la respiración profunda y la repetición meditativa. Cada práctica es una invitación a encontrarte contigo mismo.',
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
        description: 'Practica desde la comodidad de tu hogar con guía en tiempo real.',
        schedule: 'Lunes y Miércoles — 17:30',
      },
      presential: {
        title: 'Clases Presenciales',
        description: 'Experiencia completa en un espacio diseñado para la práctica.',
        schedule: 'Lunes y Miércoles — 19:30',
        location: 'Renacer Studio — Pinares, Maldonado',
      },
      levels: {
        title: 'Todos los Niveles',
        description: 'Práctica adaptada a tu momento y experiencia personal.',
      },
      reserve: 'Reservar',
    },
    experience: {
      title: 'Experiencia',
      subtitle: 'Momentos de práctica y conexión',
    },
    aboutRafaela: {
      title: 'Rafaela',
      subtitle: 'Guía de práctica',
      description: [
        'Mi camino con el yoga comenzó como una búsqueda personal de equilibrio y quietud interior. El Ashtanga Yoga llegó a mi vida como una revelación: una práctica que combina la disciplina del cuerpo con la libertad del espíritu.',
        'Cada día en el mat es una oportunidad de explorar nuestros límites y expandir nuestra consciencia. Creo profundamente en el poder transformador de esta práctica ancestral.',
        'Mi propósito es crear un espacio seguro y sagrado donde cada practicante pueda encontrar su propio flujo, su propio océano interior.',
      ],
    },
    plans: {
      title: 'Planes',
      subtitle: 'Elige tu ritmo de práctica',
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
      subtitle: 'Ocean Flow',
      cta: 'Book a class',
      ctaSecondary: 'View schedule',
    },
    practice: {
      title: 'The Practice',
      description: 'Ashtanga Yoga is a path of transformation through conscious movement, deep breathing, and meditative repetition. Each practice is an invitation to meet yourself.',
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
        description: 'Practice from the comfort of your home with real-time guidance.',
        schedule: 'Monday and Wednesday — 5:30 PM',
      },
      presential: {
        title: 'In-Person Classes',
        description: 'Complete experience in a space designed for practice.',
        schedule: 'Monday and Wednesday — 7:30 PM',
        location: 'Renacer Studio — Pinares, Maldonado',
      },
      levels: {
        title: 'All Levels',
        description: 'Practice adapted to your moment and personal experience.',
      },
      reserve: 'Reserve',
    },
    experience: {
      title: 'Experience',
      subtitle: 'Moments of practice and connection',
    },
    aboutRafaela: {
      title: 'Rafaela',
      subtitle: 'Practice Guide',
      description: [
        'My journey with yoga began as a personal search for balance and inner stillness. Ashtanga Yoga came into my life as a revelation: a practice that combines bodily discipline with spiritual freedom.',
        'Every day on the mat is an opportunity to explore our limits and expand our consciousness. I deeply believe in the transformative power of this ancestral practice.',
        'My purpose is to create a safe and sacred space where each practitioner can find their own flow, their own inner ocean.',
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
      subtitle: 'Fluxo do oceano',
      cta: 'Reservar aula',
      ctaSecondary: 'Ver horários',
    },
    practice: {
      title: 'A Prática',
      description: 'Ashtanga Yoga é um caminho de transformação através do movimento consciente, respiração profunda e repetição meditativa. Cada prática é um convite para se encontrar consigo mesmo.',
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
        description: 'Pratique do conforto da sua casa com orientação em tempo real.',
        schedule: 'Segunda e Quarta — 17:30',
      },
      presential: {
        title: 'Aulas Presenciais',
        description: 'Experiência completa em um espaço projetado para a prática.',
        schedule: 'Segunda e Quarta — 19:30',
        location: 'Renacer Studio — Pinares, Maldonado',
      },
      levels: {
        title: 'Todos os Níveis',
        description: 'Prática adaptada ao seu momento e experiência pessoal.',
      },
      reserve: 'Reservar',
    },
    experience: {
      title: 'Experiência',
      subtitle: 'Momentos de prática e conexão',
    },
    aboutRafaela: {
      title: 'Rafaela',
      subtitle: 'Guia de prática',
      description: [
        'Minha jornada com o yoga começou como uma busca pessoal por equilíbrio e quietude interior. O Ashtanga Yoga chegou à minha vida como uma revelação: uma prática que combina a disciplina do corpo com a liberdade do espírito.',
        'Cada dia no tapete é uma oportunidade de explorar nossos limites e expandir nossa consciência. Acredito profundamente no poder transformador desta prática ancestral.',
        'Meu propósito é criar um espaço seguro e sagrado onde cada praticante possa encontrar seu próprio fluxo, seu próprio oceano interior.',
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
