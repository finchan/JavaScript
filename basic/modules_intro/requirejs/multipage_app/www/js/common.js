//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
requirejs.config({
    baseUrl: 'js/lib', //设置后，目录的基点是包含require.js的html所在的目录
    paths: {
        app: '../app'   //目录基点是requirejs的所在目录
    }
});
