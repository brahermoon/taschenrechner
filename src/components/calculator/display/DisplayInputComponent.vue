<template>
  <div>
    <input
      type="text"
      class="display_input"
      name="userinput"
      v-model="userinput"
      v-on:keyup.enter="onSubmitUserInput"
    />
  </div>
</template>

<script>
export default {
  name: "DisplayInputComponent",
  data() {
    return {
      userinput: ""
    };
  },
  methods: {
    onSubmitUserInput() {
      this.$store.commit("SUBMIT_USER_INPUT", this.userinput);
      this.$store.dispatch("computeOutput")
    }
  }
};
</script>

<style scoped>
.display_input {
  background-color: burlywood;
}
</style>