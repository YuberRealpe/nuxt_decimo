<template>
  <div class="container mt-4">
    <div class="container text-center">

        <h1>Listado de Productos</h1>
      
    </div>
    <div class="row">
    
      <div class="col-6">
        <p class="mt-3">Pagina numero: {{ currentPage }}</p>
      </div>
      <div class="col-6 text-right">
        <b-button variant="primary" href="/productos/crear">Nuevo</b-button>
      </div>
    </div>
    <div class="overflow-auto">
      <div>
        <b-table
          responsive
          striped
          hover
          :fields="fields"
          :items="productos"
          id="list_products"
          :per-page="perPage"
          :current-page="currentPage"
          small
        ></b-table>
      </div>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="list_products"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { db } from "../../services/firebase";
export default {
  asyncData() {
    return db
      .collection("productos")
      .get()
      .then(productosSnap => {
        let productos = [];
        productosSnap.forEach(value => {
          productos.push(value.data());
        });
        return {
          perPage: 1,
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
      fields: ["Imagen", "nombre", "precio", "cantidad", "acciones"]
    };
  }
};
</script>
