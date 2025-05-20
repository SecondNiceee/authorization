import RegistrationForm from "../../../features/auth/ui/RegistrationForm";

const Registration = () => {
    return (
        <section className="m-auto w-full">
            <div className='flex container w-full m-auto justify-center items-center flex-col gap-10'>
                <h2 className="section-title">Страница регистрации</h2>
                <RegistrationForm />
            </div>
        </section>
    );
};

export default Registration;