<template>
  <div>
    <the-sidebar />

    <div>
      <!-- <the-header /> -->

      <div>
        <!-- <router-view /> -->
      </div>

      <the-footer />
    </div>
  </div>
</template>

<script>
import TheSidebar from "@/components/layouts/TheSidebar.vue";
// import TheHeader from "@/components/layouts/TheHeader.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";

export default {
  components: {
    TheSidebar,
    // TheHeader,
    TheFooter,
  },
};
</script>

<style scoped></style>
