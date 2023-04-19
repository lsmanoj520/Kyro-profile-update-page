import { createContext } from "react";

export const initialValues = {
    profileFormValue: {
        firstName: "",
        lastName: "",
        displayName: "",
        email: "",
        phoneNumber: '',
        alternatePhoneNumber: "",
        location: ""
    }
}

export const profileContext = createContext(initialValues);