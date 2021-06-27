let btnValue=0;
function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>{
      let output='<h2>Users</h2>';
      data.forEach((user)=>{
        output+=`
        <div class='userlist'>
          Name:${user.name}
          Email:${user.email}
          <button value='${user.id}' class="userBtn">Get User's Post</button>
        </div>
          <br>

            `
          }

        );
        document.querySelector('.users').innerHTML=output;
        document.querySelector('.userBtn').addEventListener('click',getPosts);

      })
}
getUsers();
function getPosts(id){
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  .then((response) => response.json())
  .then(data =>{
    let output='<h3>User Posts</h3>'
    data.forEach(post=>{
      output+=`
        <div>
          Title:${post.title} <br>
          Body:${post.body}
        </div>
      `
    })
    document.querySelector('.posts').innerHTML=output;
  });
}
let id= (e)=>{
  e.preventDefault();
  // btnValue=parseInt(e.target.value);
  // getPosts(btnValue);
  // console.log(btnValue);
}
getPosts(id);
