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
<!--
  <div id="post">
    <section class="section">
      <div class="container is-fullhd" v-for="(post,index) in posts" :key="post.slug + '_' + index">
        <router-link :to="'/blog/' + post.slug">
          <h3>{{ post.title }}</h3>
          {{ post.summary }}
          <br />
        </router-link>
      </div>
    </section>
  </div> -->
<tbody>
  <section class="section">
    <div class="tile is-ancestor" v-for="(post,index) in posts" :key="post.slug + '_' + index">
      <div class="tile is-vertical is-3 "></div>
      <div class="tile is-vertical is-6 ">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title is-4">{{ post.title }}</p>

              <figure class="image is-48x48">
                 <img :src="post.author.profile_image"> 
              </figure> 
              <p class="subtitle is-6">{{'Por: ' + post.author.first_name + ' ' + post.author.last_name}}</p>

              <div class="content">
                <p>{{ post.summary }}</p>
              </div>
            </article>
          </div>
      </div>
      <div class="tile is-vertical is-3 "></div>
    </div>
  </section>  

  <!--
  <div class="columns is-mobile is-centered">
    <div class="column is-half">
      <p class="bd-notification is-primary">
        <code class="html">is-half</code><br>
      </p>
    </div>
  </div>
  -->

</tbody>


</template>
