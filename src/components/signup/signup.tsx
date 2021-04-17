import React from "react"
import { SignupForm, SignupFormValues } from "../forms"
import { useSelector, useDispatch } from "react-redux"
import { authSelector } from "../../store"
import { signUpUser } from "../../store"

export const SignUp = () => {
    const {email,password} = useSelector(authSelector)
    const dispatch = useDispatch()
    console.log("redux state signup", email, password)
    const initalValues: SignupFormValues = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    }
    return (
        <SignupForm
            initialValues={initalValues}
            onSubmit={(values) => {
                dispatch(signUpUser(values))
            }}
        />
    )
}