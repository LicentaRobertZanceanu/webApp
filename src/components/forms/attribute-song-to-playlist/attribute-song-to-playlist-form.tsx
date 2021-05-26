import React, { FC } from 'react'
import { Formik, Field } from "formik"
import { FormWrapper } from "../../../styles/styles.app"
import { CustomInput, RadioField } from "../custom-fields"
import * as Yup from "yup"
import { Banner, Button } from "../.."
import { Playlist } from '../../../types'

export type AttributeSongToPlaylistFormValues = {
    playlistId: string
}

interface Props {
    onSubmit: (values: AttributeSongToPlaylistFormValues) => void
    playlists: Playlist[]
}

const validationSchema = Yup.object().shape({
    playlistId: Yup.string().required()
})


const AttributeSongToPlaylistForm: FC<Props> = ({ onSubmit, playlists }) => {
    const initialValues: AttributeSongToPlaylistFormValues = {
        playlistId: ''
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
                    <FormWrapper onSubmit={handleSubmit} oveflowStyles>
                        <Field
                            labelText={'Choose playlist:'}
                            component={RadioField}
                            options={playlists}
                            name={'playlistId'}
                        />
                        <Button
                            type={"submit"}
                            text={"Add"}
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

export default AttributeSongToPlaylistForm
