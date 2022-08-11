import axios from "axios"

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUBAPITOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {Authorization: `token ${GITHUB_TOKEN}`}
})

// Get search results
export const searchUsers = async (text) => {

  const params = new URLSearchParams({
    q: text
  })

  const res = await github.get(`/search/users?${params}`)
  return res.data.items
}

  // Get single User
export const getUser = async (login) => {

    const res = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    })

    if(Response.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await res.json()

      return data
    }
  }