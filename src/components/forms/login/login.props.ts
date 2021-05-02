export type LoginFormValues = {
    email: string;
    password: string;
}

export type LoginFormProps = {
    initialValues: LoginFormValues
    onSubmit: (values: LoginFormValues) => void
    serverError: string
}