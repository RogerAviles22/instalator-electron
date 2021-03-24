// ./build_installer.js

// 1. Import Modules
const { MSICreator } = require('electron-wix-msi');
const path = require('path');

// 2. Define input and output directory.
// Important: the directories must be absolute, not relative e.g
// appDirectory: "C:\\Users\sdkca\Desktop\OurCodeWorld-win32-x64", 
const APP_DIR = path.resolve(__dirname, './MensajeMundo-win32-x64');
// outputDirectory: "C:\\Users\sdkca\Desktop\windows_installer", 
const OUT_DIR = path.resolve(__dirname, './windows_installerx64');

const BCKG_DIR = path.resolve(__dirname, './build/background.jpg');
const BNN_DIR = path.resolve(__dirname, './build/banner.jpg');
/*const EI_DIR = path.resolve(__dirname, './build/exclamationIcon.jpg');
const II_DIR = path.resolve(__dirname, './build/infoIcon.jpg');
const NI_DIR = path.resolve(__dirname, './build/newIcon.jpg');
const UI_DIR = path.resolve(__dirname, './build/upIcon.jpg');*/

// 3. Instantiate the MSICreator
const msiCreator = new MSICreator({
    appDirectory: APP_DIR,
    outputDirectory: OUT_DIR,

    // Configure metadata
    description: 'This is a demo application',
    exe: 'MensajeMundo',
    name: 'Mensaje al Mundo Exterior',
    manufacturer: 'Signature-E',
    version: '1.0.0',
    appIconPath: './build/icon.ico',
    language:1036,


    // Configure installer User Interface
    ui: {
        chooseDirectory: true,
        images: {
            background: BCKG_DIR,
            banner: BNN_DIR/*,
            exclamationIcon: EI_DIR,
            infoIcon: II_DIR,
            newIcon: NI_DIR,
            upIcon : UI_DIR*/
        }
    },
});



// 4. Create a .wxs template file
msiCreator.create().then(function(){

    // Step 5: Compile the template to a .msi file
    msiCreator.compile();
});