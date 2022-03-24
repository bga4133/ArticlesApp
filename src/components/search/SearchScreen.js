import { useState } from "react";
import { useForm } from "../hooks/useForm";
import queryString from "query-string";
import { NewCard } from "../news/NewCard";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const SearchScreen = () => {
  const [state, setstate] = useState([]);
  // Screen de la busqueda
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  // hook para obtener el value de los campos
  const [formValues, handleInputChange] = useForm({
    searchText: q
  });

  const { searchText } = formValues;

  // Hacemos la peticion para buscar la data por id
  async function getData() {
    let res = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${q}&api-key=h1cU04oP2OM8dblrnkYzgkByOMcVlhwK`
    );
    let { response } = await res.json();
    setstate(response.docs);
    return response;
  }

  // pasamos el estado para el filtro de noticias
  //const noticesFilter = [...state];
  // funcion del submit de la busqueda
  const handleSearch = e => {
    e.preventDefault();
    getData();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1 className="mt-5 mb-5">Search the best articles🔍</h1>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h4>
            Buscar
            <hr />
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Buscar noticias"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={handleInputChange}
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.7 }}
                type="submit"
                className="btn btn-outline-primary mt-3 moreInfoButton btn-lg"
              >
                Buscar ...
              </motion.button>
            </form>
          </h4>
        </div>
        <div className="col-md-6 col-sm-12">
          <h4>Resultados</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-info animate__animated animate__pulse">
              Buscar noticias
            </div>
          ) : (
            state.length === 0 && (
              <div className="alert alert-danger animate__animated animate__fadeIn">
                No hay resultados {q}
              </div>
            )
          )}

          {state.map(notice => (
            <div className="mt-3">
              <NewCard key={notice._id} {...notice} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
