
const getImgUrl = (imagePath: string): string => {
  // const imgPath = new URL(`../../assets/${imagePath}`, import.meta.url).href
  // return imagePath
  return require(`../assets/${imagePath}`)
}

export {
  getImgUrl
}
