import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation after adding the book

export default function AddBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn: "",
    publisher: "",
    publicationDate: "",
    edition: "",
    genre: "",
    description: "",
    language: "",
    numberOfPages: "",
    cost: "",
    available: true,
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8088/api/books/add", book);
      navigate("/"); // Redirect to home after adding the book
    } catch (error) {
      console.error("❌ Error adding book:", error);
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h2>📚 Ajouter un Livre</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Titre</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={book.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">Auteur</label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={book.author}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="isbn" className="form-label">ISBN</label>
            <input
              type="text"
              className="form-control"
              id="isbn"
              name="isbn"
              value={book.isbn}
              onChange={handleChange}
              required
            />
          </div>
          {/* Add more fields for publisher, genre, etc. */}
          <div className="mb-3">
            <label htmlFor="publisher" className="form-label">Éditeur</label>
            <input
              type="text"
              className="form-control"
              id="publisher"
              name="publisher"
              value={book.publisher}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="publicationDate" className="form-label">Date de Publication</label>
            <input
              type="date"
              className="form-control"
              id="publicationDate"
              name="publicationDate"
              value={book.publicationDate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="numberOfPages" className="form-label">Nombre de Pages</label>
            <input
              type="number"
              className="form-control"
              id="numberOfPages"
              name="numberOfPages"
              value={book.numberOfPages}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cost" className="form-label">Coût</label>
            <input
              type="number"
              className="form-control"
              id="cost"
              name="cost"
              value={book.cost}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="available" className="form-label">Disponible</label>
            <select
              className="form-control"
              id="available"
              name="available"
              value={book.available}
              onChange={handleChange}
            >
              <option value={true}>Oui</option>
              <option value={false}>Non</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Ajouter le Livre</button>
        </form>
      </div>
    </div>
  );
}
