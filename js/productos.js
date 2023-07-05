const { createApp } = Vue;

createApp({
  data() {
    return {
      productos: [],
      url: "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick",
      cargando: true,
      error: false,
    };
  },

  methods: {
    fetchData() {
      fetch(this.url)
        .then((response) => response.json())
        .then((data) => {
          this.productos = data;
          this.cargando = false;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },

    delete(id) {
      const url =
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick" +
        id;
      let options = {
        method: "DELETE",
      };

      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          location.reload();
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },

  created() {
    this.fetchData(this.url);
  },
}).mount("#app");
