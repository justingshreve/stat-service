import fetch from 'node-fetch'
import { getPlayers } from '../get-players'

jest.mock('node-fetch')

describe('Test getPLayers', () => {
  it('should throw', async () => {
    fetch.mockImplementation(async () => { 
      throw new Error('ouch')
    })
    await expect(getPlayers('https://fake')).rejects.toThrow()
  })
  it('should succeed', async () => {
    fetch.mockImplementation(async () => { 
      return {
        json: () => { return [{ id: 'abc', teamId: 'xyz', fullname: 'Bob' }] }
      }
    })
    const result = await getPlayers('https://fake')
    expect(result).toHaveProperty('players')
    expect(result.players).toHaveLength(1)
  })
})
