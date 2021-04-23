<template>
  <q-page padding>
    <!-- <q-infinite-scroll @load="onLoad" :offset="250"> -->
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card
        @click="showpopup(MovieItem)"
        class="my-card"
        v-for="(MovieItem, index) in dataMovie.results"
        :key="index"
      >
        <img
          :src="'https://image.tmdb.org/t/p/original' + MovieItem.poster_path"
        />

        <q-card-section class="section">
          <div class="text-h6">{{ MovieItem.title }}</div>
          <q-rating v-model="MovieItem.vote_average" size="20px" readonly />
        </q-card-section>
      </q-card>
    </div>
    <!-- </q-infinite-scroll> -->

    <q-dialog v-model="popup" full-width>
      <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="col-5 flex flex-center">
            <q-img
              :src="
                'https://image.tmdb.org/t/p/original' + popupdata.poster_path
              "
            />
          </q-card-section>
          <q-card-section class="q-pt-xs">
            <div class="text-h3 q-mt-sm q-mb-xs">{{ popupdata.title }}</div>
            <br />
            <q-rating v-model="popupdata.vote_average" size="32px" readonly />
            <br />
            <br />
            <div class="text-h5 ">{{ popupdata.overview }}</div>
          </q-card-section>
        </q-card-section>

        <q-separator />
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'MainMovieList',
  data() {
    return {
      movieresult: [],
      page: 1,
      popup: false,
      popupdata: []
    }
  },
  computed: {
    ...mapState('example', ['dataMovie'])
  },
  mounted() {
    this.getmovielist(this.page)
  },
  methods: {
    ...mapActions('example', ['getmovielist']),
    showpopup(data) {
      this.popup = true
      this.popupdata = data
    }

    // async onLoad(index, done) {
    //   this.movieresult = this.dataMovie.results
    //   console.log('movie', this.dataMovie.results)
    //   console.log(this.movieresult)
    //   setTimeout(() => {
    //     if (this.dataMovie.results) {
    //       // this.dataMovie.results.push()
    //       done()
    //     }
    //   }, 2000)
    // }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
