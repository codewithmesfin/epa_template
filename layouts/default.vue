<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="miniVariant"
      clipped
      fixed
      app
    >
      <v-list link dense>
        <v-list-item>
          <v-switch color="black" v-model="switch1" label="Dark Mode" />
        </v-list-item>
        <v-divider class=""></v-divider>
        <v-list-item-group v-model="menu" color="primary">
          <template v-for="(menu, i) in menus">
            <!-- if no children  -->
            <v-list-item
              :key="i"
              @click="$router.push(`/${menu.route}`)"
              v-if="!menu.children"
            >
              <v-list-item-icon>
                <v-icon v-text="menu.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  {{ menu.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- if children  -->
            <v-list-group
              color="primary"
              :key="menu"
              v-if="menu.children"
              no-action
            >
              <template v-slot:activator>
                <v-list-item-title>
                  <v-list-item-icon>
                    <v-icon v-text="menu.icon"></v-icon>
                  </v-list-item-icon>
                  {{ menu.title }}
                </v-list-item-title>
              </template>
              <template v-for="item in menu.children">
                <v-list-item
                  :key="item"
                  v-if="item.route"
                  @click="$router.push(`/${menu.route}/${item.route}`)"
                >
                  <v-list-item-content class="body-2">
                    {{ item.title }}
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list-group>
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      flat
      clipped-left
      fixed
      app
      clipped-right
      style="border-bottom: 1px solid #e6e6e6; background-color: white"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-avatar>
        <img src="/logo.png" alt="John" />
      </v-avatar>
      <v-toolbar-title
        class="title d-none d-md-inline primary--text b"
        v-text="title"
      />
      <v-spacer />
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        solo
        rounded
        flat
        dense
        hide-details
        color="primary"
        background-color="#edf2f7"
        label="Search"
      />
      <v-spacer />
      <v-btn text class="text-capitalize d-none d-md-inline body-1">
        Documentation</v-btn
      >
      <v-btn text class="text-capitalize d-none d-md-inline body-1">
        Support
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-cog</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-translate</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item link v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>

    <v-footer>
      <div class="pt-3" style="width: 100%">
        <p class="text-center">
          &copy; All rights reserved! {{ new Date().getFullYear() }}
        </p>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import sidebarItems from "../data/sidebar.menu";
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: true,
      menus: sidebarItems,
      title: "EPA",
      items: ["English", "አማርኛ"],
    };
  },
  created() {
    this.drawer = window.innerWidth > 960 ? true : false;
  },
};
</script>

<style >
.b {
  font-weight: bolder !important;
}
</style>
