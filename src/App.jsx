import React from "react";

// class ButtonBlack extends React.Component {
//   render() {
//     return (
//       <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">
//         Buy Now
//       </button>
//     );
//   }
// }

// function ButtonBlue() {
//   return (
//     <button className="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white">
//       Buy Now
//     </button>
//   );
// }

// const ButtonGreen = () => {
//   return (
//     <button className="h-10 px-6 font-semibold rounded-md bg-green-600 text-white">
//       Buy Now
//     </button>
//   );
// };

const Button = (props) => {
  const { text = "...", variant = "bg-slate-700" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
    >
      {text}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="flex gap-x-2">
        <Button variant="bg-red-700" text="Logout" />
        <Button variant="bg-green-700" text="Login" />
        <Button />
      </div>
    </div>
  );
}

export default App;
