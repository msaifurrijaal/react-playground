import FormLogin from "../components/fragments/form_login";
import AuthLayout from "../components/layouts/auth_layouts";

const LoginPage = () => {
    return(
        <AuthLayout title="Login">
            <FormLogin />
        </AuthLayout>
    )
}

export default LoginPage;