import { useAppContext } from "../../utils/useAppContext";

function MyBookings() {
  const {
    myBookings: { mybookings },
  } = useAppContext();

  return (
    <div className="flex flex-col gap-4 items-center py-2 p-3 shadow-md rounded-md bg-white w-full md:4/5 lg:w-3/5 mx-auto hover:scale-[1.03] transition-transform">
      <div className="flex justify-between items-center px-4 py-2 bg-indigo-600 text-white font-semibold w-full">
        <p>Name</p>
        <p>Email</p>
        <p>Show Name</p>
      </div>
      {mybookings.length > 0 &&
        mybookings.map((val) => (
          <div className="flex justify-between items-center px-4 py-2 font-semibold w-full">
            <p>{val.name}</p>
            <p>{val.email}</p>
            <p>{val.ShowName}</p>
          </div>
        ))}
    </div>
  );
}

export default MyBookings;
