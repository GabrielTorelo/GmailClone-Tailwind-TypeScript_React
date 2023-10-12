import React from "react";

const Signin: React.FC = () => {
    return (
        <div className="signin">
            <img src="" alt="Logo" />
            <h2 className="font-normal text-3xl">Inicie sessão</h2>
            <h3 className="font-normal text-lg">Continuar para o Clone do Gmail</h3>
            <div className="flex space-x-3">
                <button className="cursor-pointer border-none bg-white hover:bg-blue-50 text-blue-500 font-bold py-3 px-6 rounded">
                    Criar conta
                </button>
                <button className="cursor-pointer border-none bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded">
                    Seguinte
                </button>
            </div>
        </div>
    );
};

export default Signin;
