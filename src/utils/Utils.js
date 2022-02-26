export function getDummyGroups(){

    let rows =[
        {id:1,groupName:'Andhra Pradesh'},
        {id:2,groupName:'Arunachal Pradesh'},
        {id:3,groupName:'Assam'},
        {id:4,groupName:'Bihar'},
        {id:5,groupName:'Goa'},
        {id:6,groupName:'Gujarat'},
        {id:7,groupName:'Haryana'},
        {id:8,groupName:'Himachal Pradesh'},
        {id:9,groupName:'Jharkhand'},
        {id:10,groupName:'Karnataka'},
        {id:11,groupName:'Kerala'},
        {id:12,groupName:'Madhya Pradesh'},
        {id:13,groupName:'Manipur'},
        {id:14,groupName:'Meghalaya'},
        {id:15,groupName:'Mizoram'},
        {id:16,groupName:'Nagaland'},
        {id:17,groupName:'Odisha'},
        {id:18,groupName:'Punjab'},
        {id:19,groupName:'Rajasthan'},
        {id:20,groupName:'Sikkim'},
    ]
    return rows;
}


export function isLogin(){
   const token= localStorage.getItem('token')
    return token!=null?true:false
}

export function logout(){

    localStorage.removeItem('token');
    localStorage.removeItem('user')
}