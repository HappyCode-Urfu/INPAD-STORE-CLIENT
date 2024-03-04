import { EBCallback, EBTopic, IEBTopicData } from './eventBus.types'

type Cached = {
  [key in EBTopic]: IEBTopicData[key]
}

class EventBus {
  private cached: Cached = {} as any
  private subscribers: Map<EBTopic, EBCallback<EBTopic>[]> = new Map<
    EBTopic,
    EBCallback<EBTopic>[]
  >()

  public pub<T extends EBTopic>(
    topic: T,
    value: IEBTopicData[T],
    cacheLastValue = false
  ) {
    if (cacheLastValue) this.cached[topic] = value
    if (!this.subscribers.has(topic)) return

    const subs = this.subscribers.get(topic)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    for (const callback of subs) callback(value)
  }

  public sub<T extends EBTopic>(
    topic: T,
    callback: EBCallback<T>,
    emitLastValue = false
  ) {
    if (this.subscribers.has(topic)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      this.subscribers.get(topic).push(callback)
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      this.subscribers.set(topic, [callback])
    }

    if (emitLastValue) callback(this.cached[topic])

    return () => {
      const subs = this.subscribers.get(topic)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const index = subs.findIndex((cb) => cb === callback)
      if (index === -1) return
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      subs.splice(index, 1)
    }
  }

  public getCachedValue<T extends EBTopic>(topic: T): IEBTopicData[T] | undefined {
    return this.cached[topic]
  }
}

const eventBus = new EventBus()
export default eventBus
