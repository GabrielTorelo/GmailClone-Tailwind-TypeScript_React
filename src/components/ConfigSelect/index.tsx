// import React from 'react';
// import { ConfigSelectModel } from '../../models/accountsModel';

// const ConfigSelect: React.FC<ConfigSelectModel> = ({ id, name, values, selected }) => {
//     return (
//         <select
//             id={id}
//             className="
// cursor-pointer 
// border-none 
// appearance-none 
// outline-none 
// bg-white 
// focus:bg-gray-100 
// text-gray-700 
// text-sm 
// font-normal 
// py-4 
// px-6 
// mb-2.5 
// rounded"
//             name={name}>
//             {
//                 values.map((value, index) => {
//                     return (
//                         <option 
//                             key={index}
//                             className="
//                                 "
//                             value={value}
//                             selected={index === selected ? true : false}>
//                                 {value}
//                         </option>
//                     )
//                 })
//             }
//         </select>
//     );
// };

// export default ConfigSelect;

import React, { useState, useRef, useEffect } from 'react';
import { ConfigSelectModel } from '../../models/accountsModel';

const ConfigSelect: React.FC<ConfigSelectModel> = ({ id, name, values, selected }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(values[selected]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (value: string) => {
        setSelectedValue(value);
        setIsOpen(false);
        console.log('Selected value:', value);
    };

    const dropdownRef = useRef<HTMLUListElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            event.target &&
            !dropdownRef.current.contains(event.target as Node) &&
            !(event.target as Element).closest('.dropdown-button')
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative select-none">
            <div
                onClick={toggleDropdown}
                className="
                cursor-pointer 
                border-none 
                appearance-none 
                outline-none 
                bg-white 
                focus:bg-gray-100 
                text-gray-700 
                text-sm 
                font-normal 
                py-4 
                px-6 
                mb-2.5 
                rounded"
            >
                {selectedValue}
            </div>
            {isOpen && (
                <ul
                    ref={dropdownRef}
                    style={{
                        width: '37%',
                        maxHeight: '760px',
                        bottom: '100%',
                        left: '25px',
                        listStyleType: 'none',
                        overflowY: 'auto'
                    }}
                    className="absolute text-sm bg-white rounded mt-2 p-2"
                >
                    {values.map((value, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(value)}
                            className="cursor-pointer text-left hover:bg-gray-100 py-4 px-4"
                        >
                            {value}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ConfigSelect;
