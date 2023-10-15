import React from 'react';
import { InputModel } from '../../models/accountsModel';
import { InputUtils } from "../../utils";

const Input: React.FC<InputModel> = ({ id, typeInput, textTitle, requiredInput, textBelow, linkBelow }) => {
    return (
        <div className="relative mt-2 mr-5">
            <input
                id={id}
                className="
                    peer 
                    rounded-md 
                    w-full 
                    pl-4 
                    py-5 
                    text-lg 
                    font-medium 
                    text-gray-700 
                    border-solid 
                    border-1 
                    border-gray-200 
                    focus:bg-white 
                    outline-blue-600 
                    bg-white 
                    placeholder-transparent"
                type={typeInput} placeholder={textTitle} required={requiredInput} />
            <label
                htmlFor={id}
                className="
                    absolute
                    cursor-text 
                    select-none 
                    text-sm 
                    peer-placeholder-shown:font-medium 
                    peer-placeholder-shown:text-lg 
                    peer-placeholder-shown:text-gray-600 
                    peer-placeholder-shown:top-6 
                    peer-placeholder-shown:left-4 
                    peer-placeholder-shown:bg-white 
                    peer-focus:text-sm
                    peer-focus:-top-2.5 
                    peer-focus:left-2 
                    peer-focus:text-blue-600 
                    peer-focus:bg-white 
                    peer-focus:font-normal
                    left-2 
                    -top-2.5 
                    px-1  
                    transition-all 
                    bg-white 
                    rounded 
                    text-gray-500"
            >{textTitle}</label>
            <InputUtils.TextBelowInputUtil
                typeInput={typeInput}
                textBelow={textBelow}
                linkBelow={linkBelow}
            />
        </div>
    );
};

export default Input;
