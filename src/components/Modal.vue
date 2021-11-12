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
.modal{
    position: fixed;
    left: 0;
    top:0;
    height: 100%;
    width: 100%;
}

.background {
    position: absolute;
    left: 0;
    top:0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.5);
}

.content {
    width: 70%;
    height: 80%;
    background-color: #fff;
    margin: 45px auto;
    position: relative;
    border-radius: 5px;
    }

.content img {
    height: 85%; 
    width: 100%;
    border-radius: 5px 5px 0 0;
    object-fit: cover; 
}

.post{
    position: relative;
    top: 5%;
    left: 87%;
}
.details{
    color: #364765;
}

.details h3{
    margin: 8px 20px 0 20px;
}
.details h5{
    margin: 0 20px 0 20px;
    opacity: 0.7;
}
</style>