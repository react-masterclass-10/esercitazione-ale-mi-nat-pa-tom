import { useState, useEffect } from "react";
import axios from "axios";

function Ricerca() {

    // FUNZIONE API
    // let { id } = useParams();
    const [book, setBook] = useState([]);
    const [error, setError] = useState(undefined);
    const [nomeLibro, setNomeLibro] = useState(``)
      const [submitted, setSubmitted] = useState(false);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (submitted) {

            setSubmitted(false); 
          }

        async function bookApi() {
        //   setLoading(true);
          try {
            const { data } = await axios.get(`https://gutendex.com/books?search=${nomeLibro}`);
            setBook(data.results);
          } catch (error) {
            setError(`${error.message}`);
          }
        //   setLoading(false);
        }
        bookApi();
      }, [submitted]);


      //FUNZIONE FORM
      const formSubmition = (event) => {
        event.preventDefault();

        //reset del form
        setNomeLibro(``)
        console.log(nomeLibro)
        setSubmitted(true);
    }

    //compile nome form
    const aggriornaNomeLibro = (event) => {
        setNomeLibro(event.currentTarget.value)
    }

    //elaborazione del nome

  
    return (
      <>
        
        {book && book.map((book) => (
        <article key={book.id}>
          <h1>{book.title}</h1>
          <img src={book.formats["image/jpeg"]} alt="book image" />
        </article>
      ))}

        <form onSubmit={(formSubmition)}>
            <div className="mb-3 d">
              <label for="exampleInputEmail1" className="form-label">Ricerca Libro</label>
              <input type="text" className="form-control" aria-describedby="emailHelp" onChange={(aggriornaNomeLibro)} value={nomeLibro}/>
                </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </>
    )
  }

  export default Ricerca