//bikin fungsi set local storage
//params - key & value
function CustomSetLocalStorage(){
   localStorage.setItem(Math.random().toString(36), Math.random().toString(36));
}

CustomSetLocalStorage();