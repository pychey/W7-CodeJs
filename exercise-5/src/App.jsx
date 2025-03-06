import Car from "./components/Cars";
import { CARS } from "./data";

//The Sample HTML CSS I GOT FROM IS IN FOLDER CARD_UI_VECHILE_RENT

function App() {
  return <>
    <main class="main">
        <div class="container">
            <section class="grid_cards">
                {CARS.map((car)=> <Car car = {car}/>)}
            </section>
        </div>
    </main>
  </>;
}

export default App;
