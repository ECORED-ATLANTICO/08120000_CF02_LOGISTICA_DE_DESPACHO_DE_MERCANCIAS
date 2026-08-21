<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Registros logísticos
    
    .bg-full-width.bg-fondo-1

      img(src="@/assets/curso/tema2/img01.png", alt="Imagen decorativa")
      
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="")
          p.banner-text.bg-color-3-degrade 
            | Los registros logísticos constituyen una herramienta fundamental para documentar, controlar y dar seguimiento a las operaciones realizadas durante la recepción, almacenamiento, movilización y despacho de mercancías. Su correcta elaboración permite mantener información confiable, garantizar la trazabilidad de los productos y facilitar la toma de decisiones dentro de la gestión logística.

      separador
      
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.1 Concepto


      .row.mb-4.justify-content-center.align-items-center
        .col-lg-3.col-md-8.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema2/img02.png", data-aos="zoom-in")
        .col-lg-9
          p.mb-3(data-aos="fade-right") Los registros logísticos son documentos físicos o digitales utilizados para recopilar y almacenar información relacionada con las diferentes actividades desarrolladas en la cadena logística. Estos registros permiten evidenciar el movimiento de las mercancías y verificar el cumplimiento de los procedimientos establecidos. La información registrada facilita el control operativo, la gestión de inventarios y la identificación de novedades durante el proceso logístico.
    
          .tarjeta.bg-color-6.p-3
            .row.justify-content-center.align-items-center
              .col-6.col-sm-3.col-md-2.mb-3.mb-md-0
                img(src="@/assets/curso/tema1/img12.svg", style="max-width: 120px;").mx-auto
              .col-md-10
                .row.justify-content-between.align-items-center
                  .col-md.mb-3.mb-md-0.text-center.text-md-start
                    h4.mb-2 Formatos de registros logísticos
                    p.mb-0 Lo invitamos a visitar el siguiente enlace en donde puede descargar un ejemplo de formato de recibo y registro de mercancía 
                  .col-md-auto.text-center
                    a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/Anexos/Ejemplo_formato_recibo_registro_mercancia.pdf')" target="_blank")
                      span Ir al enlace
                      i.fas.fa-link

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Tipos de registros


    p.mb-5 Los registros logísticos constituyen herramientas documentales esenciales para controlar y evidenciar las operaciones desarrolladas durante el flujo de mercancías. Su correcta aplicación facilita la trazabilidad, fortalece el control de inventarios, optimiza la toma de decisiones y garantiza la disponibilidad de información confiable para la gestión eficiente de la cadena de suministro. Las organizaciones utilizan diferentes tipos de registros de acuerdo con la actividad logística desarrollada y la información que requieren controlar. Entre los registros más utilizados se encuentran:


    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.bg-color-6.p-3.mb-3
          .row.justify-content-center.align-items-center
            .col-6.col-sm-3.col-md-2.mb-3.mb-md-0
              img(src="@/assets/curso/tema1/img12.svg", style="max-width: 120px;").mx-auto
            .col-md-10
              .row.justify-content-between.align-items-center
                .col-md.mb-3.mb-md-0.text-center.text-md-start
                  h4.mb-2 Formatos de registros de mercancía
                  p.mb-0 Lo invitamos a visitar el siguiente enlace en donde puede descargar un ejemplo de formato de recibo y registro de mercancía 
                .col-md-auto.text-center
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/Anexos/Ejemplo_formato_recibo_registro_mercancia.pdf')" target="_blank")
                    span Ir al enlace
                    i.fas.fa-link

        p.mb-0 Cada uno de estos documentos contribuye al control y seguimiento de las operaciones logísticas.



    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3	Características

    p.mb-3 Son los atributos que garantizan la calidad, confiabilidad y utilidad de la información documentada durante las operaciones de la cadena de suministro. Los registros logísticos deben cumplir ciertas características que garanticen la confiabilidad y disponibilidad de la información.
    p.mb-5 Entre las principales se destacan:

    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-md-12.mb-0.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 
            b Tabla 1.
          span Características de los registros logísticos
        .tabla-a.tb-custom.mb-0
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Característica
                th Definición
            tbody
              tr
                td Claridad en la información registrada
                td Presenta la información de forma comprensible, ordenada y precisa, facilitando su interpretación por parte de los responsables del proceso y reduciendo la posibilidad de errores durante las operaciones logísticas.
              tr
                td Exactitud de los datos
                td Garantiza que la información registrada corresponda fielmente a las características, cantidades, fechas y demás datos de las mercancías, asegurando la confiabilidad de los registros y el adecuado control logístico.
              tr
                td Oportunidad en el diligenciamiento
                td Registra la información en el momento en que ocurre cada operación logística, permitiendo mantener datos actualizados, fortalecer el seguimiento de las mercancías y respaldar decisiones oportunas.
              tr
                td Legibilidad
                td Utiliza una escritura clara, ordenada y fácil de interpretar, permitiendo que cualquier responsable consulte la información sin generar dudas, confusiones o errores durante las actividades logísticas.
              tr
                td Organización
                td Estructura la información de manera lógica y secuencial, facilitando el registro, la clasificación, el almacenamiento y la consulta de los documentos durante las diferentes operaciones logísticas.
              tr
                td Integridad de la información
                td Registra todos los datos requeridos sin omisiones ni alteraciones, garantizando que la información sea completa, consistente y útil para el control, seguimiento y verificación de las operaciones logísticas.
              tr
                td Facilidad de consulta
                td Organiza los registros de forma que la información pueda localizarse y revisarse rápidamente, favoreciendo la trazabilidad de las operaciones y el acceso oportuno a los datos cuando sean requeridos.

    p.mb-5 Estas características fortalecen la trazabilidad de las mercancías y reducen errores en la gestión logística.

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5
            b Figura 4.
          span Evidencia de recibo
        img.mb-2.d-lg-flex.d-none(data-aos="fade-up", src="@/assets/curso/tema2/img03.png", alt="La figura muestra una guía de envío de la empresa Servientrega utilizada para identificar, transportar, rastrear y entregar un paquete. El documento se encuentra organizado en diferentes secciones que reúnen información general del envío, como los datos del remitente y del destinatario, las características del paquete, los códigos de identificación y seguimiento, los detalles del servicio y los datos relacionados con la entrega. Además, contiene elementos gráficos como códigos de barras, un código QR, logotipos y espacios destinados al registro y validación de la recepción.")
        img.mb-2.d-flex.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema2/img04.png", alt="La figura muestra una guía de envío de la empresa Servientrega utilizada para identificar, transportar, rastrear y entregar un paquete. El documento se encuentra organizado en diferentes secciones que reúnen información general del envío, como los datos del remitente y del destinatario, las características del paquete, los códigos de identificación y seguimiento, los detalles del servicio y los datos relacionados con la entrega. Además, contiene elementos gráficos como códigos de barras, un código QR, logotipos y espacios destinados al registro y validación de la recepción.")
        figcaption Nota. SENA, (2026).

    .bg-full-width.bg-fondo-6
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
                    p.mb-0 <b>Ejemplo:</b> un registro diligenciado de manera completa permite identificar rápidamente el recorrido de una mercancía dentro de la organización. 

      separador
      
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.4 Técnicas de diligenciamiento


      img(src="@/assets/curso/tema2/img07.png", alt="Imagen decorativa")
      
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="")
          p.banner-text.bg-color-3-degrade
            | El diligenciamiento adecuado de los registros garantiza la calidad de la información y facilita el seguimiento de las operaciones logísticas. Su correcta implementación contribuye al control de las operaciones, reduce errores administrativos y facilita el seguimiento de las mercancías durante las diferentes etapas de la gestión logística.
            br
            br
            | Algunas recomendaciones para su elaboración son:

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-12.col-md-12.mb-0.mb-lg-0
          .titulo-sexto.color-acento-contenido.mb-3
            h5 
              b Tabla 2.
            span Recomendaciones para el diligenciamiento de formatos logísticos
          .tabla-a.tb-custom.mb-0
            table
              caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
              thead
                tr
                  th Recomendación
                  th Definición
                  th Ejemplo práctico
              tbody
                tr
                  td Registrar la información en tiempo real
                  td Permite diligenciar el registro inmediatamente después de ejecutar la operación logística, manteniendo la información actualizada y reduciendo el riesgo de omisiones o inconsistencias.
                  td Registrar la cantidad de cajas recibidas tan pronto finaliza la descarga del vehículo.
                tr
                  td Verificar los datos antes del registro
                  td Implica confirmar cantidades, referencias, documentos y demás información antes de diligenciar el formato, garantizando que los datos registrados correspondan a la operación realizada.
                  td Comparar la factura y la orden de compra con la mercancía antes de registrar su ingreso.
                tr
                  td Completar todos los campos requeridos
                  td Favorece el diligenciamiento total del formato, incorporando toda la información solicitada para asegurar registros completos, consistentes y útiles para el control logístico.
                  td Registrar la fecha, el proveedor, el responsable, las cantidades y las observaciones sin dejar espacios vacíos.
                tr
                  td Utilizar información legible y precisa
                  td Requiere registrar los datos con escritura clara o mediante herramientas digitales, facilitando su lectura, interpretación y consulta durante las diferentes operaciones logísticas.
                  td Escribir los códigos de los productos de forma clara para evitar errores en el inventario.
                tr
                  td Evitar tachones y enmendaduras
                  td Contribuye a preservar la confiabilidad del documento mediante registros limpios y ordenados. Cuando se requieran correcciones, estas deben realizarse conforme al procedimiento establecido por la organización.
                  td Corregir un dato utilizando el procedimiento institucional, sin alterar la información original.
                tr
                  td Emplear códigos y formatos normalizados
                  td Promueve el uso de formatos y sistemas de codificación definidos por la organización, facilitando la estandarización de los registros y su integración con los sistemas de información.
                  td Utilizar el código interno del producto y el formato oficial de recepción de mercancías.
                tr
                  td Respaldar la información con documentos soporte
                  td Fortalece la validez del registro al relacionarlo con documentos como facturas, remisiones, órdenes de compra o comprobantes que evidencian la operación realizada.
                  td Adjuntar la factura y la remisión del proveedor al registro de recepción de mercancías.
                tr
                  td Verificar y firmar el registro
                  td Garantiza la revisión final de la información diligenciada y la validación por parte del responsable, respaldando la autenticidad y trazabilidad del proceso logístico.
                  td El auxiliar de bodega revisa el formato y firma una vez confirma que la información es correcta.


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
                    p.mb-0 <b>Ejemplo:</b> durante la recepción de mercancías, el operario registra inmediatamente las cantidades recibidas y reporta cualquier diferencia encontrada.

    separador

    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Guía de ruta
                
    .bloque-texto-g.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img05.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La guía de ruta es un documento utilizado para planificar, controlar y hacer seguimiento al recorrido de las mercancías durante su transporte y entrega. Contiene información relacionada con el origen, destino, productos transportados, responsable de la entrega y observaciones de la operación. Este documento facilita la coordinación entre las áreas de almacenamiento, transporte y distribución, permitiendo verificar el cumplimiento de las entregas y mantener la trazabilidad de la mercancía. Generalmente una guía de ruta incluye:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.order-2.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img06.png", data-aos="zoom-in")
      .col-lg-8.order-1.order-lg-1.col-md-12.mb-4.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Fecha de la operación")
            p.mb-0 Registra la fecha en que se realiza el despacho de la mercancía, permitiendo controlar el inicio de la operación y facilitar el seguimiento del proceso logístico.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Número de guía")
            p.mb-0 Código único asignado al despacho que identifica la operación y facilita la consulta, el control y la trazabilidad de la mercancía durante el transporte.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Datos del remitente")
            p.mb-0 Contiene la información de la persona o empresa que envía la mercancía, incluyendo nombre, dirección y datos de contacto para su identificación.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Datos del destinatario")
            p.mb-0 Registra la información de la persona o empresa que recibirá la mercancía, asegurando una entrega correcta en el lugar establecido.

    .bg-full-width.bg-fondo-4
      .row.mb-5.justify-content-center
        .col-lg-6.col-xl-3.col-md-6.col-sm-6.p-3.mb-4.mb-lg-0
          .tarjeta.bg-color-8.br-15.shadow-sm.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img08.svg' alt='', style="max-width: 120px;").mx-auto
            .bg-color-c1.p-2.mb-3
              h4.text-center.mb-0 Relación de mercancías
            p.text-center Describe los productos incluidos en el despacho, especificando referencias o características que facilitan su identificación durante el transporte y la entrega.
        .col-lg-6.col-xl-3.col-md-6.col-sm-6.p-3.mb-4.mb-lg-0
          .tarjeta.bg-color-8.br-15.shadow-sm.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img09.svg' alt='', style="max-width: 120px;").mx-auto
            .bg-color-c1.p-2.mb-3
              h4.text-center.mb-0 Ruta asignada
            p.text-center Indica el recorrido previsto desde el origen hasta el destino, facilitando la planificación del transporte y el cumplimiento de los tiempos de entrega.
        .col-lg-6.col-xl-3.col-md-6.col-sm-6.p-3.mb-4.mb-lg-0
          .tarjeta.bg-color-8.br-15.shadow-sm.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img10.svg' alt='', style="max-width: 120px;" ).mx-auto
            .bg-color-c1.p-2.mb-3
              h4.text-center.mb-0 Responsable del transporte
            p.text-center Identifica al conductor o empresa transportadora encargada del traslado de la mercancía, fortaleciendo el control y la trazabilidad de la operación.
        .col-lg-6.col-xl-3.col-md-6.col-sm-6.p-3.mb-4.mb-lg-0
          .tarjeta.bg-color-8.br-15.shadow-sm.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img11.svg' alt='', style="max-width: 120px;" ).mx-auto
            .bg-color-c1.p-2.mb-3
              h4.text-center.mb-0 Firma de recibido
            p.text-center Evidencia la recepción de la mercancía mediante la firma de la persona autorizada, confirmando que la entrega fue realizada conforme a lo establecido.


      .row.justify-content-center.mb-5
        .col-lg-10.mb-4
          .tarjeta.bg-color-1.p-3
            .row.justify-content-center.align-items-center
              .col-6.col-sm-3.col-md-2.mb-3.mb-md-0
                img(src="@/assets/curso/tema1/img25.svg", style="max-width: 120px;").mx-auto
              .col-md-10
                .row.justify-content-between.align-items-center
                  .col-md.mb-3.mb-md-0.text-center.text-md-start
                    h4.mb-2 Video sugerido:
                    p.mb-0 A continuación, se invita al aprendiz a ir al siguiente video para fortalecer los conocimientos relacionados con registros logísticos:
                  .col-md-auto.text-center
                    a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=jBJCxb3KRN0" target="_blank")
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
                    p.mb-0 Se invita al aprendiz a profundizar en lo relacionado a registros logísticos, a través del siguiente artículo (página 195–202)
                  .col-md-auto.text-center
                    a.boton.color-acento-botones.texto-blanco(href="https://www.fesc.edu.co/portal/archivos/e_libros/logistica/gestion_logistica.pdf" target="_blank")
                      span Ir al enlace
                      i.fas.fa-link
</template>

<script>
export default {
  name: 'Tema2',
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
