<script>
import CompBloco from "@/components/CompBloco.vue";
import CompSearch from "@/components/CompSearch.vue";
export default {
  components: { CompBloco, CompSearch },
};
</script>
<template>
  <main id="content">
    <CompSearch title="Principal" />
    <CompBloco title="Destaque" />
    <CompBloco />
    <CompBloco />
    <CompBloco />
    <CompBloco />
    <CompBloco />
  </main>
</template>
<style></style>
