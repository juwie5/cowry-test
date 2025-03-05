<template>
  <transition name="fade">
    <div class="modal">
      <div class="background" @click="handleBackgroundClick"></div>
      <div class="slider">
        <div  @click="prev" class="slide-control left">
          <img src="../assets/left.svg" alt="" />
        </div>
        <div class="slider-inner">
          <transition-group :name="transitionEffect" tag="div" class="slider-container">
            <div
            v-for="(slide, index) in images"
            :key="`item-${index}`"
            :currentSlide="currentSlide"
            class="slider-item"
          > 
              <div class="content" v-if="currentSlide === index">
                <img :src="slide.urls.regular" alt="" />
                <div class="details">
                  <h3>{{ slide.user.name }}</h3>
                  <h5>{{ slide.user.location }}</h5>
                </div>
              </div>
          </div>
          </transition-group>
          <!-- <div
            v-for="(slide, index) in images"
            :key="`item-${index}`"
            :currentSlide="currentSlide"
            class="slider-item"
          >
            <transition :name="transitionEffect">
              <div class="content" v-if="currentSlide === index">
                <img :src="slide.urls.small" alt="" />
                <div class="details">
                  <h3>{{ slide.user.name }}</h3>
                  <h5>{{ slide.user.location }}</h5>
                </div>
              </div>
            </transition>
          </div> -->
          
        </div>
        <div  @click="next" class="slide-control right">
          <img src="../assets/right.svg" alt="" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    item: Object,
    images: Object,
    currentSlide: Number,
    direction: String
  },
  data() {
    return {};
  },

  computed: {
    transitionEffect(){
        return this.direction === "right" ? "slide-out" : "slide-in";
    }
  },

  methods: {
    handleBackgroundClick() {
      this.$emit("backgroundClick");
    },
    prev() {
        this.$emit("prev")
    },
    next(){
        this.$emit("next")
    }
  },
};
</script>

<style></style>
