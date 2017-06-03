<template>
  <div>
    <h1 class="text-xs-center ma-1">QR Halbana</h1>
    <dropzone class = "ma-5" id="myVueDropzone" url="http://localhost:8080/upload" @vdropzone-success="showSuccess">
      <!-- Optional parameters if any! -->
      <input type="hidden" name="token" value="xxx">
    </dropzone>
    <qriously class="text-xs-center ma-4" :value="qrCode" :size="200"/>
    <v-text-field
      label="qr code text"
      v-model="qrCode"
      class="ma-5"
    ></v-text-field>
  </div>
</template>

<script>
  import Dropzone from 'vue2-dropzone'
  export default {
    name: 'hello',
    data () {
      return {
        qrCode: ''
      }
    },
    components: {
      Dropzone
    },
    methods: {
      showSuccess (file, re) {
        console.log('A file was successfully uploaded')
        let uplodedFile = file
        console.log(uplodedFile)
        console.log(re)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
