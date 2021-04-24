export const setmovielist = (state, payload) => {
  state.dataMovie = payload
}

export const pushmovielist = (state, payload) => {
  // console.log('tes assign', Object.assign(state.dataMovie, payload))
  for(let i=0; i<payload.length;i++){
state.dataMovie.push(payload[i])
  }
  
}

export const setmovieresult = (state, payload) => {
  // console.log('ini payload', payload)
  state.dataResult = payload
  // console.log(state.dataResult)
}

export const pushmovieresult = (state, payload) => {
  for(let i=0; i<payload.length;i++){
      state.dataResult.push(payload[i])
  }
  
}

export const resetmovieresult = (state, payload) => {
  state.dataResult = []
}