<template>
  <div class="home">
    <img alt="Azure logo" src="../assets/azure_logo.jpg">
    <HelloWorld msg="Welcome" />
    <form @submit.prevent>
      <input type="file" class="btn btn-light" @change="onChange" />
      <button type="submit" class="btn btn-success" @click="uploadImage">Upload</button>
      <p v-if="success === true">{{ message }}</p>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
//import { ref } from "vue";
import UploadFilesService from "../UploadService";
import SignalRConnection from "../SignalR";

const connection = SignalRConnection.connect();
connection.start();

export default {
  name: "upload-image",
  components: {
    HelloWorld
  },
  data() {
    return {
      formFile: "",
      message: "",
      success: ""
    }
  },

  methods: {
    onChange(event) {
      this.formFile = event.target.files[0];
    },
    async uploadImage() {
      const file = new FormData();
      file.append("formFile", this.formFile, this.formFile.name);
      await UploadFilesService.upload(file)
        .then((response) => {
          console.log("test");
          connection.invoke("SendMessage", response.data);
          this.message = "Blob uploaded successfully";
          this.success = true;

        })
        .catch((error) => {
          console.log(error);
        })
    },
  }

}
</script>
