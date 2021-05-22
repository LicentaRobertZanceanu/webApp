import React from 'react'
import { MyProfileForm } from '../components/forms/my-profile/my-profile'
import { BigWrapper, PageContentWrapper, PageTitle, PageTopWrapper, PageWrapper } from '../styles/styles.app'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserInformation, usersSelector } from '../store'
import { MyProfileFormValues } from '../components/forms/my-profile/my-profile.props'

export const ProfilePage = () => {
    const { loggedInUser } = useSelector(usersSelector)
    const dispatch = useDispatch()
    const submitForm = (values: MyProfileFormValues) => {
        console.log('CLICKED')
        dispatch(updateUserInformation({ values }))
    }
    return (
        <PageWrapper>
            <PageContentWrapper>
                <PageTopWrapper>
                    <PageTitle>My profile</PageTitle>
                </PageTopWrapper>
                <BigWrapper>
                    <MyProfileForm
                        initialValues={{
                            firstName: loggedInUser.firstName,
                            lastName: loggedInUser.lastName,
                            email: loggedInUser.email
                        }}
                        onSubmit={submitForm}
                    />
                </BigWrapper>
            </PageContentWrapper>
        </PageWrapper>
    )
}