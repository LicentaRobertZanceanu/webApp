export type SignupFormValues = {
    email: string
    password: string
    firstName: string
    lastName: string
}

export type SignupFormProps = {
    initialValues: SignupFormValues
    onSubmit: (values: SignupFormValues) => void
}