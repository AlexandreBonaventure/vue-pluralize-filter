/* eslint-disable no-template-curly-in-string */

const install = function install (Vue, { name = 'pluralize' } = {}) {
  Vue.filter('pluralize', filter)
}
const plugin = { install }

export const filter = function pluralize (count, translations) {
  let translation
  if (count === 0) {
    translation = translations.zero.replace('${count}', count)
  } else if (count === 1) {
    translation = translations.one.replace('${count}', count)
  } else {
    translation = translations.other.replace('${count}', count)
  }
  return translation
}

export default plugin

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
