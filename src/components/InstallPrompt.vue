<template>
  <div>
    <q-dialog
      transition-show="scale"
      transition-hide="scale"
      v-model="showInstallBanner"
    >
      <q-card class="bg-white q-pl-sm q-pr-sm q-pb-sm" style="width: 400px">
        <q-card-section>
          <div class="text-bold" style="font-size: 19px">
            <q-icon name="info" color="primary" class="q-mr-sm" size="sm" />Add
            to Home Screen
          </div>
        </q-card-section>
        <q-item dense>
          <q-item-section>
            <div class="text-bold" style="font-size: 17px">
              {{ NameProduct }}
            </div>
          </q-item-section>
        </q-item>
        <q-card-actions align="right" class="bg-white text-primary">
          <q-btn flat label="Cancel" v-close-popup="2" />
          <q-btn
            flat
            class="text-bold"
            label="Add"
            @click="install"
            v-close-popup="2"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
let installEvent
import { productName } from '../../package.json'
export default {
  name: 'installPrompt',
  data() {
    return {
      showInstallBanner: false,
      NameProduct: productName
    }
  },
  created() {
    // console.log('install prompt jalan')
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault()
      installEvent = e
      this.showInstallBanner = true
    })
  },
  methods: {
    install() {
      this.showInstallBanner = false
      installEvent.prompt()
      installEvent.userChoice.then(() => {
        installEvent = null
      })
    }
  }
}
</script>

<style></style>
