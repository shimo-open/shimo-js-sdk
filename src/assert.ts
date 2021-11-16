export function assert<T>(
  input: any,
  condition: (input: any) => boolean,
  message: string
): T {
  if (condition(input)) {
    return input
  }

  throw new Error(message)
}
