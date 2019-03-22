<template>
  <div>
    <h1>Hola {{ msg }}</h1>
    <input type="text" v-model="msg">
    <button @click="guardar">Guardar</button>
    <table>
        <tr>
            <th>Nombre</th>
        </tr>
        <tr v-for="(item,index) in municipios" :key="index">
            <td>{{item}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Yuber Realpe",
      municipios: ["mocoa", "villagarzon", "puerto asis"]
    };
  },
  methods:{
      guardar(){
          this.municipios.push(this.msg)
      }
  }
};
</script>

<style>
</style>