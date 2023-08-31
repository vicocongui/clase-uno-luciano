import Cards from "./Cards";
import React, { useState, useEffect } from "react";
import axios from "axios";
const CardsContainer = () => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorDeLaApi, setErrorDeLaApi] = useState(null);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        setPersonajes(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setErrorDeLaApi(error);
        setLoading(false);
      });
  }, []);

  //  if (loading) return <p>Cargando...</p>;
  //   if (error) return <p>Error: {error.message}</p>;

  return (
    <div
      className=" h-full  bg-black
    "
    >
      {loading && (
        <p className="text-white text-6xl absolute w-full h-screen flex justify-center items-center z-30 bg-black top-0">
          Cargando...
        </p>
      )}

      {!loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-5 px-2 ">
          {personajes.slice(0, 5).map((personaje) => (
            <Cards character={personaje} />
          ))}
        </div>
      )}

      {errorDeLaApi && (
        <p className="text-white text-6xl absolute w-full h-screen flex justify-center items-center z-30 bg-black top-0">
          Error: {errorDeLaApi.message}
        </p>
      )}
    </div>
  );
};

export default CardsContainer;
