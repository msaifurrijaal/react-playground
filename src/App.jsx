import React from "react";

class ButtonBlack extends React.Component {
  render() {
    return (
      <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">
        Buy Now
      </button>
    );
  }
}

function ButtonBlue() {
  return (
    <button className="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white">
      Buy Now
    </button>
  );
}

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div>
        <ButtonBlack></ButtonBlack>
        <ButtonBlue></ButtonBlue>
      </div>
    </div>
  );
}

export default App;
