<template>
  <transition name="fade"> 
    <div class="modal">
        <div class="background" @click="handleBackgroundClick"></div>
        <div class="content">
            <img :src="item.urls && item.urls.regular" alt="">
            <div class="details">
                {{ item.user.name }} - {{ item.user.location }}
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
    width: 450px;
    height: 500px;
    background-color: #fff;
    margin: 45px auto;
    position: relative;
}

.content img {
    height: 250px;
    width: 250px;
}
</style>