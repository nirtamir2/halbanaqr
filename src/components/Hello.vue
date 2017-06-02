<template>
  <div>
    <h1> hello world</h1>
    <dropzone id="myVueDropzone" url="https://httpbin.org/post" @vdropzone-success="showSuccess">
      <!-- Optional parameters if any! -->
      <input type="hidden" name="token" value="xxx">
    </dropzone>
  </div>
</template>

<script>
  import Dropzone from 'vue2-dropzone'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js PWA'
      }
    },
    components: {
      Dropzone
    },
    methods: {
      'showSuccess': function (file) {
        console.log('A file was successfully uploaded')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
