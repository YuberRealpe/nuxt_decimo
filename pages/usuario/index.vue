<template>

 <div class="container-login100">
  <div class="wrap-login100">
        <div class="login100-form-title" style="background-image: url(images/bg-01.jpg);">
					<span class="login100-form-title-1">
						Iniciar Sesion
					</span>
				</div>

        <b-form class="login100-form validate-form" @submit="onSubmit" @reset="onReset">
          <b-form-group
          class="wrap-input100 validate-input m-b-26 alert-validate"
            id="input-group-1"
            label-for="input-1"
          >
          <span class="label-input100">Correo electronico:</span>
            <b-form-input
            class="input100"
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Ingresar direccion electronica"
            ></b-form-input>
            <span class="focus-input100"></span>
          </b-form-group>
          <b-form-group class="wrap-input100 validate-input m-b-18 alert-validate">
            <span class="label-input100">Contraseña:</span>
            <b-form-input
            class="input100"
              id="input-4"
              type='password'
              v-model="form.password"
              required
              placeholder="Ingresa una contraseña mayor a 8 caracteres"
            ></b-form-input>
             <span class="focus-input100"></span>
          </b-form-group>
              <div class="flex-sb-m w-full p-b-30">
                <div class="contact100-form-checkbox">
                  <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
                  <label class="label-checkbox100" for="ckb1">
                    Recordarme  
                  </label>
                </div>
              <div>
							<a href="https://colorlib.com/etc/lf/Login_v15/index.html#" class="txt1">
								Olvidaste tu contraseña?
							</a>
						  </div>
                
              </div>
              <div class="container-login100-form-btn">
                  <b-button type="submit" class="login100-form-btn" variant="success">Ingresar</b-button>
              </div>
        </b-form>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        
      }
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
    },
       
  }
</script>
<style>


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



.container-login100 {
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


.wrap-login100 {  /* marco de div */
  width: 670px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}
.login100-form-title { /*div de titulo */
  width: 100%;
  position: relative;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  padding: 15px 15px 7px 70px;
}

.login100-form-title-1 { /*Tituto de div*/
  font-family: Poppins-Bold;
  font-size: 40px;
  color: #616161;
  /*text-transform: uppercase;*/
  line-height: 1.2;
  text-align: center;
}
.login100-form-title::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
 /* background-color: rgba(54,84,99,0.7);*/
}
/* Formulario*/
.login100-form {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 23px 88px 93px 190px;
}

.wrap-input100 {
  width: 100%;
  position: relative;
  border-bottom: 1px solid #b2b2b2;
}
.label-input100 {
  font-family: Poppins-Regular;
  font-size: 15px;
  color: #808080;
  line-height: 1.2;
  text-align: right;

  position: absolute;
  top: 14px;
  left: -105px;
  width: 80px;

}
/*-------------------------*/
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

/*FOcos*/
.label-input100 {
  font-family: Poppins-Regular;
  font-size: 15px;
  color: #808080;
  line-height: 1.2;
  text-align: right;

  position: absolute;
  top: 14px;
  left: -105px;
  width: 80px;

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


/*//////////////////////////////////////////////////////////////////
[ Utility ]*/
.txt1 {
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1.4;
  color: #999999;
}

/*---------------------------------------------*/

.input100:focus + .focus-input100::before {
  width: 100%;
}

.has-val.input100 + .focus-input100::before {
  width: 100%;
}
/*==================================================================
[ Restyle Checkbox ]*/

.input-checkbox100 {
  display: none;
}

.label-checkbox100 {
  font-family: Poppins-Regular;
  font-size: 13px;
  color: #999999;
  line-height: 1.4;

  display: block;
  position: relative;
  padding-left: 26px;
  cursor: pointer;
}

.label-checkbox100::before {
  content: "\f00c";
  font-family: FontAwesome;
  font-size: 13px;
  color: transparent;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  background: #fff;
  border: 1px solid #e6e6e6;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}

.input-checkbox100:checked + .label-checkbox100::before {
  color: #57b846;
}

/*------------------------------------------------------------------
[ Responsive ]*/

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
</style>
