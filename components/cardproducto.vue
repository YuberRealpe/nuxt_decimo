<template>
      <b-card
          :img-src="urlImagen"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 17rem; height:20rem;cursor:pointer;font-size:14px"
          class="shadow cursor mb-2"
          border-variant="default"
          
          @click="open"
          @mouseover="Validars=true"
          @mouseleave="Validars=false"
           >
           <!-- v-b-popover.hover.top="nombre"  Propiedad pararmensaje flotante--> 
           <b-card-title >

            <b-row no-gutters>
            
                <b-col md="6" style="font-size:16px;" id=descuentos>
                    ${{precio | money filter}}
                </b-col>
                    
                <b-col md="6" class="text-right" style="font-size:14px; color:#00c331">
                    15% Descuento
                </b-col>
            </b-row>
           </b-card-title >
           
          <b-card-text v-show="Validars" >
          {{nombre}}
          </b-card-text>
            <!-- AGREGAR SECCION DE PREGUNTAS 
            :href="'/busqueda/'+ slug"
          <b-button href="#" variant="primary">Go somewhere</b-button> -->
        </b-card>
</template>
<script>
export default {
    data(){
        return{
            Validars:false

        }
    },
    props:['precio','nombre','urlImagen','slug'],
    methods:{
        open(){
 
            
        },
        
    },
    created(){
    
    }
    
}
</script>
<style>

</style>


