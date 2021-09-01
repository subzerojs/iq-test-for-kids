<template>

<div>
<h1>Start Game</h1>
<button @click="play">Пройти тест</button>
 </div>
</template>

<script>
	
export default {
  name: "startGame",
  components: {},
  props: ['gameScreen'],
  data (){
    return {

    }  	
  },
  created (){},
  mounted (){},
  computed: {},  
  methods: {
    play (){
      
      this.$root.$data.screen = "flowGame"
    }
  }
};

</script>

<style scoped>

</style>