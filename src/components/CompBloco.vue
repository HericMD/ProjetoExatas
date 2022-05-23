<script>
export default {
  props: {
    title: {
      default: "Título",
    },
    contents: {
      default:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repudiandae cum mollitia et itaque dolorum, repellat quod eaque iusto sequi, commodi neque quasi veniam, illo fugit odio ex fuga ipsum.",
    },
  },
};
</script>
<template>
  <article class="block">
    <h2>
      {{ title }}
    </h2>
    <hr />
    {{ contents }}
  </article>
</template>
