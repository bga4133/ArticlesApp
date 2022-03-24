import React from "react";
import { motion } from "framer-motion";

// Screen de la noticia
export const NewCard = ({
  _id,
  abstract,
  uri,
  byline,
  headline,
  multimedia,
  snippet,
  source,
  type_of_material,
  section_name,
  web_url
}) => {
  let images = multimedia.map(img => img.url);
  let imagesPath = `https://www.nytimes.com/${images[0]}`;

  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      className="col animate__animated animate__fadeIn "
    >
      <div className="card">
        <div className="row no-gutters container-mobile-card">
          <div className="col-6 col-sm-6 imagenMobile flex">
            <div className="col-10 container-image flex">
              <img
                src={
                  imagesPath
                    ? imagesPath
                    : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.wEe7-A1C6d833vFpTjD_FQHaE7%26pid%3DApi&f=1"
                }
                className="card-img-top"
                alt={headline.main}
              />
            </div>
          </div>
          <div className="col-6 card-text-mobile">
            <div className="card-body">
              <h3 className="card-text mt-1">
                {headline.main && headline.main.substring(30, -1)} 📰
              </h3>
              <div className="typeMaterial-container flex">
                <p>{source} </p>
                {type_of_material && (
                  <motion.p
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.7 }}
                    className="newsTap flex"
                  >
                    {type_of_material ? type_of_material.substring(9, -1) : ""}
                  </motion.p>
                )}
              </div>
              <p>{section_name}</p>
              <p>{snippet && snippet.substring(80, -1)}</p>
              <p className="card-text"> {headline.print_headline}</p>
              <a
                href={web_url}
                target="_blank"
                rel="noreferrer"
                className="moreInfoButton btn-sm"
              >
                Más info...
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
