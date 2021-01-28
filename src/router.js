import Vue from "vue";
import Router from "vue-router";

// ノーマルなインポートの仕方
// import Town from "./views/Town.vue";
// import Trainers from "./views/Trainers.vue";
// import HeaderTown from "./views/HeaderTown.vue";
// import TrainersLog from "./views/TrainersLog.vue";
// import HeaderTrainers from "./views/HeaderTrainers.vue";
// import TrainersPokemon from "./views/TrainersPokemon.vue";


// 動的インポート
//コンポーネントの情報が欲しい時だけ持って来るための処理
// cli3のprefetch機能によって高速になる
const Town = () => import(/* webpackChunkName: "Town"*/ "./views/Town.vue");
const Trainers = () => import(/* webpackChunkName: "Trainers"*/ "./views/Trainers.vue");
const HeaderTown = () => import(/* webpackChunkName: "HeaderTown"*/ "./views/HeaderTown.vue");
const TrainersLog = () => import(/* webpackChunkName: "TrainersLog"*/ "./views/TrainersLog.vue");
const HeaderTrainers = () => import(/* webpackChunkName: "HeaderTrainers"*/ "./views/HeaderTrainers.vue");
const TrainersPokemon = () => import(/* webpackChunkName: "TrainersPokemon"*/ "./views/TrainersPokemon.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/', 
      components: {
        default: Town,
        header: HeaderTown
      },
      beforeEnter(to, from, next) {
        next();
      }
    },
    {
      path:'/trainers/:id', 
      components: {
        default: Trainers,
        header: HeaderTrainers
      },
      props: {
        default: true,
        header: false,
      },
      children: [
      {
        path: 'log',
        component: TrainersLog,
        name: 'trainers-id-log',
      },
      {
        path: 'pokemon',
        component: TrainersPokemon,
      }],
    },
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '*',
      redirect: '/',
    }
  ],
  // コンポーネント間の移動で発火
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      // ルートインスタンスに対して何かemitされた時$on or $onceを使って扱うことができる
      this.app.$root.$once('triggerScroll', () => {
        let position = { x: 0, y: 0 };
        if(to.hash) {
            position = {
              // スクロールid
              selector: to.hash
            };
          }
          if(savedPosition) {
            position = savedPosition;
          }
          resolve(position);
      });
    });
    }
});
