"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Testimonios() {
  return (
    (<div
      className="rounded-sm flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="normal" />
    </div>)
  );
}

const testimonials = [
  {
    quote:
      "Las hebras de té son de una calidad excepcional. Desde que probé el té verde importado, no puedo volver a los tés convencionales. ¡La frescura y el aroma son incomparables!",
    name: "Laura Gómez",
    title: "Amante del té",
  },
  {
    quote:
      "El té de jazmín que compré aquí es simplemente delicioso. Cada sorbo es una experiencia única, ¡realmente me transporta a otra parte del mundo!",
    name: "Martín Pérez",
    title: "Cliente frecuente",
  },
  {
    quote:
      "La variedad de hebras que ofrecen es increíble. Mi favorito hasta ahora es el té negro, con un sabor profundo y equilibrado. Lo recomiendo totalmente.",
    name: "Sofía Rodríguez",
    title: "Entusiasta del té",
  },
  {
    quote:
      "Desde que descubrí estas hebras importadas, mi rutina de té diaria ha mejorado muchísimo. La calidad se nota en cada taza.",
    name: "Javier Martínez",
    title: "Consumidor diario",
  },
  {
    quote:
      "El servicio fue excelente, y las hebras de té llegaron en perfectas condiciones. ¡Estoy encantada con la variedad de sabores que puedo probar!",
    name: "Carla Fernández",
    title: "Fanática del té",
  },
];

