// AnneSwitch 是对应组件的名字，要记得在 anne-switch.vue 文件中还是 name 属性哦
import AnneSwitch from './anne-switch.vue';

AnneSwitch.install = Vue => Vue.component(AnneSwitch.name, AnneSwitch);

export default AnneSwitch;