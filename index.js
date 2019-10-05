const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.option('babel');
    }

    learn(){
        this.log('learn yeoman');
    }

    egg(){
        console.log('this is egg project');
    }

};