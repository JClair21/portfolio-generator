const profileDataArr = process.argv.slice(2);


//Notice the lack of parenthesis around the 'profileDataArr' parameter?
const printProfileData = profileDataArr => {
        //This...
        for (let i = 0; i < profileDataArr.length; i += 1) {
            console.log(profileDataArr[i]);
        }}


        console.log('================');

        //Is the same as this...
        profileDataArr.forEach(profileItem => console.log(profileItem)),


                printProfileData(profileDataArgs)



                /*const profileDataArgs = process.argv.slice(2, process.argv.length);
                console.log(profileDataArgs);

                const message = 'Hello Node!';
                message = 'Goodbye Node!';

                const sum = 5 + 3;
                sum += 1;

                var sum = 5 + 3;
                console.log(message);
                console.log(sum);


                var commandLineArgs = process.argv;
                console.log(commandLineArgs);
                console.log(process);
                const profileDataArgs
                const generatePage = () => 'Name: Jane, GitHub: janehub';
                console.log(generatePage());

                const printProfileData = (profileDataArr) => {
                    //console.log(profileDataArgs);
                };

                printProfileData(profileDataArgs);

                const message = 'Hello Node!';

                //var is function-scoped, so redeclaring it in a block will cause its value outside the block to change as well:

                var one = 'one: declared outside the block';

                if(true ===true) {
                    var 'one: declared inside the block'; //notice we redeclare 'one' here
                    console.log(one); //prints 'one: declared inside the block', because the variable was
                }
                    
                    redeclared in the 'if' block. The outer 'var' variable 
                    was therefore destroyed and replaced by inner var variable.
                    // 'let' is block-scoped, so redclaring a 'let' variable inside of a block creates a 
                    //different 'let' variable with the same name whole scope is inside the block'

                console.log(one); //also prints 'one:declared inside the block', because the variable was 
                redeclared in the 'if' block. The outer 'var' 
                variable was therefore destroyed and repalced byy inner var variable.

                    let two = 'two: declared inside the block'
                    console.log(two); //prints 'two: declared outside the block', because two declared 
                    inside the block is a separate variable. The 'let' variables are unrelated  and therefore
                     unaffected by each other.


                }

                if(true === true) {
                    const message = 'Hello ES6!';
                    let sum = 5;
                    sum += 10;
                    console.log(message);
                    console.log(sum);
                }
                */