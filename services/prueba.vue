<template>

 <div class="container">
  
     <h1>Iniciar</h1>
    <b-form  @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Correo electronico:"
        label-for="input-1"
        description="Nunca compartiremos tu correo electrónico con alguien más.."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="Contraseña:" label-for="input-4">
        <b-form-input
          id="input-4"
          type='password'
          v-model="form.password"
          required
          placeholder="Ingresa una contraseña mayor a 8 caracteres"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success">Registrarse</b-button>
    </b-form>

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