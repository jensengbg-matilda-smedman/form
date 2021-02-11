<template>
  <div>
    <h2> registration </h2>
    <RegistrationForm @newPerson="emitThis" />
  </div>
</template>

<script>

import RegistrationForm from '@/components/RegistrationForm.vue'
export default {
    data: () => ({
        value: {
            firstName: '',
            surname: '',
            month: '',
            year: ''
        }
    }),
    
  components: {
    RegistrationForm
  },
  methods: {
      emitThis(info) {
        this.value = info;
        this.$emit('newPerson', this.value );
      }
  }
}
</script>

<style>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
