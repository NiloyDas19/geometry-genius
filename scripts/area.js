let areaStore = [];

function calculateArea(widthId , baseID, textID, shape)
{
    console.log("connected");
    // get  width value
    const widthInput = document.getElementById(widthId);
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);

    // get length value
    const lengthInput = document.getElementById(baseID);
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);

    let area = width * length;
    if(shape === 'Triangle' || shape === 'Rhombus' || shape === 'Pentagon') area *= 0.5;
    else if(shape === 'Ellipse') area *= Math.PI;

    // display area
    const areaSpan = document.getElementById(textID);
    areaSpan.innerText = area.toFixed(2);
    const areaCalculationContainer = document.getElementById('area-calculation-container');

    let len = areaStore.length + 1;
    let child = len.toString() + '. ' + shape;
    child = child + '                ' + area.toFixed(2).toString() + "cm2" + '\n';
    areaStore.push(child);
    areaCalculationContainer.innerText = areaStore;
}