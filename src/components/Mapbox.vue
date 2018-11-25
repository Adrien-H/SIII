<template>
  <div id="mapbox" style="width: 100%; height: 300px; border: 3px solid lightblue;"></div>
</template>

<script>
  import mapboxgl from 'mapbox-gl'

  export default {
    methods: {
      async initMap () {
        new mapboxgl.Map({
          container: 'mapbox',
          style: 'mapbox://styles/mapbox/light-v9',
          zoom: 10,
          center: await this.getMapCenter(),
          attributionControl: false
        })
      },
      getMapCenter () {
        return new Promise(resolve => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(location => {
              resolve([location.coords.longitude, location.coords.latitude])
            })
          } else {
            resolve([[-1.67, 48.11]])
          }
        })
      }
    },
    async mounted () {
      this.initMap()
    },
  }
</script>

<style src="../../node_modules/mapbox-gl/dist/mapbox-gl.css"></style>
