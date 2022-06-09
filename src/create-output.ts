export interface Feed {
  teamId: String,
  touchdowns?: Number,
  passingYards?: Number,
  receivingYards?: Number,
  rushingYards?: Number,
  players: Player[]
}

export interface Player {
  id: String,
  teamId: String,
  fullname: String,
  touchdowns?: Number,
  passingYards?: Number,
  receivingYards?: Number,
  rushingYards?: Number
}

export const createOutput = async (outputs: any): Promise<Feed> => {
  const feed: Feed = {
    teamId: outputs[0].teamId,
    touchdowns: outputs.reduce((memo, item) => { memo += item.touchdowns; return memo }, 0),
    passingYards: outputs.reduce((memo, item) => { memo += item.passingYards; return memo }, 0),
    receivingYards: outputs.reduce((memo, item) => { memo += item.receivingYards; return memo }, 0),
    rushingYards: outputs.reduce((memo, item) => { memo += item.rushingYards; return memo }, 0),
    players: outputs
  }
  return feed
}
