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
                    src='https://cdn.pixabay.com/photo/2014/04/02/10/17/star-303363_960_720.png'
                    height="20"
                  >
                  <img
                    src="https://cdn.pixabay.com/photo/2014/04/02/10/17/star-303363_960_720.png"
                    height="20"
                  >
                  <img
                    src="https://cdn.pixabay.com/photo/2014/04/02/10/17/star-303363_960_720.png"
                    height="20"
                  >
                  <img
                    src="https://cdn.pixabay.com/photo/2014/04/02/10/17/star-303363_960_720.png"
                    height="20"
                  >
                  <img
                    src="https://cdn.pixabay.com/photo/2014/04/02/10/17/star-303363_960_720.png"
                    height="20"
                  >
                </a>
        <div style="font-size:40px">{{producto.precio | currency}} </div>
            <a>
               <img
                    src="data:image/png;base64,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"
                     height="28"
                  > Medios de pago
                 </a>
                 <br>
            <a style="cursor:pointer ">
                  <img
                    src="http://www.puertopixel.com/wp-content/uploads/tarjetas.jpg"
                    height="40"
                  >
                 
                </a>
          <br>
                <div >
                  <p>Cantidad</p>
                  {{producto.cantidad}} Disponibles
                   <b-form>
                  <b-form-select v-model="selected" :options="options" required></b-form-select>
                        <b-button  type="submit" block variant="primary" class="pb-2" @click="agregarCarro()">Agregar al carrito de compra</b-button>
                  </b-form>
                </div>

        
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
        this.carro.producto = db.collection('productos').doc(this.producto.id);
        alert(auth.currentUser.uid)
        this.msg = 'Producto agregado al carro de compra!';
              this.$root.$emit("bv::show::modal", "hecho");
        db.collection('carrito').add(this.carro);
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
