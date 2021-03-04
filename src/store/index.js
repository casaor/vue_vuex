import Vue from 'vue'
import Vuex from 'vuex'
import movies from './../assets/movies.js'

Vue.use(Vuex);

export default new Vuex.Store(
  {
    state:
    {
      movies: movies,
      filters: {
        search: '',
        available: true
      } 
    },
    mutations: {
      SetSearch (state,search){
        state.filters.search = search
      },
      SetAvailable (state){
        state.filters.available = !state.filters.available
      }
    },
    getters: {
      FilterMovies (state){
        let movies = state.movies()
        let moviesRefresh = []
        if (state.filters.search.length > 2){
           for (const movie of movies){
             if(movie.available === state.filters.available){
               if (movie.title.toLocaleLowerCase().includes(state.filters.search)){
                  moviesRefresh.push(movie)
               }
             }
           }
           movies = moviesRefresh
           return movies 
        }else{
          for (const movie of movies){
            if(movie.available === state.filters.available){
              moviesRefresh.push(movie)
            }
          }
          movies = moviesRefresh
          return movies
        }
      }
    }

  });
