    let a = 20 + 30 + ' ' + 'hello world';
    let b = 'hello world' + ' ' + 20 + 30;
    console.log('======follow the order precedence======');
    console.log(a);
    console.log(typeof(a));
    console.log(b);
    console.log(typeof(b));

    //here changing the data type dynamically that why this JS is call dynamically data type
    let myVar; //undefined type
    myVar = 87;
    myVar = 'hello world'
    console.log(myVar);
    console.log(typeof(myVar));

    let myNull = null; //null type
    console.log(myNull);
    console.log(typeof(myNull));
    console.log(myVar == myNull);



