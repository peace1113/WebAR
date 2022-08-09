<template></template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MapComponent',
    data(){
        return {
        }
    },
    methods: {
        
    },
    mounted(){
        window.navigator.geolocation.getCurrentPosition(function(position){
            console.log(position.coords.latitude, position.coords.longitude);
        let map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);
        });
    }
})
</script>


