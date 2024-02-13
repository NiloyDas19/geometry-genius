console.log('connected');

function calculateArea(widthId , baseID, textID, shape)
{
    console.log("connected");
    // get rectangle width value
    const rectangleWidthInput = document.getElementById(widthId);
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    console.log(width);

    // get rectangle height value
    const rectangleLengthInput = document.getElementById(baseID);
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    console.log(length);

    let area = width * length;
    if(shape === 'Triangle' || shape === 'Rhombus' || shape === 'Pentagon') area *= 0.5;
    else if(shape === 'Ellipse') area *= Math.PI;

    // display rectangle area
    const rectangleAreaSpan = document.getElementById(textID);
    rectangleAreaSpan.innerText = area;
}