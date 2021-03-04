export default {
    
    props: {movie:{type:Object,required:true}},

    methods:
    {
        IsAvailable()
        {
            if (this.movie.available === true) {
                return ("Disponible");
            }else{
                return ("No disponible");
            }
        },

        AddClass()
        {
            if (this.movie.available === true) {
                return "text-success";
            }else{
                return "text-danger";
            }
        }
    }

} 