import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { authSelector, login } from "../../store"
import { LoginForm, LoginFormValues } from "../forms"
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface LoginProps extends RouteComponentProps { }

const Login = ({ history }: LoginProps) => {
    const { error } = useSelector(authSelector)
    const dispatch = useDispatch()

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
                        login({
                            values,
                        })
                    )
                }}
                serverError={error}
            />
        </div>
    )
}

export default withRouter(Login)