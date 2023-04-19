import React, { useContext } from 'react'
import Typography from '@mui/material/Typography';
import { profileContext } from './ProfileState/ProfileContext'
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { FIRSTNAME, LASTNAME, DISPLAYNAME, EMAIL, PHONENUMBER, ALTERNATEPHONENUMBER, LOCATION } from './ProfileState/ProfileAction'
import * as Yup from 'yup';

export const ProfileForm = () => {

    const [profileContextState, profileContextDispatch] = useContext(profileContext)
    const formInitialValue = profileContextState.profileFormValue

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required('Please Enter first Name'),
        lastName: Yup.string()
            .required('Please Enter last Name'),
        displayName: Yup.string()
            .required('Please Enter display Name'),
        email: Yup.string()
            .required('Please Enter email'),
        phoneNumber: Yup.string()
            .required('Please Enter phone Number'),
        alternatePhoneNumber: Yup.string()
            .required('Please Enter phone Number'),
        location: Yup.string()
            .required('Please Enter location'),
    })

    const formik = useFormik({
        initialValues: formInitialValue,
        validationSchema: validationSchema,
        onSubmit: (values) => {

        },
    });

    return (
        <div className='profile-form'>
            <Typography variant="h6" gutterBottom>
                My Profile
            </Typography>
            <Card >
                <CardContent>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={5}>
                            <Grid item xs={6}>
                                <TextField
                                    id="firstName"
                                    label="First Name"
                                    fullWidth
                                    name="firstName"
                                    value={formik.values.firstName}
                                    // onChange={formik.handleChange}
                                    onChange={(event) => {
                                        formik.setFieldValue("firstName", event.target.value)
                                        profileContextDispatch({ type: FIRSTNAME, payload: event.target.value })
                                    }}
                                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                    helperText={formik.touched.firstName && formik.errors.firstName}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="lastName"
                                    label="Last Name"
                                    fullWidth
                                    name='lastName'
                                    value={formik.values.lastName}
                                    onChange={(event) => {
                                        formik.setFieldValue("lastName", event.target.value)
                                        profileContextDispatch({ type: LASTNAME, payload: event.target.value })
                                    }}
                                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                    helperText={formik.touched.lastName && formik.errors.lastName}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="displayName"
                                    label="Display Name"
                                    fullWidth
                                    name='displayName'
                                    value={formik.values.displayName}
                                    onChange={(event) => {
                                        formik.setFieldValue("displayName", event.target.value)
                                        profileContextDispatch({ type: DISPLAYNAME, payload: event.target.value })
                                    }}
                                    error={formik.touched.displayName && Boolean(formik.errors.displayName)}
                                    helperText={formik.touched.displayName && formik.errors.displayName}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="email"
                                    label="Email"
                                    fullWidth
                                    type="email"
                                    name='email'
                                    value={formik.values.email}
                                    onChange={(event) => {
                                        formik.setFieldValue("email", event.target.value)
                                        profileContextDispatch({ type: EMAIL, payload: event.target.value })
                                    }}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="phoneNumber"
                                    label="Phone No(Work)"
                                    fullWidth
                                    name='phoneNumber'
                                    value={formik.values.phoneNumber}
                                    onChange={(event) => {
                                        formik.setFieldValue("phoneNumber", event.target.value)
                                        profileContextDispatch({ type: PHONENUMBER, payload: event.target.value })
                                    }}
                                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="alternatePhoneNumber"
                                    label="Phone No(Work)"
                                    fullWidth
                                    name='alternatePhoneNumber'
                                    value={formik.values.alternatePhoneNumber}
                                    onChange={(event) => {
                                        formik.setFieldValue("alternatePhoneNumber", event.target.value)
                                        profileContextDispatch({ type: ALTERNATEPHONENUMBER, payload: event.target.value })
                                    }}
                                    error={formik.touched.alternatePhoneNumber && Boolean(formik.errors.alternatePhoneNumber)}
                                    helperText={formik.touched.alternatePhoneNumber && formik.errors.alternatePhoneNumber}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="location"
                                    label="Location"
                                    fullWidth
                                    name='location'
                                    value={formik.values.location}
                                    onChange={(event) => {
                                        formik.setFieldValue("location", event.target.value)
                                        profileContextDispatch({ type: LOCATION, payload: event.target.value })
                                    }}
                                    error={formik.touched.location && Boolean(formik.errors.location)}
                                    helperText={formik.touched.location && formik.errors.location}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Stack direction="row" justifyContent="center"
                                    alignItems="center">
                                    <Button variant="contained" type='submit'>Save Changes</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>

            </Card>
        </div >
    )
}
