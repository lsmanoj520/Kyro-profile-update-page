import React, { useContext } from 'react'
import { profileContext } from './ProfileState/ProfileContext'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import profilePic from '../../Assets/Images/anime-boy-avatar-vector.jpg'

export const ProfilePreview = () => {

    const [profileContextState, profileContextDispatch] = useContext(profileContext)
    const formInitialValue = profileContextState.profileFormValue
    console.log(formInitialValue, "formInitialValue")
    return (
        <div>
            <Grid container justifyContent="center">
                <Grid item>
                    <Avatar
                        alt="emy Sharp"
                        src={profilePic}
                        sx={{ width: 156, height: 156 }}
                    />
                    <Typography variant="h6" gutterBottom align="center">
                        {`${formInitialValue.firstName} ${formInitialValue.lastName}`}
                    </Typography>
                    <Typography variant="body1" gutterBottom align="center">
                        {formInitialValue.email}
                    </Typography>
                    <Typography variant="body1" gutterBottom align="center">
                        {formInitialValue.phoneNumber}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}
