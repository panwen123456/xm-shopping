import TheFooter from  './components/TheFooter'
import MiTitle from "./components/MiTitle";

//option实例配置，方法、生命周期、组件注入、过滤
const mixins = {
  components: {
    TheFooter,
    MiTitle
  },
  methods: {
    goback() {
      this.$router.go(-1)
      this.$store.commit('setTransitionName', 'page-right')
    }
  }
} 

export default mixins