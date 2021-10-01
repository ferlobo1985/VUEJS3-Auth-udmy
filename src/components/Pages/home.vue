<template>
    <div class="container">
    <br/>

        <div class="box-card">
            <div v-for="(article,index) in articles" :key="index">
                <div 
                    class="img_container"
                    v-bind:style="{ backgroundImage: `url(${require('@/assets/images/' + article.img)})` }"
                ></div>
                <div class="card-content">
                    <h4>{{ article.title}}</h4>
                    <div class="card-text">{{ article.content }}</div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import { posts } from '../Utils/posts.js';

    export default {
        data(){
            return {
                articles: posts
            }
        }
    }
</script>

