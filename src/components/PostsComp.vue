<template>
    <div id="posts">
        <h1>Posts</h1>
        <SearchPost @searchPostEv="searchPostByKeyword" />
        Post Count : {{postsCount}}
        <div class="post" @click="singlePost(post)" v-for="post in posts" :key="post.id">
            <p><strong>Title</strong>{{post.title}}</p>
            <div v-html="highlightSearched(post.body)"></div>
            <p><strong>content</strong> {{post.body.slice(0,10)}}...</p>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import posts from '@/data/posts.json'
import { useRouter } from 'vue-router';
import SearchPost from '@/components/SearchComp.vue'

export default {
    components: {
        SearchPost,
    },
    setup () {
        const data = reactive({
            posts,
            postsCount: posts.length,
            searchedWord: '',
        })

        const dataProp = toRefs(data)

        const router = useRouter();

        function searchPostByKeyword(keyword) {
            data.posts = posts.filter(post => {
                const keywordLower = keyword.toLowerCase()
                return post.title.toLowerCase().includes(keywordLower) || post.body.toLowerCase().includes(keywordLower)
            })
            data.searchedWord = keyword
            data.postsCount = data.posts.length
        }

        function highlightSearched(content) {
            const highlightedContent = content.split(' ').map((word) => {
                if(word.toLowerCase().includes(data.searchedWord.toLowerCase()) && data.searchedWord.length > 0) {
                    return `<span style="background-color:red;" class="highlight">${word}</span>`
                } else {
                    return word
                }
            })
                console.log('game')

            return highlightedContent.join(' ')
        }

        function singlePost(post) {
            router.push({name : 'post', params: { id : post.id, post: post } })
        }

        return {
            ...dataProp,
            searchPostByKeyword,
            highlightSearched,
            singlePost
        }
    }
}
</script>

<style lang="scss" scoped>
#posts {
    margin: 0 auto;
    width: 80%;
}
.post {
    border: 1px solid $color-black;
    border-radius: $custom-radius;
    padding: $custom-padding;
    margin: $custom-margin 0;
}
.highlight {
    background-color: yellow;
    color: red;
}
</style>