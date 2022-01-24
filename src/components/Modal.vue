<template>
  <transition name="fade"> 
    <div class="modal">
        <div class="background" @click="handleBackgroundClick">  
        </div>
        <div class="post" @click="handleBackgroundClick">
         <img src="../assets/xicon.svg" alt="">
        </div>
        <div class="content">
            <img :src="item.urls && item.urls.regular" alt="">
            <div class="details">
                <h3>{{ item.user.name }}</h3>  
                <h5>{{ item.user.location }}</h5>
            </div>
        </div>
       
    </div>
  </transition> 
</template>

<script>

export default {
name: 'Modal',
props: {
    item: Object
},
data(){
    return{

    }
},

methods: {
    handleBackgroundClick() {
        // console.log('bg click');
        this.$emit('backgroundClick');
    }
}
}
</script>

<style>

</style>