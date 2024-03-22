export interface Person {
    cell: string
    name: {
      first: string
      last: string
    }
    email: string
    phone: string,
    picture: {
      large: string
      medium: string
      thumbnail: string
    }
  }
  
  export interface Team {
    results: Person[]
  }
  
  export const getOurTeam = async (): Promise<Team> => {
    const res = await fetch('https://randomuser.me/api/?results=6')
    const data = await res.json()
  
    return data
  }