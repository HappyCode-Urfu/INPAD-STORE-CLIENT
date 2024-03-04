export interface IEBTopicData {
  'http.error': { message: string; code: number | undefined }
  'access.changed': { token: string | null }
}

export type EBTopic = keyof IEBTopicData
export type EBCallback<T extends EBTopic> = (msg: IEBTopicData[T]) => void
