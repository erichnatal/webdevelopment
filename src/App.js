const Equipe = (props) => {
  return (
    <div>
      <Sobre usuario={props.nome} funcao={props.cargo} anos={props.idade}/>
      <Sociais linkedin={props.linkedin} github={props.github}/>
       <hr/>
    </div>
   
  )
}

const Sobre = (props) => {
  return(
    <div>
      <h2>Olá, eu sou o {props.usuario}</h2>
      <p>Sou {props.funcao} e tenho {props.anos} anos</p>
    </div>
  )
}

const Sociais = (props) => {
  return (
    <div>
      <h3>Redes sociais:</h3>
      <ul>
        <li><a href="https://br.linkedin.com/in/erichnatal">Linkedin</a></li>
        <li><a href="https://github.com/erichnatal">Github</a></li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Erich" cargo="desenvolvedor" idade="22" linkedin="https://br.linkedin.com/in/erichnatal" github="https://github.com/erichnatal"/>
      <Equipe nome="Igor" cargo="desenvolvedor" idade="20" />
      <Equipe nome="Pedro" cargo="autista" idade="20" />
    </div>
  );
}

export default App;