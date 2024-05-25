window.onload = function() {
    var tanchuang = confirm('使用Cookies存档吗？')
    if (tanchuang) {
        window.money = localStorage.getItem('money');
        window.shi = localStorage.getItem('shi');
    }
    else {
        window.money = 300; // 初始化 money
        window.shi = 100; // 初始化 shi
    }
    document.getElementById('p4').innerText = window.shi.toString();
    document.getElementById('p3').innerText = window.money.toString();
    "use strict"; // 开启严格模式
    document.body.style.overflowY = 'hidden';
    yuanDisplay(); // 初始化调用 yuanDisplay
    setInterval(yuanDisplay, 2000); // 每2秒调用一次 yuanDisplay
}

function yuanDisplay() {
    var num = (Math.floor(Math.random() * 20) + 1) * 10;
    if (num !== 0) {
        var displayElement = document.getElementById('yuanDisplay');
        if (displayElement) { // 检查元素是否存在
            displayElement.innerText = num;
        }
    } else {
        yuanDisplay(); // 如果 num 为 10，重新调用 yuanDisplay
    }
    window.num = num
}

function buy() {
    var num = parseInt(document.getElementById('yuanDisplay').innerText, 10);
    if (isNaN(num)) {
        alert('无法获取购买数量，请重试！');
        return;
    }
    if (window.money < num * window.ton) {
        alert('余额不足，无法完成购买！');
        return;
    }
    window.shi += num * window.ton;
    window.money -= num * window.ton;
    document.getElementById('p4').innerText = window.shi.toString();
    document.getElementById('p3').innerText = window.money.toString();
}

function getNumberInput() {
    var ton = document.getElementById('i1').value;
    ton = parseInt(ton, 10);
    window.ton = ton;
}

function getNumberInput1() {
    var ton1 = document.getElementById('i2').value;
    ton1 = parseInt(ton1, 10);
    window.ton1 = ton1;
}
function mai() {
    let money;
    let shi;
    if (ton1 !== 0 && ton1 > 0 && ton1 <= window.shi) {
        window.money = window.money + (ton1 * window.num)
        window.shi = window.shi - ton1
        document.getElementById('p4').innerText = window.shi.toString();
        document.getElementById('p3').innerText = window.money.toString();
    } else {
        window.alert('不能为0或<0,或剩余屎不足')
    }
}

