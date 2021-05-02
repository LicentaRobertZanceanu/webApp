import React from "react"
import { Formik, Field } from "formik"
import { LoginFormProps } from "./login.props"
import { FormWrapper } from "../../../styles/styles.app"
import { CustomInput } from "../custom-fields"
import * as Yup from "yup"
import { Banner, Button } from "../.."

const validationSchema = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required()
})

export const LoginForm = ({
    initialValues,
    onSubmit,
    serverError
}: LoginFormProps) => {
    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => {
                return (
                    <FormWrapper onSubmit={handleSubmit}>
                        <Field
                            name={"email"}
                            labelText={"Email"}
                            component={CustomInput}
                        />
                        <Field
                            name={"password"}
                            labelText={"Password"}
                            component={CustomInput}
                            type={"password"}
                        />
                        <Button
                            type={"submit"}
                            text={"Authenticate"}
                            fullWidth
                        />
                        <Banner
                            type={'error'}
                            message={serverError}
                            show={!!serverError}
                        />
                    </FormWrapper>
                )
            }}
        </Formik>

    )
}