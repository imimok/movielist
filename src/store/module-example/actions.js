const baseurl = 'https://api.themoviedb.org', api_key = '350dad8860d22b1a9136a026d3f04a31'

export async function getmovielist (context) {
    this.$axios.get( baseurl + '/3/trending/movie/day?api_key=' + api_key).then(response => {
    let data = response.data
    console.log(response.data)
    context.commit('setmovielist', data)
    return data
    })
}
