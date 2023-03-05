function testfirst() {
    let boll = {};

    let dot = Symbol('dot');
    boll[dot] = "символ";
    boll["Beach"] = "рядок";

    // Перевіряємо, що значення поля, доданого за допомогою символу, правильне
    if (boll[dot] !== "символ") {
        console.error("Помилка: неправильне значення поля");
    }
    else {
        console.log(boll[dot]); // виведе символ
    }

    // Перевіряємо, що значення поля, доданого за допомогою рядка, правильне
    if (boll["Beach"] !== "рядок") {
        console.error("Помилка: неправильне значення поля");
    }
    else{
        console.log(boll["Beach"]); //виведе рядок
    }

}
testfirst();