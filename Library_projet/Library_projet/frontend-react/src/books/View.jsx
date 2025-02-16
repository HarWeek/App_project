import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Viewbook() {
  const [book, setbook] = useState({
    name: "",
    bookname: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadbook();
  }, []);

  const loadbook = async () => {
    const result = await axios.get(`http://localhost:8080/book/${id}`);
    setbook(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">book Details</h2>

          <div className="card">
            <div className="card-header">
              Details of book id : {book.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {book.name}
                </li>
                <li className="list-group-item">
                  <b>bookName:</b>
                  {book.bookname}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {book.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
