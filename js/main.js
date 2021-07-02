function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>{


      let output='<h2>Users</h2>';
      data.map((user)=>{

        output+=`
        <div class='userlist' value='${user.id}' key='${user.id}'>
          <p>Name:${user.name}</p>
          <p>Email:${user.email}</p>
          <a href="./pages/posts.html?id=${user.id}" value=${user.id} class="linkToPost" target="_blank">Get User's Post</a>
        </div>
          <br>

            `
          }

        );
          document.querySelector('.users').innerHTML=output;

      })
}
getUsers();
