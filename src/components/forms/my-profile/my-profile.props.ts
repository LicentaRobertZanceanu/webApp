export type MyProfileFormValues = {
    firstName: string;
    lastName: string;
    email: string;
}

export type MyProfileFormProps = {
    initialValues: MyProfileFormValues
    onSubmit: (values: MyProfileFormValues) => void
    serverError?: string
}