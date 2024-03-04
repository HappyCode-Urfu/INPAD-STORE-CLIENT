import { IValidationFunctionResponse } from 'shared/Validation/validation.types.ts'
import { createContext } from 'react'

const ValidationContext = createContext<{
  errors: Record<string, IValidationFunctionResponse>
}>({
  errors: {},
})

export default ValidationContext
