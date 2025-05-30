import { useState } from 'react'

function useMenuStatue() {
  const [statue , setStatue] = useState(false)

  const change = () => setStatue(!statue)

  return {statue , change}
 
}

export default useMenuStatue