import Vuex from 'vuex'
import Nieto from './../components/Nieto.vue'
// import Fade from './../components/Fade.vue'

export default {
    
    computed:
    {
        ...Vuex.mapGetters({
            movies: 'FilterMovies'
        })
    },
    
    components:
    {
        Nieto,
        // Fade
    }
        
   
} 