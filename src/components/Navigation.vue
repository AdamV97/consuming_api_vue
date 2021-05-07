<template>
  <div>
    <nav class="main-navigation">
      <router-link class="" :to='{name: "home"}'>HOME</router-link>
    </nav>
  </div>
</template>

<style scoped>
  .main-navigation{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: rgb(202, 202, 202);
    height: 3rem;
    margin-bottom: 15px;
    border-radius: 4px;
  }
  .main-navigation>a{
    margin-left: 15px;
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-weight: bold;
    /* Transforation efect */
    -webkit-transition: font-size 0.5s;
    -moz-transition: font-size 0.5s;
    -o-transition: font-size 0.5s;
    transition: font-size 0.5s;
  }
  .main-navigation>a:hover{
    font-size: 25px;
  }
</style>