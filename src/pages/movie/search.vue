<template>
  <q-page padding>
    <q-input outlined v-model="title" label="Title" />
  </q-page>
</template>

<script>
export default {
  name: 'SearchMovie',
  data() {
    return {
      title: ''
    }
  }
}
</script>
