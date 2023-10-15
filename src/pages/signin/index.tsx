import React from "react";
import { SigninButtons, SigninFooter, Input } from "../../components";

const Signin: React.FC = () => {
    return (
        <div className="flex flex-col justify-between h-screen">
            <div className="flex flex-col m-12">
                <img src="assets/svg/company.svg" className="object-contain h-8 w-auto" alt="Logo" />
                <h2 className="font-normal text-3xl m-3.5">Fazer login</h2>
                <h3 className="font-normal text-lg mb-10 -mt-1">Ir para o Clone do Gmail</h3>
                <Input 
                    key={0}
                    id="identifierId"
                    requiredInput={true}
                    textTitle="E-mail ou telefone"
                    typeInput="email"
                    textBelow="Esqueceu seu e-mail?"
                    linkBelow="#"
                />
                <h4 className="font-normal text-base text-left text-gray-600">
                    Não está no seu computador? Use o modo visitante para fazer login com privacidade.
                    <a href="" className="text-blue-500 font-bold">
                        &nbsp;Saiba mais
                    </a>
                </h4>
                <SigninButtons 
                    textBtnLeft="Criar conta"
                    textBtnRight="Avançar"
                />
            </div>
            <div>
                <SigninFooter
                    selectedLanguage={33}
                    arrayLanguages={["Afrikaans", "azərbaycan", "bosanski", "català", "Čeština", "Cymraeg", "Dansk", "Deutsch", "eesti", "English (United Kingdom)", "English (United States)", "Español (España)", "Español (Latinoamérica)", "euskara", "Filipino", "Français (Canada)", "Français (France)", "Gaeilge", "galego", "Hrvatski", "Indonesia", "isiZulu", "íslenska", "Italiano", "Kiswahili", "latviešu", "lietuvių", "magyar", "Melayu", "Nederlands", "norsk", "o‘zbek", "polski", "Português (Brasil)", "Português (Portugal)", "română", "shqip", "Slovenčina", "slovenščina", "srpski (latinica)", "Suomi", "Svenska", "Tiếng Việt", "Türkçe", "Ελληνικά", "беларуская", "български", "кыргызча", "қазақ тілі", "македонски", "монгол", "Русский", "српски (ћирилица)", "Українська", "ქართული", "հայերեն", "עברית" ,"اردو" ,"العربية", "فارسی", "አማርኛ", "नेपाली", "मराठी", "हिन्दी", "অসমীয়া", "বাংলা", "ਪੰਜਾਬੀ", "ગુજરાતી", "ଓଡ଼ିଆ", "தமிழ்", "తెలుగు", "ಕನ್ನಡ", "മലയാളം", "සිංහල", "ไทย", "ລາວ", "မြန်မာ", "ខ្មែរ", "한국어", "中文（香港）", "日本語", "简体中文", "繁體中文"]}
                    textHelp="Ajuda"
                    textPrivacy="Privacidade"
                    textTerms="Termos"
                />
            </div>
        </div>
    );
};

export default Signin;
