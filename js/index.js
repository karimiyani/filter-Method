const num = [ 1, 2, 34, 456 ];
const filteredNum = num.filter(function(num,index){
    return num>=35;
});
console.log(filteredNum);
// [456]


const users = [
    {name:"gomnam", isActive:true, id:1},
    {name:"A", isActive:false, id:2},
    {name:"B", isActive:true, id:3},
    {name:"C", isActive:false, id:4},
]
const activedUser = users.filter((user) => {
    return user.isActive
});
console.log(activedUser);
// (2) [{…}, {…}]
// 0: {name: 'gomnam', isActive: true, id: 1}
// 1: {name: 'B', isActive: true, id: 3}
// length: 2
// [[Prototype]]: Array(0)