import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { authSelector } from "../../store"
import { loginUser } from "../../store"
import { LoginForm, LoginFormValues } from "../forms"

const Login = () => {
    const { email, password } = useSelector(authSelector)
    const dispatch = useDispatch()
    console.log("redux state", email, password)

    const loginFormInitialValues: LoginFormValues = {
        email: "",
        password: ""
    }
    return (
        <div>
            <LoginForm
                initialValues={loginFormInitialValues}
                onSubmit={(values) => {
                    dispatch(
                        loginUser(values)
                    )
                }}
            />
        </div>
    )
}

export default Login