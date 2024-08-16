import React, { useState } from 'react';

// const hari={
//     jam:12,
//     menit:60,
// };

// console.log(hari.jam)


// function Title(props) {
//   return (
//     <> 
//     <p className="text-center"> Selamat {props.salam} </p>

//     </>
//   );
// }


function Title({ salam }) {
  return (
    <p className="text-2xl text-center text-gray-700">Selamat {salam}</p>
  );
}

export default Title;
