<template>
  <section>
    <v-container fluid>
      <v-card width="100%">
        <v-layout row wrap justify-space-between align-end ma-3>
          <v-flex pa-2>
            <h1 class="display-1 b">Jobs</h1>
          </v-flex>
          <v-flex pa-2>
            <router-link to="/vacancies/categories" class="link title"
              >View as a job seeker</router-link
            >
          </v-flex>
          <v-flex pa-2>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-flex>
          <v-flex pa-2>
            <div class="text-right">
              <v-btn
                color="primary"
                class="text-capitalize"
                @click="$router.push('/form')"
              >
                Add Job
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
        <v-divider />
        <v-data-table :headers="headers" :items="items" :search="search">
          <template v-slot:item.action="{ item }">
            <v-btn text class="text-capitalize body-1 info--text">View</v-btn>
            <v-btn text class="text-capitalize body-1 primary--text"
              >Edit</v-btn
            >
            <v-btn text class="text-capitalize body-1 red--text">Delete</v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Created At",
          align: "start",
          sortable: false,
          value: "date",
        },
        { text: "Application Start Date", value: "startDate" },
        { text: "Application End Date", value: "endDate" },
        { text: "Job Title", value: "title" },
        { text: "Category", value: "category" },
        { text: "Company", value: "owner" },
        { text: "Job Descrition", value: "description" },
        { text: "Action", value: "action", align: "center" },
      ],
      items: [
        {
          date: new Date().toDateString(),
          startDate: new Date().toDateString(),
          endDate: new Date().toDateString(),
          title: "Lorem Ipsum",
          category: "Lorem ipsum",
          owner: "Addis Ababa University",
          description: "Lorem ipsum doler sit amet",
          status: "Pending",
        },
        {
          date: new Date().toDateString(),
          startDate: new Date().toDateString(),
          endDate: new Date().toDateString(),
          title: "Lorem Ipsum",
          category: "Lorem ipsum",
          owner: "Addis Ababa University",
          description: "Lorem ipsum doler sit amet",
          status: "Pending",
        },
        {
          date: new Date().toDateString(),
          startDate: new Date().toDateString(),
          endDate: new Date().toDateString(),
          title: "Lorem Ipsum",
          category: "Lorem ipsum",
          owner: "Addis Ababa University",
          description: "Lorem ipsum doler sit amet",
          status: "Pending",
        },
      ],
    };
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
}
</style>