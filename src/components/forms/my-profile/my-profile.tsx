import React from 'react'
import { Formik, Field } from "formik"
import { FormWrapper } from "../../../styles/styles.app"
import { CustomInput } from "../custom-fields"
import * as Yup from "yup"
import { Banner, Button } from "../.."
import { MyProfileFormProps } from './my-profile.props'

const validationSchema = Yup.object().shape({
    email: Yup.string().required(),
    firstName: Yup.string().required(),
    password: Yup.string().required()
})

export const MyProfileForm = ({
    initialValues,
    onSubmit,
    serverError
}: MyProfileFormProps) => {
    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => {
                return (
                    <FormWrapper onSubmit={handleSubmit} fullHeight>
                        <Field
                            name={"email"}
                            labelText={"Email"}
                            component={CustomInput}
                        />
                        <Field
                            name={"firstName"}
                            labelText={"First name"}
                            component={CustomInput}
                        />
                        <Field
                            name={"lastName"}
                            labelText={"Last name"}
                            component={CustomInput}
                        />
                        <Banner
                            type={'error'}
                            message={serverError}
                            show={!!serverError}
                        />
                        <Button
                            type={"submit"}
                            text={"Change information"}
                            marginTopAuto
                        />
                    </FormWrapper>
                )
            }}
        </Formik>

    )
}
