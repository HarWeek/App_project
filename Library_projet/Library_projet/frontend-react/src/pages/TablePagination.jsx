import React from "react";

const TablePagination = ({ count, page, onPageChange, rowsPerPage, onRowsPerPageChange, rowsPerPageOptions }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mt-3">
      <span>Affichage de {page * rowsPerPage + 1} - {Math.min((page + 1) * rowsPerPage, count)} sur {count}</span>
      
      <div>
        <label className="me-2">Lignes par page :</label>
        <select value={rowsPerPage} onChange={onRowsPerPageChange}>
          {rowsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button 
          disabled={page === 0} 
          onClick={() => onPageChange(null, page - 1)}
        >
          ◀ Précédent
        </button>
        <button 
          disabled={(page + 1) * rowsPerPage >= count} 
          onClick={() => onPageChange(null, page + 1)}
        >
          Suivant ▶
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
