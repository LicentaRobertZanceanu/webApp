import React, { useState } from "react"
import { FieldError, FieldLabel, FieldWrapper, StyledInput } from "./custom-fields.styles"
import { FieldProps } from "formik"

interface ICustomInput extends FieldProps {
    labelText?: string
}

export const CustomInput = ({
    labelText,
    field,
    form,
    ...props
}: ICustomInput) => {
    const isTouched: boolean = form.touched && !!form.touched[field.name]
    const hasValue: boolean = !!field.value
    const hasError: boolean = isTouched && form.errors && !!form.errors[field.name]

    return (
        <FieldWrapper>
            <FieldLabel
                hasError={hasError}
            >
                {labelText}
            </FieldLabel>
            <StyledInput
                {...field}
                {...props}
                isTouched={isTouched || hasValue}
                hasError={hasError}
            />
            {
                hasError &&
                <FieldError>
                    {form.errors[field.name]}
                </FieldError>
            }
        </FieldWrapper>
    )
}