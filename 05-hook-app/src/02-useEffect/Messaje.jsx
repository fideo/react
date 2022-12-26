import { useEffect, useState } from "react"

export const Messaje = () => {

  const [coords,setCoords] = useState({x:0,y:0});

  useEffect(() => {

    const onMouseEvent = ({x,y}) => {
      const coords = {x,y};
      // console.log(coords);
      setCoords({x,y})

    }

    window.addEventListener('mousemove', onMouseEvent )

    // console.log('Message mounted')
  
    return () => {
      // console.log('Message unmounted');
      window.removeEventListener('mousemove', onMouseEvent )
    }
  }, [])
  

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(coords)}
    </>
  )
}
