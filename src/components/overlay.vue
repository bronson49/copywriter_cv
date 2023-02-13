<template>
    <div class="overlay"
         @click="close"
         :class="{show:showOverlay}">
        <div class="close"
             @click="close"
             v-text="'< Назад'"></div>
        <div class="wrapper scrollbar--custom"
             :class="{'iframe-wrapper':content.includes('<iframe')}"
             @click.stop
             ref="content_wrapper"
             v-html="content"></div>
    </div>
</template>

<script>
    import contentData from "../data/content_data";
    export default {
        name: "overlay",
        props: ['activeSection', 'activeCategoryIndex', 'activeArticleIndex', 'showOverlay'],
        computed:{
            content(){
                return contentData[this.activeSection][this.activeCategoryIndex].articles[this.activeArticleIndex].content
            }
        },
        methods:{
            close(){
                this.$refs.content_wrapper.scrollTo(0,0);
                this.$emit('close');
            }
        }
    }
</script>