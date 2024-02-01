import { useForm } from "react-hook-form";
import { TFormData, TShow } from "../interfaces/interfaces";
import { useAppContext } from "../utils/useAppContext";

type ModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: TShow;
};

export default function Modal({
  showModal,
  setShowModal,
  data: showData,
}: ModalProps) {
  const { show } = showData;
  const { setBookings } = useAppContext();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<TFormData>();

  const onSubmit = handleSubmit((data) => {
    setBookings(data);
    reset();
    setShowModal(false);
  });
  return (
    <>
      {showModal && show && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full md:w-4/5 my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-semibold">{show.name}</h3>
                    <p className="text-sm text-slate-800">
                      Every{" "}
                      {show.schedule?.days.map((val) => (
                        <span>{val + ", "}</span>
                      ))}
                      at {show.schedule?.time}
                    </p>
                  </div>

                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>

                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form className="w-full" onSubmit={onSubmit}>
                    <div className="mb-5">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your name"
                        required
                        {...register("name", {
                          required: "This field is required",
                        })}
                      />
                      {errors.name && (
                        <span className="text-red-500 font-semibold ">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="example@gmail.com"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        {...register("email", {
                          required: "This field is required",
                        })}
                      />
                      {errors.email && (
                        <span className="text-red-500 font-semibold ">
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="text"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Movie Name
                      </label>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        defaultValue={show.name}
                        readOnly
                        {...register("ShowName", {
                          required: "This field is required",
                        })}
                      />
                    </div>

                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Book
                    </button>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
