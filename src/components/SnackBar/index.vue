<template>
  <v-snackbar
  v-model="snackbar"
  :top="options.top"
  :bottom="options.bottom"
  :left="options.left"
  :right="options.right"
  :color="color"
  :timeout="timeout"
  >
    <div  v-if="options.icon.name" class="d-flex align-center">
       <v-icon :color="options.icon.color" class="mr-4">{{options.icon.name}}</v-icon>
        <span class="mt-1 text-capitalize">{{message}}</span>
    </div>
    <template v-else>
       {{message}}
        <v-btn small darck text @click="close()">Fechar</v-btn>
    </template>


  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      timeout: 3000,
      color: 'sucess',
      resolve: null,
      reject: null,
      message: '',
      options: {
        top: true,
        bottom: false,
        left: false,
        right: false,
        icon: {
          name: '',
          color: 'white',
        },
      },
    };
  },
  methods: {
    open({ color, message, options }) {
      this.message = message;
      this.color = color;
      if (options) {
        this.options = { ...this.options, ...options };
      }
      this.snackbar = true;
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    close() {
      this.resolve(false);
      this.snackbar = false;
    },
  },
};
</script>

<style>

</style>
