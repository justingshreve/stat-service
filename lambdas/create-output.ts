import { createOutput } from '../src/create-output'

export const handler = async (event: any) => {
  return createOutput(event)
}
