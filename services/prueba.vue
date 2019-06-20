<template>

 <div class="container">
  
     <b-card>
              <b-card-text>
                <h3 style="font-weight:bold">{{producto.nombre}}</h3>
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
                <br>
                <a style="font-size: 300%">{{producto.precio | currency}}</a>
                <br>
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
                  <b-form-select v-model="selected" :options="options"></b-form-select>
                  ({{producto.cantidad}} Disponibles)
                </div>
                <div class="d-flex justify-content-center">
                  <b-button block variant="info">Comprar</b-button>
                </div>
              </b-card-text>
            </b-card>

  </div>
</template>

<script>
  export default {
    data() {
      return db.collection('productos').where('slug', '==', 'combo').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        alert(doc.data().precio)
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.nombre = ''
        this.form.date = ''
        this.form.password = ''
        
      }
    }
  }
</script>