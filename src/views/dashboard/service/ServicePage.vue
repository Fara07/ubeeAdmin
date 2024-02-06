<script setup>
import { ref } from "vue";
import VueTailwindDatepicker from "vue-tailwind-datepicker";

const dateValue = ref([]);
const formatter = ref({
  date: "DD MMM YYYY",
  month: "MMM",
});
</script>

<template>
  <div>
    <vue-tailwind-datepicker :formatter="formatter" v-model="dateValue" />
  </div>
</template>
