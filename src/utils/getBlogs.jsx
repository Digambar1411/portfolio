export async function getBlogs(query,variable={}) {
  const response = await fetch("https://api.hashnode.com", {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ query, variable }),
  })
  return response.json();
}
