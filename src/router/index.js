import { createRouter, createWebHistory } from 'vue-router';
import PostsComp from '@/components/PostsComp.vue';
import SinglePost from '@/components/SinglePost.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'all_posts',
        component: PostsComp
    }, {
        path: '/posts/:id',
        name: 'post',
        component: SinglePost,
        props: true
    }]
})