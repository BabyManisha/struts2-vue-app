<template>
  <v-app>
    <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Sample Button</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

    <v-main>
      THis is SM Prop {{page}}....

      <router-link to="/Home">Home As Page Route</router-link>
      <router-link to="/about">About As Page Route</router-link>

      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  props: ['page'],
  data: () => ({
    //
  }),
};
</script>
