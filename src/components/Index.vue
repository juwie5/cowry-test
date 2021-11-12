<template>
<div class="container">
  <div class="search"> 
    <div class="iconSearch" v-if="!showSearch"> 
      <label for="search"></label>
      <img src="../assets/search.svg" alt="search_icon" id="icon">
      <input type="text" class="input" v-model="query" placeholder="Search for photo" @change="searchCollection(), showSearch = !showSearch">
    </div> 
    <div v-else-if="showSearch">
     <h2>Search Results for "{{ query }}"</h2>
    </div>
    <div v-if="showSearch" @click="reset" class="reset"><img src="../assets/xicon.svg" alt=""></div>
  </div>  
  <div class="imagegrid">
    <masonry :cols="3" :gutter="5">
      <div v-for="item in unsplashData" :key="item.id" class="image" @click="handleImageClick(item)">
                <img :src="item.urls.regular" alt="">
                <div class="imagetext">
                  <h4>{{ item.user.name }}</h4>
                  <p>{{ item.user.location }}</p>   
                </div>
      </div>  
    </masonry>
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
    reset(){
      this.showSearch = false;
    },
    searchCollection(){
      this.showSearch = false; 
      const q = this.query || 'african';
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
  min-height: 25vh;
}

.search img {
  opacity: 0.5;
}

h2{
  color: #364765;
}
.reset{
  margin: 25px;
}

.input{
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


.iconSearch {
  position: relative;
}

#icon{
    position: absolute;
    left: 65px; 
    top: 38%;
  
}

.image {
  position: relative;
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


@media only screen and (min-width: 320px) and (max-width: 475px){
  .input{
    width: 50%;
  }

  .imagegrid{
    position: static;
  }
  
  #icon{
    top: 42%;
  }
  .imagetext{
    display: none;
  }
}

@media screen and (max-width: 600px){
  .input{
    width: 60%;
  }

  /* .imagegrid{
    position: static;
  }  */
}

</style>
