import Vuex from 'vuex'
import Nieto from './../components/Nieto.vue'

export default {
    
    computed:
    {
        ...Vuex.mapGetters({
            movies: 'FilterMovies'
        })
    },
    
    components:
    {
        Nieto
    }
        
   
} 