<template>
  <q-page padding>
    <q-form
      autocomplete="on"
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        @input="searchinput()"
        outlined
        v-model="title"
        label="Title "
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
      />

      <!-- <div>
        <q-btn label="Search" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div> -->
    </q-form>

    <q-infinite-scroll @load="onLoad" :offset="500" v-if="searched">
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card
          @click="showpopup(MovieItem)"
          class="my-card"
          v-for="(MovieItem, index) in dataResult"
          :key="index"
        >
          <img :src="MovieItem.Poster" />

          <q-card-section class="section">
            <div class="text-h6">
              {{ MovieItem.Title }} ( {{ MovieItem.Year }} )
            </div>
          </q-card-section>
        </q-card>
      </div>

      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
    </q-infinite-scroll>

    <q-dialog v-model="popup" full-width>
      <q-card class="my-card" flat bordered>
        <q-card-section class="col-5 flex flex-center">
          <q-img :src="popupdata.Poster" />
        </q-card-section>

        <q-separator />
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'PageSearchMovie',
  data() {
    return {
      page: 1,
      title: null,
      searched: false,
      popup: false,
      popupdata: []
    }
  },
  computed: {
    ...mapState('example', ['dataResult'])
  },
  methods: {
    ...mapActions('example', ['searchmovie', 'resetmovie']),
    showpopup(data) {
      this.popup = true
      this.popupdata = data
    },
    onSubmit() {
      this.searched = true
      let payload = {
        page: this.page,
        search: this.title
      }
      this.searchmovie(payload)
      // console.log(this.dataResult)
    },

    onReset() {
      this.title = null
    },

    searchinput() {
      this.resetmovie()
      this.searched = true
      this.page = 1
      let payload = {
        page: this.page,
        search: this.title
      }
      this.searchmovie(payload)
    },

    onLoad(index, done) {
      setTimeout(() => {
        if (this.dataResult) {
          let payload = {
            page: (this.page += 1),
            search: this.title
          }

          this.searchmovie(payload)
          done()
        }
      }, 2000)
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 200px
</style>
