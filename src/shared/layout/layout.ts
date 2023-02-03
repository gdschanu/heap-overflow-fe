import Default from './Default.vue'
import NavSideBar from './NavSideBar.vue'
import Nav from './Nav.vue'
import { markRaw, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const layouts = {
  Default,
  NavSideBar,
  Nav
}

function useLayout() {
  const layout = ref()
  const route = useRoute();

  watch(
    () => route.meta?.layout as string | undefined,
    async (metaLayout) => {
      try {
        layout.value = markRaw(layouts[metaLayout || "Default"]);
      } catch (e) {
        layout.value = markRaw(Default);
      }
    },
    {
      immediate: true
    }
  )

  return layout
}

export default useLayout