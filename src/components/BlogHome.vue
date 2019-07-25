<script>
import { butter } from "@/buttercms";
export default {
  name: "blog-home",
  data() {
    return {
      posts: []
    };
  },
  methods: {
    getPosts() {
      butter.post
        .list({
          page: 1,
          page_size: 10
        })
        .then(res => {
          this.posts = res.data.data;
        });
    }
  },
  created() {
    this.getPosts();
  }
};
</script>

<template>
  <div class="container">
    <div id="flow">
      <span class="flow-1"></span>
      <span class="flow-2"></span>
      <span class="flow-3"></span>
    </div>

    <div class="section">
      <div class="row columns is-multiline">
        <div  class="column is-one-third" v-for="(post,index) in posts" :key="post.slug + '_' + index">
          <div class="card large">
            <div class="card-image">
              <figure class="image">
                <img :src="post.featured_image" />
              </figure>
            </div>
            <router-link :to="'/blog/' + post.slug">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img class="is-rounded" :src="post.author.profile_image" alt="Image" />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p
                      class="title is-4 no-padding"
                    >{{post.author.first_name + ' ' + post.author.last_name}}</p>
                    <p>
                      <span class="title is-6">
                        <a href="http://twitter.com/#">@maxmelodia</a>
                      </span>
                    </p>
                    <p class="subtitle is-6">{{post.published}}</p>
                  </div>
                </div>
                <div class="content">
                  {{ post.summary }}
                  <div class="background-icon">
                    <span class="icon-twitter"></span>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>
