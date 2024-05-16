
export default

    function printUser(arg1, arg2) {

    const createUser = document.createElement('div');
    const userName = document.createElement('p');
    
    createUser.classList.add('user');
    userName.innerText = "Hello " + arg2.userName;
  
    arg1.appendChild(createUser);
    createUser.appendChild(arg2.userIcon);
    createUser.appendChild(userName);   

    return arg1;
 
  };



