import React from 'react';
// import { memo } from "react";

export const Small = React.memo( ({value}) => {
  
  console.log('Me volví a Generar');

  return (
    <small>{ value }</small>
  )
})
