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

export default Button;