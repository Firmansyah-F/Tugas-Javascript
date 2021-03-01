
const combine = async () => {
    const urlPosts = `https://jsonplaceholder.typicode.com/posts`;
    const urlUsers = `https://jsonplaceholder.typicode.com/users`;
    const posts = (await axios.get(urlPosts)).data;
    const users = (await axios.get(urlUsers)).data;
    const result = posts.map(post => {
        post.user = users.find(user => user.id === post.userId)
        return post
    })
    // console.log(result)
    return result
};
combine().then(res => console.log(res))