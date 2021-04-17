import React from "react"
import { Formik, Field } from "formik"
import { FormWrapper } from "../../../styles/styles.app"
import { CustomInput } from "../custom-fields"
import * as Yup from "yup"
import { Button } from "../.."
import { SignupFormProps } from "./signup.props"

const validationSchema = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required(),
    firstName: Yup.string().required(),
    lastName: Yup.string().required()
})

export const SignupForm = ({
    initialValues,
    onSubmit
}: SignupFormProps) => {
    return (
        <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => {
                return (
                    <FormWrapper onSubmit={handleSubmit}>
                        <Field
                            name={"firstName"}
                            labelText={"First Name"}
                            component={CustomInput}
                        />
                        <Field
                            name={"lastName"}
                            labelText={"Last Name"}
                            component={CustomInput}
                        />
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
                            text={"Create account"}
                        />
                    </FormWrapper>
                )
            }}
        </Formik>
    )
}