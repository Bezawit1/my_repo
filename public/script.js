// navigator.mediaDevices.getUserMedia prompts the user for permission to use a media input which produces a media stream 
//  with trackscontaining the requested type of media
//returns a promise
const socket= io ('/');
// we pass udefined id so that the server takes care of the user id who joins
const myPeer=new Peer(undefined,{
    path:'/peerjs',
host:'/',
port:'443',
});
const peers={};//creating object






const videoGrid=document.getElementById('video-grid');
const myVideo=document.createElement('video')
myVideo.muted=true;//audio muted forme but can be heared for others
let myVideoStream;

navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true,
}).then((stream)=>{
    myVideoStream=stream;
    addVideoStream(myVideo,stream);

myPeer.on('call',(call)=>{
    call.answer(stream);//when we answer we send our stream
    const video=document.createElement('video');//we created  video tag  for the user also

    call.on('stream',(userVideoStream)=>{
        addVideoStream(video,userVideoStream)
    })

})
    socket.on('user-connected',(userId)=>{
        connectToNewUser(userId,stream);
        });

let text=$('input');
//when press enter send message
//calling the whole html tag
//keydown means when a user presses a key
//13 is the keyboard key of enter
$('html').keydown(function (e){
    if(e.which==13 && text.val().length!==0){
        socket.emit('message',text.val());
        text.val('') // after emitted we make the text value empty
    }
});
socket.on('createMessage',(message)=>{
    $('ul').append(`<li class="message"><b>user</b><br/>${message}</li>`);
});



});

myPeer.on('open',(id)=>{
    socket.emit('join-room',Room_ID,id);
});
socket.on('user-disconnected',(userId)=>{
    if(peers[userId]){
        peers[userId].close()
    } ;
})

//on means listening


//loadedmetadata event occurs when meta data for the specified audio/video has been loaded
// in this case when the event occurs run the video.play function
function addVideoStream(video,stream){
    video.srcObject=stream;
    video.addEventListener('loadedmetadata',()=>{
        video.play();
    })
    videoGrid.append(video) // this will put it in our html file
}
function connectToNewUser (userId,stream){
  const call=myPeer.call(userId,stream);
  const video=document.createElement('video');//we created this video tag element is because we need video tag for the user also
  //userVideoStream is the stream we get from the remote server
  call.on('stream',(userVideoStream)=>{
      addVideoStream(video,userVideoStream)
  });
  call.on('close',()=>{
      video.remove();//when you get the event close remove the video of the user
  })

  peers[userId]=call;//attaching the user id to its own specific call
}

const playStop=()=>{
let enabled=myVideoStream.getVideoTracks()[0].enabled;
if(enabled){
    myVideoStream.getVideoTracks()[0].enabled=false;
    setPlayVideo();
}else{
    setStopVideo();
    myVideoStream.getVideoTracks()[0].enabled=true;
}
}
const muteUnmute=()=>{
    const enabled=myVideoStream.getAudioTracks()[0].enabled;
    if(enabled){
        myVideoStream.getAudioTracks()[0].enabled=false;
        setUnmuteButton();
    }else{
        setMuteButton();
        myVideoStream.getAudioTracks()[0].enabled=true;
    }
}

const setStopVideo=()=>{
    const html=`<i class="fas fa-video"></i>
    <span>Stop Video</span>`;
    document.querySelector('.main__video__button').innerHTML=html;
}
const setPlayVideo=()=>{
    const html=`<i class=" stop fas fa-video-slash"></i>
    <span>Play Video</span>`;
    document.querySelector('.main__video__button').innerHTML=html;
}
const setMuteButton=()=>{
    const html=`<i class="fas fa-microphone"></i>
    <span>Mute</span>`;
    document.querySelector('.main__mute__button').innerHTML=html;
}
const setUnmuteButton=()=>{
    const html=`<i class="unmute fas fa-microphone-slash"></i>
    <span>Unmute</span>`;
    document.querySelector('.main__mute__button').innerHTML=html;
}