import { useParams } from "react-router-dom";
import { useAppContext } from "../../utils/useAppContext";
import noImg from "../../assets/noImg.jpg";
import Modal from "../../components/Modal";

export default function ShowDetails() {
  const { id } = useParams();
  const { data } = useAppContext();
  const showData = data?.find((val) => val.show?.id.toString() === id);
  const imgUrl = showData?.show.image?.original || noImg;

  const { showModal, setShowModal } = useAppContext();

  function removeHtmlTags(htmlString: string) {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  }

  if (showData && showData.show) {
    return (
      <>
        {setShowModal && (
          <Modal
            showModal={showModal}
            setShowModal={() => setShowModal(false)}
            data={showData}
          ></Modal>
        )}
        <div className="flex flex-col md:flex-row gap-4 items-center py-2 p-3 shadow-md rounded-md bg-white w-full mx-auto">
          {/* image section */}
          <img src={imgUrl} className="object-cover w-96 h-full" />
          <div className="h-full space-y-4 p-2">
            {/* heading */}
            <h1 className="text-2xl my-2 font-medium text-slate-900">
              {showData.show.name}
            </h1>

            {/* language and type */}
            <div className="flex space-x-3">
              <p className="font-medium">Language: {showData.show.language}</p>
              <p className="font-medium">Type: {showData.show.type}</p>
            </div>
            {/* gener */}

            <div className="flex gap-2">
              <p className="font-medium">Geners:</p>
              {showData.show.genres.map((gener) => (
                <span key={gener + "4342rwe"}>{gener}</span>
              ))}
            </div>

            {/* raing and network */}
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

              <p className="font-medium text-sm">
                {showData.show.rating?.average}/10
              </p>

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

              <p className="font-medium text-sm">
                {showData.show.network?.name}
              </p>
            </div>

            {/* premeired and ended */}
            <div className="flex gap-2 items-center">
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
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>

              <p className="font-medium text-sm">Premiered:</p>

              <p className="font-medium text-sm">{showData.show?.premiered}</p>

              <div className="w-0.5 bg-slate-400 h-4"></div>

              <p className="font-medium text-sm">Ended:</p>

              <p className="font-medium text-sm">
                {showData.show?.ended || "running"}
              </p>
            </div>
            {/* runtime */}
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
                Average Run Time: {showData?.show.averageRuntime} min
              </p>
            </div>

            {/* summary */}
            <p className="text-lg text-justify">
              {removeHtmlTags(showData.show?.summary)}
            </p>

            <div className="space-x-3">
              <a href={showData.show?.officialSite}>
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">
                  Visit Website
                </button>
              </a>

              {setShowModal && (
                <button
                  className="px-4 py-2 bg-lime-600 hover:bg-lime-500 text-white"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  Book This Show
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
