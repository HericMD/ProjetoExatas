<script>
import CompBloco from "./CompBloco.vue";
import CompSearch from "./CompSearch.vue";
export default {
  components: { CompBloco, CompSearch },
};
</script>
<template>
  <main id="content">
    <h1>a</h1>
    <br />
    <CompSearch />
    <CompBloco title="Destaque" />
    <CompBloco />
    <CompBloco />
    <CompBloco />
    <CompBloco />
    <CompBloco />
  </main>
</template>
<style></style>
