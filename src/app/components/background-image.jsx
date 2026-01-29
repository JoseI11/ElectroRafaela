/**
 * BackgroundImage Component
 *
 * Renderiza la imagen de fondo de forma optimizada usando next/image con priority
 * para mejorar LCP. Esta solución:
 * 
 * 1. Permite preload de la imagen (priority prop)
 * 2. Aplica transformaciones CSS sin layout shift (CLS)
 * 3. Mantiene la imagen de fondo en el layout sin afectar contenido
 * 4. Usa position: fixed para overlay efectivo
 *
 * Alternativa a usar backgroundImage en Tailwind (que no permite optimización)
 *
 * @returns {JSX.Element}
 */

import Image from "next/image";

export default function BackgroundImage() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-screen overflow-hidden">
      <Image
        src="/assets/imagenconstelacion.jpg"
        alt="Background pattern"
        fill
        className="object-cover object-center"
        priority
        quality={75}
      />
    </div>
  );
}
