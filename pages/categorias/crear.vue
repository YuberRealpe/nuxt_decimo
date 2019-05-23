<template>
   <div class="container-login100">
    <div class="wrap-login100">
      <div class="wrap-login100">
    <h1 class="text-center">Agregar Nueva Categoria</h1>
    <b-form id="categorias" @submit.prevent="guardarCategoria"   class="login100-form validate-form" >
      
      <b-form-group class="wrap-input100 validate-input m-b-26 alert-validate">
        <label for="nombre">Nombre</label>
        <b-form-input class="input100" v-model="form.nombre" id="nombre" type="text" required placeholder="Ingrese nombre de categoria"></b-form-input>
      <span class="focus-input100"></span>
      </b-form-group>
      <b-form-group class="wrap-input100 validate-input m-b-26 alert-validate">
        <label for="referencia">Referencia</label>
        <b-form-input class="input100" v-model="form.referencia" id="referencia"  required placeholder="Referencia"></b-form-input>
      <span class="focus-input100"></span>
      </b-form-group>
      <b-form-group class="wrap-input100 validate-input m-b-26 alert-validate">
        <label for="descripcion"></label>
        <b-form-input class="input100" v-model="form.descripcion" id="descripcion"  required placeholder="Descripcion breve"></b-form-input>
      <span class="focus-input100"></span>
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
  </div>
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
        referencia:'',
        descripcion:''
      }
    }
  },
  methods: {
    guardarCategoria(){
      db.collection("categorias").add(this.form).then(res=>{
          path: "/categorias"
      })
           
      this.msg = 'El producto se guardo correctamente!';
            this.$root.$emit("bv::show::modal", "hecho");
          
    }
  }
};
</script>
<style>

h1 {
  font-size: 32px;
  font-weight: 350;
  color: #4c4c4c;
  padding-top: 10px;
  margin-bottom: 10px;
  font-family: Poppins-Bold;
}
.limiter {
  width: 100%;
  margin: 0 auto;
}
.container-login100 { /* Contenedor genera afuera*/
  width: 100%;  
  min-height: 90vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #ebeeef;
}
.wrap-login100 {
  width: 570px;
  background: #fff;
  border-radius: 10px; /*Bordes de contenedor blanco*/
  overflow: hidden;
  position: relative;
}
.login100-form {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 88px 23px 45px;
}
.wrap-input100 {
  width: 100%;
  position: relative;
  border-bottom: 1px solid #b2b2b2;
}
input.input100 {
  height: 45px;
}
.input100 {
  font-family: Poppins-Regular;
  font-size: 15px;
  color: #555555;
  line-height: 1.2;

  display: block;
  width: 100%;
  background: transparent;
  padding: 0 5px;
}

.focus-input100 {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

@media (max-width: 576px) {
  .login100-form {
    padding: 43px 15px 57px 117px;
  }
}
@media (max-width: 480px) {
  .login100-form {
    padding: 43px 15px 57px 15px;
  }

  .label-input100 {
    text-align: left;
    position: unset;
    top: unset;
    left: unset;
    width: 100%;
    padding: 0 5px;
  }
}
/* boton color*/
.login100-form-btn:hover {
  background-color: #025a02;
}

.focus-input100::before {
  content: "";
  display: block;
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 1px;

  -webkit-transition: all 0.6s;
  -o-transition: all 0.6s;
  -moz-transition: all 0.6s;
  transition: all 0.6s;

  background: #57b846;
}
.input100:focus + .focus-input100::before {
  width: 100%;
}

.has-val.input100 + .focus-input100::before {
  width: 100%;
}
input.form-control { /* CONTORNO DE INPUTS*/
	outline: none;
  border: none;

}
input:focus, input.form-control:focus {/* FOCO DE INPUTS*/

    outline-width: 0 !important;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
}
</style>
