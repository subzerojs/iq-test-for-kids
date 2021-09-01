<template>

	<div class="screen" :is="$root.$data.screen"> </div>
</template>

<script>

import startGame from './views/startGame.vue';
import endGame from './views/endGame.vue';
import flowGame from './views/flowGame.vue';
	
export default {
  name: "App",
  components: {startGame, endGame, flowGame},
  data (){
    return {
    	
    }
  },
  created (){
  
  },
  mounted (){


  },
  computed: {},  
  methods: {}
};

</script>

<style scoped>
	h1{
		color: skyblue;
	}
	.screen{
		width: 600px;
		height: 600px;
	}
</style>