<template>
<div class="container-login100">
    <div class="wrap-login100">

    <h2 class="text-center">Carrito de Compras</h2>

         <div class="row mt-4" v-for="value in carrito" :key="value.id"> 
            <div block class="col-12 shadow p-3 mb-4 rounded border border-seconda"  slot="aside">
                <div class="row"> 
                  <div class="col">
                      <h2>{{ value.producto.nombre}}</h2>
                  </div>
                  <div class="col">
                      <h2>Cantidad: {{ value.producto.cantidad}}</h2>
                  </div>
                </div>
               
            </div>
        </div>
          <b-button variant="success">Finalizar Compra</b-button>
    </div>
</div>
</template>
<script>
import {db} from '../services/firebase'

export default {
    data(){
        return{
            carrito:[]
        }
    },
    created(){
        this.traerCarrito()
    },
    methods:{
        traerCarrito(){
        return db.collection('carrito').onSnapshot(carritoSnap=>{
            this.carrito = []
            carritoSnap.forEach(async valueCarrito =>{
                let producto = await valueCarrito.data().producto.get();

                producto = producto.data();
                this.carrito.push({
                    id: valueCarrito.id,
                    cantidad: valueCarrito.data().cantidad,
                    valor: valueCarrito.data().valor,
                    producto
                })
            })

        })
    }
    }    
}
</script>
<style>
/*div{
      border-top: 1px solid red;
      border-right: 1px solid red;
      border-bottom: 1px solid red;
      border-left: 1px solid red;
  }*/
h1 {
  font-size: 32px;
  font-weight: 350;
  color: #4c4c4c;
  padding-top: 10px;
  margin-bottom: 10px;
  font-family: Poppins-Bold;
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
.wrap-login100 { /* Contenedor blanco div*/
  width: 100%;  
  width: 990px;
  height: 510px;
  background: rgb(255, 255, 255);
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
  padding: 10px 88px 45px 45px;
}
.wrap-input100 {
  width: 100%;
  position: relative;
  border-bottom: 1px solid #b2b2b2;
}
#justi{
  width: 100%;
  display: flex;
   justify-content: center;
}
</style>
