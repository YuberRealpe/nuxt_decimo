<template>
<div>
  <b-carousel
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    no-animation
    
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      img-src="prom-17052019.jpg"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="prom-17052019.jpg"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="prom-17052019.jpg"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="prom-17052019.jpg"
    ></b-carousel-slide>
  </b-carousel>


  <div class="container mt-4">
    <template>
      <div class="row mb-5">
          <div class="col-sm-12">
            <b-card-group >
          <b-card
            :title="listCategoria"
            :img-src="listImage"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 15rem;"
            class="mb-2"
          >
          <b-card-text>
            {{listDescripcion}}: {{listPrecio}}
           </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
        </b-card-group>
      </div>
      </div>
    </template> 
  </div>



</div>

</template>
<script>
import { db } from "../services/firebase";
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
          'listCategoria':productos.categoria,
          'listImage': productos.imagen,
          'listDescrpcion':productos.nombre,
          'listPrecio':productos.precio
         
        };
      });
  },
  data() { 
      return {
        slide: 0,
        sliding: null
      }
    
  },
 methods:{
  
    onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
  },computed: {
    rows() {
      return this.productos.length;
    }
  },
}
</script>