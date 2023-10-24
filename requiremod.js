const name = 'john';

const sayHi = (name) => {
    console.log(`Hi ${name}`);
}

const sayHi1 = () => {
    console.log(`Hi Biggy ${name}`);
}

sayHi1();

module.exports = { name, sayHi };