<template>
<div>
  <h1> {{ hello }}</h1>
</div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      hello: 'This is about page'

    }
  },
  methods: {
    myMethod () {}
  }
}
</script>

<style scoped>

</style>
