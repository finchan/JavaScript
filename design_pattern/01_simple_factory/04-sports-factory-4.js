function createPop(type, text) {
    var o = new Object();
    o.content = text;
    o.show = function() {
        console.log(o.content);
    }
    switch(type) {
        case 'alert':
            {
                console.log('警示框代码差异');
            }
            break;
        case 'prompt':
            {
                console.log('提示框代码差异');
            }
            break;
        case 'confirm':
            {
                console.log('确认框代码差异');
            }
            break;
    }
    return o;
}

var userNamePrompt = createPop('prompt', 'Type username and password');
userNamePrompt.show();