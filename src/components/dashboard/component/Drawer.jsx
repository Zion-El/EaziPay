import React from 'react'
import Flag from '../dash-assets/flag.png'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Divider, Text } from '@chakra-ui/react'
import { accordion, setting } from './Data'
import { Link } from 'react-router-dom'







const Drawer = () => {
  return (
    <div className='w-full h-full bg-[#fff]'>
      <div className='bg-cover bg-center'>

        <img className='hidden lg:block' src={Flag} alt="lag" />        

      </div>
      <div className='pt-20 lg:pt-0 lg:mt-10'>
        <Box sx={{py:4, pl:4, display:'flex'}} >
        <Text sx={{fontFamily:'inter', fontWeight:'500',  color:'#515251', fontsize:'12px'}}>Dashboard</Text>

        </Box>
        <Divider/>
        <Box sx={{py:4, pl:4, display:'flex'}} >
        <Text sx={{fontFamily:'inter', fontWeight:'500',  color:'#515251', fontsize:'12px'}}>Wallet</Text>

        </Box>
      <Accordion allowMultiple>
      {
            accordion.map((item, index)=>{
              return(
              <AccordionItem key={index}>

                  <h2>
                  <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' sx={{display:'flex'}}>
                        <Text sx={{fontFamily:'inter', fontWeight:'500',  color:'#515251', fontsize:'10px'}}>{item.title}</Text>
                      
                      </Box>
                      <AccordionIcon />
                  </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} sx={{display:'flex', flexDirection:'column'}}>
                    {
                      item.children.map((child, index)=><Link to={child.link} key={index}><Box as="span" flex='1' textAlign='left' >{child.head}</Box></Link>)
                    }
                    
                  </AccordionPanel>
              </AccordionItem>                
              )
            })
          }

        </Accordion>
        <Box sx={{py:4, pl:4, display:'flex', mt:5}} >
        <Text sx={{fontFamily:'inter', fontWeight:'500',  color:'#515251', fontsize:'12px'}}>Support</Text>

        </Box>
        <Divider/>
        <Accordion allowMultiple>
      {
            setting.map((item, index)=>{
              return(
              <AccordionItem>

                  <h2>
                  <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' sx={{py:4, display:'flex'}}>
                        <Text sx={{fontFamily:'inter', fontWeight:'500',  color:'#515251', fontsize:'12px'}}>{item.title}</Text>
                      
                      </Box>
                      <AccordionIcon />
                  </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} sx={{display:'flex', flexDirection:'column'}}>
                    {
                      item.children.map((child, index)=><Link to={child.link} key={index}><Box as="span" flex='1' textAlign='left' > </Box></Link>)
                    }
                    
                  </AccordionPanel>
              </AccordionItem>                
              )
            })
          }

        </Accordion>
      </div>
    </div>
  )
}

export default Drawer
