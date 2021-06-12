import { EnvironmentsVariables } from '~/nuxt.config';
import { accessorType } from '~/store';

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }

}

declare module '@nuxt/types/config/runtime' {
  interface NuxtRuntimeConfig extends EnvironmentsVariables {
  }
}
