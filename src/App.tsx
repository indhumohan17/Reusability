import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./component/Card";

function App() {
  const handleButtonClick = (title: string) => {
    alert(`You clicked on ${title}`);
  };

  return (
    <div className="container mt-4 mb-4 text-center bg-light rounded p-4 border-opacity-25">
      <h1 className="text-center mb-4">Image Gallery</h1>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 mb-4">
          <Card
            title="Beautiful Sunset"
            description="A stunning view of the sunset over the mountains."
            image="https://picsum.photos/id/1/300/200"
            buttonLabel="View More"
            onButtonClick={() => handleButtonClick("Beautiful Sunset")}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-4">
          <Card
            title="City Lights"
            description="The city comes alive at night with dazzling lights."
            image="https://picsum.photos/id/2/300/200"
            buttonLabel="View More"
            onButtonClick={() => handleButtonClick("City Lights")}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-4">
          <Card
            title="Forest Path"
            description="A serene path through the lush green forest."
            image="https://picsum.photos/id/3/300/200"
            buttonLabel="View More"
            onButtonClick={() => handleButtonClick("Forest Path")}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
