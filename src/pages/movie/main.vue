<template>
  <q-page padding>
    {{ dataMovie.results }}
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'MainMovieList',
  computed: {
    ...mapState('example', ['dataMovie'])
  },
  mounted() {
    this.getmovielist()
  },
  methods: {
    ...mapActions('example', ['getmovielist'])
  }
}
</script>
