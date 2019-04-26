<template>
  <div class="container mt-4">
    <div class="container text-center">
      <h1>Categorias de productos</h1>
    </div>
    <div class="row">
      <div class="col-6">
        <p class="mt-3">Pagina numero: {{ currentPage }}</p>
      </div>
      <div class="col-6 text-right">
        <b-button variant="primary" href="/categorias/crear">Nuevo</b-button>
      </div>
    </div>
    <div class="overflow-auto">
      <div>
        <b-table responsivestriped hover :fields="fields" :items="categorias" id="list_products" :per-page="perPage" :current-page="currentPage" small>
          <template slot="acciones" slot-scope="row"> <!-- row trae los datos  y en este caso el id -->
            <b-button size="sm" @click="editar()" class="mr-2" variant="info" type="button">Editar</b-button>
            <b-button size="sm" @click='eliminar(row.item.id)' class="mr-2" variant="danger" type="button">Eliminar</b-button>
          </template>
        </b-table>
      </div>
      <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="list_products"></b-pagination>
    </div>
  </div>
</template>

<script>
import { db } from "../../services/firebase";
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
      alert("Eliminado");

    },

    editar() {
      console.log("logrado")
    }
  }
};


</script>
