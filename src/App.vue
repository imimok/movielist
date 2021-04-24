<template>
  <div id="q-app">
    <router-view />
    <install-prompt />
  </div>
</template>
<script>
import InstallPrompt from './components/InstallPrompt'
export default {
  name: 'App',
  components: {
    InstallPrompt
  }
}
</script>
