import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface IAuthInput<T extends FieldValues> {
  placeholder: string;
  name : Path<T>,
  register : UseFormRegister<T>,
  error : string | undefined,
  type? : "text" | "password"

}
function AuthInput<T extends FieldValues>({ placeholder, name,  register, error, type = "text" } : IAuthInput<T>){
  return (
    <div className="flex flex-col gap-[2px]">
        <input
          {...register(name)}
          placeholder={placeholder}
          className="px-4 py-2 border-solid border-2 rounded-lg border-black"
          type={type}
        />
        {error ? <p className="text-red-500 ml-3 text-lg font-sans">{error}</p> : <></>}
    </div>
  );
};

export default AuthInput;
