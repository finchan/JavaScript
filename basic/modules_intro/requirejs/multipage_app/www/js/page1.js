//Load common code that includes config, then load the app logic for this page.
//可以是['./common']也可以是['common']
//包括下面的['./app/main1']也可以是['app/main1']
//如果写成相对路径，则是以当前目录为基点
requirejs(['common'], function (common) {
    requirejs(['app/main1']);
});
