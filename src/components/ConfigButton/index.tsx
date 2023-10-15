import React from 'react';
import { ConfigButtonModel } from '../../models/accountsModel';

const ConfigButton: React.FC<ConfigButtonModel> = ({ textTitle }) => {
    return (
        <button className="cursor-pointer border-none bg-white focus:bg-gray-100 text-gray-700 text-sm font-normal py-4 px-6 mb-2.5 rounded">
            {textTitle}
        </button>
    );
};

export default ConfigButton;
