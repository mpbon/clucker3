require('./bootstrap');

Vue.component('addsong',{
    template: `
    <div class="card mt-4">
        <div class="card-body">

            <form>
                <h3>Cluck</h3>
                  <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" name="title" placeholder="Comment here" v-model="newSong.title">
                </div>

                 <button type="button" class="btn btn-primary" @click="$emit('songAdded', newSong)">Cluck it</button>
            </form>

    </div>

</div>
    `,
    data(){
        return {
            newSong: {
                title: "",
            }
        }
    }
})

Vue.component('song',{
    props: ['song'],

    methods: {
        likeText (song) {
            if ( song.liked )
                return 'Unlike';
            else
                return 'Like';
        }
    },

    template: `
        <div class="list-group-item list-group-item-action" v-bind:class="{'song-liked' : song.liked}">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{ song.title }}</h5>
            <div>
            <span class="badge badge-primary badge-pill" @click="$emit('songLiked', song)" v-text="likeText(song)">Like</span>
            </div>
            <div>
            <span class="badge badge-danger badge-pill" @click="$emit('songRemoved', song)">X</span>
            </div>
          </div>
          <p class="mb-1">{{ song.artist }}</p>
          <small><a :href="song.link_url">Link to Song</a></small>
       </div>
    `,
})

Vue.component('playlist',{
    template: `
        <div>
            <addsong @songAdded="addSong"></addsong>

            <div>
                <song v-for="(song, index) in songs"
                @songRemoved="removeSong"
                @songLiked="likeSong"
                :song="song"
                :key="index"
                ></song>
            </div>
        </div>
    `,
    data(){
        return{
            songs: [
                {
                    title: "hey",
                    artist: "there",
                    link_url: "buddy"
                },
                {
                    title: "hey",
                    artist: "there",
                    link_url: "buddy"
                }
            ]
        }
    },
    methods: {
        likeSong(song){
            var self = this;
                axios({
                    method: "post",
                    url: "/like",
                    data: song
                }).then(function(response){
                    self.fetchSongs();
                });
        },
        removeSong(song){
            var self = this;
                axios({
                    method: "post",
                    url: "/delete",
                    data: song
                }).then(function(response){
                    self.fetchSongs();
                });
        },
        fetchSongs(){
            var self = this;
            axios({
                method: 'get',
                url: '/songs'
            }).then(function(response){
                self.songs = response.data;
            });
        },
        addSong(song){
            axios({
                method: 'post',
                url: '/add',
                data: song,
            });
            this.fetchSongs();
        }
    },
    created() {
        this.fetchSongs();

    }
});

new Vue({
    el: "#app"

});
