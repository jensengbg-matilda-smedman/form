<template>
  <div>
    <h1>Welcome to the Matilda´s home assignment for piktiv</h1>
    <p>Here is some text about why you should register for this application Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum repellat pariatur aspernatur excepturi blanditiis, nisi aliquam. Explicabo facere, vitae maxime corrupti ad ducimus dolorum inventore eligendi, exercitationem odit cupiditate!</p>
    <button @click="goTo">Click me for regestration</button>
  </div>
</template>

<script>
export default {
  methods: {
    goTo() {
      this.$router.push('/registration');
    }
  }
}
</script>

<style scoped>
    div {
        margin: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
