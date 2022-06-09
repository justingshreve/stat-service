
function getRandomInt (min: number, max: number) : number {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min
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

export const addStats = async (player: Player): Promise<Player> => {
  player.touchdowns = getRandomInt(0, 3)
  player.passingYards = getRandomInt(50, 500)
  player.receivingYards = getRandomInt(5, 200)
  player.rushingYards = getRandomInt(10, 350)
  return player
}
