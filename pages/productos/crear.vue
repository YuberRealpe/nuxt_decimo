<template>
  <div class="container mt-4">
    

    <b-form id="product" @submit.prevent="guardarProducto" >
      <h1 class="text-center">Agregar producto nuevo</h1>
      <b-form-group id="items">
        <label for="imagen">Imagen</label>
        <b-form-file  accept=".jpg, .png, .jpeg" placeholder="Inserte imagen" name="imagen" id="imagen"></b-form-file>

        <label for="nombre">Nombre</label>
        <b-form-input v-model="form.nombre" id="nombre" type="text" required placeholder="Ingrese nombre"></b-form-input>

        <label for="precio">Precio</label>
        <b-form-input v-model="form.precio" id="precio" type="number" required placeholder="Ingrese valor en pesos"></b-form-input>

        <label for="cantidad">Cantidad</label>
        <b-form-input v-model="form.cantidad" id="cantidad" type="number" required placeholder="Ingrese cantidad existente"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" >Guardar</b-button>
      <b-button type="reset" variant="danger">Limpiar</b-button>
    </b-form>
    
       <b-modal id="hecho" 
          size='sm'
          buttonSize='sm'
          okVariant='success'
          headerClass='p-2 border-bottom-0'
          footerClass= 'p-2 border-top-0'
        
       >{{ String(msg) }}</b-modal>
  </div>
</template>

<script>
import {db} from '../../services/firebase'

export default {

  data(){
    return {
      msg: null,
      form:{
        nombre: '',
        cantidad:'',
        precio:''
      }
    }
  },
  methods: {
    guardarProducto(){
      db.collection("productos").add(this.form).then(res=>{
        this.$router,push({
          path: "/productos"
        })
      })
      
      this.msg = 'El producto se guardo correctamente!';
            this.$root.$emit("bv::show::modal", "hecho");
          
    }
  }
};
</script>