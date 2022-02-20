import { createStore } from 'vuex';
import posts from '@/store/posts'

export default createStore({
    state: {
        state_name: 'State PK Karn'
    },

    module: {
        posts
    }
})