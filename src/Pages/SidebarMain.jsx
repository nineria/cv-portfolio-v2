import { Link, useNavigate } from 'react-router-dom';
import '../style.css';

import {
  Logo,
  LogoContent,
  LogoName,
  SideA,
  Sidebar,
  SidebarLi,
  SidebarUl,
} from '../Interface/Sidebar';

function SidebarMain() {
  const navigate = useNavigate();
  return (
    <Sidebar>
      <LogoContent>
        <Logo>
          <i className='bx bxs-cat'></i>
          <LogoName>PANKORN.WANG</LogoName>
        </Logo>
      </LogoContent>
      <SidebarUl>
        <SidebarLi onClick={() => navigate('/')}>
          <SideA as={Link}>
            <i className='bx bx-spa'></i>
            <span>Home Page</span>
          </SideA>
        </SidebarLi>
        {/* Space */}

        {/* Space */}
        <SidebarLi onClick={() => navigate('/programmingskill')}>
          <SideA as={Link}>
            <i className='bx bx-spa'></i>
            <span>Skills</span>
          </SideA>
        </SidebarLi>
        {/* Space */}
        <SidebarLi onClick={() => navigate('/experiences')}>
          <SideA as={Link}>
            <i className='bx bx-spa'></i>
            <span>Experiences</span>
          </SideA>
        </SidebarLi>
        {/* Space */}
        <SidebarLi onClick={() => navigate('/bookshelf')}>
          <SideA as={Link}>
            <i className='bx bx-spa'></i>
            <span>Bookshelf</span>
          </SideA>
        </SidebarLi>
        {/* Space */}
        <SidebarLi onClick={() => navigate('/trading')}>
          <SideA as={Link}>
            <i className='bx bx-spa'></i>
            <span>Trading</span>
          </SideA>
        </SidebarLi>
        {/* Space */}
        <SidebarLi onClick={() => navigate('/showcase')}>
          <SideA as={Link}>
            <i className='bx bx-spa'></i>
            <span>Showcase</span>
          </SideA>
        </SidebarLi>
        {/* Space */}
        <SidebarLi>
          <SideA href='#'>
            <i className='bx bx-spa'></i>
            <span>GitHub & LinkedIn</span>
          </SideA>
        </SidebarLi>
        {/* Space */}
      </SidebarUl>
    </Sidebar>
  );
}

export default SidebarMain;
