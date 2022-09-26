
require('./bootstrap');

window.Vue = require('vue').default;



Vue.component('example-component',
require('./components/ExampleComponent.vue').default);
//import App from './components/app'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPlusSquare ,faTrash } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPlusSquare,faTrash)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false



const app = new Vue({
    el: '#app',
    // components:{App}
});
