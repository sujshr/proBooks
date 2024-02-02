import React from "react";
import "./Book.css";
export default function Book(props) {
  const book = props.book;
  return (
    <div className="book">
      <div className="firstContainer">
        <h2>{book.title}</h2>
        <img src={book.imageLinks.smallThumbnail} alt="" />
        <h4>
          {book.authors.map((author) => {
            return <p>{author}</p>;
          })}
        </h4>
      </div>
      <div className="secondContainer">
        <p>{book.description}</p>
      </div>
      <br />
    </div>
  );
}
