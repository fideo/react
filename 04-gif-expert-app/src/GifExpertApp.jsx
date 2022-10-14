//rafc Para crear un funcional component
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = ( newCategory ) => {
    // Valorant
    // categories.push(newCategory);
    // console.log(newCategory)
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
    <ol>
      { categories.map( category => {
        return <li key={  category }> { category } </li>
        }) 
      }
      {/* <li>ABC</li>
      <li>123</li> */}
    </ol>
      {/* Gif Item */}

    </>
  )
}
