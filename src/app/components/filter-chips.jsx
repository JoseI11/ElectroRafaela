/**
 * FilterChips Component
 * 
 * Componente de filtros tipo 'pills' con estado activo
 * Diseño moderno y accesible
 * 
 * @param {Array} filters - Array de filtros con { label, value, active, onChange }
 * @returns {JSX.Element}
 */

export default function FilterChips({ filters }) {
  if (!filters || filters.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={filter.onChange}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            ${
              filter.active
                ? "bg-blue-600 text-white shadow-md hover:bg-blue-700 cursor-pointer"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300 cursor-pointer"
            }
          `}
          aria-pressed={filter.active}
          title={`Filtrar por ${filter.label}`}
        >
          {filter.label}
          {filter.active && <span className="ml-1">✓</span>}
        </button>
      ))}
    </div>
  );
}
