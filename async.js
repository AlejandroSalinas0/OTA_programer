//console.log('fetched response')
// fun1();
// async function fun1(req, res){
//     let response = await request.get('http://localhost:3000');
//       if (response.err) { console.log('error');}
//       else { console.log('fetched response');}
// }

// async function asyncFun() {
//     try {
//       const result = await promise;
//       console.log("Holi");
//     } catch(error) {
//       console.log(error);
//     }
// }

// function scaryClown() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('🤡');
//       }, 2000);
//     });
//   }
  
//   async function msg() {
//     const msg = await scaryClown();
//     console.log('Message:', msg);
//   }
  
//   msg(); // Message: 🤡 <-- after 2 seconds


function who() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('🤡');
        console.log('90')
      }, 1000);
    });
  }
  
  function what() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('lurks');
        console.log('5')
      }, 1000);
    });
  }
  
  function where() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('in the shadows');
        console.log('24')
      }, 1000);
    });
  }
  
  async function msg() {
    const a = await who();
    console.log("terminado proceso A");
    const b = await what();
    console.log("terminado proceso B");
    const c = await where();
    console.log("terminado proceso C");
    //console.log(`${ a } ${ b } ${ c }`);

  }
  
  msg(); // 🤡 lurks in the shadows <-- after 1 second
