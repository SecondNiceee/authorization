import LoginForm from "../../../features/auth/ui/LoginForm";

const Login = () => {
    return (
        <section className="m-auto w-full">
            <div className='flex container w-full m-auto justify-center items-center flex-col gap-10'>
                <h2 className="section-title">Страница входа в аккаунт.</h2>
                <LoginForm />
            </div>
        </section>
    );
};

export default Login;