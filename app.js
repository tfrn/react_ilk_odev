import axios from "axios";
 
let getData = async (Number) =>{
    let {data: users} = await axios("https://jsonplaceholder.typicode.com/users/"+Number);
    let {data: posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+Number);
    return {users,posts};
}

export default getData;