<template>
  <div class="container-login100">
    <div class="wrap-login100">
      <div class="wrap-login100">
        <h1 class="text-center">Editar producto</h1>
    <b-form id="product" @submit="guardarProducto" class="login100-form validate-form" >
      
      <b-form-group class="wrap-input100 validate-input m-b-26 alert-validate">
        <label for="nombre">Selecciona una imagen</label>
          <b-form-file
          class="input100"
          placeholder=" cargar imagen"
          accept="image/"
          v-model="imageProduct"
          
          />
          <label for="nombre">Imagen opcional 2</label>
          <b-form-file
          class="input100"
          placeholder=" cargar imagen"
          accept="image/"
          v-model="imageProduct2"
     
          />
          <label for="nombre">Imagen opcional 3</label>
          <b-form-file
          class="input100"
          placeholder=" cargar imagen"
          accept="image/"
          v-model="imageProduct3"

          />
      </b-form-group>
       <b-form-group class="wrap-input100 validate-input m-b-26 alert-validate">
          <label for="nombre">Direccion Video</label>
          <b-form-input   class="input100" v-model="producto.DirUrl" id="url" type="text" placeholder="Ingrese url de Video"></b-form-input>
          <span class="focus-input100"></span>
      </b-form-group>
      <b-form-group class="wrap-input100 validate-input m-b-26 alert-validate">
          <label for="nombre">Nombre</label>
          <b-form-input   class="input100" v-model="producto.nombre" id="nombre" type="text" required placeholder="Ingrese nombre"></b-form-input>
          <span class="focus-input100"></span>
      </b-form-group>
      <b-form-group class="wrap-input100 validate-input m-b-26 alert-validate">       
        <label for="precio">Precio</label>
        <b-form-input v-model="producto.precio" id="precio" type="number" required placeholder="Ingrese valor en pesos"
        class="input100"
        ></b-form-input>
        <span class="focus-input100"></span>
      </b-form-group>
      <b-form-group class="wrap-input100 validate-input m-b-26 alert-validate">  
        <label for="cantidad">Cantidad</label>
        <b-form-input  class="input100" v-model="producto.cantidad" id="cantidad" type="number" required placeholder="Ingrese cantidad existente"></b-form-input>
        <span class="focus-input100"></span>
     </b-form-group>
      <b-form-group class="wrap-input100 validate-input m-b-26 alert-validate">
        <label label-for="categorias" label="categoria">Categoria</label>
        <b-form-select  class="input100" id="categorias" v-model="producto.categoria" :options="categorias"  required placeholder="Seleccionar"></b-form-select>
        <span class="focus-input100"></span>
      </b-form-group>

      <b-button type="submit" variant="primary" id="onForm">Guardar</b-button>
      <div v-show="guardando">
        <strong>Guardando...</strong>
        <b-spinner  variant="primary" type="grow" label="Spinning">Guardando....</b-spinner>
      </div>
      
      
      
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
import {db,storage} from '../../services/firebase'

export default {
  asyncData(){
    return db.collection('categorias').get().then(categoriasSnap =>{
      let categorias = [{ value: null, text: "Seleccione una opcion"}];

      categoriasSnap.forEach(value => {
          categorias.push(value.data().nombre)
      });

      return{
        categorias
      }
      
    })
  },
  data(){
    return {
      id:this.$route.params.slug,
      msg: null,
      guardando:false,
      imageProduct:'',
      imageProduct2:'',
      imageProduct3:'',
      DirUrl:'',
      producto:[],
      form:{
        nombre: '',
        cantidad:'',
        precio:'',
        categoria: null,
        imagen:'',

        
      }
    }
  },created(){
        this.traerdatos();
    
    },
  methods: {
     traerdatos(){ // TRAER DATOS DE PRODUCTO SEGUN SLUG
     
      return db.collection('productos').where('slug','==',this.id).onSnapshot(productSnap=>{
                this.producto = []

                productSnap.forEach(async valueCarrito =>{

                    this.producto = valueCarrito.data()
                    this.producto.id= valueCarrito.id
                })
            })

     },
    guardarProducto(evt){
      
      evt.preventDefault()

      this.guardando = true;
     
      if(this.imageProduct!='' &&  this.imageProduct!=null){
          let imageRef = storage.child(this.imageProduct.name)
      }else{
        this.form.imagen=this.producto.imagen
      }


      
      let imageRef2, imageRef3=null;

      if(this.imageProduct2!='' &&  this.imageProduct2!=null){
        imageRef2 = storage.child(this.imageProduct2.name)
      }else{

        if(this.form.hasOwnProperty('imagen2')){
            this.form.imagen2=this.producto.imagen2
          }
         
      }

      if(this.imageProduct3!='' &&  this.imageProduct3!=null){
        imageRef3 = storage.child(this.imageProduct3.name)
      }else{
        
         if(this.form.hasOwnProperty('imagen3')){
            this.form.imagen3=this.producto.imagen3
          }
      }
      if(url!=''){ 
         this.form.DirUrl= this.DirUrl
      }else{
        if(this.form.hasOwnProperty('DirUrl')){
            this.form.url= this.producto.DirUrl
          }
        
      }


      if(imageRef2!=null && imageRef3!=null ){
        
        imageRef.put(this.imageProduct).then(async imageRes =>{
        this.form.imagen = await imageRes.ref.getDownloadURL();
       
        imageRef2.put(this.imageProduct2).then(async imageRes2 =>{
        this.form.imagen2 = await imageRes2.ref.getDownloadURL()
        
        imageRef3.put(this.imageProduct3).then(async imageRes3 =>{
        this.form.imagen3 = await imageRes3.ref.getDownloadURL()
          this.guardadordispar()
         }) 
         })
         })

      }else if(imageRef2!=null && imageRef3== null){

        imageRef.put(this.imageProduct).then(async imageRes =>{
        this.form.imagen = await imageRes.ref.getDownloadURL()

        imageRef2.put(this.imageProduct2).then(async imageRes2 =>{
        this.form.imagen2 = await imageRes2.ref.getDownloadURL()
          this.guardadordispar()
         })
         })
        
      }else if(imageRef2==null && imageRef3!=null){
  
        imageRef.put(this.imageProduct).then(async imageRes =>{
        this.form.imagen = await imageRes.ref.getDownloadURL()

        imageRef3.put(this.imageProduct3).then(async imageRes3 =>{
        this.form.imagen3 = await imageRes3.ref.getDownloadURL()
        this.guardadordispar()
         })
         })
        
        }else{

        
        this.guardadordispar()
      
      }
      
      
    },
   
    guardadordispar(){

          let form = this.producto;
          this.guardando= false;

          db.collection("productos").doc(this.producto.id).set(form);
          this.msg="Producto Actualizado";
           this.showMsgBoxTwo();
          
    },
    showMsgBoxTwo() {
        this.boxTwo = ''
        this.$bvModal.msgBoxOk(this.msg, {
     
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
          .then(value => {
            this.$router.push({
              path: "/productos"
            });
          })
          .catch(err => {
            // An error occurred
          })
      }
  },

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
