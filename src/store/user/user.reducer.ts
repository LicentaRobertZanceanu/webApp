import { createAsyncThunk } from "@reduxjs/toolkit"
import { MyProfileFormValues } from "../../components/forms/my-profile/my-profile.props"
import { apiFetch } from "../../utils"

export const usersReducer = {

}

export const getLoggedInUserData = createAsyncThunk(
    'users/loggedInUser-Request',
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiFetch({
                api: 'users',
                method: 'get',
                endpoint: '/logged-in'
            })
            return response
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const updateUserInformation = createAsyncThunk(
    'users/updateUserInformation-Request',
    async ({ values }: { values: MyProfileFormValues }, { rejectWithValue }) => {
        try {
            const response = await apiFetch({
                api: 'users',
                method: 'put',
                endpoint: '',
                body: values
            })
            return response
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)