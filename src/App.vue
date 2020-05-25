<template>
  <v-app>
    <router-view/>
     <snack-bar ref="snackBar" />
  </v-app>
</template>

<script>
import SnackBar from '@/components/SnackBar/index.vue';

export default {
  name: 'App',
  components: { SnackBar },
  mounted() {
    this.$root.$snackBar = this.$refs.snackBar;
  },
};
</script>
