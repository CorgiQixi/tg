function getCookies() {
    window.cook = document.getElementById('i1').value;
    window.cook_1 = decodeURIComponent(escape(atob(window.cook)))
    // 使用正则表达式匹配 money 和 shi 的值
    const regex = /money\{(\d+)\};shi\{(\d+)\}/;
    const match = cook_1.match(regex);

    if (match) {
        // 提取 money 和 shi 的值
        const moneyValue = parseInt(match[1], 10); // 将字符串转换为整数
        const shiValue = parseInt(match[2], 10);   // 将字符串转换为整数

        // 将提取的值赋值给两个不同的变量
        const money = moneyValue;
        const shi = shiValue;

        console.log(money); // 输出: 19
        console.log(shi);   // 输出: 19

        localStorage.setItem('money', money.toString());
        localStorage.setItem('shi', shi.toString());

        window.location.href = "../buy.html";
    } else {
        window.alert("存档错误或已被篡改。");
    }
}
function load_web() {
    window.location.href = 'file:///C:/Users/Lenovo/Documents/Files/HTML/柯基公厕实时拉屎价格/2s.html';
}