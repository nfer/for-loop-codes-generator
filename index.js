var $content = document.getElementById('content');
var $result = document.getElementById('result');
var $clear = document.getElementById('clear');
var $generate = document.getElementById('generate');

$clear.addEventListener('click', function() {
    $content.value = "";
    $result.value = "";
})

$generate.addEventListener('click', function() {
    // first clear result textarea value
    $result.value = "";

    var baseCode = $content.value;
    if (!baseCode.length) {
        alert('Base Codes is empty!');
        return;
    }

    var param = document.getElementById('param').value;
    if (!param.length) {
        alert('for-loop param is empty!');
        return;
    }

    var min = document.getElementById('min').value;
    if (!min.length) {
        alert('for-loop min is empty!');
        return;
    }
    min = Number(min);
    var step = document.getElementById('step').value;
    if (!step.length) {
        alert('for-loop step is empty!');
        return;
    }
    step = Number(step);
    var max = document.getElementById('max').value;
    if (!max.length) {
        alert('for-loop max is empty!');
        return;
    }
    max = Number(max);

    var result = '';
    for (let index = min; index <= max; index += step) {
        result += baseCode.replace(new RegExp(param, 'g'), index) + '\n'
    }
    $result.value = result;
})