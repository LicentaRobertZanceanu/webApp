import React from "react"
import { SignupForm, SignupFormValues } from "../forms"
import { useSelector, useDispatch } from "react-redux"
import { authSelector, signUp } from "../../store"

interface SignupProps {
    changeToLogin: () => void
}

export const SignUp = ({ changeToLogin }: SignupProps) => {
    const { error } = useSelector(authSelector)
    const dispatch = useDispatch()
    const initalValues: SignupFormValues = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    }
    return (
        <SignupForm
            initialValues={initalValues}
            serverError={error}
            onSubmit={(values) => {
                dispatch(signUp({
                    values,
                    callback: changeToLogin
                }))
            }}
        />
    )
}