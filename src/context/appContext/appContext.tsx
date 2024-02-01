import { createContext, useEffect, useState } from "react";
import { fetchShows } from "../../api/api-client";
import {
  TBookings,
  TChildren,
  TContextData,
  TFormData,
  TShow,
} from "../../interfaces/interfaces";

// create context
export const AppContext = createContext<TContextData>({
  data: null,
  myBookings: { mybookings: [] },
  error: null,
  showModal: false,
  setBookings: (data) => {
    return data;
  },
});

export default function AppContextProvider({ children }: TChildren) {
  const [shows, setShows] = useState<null | TShow[]>(null);
  const [error, setError] = useState<string | null>(null);
  const [bookings, setBookings] = useState<TBookings>({ mybookings: [] });
  const [showModal, setShowModal] = useState(false);

  //   for updating bookings
  const updateBookingData = (newBookings: TFormData) => {
    let updatedBookings: TFormData[] = [];
    if (bookings.mybookings.length > 0) {
      updatedBookings = [newBookings, ...bookings.mybookings];
    } else {
      updatedBookings = [newBookings];
    }

    setBookings({ mybookings: updatedBookings });
    localStorage.setItem(
      "bookings",
      JSON.stringify({ mybookings: updatedBookings })
    );
  };

  //   side effects handling
  useEffect(() => {
    // fetch and set api data
    const fetchData = async () => {
      try {
        const result = await fetchShows();
        setShows(result);
      } catch (error) {
        setError("Error fetching data");
      }
    };

    fetchData();

    //get and set data from local Storage
    const getBookingsFromLocalStorage = () => {
      const storedBookings = localStorage.getItem("bookings");
      if (storedBookings) {
        setBookings({ mybookings: JSON.parse(storedBookings) });
      }
    };

    getBookingsFromLocalStorage();

    // event handler
    const handleStorageChange = () => {
      getBookingsFromLocalStorage();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        data: shows,
        myBookings: bookings,
        error: error,
        setBookings: updateBookingData,
        showModal: showModal,
        setShowModal: setShowModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
