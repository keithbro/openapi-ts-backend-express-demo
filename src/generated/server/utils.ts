
/**
 * Get property K in T if it exists, otherwise D.
 */
export type Property<T, K extends keyof any, D = unknown> = (K extends keyof T ? T[K] : D);

/**
 *  Like keyof but values. Get all values of T if it is an object, otherwise D.
 */
export type ValueOf<T, D = never> = T extends Record<string, unknown> ? T[keyof T] : D;

export type EmptyObject = Record<never, never>;
