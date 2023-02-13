<template>
    <div class="nav-bar" style="background-image: url('./images/orange-spiral.svg')">
        <div class="main-info">
            <img class="portret" src="images/portret.jpg" alt="">
            <p class="link">
                <img src="images/phone.svg" alt="" >
                <a href="tel:0635767838">+38(063) 576 78 38</a>
            </p>
            <p class="link">
                <img src="images/mail.svg" alt="" >
                <a href="mailto:test@test.test">levchenkotatiana93@gmail.com</a>
            </p>
            <p class="link">
                <img src="images/tg.svg" alt="" >
                <a href="tg://resolve?domain=tetianka_sh">@tetianka_sh</a>
            </p>
            <p class="link">
                <img src="images/insta-logo.svg" alt="" >
                <a href="https://www.instagram.com/tetyanka_sh/">tetyanka_sh</a>
            </p>
            <p class="p-title"><strong>Головне про мне:</strong>  </p>
            <p>
                Вища філологічна освіта (НПУ ім. Драгоманова; факультет української філології);
                <br>
                Понад 5 років досвіду роботи;
                <br>
                м. Київ.
                <br>
            </p>

        </div>

        <div class="menu-wrapper">
            <p
                v-for="(item, key) in sections" :key="key"
                v-text="item.title"
                :class="{selected:activeSection===item.name}"
                @click="setSection(item.name)"
            ></p>
            <!--<p>
                <a href="http://www.shevchenkotatiana.kiev.ua/" target="_blank">SMM копірайтінг</a>
            </p>-->
        </div>
    </div>
</template>

<script>
    import nav_sections from "../data/nav_sections";
    export default {
        name: "navBar",
        props:['activeSection'],
        data(){
            return {
                sections:nav_sections
            }
        },
        methods:{
            setSection(name){
                this.$emit('setSection', name)
            }
        }
    }
</script>