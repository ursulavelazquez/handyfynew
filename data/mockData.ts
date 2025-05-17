// Mock data for the application

// Categories
export const mockCategories = [
  {
    id: 'plumbing',
    name: 'Plomería',
    icon: 'https://images.unsplash.com/vector-1739806775931-c11ec3f93762?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'electrical',
    name: 'Electricidad',
    icon: 'https://plus.unsplash.com/premium_vector-1731660866826-9d0759c165fc?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'cleaning',
    name: 'Limpieza',
    icon: 'https://plus.unsplash.com/premium_vector-1731922150890-9eaee153a8a4?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'appliances',
    name: 'Electrodomésticos',
    icon: 'https://plus.unsplash.com/premium_vector-1728574629137-cd3b17225462?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'painting',
    name: 'Albañilería',
    icon: 'https://plus.unsplash.com/premium_vector-1731922150968-344f96fd7381?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

// Services
export const mockServices = [
  {
    id: 1,
    title: 'Plomero Profesional - Arreglos y Reparaciones',
    category: 'Plomería',
    categoryId: 'plumbing',
    price: 2500,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    providerName: 'Carlos Gutiérrez',
    providerAvatar: 'https://images.pexels.com/photos/4487450/pexels-photo-4487450.jpeg',
    providerId: '1',
    location: 'Palermo, Buenos Aires',
    description: 'Servicio de plomería profesional con más de 15 años de experiencia en el rubro. Realizo todo tipo de trabajos: instalaciones, reparaciones, mantenimiento, detección y solución de pérdidas de agua, instalación de griferías, sanitarios, desagües, bombas de agua y más.',
    gallery: [
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4116706/pexels-photo-4116706.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4116712/pexels-photo-4116712.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4116714/pexels-photo-4116714.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4116716/pexels-photo-4116716.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    services: [
      'Reparación de pérdidas y filtraciones',
      'Instalación y reparación de cañerías',
      'Instalación de griferías y sanitarios',
      'Destapaciones de cañerías',
      'Instalación de termotanques y calefones',
      'Conversión de calefones a termotanques',
      'Reparación de bombas de agua'
    ],
    reviews: [
      {
        id: 1,
        userName: 'Laura Méndez',
        userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 5.0,
        date: '15/05/2023',
        text: 'Excelente servicio. Carlos llegó puntual, identificó el problema rápidamente y lo solucionó en poco tiempo. Muy profesional y dejó todo limpio. Lo recomiendo ampliamente.'
      },
      {
        id: 2,
        userName: 'Martín Rodríguez',
        userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4.5,
        date: '03/04/2023',
        text: 'Muy buen trabajo en la instalación del termotanque nuevo. Puntual y prolijo. Lo único para mejorar es que podría haber explicado más sobre mantenimiento.'
      },
      {
        id: 3,
        userName: 'Sofía Gómez',
        userAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 5.0,
        date: '22/03/2023',
        text: 'Carlos solucionó una pérdida complicada que otros plomeros no pudieron arreglar. Muy honesto con el presupuesto y trabajo impecable. Definitivamente lo volveré a llamar.'
      }
    ]
  },
  {
    id: 2,
    title: 'Electricista Matriculado - Instalaciones y Reparaciones',
    category: 'Electricidad',
    categoryId: 'electrical',
    price: 2800,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/257886/pexels-photo-257886.jpeg?auto=compress&cs=tinysrgb&w=800',
    providerName: 'Marcos Sánchez',
    providerAvatar: 'https://images.pexels.com/photos/8961069/pexels-photo-8961069.jpeg?auto=compress&cs=tinysrgb&w=150',
    providerId: '2',
    location: 'Recoleta, Buenos Aires',
    description: 'Electricista matriculado con amplia experiencia en instalaciones eléctricas residenciales y comerciales. Realizo todo tipo de trabajos eléctricos, desde instalaciones completas hasta pequeñas reparaciones, siempre con materiales de primera calidad y cumpliendo con todas las normas de seguridad vigentes.',
    gallery: [
      'https://images.pexels.com/photos/257886/pexels-photo-257886.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8005398/pexels-photo-8005398.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8005399/pexels-photo-8005399.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    services: [
      'Instalaciones eléctricas completas',
      'Reparación de cortocircuitos',
      'Instalación de tableros',
      'Colocación de luces y artefactos',
      'Instalación de termos eléctricos',
      'Detección y solución de fugas eléctricas',
      'Instalación de dimmers y domótica básica'
    ],
    reviews: [
      {
        id: 1,
        userName: 'Pablo Fernández',
        userAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 5.0,
        date: '28/05/2023',
        text: 'Marcos hizo un trabajo excelente renovando toda la instalación eléctrica de mi departamento. Es muy profesional, ordenado y cumplidor. El precio fue justo por la calidad del trabajo.'
      },
      {
        id: 2,
        userName: 'Diana López',
        userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4.7,
        date: '17/04/2023',
        text: 'Muy buen servicio. Resolvió un problema de cortocircuitos que venía teniendo hace tiempo. Explicó todo claramente y dejó recomendaciones útiles.'
      }
    ]
  },
  {
    id: 3,
    title: 'Servicio de Limpieza Profesional - Hogar y Oficinas',
    category: 'Limpieza',
    categoryId: 'cleaning',
    price: 2000,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=800',
    providerName: 'Lucía Martínez',
    providerAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    providerId: '3',
    location: 'Belgrano, Buenos Aires',
    description: 'Ofrezco servicio de limpieza profunda para hogares y oficinas con productos ecológicos y de alta calidad. Tengo amplia experiencia en limpieza de propiedades y garantizo un trabajo impecable, prestando atención a cada detalle para dejar su espacio en perfectas condiciones.',
    gallery: [
      'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4108716/pexels-photo-4108716.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4108717/pexels-photo-4108717.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4108718/pexels-photo-4108718.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    services: [
      'Limpieza general de hogares',
      'Limpieza de oficinas',
      'Limpieza profunda de cocinas',
      'Limpieza de baños',
      'Limpieza post-construcción',
      'Limpieza de vidrios y cristales',
      'Lavado de alfombras y tapizados'
    ],
    reviews: [
      {
        id: 1,
        userName: 'Carolina Vega',
        userAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 5.0,
        date: '10/06/2023',
        text: 'Lucía hace un trabajo excepcional. Contrato su servicio mensualmente para mi departamento y siempre queda impecable. Muy detallista y responsable.'
      },
      {
        id: 2,
        userName: 'Roberto Álvarez',
        userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4.5,
        date: '22/05/2023',
        text: 'Contratamos a Lucía para la limpieza post-obra y quedamos muy satisfechos. Trabajó arduamente y dejó todo reluciente. Único detalle: llegó un poco tarde, pero compensó con su profesionalismo.'
      },
      {
        id: 3,
        userName: 'María Torres',
        userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4.8,
        date: '05/05/2023',
        text: 'Excelente servicio de limpieza para mi oficina. Lucía es muy profesional y utiliza productos que dejan un agradable aroma. La recomiendo completamente.'
      }
    ]
  },
  {
    id: 4,
    title: 'Técnico en Refrigeración y Aire Acondicionado',
    category: 'Electrodomésticos',
    categoryId: 'appliances',
    price: 3000,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/4108718/pexels-photo-4108718.jpeg?auto=compress&cs=tinysrgb&w=800',
    providerName: 'Miguel Torres',
    providerAvatar: 'https://images.pexels.com/photos/8961071/pexels-photo-8961071.jpeg?auto=compress&cs=tinysrgb&w=150',
    providerId: '4',
    location: 'Caballito, Buenos Aires',
    description: 'Técnico especializado en sistemas de refrigeración y aire acondicionado con más de 10 años de experiencia. Realizo instalaciones, mantenimiento y reparaciones de equipos split, ventana, portátiles y sistemas centrales para hogares y comercios. Trabajo con todas las marcas disponibles en el mercado argentino.',
    gallery: [
      'https://images.pexels.com/photos/4108718/pexels-photo-4108718.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4108719/pexels-photo-4108719.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4108720/pexels-photo-4108720.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4108721/pexels-photo-4108721.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    services: [
      'Instalación de aires acondicionados',
      'Mantenimiento preventivo',
      'Reparación de equipos',
      'Carga de gas refrigerante',
      'Limpieza de filtros y componentes',
      'Detección y reparación de fugas',
      'Asesoramiento para compra de equipos nuevos'
    ],
    reviews: [
      {
        id: 1,
        userName: 'Alejandro Rossi',
        userAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4.5,
        date: '20/04/2023',
        text: 'Miguel instaló dos equipos split en mi casa. Trabajo prolijo y rápido. Me explicó cómo usar el control remoto y programar las funciones. Buen precio en comparación con otros técnicos.'
      },
      {
        id: 2,
        userName: 'Patricia Suárez',
        userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4.8,
        date: '15/03/2023',
        text: 'Excelente servicio. Miguel reparó mi aire acondicionado que otros técnicos daban por perdido. Honesto con el presupuesto y muy profesional. Lo recomiendo ampliamente.'
      }
    ]
  },
  {
    id: 5,
    title: 'Pintor Profesional - Interior y Exterior',
    category: 'Pintura',
    categoryId: 'painting',
    price: 1800,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/4108732/pexels-photo-4108732.jpeg?auto=compress&cs=tinysrgb&w=800',
    providerName: 'Ricardo López',
    providerAvatar: 'https://images.pexels.com/photos/8961073/pexels-photo-8961073.jpeg?auto=compress&cs=tinysrgb&w=150',
    providerId: '5',
    location: 'Almagro, Buenos Aires',
    description: 'Pintor profesional con amplia experiencia en trabajos de interior y exterior. Realizo todo tipo de trabajos de pintura: paredes, techos, aberturas, revestimientos y efectos decorativos. Trabajo con materiales de primera calidad para garantizar un acabado perfecto y duradero.',
    gallery: [
      'https://images.pexels.com/photos/4108732/pexels-photo-4108732.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4108733/pexels-photo-4108733.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4108734/pexels-photo-4108734.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4108735/pexels-photo-4108735.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    services: [
      'Pintura de interiores',
      'Pintura de exteriores',
      'Pintura de aberturas',
      'Trabajos en altura',
      'Efectos decorativos',
      'Colocación de papel tapiz',
      'Reparación de grietas y humedad'
    ],
    reviews: [
      {
        id: 1,
        userName: 'Mariano García',
        userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4.3,
        date: '05/06/2023',
        text: 'Buen trabajo pintando mi living y comedor. Ricardo es detallista y usa buenos materiales. Lo único para mejorar es que se extendió un día más de lo previsto, pero el resultado final lo compensó.'
      },
      {
        id: 2,
        userName: 'Valeria Campos',
        userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4.8,
        date: '20/05/2023',
        text: 'Excelente trabajo pintando el exterior de mi casa. Ricardo es muy profesional, cumplidor y limpio en su trabajo. El acabado quedó perfecto y a un precio razonable.'
      }
    ]
  },
  {
    id: 6,
    title: 'Carpintero Profesional - Muebles a Medida',
    category: 'Carpintería',
    categoryId: 'carpentry',
    price: 2700,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/4108726/pexels-photo-4108726.jpeg?auto=compress&cs=tinysrgb&w=800',
    providerName: 'Sergio Ramírez',
    providerAvatar: 'https://images.pexels.com/photos/8961075/pexels-photo-8961075.jpeg?auto=compress&cs=tinysrgb&w=150',
    providerId: '6',
    location: 'Villa Crespo, Buenos Aires',
    description: 'Carpintero con más de 20 años de experiencia en diseño y fabricación de muebles a medida para hogar y oficina. Trabajo con diferentes tipos de madera y materiales de primera calidad. Ofrezco asesoramiento personalizado, desde el diseño hasta la instalación final, para crear muebles funcionales y duraderos.',
    gallery: [
      'https://images.pexels.com/photos/4108726/pexels-photo-4108726.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4108727/pexels-photo-4108727.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4108728/pexels-photo-4108728.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4108729/pexels-photo-4108729.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    services: [
      'Diseño y fabricación de muebles a medida',
      'Restauración de muebles antiguos',
      'Instalación de pisos de madera',
      'Colocación de puertas y ventanas',
      'Reparación de muebles',
      'Trabajos en madera maciza y melamina',
      'Construcción de decks y pérgolas'
    ],
    reviews: [
      {
        id: 1,
        userName: 'Elena Martínez',
        userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 5.0,
        date: '15/06/2023',
        text: 'Sergio fabricó los muebles para toda mi cocina y quedaron espectaculares. Prestó atención a cada detalle y supo interpretar perfectamente lo que queríamos. Muy conformes con su trabajo.'
      },
      {
        id: 2,
        userName: 'Diego Ortega',
        userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4.7,
        date: '02/05/2023',
        text: 'Le encargué la restauración de una mesa antigua familiar y el resultado superó mis expectativas. Tiene mucha experiencia y pasión por su trabajo. Totalmente recomendable.'
      }
    ]
  }
];

// Service Requests for Providers
export const mockRequests = [
  {
    id: 101,
    clientId: 201,
    clientName: 'Jorge Pérez',
    serviceType: 'Reparación de pérdida de agua',
    description: 'Tengo una pérdida debajo del lavabo de la cocina. El agua sale cuando abro la canilla y ya puse un balde pero necesito una solución urgente.',
    location: 'Palermo, Buenos Aires',
    price: 2000,
    timeAgo: 'hace 15 minutos',
    status: 'pending'
  },
  {
    id: 102,
    clientId: 202,
    clientName: 'María Gómez',
    serviceType: 'Instalación de aire acondicionado',
    description: 'Necesito instalar un aire acondicionado split de 3000 frigorías que acabo de comprar. Es para el living de mi departamento, en un primer piso.',
    location: 'Recoleta, Buenos Aires',
    price: 3500,
    timeAgo: 'hace 1 hora',
    status: 'pending'
  },
  {
    id: 103,
    clientId: 203,
    clientName: 'Luis Rodríguez',
    serviceType: 'Pintura de habitación',
    description: 'Busco pintar una habitación de 3x4 metros. Las paredes están en buen estado, solo necesitan una mano de pintura blanca. Tengo la pintura, solo necesito el servicio.',
    location: 'Belgrano, Buenos Aires',
    price: 2200,
    timeAgo: 'hace 3 horas',
    status: 'pending'
  }
];

// Bookings
export const mockBookings = [
  {
    id: 301,
    serviceId: 1,
    serviceTitle: 'Reparación de cañerías',
    providerId: 1,
    providerName: 'Carlos Gutiérrez',
    providerAvatar: 'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=150',
    providerRating: 4.8,
    clientId: 201,
    clientName: 'Jorge Pérez',
    clientAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    date: '28 Jun 2023',
    time: '10:00',
    location: 'Palermo, Buenos Aires',
    price: 2500,
    status: 'upcoming',
    statusText: 'Confirmado'
  },
  {
    id: 302,
    serviceId: 3,
    serviceTitle: 'Limpieza profunda de hogar',
    providerId: 3,
    providerName: 'Lucía Martínez',
    providerAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    providerRating: 4.7,
    clientId: 201,
    clientName: 'Jorge Pérez',
    clientAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    date: '30 Jun 2023',
    time: '14:00',
    location: 'Palermo, Buenos Aires',
    price: 3000,
    status: 'upcoming',
    statusText: 'Confirmado'
  },
  {
    id: 303,
    serviceId: 2,
    serviceTitle: 'Instalación de luces',
    providerId: 2,
    providerName: 'Marcos Sánchez',
    providerAvatar: 'https://images.pexels.com/photos/8961069/pexels-photo-8961069.jpeg?auto=compress&cs=tinysrgb&w=150',
    providerRating: 4.9,
    clientId: 201,
    clientName: 'Jorge Pérez',
    clientAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    date: '21 Jun 2023',
    time: '11:30',
    location: 'Palermo, Buenos Aires',
    price: 2800,
    status: 'ongoing',
    statusText: 'En proceso'
  },
  {
    id: 304,
    serviceId: 4,
    serviceTitle: 'Mantenimiento de aire acondicionado',
    providerId: 4,
    providerName: 'Miguel Torres',
    providerAvatar: 'https://images.pexels.com/photos/8961071/pexels-photo-8961071.jpeg?auto=compress&cs=tinysrgb&w=150',
    providerRating: 4.6,
    clientId: 201,
    clientName: 'Jorge Pérez',
    clientAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    date: '15 Jun 2023',
    time: '09:00',
    location: 'Palermo, Buenos Aires',
    price: 2200,
    status: 'completed',
    statusText: 'Completado',
    isRated: false
  },
  {
    id: 305,
    serviceId: 5,
    serviceTitle: 'Pintura de living',
    providerId: 5,
    providerName: 'Ricardo López',
    providerAvatar: 'https://images.pexels.com/photos/8961073/pexels-photo-8961073.jpeg?auto=compress&cs=tinysrgb&w=150',
    providerRating: 4.5,
    clientId: 201,
    clientName: 'Jorge Pérez',
    clientAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    date: '10 Jun 2023',
    time: '08:00',
    location: 'Palermo, Buenos Aires',
    price: 4500,
    status: 'completed',
    statusText: 'Completado',
    isRated: true
  },
  {
    id: 306,
    serviceId: 6,
    serviceTitle: 'Reparación de mesa',
    providerId: 6,
    providerName: 'Sergio Ramírez',
    providerAvatar: 'https://images.pexels.com/photos/8961075/pexels-photo-8961075.jpeg?auto=compress&cs=tinysrgb&w=150',
    providerRating: 4.9,
    clientId: 201,
    clientName: 'Jorge Pérez',
    clientAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    date: '05 Jun 2023',
    time: '16:00',
    location: 'Palermo, Buenos Aires',
    price: 1800,
    status: 'cancelled',
    statusText: 'Cancelado'
  }
];

// Chat messages
export const mockMessages = [
  {
    id: '1',
    text: 'Hola, estoy interesado en tu servicio de plomería',
    sender: 'me',
    timestamp: '09:30',
    status: 'read'
  },
  {
    id: '2',
    text: 'Hola! Claro, con gusto puedo ayudarte. ¿Qué tipo de problema tienes?',
    sender: 'other',
    timestamp: '09:32',
    status: 'delivered'
  },
  {
    id: '3',
    text: 'Tengo una pérdida en la canilla del baño. ¿Cuándo podrías venir a verla?',
    sender: 'me',
    timestamp: '09:33',
    status: 'read'
  },
  {
    id: '4',
    text: 'Podría ir mañana entre las 10 y 12 de la mañana. ¿Te parece bien?',
    sender: 'other',
    timestamp: '09:35',
    status: 'delivered'
  },
  {
    id: '5',
    text: 'Sí, perfecto. Mi dirección es Av. Santa Fe 1234, depto 5B',
    sender: 'me',
    timestamp: '09:38',
    status: 'read'
  },
  {
    id: '6',
    text: 'Excelente. ¿Podrías enviarme una foto del problema para tener una idea?',
    sender: 'other',
    timestamp: '09:40',
    status: 'delivered'
  },
  {
    id: '7',
    image: 'https://images.pexels.com/photos/4116714/pexels-photo-4116714.jpeg?auto=compress&cs=tinysrgb&w=800',
    sender: 'me',
    timestamp: '09:43',
    status: 'read'
  },
  {
    id: '8',
    text: 'Gracias por la foto. Ya veo cuál es el problema. Llevaré las herramientas necesarias. Nos vemos mañana!',
    sender: 'other',
    timestamp: '09:45',
    status: 'delivered'
  },
  {
    id: '9',
    text: 'Genial, muchas gracias! Hasta mañana',
    sender: 'me',
    timestamp: '09:46',
    status: 'read'
  }
];

// Chat list
export const mockChats = [
  {
    id: '1',
    userName: 'Carlos Gutiérrez',
    userAvatar: 'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=150',
    lastMessage: 'Llevaré las herramientas necesarias. Nos vemos mañana!',
    time: '09:45',
    unreadCount: 0,
    isOnline: true
  },
  {
    id: '2',
    userName: 'Marcos Sánchez',
    userAvatar: 'https://images.pexels.com/photos/8961069/pexels-photo-8961069.jpeg?auto=compress&cs=tinysrgb&w=150',
    lastMessage: 'Puedo hacer la instalación el jueves a las 15hs',
    time: 'Ayer',
    unreadCount: 2,
    isOnline: false
  },
  {
    id: '3',
    userName: 'Lucía Martínez',
    userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    lastMessage: 'Gracias por su confianza. Quedó impecable',
    time: '20/06',
    unreadCount: 0,
    isOnline: true
  },
  {
    id: '4',
    userName: 'Miguel Torres',
    userAvatar: 'https://images.pexels.com/photos/8961071/pexels-photo-8961071.jpeg?auto=compress&cs=tinysrgb&w=150',
    lastMessage: 'Perfecto! Estaré allí a la hora acordada',
    time: '18/06',
    unreadCount: 0,
    isOnline: false
  }
];