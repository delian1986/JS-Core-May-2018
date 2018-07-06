function createComputerHierarchy() {
    class Product {
        constructor(manufacturer) {
            this.manufacturer = manufacturer;
            if (this.constructor === Product) {
                throw new Error('cannot create abstract class');
            }
        }
    }

    class Keyboard extends Product {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = Number(responseTime);
        }
    }

    class Monitor extends Product {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = Number(width);
            this.height = Number(height);
        }
    }

    class Battery extends Product {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = Number(expectedLife);
        }
    }

    class Computer extends Product {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            super(manufacturer);
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;

            if (this.constructor === Computer) {
                throw new Error('cannot create abstract class');
            }
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (value instanceof Battery) {
                this._battery = value;
            } else {
                throw new TypeError('The value should be a battery!')
            }
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if (value instanceof Keyboard) {
                this._keyboard = value;
            } else {
                throw new TypeError('The value should be a Keyboard!')

            }
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if (value instanceof Monitor) {
                this._monitor = value;
            } else {
                throw new TypeError('The value should be a Monitor!')
            }
        }
    }


    return {
        Product,
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

// let result = createComputerHierarchy();

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

// let keyboard = new Keyboard('Logitech', 70);
// let monitor = new Monitor('Benq', 28, 18);
// let l1 = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", "pesho")

let pc=new Computer("Most Computers",2,8,1.5)
console.log(pc);