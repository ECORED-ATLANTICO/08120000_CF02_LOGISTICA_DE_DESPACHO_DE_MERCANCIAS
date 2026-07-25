<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Código de barras

    .bg-full-width.bg-fondo-1
      .row.mb-4.justify-content-center.align-items-center
        .col-lg-4.col-md-10.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema1/img01.png", data-aos="zoom-in")
        .col-lg-8
          p.mb-0(data-aos="fade-right") El código de barras es una herramienta de identificación automática ampliamente utilizada en las operaciones logísticas para facilitar el registro, control y seguimiento de mercancías durante los procesos de recepción, almacenamiento, preparación y despacho. Su utilización permite capturar información de manera rápida y precisa, reduciendo errores en el manejo de inventarios y mejorando la eficiencia de las operaciones dentro de la cadena de suministro.
    

      separador
      
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.1 Concepto

      .bloque-texto-g.bloque-texto-g--inverso.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/img03.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-3 El código de barras es una representación gráfica de información mediante una serie de barras y espacios de diferentes anchos que pueden ser leídos por dispositivos electrónicos especializados. Cada código identifica de manera única un producto, unidad logística o activo, facilitando su registro y trazabilidad durante todo el proceso logístico.

          p.mb-0 Su implementación permite automatizar procesos, optimizar el control de inventarios y agilizar las actividades de recepción y despacho de mercancías.


      .row.justify-content-center.mb-3
        .col-12.col-lg-8.mb-0.col-md-12
          .cita-decorada
            blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-2.br-15
              .row.justify-content-center.align-items-center
                .col-12.col-lg-3.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema1/img04.svg", class="img-fluid cita-decorada__imagen-flotante-3")
                .col-12.col-lg-9.cita-decorada__texto.mb-4.mb-lg-0.p-4
                  .d-flex.align-items-start
                    i.fas.fa-circle-check.icon-check-custom.me-2.mt-1.txt-dark
                    p.mb-0 <b>Ejemplo:</b> al recibir un producto en una bodega, el operario escanea el código de barras para registrar automáticamente su ingreso al sistema de inventarios.



    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Técnicas de interpretación de colores

    img(src="@/assets/curso/tema1/img05.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="")
        p.banner-text.bg-color-3-degrade
          | Estrategias empleadas para reconocer y comprender el significado de los colores utilizados como códigos visuales en los procesos logísticos. Su aplicación permite identificar condiciones, clasificaciones, prioridades o alertas de forma rápida y precisa, favoreciendo la correcta verificación de registros, el control de despachos y la reducción de errores operativos. 
          br
          br
          | A continuación, se muestran diferentes elementos que se deben tener en cuenta para interpretar los colores:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5
            b Figura 1.
          span Técnicas e interpretación de colores
        img.mb-2.d-lg-flex.d-none(data-aos="fade-up", src="@/assets/curso/tema1/img06.svg", alt="La figura presenta una infografía sobre técnicas para optimizar la lectura de códigos de barras en procesos logísticos. En el centro se observa una caja con una etiqueta de código de barras, acompañada por cinco recomendaciones: utilizar barras oscuras sobre fondos claros, mantener alto contraste entre barras y fondo, evitar colores metálicos o reflectivos, evitar combinaciones de colores que dificulten la lectura óptica y conservar una impresión uniforme y de buena calidad. En la parte inferior se destaca que estas prácticas favorecen una lectura óptica eficiente y reducen errores en los despachos.")
        img.mb-2.d-flex.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema1/img07.svg", alt="La figura presenta una infografía sobre técnicas para optimizar la lectura de códigos de barras en procesos logísticos. En el centro se observa una caja con una etiqueta de código de barras, acompañada por cinco recomendaciones: utilizar barras oscuras sobre fondos claros, mantener alto contraste entre barras y fondo, evitar colores metálicos o reflectivos, evitar combinaciones de colores que dificulten la lectura óptica y conservar una impresión uniforme y de buena calidad. En la parte inferior se destaca que estas prácticas favorecen una lectura óptica eficiente y reducen errores en los despachos.")
        figcaption Nota. SENA, (2026).

    p.mb-5 Los códigos de barras deben imprimirse utilizando colores que permitan una adecuada lectura por parte de los escáneres. La diferencia entre el color de las barras y el fondo genera el contraste necesario para que el lector identifique correctamente la información. En ese sentido, se muestran las diferentes combinaciones de colores que se deben tener en cuenta al momento de realizar las impresiones de los códigos de barras:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5
            b Figura 2.
          span Combinaciones de colores legibles para códigos de barras
        img.mb-2.d-lg-flex.d-none(data-aos="fade-up", src="@/assets/curso/tema1/img08.svg", alt="La figura muestra varios ejemplos de combinaciones de colores legibles para códigos de barras. Organiza dieciséis ejemplos de combinaciones entre el color del código y el fondo. Cada ejemplo muestra un código de barras con su respectiva combinación cromática, permitiendo comparar visualmente el contraste entre ambos colores para identificar opciones que favorecen la lectura óptica en procesos logísticos.")
        img.mb-2.d-flex.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema1/img09.svg", alt="La figura muestra varios ejemplos de combinaciones de colores legibles para códigos de barras. Organiza dieciséis ejemplos de combinaciones entre el color del código y el fondo. Cada ejemplo muestra un código de barras con su respectiva combinación cromática, permitiendo comparar visualmente el contraste entre ambos colores para identificar opciones que favorecen la lectura óptica en procesos logísticos.")
      figcaption Nota. SENA, (2026).


    .bg-full-width.bg-fondo-1
      separador
      
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.3 Composición del código de barras

      p.mb-3 Son los elementos gráficos y numéricos que permiten representar información de forma estandarizada para su captura mediante lectores ópticos. Cada uno de sus componentes cumple una función específica que garantiza la identificación precisa de productos, documentos o unidades logísticas, favoreciendo la trazabilidad, la verificación de registros y el control eficiente de los despachos.

      p.mb-5 Generalmente se compone de:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5
              b Figura 3.
            span Composición del código de barras
          img.mb-2.d-lg-flex.d-none(data-aos="fade-up", src="@/assets/curso/tema1/img10.svg", alt="La figura muestra la estructura general de un código de barras y los elementos que permiten su correcta lectura e identificación. Además, señala las zonas de inicio y fin, el conjunto de barras y espacios, la numeración visible, el dígito de control y el identificador del producto, explicando la función de cada componente dentro del proceso de codificación. Su propósito es facilitar la comprensión de cómo se organiza la información para identificar productos de manera única y precisa.")
          img.mb-2.d-flex.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema1/img11.svg", alt="La figura muestra la estructura general de un código de barras y los elementos que permiten su correcta lectura e identificación. Además, señala las zonas de inicio y fin, el conjunto de barras y espacios, la numeración visible, el dígito de control y el identificador del producto, explicando la función de cada componente dentro del proceso de codificación. Su propósito es facilitar la comprensión de cómo se organiza la información para identificar productos de manera única y precisa.")
          figcaption Nota. SENA, (2026).


    p.mb-5 Cada uno de estos elementos cumple una función específica que garantiza la correcta identificación de la mercancía y evita errores durante la captura de la información. En Colombia, los códigos EAN-13 son administrados por GS1 Colombia y se utilizan para identificar productos en procesos de inventario, almacenamiento, facturación y control logístico.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.bg-color-6.p-3
          .row.justify-content-center.align-items-center
            .col-6.col-sm-3.col-md-2.mb-3.mb-md-0
              img(src="@/assets/curso/tema1/img12.svg", style="max-width: 120px;").mx-auto
            .col-md-10
              .row.justify-content-between.align-items-center
                .col-md.mb-3.mb-md-0.text-center.text-md-start
                  h4.mb-2 Lectura sugerida:
                  p.mb-0 Se invita al aprendiz a investigar que es GS1Colombia y su importancia en lo relacionado con los códigos de barras.
                .col-md-auto.text-center
                  a.boton.color-acento-botones.texto-blanco(href="https://gs1co.org/sobre-gs1/quienes-somos" target="_blank")
                    span Ver enlace
                    i.fas.fa-link


    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Tipos de códigos de barras
    
    .bg-full-width.bg-fondo-4

      p.mb-3 Los códigos de barras se clasifican según su estructura, capacidad de almacenamiento y aplicación en los diferentes procesos comerciales, industriales y logísticos. Cada tipo responde a necesidades específicas de identificación y captura de datos, permitiendo optimizar la trazabilidad, el control de inventarios, la gestión documental y la verificación de mercancías despacho.

      p.mb-5 Existen diferentes tipos de códigos de barras, entre los más utilizados se encuentran:

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.mb-4.mb-lg-0.col-md-8.order-2.order-lg-1
          figure
            img(src="@/assets/curso/tema1/img14.png", data-aos="zoom-in")
        .col-lg-8.order-1.order-lg-2.col-md-12.mb-4.mb-lg-0
          SlyderF(columnas="col-lg-6 col-xl-6 col-md-12 col-sm-12 p-3")
            .tarjeta.bg-color-8.br-15.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img15.svg' alt='', style="width: 170px; height: 170px; ").mx-auto
              
              .bg-color-c1.p-2.mb-3
                h4.text-center.mb-0 EAN-13
              p.text-center Código de barras de trece dígitos utilizado para identificar productos de consumo. Facilita la comercialización, el control de inventarios y la facturación. Es el estándar más empleado en supermercados, almacenes y comercios de Colombia.

            .tarjeta.bg-color-8.br-15.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img16.svg' alt='', style="width: 170px; height: 170px; ").mx-auto
              
              .bg-color-c1.p-2.mb-3
                h4.text-center.mb-0 UPC
              p.text-center Código de doce dígitos diseñado para identificar productos comercializados principalmente en Norteamérica. Agiliza la gestión de ventas y el control de inventarios. Es ampliamente utilizado en supermercados y cadenas minoristas de Estados Unidos y Canadá.

            .tarjeta.bg-color-8.br-15.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img17.svg' alt='', style="width: 170px; height: 170px; ").mx-auto
              
              .bg-color-c1.p-2.mb-3
                h4.text-center.mb-0 Code 39
              p.text-center Código alfanumérico que permite representar letras, números y algunos caracteres especiales. Facilita la identificación de activos y documentos. Es común en procesos industriales, manufactura, defensa y control de inventarios.

            .tarjeta.bg-color-8.br-15.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img18.svg' alt='', style="width: 170px; height: 170px; ").mx-auto
              
              .bg-color-c1.p-2.mb-3
                h4.text-center.mb-0 Code 128
              p.text-center Código alfanumérico de alta densidad que almacena gran cantidad de información en poco espacio. Favorece la trazabilidad y el control logístico. Se utiliza ampliamente en transporte, almacenamiento, distribución y mensajería.

            .tarjeta.bg-color-8.br-15.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img19.svg' alt='', style="width: 170px; height: 170px; ").mx-auto
              
              .bg-color-c1.p-2.mb-3
                h4.text-center.mb-0 ITF-14
              p.text-center Código diseñado para identificar unidades logísticas y empaques corrugados. Facilita el almacenamiento, transporte y despacho de mercancías. Es ampliamente utilizado en centros de distribución, bodegas y operaciones logísticas.

            .tarjeta.bg-color-8.br-15.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img20.svg' alt='', style="width: 170px; height: 170px; ").mx-auto
              
              .bg-color-c1.p-2.mb-3
                h4.text-center.mb-0 Código QR
              p.text-center Código bidimensional que almacena gran cantidad de información, como enlaces, documentos o datos de productos. Facilita el acceso rápido a la información y se utiliza en logística, comercio electrónico, trazabilidad y servicios digitales.
    
    p.mb-5 Cada tipo presenta características particulares relacionadas con la cantidad de información que puede almacenar y el sector donde es utilizado.



    .row.justify-content-center.mb-3
      .col-12.col-lg-8.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-2.br-15
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/img04.svg", class="img-fluid cita-decorada__imagen-flotante-3")
              .col-12.col-lg-9.cita-decorada__texto.mb-4.mb-lg-0.p-4
                .d-flex.align-items-start
                  i.fas.fa-circle-check.icon-check-custom.me-2.mt-1.txt-dark
                  p.mb-0 <b>Ejemplo:</b> composición de un código de barras tipo ITF-14, y la descripción de cada grupo de números.


    separador
    
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Características

    .bloque-texto-g.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img22.png')})`}"
      )
      .bloque-texto-g__texto.p-4.w-lg-70
        p.mb-3 Los códigos de barras poseen características que garantizan una identificación rápida, precisa y estandarizada de productos, documentos y unidades logísticas. Su diseño permite la captura automática de información mediante lectores ópticos, favoreciendo la trazabilidad, la reducción de errores y la optimización de procesos como el almacenamiento, la verificación de registros, el control de inventarios y el despacho de mercancías. Conocer estas características facilita su correcta implementación y uso en las operaciones logísticas.
        br
        br
        p.mb-0 Entre las principales características se destacan:


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.order-2.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img23.png", data-aos="zoom-in")
      .col-lg-8.order-1.order-lg-1.col-md-12.mb-4.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Identificación única del producto")
            p.mb-0 Asigna un código exclusivo a cada producto o unidad logística, permitiendo su identificación, diferenciación y trazabilidad durante los procesos de almacenamiento, transporte y despacho.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Lectura rápida y precisa")
            p.mb-0 Permite capturar información mediante lectores ópticos en pocos segundos, agilizando las operaciones y garantizando un reconocimiento confiable de los datos registrados.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Reducción de errores en el registro")
            p.mb-0 Minimiza errores asociados a la digitación manual, mejorando la exactitud en el registro, seguimiento y control de la información logística.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Compatibilidad con sistemas de información")
            p.mb-0 Se integra con sistemas de gestión logística, inventarios y facturación, facilitando el intercambio automático de información entre diferentes plataformas tecnológicas.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Facilidad de impresión")
            p.mb-0 Puede imprimirse sobre diversos materiales y tamaños sin perder funcionalidad, siempre que se mantengan los estándares de calidad y legibilidad establecidos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Agilidad en el control de inventarios")
            p.mb-0 Facilita la actualización automática de existencias, optimiza la ubicación de productos y mejora el seguimiento de entradas, salidas y movimientos de mercancías.
                            
    

    p.mb-5 Estas características contribuyen al fortalecimiento de la trazabilidad y al mejoramiento de la productividad logística.



    .row.justify-content-center.mb-3
      .col-12.col-lg-8.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-2.br-15
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/img04.svg", class="img-fluid cita-decorada__imagen-flotante-3")
              .col-12.col-lg-9.cita-decorada__texto.mb-4.mb-lg-0.p-4
                .d-flex.align-items-start
                  i.fas.fa-circle-check.icon-check-custom.me-2.mt-1.txt-dark
                  p.mb-0 <b>Ejemplo:</b> un operador puede registrar cientos de productos en pocos minutos utilizando un lector de código de barras.

    separador
    
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.6 Recomendaciones para su aplicación

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-12.order-1.order-lg-1.mb-4.mb-lg-0
        p.mb-3 Son criterios técnicos que determinan el lugar adecuado para la impresión o aplicación del código de barras sobre el producto, empaque o unidad logística. Una ubicación correcta garantiza una correcta lectura, mejora la trazabilidad y facilita las actividades de recepción, almacenamiento, verificación de registros y control de despachos.
        p.mb-0 Entre los principales parámetros tenemos:

      .col-lg-8.order-2.order-lg-2.col-md-12.mb-0
        .bg-fondo-2.p-4
          SlyderF(columnas="col-lg-12 col-xl-12 col-md-12 col-sm-12 p-lg-3 p-2 br-15",style="background-color: #ffffff; border-radius: 15px;")
            .tarjeta.p-4.h-100
              h4 Superficie plana
              p.mb-0 Ubicar el código sobre una superficie lisa y uniforme evita deformaciones, facilita el escaneo y mejora la precisión de la lectura óptica.

            .tarjeta.p-4.h-100
              h4 Zona visible
              p.mb-0 Colocar el código en un lugar fácilmente accesible permite su lectura sin manipular excesivamente el producto o el empaque.

            .tarjeta.p-4.h-100
              h4 Distancia de los bordes
              p.mb-0 Mantener una separación adecuada respecto a los bordes evita daños durante la manipulación y garantiza una lectura completa del código.

            .tarjeta.p-4.h-100
              h4 Orientación adecuada
              p.mb-0 Disponer el código en una posición que facilite el escaneo según el tipo de lector utilizado mejora la eficiencia del proceso logístico.

            .tarjeta.p-4.h-100
              h4 Libre de obstrucciones
              p.mb-0 Evitar que cintas, etiquetas, sellos o elementos gráficos cubran el código asegura una captura confiable de la información.

            .tarjeta.p-4.h-100
              h4 Protección del código
              p.mb-0 Ubicar el código en un área que reduzca la exposición a humedad, abrasión o golpes ayuda a conservar su legibilidad durante toda la operación logística.

   
    .bg-full-width.bg-fondo-4
      p.mb-5 La correcta ubicación facilita la captura automática de datos y reduce tiempos durante las operaciones logísticas.

      .row.justify-content-center.mb-5
        .col-12.col-lg-10.mb-5.col-md-12
          .cita-decorada
            blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-2.br-15
              .row.justify-content-center.align-items-center
                .col-12.col-lg-3.col-xl-2.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema1/img04.svg", class="img-fluid cita-decorada__imagen-flotante-3")
                .col-12.col-lg-9.col-xl-10.cita-decorada__texto.mb-4.mb-lg-0.p-4
                  .d-flex.align-items-start
                    i.fas.fa-circle-check.icon-check-custom.me-2.mt-1.txt-dark
                    p.mb-0 <b>Ejemplo:</b> en una caja de cartón, el código de barras debe colocarse en una de sus caras laterales visibles para facilitar el escaneo durante la recepción y el despacho de mercancías.


        .col-lg-10.mb-4
          .tarjeta.bg-color-1.p-3
            .row.justify-content-center.align-items-center
              .col-6.col-sm-3.col-md-2.mb-3.mb-md-0
                img(src="@/assets/curso/tema1/img25.svg", style="max-width: 120px;").mx-auto
              .col-md-10
                .row.justify-content-between.align-items-center
                  .col-md.mb-3.mb-md-0.text-center.text-md-start
                    h4.mb-2 Video sugerido:
                    p.mb-0 Se invita a consultar el siguiente video para fortalecer los conocimientos relacionados con código de barras:
                  .col-md-auto.text-center
                    a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=vJ4CfO8EpAs" target="_blank")
                      span Ver video
                      i.fas.fa-play-circle

        .col-lg-10.mb-0
          .tarjeta.bg-color-6.p-3
            .row.justify-content-center.align-items-center
              .col-6.col-sm-3.col-md-2.mb-3.mb-md-0
                img(src="@/assets/curso/tema1/img12.svg", style="max-width: 120px;").mx-auto
              .col-md-10
                .row.justify-content-between.align-items-center
                  .col-md.mb-3.mb-md-0.text-center.text-md-start
                    h4.mb-2 Lectura sugerida:
                    p.mb-0 Se invita al aprendiz a profundizar en código de barras, a través del siguiente artículo:
                  .col-md-auto.text-center
                    a.boton.color-acento-botones.texto-blanco(href="https://gs1co.org/sites/default/files/libreria-archivos/guia-de-identificacion-codigos-de-barras-gs1-colombia.pdf" target="_blank")
                      span Ver enlace
                      i.fas.fa-link

      .container
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-8.order-lg-1.order-2
            .row.bg-color-7.align-items-center.justify-content-center.br-15.p-4
              .col-md-8.col-lg-5.mb-3.mb-lg-0.order-2.order-md-2.order-lg-1
                figure
                  img(src="@/assets/curso/tema1/img28.png", data-aos="fade-right")
              .col-lg-7.order-1.order-md-1.order-lg-2.p-4.p-lg-3
                p(data-aos="fade-left").mb-4 A continuación, se invita a ir al siguiente podcast: 
                TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                  texto="El código de barras: la identidad de las mercancías en la logística moderna"
                  tiempo
                  :audio="require('@/assets/curso/audio/2.mp3')"
                )
          .col-lg-4.order-lg-2.order-1.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/img29.png", data-aos="zoom-in")



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
