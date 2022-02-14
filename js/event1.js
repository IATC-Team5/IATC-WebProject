// import {
//     db,
//     set,
//     ref,
//     onValue,
//     push,
//     child,
//     update,
//     remove,
//   } from "./module.js";

// //get page data
// onValue(ref(db, "events"), (snapshot) => {
//     $(".event-cards").empty();
//     snapshot.forEach((childSnapshot) => {
//       const childKey = childSnapshot.key;
//       const childData = childSnapshot.val();
//       $(".event-blog").append(`
//           <div><img src="${childData.ImgUrl}" alt="IATC"></div>
//           <div class="event-blog-article">
//               <h3>${childData.title}</h3>
//               <p>${childData.textarea}</p>
//           </div>
//              ` )
//     });
//   });
 
 