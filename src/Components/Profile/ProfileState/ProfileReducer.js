import { FIRSTNAME, LASTNAME, DISPLAYNAME, EMAIL, PHONENUMBER, ALTERNATEPHONENUMBER, LOCATION } from './ProfileAction'

export const profileReducer = (state, { type, payload }) => {
    switch (type) {
        case FIRSTNAME:
            return {
                profileFormValue: {
                    ...state.profileFormValue,
                    firstName: payload,
                }
            }


        case LASTNAME:

            return {
                profileFormValue: {
                    ...state.profileFormValue,
                    lastName: payload,
                }
            }

        case DISPLAYNAME:

            return {
                profileFormValue: {
                    ...state.profileFormValue,
                    displayName: payload,
                }
            }

        case EMAIL:

            return {
                profileFormValue: {
                    ...state.profileFormValue,
                    email: payload,
                }
            }

        case PHONENUMBER:

            return {
                profileFormValue: {
                    ...state.profileFormValue,
                    phoneNumber: payload,
                }
            }

        case ALTERNATEPHONENUMBER:

            return {
                profileFormValue: {
                    ...state.profileFormValue,
                    alternatePhoneNumber: payload,
                }
            }

        case LOCATION:

            return {
                profileFormValue: {
                    ...state.profileFormValue,
                    location: payload,
                }
            }

        default:
            break;
    }
}