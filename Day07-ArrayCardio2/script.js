// ## Array Cardio Day 2
    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];
    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];
    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?

    const isAdult = people.some(person => ((new Date()).getFullYear() - person.year) >= 19);

    // The below code will perform the same function as the above one, this just has better readablility.

    /*const isAdult = people.some(function(person){
    	const currYear = (new Date()).getFullYear();
    	if(currYear - person.year >= 19){
    		return true;
    	}
    });*/
    console.log({isAdult});

    // Array.prototype.every() // is everyone 19 or older?
    const isAdultAll = people.every(person => ((new Date()).getFullYear() - person.year) >= 19);

    // The below code will perform the same function as the above one, this just has better readablility.

    /*const isAdultAll = people.some(function(person){
    	const currYear = (new Date()).getFullYear();
    	if(currYear - person.year >= 19){
    		return true;
    	}
    });*/

    console.log({isAdultAll});


    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    const findId = comments.find(comment => comment.id === 823423);

    // The below code will perform the same function as the above one, this just has better readablility.

    /*const findId = comments.find(function(comment){
    	if(comment.id === 823423){
    		return true;
    	}
    });*/

    console.log(findId);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    console.log('table before remove');
    console.table(comments);

    const remove = comments.findIndex(comment => comment.id === 823423);
    comments.splice(remove, 1);

    console.log('table after remove');
    console.table(comments);
