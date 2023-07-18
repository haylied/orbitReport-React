import satData from "./satData"

const Buttons = (app.filterByType, app.setSat, app.displaySats) => {

  {displaySats.map((sat, id) => {
    return (
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
        </button>
    );
  })
}<button onClick={() => setSat(satData)}>All Orbits
</button>
}

export default Buttons;