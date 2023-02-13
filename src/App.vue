<template>
    <div id="app">
        <div class="top-bg" style="background-image: url('./images/top_bg.jpg')">
            <div class="text">
                <h1 :class="{show:showTitleText}">Тетяна Шевченко</h1>
                <h2 :class="{show:showTitleText}">Редактор &#x2022; Копірайтер &#x2022; Контент-мейкер </h2>
            </div>
        </div>
        <overlay
                :activeSection="activeSection"
                :activeArticleIndex="activeArticleIndex"
                :activeCategoryIndex="activeCategoryIndex"
                :showOverlay="showOverlay"
                @close="showOverlay=false"></overlay>

        <div class="content-wrapper">
            <navBar
                    @setSection="setSection"
                    :activeSection="activeSection"></navBar>
            <contentList
                    @setArticleIndex="setArticleIndex"
                    :activeSection="activeSection"></contentList>
        </div>
    </div>
</template>

<script>
    import navBar from "./components/navBar";
    import contentList from "./components/contentList";
    import overlay from "./components/overlay";

    export default {
        name: 'App',
        components: {
            navBar, contentList, overlay
        },

        data() {
            return {
                activeSection: 'marketing',
                activeArticleIndex: 0,
                activeCategoryIndex: 0,
                showOverlay: false,
                showTitleText:false,
            }
        },
        mounted() {
            setTimeout(()=>{
                this.showTitleText = true
            }, 500);
        },
        methods: {
            setSection(name) {
                this.activeSection = name
            },
            setArticleIndex({index, categoryIndex}) {
                this.activeArticleIndex = index;
                this.activeCategoryIndex = categoryIndex;
                this.showOverlay = true;
            },

        }
    }
</script>