// formula for AREA of SQUARE
function getAreaSquare (num1){
    //A = x**2
    return parseFloat(num1) ** 2;
}

// formula for PERIMETER of SQUARE
function getPerimeterSquare (num1){
    //P = 4 * sides
    return 4 * parseFloat(num1);
}

// formula for VOLUME of a SQUARE BOX
function getVolumeSquare (num1){
    //V = s**3
    return parseFloat(num1) ** 3;
}

// formula for AREA of TRIANGLE
function getAreaTriangle (num1, num2){
    //Area of a Triangle = ½ × base × height
    return (1/2) * (parseFloat(num1) * parseFloat(num2));
}

// formula for PERIMETER of TRIANGLE
function getPerimeterTriangle (num1, num2, num3){
    // P=a+b+c
    return parseFloat(num1) + parseFloat(num2) + parseFloat(num3);
}

// formula for VOLUME of TRIANGLE
function getVolumeTriangle (num1, num2, num3){
    // V=½bhl
    return (1/2) * (parseFloat(num1) * parseFloat(num2) * parseFloat(num3));
}

// formula for AREA of CIRCLE
function getCircleArea (num1){
    //  A = π×r**2
    return Math.PI.toFixed(2) * (parseFloat(num1) ** 2);
}

// formula for CIRCUMFERENCE of CIRCLE
function getCircleCircumference (num1){
    //  C = 2πr
    return 2 * Math.PI.toFixed(2) * parseFloat(num1);
}

// formula for VOLUME of CIRCLE
function getCircleVolume (num1, num2){
    //  V = πr**2h
    return (Math.PI.toFixed(2) * (parseFloat(num1) ** 2)) * parseFloat(num2);
}


function getShape () {
    let shape = document.getElementById("shapes").value;

    if(shape == "Square") {
        document.getElementById("firstInput").style.display = "block";
        document.getElementById("secondInput").style.display = "none";
        document.getElementById("thirdInput").style.display = "none";
        return "Square";
    }
    if(shape == "Triangle") {
        document.getElementById("firstInput").style.display = "block";
        document.getElementById("secondInput").style.display = "block";
        document.getElementById("thirdInput").style.display = "block";
        return "Triangle";
    }
    if(shape == "Circle") {
        document.getElementById("firstInput").style.display = "block";
        document.getElementById("secondInput").style.display = "block";
        document.getElementById("thirdInput").style.display = "none";
        return "Circle";
    }


}

function getOutput () {
    let displayArea = document.getElementById("displayArea");
    let displayPerimeter = document.getElementById("displayPerimeter");
    let displayVolume = document.getElementById("displayVolume");

    let areaFormula = document.getElementById("areaFormula");
    let perimeterFormula = document.getElementById("perimeterFormula");
    let volumeFormula = document.getElementById("volumeFormula");

    let displayUnit1 = document.getElementById("displayUnit1");
    let displayUnit2 = document.getElementById("displayUnit2");
    let displayUnit3 = document.getElementById("displayUnit3");

    if (getShape() == "Square"){
        let val1 = document.getElementById("input1").value;

        displayArea.innerHTML = getAreaSquare(val1);
        displayPerimeter.innerHTML = getPerimeterSquare(val1);
        displayVolume.innerHTML = getVolumeSquare(val1);

        areaFormula.innerHTML = "A = Side2 (squared)";
        perimeterFormula.innerHTML = "P = 4(Side)";
        volumeFormula.innerHTML = "V = s3 (cube)";
    }

    if (getShape() == "Triangle"){
        let val1 = document.getElementById("input1").value;
        let val2 = document.getElementById("input2").value;
        let val3 = document.getElementById("input3").value;

        displayArea.innerHTML = getAreaTriangle(val1, val2);
        displayPerimeter.innerHTML = getPerimeterTriangle(val1, val2, val3);
        displayVolume.innerHTML = getVolumeTriangle(val1, val2, val3);

        areaFormula.innerHTML = "A = ½ × base × height";
        perimeterFormula.innerHTML = "P = a + b + c";
        volumeFormula.innerHTML = "V = ½ bhl";
    }

    if (getShape() == "Circle"){
        let val1 = document.getElementById("input1").value;
        let val2 = document.getElementById("input2").value;
        let val3 = document.getElementById("input3").value;

        displayArea.innerHTML = getCircleArea(val1).toFixed(2);
        displayPerimeter.innerHTML = getCircleCircumference(val1);
        displayVolume.innerHTML = getCircleVolume(val1, val2);

        areaFormula.innerHTML = "A = π×r2 (squared)";
        displayUnit2.innerHTML = "Circumference";
        perimeterFormula.innerHTML = "C = 2πr";
        volumeFormula.innerHTML = "Volume of Cylinder = πr2h";
    }

}