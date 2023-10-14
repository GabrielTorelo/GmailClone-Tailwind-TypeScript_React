import React from "react";
import { SigninButtons } from "../../components";

const Signin: React.FC = () => {
    return (
        <div className="signin">
            <img src="assets/svg/company.svg" className="object-contain h-8 w-auto" alt="Logo" />
            <h2 className="font-normal text-3xl m-0">Fazer login</h2>
            <h3 className="font-normal text-lg">Ir para o Clone do Gmail</h3>
            <SigninButtons 
                textBtnLeft="Criar conta"
                textBtnRight="Avançar"
             />
        </div>
    );
};

export default Signin;
