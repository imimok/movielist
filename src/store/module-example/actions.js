const baseurl = 'https://api.themoviedb.org/3', api_key = '350dad8860d22b1a9136a026d3f04a31'

export async function getmovielist (context, payload) {
    let page = payload
    this.$axios.get( baseurl + '/movie/popular?api_key=' + api_key + '&page='+ page).then(response => {
    let data = response.data
    console.log(response.data)
    context.commit('setmovielist', data)
    return data
    })
}
