import FormLogin from "../components/fragments/form_login";
import AuthLayout from "../components/layouts/auth_layouts";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
