const BASE_URL = 'http://localhost:8080/api/recipe'

export async function GetAllRecipes() {
  const res = await fetch(`${BASE_URL}s`)
  if (!res.ok) throw new Error('Failed to fetch recipes')
  const data = await res.json()
  return data.data
}

export async function GetRecipeById(id) {
  const res = await fetch(`${BASE_URL}/${id}`)
  if (!res.ok) throw new Error('Failed to fetch recipes')
  const data = await res.json()
  return data.data
}
