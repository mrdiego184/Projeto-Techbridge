import React from 'react'
import { HeaderContainer, HeaderLinks } from './header.ts'

export default function Header() {
  return (

    <HeaderContainer>
        <HeaderLinks>
            <li>Meus Cursos</li>
            <li>Certificados</li>
            <div>
            <span>Olá usuário!</span>
            <p>Editar perfil</p>
            <img src="https://img.icons8.com/win10/512w/FFFFFF/user.png" width="35px"></img>
            </div>
        </HeaderLinks>
    </HeaderContainer>
  )
}
