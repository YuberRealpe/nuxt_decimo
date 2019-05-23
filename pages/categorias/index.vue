<template>
  <div class="container-login100">
    <div class="wrap-login100">
  
      <h1 class="text-center">Categorias de productos</h1>
    <div class="login100-form validate-form">
    <div class="wrap-input100 validate-input m-b-26 alert-validate">
      <div>
        <div class="row">
      <div class="col-6">
        <p class="mt-3">Pagina numero: {{ currentPage }}</p>
      </div>
      <div class="col-6 text-right">
        <b-button variant="primary" href="/categorias/crear">Nuevo</b-button>
      </div>
    </div>
        <b-table responsivestriped hover :fields="fields" :items="categorias" id="list_products" :per-page="perPage" :current-page="currentPage" small>
          <template slot="acciones" slot-scope="row"> <!-- row trae los datos  y en este caso el id -->
            <b-button v-b-modal.modal-prevent-closing variant="info" @click="asignar(row)" class="mr-2" size="sm">Editar</b-button>
            <b-button size="sm" @click='eliminar(row.item.id)' class="mr-2" variant="danger" type="button">Eliminar</b-button>
          </template>
        </b-table>
        <b-modal id="modal-prevent-closing" ref="modal" title="Editar Categoria"  @show="resetModal" @hidden="resetModal" @ok="handleOk">
          <form ref="form" @submit.stop.prevent="handleSubmit">
             <b-form-group  :state="nombreState" label="Nombre" label-for="name-input" invalid-feedback="Nombre es requerido">
                <b-form-input :state="nombreState" id="nombre"  required></b-form-input>
              </b-form-group>
              <b-form-group  :state="referenciaState" label="Referencia" label-for="referencia-input" invalid-feedback="Referencia es requerida">
                <b-form-input :state="referenciaState" id="referencia"   required></b-form-input>
              </b-form-group>
              <b-form-group :state="descripcionState" label="Descripcion" label-for="descripcion-input" invalid-feedback="Referenia es requerida">
                <b-form-input :state="descripcionState" id="descripcion" required></b-form-input>
              </b-form-group>
          </form>
       </b-modal>
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
  <div id="justi">
      <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="list_products"></b-pagination>
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
      .collection("categorias")
      .get()
      .then(CategoriasSnap => {
        let categorias = [];
        CategoriasSnap.forEach(value => {
          categorias.push({id:value.id,...value.data()});
        });
        return {
          perPage: 10,
          currentPage: 1,
          categorias
        };
      });
  },
  computed: {
    rows() {
      return this.categorias.length;
    }
  },
  data() {
    return {
      msg:null,
      nombreState: null,
      referenciaState:null,
      descripcionState:null,
      fields: ["nombre", "referencia", "descripcion", "acciones"]
    };
  },
  methods: {

    eliminar(id) {
      let index;
      this.categorias.map((value,key)=>{
        if(value.id==id){
          index=key;
        }
      });
      db.collection("categorias").doc(id).delete().then(()=>{
        this.categorias.splice(index,1);
      });
     
            this.msg = 'La categoria ha eliminada!';
            this.$root.$emit("bv::show::modal", "hecho");

    },checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nombreState = valid ? 'valid' : 'invalid'
        this.referenciaState = valid ? 'valid' : 'invalid'
        this.descripcionState = valid ? 'valid' : 'invalid'
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

          db.collection("categorias").doc(lec).update({
              nombre:nombre.value,
              referencia: referencia.value,
              descripcion: descripcion.value
            }).catch(function(error){
              alert("Error de conexion "+ error);
            });
            
            this.msg = 'La categoria ha sido actualizada!';
            this.$root.$emit("bv::show::modal", "hecho");

        this.$nextTick(() => {
          this.$refs.modal.hide()
        })
      },
      asignar(row){
        lec = row.item.id;
        nombre.value = row.item.nombre;
        referencia.value = row.item.referencia;
        descripcion.value = row.item.descripcion;

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
  height: 100%;
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
  padding: 10px 67px 45px 45px;
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
