import { addStats } from '../add-stats'

describe('Test addStats', () => {
  it('should succeed', async () => {
    const result = await addStats({
      id: 'abc',
      teamId: 'def',
      fullname: 'bob'
    })
    expect(result).toHaveProperty('fullname')
    expect(result).toHaveProperty('touchdowns')
    expect(result).toHaveProperty('rushingYards')
  })
})
