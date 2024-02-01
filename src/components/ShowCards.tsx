import { TShow } from "../interfaces/interfaces";
import noImg from "../assets/noImg.jpg";
import { Link } from "react-router-dom";
export default function ShowCards({ tvShow }: { tvShow: TShow }) {
  const { show } = tvShow;
  const imgUrl = show.image?.medium || noImg;

  return (
    <div className="flex gap-4 items-center py-2 p-3 shadow-md rounded-md bg-white w-3/5 mx-auto hover:scale-[1.03] transition-transform">
      <img src={imgUrl} className="object-cover w-60 h-80" />
      <div className="h-full space-y-4">
        <h1 className="text-2xl my-2 font-medium text-slate-900">
          {show.name}
        </h1>
        <div className="flex space-x-3">
          <p className="font-medium">Language: {show.language}</p>
          <p className="font-medium">Type: {show.type}</p>
        </div>

        <div className="flex gap-2">
          <p className="font-medium">Geners:</p>
          {show.genres.map((gener) => (
            <span>{gener}</span>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="orange"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="none"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>

          <p className="font-medium text-sm">Rating:</p>

          <p className="font-medium text-sm">{show.rating?.average}/10</p>

          <div className="w-0.5 bg-slate-400 h-4"></div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>

          <p className="font-medium text-sm">Network:</p>

          <p className="font-medium text-sm">{show.network?.name}</p>
        </div>

        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <p className="font-medium">
            Average Run Time: {show.averageRuntime} min
          </p>
        </div>

        <div>
          <Link to={`/details/${show.id}`}>
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
