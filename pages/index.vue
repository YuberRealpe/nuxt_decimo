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
  <div class="container">
<div class="row mt-4">
    <div class="focal col-sm-3 mt-4"  v-for="producto in productos" :key="producto.id">
          <cardProducto :precio="producto.precio"
            :nombre="producto.nombre"
            :urlImagen="producto.imagen"
            :slug ="producto.slug"
          />
    </div>
</div>
</div>
</div>

</template>
<script>
import { db } from "../services/firebase";
import cardProducto from "../components/cardproducto";
export default {

  components:{cardProducto},

asyncData() {
    return db.collection('productos').get().then(productosSnap =>{
      let productos =[];
        productosSnap.forEach(value =>{
          productos.push({
            id: value.id,...value.data()

          })
        })
        return{
      productos
    }
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
<style>

</style>
