<template>
  <!-- https://www.freepik.com/vectors/background -> Background vector created by starline - www.freepik.com -->
  <div class="main-container">
    <navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from './components/Navigation';

export default {
  name: 'App',
  components: {
    navigation: navigation
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');

  #app {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  body{
    font-family: Roboto;
    margin: 0px;
    background-image: url('../public/img/18410.jpg');
    background-size: cover;
  }
  .main-container{
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

</style>
