// `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]`




function searchbar(){
    let search = document.getElementById('search').value;
    localStorage.setItem('searching',JSON.stringify(search));

    window.location.href='search.html'
}

 
const showvideo = async ()=>{
    
   try{
      let res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&key=AIzaSyDYJgsA8lfsU31XSFMdSrUNzm0KU4cZqJE&maxResults=20`);

      let data = await res.json();
      console.log(data.items)
       if(data == undefined){
           return false;
       }
       appenddata(data.items)

   }
   catch(error){

   }


}

showvideo()

  let showdata = document.getElementById('showdata')

   const appenddata =(data)=>{
     
    data.forEach(function (item,index,array){
   
        let innerdiv = document.createElement('div');
        innerdiv.setAttribute('id','innerdiv')

        let name = document.createElement("h3");
        name.innerHTML=item.snippet.title;
    
        let thumbnails = document.createElement("img");
        thumbnails.src= item.snippet.thumbnails.medium.url;
     
         let channel = document.createElement("p");
        channel.innerHTML = item.snippet.channelTitle;
    
        innerdiv.append(thumbnails,name,channel);
       showdata.append(innerdiv)


       let arr =[];
       thumbnails.addEventListener('click',function(){
           console.log('working');
           arr.push(array[index])
           console.log(arr)
          localStorage.setItem('homepage',JSON.stringify(arr));
          window.location.href='play.html';
       })
    })
   } 
