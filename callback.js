const posts=[
    {title:'post one',body:'this is post one',createdAt:new Date().getTime()},
    {title:'post two',body:'this is post two',createdAt:new Date().getTime()}
];
function getPosts(){
        let output='';
        for(i=0;i<posts.length;i++){
         output+=`<li>${posts[i].title}-last updated ${(new Date().getTime()-posts[i].createdAt)/1000}</li>`;
        }
document.body.innerHTML=output;
    
}
function createPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt:newdate().getTime()});
        callback();
    },2000);
}
getPosts();
createPost({title:'post three',body:'this is post three'},getPosts);
createPost({title:'post four',body:'this is post four'},getPosts);
