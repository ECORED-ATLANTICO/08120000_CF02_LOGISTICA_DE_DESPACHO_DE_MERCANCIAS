<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-2.order-lg-2
        figure
          img(src="@/assets/curso/intro/img01.png", data-aos="zoom-in")
      .col-lg-8.order-1.order-lg-1
        p.mb-3(data-aos="fade-right") El componente formativo Verificación de registros y control de despachos desarrolla los conocimientos fundamentales para ejecutar actividades relacionadas con la identificación, registro y control de las mercancías durante las diferentes etapas de la operación logística. En este contexto, la correcta aplicación de procedimientos de verificación permite garantizar la trazabilidad de los productos, optimizar el flujo de información y fortalecer la eficiencia de los procesos de recepción, movilización y despacho.
        p.mb-0(data-aos="fade-right") A través del desarrollo de este componente se analizan los principios asociados a la utilización de códigos de barras como herramienta de identificación, el diligenciamiento de registros logísticos y la aplicación de documentos que respaldan las operaciones de transporte y distribución. Asimismo, se estudian las técnicas de cargue y descargue de mercancías, los procedimientos relacionados con la manipulación segura de los productos y la utilización adecuada de los equipos empleados en las operaciones logísticas.

    .row.mb-3.justify-content-center.align-items-center
      .col-lg-12
        .cajon.bg-color-c1.p-4.mb-0
          p.mb-0 De igual manera, el componente integra procedimientos orientados al control de las operaciones de despacho mediante la aplicación de buenas prácticas, técnicas de manipulación y criterios de seguridad operacional que contribuyen a la protección de las mercancías, la disminución de riesgos y el mejoramiento continuo de los procesos logísticos. A lo largo del desarrollo temático se fortalecerán los conocimientos necesarios para apoyar la ejecución eficiente de las actividades de verificación, registro y control dentro de la cadena de suministro.
    
    
</template>

<script>
export default {
  name: 'Introduccion',
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
