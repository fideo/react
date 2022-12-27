import { useLayoutEffect, useRef, useState } from "react";

export const Character = ({isLoading, imageUrl, fullName, title}) => {
  
    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {

      console.log( pRef.current.getBoundingClientRect() );

    }, [imageUrl, fullName, title])

    return (
      <>
        <blockquote 
          className="blockquote text-end"
          style={{display: 'flex'}}
        >
          <img src={imageUrl} />
          <h3 className="mb-1">{fullName}</h3>
          <footer ref={ pRef } className="blockquote-footer pt-2">{title}</footer>
        </blockquote>

        <code>{JSON.stringify(boxSize)}</code>

      </>
    )

}
