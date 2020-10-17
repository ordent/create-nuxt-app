export class Model {
  constructor(item) {
    this.model = item
  }

  getFormData() {
    const fd = new FormData()
    for (const key in this.model) {
      // if (this.model.hasOwnProperty(key)) {
      fd.append(key, this.model[key])
      // }
    }
    return fd
  }

  getState() {
    return this.model
  }
}
