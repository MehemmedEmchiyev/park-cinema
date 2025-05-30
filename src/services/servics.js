let BASE_URL = 'https://parkcinema-data-eta.vercel.app'
export const getAllLanguages = async  () => {
    let set = new Set()
    const response = await fetch(`${BASE_URL}/landing`)
    const data = await response.json()
    data.map(item => item.languages.map(lang => set.add(lang)))
    return set
}
export const getAllTheatre = async () => {
    let set = new Set()
    const response = await fetch(`${BASE_URL}/detail`)
    const data = await response.json()
    data?.map(item => set.add(item.theatreTitle))
    return Array.from(set)
}
export const getAllMovie = async () => {
    const response = await fetch(`${BASE_URL}/landing`)
    const data = await response.json()
    return data
}
export const getDetail = async () => {
    const response = await fetch(`${BASE_URL}/detail`)
    const data = await response.json()
    return data
}