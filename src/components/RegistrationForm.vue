<template>
  <section>
    <label for="fistName">Enter fist name:</label>
    <input v-model="value.firstName" id="firstName" type="text" name="fistName"/>
    <label for="lastName">Enter surname:</label>
    <input v-model="value.surname" type="text" name="surname"/>

    <label for="month">Birth month</label>
    <select v-model="value.month" id="month" name="month">
      <option value="default"></option>
      <option value="01">Jan</option>
      <option value="02">Feb</option>
      <option value="03">Mar</option>
      <option value="04">Apr</option>
      <option value="05">May</option>
      <option value="06">Jun</option>
      <option value="07">Jul</option>
      <option value="08">Aug</option>
      <option value="09">Sep</option>
      <option value="10">Oct</option>
      <option value="11">Nov</option>
      <option value="12">Dec</option>
    </select>

    <label>Birth year</label>
    <select v-model="value.year">
      <option value="0"></option>
      <option v-for="year in years" :key="year" :value="year"> {{ year }}</option>
    </select>

    <button :disabled='isDisabled' @click="goTo">Join us now!</button>

  </section>
</template>

<script>
export default {
    props: {
        firstName: String
    },
    data: () => ({
        disabled: true,
        value: {
            firstName: '',
            surname: '',
            month: '',
            year: ''
        }
    }),
    methods: {
    goTo() {
      this.$router.push('/welcome');
      this.$emit('newPerson', this.value );
      }
    },
    computed: {
      years() {
        const year = new Date().getFullYear();
        let yearArray = Array.from(
          { length: year - 1900 },
          (value, index) => 1901 + index
        )
        return yearArray;
      },
      isDisabled(){
        if (this.value.firstName < 1) {
            return this.disabled;
        } if (this.value.surname < 1) {
            return this.disabled;
        } if (this.value.month < 1) {
            return this.disabled
        } if (this.value.year < 1) {
            return this.disabled
        }
        else {
            return !this.disabled;
        }
      }
    },
    mounted() {
        this.years
    }
}
</script>

<style>
section {
    margin: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>