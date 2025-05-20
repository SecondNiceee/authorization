import type { FC } from "react";

interface IAuthConfirmButton{
    text : string,
}
const AuthConfirmButton:FC<IAuthConfirmButton> = ({text}) => {
    return (
        <input type="submit" className="flex cursor-pointer py-2 px-3 justify-center items-center rounded-xl bg-blue-400 text-2xl text-white font-sans" value={text} />
    );
};

export default AuthConfirmButton;