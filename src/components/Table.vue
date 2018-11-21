<template>
  <div class="table">
    <div>
      <button type="button" v-on:click="addRow()">เพิ่ม</button>

      <table>
        <th>คำนำหน้า</th>
        <th>ชื่อ</th>
        <th>นามสกุล</th>

        <tr  v-for="(val, index) in table" :key="index">
          <td>
            <select v-model="val.prefix">
              <option v-for="a in prefix">{{a}}</option>
            </select>
          </td>
          <td>
            <input type="text" name="name"  v-model="val.name">
          </td>
          <td>
            <input type="text" name="sername"  v-model="val.sername">
          </td>
          <td>
            <button type="button" v-on:click="delRow(index)">ลบ</button>
          </td>

        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data () {
    return {
      msg: '1111111111111111111',
      table:[{prefix:'นางสาว',name:'aaaa',sername:'ssssssss'}],
      prefix:["นาย","นางสาว"]
    }
  },
   methods: {
     addRow: function () {
      // alert("dddd");
       this.table.push({prefix:'',name:'',sername:''})
     },
     delRow: function (index) {
       //alert(index);
       this.table.splice(index,1);
     }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
