//rafc Para crear un funcional component
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ]);

  const onAddCategory = ( newCategory ) => {
    //TODO resolver el ingresos CaseSensitive .toLowerCase() comparando 
    if (categories.includes(newCategory)) return;

    setCategories( [ newCategory, ...categories ] );

  }

  return (
    <>
    {/* titulo */}
      <h1>GifExpertApp</h1>

    {/* Input */}
    <AddCategory 
      // setCategories={ setCategories }
      onNewCategory={ (value) => onAddCategory(value)  }
     />

    {/* Listado de Gif */}
    { 
        categories.map( ( category ) => (
          <GifGrid 
              key={ category } 
              category={ category } />
        ))
    }
      {/* <li>ABC</li>
      <li>123</li> */}
      {/* Gif Item */}

    </>
  )
}
