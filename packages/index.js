// Copyright (c) 2019 by https://github.com/vannvan.
// All Rights Reserved.

import WIcon from './icon/index';
import WButton from './button/index';
const components = [
  WIcon,
  WButton
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  WIcon,
  WButton
}
