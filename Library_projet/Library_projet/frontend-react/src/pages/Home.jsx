/*import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";
import TablePagination from "./TablePagination";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const result = await axios.get("http://localhost:8088/api/books/allBooks");
      setBooks(result.data);
    } catch (error) {
      console.error("❌ Erreur lors du chargement des livres :", error);
    }
  };

  const deleteBook = async (bookId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce livre ?")) {
      try {
        await axios.delete(`http://localhost:8088/api/books/delete/${bookId}`);
        setBooks(books.filter(book => book.bookId !== bookId));
      } catch (error) {
        console.error("❌ Erreur lors de la suppression du livre :", error);
      }
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h2>📚 Liste des Livres</h2>
        <Link className="btn btn-outline-dark mb-3" to="/addbook">
          ➕ Ajouter un Livre
        </Link>

        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Titre</th>
              <th scope="col">Auteur</th>
              <th scope="col">Éditeur</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 ? (
              books
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((book, index) => (
                  <tr key={book.bookId}>
                    <th scope="row">{page * rowsPerPage + index + 1}</th>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.publisher}</td>
                    <td>
                      <button className="btn btn-primary mx-2">👁 Voir</button>
                      <button className="btn btn-outline-primary mx-2">✏ Modifier</button>
                      <button onClick={() => deleteBook(book.bookId)} className="btn btn-danger mx-2">
                        ❌ Supprimer
                      </button>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">Aucun livre trouvé.</td>
              </tr>
            )}
          </tbody>
        </table>

        <TablePagination
          component="div"
          count={books.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </div>
    </div>
  );
}
*/
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";
import TablePagination from "./TablePagination";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const result = await axios.get("http://localhost:8088/api/books/allBooks");
      setBooks(result.data);
    } catch (error) {
      console.error("❌ Erreur lors du chargement des livres :", error);
    }
  };

  const deleteBook = async (bookId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce livre ?")) {
      try {
        await axios.delete(`http://localhost:8088/api/books/delete/${bookId}`);
        setBooks(books.filter(book => book.bookId !== bookId));
      } catch (error) {
        console.error("❌ Erreur lors de la suppression du livre :", error);
      }
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Revenir à la première page lors du changement du nombre de lignes par page
  };

  return (
    <div className="container">
      <div className="py-4">
        <h2>📚 Liste des Livres</h2>
        <Link className="btn btn-outline-dark mb-3" to="/addbook">
          ➕ Ajouter un Livre
        </Link>

        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Titre</th>
              <th scope="col">Auteur</th>
              <th scope="col">Éditeur</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 ? (
              books
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((book, index) => (
                  <tr key={book.bookId}>
                    <th scope="row">{page * rowsPerPage + index + 1}</th>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.publisher}</td>
                    <td>
                      <button className="btn btn-primary mx-2">👁 Voir</button>
                      <button className="btn btn-outline-primary mx-2">✏ Modifier</button>
                      <button onClick={() => deleteBook(book.bookId)} className="btn btn-danger mx-2">
                        ❌ Supprimer
                      </button>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">Aucun livre trouvé.</td>
              </tr>
            )}
          </tbody>
        </table>

        <TablePagination
  count={books.length}
  page={page}
  onPageChange={handleChangePage}
  rowsPerPage={rowsPerPage}
  onRowsPerPageChange={handleChangeRowsPerPage}
  rowsPerPageOptions={[5, 10, 25]}
/>
      </div>
    </div>
  );
}
