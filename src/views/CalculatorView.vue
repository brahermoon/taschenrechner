<template>
  <div>
    <h1>Calculator</h1>
    <CalculatorComponent />
  </div>
</template>

<script>
import CalculatorComponent from "@/components/calculator/CalculatorComponent.vue";
export default {
  name: "CalculatorView",
  components: {
    CalculatorComponent
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>