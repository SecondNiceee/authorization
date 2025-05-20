import AuthConfirmButton from "../../../shared/ui/AuthConfirmButton/AuthConfirmButton";
import AuthInput from "../../../shared/ui/AuthInput/AuthInput";
import {useForm} from "react-hook-form";
import { registrationSchema, type TRegistrationForm } from "../model/RegistrationSchema";
import {zodResolver} from '@hookform/resolvers/zod'
import { Link } from "react-router";
import "./auth-form.css";

const RegistrationForm = () => {
    const {register, handleSubmit, formState : {errors}} = useForm<TRegistrationForm>({
        resolver : zodResolver(registrationSchema)
    })
    const onSumbit = handleSubmit( (data) => {
        console.log(data)
    } )
    return (
        <div className="form-container">
            <h2 className="form-title">Registration</h2>
            <div className="w-[60%] gap-2 flex flex-col">
                <form onSubmit={onSumbit} className="form">
                    <AuthInput error={errors.email?.message} name="email" register={register}  placeholder="Email" />
                    <AuthInput type="password" error={errors.password?.message} name="password" register={register} placeholder="Password" />
                    <AuthInput type="password" error={errors.confirmPassword?.message} name="confirmPassword" register={register} placeholder="Confirm password" />
                    <AuthConfirmButton text="Register!" />
                </form>
                <p className="text text-lg text-black">Уже есть аккаунт? <Link className="text-blue-400" to={"/login"}>Войти</Link></p>
            </div>
        </div>
    );
};

export default RegistrationForm;