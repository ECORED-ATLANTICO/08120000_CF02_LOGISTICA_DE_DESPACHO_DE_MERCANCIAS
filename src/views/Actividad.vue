<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Operaciones logísticas seguras',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los procesos de identificación, registro, cargue, descargue y manejo de equipos en las operaciones logísticas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la principal función del código de barras en una operación logística?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elaborar informes financieros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar de forma única las mercancías y facilitar su trazabilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar empaques comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Calcular costos de transporte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El código de barras permite identificar las mercancías y agilizar los procesos de registro y control logístico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué característica debe tener un código de barras para facilitar su lectura?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estar impreso con alto contraste entre barras y fondo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Tener colores metálicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estar ubicado sobre superficies curvas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contener únicamente letras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El alto contraste mejora la lectura por parte de los escáneres.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes códigos de barras es ampliamente utilizado para identificar productos de consumo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Código Morse.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Code 25.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'EAN-13.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'ASCII.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El código EAN-13 es uno de los estándares más utilizados para productos comercializados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué documento permite registrar el recorrido y las entregas programadas de una mercancía?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Factura de compra.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Orden de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registro de inventario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Guía de ruta.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La guía de ruta permite controlar el recorrido y las entregas de las mercancías.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es uno de los objetivos principales de los registros logísticos?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Llevar el control y trazabilidad de las operaciones logísticas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseñar campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elaborar contratos laborales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar la nómina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los registros logísticos permiten documentar y controlar las operaciones relacionadas con las mercancías.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es una característica que deben cumplir los registros logísticos?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contener únicamente información financiera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ser claros, exactos y oportunos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elaborarse únicamente al finalizar la jornada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Utilizar información aproximada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los registros logísticos deben contener información clara, exacta y registrada oportunamente para garantizar la trazabilidad de las operaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué acción hace parte de una técnica adecuada para diligenciar registros logísticos?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar la información en tiempo real.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diligenciar los formatos días después de la operación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Utilizar información sin verificar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Omitir las novedades presentadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Registrar la información en el momento de la operación garantiza mayor confiabilidad de los datos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes documentos facilita el seguimiento de una mercancía durante su transporte?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Orden de compra.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comprobante de nómina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Guía de ruta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Organigrama institucional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La guía de ruta contiene la información necesaria para controlar el recorrido y la entrega de las mercancías.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué información debe contener una guía de ruta?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estrategias de mercadeo de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Manual de funciones del personal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Presupuesto anual de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Origen, destino, mercancías transportadas y responsable del transporte.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La guía de ruta incluye la información necesaria para controlar el proceso de transporte y distribución.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es el principal propósito de los registros logísticos dentro de una organización?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar la trazabilidad y el control de las operaciones logísticas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elaborar informes tributarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar procesos de contratación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los registros logísticos permiten documentar, controlar y hacer seguimiento a las operaciones realizadas sobre las mercancías.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el objetivo principal de las operaciones de cargue y descargue de mercancías?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elaborar informes administrativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar la movilización segura y eficiente de las mercancías.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar el empaque de los productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elaborar el presupuesto de transporte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las operaciones de cargue y descargue buscan garantizar el movimiento seguro y eficiente de las mercancías.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es una característica de una zona de cargue y descargue?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Debe contar con señalización y condiciones seguras para la operación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Debe utilizarse para almacenar residuos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo puede ser utilizada por personal administrativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No requiere delimitación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las zonas de cargue y descargue deben estar adecuadamente señalizadas y ofrecer condiciones seguras para las operaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué función cumplen los puntos de transferencia dentro de la logística?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar pagos a proveedores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Elaborar inventarios físicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Facilitar el cambio o redistribución de mercancías entre medios de transporte.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Diseñar rutas comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los puntos de transferencia permiten el intercambio y redistribución de mercancías dentro de la cadena logística.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué herramienta permite verificar que las actividades de cargue y descargue se realizaron correctamente?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lista de chequeo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Organigrama empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Balance general.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Manual de identidad corporativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La lista de chequeo permite verificar el cumplimiento de los procedimientos establecidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué técnica contribuye a proteger la mercancía durante su manipulación?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Apilar la carga sin control.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Manipular la mercancía de acuerdo con su naturaleza.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Arrastrar los productos sobre el piso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sobrecargar los equipos de transporte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Cada mercancía requiere técnicas específicas de manipulación para conservar su integridad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál de los siguientes equipos se utiliza para movilizar mercancías dentro de una bodega?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Computador portátil.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Archivador metálico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Montacargas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Calculadora.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El montacargas facilita la movilización segura de mercancías dentro de las instalaciones logísticas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué debe hacerse antes de operar un equipo logístico?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizarlo inmediatamente para ahorrar tiempo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar su capacidad de carga.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modificar sus controles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Verificar su estado y condiciones de funcionamiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La inspección previa permite identificar fallas y prevenir accidentes durante la operación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es una práctica adecuada para el cuidado de los equipos logísticos?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar inspecciones y mantenimiento preventivo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Utilizarlos sin revisar su estado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sobrecargarlos para optimizar tiempos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Omitir el reporte de daños.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El mantenimiento preventivo prolonga la vida útil de los equipos y reduce riesgos operativos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué procedimiento debe seguir el operador al finalizar el uso de un equipo logístico?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dejarlo encendido para la siguiente operación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estacionarlo correctamente y reportar novedades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Retirar los dispositivos de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Abandonarlo en cualquier lugar de la bodega.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El equipo debe estacionarse en el lugar asignado y reportarse cualquier novedad presentada durante su utilización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el beneficio de utilizar correctamente los equipos logísticos?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el consumo de combustible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la productividad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disminuir la seguridad de la operación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Mejorar la eficiencia y la seguridad en la manipulación de mercancías.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El uso adecuado de los equipos mejora la productividad, protege las mercancías y reduce los riesgos durante las operaciones logísticas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
