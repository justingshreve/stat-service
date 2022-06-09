import { getPlayers } from '../src/get-players'

declare var process : {
  env: {
    PLAYER_SERVICE: string
  }
}

const PLAYER_SERVICE = process.env.PLAYER_SERVICE

export const handler = async (event: any) => {
  const teamId = event.teamId
  return getPlayers(`${PLAYER_SERVICE}/players?teamId=${teamId}`)
}
