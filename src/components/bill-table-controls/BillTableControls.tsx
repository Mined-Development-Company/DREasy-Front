import React from 'react';
// Ui
import { Button } from '../ui/Button';
// Form
import { FilterForm } from '../../forms';
// React icons
import { FiPlusCircle } from 'react-icons/fi';

export function BillTableControls() {
  const [showFilters, setShowFilters] = React.useState<boolean>(false);

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <div className="p-2 mt-3 bg-white border shadow-md sm:p-5 rounded-xl">
      <div className="flex items-center justify-between gap-3">
        <Button
          size="md"
          color="secondary"
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
