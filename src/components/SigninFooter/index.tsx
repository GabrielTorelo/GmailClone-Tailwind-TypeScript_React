import React from 'react';
import { ConfigButton, ConfigSelect } from '..';
import { SigninFooterModel } from '../../models/accountsModel';

const SigninFooter: React.FC<SigninFooterModel> = ({ selectedLanguage, arrayLanguages, textHelp, textPrivacy, textTerms }) => {
    return (
        <>
            <ConfigSelect
                id="language"
                name="language"
                values={arrayLanguages}
                selected={selectedLanguage}
            />
            {/* <ConfigButton textTitle={textHelp} />
            <ConfigButton textTitle={textPrivacy} />
            <ConfigButton textTitle={textTerms} /> */}
        </>
    );
};

export default SigninFooter;
