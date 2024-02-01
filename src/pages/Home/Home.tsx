import ShowCards from "../../components/ShowCards";
import { useAppContext } from "../../utils/useAppContext";

export default function Home() {
  const { data: shows } = useAppContext();
  return (
    <div className="flex flex-col gap-4 w-full justify-between items-center">
      {shows &&
        shows.map((show) => (
          <ShowCards tvShow={show} key={show.show.id}></ShowCards>
        ))}
    </div>
  );
}
