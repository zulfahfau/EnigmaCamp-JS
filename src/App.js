import logo from './logo.svg';
import './App.css';
import { HelloWorld } from './HelloWorld';
import ClassComponent from './ClassComponent';
import BookComponent from './components/Book/BookComponent';
import { Container,Row } from 'react-bootstrap';
import BookList from './components/Book/BookList';
import Books from './components/Book/Book';
import Member from './components/Member/Member';
// function helloWorld(){
//   return <p>Helloworld</p>
// }

function App() {
  //component ada 2 : stateless : fungsional component
  //statefull : class component
  const fruit =['Manggo','Apple','Banana'];
  // fruit.forEach(fruit=>console.log(fruit));
  const print = fruit.forEach(fruit=>{
    return fruit;
  });
  console.log(print);

  //array of object
  const students =[{
    id: 1,
    name: 'Zulfah'},
    {
      id:2,
      name:'laily'
    }
  ];
  // students.map(student => console.log(student.name));
  const printStudent = students.map(students=>{return students;});
  console.log(printStudent);
  //perbedaannya map foreach di kecepatannya. kalau for each dari index kecil ke besar
  //kalau map membentuk sebuah array baru yang didapat array itu sendiri
  

  
  return (
    <Container>
      <Row>
      {/* <BookList /> */}

        
      <Books />
      </Row>
    </Container>
  
  );
}

export default App;
// //Membuat variabel (let & Const)
  // const fullName = "zulfah Fauziah";//embedding expression in jsx
  // const buttonText ='click me';
  // const buttonStyle = { backgroundColor: 'red', color:"white"  }
  // const summation = <p>Hasil dr 5+5 adalah {5+5}</p>

    // <div className="App">
    //   <h3>hi, {fullName}</h3>
    //   <hr></hr>
    //   <label className ="label" htmlFor="name">Nama?</label>
    //   <input type="text" id="name"/>
    //   <button style={buttonStyle}>{buttonText}</button>
    //   {summation}
    //   {/* <HelloWorld/>
    //   <ClassComponent/> */}
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>  */}
    // </div>

    // import { Container, Row } from "react-bootstrap";
// import BookList from "./components/books/BookList"
// const App = () => {
//   return (
//     <Container>
//       <Row>
//         <BookList />
//       </Row>
//     </Container>
//   );
// }

// export default App;