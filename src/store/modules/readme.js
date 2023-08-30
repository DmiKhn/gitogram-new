import { makeRequest } from "@/api/requests";

export const getReadme = ({ owner, repo }) => {
  const contentHeader = "application/vnd.github.v3html+json"
  return makeRequest({
    url: `/repos/${owner}/${repo}/readme`,
    headers: {
      accept: contentHeader
    }
  })
}