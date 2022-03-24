import { useEffect, useState } from "react";
import { NewCard } from "./NewCard";
import { FilterCard } from "./FilterCard";
import { motion } from "framer-motion";

// Lista de las noticias
export const NewsLists = ({ publisher }) => {
  const [state, setstate] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenere, setActiveGenere] = useState(0);
  //get data api function
  async function getDataApi() {
    let res = await fetch(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=h1cU04oP2OM8dblrnkYzgkByOMcVlhwK"
    );
    let { response } = await res.json();
    setstate(response.docs);
    setFiltered(response.docs);
    return response;
  }
  useEffect(() => {
    getDataApi();
  }, []);
  return (
    <>
      <div className="filters-container mb-4 flex">
        <FilterCard
          state={state}
          setFiltered={setFiltered}
          activeGenere={activeGenere}
          setActiveGenere={setActiveGenere}
        />
      </div>
      <motion.div
        layout
        className="row rows-cols-1  row-cols-md-3 g-3 animate__animated animate__fadeIn container-mobile"
      >
        {filtered.map(notice => (
          <NewCard
            key={notice._id}
            {...notice}
            className="animate__animated animate__fadeIn"
          />
        ))}
      </motion.div>
    </>
  );
};
