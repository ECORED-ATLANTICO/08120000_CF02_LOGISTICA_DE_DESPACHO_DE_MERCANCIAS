export default {
  global: {
    Name: 'Verificación de registros y control de despachos',
    Description:
      'El componente formativo Verificación de registros y control de despachos aborda los procesos relacionados con la identificación de mercancías, el diligenciamiento de registros logísticos y la ejecución de operaciones de cargue, descargue y despacho, apoyados en el uso adecuado de equipos para la manipulación de productos. Asimismo, desarrolla los fundamentos necesarios para fortalecer la trazabilidad, el control operativo y la seguridad durante las actividades logísticas, contribuyendo a la eficiencia de la cadena de suministro y al cumplimiento de los procedimientos establecidos por las organizaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Código de barras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Técnicas de interpretación de colores',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Composición del código de barras',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tipos de códigos de barras',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Características',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Parámetros de ubicación',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Registros logísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de registros',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Características',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Técnicas de diligenciamiento',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Guía de ruta',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Cargue y descargue de mercancías',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Zonas de cargue y descargue',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Puntos de transferencia',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Técnicas de cargue y descargue',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Listas de chequeo',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Técnicas de manipulación del producto',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Equipos para operaciones logísticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Características',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Clasificación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Usos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Cuidado de los equipos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Procedimiento de manejo',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/08120000_CF02_CFA.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Apilador',
      significado:
        'Equipo empleado para elevar y organizar mercancías en diferentes niveles de almacenamiento.',
    },
    {
      termino: 'Banda transportadora',
      significado:
        'Sistema mecánico que permite el desplazamiento continuo de mercancías dentro de una operación logística.',
    },
    {
      termino: 'Cadena de suministro',
      significado:
        'Conjunto de procesos relacionados con el abastecimiento, almacenamiento, transporte y distribución de mercancías hasta el cliente final.',
    },
    {
      termino: 'Capacidad de carga',
      significado:
        'Peso máximo que un equipo puede soportar y movilizar de manera segura durante su operación.',
    },
    {
      termino: 'Cargue de mercancías',
      significado:
        'Proceso de ubicar las mercancías en un vehículo o medio de transporte utilizando procedimientos técnicos y seguros.',
    },
    {
      termino: 'Código de barras',
      significado:
        'Herramienta de identificación automática que representa información mediante barras y espacios para identificar productos y facilitar su registro, control y trazabilidad en las operaciones logísticas.',
    },
    {
      termino: 'Descargue de mercancías',
      significado:
        'Proceso de retirar las mercancías de un medio de transporte para su recepción, almacenamiento o distribución.',
    },
    {
      termino: 'Equipos para operaciones logísticas',
      significado:
        'Herramientas y dispositivos utilizados para facilitar el almacenamiento, movilización, cargue, descargue y transporte interno de mercancías.',
    },
    {
      termino: 'Guía de ruta',
      significado:
        'Documento que planifica, controla y hace seguimiento al recorrido de las mercancías durante su transporte y entrega.',
    },
    {
      termino: 'Lista de chequeo',
      significado:
        'Instrumento utilizado para verificar el cumplimiento de los procedimientos, requisitos y condiciones de seguridad antes, durante y después de una operación logística.',
    },
    {
      termino: 'Mantenimiento preventivo',
      significado:
        'Conjunto de actividades programadas para conservar los equipos en buen estado y prevenir fallas durante su funcionamiento.',
    },
    {
      termino: 'Montacargas',
      significado:
        'Equipo motorizado diseñado para levantar, transportar y ubicar cargas pesadas dentro de bodegas y centros de distribución.',
    },
    {
      termino: 'Procedimiento de manejo',
      significado:
        'Secuencia de pasos establecidos para operar correctamente un equipo logístico garantizando la seguridad del personal y de las mercancías.',
    },
    {
      termino: 'Puntos de transferencia',
      significado:
        'Lugares donde las mercancías son trasladadas de un medio de transporte a otro para facilitar su distribución.',
    },
    {
      termino: 'Registros logísticos',
      significado:
        'Documentos físicos o digitales que recopilan y almacenan la información relacionada con las actividades de recepción, almacenamiento, movilización y despacho de mercancías.',
    },
    {
      termino: 'Técnicas de cargue y descargue',
      significado:
        'Procedimientos utilizados para manipular las mercancías de forma segura, evitando daños a la carga y accidentes durante la operación.',
    },
    {
      termino: 'Técnicas de manipulación del producto',
      significado:
        'Procedimientos orientados a conservar las condiciones físicas y funcionales de las mercancías durante su movilización y almacenamiento.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de realizar el seguimiento de una mercancía durante todas las etapas de la cadena de suministro.',
    },
    {
      termino: 'Transpaleta',
      significado:
        'Equipo manual o eléctrico utilizado para desplazar mercancías sobre estibas dentro de una instalación logística.',
    },
    {
      termino: 'Zonas de cargue y descargue',
      significado:
        'Espacios destinados exclusivamente para realizar las operaciones de recepción y despacho de mercancías de forma segura y organizada.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ballou, R. H. (2004). <em>Logística: administración de la cadena de suministro</em> (5.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Chopra, S., & Meindl, P. (2008). <em>Administración de la cadena de suministro: estrategia, planeación y operación</em>. Pearson Educación.',
    },
    {
      referencia:
        'GS1 Colombia. (2024). <em>Estándares GS1 para la identificación de productos y captura automática de datos</em>.',
      link: 'https://www.gs1co.org/',
    },
    {
      referencia:
        'Mora García, L. A. (2023). <em>Gestión logística integral: las mejores prácticas en la cadena de abastecimiento</em> (3.ª ed.). Ecoe Ediciones.',
      link:
        'https://www.ecoeediciones.com/wp-content/uploads/2023/01/9789585035676-9789585035683-Gestion-logistica-integral.-Las-mejores-practicas-en-la-cadena-de-abastecimiento-3ra-edicion-contenido.pdf?srsltid=AfmBOorew8oFOJzZNBcsjIueqCeVQFtlg6iyoSGPeRQk8-BeHfIDR37p',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. (2022). <em>Seguridad y salud en el trabajo</em>.',
      link:
        'https://www.ilo.org/es/temas-y-sectores/seguridad-y-salud-en-el-trabajo',
    },
    {
      referencia:
        'Secretaría Distrital de Movilidad de Bogotá. (s. f.). <em>Guía de buenas prácticas operacionales de cargue y descargue de mercancías en Bogotá</em>.',
      link: 'https://www.simur.gov.co/buenas-practicas',
    },
    {
      referencia:
        'Womack, J. P., Jones, D. T., & Roos, D. (2007). <em>La máquina que cambió el mundo</em>. McGraw-Hill Interamericana.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sergio Quintero Guzmán',
          cargo: 'Experto Temático Logística',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador full stack',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
