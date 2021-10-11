<template>
<div class="container">
  <div class="search">  
    <label v-if="!showSearch">
      <input type="text" class="input" label="search" v-model="query" placeholder="Search for photo" @change="searchCollection(), showSearch = !showSearch">
    </label>
    <div v-else-if="showSearch">
     <h2> Search Results for "{{ query }}"</h2>
    <router-link :to="''">Home</router-link>
    </div>
  </div>  
  <div class="imagegrid">
    <div v-for="item in unsplashData" :key="item.id" class="image" @click="handleImageClick(item)">
              <img :src="item.urls.regular" alt="">
              <div class="imagetext">
                <h4>{{ item.user.name }}</h4>
                <p>{{ item.user.location }}</p>   
              </div>
    </div>  
  </div>
  <modal v-if="showModal" @backgroundClick="showModal = false" :item="selectedImage" />
</div>
</template>

<script>
import { search } from "@/services/unsplash.js"
import Modal from "@/components/Modal";

export default {
  name: 'Index',
  components: {
    Modal,
  },
  data() {
    return {
       query:'',
       unsplashData: [],
       showModal: false,
       selectedImage: {},
       showSearch: true, 
    }
  },

  mounted() {
    this.searchCollection();
  },

  methods:{
    getPhotos(searchCollection,){

    },
    handleImageClick(img) {
      this.selectedImage = img;
      this.showModal = true;
    },

    searchCollection(){
      this.showSearch = false; 
      const q = this.query ||'african';
           const param = {
               query: q,
               page: 1,
               per_page: 9
           }
           search(param).then(res => {    
           this.unsplashData = res.results
           })
       }       
   }
   
}
</script>


<style>
/* @import '@/assets/reset.css';  */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
html,
body{
  font-family:  'Open Sans', sans-serif;
  padding: 0;
  margin: 0;
  width: 100%;
} 

.search {
  display: flex;
  justify-content: center;
  background-color: #DDE2E9;
  position: relative;
  height: 25vh;
}

.search input{
margin: 55px;
padding: 5px 0 5px 55px;
width: 850px;
font-size: 16px;
outline: none;
border: none;
height: 40px;
border-radius:4px;
}

.imagegrid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  padding: 15px;
  top: 130px;
}

/* 
.grid{
  position: absolute;
  top: 130px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: masonry;
} */

/* .grid.imagegrid > div:nth-child(1){
  opacity: 0.7;
} */

label {
  position: relative;
}

label:before {
  content: "";
  opacity: 35%;
  position: absolute;
  left: 75px;
  top: 0;
  bottom: 20px;
  width: 25px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill-rule='evenodd'%3E%3Cpath d='M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0'%3E%3C/path%3E%3C/svg%3E") center / contain no-repeat;
}

.image {
  position: relative;
  width: 350px;
  height: 350px;
  margin: 15px;
  
}

.image img {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}

.imagetext {
  position: absolute;
  bottom: 0;
  left: 0;
  color: white;
  padding-left: 15px;
  padding-right: 15px;
}

.imagetext h4{
  margin-bottom: 0;
}

.imagetext p{
  margin-top: 0;
}


</style>
