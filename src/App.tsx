import Grid from "./Components/Grid";
import SolveButton from "./Components/SolveButton";

const App = () => {
  const GRID_SIZE = 4;
  return (
    <>
      <h1 className="text-3xl font-bold text-center m-5">Squaredle Solver</h1>
      <Grid GRID_SIZE={GRID_SIZE} />
      <SolveButton GRID_SIZE={GRID_SIZE} />
    </>
  );
};

export default App;