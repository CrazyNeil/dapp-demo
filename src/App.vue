<template>
  <div class="page">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {}
    },
    components: {},
    mounted () {

    }
  }
</script>

<style lang="less">
  .page {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 100%;
    word-break: break-all;
  }
</style>
