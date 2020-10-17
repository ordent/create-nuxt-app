const responsive = ['', 'md', 'lg', 'xl']
const convertToResponsiveCSS = (input) => {
  let result = ''
  for (let index = 0; index < input.length; index++) {
    if (index === 0) {
      result += `${input[index]}`
    } else {
      result += `${responsive[index]}:${input[index]}`
    }
    if (index !== input.length - 1) {
      result += ' '
    }
  }
  return result
}
const convertPropertiesToResponsiveCSS = (input, properties) => {
  let result = input.map((value) => `${properties}-${value}`)
  result = convertToResponsiveCSS(result)
  return result
}
const currencyFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
})
export {
  currencyFormatter,
  convertPropertiesToResponsiveCSS,
  convertToResponsiveCSS,
}
