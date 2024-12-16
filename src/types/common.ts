export type PropsWithTestId<T> = T & { testId?: string };
export type LabelValue<T, Y, H> = H & { label: T; value: Y };
