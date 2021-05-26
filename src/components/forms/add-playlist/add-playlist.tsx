import React, { FC } from 'react'
import { Formik, Field } from "formik"
import { FormWrapper } from "../../../styles/styles.app"
import { CustomInput } from "../custom-fields"
import * as Yup from "yup"
import { Banner, Button } from "../.."

interface Props {
    onSubmit: (values: AddPlaylistFormValues) => void
}

export type AddPlaylistFormValues = {
    name: string
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required()
})

const AddPlaylistForm: FC<Props> = ({
    onSubmit
}) => {
    const initialValues: AddPlaylistFormValues = {
        name: ''
    }

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
                            name={"name"}
                            labelText={"Name"}
                            component={CustomInput}
                        />
                        <Button
                            type={"submit"}
                            text={"Save"}
                            style={{
                                marginLeft: 'auto'
                            }}
                        />
                    </FormWrapper>
                )
            }}
        </Formik>
    )
}

export default AddPlaylistForm
