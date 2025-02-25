import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const apiKey = import.meta.env.VITE_OMDB_API_KEY;

function Title(props) {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  //   let movie = {
  //     Title: "Twilight",
  //     Year: "2008",
  //     Rated: "PG-13",
  //     Released: "21 Nov 2008",
  //     Runtime: "122 min",
  //     Genre: "Drama, Fantasy, Romance",
  //     Director: "Catherine Hardwicke",
  //     Writer: "Melissa Rosenberg, Stephenie Meyer",
  //     Actors: "Kristen Stewart, Robert Pattinson, Billy Burke",
  //     Plot: "When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire.",
  //     Language: "English",
  //     Country: "United States, United Kingdom",
  //     Awards: "34 wins & 16 nominations total",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_SX300.jpg",
  //     Ratings: [
  //       {
  //         Source: "Internet Movie Database",
  //         Value: "5.3/10",
  //       },
  //       {
  //         Source: "Rotten Tomatoes",
  //         Value: "48%",
  //       },
  //       {
  //         Source: "Metacritic",
  //         Value: "56/100",
  //       },
  //     ],
  //     Metascore: "56",
  //     imdbRating: "5.3",
  //     imdbVotes: "502,170",
  //     imdbID: "tt1099212",
  //     Type: "movie",
  //     DVD: "N/A",
  //     BoxOffice: "$193,962,473",
  //     Production: "N/A",
  //     Website: "N/A",
  //     Response: "True",
  //   };

  const { id } = useParams();
  useEffect(() => {
    const url = `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`;

    axios
      .get(url)
      .then((res) => {
        setMovie(res.data);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        const response = JSON.parse(err?.response?.request?.responseText);
        setError(response.Error + err.message);
        setMovie({});
      });
  }, []);
  return (
    <div>
      <div className="text-5xl text-blue-600/100 m-4">{movie.Title}</div>
      <div className="flex justify-around">
        <div
          className="h-[60vh] w-[300px] bg-center bg-cover"
          style={{
            backgroundImage: `url(${movie.Poster})`,
          }}
        ></div>

        <div className="flex gap-3">
          <table className="border-4 border-double m-4">
            <tr className="border-y">
              <td className="px-4 text-blue-600/100 underline font-medium">
                Year
              </td>
              <td className="px-4">{movie.Year}</td>
            </tr>
            <tr className="border-y">
              <td className="px-4 text-blue-600/100 underline font-medium">
                Rated
              </td>
              <td>{movie.Rated}</td>
            </tr>
            <tr className="border-y">
              <td className="px-4 text-blue-600/100 underline font-medium">
                Runtime
              </td>
              <td>{movie.Runtime}</td>
            </tr>
            <tr className="border-y">
              <td className="px-4 text-blue-600/100 underline font-medium">
                IMDB Rating
              </td>
              <td>{movie.imdbRating}</td>
            </tr>
            <tr className="border-y">
              <td className="px-4 text-blue-600/100 underline font-medium">
                IMDB Votes
              </td>
              <td>{movie.imdbVotes}</td>
            </tr>
            <tr className="border-y">
              <td className="px-4 text-blue-600/100 underline font-medium">
                Language
              </td>
              <td>{movie.Language}</td>
            </tr>
            <tr className="border-y">
              <td className="px-4 text-blue-600/100 underline font-medium">
                Box Office
              </td>
              <td className="px-4">{movie.BoxOffice}</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="m-4 p-4 border-y">
        <p className="text-left">
          <span className="font-bold text-lg text-blue-600/100">
            Plot {"  "}
          </span>
          {movie.Plot}
        </p>
      </div>
      <div className="m-4 p-4 border-y">
        <p className="text-left">
          <span className="font-bold text-lg text-blue-600/100">
            Actors {"  "}
          </span>
          {movie.Actors}
        </p>
      </div>
      <div className="m-4 p-4 border-y">
        <p className="text-left">
          <span className="font-bold text-lg text-blue-600/100">
            Director {"  "}
          </span>
          {movie.Director}
        </p>
      </div>
    </div>
  );
}
// {
//     "Title": "Twilight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "21 Nov 2008",
//     "Runtime": "122 min",
//     "Genre": "Drama, Fantasy, Romance",
//     "Director": "Catherine Hardwicke",
//     "Writer": "Melissa Rosenberg, Stephenie Meyer",
//     "Actors": "Kristen Stewart, Robert Pattinson, Billy Burke",
//     "Plot": "When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire.",
//     "Language": "English",
//     "Country": "United States, United Kingdom",
//     "Awards": "34 wins & 16 nominations total",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_SX300.jpg",
//     "Ratings": [
//         {
//             "Source": "Internet Movie Database",
//             "Value": "5.3/10"
//         },
//         {
//             "Source": "Rotten Tomatoes",
//             "Value": "48%"
//         },
//         {
//             "Source": "Metacritic",
//             "Value": "56/100"
//         }
//     ],
//     "Metascore": "56",
//     "imdbRating": "5.3",
//     "imdbVotes": "502,170",
//     "imdbID": "tt1099212",
//     "Type": "movie",
//     "DVD": "N/A",
//     "BoxOffice": "$193,962,473",
//     "Production": "N/A",
//     "Website": "N/A",
//     "Response": "True"
// }
export default Title;
