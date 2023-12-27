import React from 'react';
// Ui
import { Button } from '../ui/Button';
// Form
import { FilterForm } from '../../forms';
// React icons
import { FiPlusCircle } from 'react-icons/fi';
import { BaseLayout } from '../../layouts';
import { useLocation, useNavigate } from 'react-router-dom';

export function BillTableControls() {
  const [showFilters, setShowFilters] = React.useState<boolean>(false);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <BaseLayout>
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
          onClick={() => navigate(`${pathname}/account`)}
        >
          <FiPlusCircle className="text-xl" />

          <span>Conta</span>
        </Button>
      </div>

      {showFilters && <FilterForm />}
    </BaseLayout>
  );
}
