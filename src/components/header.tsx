// Componente do Cabeçalho
import { type LucideIcon} from 'lucide-react';
import {  HeaderContainer, HeaderLinks, LinksHeader, UserSection, Userimg,} from './header.ts'

interface LinkPage{
  label: string;
  href: string;
  icon: LucideIcon;
}
interface PropsHeader{
  links: LinkPage []
}
export default function Header({ links }: PropsHeader) {
  return (


    <HeaderContainer>

        <HeaderLinks> 
            {links.map((link, index) => (
               <li key={index}>
               <LinksHeader to={link.href}>
               <link.icon className="iconheader"/>
               <span className="textheader">{link.label}</span></LinksHeader>
             </li>
             
            ))}
        </HeaderLinks>

            <UserSection>
            <span>Olá usuário!</span>
            <p>Editar perfil</p>
            </UserSection> 

            <Userimg src="https://img.icons8.com/win10/512w/FFFFFF/user.png"> 
            </Userimg>
            

           
    </HeaderContainer>

  )
}
