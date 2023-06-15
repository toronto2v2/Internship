
const dbObj = {
    sex:'male',
};

const jkdgf = Object.create(dbObj, {
    name: {
        value: 'misha',
        enumerable:true,
        configurable: true,
        writable: true
    }
});


console.log(jkdgf.prototype);