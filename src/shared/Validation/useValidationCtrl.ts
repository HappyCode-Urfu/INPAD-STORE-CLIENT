import { useState } from 'react'
import { IValidationFunctionResponse } from 'shared/Validation/validation.types.ts'
import objectUtils from 'utils/object.utils.ts'

const useValidationCtrl = <T extends Record<string, any>>(
  onSubmit: () => void,
  validationObject: T,
  validationFunctions?: Partial<
    Record<keyof T, (val: any) => IValidationFunctionResponse | null>
  >
) => {
  const [errors, setErrors] = useState<
    Partial<Record<keyof T, IValidationFunctionResponse>>
  >({})

  const handleSubmit = () => {
    const validationErrors: Partial<Record<keyof T, IValidationFunctionResponse>> = {}
    for (const key in validationFunctions) {
      if (typeof validationFunctions[key] !== 'function') continue

      const validationByKeyResult = validationFunctions[key]?.(validationObject[key])

      if (validationByKeyResult) {
        validationErrors[key] = validationByKeyResult
      }
    }

    setErrors(validationErrors)

    if (objectUtils.isObjectEmpty(validationErrors)) {
      onSubmit()
    }
  }

  return {
    errors,
    handleSubmit,
  }
}

export default useValidationCtrl
