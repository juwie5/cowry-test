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
      <div v-show="!isloaded" class="loader">
            <div v-for="index in 9" :key="index">
               <div class="bigbox">
                 <div class="rect1"></div>
                 <div class="rect2"></div>
               </div>
            </div>
        </div> 
    <masonry :cols="3" :gutter="5">
      <div v-for="item in unsplashData" :key="item.id" class="image" @click="handleImageClick(item)">
                <img :src="item.urls.regular" @load="onImgLoad" alt="">
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
       isloaded: false
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
      this.showSearch = false
      this.isloaded = false
      const q = this.query || 'african';
           const param = {
               query: q,
               page: 1,
               per_page: 9
           }
           search(param).then(res => {  
           this.unsplashData = res.results
          })
       },
       onImgLoad(){
         this.isloaded = true
        }      
   } 
}
</script>


<style lang="scss">

</style>
