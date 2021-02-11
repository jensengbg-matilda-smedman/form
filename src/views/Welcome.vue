<template>
  <div>
    <WelcomePage :value="value" />
  </div>
</template>

<script>
import WelcomePage from '../components/WelcomePage'
export default {
    props: {
        value: Object
    },
    components: {
      WelcomePage
  }

}
</script>

<style>

</style>
