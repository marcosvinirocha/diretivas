import { createApp } from 'vue'
import App from './App.vue'
import texto from './directives/texto'
import posicao from './directives/posicao'
import informacao from './directives/informacao'

const Vue = createApp(App)

Vue.directive('texto', texto)

Vue.directive('posicao', posicao)

Vue.directive('informacao', informacao)

Vue.mount('#app')
