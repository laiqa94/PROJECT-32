

let current_users:string[] =['OsmAn','DaNiyal','Hamzah','John'];

let new_users:string[] =['Kamran','OsmAn','Ameen','Qasim','Hamzah'];

new_users.forEach(new_Username =>{
     let lowerCase:string = new_Username.toLowerCase();
     if(current_users.some(c_user => c_user.toLowerCase().includes(lowerCase))){
        console.log(`The username ${new_Username}  is not availble. new username`);
     }
     else{
        console.log(`The username ${new_Username} is available.`);
     }
});