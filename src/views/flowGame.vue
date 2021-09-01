<template>

<div>
<h1>Flow Game</h1>
  <div class="draw-level">
    <div class="task__parrent-wrapper">
      <div class="task__parrent" :style="parent"></div>
      <div class="task__selected-child" :style="selectedChild"></div>
    </div>
    <div class="task__child-wrapper">
      <div class="task__child" v-for="(child, index) in this.children" :data-index="index" :style="child" @click="selectBlock"></div>
    </div>
  </div>

 </div>
</template>

<script>
import vuedraggable from 'vuedraggable';

import level_0 from '../store/level_0.js';

var levels = {
      level_0
}

export default {
  name: "flowGame",
  components: { vuedraggable },
  data (){
    return {
      levelName: 'level_0',
      task: null,
      taskNumber: 0,
      children: null,
      selectedChild: `background-image: url(./static/levels/q.png)`
    }  	
  },
  created (){
     this.drawLevel(levels[this.levelName])
  },
  mounted (){

   
  },
  computed: {
    parent (){
      return this.getPathToImage(this.task.parent);
    }
  },  
  methods: {

    drawLevel (level){
      this.task = level[this.taskNumber];
      this.children = this.task.children.map(child=>{
                          return this.getPathToImage(child)  
                      })
    },
    getPathToImage (ctx){
      return `background-image: url(./static/levels/${this.levelName}/task_${this.taskNumber}/${ctx})`
    },
    selectBlock (e){
      let bgImg = e.target.style.backgroundImage;
      if(+e.target.dataset.index===this.task.trueChild){
            this.selectedChild = `background-image:${ bgImg }`
      }
      else{
        alert('Не угадал')
      }
    }
  }
};

</script>

<style scoped>
.task__parrent-wrapper{
  position: relative;
  width: 300px;
  height: 300px;
}
.task__parrent{
  width: 300px;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  border: 2px solid black;
}

.task__selected-child{
  position: absolute;
  right: 15px;
  bottom: 15px;
  width: 110px;
  height: 110px;
  background: white;
  border-radius: 8px;
  border: 2px solid black;
  width: 110px;
  height: 110px;
  background-repeat: no-repeat;
  background-size: cover;  
}

.task__child-wrapper{
  display: flex;
  flex-wrap: wrap;
  width: 410px;
  padding: 20px;
}
.task__child{
  width: 110px;
  height: 110px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid black;
}
.task__child:hover{
  border-color: #778;
}
.task__child:nth-child(3n){
  margin-right: 0;
}
.task__child:nth-child(4),
.task__child:nth-child(5),
.task__child:nth-child(6){
  margin-bottom: 0;
}
</style>