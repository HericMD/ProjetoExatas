<script>
import { RouterView } from "vue-router";
import MenuLateral from "@/components/MenuLateral.vue";
import CompCabecalho from "@/components/CompCabecalho.vue";
import CompRodape from "@/components/CompRodape.vue";
export default {
  components: {
    MenuLateral,
    CompCabecalho,
    CompRodape,
    RouterView,
  },
};
</script>
<template>
  <MenuLateral />
  <CompCabecalho />
  <CompRodape />
  <RouterView />
</template>
<style></style>
