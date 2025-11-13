import usuario from '../../assets/Usuario.png'
import sacola from '../../assets/Sacola.png'
import styled from 'styled-components'


const Icones = styled.li`
   margin-right: 40px;
   width: 25px;
`
const Icone = styled.ul`
   display: flex;
   align-items: center;
`

const icones = [usuario, sacola]


function IconesHeader () {
     return (
     <Icone>
          { icones.map( (icone, index) => (
            <Icones key={index}><img src={icone}></img></Icones>
          )) } 
     </Icone>
     )
}

export default IconesHeader