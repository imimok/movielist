const baseurl = 'https://api.themoviedb.org/3', api_key = '350dad8860d22b1a9136a026d3f04a31'
const baseurl2 = 'https://www.omdbapi.com' , api_key2 ='faf7e5bb' 

export async function getmovielist (context, payload) {
    let page = payload
    this.$axios.get( baseurl + '/movie/popular?api_key=' + api_key + '&page='+ page).then(response => {
    let data = response.data.results
    // console.log(page, response.data.results)
    if(page === 1){
        context.commit('setmovielist', data)
    }
    else {
        context.commit('pushmovielist', data)
    }
    return data
    })
}



export async function searchmovie (context, payload) {
    let page = payload.page
    let search = payload.search
    // console.log(payload)
    this.$axios.get( baseurl2 + '?apikey=' + api_key2 + '&s=' + search + '&page='+ page).then(response => {
    let data = response.data.Search

    // console.log(page, response.data.Search)
    if(page === 1){
        context.commit('setmovieresult', data)
    }
    else {
        context.commit('pushmovieresult', data)
    }
    return data
    })
}

export async function resetmovie (context, payload) {
 
    context.commit('resetmovieresult', payload)
    
}