<template>
  <v-container>
    <v-card height="100%" flat>
      <v-card-text>
        <v-layout row wrap justify-space-between my-2>
          <v-flex xs12 md6 pa-2>
            <v-text-field label="Title" hide-details outlined dense />
          </v-flex>
          <v-flex xs12 md6 pa-2>
            <v-text-field label="Subtitle" hide-details outlined dense />
          </v-flex>
          <v-flex xs12 pa-2>
            <vue-editor v-model="content"></vue-editor>
          </v-flex>
          <v-flex xs12 sm6 md2 pa-2>
            <v-btn block class="primary text-capitalize">Submit</v-btn>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor,
  },

  data() {
    return {
      content: "<p class='grey--text'>Create your content here!</p>",
    };
  },
};
</script>