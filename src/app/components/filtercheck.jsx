import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";

const FilterCheck = () => {
  const router = useRouter();
  const { categoria } = useParams();

  const [selectedPolos, setSelectedPolos] = useState([]);

  const polos = [
    { id: 1, name: "UNIPOLAR" },
    { id: 2, name: "BIPOLAR" },
    { id: 3, name: "TRIPOLAR" },
    { id: 4, name: "TETRAPOLAR" },
  ];
  
  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    let updatedFilters = checked
      ? [...selectedPolos, value]
      : selectedPolos.filter((polo) => polo !== value);

    setSelectedPolos(updatedFilters);

    // Actualizar la URL con los filtros seleccionados
    const queryString =
      updatedFilters.length > 0 ? `?polos=${updatedFilters.join(",")}` : "";
    router.push(`/productos/${categoria}${queryString}`);
  };

  return (
    <section className="flex flex-col items-center">
      <h4>Tipos de Polos</h4>
      <div id="accordion-collapse" data-accordion="collapse"></div>
      <div className="flex flex-col space-y-2 w-full max-w-xs">
        {polos.map((polo) => (
          <div
            key={polo.id}
            className="flex items-center justify-between -space-x-8 w-full"
          >
            <label htmlFor={polo.name}>{polo.name}</label>

            <input
              type="checkbox"
              id={polo.id}
              name={polo.name}
              value={polo.name}
              className="w-4 h-4"
              onChange={handleFilterChange}
              checked={selectedPolos.includes(polo.name)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FilterCheck;
