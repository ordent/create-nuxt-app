const { merge, sortByKey } = require('./util')

module.exports = {
  requireFile (filename) {
    try {
      return require(filename)
    } catch (error) {
      return {}
    }
  },
  requireJSON (filename) {
    return JSON.parse(JSON.stringify(this.requireFile(filename)))
  },
  loadPackage (name, generator) {
    if (!name || name === 'none') {
      return {}
    }
    const prefix = name === 'nuxt' ? 'nuxt' : `frameworks/${name}`
    const pkg = this.requireJSON(`@ordentco/cna-template/template/${prefix}/package.json`)
    const pkgHandler = this.requireFile(`@ordentco/cna-template/template/${prefix}/package.js`)
    return pkgHandler.apply ? pkgHandler.apply(pkg, generator) : pkg
  },
  load (generator) {
    const nuxtPkg = this.loadPackage('nuxt', generator)
    const uiPkg = this.loadPackage(generator.answers.ui, generator)
    const typePkg = this.loadPackage(generator.answers.type, generator)
    const testPkg = this.loadPackage(generator.answers.test, generator)
    const pkg = merge(nuxtPkg, uiPkg, testPkg, typePkg)
    pkg.dependencies = sortByKey(pkg.dependencies)
    pkg.devDependencies = sortByKey(pkg.devDependencies)
    return pkg
  }
}
