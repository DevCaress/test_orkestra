import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {  
    current_page: 1,
    customers:[],
    last_page: null,
    total_customers: null,
    noResults: false,
    pagination: [],
    url_page: 1,
    url_param: '',
    URL_TOKEN : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI1MDc1MDU3YTBiODY0NDY2YjQ3NjYxNjQ4OTA4ODIwYTYxNjcwZmU3MDIzOGU3ZjY4NDIyNWM2YzgwZjdkNWVjNzcxYTVlZGEwYjlmNzgzIn0.eyJhdWQiOiI1IiwianRpIjoiYjUwNzUwNTdhMGI4NjQ0NjZiNDc2NjE2NDg5MDg4MjBhNjE2NzBmZTcwMjM4ZTdmNjg0MjI1YzZjODBmN2Q1ZWM3NzFhNWVkYTBiOWY3ODMiLCJpYXQiOjE2NDYxNjY3NDMsIm5iZiI6MTY0NjE2Njc0MywiZXhwIjo0ODAxODQwMzQzLCJzdWIiOiIxIiwic2NvcGVzIjpbImNvbXBhbnlfdG9rZW4iXX0.OrdDYHzXdWqs9lGrP8_Wze07mNmhEnILvDuTfQrkLX5k3uMYfxHCBaUuZD5XXn7xBm2yJfaOwKLDo5sIf6J3FCQzzgjAFcr_wDrVt8zWdyQqq8DToqzdU06OB_htE0qJ-TyQEhED9ORRBDoROKMFIeKz_psBwQPjyH8AS34jrELrwW-6X9DioMqTk3Go976EMSL9PvyCBY1VkjVvkexc3eFfoHMiZXHVfmG89fr7ZhAEH81j9mH8Nd_tk3lSBrIBjda5JLm0ec-qWKjn7KNOOoQSbhWL3kyMG9eUT43JGMA-8Qy-OgBn0p2h4i2VuppJ8CD-O9IxaBOYOM9C7o6LuRwlGibb94UIAvbbTGC_i2x_DSfj8TkXstqSvKoZiSQo87M6FBNqngI8nuBxHCFNuPUzJJhRuj4D3YVmZsfzDaJLoV3SgP7ICK8YdUxRyAHpzsCtfbxgpwEFKQDY5LWdJwAvWN-sM3utz92fdHwZVqXLEDC37Be8eVbnNF29Lua4O3N8eBGix8XJ3GpZERy9kDJPQBbG32OOCAT0_c7u6KJaOdjoJ8Gnb6fws2CvBYW8arDgubwcHqu_SOpElupSU4aYhwp60-TiiEdarb82006r9XMHUSiNKAi02rq2wifbqhA-q995G3Y1O-tyKqSNqYRDILFcVjYfKwqzSQBsobE',
  },
  getters: {
  },
  mutations: {
    getUrlParam: function(state,value){
      state.url_param = value;
    },
    setUrlPage: function(state,value){
      state.url_page = value;
      console.log(state.url_page);
    },
    

    setPagination(state){

      if(state.last_page >= 2){

        state.pagination = [];

        console.log('current_page: ' + state.current_page);
        let counter = 1;
        let btns = 4;

        if (state.current_page == 1 || state.current_page == 2) {
          btns = 3;
        }else if(state.current_page == state.last_page || state.current_page == (state.last_page - 1)){
          counter = state.current_page - 2;
        }else{
          counter = state.current_page - 1;          
        }

        for (let index = 0; index < btns; index++) { 
          console.log(index);                      
          state.pagination.push(counter);
          counter++;         
        }
      }      
      
      console.log(state.pagination);
    }
    
  },
  actions: {

    getDataFetch: function({commit, state}){
      console.log('page: ' + state.url_page);
      console.log('param: ' + state.url_param);
      const URL_PAGE = state.url_page;
      const URL_PARAM = state.url_param;
      const URL_API = `https://dev.orkestra.mx/api/v1/directory/customers?page=${URL_PAGE}&search=${URL_PARAM}&only_search=1`;

      fetch(URL_API,{
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + state.URL_TOKEN ,
          'Content-Type': 'application/json',
        }
      })
      .then(response => response.json())
      .then(data => {
        state.customers = data.customers.data;
        state.total_customers = data.customers.total;
        state.current_page = data.customers.current_page;
        state.last_page = data.customers.last_page;
        state.customers.length == 0 ? state.noResults = true : false;
        commit('setPagination');
        console.log(data.customers.last_page); 
        console.log(data);
      });
    },
  },
  modules: {
  }
})
