<template>
  <div>
    <h1 class="text-xs-center ma-1">QR Halbana</h1>
    <dropzone class="ma-5" id="myVueDropzone" url="https://content.dropboxapi.com/2/files/upload"
              @vdropzone-success="showSuccess"
              @vdropzone-sending="addAdditionalPropsToHttpPost"
              @vdropzone-file-added="fileAdded">
    </dropzone>
    <div v-if="qrCode.length>0" class="text-xs-center ma-4">
      <h6>SHA-256 of file</h6>
      <qriously class="text-xs-center ma-4" :value="qrCode" :size="200"/>
    </div>
    <v-text-field
      label="qrCode"
      v-model="qrCode"
      class="ma-5"
    ></v-text-field>
    <h6 class="text-xs-center ma-4">{{sha256OfQrCode}}</h6>
  </div>
</template>

<script>
  import Dropzone from 'vue2-dropzone'
  import TextField from 'vuetify/src/components/forms/TextField'
  import * as cryptoJS from 'crypto-js'
  export default {
    name: 'hello',
    data () {
      return {
        qrCode: ''
      }
    },
    components: {
      TextField,
      Dropzone
    },
    computed: {
      sha256OfQrCode: function () {
        return cryptoJS.SHA256(this.qrCode).toString(cryptoJS.enc.utf8)
      }
    },
    methods: {
      showSuccess (file, re) {
      },
      addAdditionalPropsToHttpPost (file, xhr, formData) {
        xhr.setRequestHeader('authorization', 'Bearer N-wrAAACFiAAAAAAAAAAB-6S6D93DAmylD25zQN5YWwcRgNzqE-6bH-Z6V3yb-RM')
        xhr.setRequestHeader('Content-Type', 'text/plain; charset=dropbox-cors-hack')
        xhr.setRequestHeader('reject_cors_preflight', 'true')
        xhr.setRequestHeader('Dropbox-API-Arg', '{"path":"' + '/' + file.name + '"' + ', ' + '"mode":{".tag":"overwrite"}' + '}')
        this.qrCode = file.name
      },
      fileAdded (file) {
        let fr = new FileReader()
        fr.readAsArrayBuffer(file)
        fr.onload = function () {
          console.log(fr.result)
          console.log(new Int32Array(fr.result))
          let arr = new Int32Array(fr.result)
          console.log(arr.map(String))
          console.log(cryptoJS.SHA256(fr.result).toString(cryptoJS.enc.utf8))
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
