import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

export const App = () => {
  const { data, isLoading } = useQuery("planets", () => {
    return axios
      .get("https://swapi.dev/api/planets")
      .then((res) => res.data.results);
  });
  console.log("DATA", data);
  return isLoading ? (
    <h1>Loading .....</h1>
  ) : (
    <div>
      {data.map((planet) => (
        <h1 key={planet.name}>{planet.name}</h1>
      ))}
    </div>
  );
};
