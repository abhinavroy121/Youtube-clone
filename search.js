
 var searchitems = document.getElementById('searchitems')
 
 let homesearch = JSON.parse(localStorage.getItem('searching'))
 
 
const searchbar = async () =>{
 
    let search =document.getElementById('search').value;
   
  
    try{
    
       let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=AIzaSyDYJgsA8lfsU31XSFMdSrUNzm0KU4cZqJE&maxResults=20`);
     
       let data = await res.json();
       let videos = data.items;
       appenddata(videos)
    }
    catch(err){
        console.log("error",err)
    }
}
const appenddata = (data)=>{
    searchitems.innerHTML=null;
    // data.forEach()
data.forEach(({snippet:{title},snippet:{channelTitle},snippet:{thumbnails:{medium:{url}}}},index,array)=>{
    let innerdiv = document.createElement("div");
    innerdiv.setAttribute('id','innerdiv')
    
    let name = document.createElement("h3");
    name.innerHTML=title;

    let thumbnails = document.createElement("img");
    thumbnails.src= url;
 
     let channel = document.createElement("p");
    channel.innerHTML = channelTitle;

    innerdiv.append(thumbnails,name,channel);
    searchitems.append(innerdiv);

    let arr =[];
   thumbnails.addEventListener('click',function(){
       console.log('working');
       arr.push(array[index])
       console.log(arr)
      localStorage.setItem('arr',JSON.stringify(arr));
      window.location.href='play.html';
   })
})
}
 


