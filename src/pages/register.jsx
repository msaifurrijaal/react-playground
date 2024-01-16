import { Link } from "react-router-dom";
import FormRegister from "../components/fragments/form_register";
import AuthLayout from "../components/layouts/auth_layouts";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="text-sm mt-5 text-center">
        Have an account?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
