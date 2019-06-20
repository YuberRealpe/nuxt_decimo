<template>
  <div class="container-login100">
    <div class="wrap-login100">
      
    <h1 class="text-center">Listado de productos existentes</h1>
   
    <div class="login100-form validate-form">
       
      <div class="wrap-input100 validate-input m-b-26 alert-validate">
        <div class="row">
      <div class="col-6">
        <p class="mt-3">Pagina numero: {{ currentPage }}</p>
      </div>
      <div class="col-6 text-right">
        <b-button variant="primary" href="/productos/crear">Nuevo</b-button>
      </div>
    </div>
        <b-table responsivestriped hover :fields="fields" :items="productos" id="list_products" :per-page="perPage" :current-page="currentPage" small>
          <template slot="acciones" slot-scope="row"> <!-- row trae los datos  y en este caso el id -->
            <b-button v-b-modal.modal-prevent-closing variant="info" @click="asignar(row)" class="mr-2" size="sm">Editar</b-button>
            <b-button size="sm" @click="$bvModal.show('hecho');asignarmsg(row.item.id)" class="mr-2" variant="danger" type="button">Eliminar</b-button>
          </template>
        </b-table>
        <b-modal id="modal-prevent-closing" ref="modal" title="Editar Producto"  @show="resetModal" @hidden="resetModal" @ok="handleOk">
          <form ref="form" @submit.stop.prevent="handleSubmit">
             <b-form-group  :state="nombreState" label="Nombre" label-for="name-input" invalid-feedback="Nombre es requerido">
                <b-form-input :state="nombreState" id="nombre"  required></b-form-input>
              </b-form-group>
              <b-form-group  :state="precioState" label="Precio" label-for="precio-input" invalid-feedback="Precio es requerido">
                <b-form-input :state="precioState" id="precio"   required></b-form-input>
              </b-form-group>
              <b-form-group :state="cantidadState" label="Cantidad" label-for="cantidad-input" invalid-feedback="Cantidad es requerida">
                <b-form-input :state="cantidadState" id="cantidad" required></b-form-input>
              </b-form-group>
          </form>
       </b-modal>

       <b-modal id="hecho" 
          size='sm'
          buttonSize='sm'
          okVariant='success'
          headerClass='p-2 border-bottom-0'
          footerClass= 'p-2 border-top-0'
       >
      <b-container fluid>
       {{ String(msg) }}
      </b-container>
      
      <template slot="modal-footer"  >
      <div v-show="Validars">
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button size="sm"  @click="esconder()">
        Cancelar
      </b-button>
      <b-button size="sm" variant="danger" @click="eliminar(elim_id)">
        Eliminar
      </b-button>
</div>
  
        </template>
      
   
       </b-modal>
      </div>
      
    </div>
    <div id="justi">
      <b-pagination  v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="list_products"></b-pagination>
      </div>
  </div>
  </div>
 
</template>

<script>

import { db } from "../../services/firebase";

var lec=null;

export default {

  asyncData() {
    return db
      .collection("productos")
      .get()
      .then(productosSnap => {
        let productos = [];
        productosSnap.forEach(value => {
          productos.push({id:value.id,...value.data()});
        });
        return {
          perPage: 10,
          currentPage: 1,
          productos
        };
      });
  },
  computed: {
    rows() {
      return this.productos.length;
    }
  },
  data() {
    return {
       Validars:true,
      msg:null,
      elim_id:null,
      nombreState: null,
      precioState:null,
      cantidadState:null,
      fields: ["Imagen", "nombre", "precio", "cantidad", "acciones"],
    };
  },
  methods: {
    asignarmsg(id){
      this.msg = "Desea eliminar este producto?"
      this.elim_id = id
      this.Validars= true
    },
    esconder(){
     this.$bvModal.hide('hecho')
    
    },
    eliminar(id) {
      let index;
      this.productos.map((value,key)=>{
        if(value.id==id){
          index=key;
        }
      });
      db.collection("productos").doc(id).delete().then(()=>{
        this.productos.splice(index,1);
      });
        this.Validars=false
        this.msg = 'El producto ha sido eliminado!';
        this.$root.$emit("bv::show::modal", "hecho");("Eliminado");
       
    },
    checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nombreState = valid ? 'valid' : 'invalid'
        this.precioState = valid ? 'valid' : 'invalid'
        this.cantidadState = valid ? 'valid' : 'invalid'
        return valid
      },
      resetModal() {
        this.nombreState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
      //this.$root.$emit("bv::show::modal", "hecho");
          let verificador=null;

          db.collection("productos").doc(lec).update({
              nombre:nombre.value,
              precio: precio.value,
              cantidad: cantidad.value
            }).catch(function(error){
              alert("Error de conexion "+ error);
            });
        this.msg = 'El producto ha sido actualizado!';
        this.$root.$emit("bv::show::modal", "hecho");

        this.$nextTick(() => {
          this.$refs.modal.hide()
        })
      },
      asignar(row){
        lec = row.item.id;
        
        nombre.value= row.item.nombre,
        precio.value= row.item.precio,
        cantidad.value=row.item.cantidad
        
        

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
  height: 470px;
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
