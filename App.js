// Root Component
// function App(){
//   return (<h1>Hello React JS.....</h1>); // JSX
// }
const App = ()=>{
  const message = 'React JS...';
  const name= 'Amit';
return (<div>
  <h1>Hello {message}</h1> 
  <h2>Hi {message}</h2>
  <p>My Name is {name}</p>
  </div>)
}
export default App;