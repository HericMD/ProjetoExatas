<script>
export default {
  props: {
    title: {
      default: "Matéria",
    },
  },
};
</script>
<template>
  <div class="search">
    <h1>{{ title }}</h1>
    <nav>
      <button class="add-R">
        <a href="">Adições Recentes</a></button
      ><button class="Qst-R">
        <a href="">Perguntas Recentes</a></button
      ><button class="Pop">
        <a href="">Populares</a>
      </button>
    </nav>

    <form>
      <div class="div-search-bar">
        <input class="search-bar" type="text" placeholder="Pesquisar" />
        <button type="submit" class="search-submit">
          <img src="@/assets/img/search-button.jpg" />
        </button>
      </div>
    </form>
  </div>
</template>
<style></style>
