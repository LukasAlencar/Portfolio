import Avatar from '../img/fotoMinha.jpg'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './informationCOntainer'


import "../styles/components/sidebar.sass"

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Lucas Kauan"/>
      <div className='name'>Lucas Kauan</div>
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="#" className="btn">Download</a>
    </aside>
  )
}

export default Sidebar