import { useEffect, useState } from "react";
import Book from "./components/Book";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "key" },
      })
      .then((res) => {
        console.log(res);
        setData(res.data.books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {data.map((book, i) => {
        return (
          <>
            <Book key={i} book={book} />
            <hr />
          </>
        );
      })}
    </>
  );
}

export default App;
