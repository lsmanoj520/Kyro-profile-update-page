import { profileContext, initialValues } from './ProfileContext'
import { profileReducer } from './ProfileReducer'
import { useReducer, useMemo } from 'react'

export const ProfileState = ({ children }) => {

    const [state, dispatch] = useReducer(profileReducer, initialValues)
    const profileValue = useMemo(
        () => [state, dispatch],
        [state])

    return (
        <profileContext.Provider value={profileValue}>
            {children}
        </profileContext.Provider>
    )
}