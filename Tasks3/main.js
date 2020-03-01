 async function getResponce(){
let responce = await fetch('http://46.101.146.101:8081/categories/')
let content = await responce.json()
content = content.splice(0,10)
 
 let list = document.querySelector('.posts')


let key;
for (key in content){
    list.innerHTML +=`
              <li class='post'>
              <h4>${content[key].title}</h4>
              <img src= "${content[key].category_image_url}" width="400" height="250" >
          </li>
   `
    

}
}
getResponce()
