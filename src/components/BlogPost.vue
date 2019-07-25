<script>
import { butter } from "@/buttercms";
export default {
  name: "post-content",
  data() {
    return {
      post: {}
    };
  },
  methods: {
    getPost() {
      butter.post
        .retrieve(this.$route.params.slug)
        .then(res => {
          this.post = res.data;
        })
        .catch(res => {
          console.log(res);
        });
    }
  },
  created() {
    this.getPost();
  }
};
</script>

<template>
  <div id="post-content">
    <section class="section">
      <div class="columns is-centered">
        <div class="column is-half">
          <h1 class="subtitle is-3">{{ post.data.title }}</h1>
          <div v-html="post.data.body"></div><br/>
          <a @click="$router.go(-1)">Voltar...</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
#post-content {
  text-align: center;
  margin-top: 50px;
  a {
    color: #718aef;
    &:hover {
      color: #4e6ce2;
    }
  }
}
</style>
