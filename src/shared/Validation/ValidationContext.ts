import { createContext } from 'react'
import { IValidationFunctionResponse } from 'shared/Validation/validation.types.ts'

const ValidationContext = createContext<{
  errors: Record<string, IValidationFunctionResponse>
}>({
  errors: {},
})

export default ValidationContext
