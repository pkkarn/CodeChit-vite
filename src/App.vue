<template>
  <div>
    <router-link tag="a" :to="{ name: 'all_posts' }">All Posts</router-link>
    <router-link tag="a" :to="{ name: 'post', params: { id: '1' } }">Single Post</router-link>

    <keep-alive>
      <router-view></router-view> 
    </keep-alive>
  </div>
</template>

<script>
import PostsComp from '@/components/PostsComp.vue'
export default {
  components: {
    PostsComp,
  }
}
</script>

<style lang="scss" scoped>

</style>