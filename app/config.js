module.exports = {
    options: {
        'skip-wecome-message': {
            desc: "Skips the welcome message",
            type: Boolean
        },
        'skip-install-message': {
            desc: "skip the message after the installation of dependencies"
        }
    },
    prompts: [
        {
            type: 'checkbox',
            name: 'features',
            message: 'Which addtional features would you like to include?',
            choices: [
                {
                    name: 'Sass',
                    value: 'includeSass',
                    checked: true
                }
            ]
        },
        {
            type: 'confirm',
            name: 'includeJQuery',
            message: 'Would you like to include jQuery?',
            default: true,
            when: answers => !answers.features.includes('includeBootstrap')
        }
    ],
    dirsToCreate: ['app/controllers'],
    filesToCopy: [
        
    ]
}