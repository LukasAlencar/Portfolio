import {AiFillPhone, AiOutlineMail, AiFillEnvironment}  from "react-icons/ai"

import '../styles/components/information-container.sass'

const infos = [
    {name: "Telefone", icon: <AiFillPhone id="phone-icon"/>, value: "(11)94074-5479"},
    {name: "Email", icon: <AiOutlineMail id="email-icon"/>, value: "alencarkauan12@gmail.com"},
    {name: "Localização", icon: <AiFillEnvironment id="pin-icon"/>, value: "Guarulhos - SP"}

]

const InformationContainer = () => {
  return (
    <section id="information">
        {infos.map((info) => (
            <div key={info.name} className="info-card">
                {info.icon}
                <div>
                    <h3>{info.name}</h3>
                    <p>{info.value}</p>
                </div>
            </div>
        ))}
    </section>
  )
}

export default InformationContainer