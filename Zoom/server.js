const express=require('express');
const app=express();


const server=require('http').Server(app);//creating our server 
const io =require('socket.io')(server);
const{v4:uuidV4}=require ('uuid');
const {ExpressPeerServer}=require('peer');
const peerServer=ExpressPeerServer(server,{
    debug:true,
})//initiated our server using this module

 app.set('view engine', 'ejs');//we have to let our app know what kind of view engine we are using.
 app.use(express.static('public'));
 app.use('/peerjs',peerServer)


 app.get('/',(req,res)=>{
  res.redirect(`/${uuidV4()}`)//generates new number every time hompage refreshes or clicked
 });
 app.get('/:room',(req,res)=>{//this means when it gets any parameter render it 
     res.render('room',{roomId:req.params.room})
 });
 //when connection event occurs joinroom event sent or occurs
 io.on('connection',(socket)=>{
socket.on('join-room',(roomId,userId)=>{
    socket.join(roomId); //joining the room with the room id
    // socket.to(roomId).broadcast.emit('user-connected')//broadcast for the room i.e when someone joins everyone in the room knows
    socket.broadcast.to(roomId).emit('user-connected',userId);
socket.on('message',(message)=>{
io.to(roomId).emit('createMessage',message)
})

socket.on('disconnect',()=>{
    socket.broadcast.to(roomId).emit('user-disconnected',userId);

})


});
 });
 server.listen(process.env.PORT||3000); //this means get the port in our case 443 else go to port 3000