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
                  <b-form-select v-model="carro.cantidad" :options="options"></b-form-select>
                  ({{producto.cantidad}} Disponibles)
                </div>

        <b-button  block variant="primary" class="pb-2" @click="agregarCarro()">Agregar al carrito de compra</b-button>
      </div>
    </div>
    
  </div>
  </div>
   <div class="wrap-login100 container">
      <h1>Comentarios</h1>
        <b-form @submit.prevent="guardar">
        
          <div class="input-group">
            <b-form-textarea
              v-model="formul.comentario"
              size="sm"
              placeholder="Escribe un comentario"
            ></b-form-textarea>
            
            <b-button variant="info" type="submit">publicar</b-button>
          </div>
        </b-form>

      <div class="row" v-for="value in comentar" :key="value.id"> 
            <div class="col-12 ">
                <b-media class="mt-4 shadow p-3 mb-4 rounded border border-secondary">
              <b-img 
                slot="aside"
                src="https://cdn.icon-icons.com/icons2/827/PNG/512/user_icon-icons.com_66546.png"
                height="30"
              ></b-img>

              <h5 class="mt-0 mb-1" >{{value.producto.usuario}}</h5>
              <p class="mb-0">{{value.producto.comentario}}</p>
            </b-media>
            </div>
        </div>
   </div>
   <b-modal id="hecho" 
          size='sm'
          buttonSize='sm'
          okVariant='success'
          headerClass='p-2 border-bottom-0'
          footerClass= 'p-2 border-top-0'
          
       >
       <div class="text-center">{{ String(msg) }}</div>
       
       </b-modal>
 </div>

</template>

<script>
import { db } from "../../services/firebase"
import {auth} from '../../services/firebase'

export default {
     data(){
         return {
            msg: null,
             id:this.$route.params.slug,
             producto:[],
             comentar:[],
             mainProps: { blank: true, width: 50, height: 40, class: 'm1' },
             carro: {
               cantidad: null,
               producto: null,
               usuario: null,
               valor: null,
             },
             selected: null,
          options: [
                { value: null, text: "Seleccione una opcion"},
                { value: "1", text: "1 unidad" },
                { value: "2", text: "2 unidades" },
                { value: "3", text: "3 unidades" },
                { value: "4", text: "4 unidades" }
              ],
              formul: {
        comentario: "",
        usuario: "",
        producto: ""
      },         
         }
     },
     created(){
        this.traerdatos();
        this.traercomentarios();
    },
  methods:{
     agregarCarro(){
          this.carro.valor = this.producto.precio,
        this.carro.precio = this.producto.precio,
        this.carro.usuario = auth.currentUser.uid;
        this.carro.producto = '/productos/'+this.producto.id
        alert(this.producto.productosRef)
        this.msg = 'Producto agregado al carro de compra!';
              this.$root.$emit("bv::show::modal", "hecho");
        //db.collection('carrito').add(this.carro);
     },
     traerdatos(){
     
      return db.collection('productos').where('slug','==',this.id).onSnapshot(productSnap=>{
                this.producto = []

                productSnap.forEach(async valueCarrito =>{

                    this.producto = valueCarrito.data()
                    this.producto.id= valueCarrito.id
                })
            })

     }
    ,
    traercomentarios(){
     return db.collection('comentarios').where("producto", "==", this.id).onSnapshot(comentarSnap=>{
            this.comentar = []
            comentarSnap.forEach(async valueCarrito =>{
                let producto = valueCarrito.data();
              
                this.comentar.push({
                    producto
                })
            })

        })
    },
    guardar() {
      this.formul.usuario = auth.currentUser.displayName;
      this.formul.producto = this.$route.params.slug;
      db.collection("comentarios").add(this.formul);
    },
    },
    
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
