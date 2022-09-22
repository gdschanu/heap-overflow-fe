import { Store } from 'vuex';
import {State} from "./coder/store"
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}