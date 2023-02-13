<template>
    <div class="slide-show" @click.stop>
        <p class="slide-show-title" v-html="slideData.title"></p>

        <div class="slideshow_wrapper">
            <div class="slide" v-for="(slide, slideKey) in slideData.slides" :key="slideKey">
                <img :src="slide.url || slide" alt=""
                     :style="{top: (slide.top?slide.top+'px':'') }"
                     @click="slideShowIndex = slideKey">
            </div>
        </div>

        <vue-gallery-slideshow :images="slideData.slides"
                               :index="slideShowIndex"
                               @close="slideShowIndex = null"></vue-gallery-slideshow>
    </div>
</template>

<script>
    export default {
        name: "slideShow",
        props:['slideData'],
        data(){
            return{
                slideShowIndex:null,
            }
        }
    }
</script>