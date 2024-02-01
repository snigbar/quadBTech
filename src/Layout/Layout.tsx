import { TChildren } from "../interfaces/interfaces";

export default function Layout({ children }: TChildren) {
  return (
    <div className="contianer mx-auto flex justify-center items-center p-2 min-h-screen my-6">
      {children}
    </div>
  );
}
