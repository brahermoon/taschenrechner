<template>
  <div class="display">
    <DisplayInputComponent />
    <DisplayOutputComponent />
  </div>
</template>

<script>
import DisplayInputComponent from "@/components/calculator/display/DisplayInputComponent.vue";
import DisplayOutputComponent from "@/components/calculator/display/DisplayOutputComponent.vue";

export default {
  name: "DisplayComponent",
  components: {
    DisplayInputComponent,
    DisplayOutputComponent
  }
};
</script>

<style scoped>
.display {
  text-align: center;
}
</style>