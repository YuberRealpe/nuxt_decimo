<template>
  <!-- <div>
        <a href="/" >Inicio</a>
        <a href="/contacto" >Contact</a>
    </div>
  -->
  <b-navbar variant="success" type="dark" toggleable="lg">
    <b-navbar-brand href="/">MyTenda</b-navbar-brand>
    <b-nav-toggle target="menu"></b-nav-toggle>
    <b-collapse is-nav id="menu">
      <b-navbar-nav>
        <b-nav-item href="/contacto">Contacto</b-nav-item>
        <b-nav-item href="/productos">Productos</b-nav-item>
        <b-nav-item href="/categorias">Categorias</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {};
</script>
