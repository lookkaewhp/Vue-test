<template>
  <div class="auto">


    <autocomplete-vue
    :list="[{name: 'item1'}, {name: 'item2'}, {name: 'item3'}]"
    placeholder="Autocomplete"
></autocomplete-vue>



  </el-row>



  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"></script>
<script>
export default {
  name: 'AutoComplete',
  data() {
    return {
      links: [],
      state: '',
      label: 'label'
    };
  },
  methods: {
    querySearch(query, cb) {
      var links = this.links;
      var results = query ? links.filter(this.createFilter(query)) : links;
      var top3 = results.slice(0, 3);
      console.log(JSON.stringify(top3));
      cb(top3); // number of things returned
    },
    createFilter(query) {
      return (link) => {
        return link.value.toLowerCase().includes(query.toLowerCase());
      };
    },
    loadAll() {
      return [
        { "value": "vue", "link": "https://github.com/vuejs/vue" },
        { "value": "vuex", "link": "https://github.com/vuejs/vue" },
        { "value": "vue-router", "link": "https://github.com/vuejs/vue" },
        { "value": "vue-resource", "link": "https://github.com/vuejs/vue" },
        { "value": "element", "link": "https://github.com/ElemeFE/element" },
        ];
    },
    handleSelect(item) {
      this.label = item.value;
      console.log(item);
    }
  },
  mounted() {
    this.links = this.loadAll();
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

$material-shadow: 0 1px 3px 0 rgba(0,0,0,.15);

[v-cloak] { display: none; }

body {
margin: 0;
padding: 0;
background-color: #F3F5F7;
font-family: 'Open Sans', sans-serif;
}

.el-input__inner {
width: 450px;
}

.flex-center {
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}


</style>
