/*
文件下载
content: 要下载的文件
filename: 要下载的文件name
*/
export const fileDownload = (content, filename) => {
  // 创建隐藏的可下载链接
  var eleLink = document.createElement('a')
  eleLink.download = filename
  eleLink.style.display = 'none'
  // 字符内容转变成blob地址
  var blob = new Blob([content])
  eleLink.href = URL.createObjectURL(blob)
  // 触发点击
  document.body.appendChild(eleLink)
  eleLink.click()
  // 然后移除
  document.body.removeChild(eleLink)
}
