import FormRegister from "../components/fragments/form_register";
import AuthLayout from "../components/layouts/auth_layouts";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
