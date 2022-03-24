import React from "react";
import { useEffect } from "react/cjs/react.development";
import { motion } from "framer-motion";

export const FilterCard = ({
  setActiveGenere,
  activeGenere,
  setFiltered,
  state
}) => {
  useEffect(() => {
    // TO DO : Refactorizar y cambiar por switch
    if (activeGenere === 0) {
      setFiltered(state);
      return;
    } else if (activeGenere === 1) {
      const filteredState = state.filter(news =>
        news.type_of_material.includes("News")
      );
      setFiltered(filteredState);
    } else if (activeGenere === 2) {
      const filteredState = state.filter(news =>
        news.section_name.includes("Arts")
      );
      setFiltered(filteredState);
    } else if (activeGenere === 3) {
      const filteredState = state.filter(news =>
        news.section_name.includes("Fashion & Style")
      );
      setFiltered(filteredState);
    } else if (activeGenere === 4) {
      const filteredState = state.filter(news =>
        news.section_name.includes("World")
      );
      setFiltered(filteredState);
    }
  }, [activeGenere, setFiltered, state]);

  return (
    <div className="filter-container flex">
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className={activeGenere === 0 ? "active" : ""}
        onClick={() => setActiveGenere(0)}
      >
        All
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className={activeGenere === 1 ? "active" : ""}
        onClick={() => setActiveGenere(1)}
      >
        News
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className={activeGenere === 2 ? "active" : ""}
        onClick={() => setActiveGenere(2)}
      >
        Art
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className={activeGenere === 3 ? "active" : ""}
        onClick={() => setActiveGenere(3)}
      >
        Fashion
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className={activeGenere === 4 ? "active" : ""}
        onClick={() => setActiveGenere(4)}
      >
        world
      </motion.button>
    </div>
  );
};
