import React, { useEffect, useState } from 'react'
import { useCart } from '../../../hooks/useCart'
import TableDesktop from './TableDesktop'
import TableMobile from './TableMobile'
import EmptyCart from '../../../components/EmptyCart'

export default function Table() {
  const [windowWidtdh, setWindowWidth] = useState(document.documentElement.clientWidth)

  const {cart} = useCart()

  useEffect(()=>{
    function updateTableComponentBasedInWindowWidth(){
      const currentWidth = document.documentElement.clientWidth;
      setWindowWidth(currentWidth)
    }

    window.addEventListener('resize', updateTableComponentBasedInWindowWidth)

  return () => {
      window.removeEventListener('resize', updateTableComponentBasedInWindowWidth)
  }

  },[])



  if (cart.length===0){
    return <EmptyCart title='Ops! Você não possui nenhum pedido :('/>
  }

  if(windowWidtdh> 768){
    return <TableDesktop/>
  }else{
    return <TableMobile/>
  }


}
