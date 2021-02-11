<template>
  <section>
      <h2> Welcome {{ value.firstName }} </h2>
      <p>This is just a mvp but thanks for registration! </p>
  </section>
</template>

<script>
export default {
  name: 'WelcomePage',
  props: {
        value: Object
  }
}
</script>

<style>

</style>
