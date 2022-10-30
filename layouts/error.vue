<template>
  <v-app dark>
    <div class="text-center">
      <div v-if="error.statusCode === 404">
        <v-img
          src="https://img.freepik.com/free-vector/coming-soon-construction-illustration-design_1017-31446.jpg?w=2000"
          lazy-src="https://picsum.photos/id/11/100/60"
          width="100%"
          height="100%"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </div>
      <h1 v-else>
        {{ otherError }}
      </h1>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "EmptyLayout",
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
