import React, { useState } from 'react';
import { ProfileForm } from './ProfileForm';
import { ProfilePreview } from './ProfilePreview';
import { ProfileState } from './ProfileState/ProfileState'

export const Profile = () => {
    return (
        <ProfileState>
            <div className='profile-wrapper'>
                <div className='profile-form-wrapper'>
                    <ProfileForm />
                </div>
                <div className='profile-preview-wrapper'>
                    <ProfilePreview />
                </div>
            </div>
        </ProfileState>
    )
}
