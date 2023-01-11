// class Hello extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello there!</h1>
//         <p>This is my first React class component</p>
//       </div>
//     );
//   }
// }

// function Hello() {
//   return (
//     <div>
//       <h1>Hello there!</h1>
//       <p>This is my first React function component</p>
//     </div>
//   );
// }

function getMood() {
  const moods = ["Angry", "Hungry", "Silly", "Quiet", "Lonely"];
  return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My current mood is: {getMood()}</h1>
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
