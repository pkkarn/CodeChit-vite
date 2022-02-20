<template>
    <div>
        <input type="text" v-model="search" @keyup="searchPosts" />
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup (props, { emit }) {
        const data = reactive({
            search: '',
        });

        function searchPosts() {
            console.log('Game of thrones')
            emit('searchPostEv', data.search);
        }

        return {
            ...toRefs(data),
            searchPosts
        }
    }
}
</script>

<style lang="scss" scoped>

</style>