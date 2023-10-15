import React from 'react';
import { TextBelowInputModel } from '../../models/accountsModel';

const TextBelowInputUtil: React.FC<TextBelowInputModel> = ({ typeInput, textBelow, linkBelow }) => {
    switch(typeInput) {
        case "email":
            return (
                <h4 className="flex justify-start mt-3.5 text-blue-500">
                    <a href={linkBelow} className="text-inherit">
                        {textBelow}
                    </a>
                </h4>
            )
    }
};

export default { TextBelowInputUtil };
