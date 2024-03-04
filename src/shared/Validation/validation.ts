import { IValidationFunctionResponse } from './validation.types'

const emailValidate = (email: string): IValidationFunctionResponse | null => {
  if (!email) {
    return { key: 'email', message: 'Введите email' }
  } else {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.test(email)) {
      return { key: 'email', message: 'Email введен неправильно' }
    }
  }
  return null
}

const validateValue = (value: string): IValidationFunctionResponse | null => {
  if (!value) {
    return { key: 'Value', message: 'Введите значение' }
  }
  return null
}

const validateDescription = (description: string): IValidationFunctionResponse | null => {
  if (!description) {
    return { key: 'description', message: 'Введите Наименование' }
  }
  return null
}

const validateName = (name: string): IValidationFunctionResponse | null => {
  if (!name) {
    return { key: 'name', message: 'Введите имя' }
  }
  return null
}

const validateSurname = (surname: string): IValidationFunctionResponse | null => {
  if (!surname) {
    return { key: 'surname', message: 'Введите фамилию' }
  }
  return null
}

const validatePatronymic = (patronymic: string): IValidationFunctionResponse | null => {
  if (!patronymic) {
    return { key: 'patronymic', message: 'Введите отчество' }
  }
  return null
}

const passwordValidate = (password: string): IValidationFunctionResponse | null => {
  if (!password) {
    return { key: 'password', message: 'Введите пароль' }
  }
  return null
}

const phoneValidate = (phone: string): IValidationFunctionResponse | null => {
  if (!phone) {
    return { key: 'phone', message: 'Введите номер телефона' }
  }
  return null
}

const validateFile = (file: File): IValidationFunctionResponse | null => {
  if (!file) {
    return { key: 'file', message: 'Добавьте файл' }
  }
  return null
}

const validatePrice = (price: string): IValidationFunctionResponse | null => {
  if (!price) {
    return { key: 'price', message: 'Введите цену' }
  }
  if (isNaN(Number(price))) {
    return { key: 'price', message: 'Цена должна быть числом' }
  }
  return null
}

const validateArticle = (article: string): IValidationFunctionResponse | null => {
  if (!article) {
    return { key: 'article', message: 'Введите артикул' }
  }
  return null
}

const validateStatus = (status: string): IValidationFunctionResponse | null => {
  if (!status) {
    return { key: 'status', message: 'Введите статус' }
  }
  return null
}

const validateCategories = (categories: string[]): IValidationFunctionResponse | null => {
  if (!categories[0]) {
    return { key: 'categoriesId', message: 'Выберите один или несколько категорий' }
  }
  return null
}

const validateCount = (count: string): IValidationFunctionResponse | null => {
  if (!count) {
    return { key: 'count', message: 'Введите Количество' }
  }
  if (isNaN(Number(count))) {
    return { key: 'count', message: 'Цена должна быть числом' }
  }
  return null
}

const validation = {
  emailValidate,
  passwordValidate,
  validateName,
  validatePatronymic,
  validateSurname,
  phoneValidate,
  validateValue,
  validateDescription,
  validateFile,
  validatePrice,
  validateArticle,
  validateCount,
  validateStatus,
  validateCategories,
}

export default validation
