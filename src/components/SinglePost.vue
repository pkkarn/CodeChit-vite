<template>
    <div>
        <h1>{{post.title}}</h1>
        <div v-html="post.body"></div>
        <div>By <strong>{{user.name}}</strong></div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import posts from '@/data/posts.json'

export default {
    setup (props) {

        console.log(props.id)
        const route = useRoute()
    
        const state = reactive({
            post: [],
            user: {}
        })

        const post = posts.find(r => r.id = route.params.id)
        axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`).then(res => {
            state.user = res.data
            state.post = post
        })

       
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>