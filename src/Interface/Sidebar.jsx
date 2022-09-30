import styled from 'styled-components';

export const Sidebar = styled.div`
  height: 100%;
  width: 250px;
  padding: 6px 14px;
  top: 0;
  position: sticky;
`;

export const LogoContent = styled.div`
  color: black;
  display: flex;
`;

export const Logo = styled.div`
  color: black;
  display: flex;
  height: 50px;
  align-items: center;
  font-size: 26px;
  margin-right: 5px;
  margin-top: 20px;
`;

export const LogoName = styled.div``;

export const SidebarUl = styled.ul`
  margin-top: 10px;
  padding: 10px;
  height: 720px;
`;
export const SidebarLi = styled.li`
    display:flex;
    height: 40px;
    width 100%;
    list-style: none;
    margin : 0 5px;
    align-items:center;
    border-radius: 5px;
    padding : 5px;
    cursor:pointer;
    transition: 0.1s ease-out;
    &:hover{
        background-color: #fafafa;
        
    }

`;
export const SidebarI = styled.i`
  margin-right: 5px;
`;

export const SideA = styled.a`
  text-decoration: none;
  color: black;
  font-size: 15px;

  text-align: center;
`;

export const ProfileContent = styled.div``;
export const Profile = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 15px;
  height: 60px;
`;
export const ProfileDetails = styled.div`
    display:flex;
    align-items; center;
    justify-content:center;
    align-items:center;
`;

export const nameJob = styled.div``;
export const Name = styled.div`
  margin-top: 5px;
  margin-left: 10px;
  font-size: 15px;
`;
export const Job = styled.div`
  margin-left: 10px;
  font-size: 15px;
`;
