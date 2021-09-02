<template>
<div class="container">
  <div class="search">  
    <label v-if="!showSearch">
      <input type="text" class="input" label="search" v-model="query" placeholder="Search for photo" @change="searchCollection(), showSearch = !showSearch">
    </label>
    <div v-else-if="showSearch">
     <h2> Results for "{{ query }}"</h2>
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
               per_page: 7
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
html,
body{
  padding: 0;
  margin: 0;
  width: 100%;
} 

.imagegrid {
  /* float:left;
  width: 150px;
  height: 188px;
  margin: 20px 0 0 5px; */
  padding: 15px;
}


.search {
  display: flex;
  justify-content: center;
  background-color: #DDE2E9;
}

.search input{
margin: 55px;
padding: 5px 0 5px 35px;
width: 850px;
font-size: 16px;
}

label {
  position: relative;
}

label:before {
  content: "";
  opacity: 35%;
  position: absolute;
  left: 65px;
  top: 0;
  bottom: 0;
  width: 20px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill-rule='evenodd'%3E%3Cpath d='M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0'%3E%3C/path%3E%3C/svg%3E") center / contain no-repeat;
}

.image {
  position: relative;
  width: 150px;
  height: 150px;
  display: block;
  float: left;
  margin-right: 15px;
}

.image img {
  height: 100%;
  width: 100%;
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


</style>
