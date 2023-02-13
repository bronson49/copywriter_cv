<template>
    <div class="main-content">

        <p class="main-content-title" v-if="!category[0].articles[0].about">Приклади робіт</p>
        <div class="category-wrapper"
             v-for="(item, categoryIndex, key) in category" :key="key">
            <div class="category-title" v-text="item.categoryTitle"></div>
            <article class="content-item"
                     v-for="(article, index, articleKey) in item.articles" :key="articleKey"
                     :class="{'about-item':article.about, 'slide-show-section':article.slideShow}"
                     @click="setIndex(index, categoryIndex, article.about)"
            >
                <p class="title" v-if="!article.link" v-html="article.title"></p>

                <p class="description" v-if="!article.link" v-html="article.subInfo"></p>

                <a target="_blank" class="article-link"
                   :href="article.content"
                   v-if="article.link"
                   @click.stop>
                    <p class="title"  v-text="article.title"></p>
                    <p class="description"  v-text="article.subInfo"></p>
                    <img src="images/open-link.png" alt="" class="open-link">
                </a>

                <div class="about-content" v-html="article.about"></div>

                <slideShow  v-if="article.slideShow" :slideData="article.slideShow"></slideShow>
            </article>
        </div>



        <article class="additional-info" v-if="false && activeSection === 'smm'">
            <p>
                Більше прикладів:
                <a href="https://www.instagram.com/poehalisnamiofficial/" target="_blank">https://www.instagram.com/poehalisnamiofficial/</a>
                <br>
                Період ведення сторінки  <u>с 19 листопада 2020 по 29 березня 2021</u>
            </p>
            <p>
            *Теми постів підбирала самостійно, з дотриманням вимог маркетолога (реклама турів у кожній публікації)
            </p>
        </article>
        <article class="additional-info" v-else>
            <p>
               <b>*Статті готувалися мовою, яка була вказана у ТЗ.</b>
            </p>
            <p>
            *Усі тексти є унікальними на момент їх підготовки. У деяких роботах (де це було необхідно) вписані ключові слова, а також враховано вимоги SE0-спеціаліста або маркетолога.
            </p>
            <p style="font-size: 18px;margin-top: 20px">На запит надам більше прикладів.</p>
        </article>
    </div>
</template>

<script>
    import contentData from "../data/content_data";
    import slideShow from "./slideShow";
    export default {
        name: "contentList",
        props:['activeSection'],
        components:{slideShow},
        data(){
            return {
                isAbout:false,
            }
        },
        computed:{
            category(){
                return contentData[this.activeSection]
            }
        },
        methods:{
            setIndex(index, categoryIndex, isAboutCategory){
                if (isAboutCategory) return;
                this.$emit('setArticleIndex', {index, categoryIndex})
            }
        }
    }
</script>