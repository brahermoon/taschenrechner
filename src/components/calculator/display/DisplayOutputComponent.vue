<template>
  <div>
    <div class="display_output" type="text" v-text="userOutput"></div>
  </div>
</template>

<script>
export default {
  name: "DisplayOutputComponent",
  computed: {
    userOutput() {
      return this.$store.state.useroutput;
    }
  }
};
</script>

<style scoped>
.display_output {
  display: inline-block;
  height: 15px;
  inline-size: 9.2em;
  background-color: burlywood;
  border: 2px solid black;
}
</style>