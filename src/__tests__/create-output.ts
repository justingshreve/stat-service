import { createOutput } from '../create-output'

describe('Test createOutput', () => {
  it('should succeed', async () => {
    const result = await createOutput([{
      id: 'abc',
      teamId: 'def',
      fullname: 'bob',
      touchdowns: 10
    }, {
      id: 'def',
      teamId: 'def',
      fullname: 'joe',
      touchdowns: 11
    }])
    expect(result).toHaveProperty('teamId', 'def')
    expect(result).toHaveProperty('touchdowns', 21)
    expect(result).toHaveProperty('players')
    expect(result.players).toHaveLength(2)
  })
})
