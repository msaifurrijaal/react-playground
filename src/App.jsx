import React from "react";
import Button from "./components/elements/button";

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center bg-slate-200">
      <div className="flex gap-x-2">
        <Button variant="bg-red-700" text="Logout" />
        <Button variant="bg-green-700" text="Login" />
        <Button />
      </div>
    </div>
  );
}

export default App;
