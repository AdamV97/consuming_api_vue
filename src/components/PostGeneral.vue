<template>
  <div class="post-section">
    <div class="post-section-id">
      <h5>{{id}}</h5>
    </div>
    <div class="post-section-title">
      <h5>{{title}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    'title' : String,
    'id': Number
  }
}
</script>

<style scoped>
  .post-section{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .post-section-id{
    width: 10%;
  }
  .post-section-id>h5{
    float: left;
  }
  .post-section-title{
    width: 60%;
    font-size: 18px;
  }
  .post-section-title>h5{
    text-transform: capitalize;
  }
</style>