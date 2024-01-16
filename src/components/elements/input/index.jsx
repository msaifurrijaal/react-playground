import Label from "./label";
import Input from "./input";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
  const { label, type, name, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} ref={ref} />
    </div>
  );
});

export default InputForm;
