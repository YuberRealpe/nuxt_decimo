<template>

<div class="limiter mt-1">
  <b-alert :show="showDismissibleAlert" 
     @dismissed="showDismissibleAlert=false"
     variant="success" dismissible>
      Usuario registrado con exito!
    </b-alert>
  <div class="container-login100">
      <div class="wrap-login100">
        <h1>Registrarse</h1>
        <b-form @submit.prevent="registro" @reset="onReset" class="login100-form validate-form" >
          <b-form-group
            id="input-group-1"
            
            label-for="input-1"
            class="wrap-input100 validate-input m-b-26 alert-validate"
          >
          <span class="label-input100">Correo electronico:</span>
            <b-form-input
            class="input100"
              id="email"
              v-model="form.email"
              type="email"
              required
              placeholder="Ingresar email"
            ></b-form-input>
            <span class="focus-input100"></span>
          </b-form-group>

          <b-form-group id="input-group-2" label="Nombre:" label-for="input-2" 
          class="wrap-input100 validate-input m-b-26 alert-validate">
            <b-form-input
             class="input100"
              id="nombre"
              v-model="form.nombre"
              required
              placeholder="Ingresa nombre de usuario"
            ></b-form-input>
            <span class="focus-input100"></span>
          </b-form-group>
          <b-form-group id="input-group-3" label="Fecha Nacimiento:" label-for="input-3"
          class="wrap-input100 validate-input m-b-26 alert-validate">
            <b-form-input
             class="input100"
              id="fecha"
              type="date"
              v-model="form.fecha"
              required
              placeholder="Ingresa fecha de nacimiento"
            ></b-form-input>
            <span class="focus-input100"></span>
          </b-form-group>
          <b-form-group id="input-group-4" label="Contraseña:" label-for="input-4"
          class="wrap-input100 validate-input m-b-26 alert-validate">
            <b-form-input
             class="input100"
              id="password"
              type="password"
              v-model="form.password"
              required
              placeholder="Ingresa una contraseña mayor a 8 caracteres"
            ></b-form-input>
            <span class="focus-input100"></span>
          </b-form-group>

          <b-button type="submit" variant="success">Registrarse</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "../../services/firebase";
export default {
  data() {
    return {
      form: {},
        showDismissibleAlert: false
    };
  },
  methods: {
    registro() {
      auth
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(res => {
          res.user.updateProfile({
            displayName: this.form.nombre,
            //photoURL
          }).then(resUpdate=>{
            this.$router.push({
              path: "/"
            });
            this.showAlert();
          })
          
        }).catch(err => {
          alert("Ha ocurrido un error" + err.message);
        });
        
    },
      showAlert() {
        this.showDismissibleAlert=true
        
      }
    ,
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.nombre = "";
      this.form.date = "";
      this.form.password = "";
    }
  }
};
</script>
<style>
h1 {
  font-size: 32px;
  font-weight: 300;
  color: #4c4c4c;
  text-align: center;
  padding-top: 10px;
  margin-bottom: 10px;
  font-family: Poppins-Bold;
}

input[type="radio"] {
  visibility: hidden;
}

label.radio {
  cursor: pointer;
  text-indent: 35px;
  overflow: visible;
  display: inline-block;
  position: relative;
  margin-bottom: 15px;
}

label.radio:before {
  background: #3a57af;
  content: "";
  position: absolute;
  top: 2px;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 100%;
}

label.radio:after {
  opacity: 0;
  content: "";
  position: absolute;
  width: 0.5em;
  height: 0.25em;
  background: transparent;
  top: 7.5px;
  left: 4.5px;
  border: 3px solid #ffffff;
  border-top: none;
  border-right: none;

  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

input[type="radio"]:checked + label:after {
  opacity: 1;
}

hr {
  color: #a9a9a9;
  opacity: 0.3;
}

input[type="text"],
input[type="password"],
input[type="email"],
input[type="date"] {
  width: 450px;
  height: 39px;
  -webkit-border-radius: 0px 4px 4px 0px/5px 5px 4px 4px;
  -moz-border-radius: 0px 4px 4px 0px/0px 0px 4px 4px;
  border-radius: 0px 4px 4px 0px/5px 5px 4px 4px;
  background-color: #fff;
  -webkit-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
  border: solid 1px #cbc9c9;
  margin-left: -5px;
  margin-top: 13px;
  padding-left: 10px;
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



.wrap-input100 {
  width: 100%;
  position: relative;
  border-bottom: 1px solid #b2b2b2;
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
.limiter{
   background: #ebeeef;
}
.wrap-login100 {
  width: 570px;
  background: #fff;
  border-radius: 10px; /*Bordes de contenedor blanco*/
  overflow: hidden;
  position: relative;
}
.wrap-input100 {
  width: 100%;
  position: relative;
  border-bottom: 1px solid #b2b2b2;
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
</style>