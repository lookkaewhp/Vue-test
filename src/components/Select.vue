<template>
  <div class="select">
    <select v-model="a" v-on:change="changeA()">
      <option v-for="a in option1" v-bind:value="a.id" >{{a.name}}</option>
    </select>
    <select v-model="b" v-on:change="changeB()">
      <option v-for="b in option2" v-bind:value="b.id">{{b.name}}</option>
    </select>
    <select v-model="c" v-on:change="changeB()">
      <option v-for="c in option3" v-bind:value="c.id">{{c.name}}</option>
    </select>

  </div>
</template>

<script>
export default {
  name: 'Select',
  data () {
    return {
      option1:[{id:1 ,name:"a"},{id:2 ,name:"b"}],
      option2:[{id:null ,name:""}],
      option3:[{id:null ,name:""}],
      a:null,
      b:null,
      c:null
    }
  },
   methods: {
     changeA: function () {
       var val = this.a;
       this.option2 = [{id:1 ,name:"aa "+val},{id:2 ,name:"bb "+val}];
       this.option3 = null;
     },
     changeB: function () {
       var val = this.b;
       this.option3 = [{id:1 ,name:"aaa "+val},{id:2,name:"bbb "+val}];
     },
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
