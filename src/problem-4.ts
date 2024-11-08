{
//


type Circle = {
    shape: "circle";
    radius: number;
  };
  
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  
  type Shape = Circle | Rectangle;
  
  function calculateShapeArea(shape: Shape): void { 
    if ("radius" in shape) {
      console.log(parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2)));  
    } else if ("width" in shape && "height" in shape) {
      console.log(shape.width * shape.height); 
    } else {
      console.log("Invalid type"); 
    }
  }
  
  calculateShapeArea({ shape: "circle", radius: 5 });
  
  calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
 
  
//
}