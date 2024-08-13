// Pagination.tsx
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  last:boolean | undefined
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, last }) => {
  const pageNumbers = [];

  // Generar números de página
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex space-x-2 my-4 justify-center">
      {/* Botón "Anterior" */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`py-2 px-4 rounded-lg ${currentPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
      >
        Anterior
      </button>

      {/* Botones de número de página */}
      <button
        type="button"
        className={`py-2 px-4 rounded-lg bg-blue-500 text-white`}
      >
        {currentPage}
      </button>

      {/* Botón "Siguiente" */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || last}
        className={`py-2 px-4 rounded-lg ${currentPage === totalPages ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
