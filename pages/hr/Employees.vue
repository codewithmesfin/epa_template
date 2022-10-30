<template>
  <section>
    <v-container fluid>
      <v-card width="100%">
        <v-layout row wrap justify-space-between align-end ma-3>
          <v-flex pa-2>
            <h1 class="display-1 b">Employees</h1>
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
                Add Employee
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
          text: "Full Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Email", value: "email" },
        { text: "Phone Number", value: "phone" },
        { text: "Gender", value: "gender" },
        { text: "Age", value: "age" },
        { text: "Salary", value: "balance" },
        { text: "Action", value: "action", align: "center" },
      ],
      items: [
        {
          balance: "$3,946.45",
          picture: "http://placehold.it/32x32",
          age: 23,
          name: "Bird Ramsey",
          gender: "male",
          company: "NIMON",
          email: "birdramsey@nimon.com",
          phone: "+25193348574",
        },
        {
          balance: "$2,499.49",
          picture: "http://placehold.it/32x32",
          age: 31,
          name: "Lillian Burgess",
          gender: "female",
          company: "LUXURIA",
          email: "lillianburgess@luxuria.com",
          phone: "+25193348574",
        },
        {
          balance: "$2,820.18",
          picture: "http://placehold.it/32x32",
          age: 34,
          name: "Kristie Cole",
          gender: "female",
          company: "QUADEEBO",
          email: "kristiecole@quadeebo.com",
          phone: "+25193348574",
        },
        {
          balance: "$3,277.32",
          picture: "http://placehold.it/32x32",
          age: 30,
          name: "Leonor Cross",
          gender: "female",
          company: "GRONK",
          email: "leonorcross@gronk.com",
          phone: "+25193348574",
        },
        {
          balance: "$1,972.47",
          picture: "http://placehold.it/32x32",
          age: 28,
          name: "Marsh Mccall",
          gender: "male",
          company: "ULTRIMAX",
          email: "marshmccall@ultrimax.com",
          phone: "+25193348574",
        },
        {
          balance: "$3,946.45",
          picture: "http://placehold.it/32x32",
          age: 23,
          name: "Bird Ramsey",
          gender: "male",
          company: "NIMON",
          email: "birdramsey@nimon.com",
          phone: "+25193348574",
        },
        {
          balance: "$2,499.49",
          picture: "http://placehold.it/32x32",
          age: 31,
          name: "Lillian Burgess",
          gender: "female",
          company: "LUXURIA",
          email: "lillianburgess@luxuria.com",
          phone: "+25193348574",
        },
        {
          balance: "$2,820.18",
          picture: "http://placehold.it/32x32",
          age: 34,
          name: "Kristie Cole",
          gender: "female",
          company: "QUADEEBO",
          email: "kristiecole@quadeebo.com",
          phone: "+25193348574",
        },
        {
          balance: "$3,277.32",
          picture: "http://placehold.it/32x32",
          age: 30,
          name: "Leonor Cross",
          gender: "female",
          company: "GRONK",
          email: "leonorcross@gronk.com",
          phone: "+25193348574",
        },
        {
          balance: "$1,972.47",
          picture: "http://placehold.it/32x32",
          age: 28,
          name: "Marsh Mccall",
          gender: "male",
          company: "ULTRIMAX",
          email: "marshmccall@ultrimax.com",
          phone: "+25193348574",
        },
        {
          balance: "$3,946.45",
          picture: "http://placehold.it/32x32",
          age: 23,
          name: "Bird Ramsey",
          gender: "male",
          company: "NIMON",
          email: "birdramsey@nimon.com",
          phone: "+25193348574",
        },
        {
          balance: "$2,499.49",
          picture: "http://placehold.it/32x32",
          age: 31,
          name: "Lillian Burgess",
          gender: "female",
          company: "LUXURIA",
          email: "lillianburgess@luxuria.com",
          phone: "+25193348574",
        },
        {
          balance: "$2,820.18",
          picture: "http://placehold.it/32x32",
          age: 34,
          name: "Kristie Cole",
          gender: "female",
          company: "QUADEEBO",
          email: "kristiecole@quadeebo.com",
          phone: "+25193348574",
        },
        {
          balance: "$3,277.32",
          picture: "http://placehold.it/32x32",
          age: 30,
          name: "Leonor Cross",
          gender: "female",
          company: "GRONK",
          email: "leonorcross@gronk.com",
          phone: "+25193348574",
        },
        {
          balance: "$1,972.47",
          picture: "http://placehold.it/32x32",
          age: 28,
          name: "Marsh Mccall",
          gender: "male",
          company: "ULTRIMAX",
          email: "marshmccall@ultrimax.com",
          phone: "+25193348574",
        },
        {
          balance: "$3,946.45",
          picture: "http://placehold.it/32x32",
          age: 23,
          name: "Bird Ramsey",
          gender: "male",
          company: "NIMON",
          email: "birdramsey@nimon.com",
          phone: "+25193348574",
        },
        {
          balance: "$2,499.49",
          picture: "http://placehold.it/32x32",
          age: 31,
          name: "Lillian Burgess",
          gender: "female",
          company: "LUXURIA",
          email: "lillianburgess@luxuria.com",
          phone: "+25193348574",
        },
        {
          balance: "$2,820.18",
          picture: "http://placehold.it/32x32",
          age: 34,
          name: "Kristie Cole",
          gender: "female",
          company: "QUADEEBO",
          email: "kristiecole@quadeebo.com",
          phone: "+25193348574",
        },
        {
          balance: "$3,277.32",
          picture: "http://placehold.it/32x32",
          age: 30,
          name: "Leonor Cross",
          gender: "female",
          company: "GRONK",
          email: "leonorcross@gronk.com",
          phone: "+25193348574",
        },
        {
          balance: "$1,972.47",
          picture: "http://placehold.it/32x32",
          age: 28,
          name: "Marsh Mccall",
          gender: "male",
          company: "ULTRIMAX",
          email: "marshmccall@ultrimax.com",
          phone: "+25193348574",
        },
      ],
    };
  },
};
</script>