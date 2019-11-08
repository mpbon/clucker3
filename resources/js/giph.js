
            // Giphy API key
            var myGiphyAPIKey = 'yb7EkGKFtd6q7molvP5YMr34LiqK58D5';

            Vue.component( 'giphy-results', {
                data: function () {
                    return {
                        apptitle: 'Vue.JS GIPHY API In-Class Example',
                        searchterm: '',
                        giphyResults: {},
                        isList: false
                    }
                },
                methods: {
                    giphySearch ( term )
                    {
                        axios.get( 'https://api.giphy.com/v1/gifs/search?api_key='+myGiphyAPIKey+'&q='+this.searchterm )
                              .then( response => {
                                  this.giphyResults = response.data.data;
                             } );
                    },
                    toggleListView ()
                    {
                        this.isList = !this.isList;
                    },
                    giphyImage (images)
                    {
                        if ( this.isList === true )
                        {
                            return images.original.url;
                        }
                        else {
                        {
                            return images.fixed_width.url;
                        }
                        }
                    }
                },
                template: `
                    <div id="giphy-results">
                        <h1 v-text="apptitle" class="title is-1"></h1>
                        <form @submit.prevent="giphySearch">
                            <input v-model="searchterm" type="search" class="input" placeholder="Enter a Search Term.">
                            <input type="submit" value="Submit Search" class="input">
                            <button @click="toggleListView" class="input has-text-centered">Toggle Grid/List View</button>
                        </form>
                        <p>Current Search Term: {{ searchterm }}</p>
                        <ul class="columns">
                            <li v-for="gif in giphyResults" class="column" v-bind:class="{ 'is-full' : isList, 'is-one-quarter' : !isList }">
                                <a v-bind:href="gif.url" target="_blank">
                                    <img v-bind:src="giphyImage(gif.images)"
                                    v-bind:alt="gif.slug">
                                </a>
                            </li>
                        </ul>
                    </div>
                `
            } );
