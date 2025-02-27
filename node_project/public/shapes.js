const shapeSelect = document.getElementById('shape-select');
const colorSelect = document.getElementById('color-select');
const selectedShape = document.getElementById('selected-shape');

shapeSelect.addEventListener('change', (e) => {
    const selectedShapeClass = e.target.value;
    selectedShape.className = selectedShapeClass;
});

colorSelect.addEventListener('change', (e) => {
    const selectedColor = e.target.value;
    selectedShape.style.backgroundColor = selectedColor;
});
