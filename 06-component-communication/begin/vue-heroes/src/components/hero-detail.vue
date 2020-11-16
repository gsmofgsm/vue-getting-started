<template>
  <div>Hello {{ hero.firstName }}!</div>
</template>

<script>
export default {
  name: 'Hero detail',
  props: {
    hero: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>

</style>