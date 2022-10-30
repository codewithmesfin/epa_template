<template>
  <section>
    <v-container fluid>
      <v-layout row wrap justify-center pa-2>
        <v-flex xs12 sm6 md3 lg3 pa-2 v-for="(item, i) in items" :key="i">
          <v-card
            class="contentCard my-3 py-3"
            @click="$router.push('/vacancies/jobs')"
          >
            <v-card-text>
              <div class="text-center">
                <v-avatar size="100">
                  <img :src="item.avatar" alt="John" />
                </v-avatar>
                <h1 class="title b black--text">{{ item.title }}</h1>
                <h1 class="body-1 info--text">
                  {{ item.amount }} Open positions
                </h1>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Acconting and Finance",
          amount: 100,
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9zBlzrRcBwlIr6Y6QeTD6X-f59p86cmNwZls00Is8xjfN5rh8cVVFKmTXSEOYSeePgOk&usqp=CAU",
        },
        {
          title: "Natural Science",
          amount: 10,
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh04-yZuDM7EN1Qpzw9zwuC2LA2kInakRKXT37wznlPdg1LNuSEftvZ6uWn2-M68CMnZA&usqp=CAU",
        },
        {
          title: "Security",
          amount: 23,
          avatar:
            "https://image.shutterstock.com/image-vector/security-euro-seccurity-icon-illustrationvector-260nw-1096541771.jpg",
        },
        {
          title: "Education",
          amount: 36,
          avatar:
            "https://banner2.cleanpng.com/20180330/ubw/kisspng-computer-icons-educational-technology-learning-tra-training-5abe329685ab86.8427883815224142305475.jpg",
        },
        {
          title: "Engineering",
          amount: 435,
          avatar:
            "https://image.shutterstock.com/z/stock-vector-industrial-engineer-and-engineering-icons-719418277.jpg",
        },
        {
          title: "Information Technology",
          amount: 13789,
          avatar:
            "https://opusconsulting.cz/wp/wp-content/uploads/2017/02/icon_ICT.png",
        },
        {
          title: "Law",
          amount: 2,
          avatar:
            "https://www.freeiconspng.com/thumbs/legal-icon/legal-icon-16.png",
        },
        {
          title: "Political science",
          amount: 1,
          avatar:
            "https://e7.pngegg.com/pngimages/187/819/png-clipart-computer-icons-election-political-campaign-icon-design-others-miscellaneous-angle.png",
        },
        {
          title: "Health Care",
          amount: 100,
          avatar:
            "https://cdn5.vectorstock.com/i/1000x1000/13/94/heart-cardiogram-health-icon-image-vector-12781394.jpg",
        },
        {
          title: "Manufacturing",
          amount: 6578,
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQecfeXK6TyJIe1tTOIPI7EIgv10r73kB6mukb41ng12ce5m4xwNKL7T89I8dmsJlB_KJA&usqp=CAU",
        },
        {
          title: "Social Science",
          amount: 324,
          avatar:
            "https://banner2.cleanpng.com/20190708/esk/kisspng-social-work-social-science-education-clip-art-psyc-bridging-the-social-skills-gap-to-promote-friendsh-5d23ed84c654b2.2987473015626356528124.jpg",
        },
        {
          title: "Volunteer",
          amount: 32,
          avatar:
            "https://www.pngitem.com/pimgs/m/320-3204882_volunteer-icon-png-transparent-png.png",
        },
      ],
    };
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
</style>