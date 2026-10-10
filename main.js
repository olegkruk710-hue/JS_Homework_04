class Character {
    #health;
    constructor(name, health=100) {
        this.name = name;
        this.#health = health;
    }

    get health() {
        return this.#health;
    }

    set health(value) {
        if (value < 0 || value > 100) {
            return;
        }

        this.#health = value;
    }

    takeDamage(amount) {
        if (this.health < amount) {
            this.health = 0;
        } else {this.health -= amount;

        }
        
    }

    attack() {
        console.log(`«Персонаж ${this.name} атакует`)
    }

    showInfo() {
        console.log(
           `Имя: ${this.name} \n` +
           `Текущее здоровье: ${this.health}`)
    }

} 


class Warrior extends Character {
    constructor(name, health) {
        super(name, health);
    }

    attack() {
        console.log(`Воин: ${this.name} атакует мечом`)
    }
    
}



class Mage extends Character {
    constructor(name, health) {
        super(name, health);
    }

    attack() {
        console.log(`Маг: ${this.name} использует заклинание`)
    }
}


class Archer extends Character {
    constructor(name, health) {
        super(name, health);
    }

    attack() {
        console.log(`Лучник: ${this.name} выпустил стрелу`)
    }
}


// 1. Создайте одного воина и одного мага. Выведите информацию о каждом. 
let warrior = new Warrior("Aragorn");
let mage = new Mage("Gendalf");
let archer = new Archer("Legolas")

warrior.showInfo();
mage.showInfo();

// 2. Проверьте set: задайте воину health = 80, затем health = −10. 
// Через get выведите здоровье — должно остаться 80. Перед проверкой урона верните health = 100. 
warrior.health = 80;
warrior.health = -10;

console.log(warrior.health);
warrior.health = 100;

// 3. Нанесите воину 30 урона, а магу — 120. 
warrior.takeDamage(30);
mage.takeDamage(120);

// 4. Снова выведите информацию: у воина должно остаться 70 здоровья, у мага — 0. 
warrior.showInfo();
mage.showInfo();

// 5. Добавьте обоих персонажей в массив. 
let heroes = [warrior, mage, archer];


// 6. Через цикл или forEach() вызовите attack() у каждого элемента массива. 
// Каждый персонаж должен выполнить свою версию метода. 
heroes.forEach(function(obj) {
    obj.attack();
})


// В классе Character используется инкапсуляция: поле #health приватное
// Получить доступ к этому полю извне класса можно только через геттер или сеттер
// В сеттере установлены ограничения: здоровье не может быть меньше 0 или больше 100
// Классы Warrior, Mage и Archer наследуют класс Character с помощью extends
// С помощью super() вызывается конструктор родительского класса и передает значения полей в род. класс
// Приватное поле #health недоступно для прямого обращения в дочерних классах, 
// но наследуемые геттеры и сеттеры позволяют это сделать - это Наследование
// Метод attack() переопределён в каждом дочернем классе - это Полиморфизм


