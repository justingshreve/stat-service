import fetch from 'node-fetch'

export interface Player {
  id: String,
  teamId: String,
  fullname: String
}

export interface PlayersResponse {
  players: Player[]
}

export const getPlayers = async (uri: string): Promise<PlayersResponse> => {
  try {
    const response = await fetch(`${uri}`)
    const players = await response.json()
    return { players }
  } catch (err) {
    throw err
  }
}
