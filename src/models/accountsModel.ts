export type AccountsModel = {
    
}

export type SigninButtonsModel = {
    textBtnLeft: string,
    textBtnRight: string
}

export type SigninFooterModel = {
    selectedLanguage: number,
    arrayLanguages: string[],
    textHelp: string,
    textPrivacy: string,
    textTerms: string
}

export type TextBelowInputModel = {
    typeInput: string,
    textBelow?: string,
    linkBelow?: string
}

export type InputModel = TextBelowInputModel & {
    id: string,
    textTitle: string,
    requiredInput: boolean
}

export type ConfigButtonModel = {
    textTitle: string
}

export type ConfigSelectModel = {
    id: string,
    name: string,
    values: string[],
    selected: number
}
