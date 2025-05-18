// Mock data for the application

// Categories
export const mockCategories = [
  {
    id: 'plumbing',
    name: 'Plomería',
    icon: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&auto=format&fit=crop'
  },
  {
    id: 'electrical',
    name: 'Electricidad',
    icon: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&auto=format&fit=crop'
  },
  {
    id: 'cleaning',
    name: 'Limpieza',
    icon: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop'
  },
  {
    id: 'appliances',
    name: 'Electrodomésticos',
    icon: 'https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?w=800&auto=format&fit=crop'
  },
  {
    id: 'masonry',
    name: 'Albañilería',
    icon: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop'
  }
];

// Services
export const mockServices = [
  {
    id: 1,
    title: 'Plomero Profesional - Arreglos y Reparaciones',
    category: 'Plomería',
    categoryId: 'plumbing',
    price: 15000,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg',
    providerName: 'Carlos Gutiérrez',
    providerAvatar: 'https://images.pexels.com/photos/4487450/pexels-photo-4487450.jpeg',
    providerId: '1',
    location: 'Palermo, Buenos Aires',
    description: 'Servicio de plomería profesional con más de 15 años de experiencia. Realizo todo tipo de trabajos: instalaciones, reparaciones, mantenimiento y más.',
    gallery: [
      'https://images.pexels.com/photos/8978603/pexels-photo-8978603.jpeg',
      'https://images.pexels.com/photos/11062798/pexels-photo-11062798.jpeg',
      'https://images.pexels.com/photos/16790205/pexels-photo-16790205.jpeg'
    ],
    services: [
      'Reparación de pérdidas y filtraciones',
      'Instalación y reparación de cañerías',
      'Instalación de griferías y sanitarios',
      'Destapaciones',
      'Instalación de termotanques'
    ]
  },
  {
    id: 2,
    title: 'Electricista Matriculado - Instalaciones y Reparaciones',
    category: 'Electricidad',
    categoryId: 'electrical',
    price: 28000,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/257886/pexels-photo-257886.jpeg',
    providerName: 'Marcos Sánchez',
    providerAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    providerId: '2',
    location: 'Recoleta, Buenos Aires',
    description: 'Electricista matriculado con amplia experiencia en instalaciones eléctricas residenciales y comerciales.',
    gallery: [
      'https://images.pexels.com/photos/257886/pexels-photo-257886.jpeg',
      'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg',
      'https://images.pexels.com/photos/8005398/pexels-photo-8005398.jpeg'
    ],
    services: [
      'Instalaciones eléctricas completas',
      'Reparación de cortocircuitos',
      'Instalación de tableros',
      'Colocación de luces',
      'Instalación de termos eléctricos'
    ]
  },
  {
    id: 3,
    title: 'Servicio de Limpieza Profesional',
    category: 'Limpieza',
    categoryId: 'cleaning',
    price: 20000,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg',
    providerName: 'Lucía Martínez',
    providerAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    providerId: '3',
    location: 'Belgrano, Buenos Aires',
    description: 'Servicio de limpieza profesional para hogares y oficinas con productos ecológicos.',
    gallery: [
      'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg',
      'https://images.pexels.com/photos/4108716/pexels-photo-4108716.jpeg',
      'https://images.pexels.com/photos/4108717/pexels-photo-4108717.jpeg'
    ],
    services: [
      'Limpieza general',
      'Limpieza profunda',
      'Limpieza de oficinas',
      'Limpieza post obra',
      'Lavado de alfombras'
    ]
  },
  {
    id: 4,
    title: 'Técnico en Electrodomésticos',
    category: 'Electrodomésticos',
    categoryId: 'appliances',
    price: 15000,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/4108720/pexels-photo-4108720.jpeg',
    providerName: 'Miguel Torres',
    providerAvatar: 'https://images.pexels.com/photos/1181687/pexels-photo-1181687.jpeg',
    providerId: '4',
    location: 'Caballito, Buenos Aires',
    description: 'Reparación de electrodomésticos de todas las marcas. Heladeras, lavarropas, lavavajillas y más.',
    gallery: [
      'https://images.pexels.com/photos/4108720/pexels-photo-4108720.jpeg',
      'https://images.pexels.com/photos/4108721/pexels-photo-4108721.jpeg',
      'https://images.pexels.com/photos/4108722/pexels-photo-4108722.jpeg'
    ],
    services: [
      'Reparación de heladeras',
      'Reparación de lavarropas',
      'Reparación de lavavajillas',
      'Reparación de hornos',
      'Mantenimiento preventivo'
    ]
  },
  {
    id: 5,
    title: 'Albañil Profesional',
    category: 'Albañilería',
    categoryId: 'masonry',
    price: 25000,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/4108725/pexels-photo-4108725.jpeg',
    providerName: 'José Rodríguez',
    providerAvatar: 'https://images.pexels.com/photos/1181688/pexels-photo-1181688.jpeg',
    providerId: '5',
    location: 'Villa Crespo, Buenos Aires',
    description: 'Trabajos de albañilería en general. Construcciones, remodelaciones, reparaciones y más.',
    gallery: [
      'https://images.pexels.com/photos/4108725/pexels-photo-4108725.jpeg',
      'https://images.pexels.com/photos/4108726/pexels-photo-4108726.jpeg',
      'https://images.pexels.com/photos/4108727/pexels-photo-4108727.jpeg'
    ],
    services: [
      'Construcciones',
      'Remodelaciones',
      'Reparaciones',
      'Colocación de cerámicos',
      'Trabajos en altura'
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