function alphanumeric(string){
    let regex = /^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/
    return regex.test(string)
  }

console.log(alphanumeric("Mazinkaiser"))//--> true)
console.log(alphanumeric("hello world_"))//--> false)
console.log(alphanumeric("PassW0rd"))//--> true)
console.log(alphanumeric("     "))//--> false)