


let data = JSON.parse(localStorage.getItem('arr')) || [];




 let playvideo = document.getElementById('playvideo');
// 
  
data.map((item)=>{
  
 
  let maindiv = document.createElement('div');
  maindiv.setAttribute('id','maindiv');

  let name = document.createElement("h3");
    name.innerHTML=item.snippet.title;
    
    let videoId = item.id.videoId;
    let iframe = document.createElement('iframe');
    iframe.src=`https://www.youtube.com/embed/${videoId}`
     iframe.allow='fullscreen';
     iframe.width='1200';
     iframe.height='600';
     let channel = document.createElement("p");
    channel.innerHTML = item.snippet.channelTitle;

  maindiv.append(iframe,name,channel);
  playvideo.append(maindiv);


  
})

document.getElementById('gotohome').addEventListener('click',()=>{
   
    localStorage.removeItem('arr');
    window.location.href="./index.html"
    
  
  })


 let homepage = JSON.parse(localStorage.getItem('homepage'));

homepage.map((item)=>{
  
  playvideo.innerHTML=null;
  let maindiv = document.createElement('div');
  maindiv.setAttribute('id','maindiv');

  let name = document.createElement("h3");
    name.innerHTML=item.snippet.title;
    
    let videoId = item.id;
    let iframe = document.createElement('iframe');
    iframe.src=`https://www.youtube.com/embed/${videoId}`
     iframe.allow='fullscreen';
     iframe.width='1200';
     iframe.height='600';
     let channel = document.createElement("p");
    channel.innerHTML = item.snippet.channelTitle;

  maindiv.append(iframe,name,channel);
  playvideo.append(maindiv);

  document.getElementById('gotohome').addEventListener('click',()=>{
   
    
    localStorage.removeItem('homepage')
    
  
  })
})