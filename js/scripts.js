const { createApp } = Vue;

createApp({

      data() {

            return {

                  email: [],

            };

      },

      methods: {

      },

      mounted() {
            
            for(let i = 0; i <= 9; i++) {

                  axios
                        .get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((response) => {

                              console.log(response);
                              this.email.push(response.data.response);

                        });

            }

      },

}).mount('#app');