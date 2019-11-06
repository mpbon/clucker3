require('./bootstrap');
window.Vue = require('vue');

Vue.component('addcluck',{
    template: `
    <div class="card mt-4">
        <div class="card-body">

            <form>
                <h3>Cluck</h3>
                  <div class="form-group">
                    <label for="comment">Comment</label>
                    <input type="text" class="form-control" name="comment" placeholder="Comment here" v-model="newComment.comment">
                </div>

                 <button type="button" class="btn btn-primary" @click="$emit('cluckAdded', newComment)">Cluck it</button>
            </form>

    </div>

</div>
    `,
    data(){
        return {
            newComment: {
                comment: "",
            }
        }
    }
})

Vue.component('cluck',{
    props: ['cluck'],

    methods: {
        likeText (cluck) {
            if ( cluck.liked )
                return 'Unlike';
            else
                return 'Like';
        }
    },

    template: `
        <div class="list-group-item list-group-item-action" v-bind:class="{'cluck-liked' : cluck.liked}">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{ cluck.comment }}</h5>
            <div>
            <span class="badge badge-primary badge-pill" @click="$emit('cluckLiked', cluck)" v-text="likeText(cluck)">Like</span>
            </div>
            <div>
            <span class="badge badge-danger badge-pill" @click="$emit('cluckRemoved', cluck)">X</span>
            </div>
          </div>
          <p class="mb-1">{{ cluck.artist }}</p>
          <small><a :href="cluck.link_url">Link to cluck</a></small>
       </div>
    `,
})

Vue.component('commentlist',{
    template: `
        <div>
            <addcluck @cluckAdded="addCluck"></addcluck>

            <div>
                <cluck v-for="(cluck, index) in clucks"
                @cluckRemoved="removeCluck"
                @cluckLiked="likeCluck"
                :cluck="cluck"
                :key="index"
                ></cluck>
            </div>
        </div>
    `,
    data(){
        return{
            clucks: [
                {
                    comment: "hey",
                    artist: "there",
                    link_url: "buddy"
                },
                {
                    comment: "hey",
                    artist: "there",
                    link_url: "buddy"
                }
            ]
        }
    },
    methods: {
        likeCluck(cluck){
            var self = this;
                axios({
                    method: "post",
                    url: "/like",
                    data: cluck
                }).then(function(response){
                    self.fetchClucks();
                });
        },
        removeCluck(cluck){
            var self = this;
                axios({
                    method: "post",
                    url: "/delete",
                    data: cluck
                }).then(function(response){
                    self.fetchClucks();
                });
        },
        fetchClucks(){
            var self = this;
            axios({
                method: 'get',
                url: '/clucks'
            }).then(function(response){
                self.clucks = response.data;
            });
        },
        addCluck(cluck){
            axios({
                method: 'post',
                url: '/add',
                data: cluck,
            });
            this.fetchClucks();
        }
    },
    created() {
        this.fetchClucks();

    }
});

new Vue({
    el: "#app"

});
