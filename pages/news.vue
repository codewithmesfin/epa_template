<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
    >
      <template v-slot:header>
        <v-toolbar dark color="primary" class="mb-1">
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              prepend-inner-icon="mdi-magnify"
              label="Sort by"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="sortDesc" mandatory>
              <v-btn large depressed color="blue" :value="false">
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn large depressed color="blue" :value="true">
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
          <v-btn
            text
            class="text-capitalize primary white--text"
            @click="$router.push('/form')"
            >Add News</v-btn
          >
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card
              class="contentCard my-3"
              width="100%"
              height="100%"
              @click="$router.push('/newsletter/detail')"
            >
              <v-img
                :src="item.img"
                lazy-src="https://picsum.photos/id/11/100/60"
                width="100%"
                height="100%"
                max-height="200px"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>

              <v-card-text>
                <h1 class="title primary--text font-weight-bold">
                  {{ item.title }}
                </h1>
                <h1 class="body-1 info--text">{{ item.subtitle }}</h1>
                <p class="body-2 ellipsis">{{ item.content }}</p>
                <small class="info--text b text-right">{{ item.date }}</small>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      itemsPerPageArray: [10, 25, 50],
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 10,
      sortBy: "name",
      keys: ["Title", "Subtitle", "Content"],
      items: [
        {
          title: "Lorem ipsum",
          subtitle: "lorem ipsum doler sit amet",
          content: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.`,
          date: new Date().toDateString(),
          img: "https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=",
        },
        {
          title: "Lorem ipsum",
          subtitle: "lorem ipsum doler sit amet",
          content: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.`,
          date: new Date().toDateString(),
          img: "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          title: "Lorem ipsum",
          subtitle: "lorem ipsum doler sit amet",
          content: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.`,
          date: new Date().toDateString(),
          img: "https://1.bp.blogspot.com/-3p2S61sA7_I/WTYcrfRhmQI/AAAAAAAAPkc/skbgRX30m_c5devNgNCfUDvoo_qoOvu2ACLcB/s400/so-beautiful-natural-scene-imgs.jpg",
        },
        {
          title: "Lorem ipsum",
          subtitle: "lorem ipsum doler sit amet",
          content: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.`,
          date: new Date().toDateString(),
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9YlhliAyJhOqzusQRhEKD_DJuSiZx1Xm0VKDl6sNpPbkGtrK_3rZDlt0dtjR2JNSQRQ&usqp=CAU",
        },
        {
          title: "Lorem ipsum",
          subtitle: "lorem ipsum doler sit amet",
          content: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.`,
          date: new Date().toDateString(),
          img: "https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=",
        },
        {
          title: "Lorem ipsum",
          subtitle: "lorem ipsum doler sit amet",
          content: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.`,
          date: new Date().toDateString(),
          img: "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          title: "Lorem ipsum",
          subtitle: "lorem ipsum doler sit amet",
          content: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.`,
          date: new Date().toDateString(),
          img: "https://1.bp.blogspot.com/-3p2S61sA7_I/WTYcrfRhmQI/AAAAAAAAPkc/skbgRX30m_c5devNgNCfUDvoo_qoOvu2ACLcB/s400/so-beautiful-natural-scene-imgs.jpg",
        },
        {
          title: "Lorem ipsum",
          subtitle: "lorem ipsum doler sit amet",
          content: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.`,
          date: new Date().toDateString(),
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9YlhliAyJhOqzusQRhEKD_DJuSiZx1Xm0VKDl6sNpPbkGtrK_3rZDlt0dtjR2JNSQRQ&usqp=CAU",
        },
      ],
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "Name");
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
};
</script>

<style lang="css" scoped>
.contentCard {
  cursor: pointer;
  box-shadow: 0 0.5em 1em -0.125em rgb(65 65 65 / 10%),
    0 0 0 1px rgb(65 65 65 / 2%) !important;
}
.contentCard:hover {
  background: #f0f2f5 !important;
}
.ellipsis {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.link {
  text-decoration: none;
}
</style>