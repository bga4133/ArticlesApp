import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";

// Screen de la noticia completa
export const NoticeScreen = () => {
  // Estado de la app
  const [state, setstate] = useState([]);
  const { noticeId } = useParams();
  //destructuramos del state los siguientes campos
  const { albumId, id, title, url, thumbnailUrl } = state;
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  // Treaemos la data por Id
  async function getData() {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${noticeId}`
    );
    let res = await response.json();
    setstate(res);
    return res;
  }
  const navigate = useNavigate();
  if (!state) {
    return <Navigate to="/" />;
  }
  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={url}
          alt={url}
          className="img-thumbnail animate__animated animate__fadeInLeft shadow"
        />
      </div>
      <div className="col-8">
        <h2>{title} 📰🗞️👏</h2>
        <ul className="list-group">
          <li className="list-group-item animate__animated animate__fadeIn">
            <b>Album id: </b> {albumId}
          </li>
          <li className="list-group-item animate__animated animate__fadeIn">
            <b>Id: </b> {id}
          </li>
          <li className="list-group-item animate__animated animate__fadeIn">
            <b>URL: </b> {thumbnailUrl}
          </li>

          <h5 className="mt-5 animate__animated animate__fadeIn">🗞️</h5>
          <p>Segunda url: {url}</p>
          <button
            className="btn btn-outline-info animate__animated animate__pulse buttonScreen shadow"
            onClick={handleReturn}
          >
            Regresar
          </button>
        </ul>
      </div>
    </div>
  );
};
