const inventors = [
      { first: 'Albert', last: 'Einstein', yearBorn: 1879, yearDied: 1955 },
      { first: 'Isaac', last: 'Newton', yearBorn: 1643, yearDied: 1727 },
      { first: 'Galileo', last: 'Galilei', yearBorn: 1564, yearDied: 1642 },
      { first: 'Marie', last: 'Curie', yearBorn: 1867, yearDied: 1934 },
      { first: 'Johannes', last: 'Kepler', yearBorn: 1571, yearDied: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', yearBorn: 1473, yearDied: 1543 },
      { first: 'Max', last: 'Planck', yearBorn: 1858, yearDied: 1947 },
      { first: 'Katherine', last: 'Blodgett', yearBorn: 1898, yearDied: 1979 },
      { first: 'Ada', last: 'Lovelace', yearBorn: 1815, yearDied: 1852 },
      { first: 'Sarah E.', last: 'Goode', yearBorn: 1855, yearDied: 1905 },
      { first: 'Lise', last: 'Meitner', yearBorn: 1878, yearDied: 1968 },
      { first: 'Hanna', last: 'Hammarström', yearBorn: 1829, yearDied: 1909 }
    ];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

      const filteredData = inventors.filter(inventor => inventor.yearBorn >= 1500 && inventor.yearBorn < 1600);

      // The below code will perform the same function as the above one, this just has better readablility.

      /*const filteredData = inventors.filter(function(inventor){
        if(inventor.yearBorn >= 1500 && inventor.yearBorn < 1600){
          return true;
        }
      });*/

      console.table(filteredData);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

      const fullNameArray = inventors.map(inventor => inventor.first + ' ' + inventor.last);

      // The below code will perform the same function as the above one, this just uses template strings for output.

      // const fullNameArray = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

      console.log(fullNameArray);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

      const sortByDate = inventors.sort((a, b) => a.yearBorn > b.yearBorn ? 1 : -1);

      // The below code will perform the same function as the above one, this just has better readablility.

      /*const sortByDate = inventors.sort(function(firstPerson, secondPerson){
        if(firstPerson.yearBorn > secondPerson.yearBorn){
          return 1;
        }else{
          return -1;
        }
      });*/

      console.table(sortByDate);

// Array.prototype.reduce()
// 4. How many year did all the inventors live?
      
      const totalYears = inventors.reduce((total, inventor) => {return total + inventor.yearDied - inventor.yearBorn}, 0);

      // The below code will perform the same function as the above one, this just has better readablility.

      /*var total = 0;
      const totalYears = inventors.reduce(function(total, inventor){
        total += inventor.yearDied - inventor.yearBorn;
        return total;
      }, 0);*/

      console.log(totalYears);

// 5. Sort the inventors by year lived
      const oldestOrder = inventors.sort((a,b) => {
        const previousPerson = a.yearDied - a.yearBorn;
        const nextPerson = b.yearDied - b.yearBorn;

        previousPerson > nextPerson ? -1 : 1;
      });

      console.table(oldestOrder);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      /*const category = document.querySelector('.mw-category');
      const links = Array.from(category.querySelectorAll('a'));
      // Alternate way to decclare as an array- since querySelectorAll returns NodeList
      // const links = [...(category.querySelectorAll('a')];
      const de = links
                    .map(link => link.textContent)
                    .filter(streetName => streetName.includes('de'));
      console.table(de);*/

// 7. sort Exercise
// Sort the people alphabetically by last name

      const sortedList = people.sort((previous, next) => {
        const [prevLastName, prevFirstName] = previous.split(', ');
        const [nextLastName, nextFirstName] = next.split(', ');

        return prevLastName > nextLastName ? 1 : -1 ;
      });
      console.table(sortedList);

// 8. Reduce Exercise
// Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

      const transport = data.reduce(function(obj, item){
        if(!obj[item]){
          obj[item]=0;
        }
        obj[item]++;
        
        return obj;
      }, {});

      console.log(transport);
