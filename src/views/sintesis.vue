<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Verificación de registros y control de despachos aborda los procesos relacionados con la identificación de mercancías, el diligenciamiento de registros logísticos y la ejecución de operaciones de cargue, descargue y despacho, apoyados en el uso adecuado de equipos para la manipulación de productos. Asimismo, desarrolla los fundamentos necesarios para fortalecer la trazabilidad, el control operativo y la seguridad durante las actividades logísticas, contribuyendo a la eficiencia de la cadena de suministro y al cumplimiento de los procedimientos establecidos por las organizaciones.
    
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La estructura jerárquica, muestra el componente formativo Verificación de registros y control de despachos; integrando los principales contenidos relacionados con la identificación mediante códigos de barras, la gestión de registros logísticos, las operaciones de cargue y descargue de mercancías y el uso de equipos para operaciones logísticas. Además, organiza aspectos como conceptos, características, clasificación, técnicas, procedimientos, listas de chequeo, guía de ruta, manipulación de productos y parámetros necesarios para garantizar la trazabilidad, el control y la eficiencia de los procesos logísticos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
