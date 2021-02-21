<template>
  <div>
    <img :src="cover" />
    <h2 v-text="title"></h2>
    <p v-text="synopsis"></p>
    <hr />
  </div>
</template>
<script>
export default {
  name: "MovieComp",
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    synopsis: {
      type: String,
      required: true
    },
    cover: {
      type: String,
      required: true
    }
  }
};
</script>
