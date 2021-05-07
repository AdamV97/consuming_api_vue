<template>
  <div class="pagination-container">
    <div class="pagination">
      <div class="pagination-item" v-for="index in length" :key="index" @click="paginate(index)">
        <div v-if="index === activePage" class="active">
          <label>{{index}}</label>
        </div>
        <div v-else>
          <label>{{index}}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    'length' : Number,
    'activePage': Number
  },
  methods: {
    paginate(page){
      localStorage.setItem('currentPage', page);
      this.$store.commit('setCurrentPage', page);
    }
  }
}
</script>

<style scoped>
  .pagination-container{
    width: 80%;
  }
  .pagination{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
  }
  .pagination-item{
    list-style: none;
    width: 1.7rem;
    height: 1.7rem;
    background-color: rgb(185, 185, 185);
    border-radius: 4px;
    border: 2px solid rgb(121, 121, 121);
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pagination-item:hover,
  .pagination-item>div>label:hover{
    cursor: pointer;
    background-color:rgb(216, 250, 216);
  }
  .active{
    background-color:rgba(216, 250, 216, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .active:hover{
    cursor: default;
  }
</style>