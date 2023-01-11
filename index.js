class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello there!</h1>
        <p>This is my first React class component</p>
      </div>
    );
  }
}

// function Hello() {
//   return (
//     <div>
//       <h1>Hello there!</h1>
//       <p>This is my first React function component</p>
//     </div>
//   );
// }

ReactDOM.render(<Hello />, document.getElementById("root"));
