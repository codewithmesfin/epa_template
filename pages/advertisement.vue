<template>
  <section>
    <v-container fluid>
      <v-card width="100%">
        <v-layout row wrap justify-space-between align-end ma-3>
          <v-flex pa-2>
            <h1 class="display-1 b">Advertisement</h1>
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
              <v-btn color="primary" class="text-capitalize">
                Add Advertisement
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
        { text: "Start Date", value: "startDate" },
        { text: "End Date", value: "endDate" },
        { text: "Title", value: "title" },
        { text: "Category", value: "category" },
        { text: "Owner", value: "owner" },
        { text: "Descrition", value: "description" },
        { text: "Status", value: "status" },
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