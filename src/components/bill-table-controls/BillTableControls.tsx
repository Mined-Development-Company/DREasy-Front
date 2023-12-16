import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FilterForm } from "../../forms/filter-form/FilterForm";
import { Button } from "../../ui/Button";

export function BillTableControls() {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const toggleFilters = () => { setShowFilters((prev) => !prev); };

  return (
    <div className="bg-white p-3 sm:p-5 shadow-md rounded-xl border m-2">
      <div className="flex items-center justify-between gap-3">
        <Button 
          size="md" color="secondary"
          type="button"
          onClick={toggleFilters}
        >
          Filtrar
        </Button>

        <Button
          size="md" 
          type="button"
          className="flex items-center gap-1"
          aria-label="Adicionar uma conta"
        >
          <FiPlusCircle className="text-xl" />

          <span>Conta</span>
        </Button>
      </div>

      {showFilters && <FilterForm />}
    </div>
  );
}
