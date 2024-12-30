import './App.css'

// Imagens
import Bixinho from "./assets/Bixinho.jpg"

// Components
import ManageData from './Components/ManageData'
import ListRender from './Components/ListRender'
import ConditionalRender from './Components/ConditionalRender'
import ShowUserName from './Components/ShowUserName'
import CarDetails from './Components/CarDetails'
import { useState } from 'react'
import Fragmento from './Components/Fragmento'
import Container from './Components/Container'
import ExecuteFunction from './Components/ExecuteFunction'
import Message from './Components/Message'
import ChangeMessageState from './Components/ChangeMessageState'
import UserDetails from './Components/UserDetails'

function App() {
  const [username] = useState("Maria")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234},
  ]

  const peoples = [
    {id: 1, nome: "Matheus", idade: 21, profissao: "Estudante"},
    {id: 2, nome: "Davi", idade: 20, profissao: "Estudante"},
    {id: 3, nome: "Marcos", idade: 20, profissao: "Estudante"}
  ]

  function showMessage(){
    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Imagem de física" />
      </div>
      {/* Imagem em asset */}
        <img src={Bixinho} alt="" />
      <div>
        <ManageData/>
        <ListRender/>
        <ConditionalRender/>
        {/* props */}
        <ShowUserName name={username}/>
        {/* destructuring */}
        <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
        {/* reaproveitando */}
        <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true}/>
        <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false}/>
        {/* loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar}/>
        ))}
        {/* fragment */}
        <Fragmento propFragment="Teste"/>
        {/* children */}
        <Container myValue="testing">
          <p>E este é o conteúdo</p>
          <h5>Testando o container</h5>
        </Container>
        {/* executar função */}
        <ExecuteFunction myFunction={showMessage}/>
        {/* state lift */}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>
        {/* desafio 3 */}
        {peoples.map((peoples) => (
          <UserDetails
          key={peoples.id}
          name={peoples.nome}
          age={peoples.idade}
          job={peoples.profissao}/>
        ))}
      </div>
    </div>
  )
}

export default App
