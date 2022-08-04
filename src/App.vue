<template>
  <v-app>
    <v-main>
      <NavBar></NavBar>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'
export default defineComponent({
    name: "App",
    data() {
        return {
        //
        };
    },
    components: { NavBar }
})
</script>
