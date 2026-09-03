<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Equipos para operaciones logísticas

    .bg-full-width.bg-fondo-1

      img(src="@/assets/curso/tema4/img18.png", alt="Imagen decorativa")
      
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="")
          p.banner-text.bg-color-3-degrade
            | Los equipos para operaciones logísticas son herramientas y dispositivos utilizados para facilitar la movilización, almacenamiento, cargue, descargue y transporte interno de mercancías. Su correcta selección, operación y mantenimiento contribuyen a mejorar la productividad, reducir riesgos laborales y garantizar la integridad de los productos durante las diferentes etapas de la cadena logística.



      separador
      
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.1	Características

      .bloque-texto-g.bloque-texto-g--inverso.bg-color-19.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema4/img02.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los equipos utilizados en las operaciones logísticas poseen características que garantizan un manejo seguro, eficiente y continuo de las mercancías durante los procesos de cargue, descargue, almacenamiento y transporte interno. Su adecuada selección y utilización optimizan la productividad, reducen riesgos operativos y contribuyen al cumplimiento de los estándares de seguridad y calidad establecidos en la cadena logística. Entre las principales características se encuentran:


      .row.mb-5.justify-content-center.align-items-center
        .col-lg-12.col-md-12.mb-0.mb-lg-0
          .titulo-sexto.color-acento-contenido.mb-3
            h5 
              b Tabla 4.
            span Principales características de equipos
          .tabla-a.tb-custom.mb-0
            table
              caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
              thead
                tr
                  th Característica
                  th Definición
                  th Ejemplo
              tbody
                tr
                  td Capacidad de carga
                  td Corresponde al peso máximo que un equipo puede soportar y transportar de forma segura, garantizando un funcionamiento eficiente sin afectar su estabilidad, desempeño o vida útil durante las operaciones logísticas.
                  td Un transpaleta manual moviliza un <em>pallet</em> de 1.800 kg sin superar su capacidad máxima de carga.
                tr
                  td Estabilidad durante la operación
                  td Permite mantener el equilibrio del equipo mientras moviliza mercancías, reduciendo el riesgo de vuelcos, desplazamientos inesperados o caídas de la carga durante las maniobras de transporte y elevación.
                  td Un apilador eléctrico eleva una estiba manteniendo la carga estable durante todo el recorrido.
                tr
                  td Facilidad de maniobra
                  td Facilita el desplazamiento del equipo en espacios reducidos mediante controles precisos y un adecuado radio de giro, optimizando la movilidad y la eficiencia de las operaciones logísticas.
                  td Un carro plataforma transporta mercancías por pasillos estrechos con facilidad y seguridad.
                tr
                  td Seguridad en el funcionamiento
                  td Incorpora dispositivos y sistemas que protegen al operador, la mercancía y el equipo, disminuyendo la probabilidad de accidentes durante las actividades de cargue, descargue y transporte interno.
                  td Una banda transportadora equipada con botón de paro de emergencia permite detener la operación de forma inmediata ante cualquier riesgo.
                tr
                  td Resistencia al uso continuo
                  td Está diseñado para soportar jornadas prolongadas de trabajo y condiciones exigentes, manteniendo un desempeño confiable y reduciendo las interrupciones ocasionadas por fallas o desgaste prematuro.
                  td Un montacargas eléctrico opera durante varios turnos diarios con mantenimiento preventivo programado.
                tr
                  td Adaptabilidad a diferentes tipos de mercancías
                  td Permite manipular mercancías con distintas dimensiones, pesos y características mediante accesorios o configuraciones específicas, aumentando la versatilidad y eficiencia de las operaciones logísticas.
                  td Un apilador eléctrico utiliza diferentes tipos de horquillas para movilizar estibas, contenedores y cargas de distintas dimensiones.

      p.mb-5 La selección del equipo adecuado depende del peso, volumen, dimensiones y naturaleza de la carga que será manipulada.


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
                  p.mb-0 <b>Ejemplo:</b> un montacargas eléctrico es adecuado para operar en espacios cerrados debido a que no genera emisiones contaminantes.

  
    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Clasificación

    p.mb-5 Los equipos utilizados en las operaciones logísticas pueden clasificarse de acuerdo con la función que desempeñan dentro de los procesos de almacenamiento, manipulación, elevación y transporte interno de mercancías. Esta clasificación facilita la selección del equipo más adecuado según las características de la carga, la capacidad operativa y los requerimientos de la organización.

    //- Subitutlo.container
    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto.text-white Equipos para transporte horizontal

    p.mb-4 Se utilizan para movilizar mercancías entre diferentes áreas sin modificar significativamente su altura. Entre los cuales se encuentran:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/img03.png", alt="Transpaletas manuales y eléctricas")
          .crd_hover_txt--body
            h4.mb-3.text-center Transpaletas manuales y eléctricas
            p.mb-0 Permiten trasladar estibas y mercancías sobre superficies planas entre las áreas de recepción, almacenamiento, preparación de pedidos y despacho, agilizando el movimiento interno y reduciendo el esfuerzo físico del operario.
    
      .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/img04.png", alt="Carretillas")
          .crd_hover_txt--body
            h4.mb-3.text-center Carretillas
            p.mb-0 Facilitan el transporte manual de cajas, paquetes y otros productos de menor volumen o peso moderado dentro de la bodega, optimizando los desplazamientos en recorridos cortos y espacios reducidos.
    
      .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/img05.png", alt="Bandas transportadoras")
          .crd_hover_txt--body
            h4.mb-3.text-center Bandas transportadoras
            p.mb-0 Transportan mercancías de forma continua entre diferentes procesos o áreas de la operación logística, mejorando el flujo de materiales, reduciendo la manipulación manual y aumentando la eficiencia operativa.

    //- Subitutlo
    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto.text-white Equipos para elevación y apilamiento


    p.mb-5 Permiten levantar, posicionar y almacenar mercancías en diferentes alturas, optimizando el aprovechamiento del espacio en la bodega y facilitando las operaciones de recepción, almacenamiento, preparación de pedidos y despacho. Los más utilizados son:


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/img06.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1.col-md-12.mb-4.mb-lg-0
        SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-3")
          .tarjeta.bg-color-8.br-15.shadow-sm.p-4.h-100
            .bg-color-c1.p-2.mb-3
              h4.text-center.mb-0 Montacargas
            p.text-center Permiten elevar, transportar y ubicar mercancías de gran peso sobre estibas, facilitando el cargue, descargue y almacenamiento en estanterías de diferentes niveles.

          .tarjeta.bg-color-8.br-15.shadow-sm.p-4.h-100
            .bg-color-c1.p-2.mb-3
              h4.text-center.mb-0 Apiladores
            p.text-center Facilitan la elevación y el apilamiento de estibas en alturas medias, optimizando el almacenamiento y el traslado de mercancías dentro de la bodega.

          .tarjeta.bg-color-8.br-15.shadow-sm.p-4.h-100
            .bg-color-c1.p-2.mb-3
              h4.text-center.mb-0 Estibadores eléctricos
            p.text-center Permiten movilizar, elevar y posicionar estibas de forma rápida y segura, reduciendo el esfuerzo físico del operario y mejorando la productividad en las operaciones logísticas.

          .tarjeta.bg-color-8.br-15.shadow-sm.p-4.h-100
            .bg-color-c1.p-2.mb-3
              h4.text-center.mb-0 Equipos de elevación hidráulica
            p.text-center Utilizan sistemas hidráulicos para levantar mercancías de manera controlada, facilitando actividades de mantenimiento, carga, descarga y manipulación de productos en diferentes niveles.



    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-0.mb-lg-0.order-3.order-lg-1
        figure
          img(src="@/assets/curso/tema4/img07.png", data-aos="zoom-in")
      .col-lg-4.col-md-12.mb-4.mb-lg-0.order-1.order-lg-2
        p.mb-4 Cada uno de estos equipos responde a necesidades específicas relacionadas con la movilización y almacenamiento de mercancías.

        p.mb-0 Por otro lado, seleccionar el equipo adecuado para una operación logística es una decisión que influye directamente en la eficiencia, la seguridad y el correcto manejo de las mercancías. La elección debe responder a las necesidades específicas de cada proceso, donde los aspectos que se deben tener en cuenta son los siguientes:

      .col-lg-5.col-md-12.order-2.order-lg-3.mb-4.mb-lg-0
        .bg-color-54.p-3.br-15.mb-0
          ul.lista-ul--color.mb-0.ms-lg-2.ms-1
            li.mb-1 
              i.fas.fa-circle-check
              | Peso y dimensiones de la carga.
            li.mb-1 
              i.fas.fa-circle-check
              | Frecuencia de la operación.
            li.mb-1 
              i.fas.fa-circle-check
              | Altura de almacenamiento.
            li.mb-1 
              i.fas.fa-circle-check
              | Tipo de mercancía.
            li.mb-1 
              i.fas.fa-circle-check
              | Condiciones del piso.
            li.mb-1 
              i.fas.fa-circle-check
              | Espacio disponible para maniobras.
            li.mb-1 
              i.fas.fa-circle-check
              | Nivel de automatización requerido.
            li.mb-1 
              i.fas.fa-circle-check
              | Costos de operación y mantenimiento.
            li.mb-0 
              i.fas.fa-circle-check
              | Condiciones de seguridad.


    .row.justify-content-center.mb-5
      .col-12.col-lg-8.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-2.br-15
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/img04.svg", class="img-fluid cita-decorada__imagen-flotante-3")
              .col-12.col-lg-9.cita-decorada__texto.mb-4.mb-lg-0.p-4
                .d-flex.align-items-start
                  i.fas.fa-circle-check.icon-check-custom.me-2.mt-1.txt-dark
                  p.mb-0 <b>Ejemplo:</b> las transpaletas son utilizadas para desplazar estibas dentro de las bodegas de manera rápida y segura.
    
    .bg-full-width.bg-fondo-1


      separador
      
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.3 Usos

      img(src="@/assets/curso/tema4/img08.png", alt="Imagen decorativa")
      
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="")
          p.banner-text.bg-color-3-degrade 
            | Se utilizan para facilitar el movimiento, la elevación, el transporte y el almacenamiento de mercancías a lo largo de la cadena logística. Su empleo permite optimizar los procesos de recepción, cargue, descargue, almacenamiento y despacho, reduciendo el esfuerzo físico, los tiempos de operación y el riesgo de daños en los productos. Además, contribuyen a mejorar la productividad, fortalecer las condiciones de seguridad y garantizar un flujo continuo y eficiente de las mercancías dentro de centros de distribución, bodegas y demás instalaciones logísticas.

      p.mb-4 Sus principales usos incluyen:
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-7.col-xl-4.col-md-8.order-2.order-lg-2.mb-0.mb-0
          figure
            img(src="@/assets/curso/tema4/img09.png", data-aos="zoom-in")
        .col-lg-12.col-xl-8.order-1.order-lg-1.col-md-12.mb-4.mb-lg-3.mb-xl-0
          TabsA.color-acento-botones
            .tarjeta.color-acento-botones--borde.p-4(titulo="Recepción de mercancías")
              p.mb-0 Facilita la descarga, verificación y traslado inicial de las mercancías desde el vehículo hasta el área de recepción, garantizando un manejo seguro, ordenado y conforme con los procedimientos establecidos.

            .tarjeta.color-acento-botones--borde.p-4(titulo="Cargue y descargue de vehículos")
              p.mb-0 Permite cargar y descargar mercancías de manera eficiente y segura, optimizando los tiempos de operación, reduciendo el esfuerzo físico y minimizando el riesgo de daños en los productos.

            .tarjeta.color-acento-botones--borde.p-4(titulo="Movilización interna de productos")
              p.mb-0 Favorece el traslado seguro de mercancías entre las diferentes áreas de la bodega o centro de distribución, optimizando el flujo de trabajo y evitando manipulaciones innecesarias.

            .tarjeta.color-acento-botones--borde.p-4(titulo="Organización de mercancías en estanterías")
              p.mb-0 Facilita la ubicación, reubicación y almacenamiento de productos en estanterías, aprovechando el espacio disponible y garantizando un acceso seguro y ordenado a las mercancías.

            .tarjeta.color-acento-botones--borde.p-4(titulo="Preparación de pedidos")
              p.mb-0 Agiliza la recolección, clasificación y traslado de los productos requeridos para cada pedido, mejorando la precisión del proceso y reduciendo los tiempos de alistamiento.

            .tarjeta.color-acento-botones--borde.p-4(titulo="Despacho de mercancías")
              p.mb-0 Apoya el traslado de los pedidos desde el área de preparación hasta los vehículos de transporte, garantizando una carga organizada, segura y conforme con la documentación de despacho.

      p.mb-5 La utilización correcta de estos equipos mejora la eficiencia operativa y disminuye el esfuerzo físico del personal. 

    separador
    
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Cuidado de los equipos

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema4/img10.svg").mx-auto
      .col-lg
        p.mb-0 Son todas aquellas prácticas orientadas a conservar su funcionamiento, seguridad y vida útil. La aplicación de procedimientos de inspección, limpieza, mantenimiento y uso adecuado reduce el riesgo de fallas, mejora el desempeño operativo y garantiza la continuidad de las actividades de recepción, almacenamiento, cargue, descargue y despacho de mercancía. Las principales recomendaciones son:


    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.order-1.order-lg-1.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img11.png", data-aos="zoom-in")

      .col-lg-8.order-2.order-lg-2.col-md-12.mb-0
        .bg-fondo-5.p-4
          SlyderA(tipo="b").bg-color-white.p-4.tarjeta
            .tarjeta.p-4.h-100
              h4 Limpieza periódica
              p.mb-2 Consiste en retirar polvo, residuos y suciedad de los equipos para mantener su correcto funcionamiento, prevenir el desgaste prematuro y facilitar la identificación de posibles daños.
              p.mb-0 <b>Ejemplo:</b> limpiar un transpaleta al finalizar la jornada para eliminar residuos acumulados en las ruedas y el chasis.

            .tarjeta.p-4.h-100
              h4 Inspección previa
              p.mb-2 Verifica el estado general del equipo, identificando posibles daños, fugas o anomalías que puedan afectar la seguridad y el desempeño durante la operación.
              p.mb-0 <b>Ejemplo:</b> revisar el estado de las ruedas, frenos y horquillas de un apilador antes de iniciar la operación.

            .tarjeta.p-4.h-100
              h4 Mantenimiento preventivo
              p.mb-2 Incluye revisiones y ajustes programados para conservar el equipo en condiciones óptimas, disminuir la probabilidad de fallas y prolongar su vida útil.
              p.mb-0 <b>Ejemplo:</b> realizar el cambio periódico de lubricantes y el ajuste de componentes de una banda transportadora según el plan de mantenimiento.

            .tarjeta.p-4.h-100
              h4 Uso adecuado
              p.mb-2 Utiliza el equipo respetando la capacidad de carga, las instrucciones del fabricante y los procedimientos establecidos para evitar daños y accidentes.
              p.mb-0 <b>Ejemplo:</b> operar un carro plataforma sin exceder el peso máximo recomendado por el fabricante.

            .tarjeta.p-4.h-100
              h4 Almacenamiento adecuado
              p.mb-2 Mantiene los equipos en lugares seguros, limpios y protegidos de la humedad, el polvo y otros factores que puedan deteriorar sus componentes.
              p.mb-0 <b>Ejemplo:</b> guardar un transpaleta en un área cubierta y destinada exclusivamente para equipos logísticos.

            .tarjeta.p-4.h-100
              h4 Reporte inmediato
              p.mb-2 Comunica inmediatamente cualquier falla, daño o condición insegura para facilitar su reparación y evitar riesgos durante las operaciones logísticas.
              p.mb-0 <b>Ejemplo:</b> informar al responsable de mantenimiento sobre una rueda desgastada detectada durante la inspección diaria.
    
    .bg-full-width.bg-fondo-4

      
      .row.mb-3.justify-content-center.align-items-center
        .col-lg-10
          .cajon.bg-color-c1.p-4.mb-0
            p.mb-0 El mantenimiento periódico disminuye fallas mecánicas y contribuye a la continuidad de las operaciones logísticas.


      separador
      
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.5 Procedimiento de manejo

      p.mb-3 El manejo de los equipos logísticos debe realizarse siguiendo procedimientos establecidos por la organización y las recomendaciones del fabricante, garantizando la seguridad de los trabajadores y la protección de las mercancías. <br><br>Un procedimiento básico comprende las siguientes etapas:


      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5
              b Figura 5.
            span Cuidado y manejo de equipos para operaciones logísticas
          img.mb-2.d-lg-flex.d-none(data-aos="fade-up", src="@/assets/curso/tema4/img15.png", alt="La figura muestra de manera circular el cuidado y el manejo de equipos para operaciones logísticas. Presenta recomendaciones para realizar inspecciones previas, utilizar elementos de protección personal, operar los equipos correctamente, desplazarse de forma segura, manipular la carga con estabilidad, asegurar el equipo al finalizar, reportar novedades y conservar los equipos en buen estado. En el centro se observa un operario utilizando una transpaleta eléctrica para movilizar una estiba con mercancía, representando la aplicación de buenas prácticas que favorecen la seguridad y la eficiencia en las operaciones logísticas.")
          img.mb-2.d-flex.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema4/img16.png", alt="La figura muestra de manera circular el cuidado y el manejo de equipos para operaciones logísticas. Presenta recomendaciones para realizar inspecciones previas, utilizar elementos de protección personal, operar los equipos correctamente, desplazarse de forma segura, manipular la carga con estabilidad, asegurar el equipo al finalizar, reportar novedades y conservar los equipos en buen estado. En el centro se observa un operario utilizando una transpaleta eléctrica para movilizar una estiba con mercancía, representando la aplicación de buenas prácticas que favorecen la seguridad y la eficiencia en las operaciones logísticas.")
          figcaption Nota. SENA, (2026).


    p.mb-5 El cumplimiento de estos procedimientos contribuye a prevenir accidentes, proteger la infraestructura y garantizar la continuidad de las operaciones logísticas.

  
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
                  p.mb-0 <b>Ejemplo:</b> al finalizar la jornada, el operador estaciona el montacargas en la zona establecida, apaga el equipo y registra las novedades encontradas durante la operación.


      .col-lg-10.mb-4
        .tarjeta.bg-color-1.p-3
          .row.justify-content-center.align-items-center
            .col-6.col-sm-3.col-md-2.mb-3.mb-md-0
              img(src="@/assets/curso/tema1/img25.svg", style="max-width: 120px;").mx-auto
            .col-md-10
              .row.justify-content-between.align-items-center
                .col-md.mb-3.mb-md-0.text-center.text-md-start
                  h4.mb-2 Video sugerido:
                  p.mb-0 A continuación, se invita al aprendiz al siguiente video para fortalecer los conocimientos relacionados con preparación de mercancías para despacho:
                .col-md-auto.text-center
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=sd837L6UvmQ&t=2109s" target="_blank")
                    span Ir al video
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
                  p.mb-0 Se invita al aprendiz a profundizar en protección de transacciones financieras y cumplimiento normativo, a través del siguiente artículo (página 28 – 43):
                .col-md-auto.text-center
                  a.boton.color-acento-botones.texto-blanco(href="https://tp-digital.cl/wp-content/uploads/lms/recurso/MAQUINAS-Y-EQUIPOS-DE-LOGISTICA.pdf" target="_blank")
                    span Ir al enlace
                    i.fas.fa-link

    .container
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-8.order-lg-2.order-2
          .row.bg-color-7.align-items-center.justify-content-center.br-15.p-4
            .col-md-8.col-lg-5.mb-3.mb-lg-0.order-2.order-md-2.order-lg-1
              figure
                img(src="@/assets/curso/tema1/img28.png", data-aos="fade-right")
            .col-lg-7.order-1.order-md-1.order-lg-2.p-4.p-lg-3
              p(data-aos="fade-left").mb-4 A continuación, se invita a ir al siguiente pódcast: 
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="Operaciones seguras de cargue, descargue y manejo de equipos en la logística."
                tiempo
                :audio="require('@/assets/curso/audio/2.mp3')"
              )
        .col-lg-4.order-lg-1.order-1.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/img17.png", data-aos="zoom-in")




</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
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
