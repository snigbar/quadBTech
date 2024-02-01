import { useAppContext } from "../../utils/useAppContext";

export default function Home() {
  const { data } = useAppContext();

  console.log(data);
  return <div>Home</div>;
}
