<template>
  <div>
    <div>
      <label>Show: </label>
      <select v-model="selected" @change="onChange($event)">
        <option value="10">10 posts</option>
        <option value="20">20 posts</option>
        <option value="50">50 posts</option>
        <option value="100">100 posts</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    selected: null
  }),
  props:{
    'limit' : Number,
  },
  created(){
    this.selected = this.limit;
  },
  methods: {
    onChange(e){
      console.log(e.target.value);
      localStorage.setItem('currentLimit', parseInt(e.target.value));
      this.$store.commit('setCurrentLimit', parseInt(e.target.value));
    }
  }
}
</script>