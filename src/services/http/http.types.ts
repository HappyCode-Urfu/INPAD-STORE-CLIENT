export interface IHTTPSuccessResponse<T = undefined> {
  status: 'success'
  body: T
}

export interface IHTTPErrorResponse {
  status: 'error'
  message: string
  code: number | undefined
  body?: Record<string, string>
}

export interface IPaginationResponse<T = any> {
  results: T
}

export type HTTPResponse<T = undefined> = IHTTPErrorResponse | IHTTPSuccessResponse<T>
