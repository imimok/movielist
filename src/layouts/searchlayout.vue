<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-icon name="search" style="font-size: 4rem;" />

        <q-toolbar-title>
          Movie Search
        </q-toolbar-title>

        <q-icon
          name="subdirectory_arrow_left"
          style="font-size: 4rem;"
          @click="backbutton"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data() {
    return {}
  },
  methods: {
    backbutton() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
