import React, { FC } from 'react'
import { FieldProps } from "formik"
import { FieldError, FieldLabel, FieldWrapper, RadioFieldCircle, RadioFieldCircleSelected, RadioFieldWrapper, RadiosFieldText } from './custom-fields.styles'

interface RadioFieldOption {
    _id: string
    name: string
}

interface Props extends FieldProps {
    labelText?: string
    options: RadioFieldOption[]
}

export const RadioField: FC<Props> = ({
    options,
    labelText,
    field,
    form,
    ...props
}) => {
    console.log('form', form)
    const isTouched = form.touched && !!form.touched[field.name]
    const hasValue = !!field.value
    const hasError = !isTouched && form.errors && !!form.errors[field.name]

    return (
        <FieldWrapper height100>
            <FieldLabel
                hasError={hasError}
            >
                {labelText}
            </FieldLabel>
            <div
                style={{
                    height: '40%',
                    overflow: 'auto'
                }}
            >

                {
                    options.map((option) => {
                        const isSelected = field.value === option._id
                        return (
                            <RadioFieldWrapper
                                onClick={() => {
                                    form.setFieldValue(field.name, option._id)
                                    form.setFieldTouched(field.name, true)
                                }}
                            >
                                <RadioFieldCircle>
                                    {isSelected && <RadioFieldCircleSelected />}
                                </RadioFieldCircle>
                                <RadiosFieldText selected={isSelected}>
                                    {option.name}
                                </RadiosFieldText>
                            </RadioFieldWrapper>
                        )
                    })
                }
            </div>
            {
                hasError &&
                <FieldError>
                    {form.errors[field.name]}
                </FieldError>
            }
        </FieldWrapper>
    )
}