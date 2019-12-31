import React from 'react';

function Food({ fav, nation }){
  return (
<h1>I love {fav} and, this is from {nation}</h1>
  );
}
function OwPosition({ position }){
  return (
    <h2>오버워치에는 {position}가 있다</h2>
  );
}
const favFoods = [
  {
    name: "kimchi",
    nation: "korea"
  },
  {
    name: "kimbab",
    nation: "korea"
  },
  {
    name: "sushi",
    nation: "japan"
},
{
  name: "pasta",
  nation: "italy"
}
]


function App() {
  return (
    <div className="App">
      <p>Hello react!</p>
      {favFoods.map(food => <Food fav={food.name} nation={food.nation} />)}
    </div>
  );
}

export default App;
