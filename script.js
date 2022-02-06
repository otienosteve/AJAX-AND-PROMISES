const Req= new XMLHttpRequest();
image=document.createElement('img')
    Req.open('GET','https://dog.ceo/api/breeds/image/random')
Req.onload=function(){
    let resp= Req.response;
    let data=JSON.parse(resp);
    console.log(data)
    image.src=data.message
}
Req.send()
var cont=document.getElementById('photo')
cont.appendChild(image)
posts=[{title:'Post one',body:'this is post one'},{title:'This is Post Two'},{title:'This is Post Three',body:'This is post Three'}]
const createPost=()=>{
   setTimeout( ()=>{
posts.push({title:'Post four',body:'This is Post Four'})
   },2000)
}
const list=document.createElement('ul')
document.getElementById('list-items').append(list)
const addPosts= ()=>{
    return new Promise((resolve,reject)=>{
const postadded=false
if(!postadded){
 
    //posts.push(post)
    posts.forEach((post,index) => {
    var li=document.createElement('li')
    list.append(li)
    li.innerText=post.title

    console.log(post.title)
});
    resolve()
}else{
    reject('There was an error processing that request')
}
 } )
}
addPosts().then(createPost).catch((err)=>console.log(err))  



