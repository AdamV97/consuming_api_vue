<template>
<div class="home-container">
  <div v-if="loaded">
    <div class="home-container-filter">
      <div class="post-filter">
        <post-filter :limit="limit"></post-filter>
      </div>
    </div>
    <div class="home-container-main">
      <div class="post-container">
        <div class="post-general" v-for="(post, index) in posts" :key="index"> 
           <router-link :to="{ name: 'postdata', params: {id: post.id}, query: {id: post.id}}">
            <post-general 
              :title="post.title"
              :id="post.id">
            </post-general>
           </router-link>
        </div>
      </div>
      <post-pagination :length="length" :activePage="page"></post-pagination>
    </div>
  </div>
  <div v-else>
    <h2>Loading...</h2>
  </div>
</div>
</template>

<script>

import PostGeneral from '../components/PostGeneral.vue'
import PostFilter from '../components/PostFilter.vue'
import PostPagination from '../components/PostPagination.vue'
import axios from 'axios'
import json from '../api.json'

export default {
  name: 'Home',
  components: {
    PostGeneral,
    PostFilter,
    PostPagination
  },
  data: () => ({
    loaded: false,
    posts: null,
    length: 10,
    page: 1,
    limit: 10,
    totalCount: null
  }),
  mounted () {
    this.updateCurrentPage(this.$store.state.currentPage, this.$store.state.currentLimit);
  },
  created: function() {
    // Create subscriptions so components would rerender after change to limit or page
    this.unsubscribe = this.$store.subscribe((action) => {
      if (action.type === 'setCurrentPage') {
        this.updateCurrentPage(action.payload, this.limit);
      }else if(action.type === 'setCurrentLimit') {
        this.updateCurrentPage(this.page, action.payload);
      }
    });
  },
  methods:{
    // Method for updating current view
    updateCurrentPage(page, limit){

      // Check if limit is changed and set pagination to page 1
      if(limit !== this.limit){
        page = 1;
      }

      axios({
        method: "GET",
        url: json.api_post + `?_page=${page}}&_limit=${limit}`,
        headers: { "content-type": "application/json" } 
      }).then(result => {
        // Change inital data 
        this.totalCount = result.headers['x-total-count'];
        this.posts = result.data;
        this.limit = parseInt(limit);
        this.page = parseInt(page);
        this.length = Math.round(this.totalCount / this.limit);
        this.loaded = true;
      }, error => {
        console.log(error);
      });
    }
  },
  beforeDestroy: function() {
      this.unsubscribe();
  },
}
</script>
<style scoped>
  .home-container>div{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .home-container-main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: flex-start;
  }
  .home-container-pagination{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .post-container{
    width: 80%;
  }
  .post-filter{
    position: fixed;
  }
  .post-general{
    border-radius: 4px;
    border: 1px solid rgb(126, 126, 126);
    margin-bottom: 5px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .post-general>a{
    color: black;
    text-decoration: none;
  }
  .post-general:hover{
    cursor: pointer;
    background-color: rgba(189, 189, 189, 0.5);
  }
  .home-container-filter{
    width: 30%;
  }
</style>
