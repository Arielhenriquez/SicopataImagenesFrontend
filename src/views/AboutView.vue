<template>
  <div>
    <h1 v-if="imageUrl === ''">Image is loading...</h1>
    <img :src="imageUrl" />
  </div>
</template>

<script>
import SignalRConnection from "../SignalR";
import { ref } from "vue";

const connection = SignalRConnection.connect();
connection.start();

export default {
  name: "view-image",
  setup() {
    const imageUrl = ref("");
    connection.on("ReceiveMessage", (uri) => {
      imageUrl.value = uri;
    });

    return {
      imageUrl,
    };
  },
};
</script>
