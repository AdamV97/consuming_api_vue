<template>
  <div class="post-data-container">
    <div class="post-data-main" v-if="loaded">
      <div class="post-data-main-title-container">
        <label class="post-data-main-title">{{postData.title}}</label>
      </div>
      <div class="post-data-main-text-container">
        <label class="post-data-main-text">{{postData.body}}</label>
      </div>
    </div>
    <div v-else-if="error">
      <h3>Post with that ID doesn't exist!</h3>
    </div>
    <div v-else>
      <h2>Loading....</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import json from '../api.json'

export default {
  props:{
    'id' : Number,
  },
  data: () => ({
    postData: null,
    loaded: false,
    error: false
  }),
  mounted(){
    // In case that user reached this page via link and not through application
    if(this.$route.params.id === undefined){
      this.$route.params.id = this.$route.query.id;
    }
    this.getPostData(this.$route.params.id);
  },
  methods:{
    getPostData(id){
      axios({ 
        method: "GET",
        url: json.api_post_data + id,
        headers: { "content-type": "application/json" } 
      }).then(result => {
        this.postData = result.data;
        this.loaded = true;
      }, error => {
        this.error = true;
        console.log(error);
      });
    }
  }
}
</script>
<style scoped>
  .post-data-container{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .post-data-main{
    border: 1px solid gray;
    width: 70%;
    border-radius: 4px;
    text-align: center;
  }
  .post-data-main-title-container{
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
  }
  .post-data-main-text-container{
    padding: 10px;
  }
  .post-data-main-title{
    text-transform: uppercase;
    font-size: 19px;
    font-weight: bold;
  }
  .post-data-main-text{
    text-transform: capitalize;
    font-size: 18px
  }
  
</style>