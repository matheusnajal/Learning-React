function UserDetails({name, age, job}) {
  return (
    <div>
      <h2>Detalhe das pessoas</h2>
      <ul>
        <li>Nome: {name}</li>
        <li>Idade: {age}</li>
        <li>Profissão: {job}</li>
      </ul>
      {age >= 18 ? (
        <p>Pode tirar carteira</p>
      ) : (
        <p>Não pode tirar carteira</p>
      )}
    </div>
  )
}

export default UserDetails
