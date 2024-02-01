import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="contianer mx-auto flex justify-center items-center p-2 min-h-screen">
      {children}
    </div>
  );
}
