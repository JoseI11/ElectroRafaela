import React, { useState, useEffect } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { Checkbox,Label } from "flowbite-react";

/**
 * Componente que renderiza un grupo de checkboxes para filtrar productos por el tipo de polo. Para termicas se muestran las siguientes opciones como checkboxes (UNIPOLAR, BIPOLAR, TRIPOLAR, TETRAPOLAR) y para los disyuntores se muestran las siguientes opciones como checkboxes (BIPOLAR, TETRAPOLAR). 
 * según la categoría actual.
 *
 * @returns {React.ReactElement} Un elemento JSX que contiene un grupo de checkboxes.
 
*/
const FilterCheck = () => {
  const router = useRouter();
  let { category } = useParams();
  category = category.toUpperCase(); // Asegurar consistencia

  const searchParams = useSearchParams();
  const initialPolos = searchParams.get("polos")?.split(",") || [];
  const [selectedPolos, setSelectedPolos] = useState(initialPolos);

  // Definir los arrays de polos según la categoría
  const polosTermicas = [
    { id: 1, name: "UNIPOLAR" },
    { id: 2, name: "BIPOLAR" },
    { id: 3, name: "TRIPOLAR" },
    { id: 4, name: "TETRAPOLAR" },
  ];

  const polosDisy = [
    { id: 1, name: "BIPOLAR" },
    { id: 2, name: "TETRAPOLAR" },
  ];

  const polos =
    category === "TERMICAS"
      ? polosTermicas
      : category === "DISYUNTORES"
      ? polosDisy
      : [];

  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    const updatedFilters = checked
      ? [...selectedPolos, value]
      : selectedPolos.filter((polo) => polo !== value);

    setSelectedPolos(updatedFilters);

    const queryString =
      updatedFilters.length > 0 ? `?polos=${updatedFilters.join(",")}` : "";

    router.push(`/products/${category}${queryString}`);
  };

  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col space-y-2 w-full max-w-xs">
        {polos.map((polo) => (
          <div
            key={polo.id}
            className="flex items-center justify-between w-full"
          >
            <div className="flex max-w-md flex-col gap-4" id="checkbox">
              <div className="flex items-center gap-2">
                <Checkbox id={polo.id} name={polo.name} value={polo.name} className="w-4 h-4 border-zinc-900" onChange={handleFilterChange}  />
                <Label htmlFor="accept" className="flex">
                  {polo.name}
                </Label>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default FilterCheck;
