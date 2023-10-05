import React, { useState } from 'react'
import NavItems from './NavItems';
import { BiMenu, BiLeftArrowAlt } from 'react-icons/bi'
import Drawer from '@mui/material/Drawer'
import { createTheme, ThemeProvider } from '@mui/material';

// Use create theme to remove default background of mui drawer component
const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: 'transparent',
        },
      },
    },
  },
});

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handle_Open_Close_Drawer = () => {
    setOpen(prevOpen => !prevOpen);
  }
  
  return (
    <div className=' max-w-[1248px] mx-auto flex justify-between items-center fixed overflow-hidden py-5 px-[3%]  text-light-secondary bg-light-primary dark:bg-dark-primary dark:text-dark-secondary z-50 w-full'>
      {/* Logo */}
      <div className='text-2xl font-semibold pointer-events-none capitalize'>
        tumelo.
      </div>
      {/* NavItems */}
      <div className=" hidden md:block">
        <NavItems />
      </div>

      <div className=" md:hidden">
        <div className=' p-3' onClick={handle_Open_Close_Drawer}>
          <BiMenu className=' text-[1.375rem]' />
        </div>

        <ThemeProvider theme={theme}>
            <Drawer 
              anchor="left" 
              open={open} 
              onClose={handle_Open_Close_Drawer}
            >
              <div className='flex w-screen h-screen'>
                <div className=' flex flex-col p-8 gap-2 w-[85%] h-screen bg-light-primary dark:bg-dark-primary text-light-secondary dark:text-dark-secondary'>
                  <div className=" py-2 hover:outline hover:outline-dark-primary dark:hover:outline-light-primary" onClick={handle_Open_Close_Drawer}>
                    <BiLeftArrowAlt className=' text-[1.375rem]' />
                  </div>
                  <NavItems />
                </div>
                <div className=' opacity-100 h-screen w-[25%]' onClick={handle_Open_Close_Drawer} />
              </div>
              
            </Drawer>
        </ThemeProvider>
      </div>

    </div>
  )
}

export default NavBar;