try {
   alert("This is try block")
   alert(a)
   alert("This is try block after error")
}
catch (error) {
   // alert("This an error here")
   console.log(error)
   // console.log(error.name)
   // console.log(error.message)
}
finally {
   alert("finall, execution")
}