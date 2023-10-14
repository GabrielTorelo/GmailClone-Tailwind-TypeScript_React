import React from 'react';
import { SigninButtonsModel } from '../../models/accountsModel';

const SigninButtons: React.FC<SigninButtonsModel> = ({ textBtnLeft, textBtnRight }) => {
    return (
        <div className="flex space-x-3">
            <button className={`cursor-pointer border-none bg-white hover:bg-blue-50 text-blue-500 font-bold py-3 px-6 rounded`}>
                {textBtnLeft}
            </button>
            <button className={`cursor-pointer border-none bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded`}>
                {textBtnRight}
            </button>
        </div>
    );
};

export default SigninButtons;
