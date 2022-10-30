<template>
  <section>
    <v-container fluid>
      <v-layout row wrap justify-space-between my-2>
        <v-flex xs12 sm6 md3 lg3 pa-2 v-for="(item, i) in items" :key="i">
          <v-card>
            <v-card-text>
              <div class="text-center py-3">
                <h1 class="display-3 b py-2 primary--text">
                  {{ item.amount }}
                </h1>
                <h1 class="title b">{{ item.title }}</h1>
                <h1 class="body-1">{{ item.subtitle }}</h1>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 md3 lg3 pa-2>
          <v-card outlined>
            <v-card-text>
              <div class="py-2">
                <h1 class="display-1 b">Insights</h1>
              </div>
              <insights />
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 md3 lg3 pa-2>
          <v-card outlined>
            <v-card-text>
              <div class="py-2">
                <h1 class="display-1 b">System users</h1>
              </div>
              <users />
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg6 pa-2>
          <v-card outlined>
            <v-card-text>
              <div class="py-2">
                <h1 class="display-1 b">Weekly Attendance</h1>
              </div>
              <attendances />
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import Attendances from "../components/Attendances.vue";
import Insights from "../components/Insights.vue";
import Users from "../components/Users.vue";

export default {
  components: { Users, Attendances, Insights },
  data() {
    return {
      items: [
        {
          title: "System users",
          subtitle: "Active system users",
          amount: 40,
        },
        {
          title: "Employees",
          subtitle: "Active employees",
          amount: 238,
        },
        {
          title: "Jobs",
          subtitle: "Active vacancies",
          amount: "1,345",
        },
        {
          title: "Tenders",
          subtitle: "Active Tenders",
          amount: "989",
        },
      ],
    };
  },
};
</script>