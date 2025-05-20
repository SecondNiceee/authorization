import { useForm } from 'react-hook-form';
import {type TLoginSchema } from '../model/LoginSchema';
import AuthInput from '../../../shared/ui/AuthInput/AuthInput';
import AuthConfirmButton from '../../../shared/ui/AuthConfirmButton/AuthConfirmButton';
import "./auth-form.css";
import { Link } from 'react-router';

const LoginForm = () => {

    const {register, handleSubmit, formState : {errors}} = useForm<TLoginSchema>()

    const onSumbit = handleSubmit((data) => {
        console.log(data);
    })
    return (
        <div className="form-container">
            <h2 className="form-title">Login</h2>
            <div className="w-[60%] gap-2 flex flex-col">
                <form onSubmit={onSumbit} className="form">
                    <AuthInput error={errors.email?.message} name="email" register={register}  placeholder="Email" />
                    <AuthInput type="password" error={errors.password?.message} name="password" register={register} placeholder="Password" />
                    <AuthConfirmButton text="Register!" />
                </form>
                <p className="text text-lg text-black">Нет аккаунта? <Link className="text-blue-400" to={"/registration"}>Зарегестрировать</Link></p>
            </div>
        </div>
    );
};

export default LoginForm;