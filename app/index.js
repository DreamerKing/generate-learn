const Generator = require('yeoman-generator');
const config = require('./config');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        for (const key in config.options) {
          this.option(key, config.options)
        }
    }

    prompting() {
        this.log('prompting');
    }

    initalizing(){
        this.pkg = require('../package.json');
        this.log('initalzing');
    }

    learn(){
        this.log('learn yeoman');
    }

    egg(){
        console.log('this is egg project');
    }

    writing() {
        const templateData = {
            appname: this.appname,
            date: new Date().toISOString().split('T')[0],
            name: this.pkg.name,
            version: this.pkg.version
        };
        const copy = (input, output) => {
            this.fs.copy(this.templatePath(input), this.destinationPath(output));
        };

        const copyTpl = (input, output, data) => {
            this.fs.copyTpl(this.templatePath(input),
            this.destinationPath(output),
            data
            );
        };

        this.log('writing');
    }

    install() {
        this.log('install');
    }
};