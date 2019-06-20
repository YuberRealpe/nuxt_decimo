<template>
    
<div >
  <div class="container-login100">
    <div class="wrap-login100">

    <div class="row m-4">
      <div class="col-2">
        <b-list-group >
          <b-list-group-item button>
            <img slot="img" class="d-block img-fluid w-100" :src="`${producto.imagen}`" alt="image slot">
          </b-list-group-item>
          <b-list-group-item button>
            <img slot="img" class="d-block img-fluid w-100" :src="`${producto.imagen}`" alt="image slot">
          </b-list-group-item>
          <b-list-group-item button>
            <img slot="img" class="d-block img-fluid w-100" :src="`${producto.imagen}`" alt="image slot">
          </b-list-group-item>
          <b-list-group-item button>
            <img slot="img" class="d-block img-fluid w-100" :src="`${producto.imagen}`" alt="image slot">
          </b-list-group-item>
      </b-list-group>
      </div>
      <div class="col-5">
        <h1 class="text-center">Articulo Katui</h1>
          <b-carousel
          id="carousel-no-animation"
          style="text-shadow: 0px 0px 2px #000"
          no-animation
          controls
          indicators
          img-width="500"
          img-height="480"
        >
            <b-carousel-slide
            
            >
            <img slot="img" class="d-block img-fluid w-100" v-bind="mainProps" :src="`${producto.imagen}`" alt="image slot">
            </b-carousel-slide>
            
        </b-carousel>
      </div>
      <div class="col-5"  >
        <div style="font-size:25px;font-weight: 649;">{{producto.nombre}} </div>
        <a style="cursor:pointer ">
                  <img
                    src="https://cdn.icon-icons.com/icons2/93/PNG/256/star_favorite_favourite_16767.png"
                    height="20"
                  >
                  <img
                    src="https://cdn.icon-icons.com/icons2/93/PNG/256/star_favorite_favourite_16767.png"
                    height="20"
                  >
                  <img
                    src="https://cdn.icon-icons.com/icons2/93/PNG/256/star_favorite_favourite_16767.png"
                    height="20"
                  >
                  <img
                    src="https://cdn.icon-icons.com/icons2/93/PNG/256/star_favorite_favourite_16767.png"
                    height="20"
                  >
                  <img
                    src="https://cdn.icon-icons.com/icons2/93/PNG/256/star_favorite_favourite_16767.png"
                    height="20"
                  >
                </a>
        <div style="font-size:40px">{{producto.precio | currency}} </div>
            <a>
               <img
                    src="https://cdn.icon-icons.com/icons2/1259/PNG/512/1495815258-jd02_84598.png"
                     height="28"
                  > Medios de pago
                 </a>
                 <br>
            <a style="cursor:pointer ">
                  <img
                    src="https://cdn.icon-icons.com/icons2/1023/PNG/512/visa_512_icon-icons.com_75986.png"
                    height="40"
                  >
                  <img
                    src="https://cdn.icon-icons.com/icons2/1023/PNG/512/mastercard_512_icon-icons.com_75982.png"
                    height="40"
                  >
                  <img
                    src="https://cdn.icon-icons.com/icons2/1023/PNG/512/paypal_512_icon-icons.com_75983.png"
                    height="40"
                  >
                </a>
          <br>
                <div >
                  <p>Cantidad</p>
                  <b-form-select v-model="selected" :options="options"></b-form-select>
                  ({{producto.cantidad}} Disponibles)
                </div>

        <b-button  block variant="primary" class="pb-2">Agregar al carrito de compra</b-button>
      </div>
    </div>
    
  </div>
  </div>
   <div class="wrap-login100 container">
      <h1>Comentarios</h1>
   </div>
 </div>

</template>

<script>
import { db } from "../../services/firebase"

export default {
     data(){
         return {
             id:this.$route.params.slug,
             producto:[],
             comentar:[],
             mainProps: { blank: true, width: 50, height: 40, class: 'm1' },
             selected: null,
          options: [
                { value: null, text: "Seleccione una opcion"},
                { value: "1", text: "1 unidad" },
                { value: "2", text: "2 unidades" },
                { value: "3", text: "3 unidades" },
                { value: "4", text: "4 unidades" }
              ]         
         }
     },
     created(){
        this.traerdatos(),
        this.traercomentarios()
    },
  methods:{
     traerdatos(){
     
      return db.collection('productos').where('slug','==',this.id).onSnapshot(productSnap=>{
                this.producto = []
                productSnap.forEach(async valueCarrito =>{
                    this.producto = valueCarrito.data()
                })
            })

     }
    },
    traercomentarios(){
     return db.collection('comentarios').where("producto", "==", this.id).onSnapshot(carritoSnap=>{
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
