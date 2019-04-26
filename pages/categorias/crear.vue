<template>
  <div class="container mt-4">
    

    <b-form id="categorias" @submit.prevent="guardarCategoria" >
      <h1 class="text-center">Agregar producto nuevo</h1>
      <b-form-group id="items">
        <label for="nombre">Nombre</label>
        <b-form-input v-model="form.nombre" id="nombre" type="text" required placeholder="Ingrese nombre de categoria"></b-form-input>

        <label for="referencia">Referencia</label>
        <b-form-input v-model="form.referencia" id="referencia"  required placeholder="Referencia"></b-form-input>

        <label for="descripcion"></label>
        <b-form-input v-model="form.descripcion" id="descripcion"  required placeholder="Descripcion breve"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" >Guardar</b-button>
      <b-button type="reset" variant="danger">Limpiar</b-button>
    </b-form>
  </div>
</template>

<script>
import {db} from '../../services/firebase'

export default {

  data(){
    return {
      form:{
        nombre: '',
        referencia:'',
        descripcion:''
      }
    }
  },
  methods: {
    guardarCategoria(){
      db.collection("categorias").add(this.form).then(res=>{
        this.$router,push({
          path: "/categorias"
        })
      })
    }
  }
};
</script>