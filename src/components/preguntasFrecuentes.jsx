import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function PreguntasFrecuentes() {
  return (
    <Accordion type="single" collapsible className="w-full gap-6">
      {/* Origen de las hebras */}
      <AccordionItem value="item-1">
        <AccordionTrigger>¿De dónde provienen las hebras de té?</AccordionTrigger>
        <AccordionContent>
          Nuestras hebras de té son importadas de países como China, India, Japón y Sri Lanka, seleccionadas por su calidad premium.
        </AccordionContent>
      </AccordionItem>

      {/* Almacenamiento */}
      <AccordionItem value="item-2">
        <AccordionTrigger>¿Cómo debo almacenar las hebras de té?</AccordionTrigger>
        <AccordionContent>
          Para mantener su frescura, las hebras de té deben almacenarse en un lugar fresco, seco y en envases herméticos, lejos de la luz directa del sol.
        </AccordionContent>
      </AccordionItem>

      {/* Envíos */}
      <AccordionItem value="item-3">
        <AccordionTrigger>¿Realizan envíos y cuáles son las zonas de entrega?</AccordionTrigger>
        <AccordionContent>
          Sí, realizamos envíos a todas las provincias de Argentina. El tiempo de entrega puede variar dependiendo de tu ubicación. También ofrecemos envíos internacionales, consúltanos para más detalles.
        </AccordionContent>
      </AccordionItem>

      {/* Métodos de pago */}
      <AccordionItem value="item-4">
        <AccordionTrigger>¿Qué métodos de pago aceptan?</AccordionTrigger>
        <AccordionContent>
          Aceptamos diversas formas de pago, incluyendo tarjetas de crédito y débito, transferencias bancarias, pagos en efectivo mediante plataformas de pago, y criptomonedas.
        </AccordionContent>
      </AccordionItem>

      {/* Ubicación */}
      <AccordionItem value="item-5">
        <AccordionTrigger>¿Dónde están ubicados?</AccordionTrigger>
        <AccordionContent>
          Nuestra tienda física está en Buenos Aires, Argentina. Sin embargo, puedes realizar tu compra desde cualquier lugar del país a través de nuestra tienda en línea.
        </AccordionContent>
      </AccordionItem>

      {/* Preparación del té */}
      <AccordionItem value="item-6">
        <AccordionTrigger>¿Todas las hebras de té se preparan igual?</AccordionTrigger>
        <AccordionContent>
          No. Cada tipo de té tiene su temperatura y tiempo de infusión óptimos. Por ejemplo, el té verde se debe calentar a unos 75-80°C, mientras que el té negro requiere agua más caliente, alrededor de 90-95°C. Esto asegura que obtengas el mejor sabor de cada tipo de té.
        </AccordionContent>
      </AccordionItem>

      {/* Té orgánico */}
      <AccordionItem value="item-7">
        <AccordionTrigger>¿Tienen opciones de té orgánico?</AccordionTrigger>
        <AccordionContent>
          Sí, contamos con una variedad de tés orgánicos certificados, cultivados sin el uso de pesticidas ni fertilizantes químicos.
        </AccordionContent>
      </AccordionItem>

      {/* Diferencia entre té en hebras y saquitos */}
      <AccordionItem value="item-8">
        <AccordionTrigger>¿Cuál es la diferencia entre el té en hebras y el té en saquitos?</AccordionTrigger>
        <AccordionContent>
          El té en hebras ofrece un sabor más completo y aromático ya que las hojas enteras retienen mejor sus propiedades. Los saquitos de té, por otro lado, suelen contener hojas rotas o polvo de té, lo que reduce la calidad de la infusión.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
