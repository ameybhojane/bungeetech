import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Input, Select } from "antd";
const apiKey = import.meta.env.VITE_OMDB_API_KEY;

function SearchPage() {
  const [searchText, setSearchText] = useState("avenge");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [yearOptions, setYearOptions] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);

  const handleChange = (years) => {
    setSelectedYears(years);
  };

  useEffect(() => {
    const url = `https://www.omdbapi.com/?s=${searchText}&apikey=${apiKey}`;

    axios
      .get(url)
      .then((res) => {
        const { Search: searchedMovies } = res.data;
        setMovies(searchedMovies);
        getYears(searchedMovies);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        const response = JSON.parse(err?.response?.request?.responseText);
        setError(response.Error);
        setMovies([]);
      });
  }, [searchText]);

  const getYears = (searchedMovies) => {
    let allYears = searchedMovies.map((movie) => movie.Year);
    allYears = new Set(allYears);
    allYears = [...allYears];
    setSelectedYears([...allYears]);
    allYears = allYears?.map((year) => ({ value: year, label: year }));
    setYearOptions([...allYears]);
  };

  console.log(selectedYears);

  return (
    <div>
      <div class="w-full m-10 flex justify-center">
        <Input
          className="px-6"
          prefix={<i class="fa fa-search"></i>}
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <Select
          mode="multiple"
          placeholder="Please select Years"
          onChange={handleChange}
          style={{ width: "40%" }}
          options={yearOptions}
          value={selectedYears}
        />
      </div>
      {error && <div>{error}</div>}

      <div className="flex justify-evenly flex-wrap gap-8">
        {movies
          ?.filter((movie) => selectedYears.includes(movie.Year))
          ?.map((movie) => {
            return (
              <Link to={`/title/${movie.imdbID}`}>
                <div
                  className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col-reverse justify-between items-end"
                  style={{
                    backgroundImage: `url(${movie.Poster})`,
                  }}
                >
                  <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg">
                    {movie.Title}
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default SearchPage;
