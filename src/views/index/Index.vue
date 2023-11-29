<template>
  <div class="page">
    HOME
    <br/>
    <br/>
    <br/>
    <span>UID: {{ $store.state.user.user.id }}</span>
    <br/>
    <br/>
    <br/>
    <span>Username: {{ $store.state.user.user.name }}</span>
    <br/>
    <br/>
    <br/>
    <span>From: {{ $store.state.user.user.from }}</span>
    <br/>
    <br/>
    <br/>
    <span>New token: {{ $store.state.user.token }}</span>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    props: {},
    data () {
      return {}
    },
    components: {},
    mounted () {},
    watch: {},
    methods: {}
  }
</script>

<style lang="less"></style>
