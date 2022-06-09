import { addStats } from '../src/add-stats'

export const handler = async (event: any) => {
  return addStats(event)
}
