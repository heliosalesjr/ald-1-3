'use client'


import { Divider } from '@nextui-org/react'
import MatButton from '../components/Matematica/MatButton'

import MatHero from '../components/Matematica/MatHero'

import MatVideo1 from '../components/Matematica/MatVideo1'
import MatVideo2 from '../components/Matematica/MatVideo2'
import MatPG from '../components/Matematica/MatPG'
import MatLogaritmo from '../components/Matematica/MatLogaritmo'
import MatFuncExponencial from '../components/Matematica/MatFuncExponencial'




function Matematica() {
  return (
    <>
        
        <MatHero />
        <MatPG />
        <MatLogaritmo />
        <MatFuncExponencial />
        <MatVideo1 />
        <Divider className='max-w-3xl mx-auto'/>
        <MatButton />
        
    
    </>
    
  )
}

export default Matematica