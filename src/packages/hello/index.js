// AnneHello 是对应组件的名字，要记得在 anne-hello.vue 文件中还是 name 属性哦
import AnneHello from './anne-hello.vue';

AnneHello.install = Vue => Vue.component(AnneHello.name, AnneHello);

export default AnneHello;