<template>
  <section>
    <v-container fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs12 pa-2>
          <v-card outlined>
            <v-img
              :src="news.img"
              lazy-src="https://picsum.photos/id/11/100/60"
              width="100%"
              height="100%"
              max-height="700px"
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
            <v-card-text>
              <div class="py-3">
                <h1 class="title primary--text font-weight-bold">
                  {{ news.title }}
                </h1>
                <h1 class="body-1 info--text">{{ news.subtitle }}</h1>
                <small class="info--text b text-right">{{ news.date }}</small>
                <p class="body-1">{{ news.content }}</p>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-navigation-drawer height="100%" right app clipped width="400px">
      <v-list>
        <h1 class="title b pa-3">Related News</h1>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="setNews(item)"
          >
            <v-list-item-icon>
              <img :src="item.img" height="80px" width="80px" alt="" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-text="item.subtitle"
              ></v-list-item-subtitle>
              <span class="body-2 ellipsis">{{ item.content }}</span>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>


<script>
export default {
  data() {
    return {
      news: {
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
  methods: {
    setNews(item) {
      this.news = item;
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