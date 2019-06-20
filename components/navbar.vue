<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/" >
        <img src="../static/icon/534abea9-0978-4ba0-9056-eb249dfdb2f5.jpg"  width="80" height="30" alt="Kitten">

    </b-navbar-brand> 

    <!-- b-collpase agrupa los elementos y los oculta, cuando la pantalla es pequeni-a-->
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    
    <b-collapse id="nav-collapse" is-nav> 
    
      <!-- b-navbar items -->
      <b-navbar-nav class="ml-5">

        <b-nav-form >
        <b-input-group  size="sm">
                        <b-form-input id="search" placeholder="Buscador"></b-form-input>
                        
              <!--<b-input-group-append >
                <b-button variant="light" id="b-search"> 
                  <img src="../static/icon/images.png" width="18" height="20" alt="Kitten">
                </b-button>
              </b-input-group-append>
              -->
              <!--outline-light boton oculto-->
            </b-input-group>
            <span class="focus-input100"></span>
        </b-nav-form>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" >
          <!-- Items del navbar-nav  con direcciones, auto alinea hacia la derecha-->
          <b-nav-item href="/carrito">Carrito de Compras</b-nav-item>
          <b-nav-item href="/categorias">Categorias</b-nav-item>
          <b-nav-item href="/productos" >Productos</b-nav-item>
          <b-nav-item href="/usuario/crear" v-if="!user">Crear cuenta</b-nav-item>
          <b-nav-item href="/usuario" v-if="!user">Ingresar</b-nav-item>
    
        </b-navbar-nav>
      <b-dropdown v-if="user" :text="user.displayName">
        <b-dropdown-item>Actualizar</b-dropdown-item>
        <b-dropdown-item @click="cerrarSesion">Cerrar Sesion</b-dropdown-item>
 
    </b-dropdown>
    </b-collapse>
    
  </b-navbar>
</div>
</template>

<script>
import {auth} from '../services/firebase'
export default {

  data(){
    return{
      user:false
    }
  },
  created(){
    auth.onAuthStateChanged(user=>{
      this.user = user
    })
  }
  ,methods:{
    cerrarSesion(){
      auth.signOut()
    }
  }
};
</script>
<style>
  /*div{
      border-top: 1px solid red;
      border-right: 1px solid red;
      border-bottom: 1px solid red;
      border-left: 1px solid red;
  }

  
  #title{
  font-family: Poppins-Bold;
  }*/
  #search{
  width: 450px; 
  height: 30px; 
  margin-left: -5px;
  margin-top: 3px; 
  padding-left: 10px;
  
  }
  


</style>


