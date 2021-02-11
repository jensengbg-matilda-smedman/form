<template>
  <div id="app">
    <header>
      <div id="nav">
        <router-link to="/">home</router-link> 
      </div>
    </header>
    <router-view @newPerson="newPerson" :value="value" />
  </div>
</template>

<script>
export default {
  data: () => ({
        value: {
            firstName: '',
            surname: '',
            month: '',
            year: ''
        }
    }),
    methods: {
      newPerson(info) {
        return this.value = info
      }
    }
}
</script>

<style>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #bbb;
}
</style>