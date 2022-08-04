
<template>
    <v-app-bar>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>WebAR</v-app-bar-title>
        <v-icon>mdi-dots-vertical</v-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" bottom temporary>
        <v-list :nav="true">
            <v-list-item>
                <router-link to="/map">地圖</router-link>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    
    export default defineComponent({
        name: 'NavBar',
        data: () => ({
            drawer: false,
            group: null,
            navigationList: [
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Fizz',
          value: 'fizz',
        },
        {
          title: 'Buzz',
          value: 'buzz',
        },
            ]
        }),

        watch: {
            group () {
                this.drawer = false
            }
        }
    })
</script>