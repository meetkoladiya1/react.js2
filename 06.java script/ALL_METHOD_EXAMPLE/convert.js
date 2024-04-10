// Number()
{
    let num  = Number(true);
    let num1 = Number(false);
    let num2 = Number(" 30");

    console.log(num);
    console.log(num1);
    console.log(num2);
}
{
    let num3 = Number("30");
    let num4 = Number("30  ");
    let num5  = Number("30.32");

    console.log(num3);
    console.log(num4);
    console.log(num5);
}
{
    let num6  = Number("30,32");
    let num7  = Number("30 32");
    let num8  = Number(" 30 ");
    let num9  = Number("JavaScript");

    console.log(num6);
    console.log(num7);
    console.log(num8);
    console.log(num9);
}

// parseFloat()
{
    let parse = parseInt("-50");
    let parse1 = parseInt("-50.54");

    console.log(parse);
    console.log(parse1);
}
{
    let parse2 = parseInt("50");
    let parse3 = parseInt("50 54");

    console.log(parse2);
    console.log(parse3);
}
{
    let parse4 = parseInt("50.54");
    let parse5 = parseInt("50 man");
    let parse6 = parseInt("man 50");

    console.log(parse4);
    console.log(parse5);
    console.log(parse6);
}

// parseFloat();
{
    let float = parseFloat("40");
    let float1 = parseFloat("40 50 60");

    console.log(float);
    console.log(float1);
}
{
    let float2 = parseFloat("40.54");
    let float3 = parseFloat("40 year");

    console.log(float2);
    console.log(float3);
}
{
    let float4 = parseFloat("year 40");
    let float5 = parseFloat(" 40");

    console.log(float4);
    console.log(float5);
}

// Number Object Method

// Number.isInteger()
{
    let int = Number.isInteger(30);
    let int1 = Number.isInteger(30.40);
    let int2 = Number.isInteger(30 );
    console.log(int);
    console.log(int1);
    console.log(int2);
}
{
    let int3 = Number.isInteger( 30);
    let int4 = Number.isInteger(30,40);
    let int5 = Number.isInteger(30 + 40);
    console.log(int3);
    console.log(int4);
    console.log(int5);
}
{
    let int6 = Number.isInteger( 30 );
    let int7 = Number.isInteger("30 people");
    let int8 = Number.isInteger("people 30");
    console.log(int6);
    console.log(int7);
    console.log(int8);
}

// Number.isSafeInteger();
{
    let safe = Number.isSafeInteger(10);
    console.log(safe);
}
{
    let safe1 = Number.isSafeInteger(1234567890);
    console.log(safe1);
}
{
    let safe2 = Number.isSafeInteger(-1234567890);
    console.log(safe2);
}

// Number.parseFloat()
{
    let float = Number.parseFloat("20");
    let float1 = Number.parseFloat("20 30 40");

    console.log(float);
    console.log(float1);
}
{
    let float2 = Number.parseFloat("20.50");
    let float3 = Number.parseFloat("20 ");

    console.log(float2);
    console.log(float3);
}
{
    let float4 = Number.parseFloat("20 logos");
    let float5 = Number.parseFloat("logos 20");

    console.log(float4);
    console.log(float5);
}

// Number.parseInt()
{
    let parint = Number.parseInt("-60");
    let parint1 = Number.parseInt("-60.54");

    console.log(parint);
    console.log(parint1);
}
{
    let parint2 = Number.parseInt("60");
    let parint3 = Number.parseInt("60.54");

    console.log(parint2);
    console.log(parint3);
}
{
    let parint4 = Number.parseInt("60 90");
    let parint5 = Number.parseInt(" -60 ");

    console.log(parint4);
    console.log(parint5);
}