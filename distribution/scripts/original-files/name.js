const MALE_NAMES = ["Aaron", "Abel", "Abraham", "Adam", "Adrian", "Alan", "Albert", "Alexander", "Alexis", "Alfred", "Allen", "Alvin", "Andrew", "Andy", "Anthony", "Antonio", "Arthur", "Austin", "Barry", "Benjamin", "Bernard", "Bill", "Billy", "Blake", "Bob", "Bobby", "Brad", "Bradley", "Brandon", "Brayden", "Brendan", "Brendon", "Brent", "Brett", "Brian", "Bruce", "Bryan", "Bryant", "Caleb", "Calvin",
    "Cameron", "Carl", "Carlos", "Carter", "Casey", "Cecil", "Chad", "Charles", "Charlie", "Chase", "Chester", "Chris", "Christian", "Christopher", "Chuck", "Clarence", "Clark", "Claude", "Clayton", "Clifford", "Clifton", "Clinton", "Clyde", "Cody", "Colin", "Collin", "Conner", "Connor", "Conor", "Corey",
    "Cornelius", "Cory", "Craig", "Curtis", "Dale", "Dallas", "Dalton", "Damian", "Damien", "Damon", "Dan", "Daniel", "Danny", "Dante", "Darrell", "Darren", "Daryl", "Dave", "David", "Davis", "Dean", "Dennis", "Derek", "Derrick", "Devin", "Devon", "Dewayne", "Dillon", "Dominic", "Don", "Donald", "Donovan", "Doug",
    "Douglas", "Drew", "Duane", "Dustin", "Dwayne", "Dwight", "Dylan", "Earl", "Earnest", "Eddie", "Edgar", "Edmund", "Eduardo", "Edward", "Edwin", "Elijah", "Elliot", "Elliott", "Elmer", "Emil", "Emilio", "Emmanuel", "Eric", "Erik", "Ernest", "Ernesto", "Ethan", "Eugene", "Evan", "Everett", "Ezekiel", "Ezra",
    "Felix", "Fernando", "Floyd", "Forest", "Forrest", "Francis", "Francisco", "Frank", "Franklin", "Fred", "Freddie", "Frederick", "Gabriel", "Garrett", "Garry", "Gary", "Gavin", "Gene", "Geoffrey", "George", "Gerald", "Gilbert", "Glen", "Glenn", "Gordon", "Grant", "Greg", "Gregg", "Gregory", "Guy",
    "Hank", "Harold", "Harry", "Harvey", "Hector", "Henry", "Herbert", "Herman", "Howard", "Hugh", "Hunter", "Ian", "Isaac", "Isaiah", "Ivan", "Jack", "Jackson", "Jacob", "Jake", "James", "Jamie", "Jared", "Jarrett", "Jarrod", "Jason", "Javier", "Jay", "Jayden", "Jeff", "Jeffery", "Jeffrey", "Jeremiah", "Jeremy", "Jerome", "Jerry", "Jesse", "Jessie", "Jesus", "Jim", "Jimmy", "Joe", "Joel", "John", "Johnnie", "Johnny", "Jon", "Jonah", "Jonathan", "Jordan", "Jorge", "Jose", "Joseph", "Josh", "Joshua", "Josiah", "Juan", "Julian", "Julio", "Julius", "Junior", "Justin", "Karl", "Keith", "Kelly", "Ken", "Kenneth", "Kent", "Kerry", "Kevin", "Kirk", "Kurt", "Kyle", "Lance", "Larry", "Lawrence", "Lee", "Leo", "Leon", "Leonard", "Leroy", "Leslie", "Lester", "Levi", "Lewis", "Liam", "Logan", "Lonnie", "Louis", "Lucas", "Luis", "Luke", "Malcolm", "Manuel", "Marc", "Marcel", "Marco", "Marcus", "Mario", "Marion", "Mark", "Marshall", "Martin", "Marvin", "Mason", "Matt", "Matthew", "Maurice", "Max", "Maxwell", "Melvin", "Michael", "Micheal", "Mickey", "Miguel", "Mike", "Mitchell", "Monte", "Morgan", "Nathan", "Nathaniel", "Neal", "Neil", "Nelson", "Nicholas", "Nick", "Noah", "Nolan", "Norman", "Oliver", "Omar", "Orlando", "Oscar", "Owen", "Parker", "Pat", "Patrick", "Paul", "Pedro", "Perry", "Peter", "Phil", "Philip", "Phillip", "Preston", "Quentin", "Ralph", "Ramon", "Randall", "Randolph", "Randy", "Ray", "Raymond", "Reed", "Reginald", "Rex", "Richard", "Rick", "Rickey", "Ricky", "Riley", "Rob", "Robbie", "Robert", "Roberto", "Robin", "Roderick", "Rodney", "Rodolfo", "Rodrigo", "Roger", "Roland", "Roman", "Ron", "Ronald", "Ronnie", "Ross", "Roy", "Ruben", "Russell", "Ryan", "Salvador", "Sam", "Sammy", "Samuel", "Santiago", "Scott", "Sean", "Sebastian", "Sergio", "Seth", "Shane", "Shannon", "Shaun", "Shawn", "Shayne", "Sidney", "Skyler", "Spencer", "Stanley", "Stephen", "Steve", "Steven", "Stewart", "Stuart", "Ted", "Terrance", "Terrell", "Terrence", "Terry", "Theodore", "Thomas", "Tim", "Timothy", "Todd", "Tom", "Tommy", "Tony", "Tracy", "Travis", "Trent", "Trevor", "Troy", "Tyler", "Tyrone", "Ulysses", "Uriel", "Valentin", "Vernon", "Victor", "Vince", "Vincent", "Virgil", "Walter", "Warren", "Wayne", "Wesley", "Will", "William", "Willie", "Winston", "Xavier", "Zachary", "Zack", "Zane"];

const FEMALE_NAMES = [
    "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Karen",
    "Nancy", "Lisa", "Betty", "Margaret", "Sandra", "Ashley", "Kimberly", "Emily", "Donna", "Michelle",
    "Dorothy", "Carol", "Amanda", "Melissa", "Deborah", "Stephanie", "Rebecca", "Sharon", "Laura", "Cynthia",
    "Kathleen", "Amy", "Shirley", "Anna", "Angela", "Ruth", "Brenda", "Pamela", "Nicole", "Katherine", "Virginia",
    "Catherine", "Christine", "Samantha", "Debra", "Janet", "Rachel", "Carolyn", "Emma", "Maria", "Heather",
    "Diane", "Julie", "Joyce", "Evelyn", "Frances", "Joan", "Christina", "Kelly", "Victoria", "Lauren", "Martha",
    "Judith", "Cheryl", "Megan", "Andrea", "Ann", "Alice", "Jean", "Doris", "Jacqueline", "Kathryn", "Hannah",
    "Olivia", "Gloria", "Marie", "Teresa", "Sara", "Janice", "Julia", "Grace", "Judy", "Theresa", "Rose", "Beverly",
    "Denise", "Marilyn", "Amber", "Danielle", "Brittany", "Diana", "Jane", "Lori", "Madison", "Tiffany", "Kathy",
    "Tammy", "Crystal", "Ruth", "Tracy", "Dawn", "Jenny", "Sherry", "Nina", "Carmen", "Arlene", "Leah", "Mindy",
    "Jasmine", "Priscilla", "Esther", "Natalie", "Agnes", "Veronica", "Carrie", "Charlotte", "Joy", "Edith",
    "Hazel", "Joanne", "Claire", "Eva", "Tina", "Wendy", "Cindy", "Robin", "Nicole", "Erin", "Jacquelyn",
    "Cassandra", "Heidi", "Rhonda", "Carla", "Alicia", "Anita", "Yvonne", "Ellen", "Christy", "Marjorie",
    "April", "Lucille", "Bridget", "Constance", "Patsy", "Gladys", "Eileen", "Jill", "Dianne", "Jeanne",
    "Shannon", "Sheila", "Ethel", "Elaine", "Marlene", "Sylvia", "Katie", "Michele", "Gabrielle", "Shelly",
    "Thelma", "Edna", "Jennie", "Jenna", "Hannah", "Annie", "Sophia", "Cecilia", "Betsy", "Vivian", "Nora",
    "Gwendolyn", "Leona", "Hilda", "Brianna", "Dana", "Darlene", "Elisa", "Viola", "Willie", "Lydia", "Cora",
    "Henrietta", "Fannie", "Greta", "Gayle", "Claudia", "Minnie", "Melinda", "Maureen", "Elma", "Irma", "Faye",
    "Carole", "Irene", "Lucy", "Stella", "Loretta", "Laverne", "Trudy", "Mabel", "Penny", "Tamara", "Dolores",
    "Yolanda", "Emily", "Laura", "Vicky", "Kristin", "Gail", "Naomi", "Marsha", "Shelly", "Lisa", "Lorraine",
    "Marianne", "Rita", "Sue", "Dora", "Jeannie", "Dee", "Vera", "Iris", "Lucinda", "Ida", "Alma", "Myra", "Reba",
    "Ivy", "Leila", "Nellie", "Holly", "Deanna", "Freda", "Sonia", "Antonia", "Betty", "Susie", "Estelle", "Dianna",
    "Jody", "Paulette", "Elva", "Marian", "Lynda", "Nadia", "Delores", "Hazel", "Elvira", "Delia", "Lila", "Alison",
    "Arlene", "Beryl", "Betsy", "Camille", "Celeste", "Deirdre", "Della", "Effie", "Elnora", "Elvira", "Ethel", "Eula",
    "Fay", "Francis", "Georgie", "Gilda", "Glenda", "Gloria", "Harriett", "Inez", "Iva", "Jeanie", "Joann", "Josie",
    "Judy", "Julia", "Loraine", "Lottie", "Louise", "Mamie", "Marcella", "Margo", "May", "Nell", "Nola", "Opal",
    "Pansy", "Pearl", "Roberta", "Rosanne", "Rosalie", "Rosalind", "Rosetta", "Rosie", "Roxanne", "Shelby", "Sheri",
    "Shirley", "Sonya", "Suzanne", "Terry", "Trina", "Valerie", "Violet", "Virgie", "Wanda", "Wendi", "Wilma"
];

const SURNAMES = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Martinez",
    "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
    "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker",
    "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson",
    "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Gomez", "Phillips", "Evans", "Turner",
    "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes", "Stewart", "Morris", "Morales", "Murphy", "Cook",
    "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper", "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos",
    "Kim", "Cox", "Ward", "Richardson", "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza",
    "Ruiz", "Hughes", "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez",
    "Powell", "Jenkins", "Perry", "Russell", "Sullivan", "Bell", "Coleman", "Butler", "Henderson", "Barnes", "Gonzales",
    "Fisher", "Vasquez", "Simmons", "Romero", "Jordan", "Patterson", "Alexander", "Hamilton", "Graham", "Reynolds",
    "Griffin", "Wallace", "Moreno", "West", "Cole", "Hayes", "Bryant", "Herrera", "Gibson", "Ellis", "Tran", "Medina",
    "Aguilar", "Stevens", "Murray", "Ford", "Castro", "Marshall", "Owens", "Harrison", "Fernandez", "Mcdonald", "Woods",
    "Washington", "Kennedy", "Wells", "Vargas", "Henry", "Chen", "Freeman", "Webb", "Tucker", "Guzman", "Burns", "Crawford",
    "Olson", "Simpson", "Porter", "Hunter", "Gordon", "Mendez", "Silva", "Shaw", "Snyder", "Mason", "Dixon", "Munoz",
    "Hunt", "Hicks", "Holmes", "Palmer", "Wagner", "Black", "Robertson", "Boyd", "Rose", "Stone", "Salazar", "Fox",
    "Warren", "Mills", "Meyer", "Rice", "Schmidt", "Garza", "Daniels", "Ferguson", "Nichols", "Stephens", "Soto",
    "Weaver", "Ryan", "Gardner", "Payne", "Grant", "Dunn", "Kelley", "Spencer", "Hawkins", "Arnold", "Pierce", "Vazquez",
    "Hansen", "Schwartz", "Lambert", "Ochoa", "Vasquez", "Craig", "Park", "Santiago", "Rivas", "Fuentes", "Sweeney",
    "Vaughn", "Horton", "Diaz", "Fletcher", "Watts", "Bates", "Hale", "Rhodes", "Pena", "Beck", "Newman", "Haynes",
    "McDaniel", "Mendez", "Bush", "Vaughn", "Parks", "Cannon", "Garrett", "Gates", "Byrd", "Brady", "Duncan", "Armstrong",
    "Mendez", "Reid", "Roberson", "Fisher", "Morales", "Hart", "Gibson", "Carpenter", "Dyer", "Mcmahon", "Walls", "Burnett",
    "Richards", "Carroll", "Bradshaw", "Stone", "Lyons", "Mcmahon", "Maldonado", "Pollard", "Moran", "Norman", "Marshall",
    "Holland", "Carson", "Cisneros", "Jacobson", "Mcguire", "Lamb", "Hudson", "Ferguson", "Zimmerman", "Fowler", "Chang",
    "Love", "Watkins", "Becker", "Hale", "Underwood", "Taylor", "Farmer", "May", "Wade", "Giles", "Chung", "Hess",
    "Glenn", "West", "Hull", "Thornton", "Gibbs", "Graves", "Sloan", "Barron", "Griffith", "Mclean", "Moody", "Waters",
    "Tucker", "Potts", "Houston", "Roberson", "Coates", "David", "Caldwell", "Walsh", "Steele", "Moses", "Brewer",
    "Leblanc", "Small", "Hendricks", "Ewing", "Wu", "Barton", "Guerra", "Velasquez", "Kent", "Dillard", "Mcclain",
    "Valenzuela", "Hale", "Rush", "Rangel", "Hopper", "Mays", "Mcfadden", "Roach", "Church", "Chan", "Richmond", "Meadows",
    "Faulkner", "Oneill", "Knapp", "Kline", "Barry", "Oconnor", "Hebert", "Banks", "Cherry", "Dickson", "Guerrero",
    "Larson", "Burns", "Barrera", "Santos", "Tate", "Cross", "Garner", "Mann", "Mack", "Moss", "Thorpe", "Decker",
    "Farley", "Salinas", "Guy", "Daniels", "Snyder", "Hutchinson", "Garrett", "Chan", "Ross", "Pugh", "Gibbs", "Dorsey",
    "Mcintyre", "Bauer", "England", "Blair", "Preston", "Marquez", "Kramer", "Mcguire", "Gaines", "Shaffer", "Short",
    "Crane", "Blevins", "Dickson", "Rodriguez", "Mcintosh", "Bradford", "Bond", "Barr", "Kidd", "Cooke", "Hoover",
    "Dickerson", "Coronado", "Shepard", "Shepherd", "Cantrell", "Mahoney", "Cabrera", "Cisneros", "Cuevas", "Fitzpatrick",
    "Glass", "Leonard", "Pacheco", "Bland", "Rowland", "Parrish", "Gallegos", "Hahn", "Mcdowell", "Werner", "Boyer",
    "Caron", "Leach", "Cabrera", "Oconnell", "Solomon", "Mccullough", "Mcbride", "Alvarado", "Rush", "Choi", "Goss",
    "Cox", "Mosley", "Mcpherson", "Albright", "Burks", "Hughes", "Vang", "Whitfield", "Carrillo", "Small", "Cordova",
    "Preston", "Petty", "Olson", "Mullins", "Combs", "Roach", "Bernal", "Gould", "Ruiz", "Shannon", "Cantu", "Blackwell",
    "Emerson", "Hickman", "English", "Branch", "Buck", "Hatch", "Barron", "Whitney", "Stewart", "Fritz", "Randolph",
    "Buckley", "Mcpherson", "Mckinney", "Lambert", "Figueroa", "Hardin", "Case", "Cisneros", "Benton", "Blevins",
    "Coates", "Roach", "Mcneil", "Vang", "Fry", "Delgado", "Golden", "Frye", "Guthrie", "Osborn", "Heath", "Crosby",
    "Valenzuela", "Reeves", "Maynard", "Hoffman", "Leblanc", "Bates", "Carr", "Dillard", "Quinn", "Yoder", "Roman",
    "Barry", "Munoz", "Garner", "Rich", "Santana", "Hale", "Richard", "Mcintyre", "Booth", "Rush", "Hardin", "Sloan",
    "Ratliff", "Richmond", "Yang", "Ibarra", "Valentine", "Sloan", "Winters", "Banks", "Fritz", "Pratt", "Sellers",
    "Todd", "Hewitt", "Buckner", "Gomez", "Hernandez", "Sanchez", "Miller", "Martinez", "Brown", "Jones", "Williams",
    "Wilson", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas",
    "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez",
    "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
    "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Gomez",
    "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes", "Stewart", "Morris",
    "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper", "Peterson", "Bailey", "Reed",
    "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson", "Watson", "Brooks", "Chavez", "Wood", "James",
    "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes", "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers",
    "Long", "Ross", "Foster", "Jimenez", "Powell", "Jenkins", "Perry", "Russell", "Sullivan", "Bell", "Coleman",
    "Butler", "Henderson", "Barnes", "Gonzales", "Fisher", "Vasquez", "Simmons", "Romero", "Jordan", "Patterson",
    "Alexander", "Hamilton", "Graham", "Reynolds", "Griffin", "Wallace", "Moreno", "West", "Cole", "Hayes", "Bryant",
    "Herrera", "Gibson", "Ellis", "Tran", "Medina", "Aguilar", "Stevens", "Murray", "Ford", "Castro", "Marshall",
    "Owens", "Harrison", "Fernandez", "Mcdonald", "Woods", "Washington", "Kennedy", "Wells", "Vargas", "Henry",
    "Chen", "Freeman", "Webb", "Tucker", "Guzman", "Burns", "Crawford", "Olson", "Simpson", "Porter", "Hunter",
    "Gordon", "Mendez", "Silva", "Shaw", "Snyder", "Mason", "Dixon", "Munoz", "Hunt", "Hicks", "Holmes", "Palmer",
    "Wagner", "Black", "Robertson", "Boyd", "Rose", "Stone", "Salazar", "Fox", "Warren", "Mills", "Meyer", "Rice",
    "Schmidt", "Garza", "Daniels", "Ferguson", "Nichols", "Stephens", "Soto", "Weaver", "Ryan", "Gardner", "Payne",
    "Grant", "Dunn", "Kelley", "Spencer", "Hawkins", "Arnold", "Pierce", "Vazquez", "Hansen", "Schwartz", "Lambert",
    "Ochoa", "Vasquez", "Craig", "Park", "Santiago", "Rivas", "Fuentes", "Sweeney", "Vaughn", "Horton", "Diaz",
    "Fletcher", "Watts", "Bates", "Hale", "Rhodes", "Pena", "Beck", "Newman", "Haynes", "McDaniel", "Mendez",
    "Bush", "Vaughn", "Parks", "Cannon", "Garrett", "Gates", "Byrd", "Brady", "Duncan", "Armstrong", "Mendez",
    "Reid", "Roberson", "Fisher", "Morales", "Hart", "Gibson", "Carpenter", "Dyer", "Mcmahon", "Walls", "Burnett",
    "Richards", "Carroll", "Bradshaw", "Stone", "Lyons", "Mcmahon", "Maldonado", "Pollard", "Moran", "Norman",
    "Marshall", "Holland", "Carson", "Cisneros", "Jacobson", "Mcguire", "Lamb", "Hudson", "Ferguson", "Zimmerman",
    "Fowler", "Chang", "Love", "Watkins", "Becker", "Hale", "Underwood", "Taylor", "Farmer", "May", "Wade", "Giles",
    "Chung", "Hess", "Glenn", "West", "Hull", "Thornton", "Gibbs", "Graves", "Sloan", "Barron", "Griffith", "Mclean",
    "Moody", "Waters", "Tucker", "Potts", "Houston", "Roberson", "Coates", "David", "Caldwell", "Walsh", "Steele",
    "Moses", "Brewer", "Leblanc", "Small", "Hendricks", "Ewing", "Wu", "Barton", "Guerra", "Velasquez", "Kent",
    "Dillard", "Mcclain", "Valenzuela", "Hale", "Rush", "Rangel", "Hopper", "Mays", "Mcfadden", "Roach", "Church",
    "Chan", "Richmond", "Meadows", "Faulkner", "Oneill", "Knapp", "Kline", "Barry", "Oconnor", "Hebert", "Banks",
    "Cherry", "Dickson", "Guerrero", "Larson", "Burns", "Barrera", "Santos", "Tate", "Cross", "Garner", "Mann",
    "Mack", "Moss", "Thorpe", "Decker", "Farley", "Salinas", "Guy", "Daniels", "Snyder", "Hutchinson", "Garrett",
    "Chan", "Ross", "Pugh", "Gibbs", "Dorsey", "Mcintyre", "Bauer", "England", "Blair", "Preston", "Marquez",
    "Kramer", "Mcguire", "Gaines", "Shaffer", "Short", "Crane", "Blevins", "Dickson", "Rodriguez", "Mcintosh",
    "Bradford", "Bond", "Barr", "Kidd", "Cooke", "Hoover", "Dickerson", "Coronado", "Shepard", "Shepherd",
    "Cantrell", "Mahoney", "Cabrera", "Cisneros", "Cuevas", "Fitzpatrick", "Glass", "Leonard", "Pacheco",
    "Bland", "Rowland", "Parrish", "Gallegos", "Hahn", "Mcdowell", "Werner", "Boyer", "Caron", "Leach",
    "Cabrera", "Oconnell", "Solomon", "Mccullough", "Mcbride", "Alvarado", "Rush", "Choi", "Goss", "Cox",
    "Mosley", "Mcpherson", "Albright", "Burks", "Hughes", "Vang", "Whitfield", "Carrillo", "Small", "Cordova",
    "Preston", "Petty", "Olson", "Mullins", "Combs", "Roach", "Bernal", "Gould", "Ruiz", "Shannon", "Cantu",
    "Blackwell", "Emerson", "Hickman", "English", "Branch", "Buck", "Hatch", "Barron", "Whitney", "Stewart",
    "Fritz", "Randolph", "Buckley", "Mcpherson", "Mckinney", "Lambert", "Figueroa", "Hardin", "Case", "Cisneros",
    "Benton", "Blevins", "Coates", "Roach", "Mcneil", "Vang", "Fry", "Delgado", "Golden", "Frye", "Guthrie",
    "Osborn", "Heath", "Crosby", "Valenzuela", "Reeves", "Maynard", "Hoffman", "Leblanc", "Bates", "Carr",
    "Dillard", "Quinn", "Yoder", "Roman", "Barry", "Munoz", "Garner", "Rich", "Santana", "Hale", "Richard",
    "Mcintyre", "Booth", "Rush", "Hardin", "Sloan", "Ratliff", "Richmond", "Yang", "Ibarra", "Valentine", "Sloan",
    "Winters", "Banks", "Fritz", "Pratt", "Sellers", "Todd", "Hewitt", "Buckner", "Gomez", "Hernandez", "Sanchez",
    "Miller", "Martinez", "Brown", "Jones", "Williams", "Wilson", "Davis", "Rodriguez", "Martinez", "Hernandez",
    "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez",
    "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen",
    "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall",
    "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker",
    "Cruz", "Edwards", "Collins", "Reyes", "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez",
    "Ortiz", "Morgan", "Cooper", "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward",
    "Richardson", "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes",
    "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez", "Powell",
    "Jenkins", "Perry", "Russell", "Sullivan", "Bell", "Coleman", "Butler", "Henderson", "Barnes", "Gonzales",
    "Fisher", "Vasquez", "Simmons", "Romero", "Jordan", "Patterson", "Alexander", "Hamilton", "Graham", "Reynolds",
    "Griffin", "Wallace", "Moreno", "West", "Cole", "Hayes", "Bryant", "Herrera", "Gibson", "Ellis", "Tran",
    "Medina", "Aguilar", "Stevens", "Murray", "Ford", "Castro", "Marshall", "Owens", "Harrison", "Fernandez",
    "Mcdonald", "Woods", "Washington", "Kennedy", "Wells", "Vargas", "Henry", "Chen", "Freeman", "Webb", "Tucker",
    "Guzman", "Burns", "Crawford", "Olson", "Simpson", "Porter", "Hunter", "Gordon", "Mendez", "Silva", "Shaw",
    "Snyder", "Mason", "Dixon", "Munoz", "Hunt", "Hicks", "Holmes", "Palmer", "Wagner", "Black", "Robertson",
    "Boyd", "Rose", "Stone", "Salazar", "Fox", "Warren", "Mills", "Meyer", "Rice", "Schmidt", "Garza", "Daniels",
    "Ferguson", "Nichols", "Stephens", "Soto", "Weaver", "Ryan", "Gardner", "Payne", "Grant", "Dunn", "Kelley",
    "Spencer", "Hawkins", "Arnold", "Pierce", "Vazquez", "Hansen", "Schwartz", "Lambert", "Ochoa", "Vasquez",
    "Craig", "Park", "Santiago", "Rivas", "Fuentes", "Sweeney", "Vaughn", "Horton", "Diaz", "Fletcher", "Watts",
    "Bates", "Hale", "Rhodes", "Pena", "Beck", "Newman", "Haynes", "McDaniel", "Mendez", "Bush", "Vaughn", "Parks",
    "Cannon", "Garrett", "Gates", "Byrd", "Brady", "Duncan", "Armstrong", "Mendez", "Reid", "Roberson", "Fisher",
    "Morales", "Hart", "Gibson", "Carpenter", "Dyer", "Mcmahon", "Walls", "Burnett", "Richards", "Carroll",
    "Bradshaw", "Stone", "Lyons", "Mcmahon", "Maldonado", "Pollard", "Moran", "Norman", "Marshall", "Holland",
    "Carson", "Cisneros", "Jacobson", "Mcguire", "Lamb", "Hudson", "Ferguson", "Zimmerman", "Fowler", "Chang",
    "Love", "Watkins", "Becker", "Hale", "Underwood", "Taylor", "Farmer", "May", "Wade", "Giles", "Chung", "Hess",
    "Glenn", "West", "Hull", "Thornton", "Gibbs", "Graves", "Sloan", "Barron", "Griffith", "Mclean", "Moody",
    "Waters", "Tucker", "Potts", "Houston", "Roberson", "Coates", "David", "Caldwell", "Walsh", "Steele", "Moses",
    "Brewer", "Leblanc", "Small", "Hendricks", "Ewing", "Wu", "Barton", "Guerra", "Velasquez", "Kent", "Dillard",
    "Mcclain", "Valenzuela", "Hale", "Rush", "Rangel", "Hopper", "Mays", "Mcfadden", "Roach", "Church", "Chan",
    "Richmond", "Meadows", "Faulkner", "Oneill", "Knapp", "Kline", "Barry", "Oconnor", "Hebert", "Banks", "Cherry",
    "Dickson", "Guerrero", "Larson", "Burns", "Barrera", "Santos", "Tate", "Cross", "Garner", "Mann", "Mack",
    "Moss", "Thorpe", "Decker", "Farley", "Salinas", "Guy", "Daniels", "Snyder", "Hutchinson", "Garrett", "Chan",
    "Ross", "Pugh", "Gibbs", "Dorsey", "Mcintyre", "Bauer", "England", "Blair", "Preston", "Marquez", "Kramer",
    "Mcguire", "Gaines", "Shaffer", "Short", "Crane", "Blevins", "Dickson", "Rodriguez", "Mcintosh", "Bradford",
    "Bond", "Barr", "Kidd", "Cooke", "Hoover", "Dickerson", "Coronado", "Shepard", "Shepherd", "Cantrell", "Mahoney",
    "Cabrera", "Cisneros", "Cuevas", "Fitzpatrick", "Glass", "Leonard", "Pacheco", "Bland", "Rowland", "Parrish",
    "Gallegos", "Hahn", "Mcdowell", "Werner", "Boyer", "Caron", "Leach", "Cabrera", "Oconnell", "Solomon",
    "Mccullough", "Mcbride", "Alvarado", "Rush", "Choi", "Goss", "Cox", "Mosley", "Mcpherson", "Albright", "Burks",
    "Hughes", "Vang", "Whitfield", "Carrillo", "Small", "Cordova", "Preston", "Petty", "Olson", "Mullins", "Combs",
    "Roach", "Bernal", "Gould", "Ruiz", "Shannon", "Cantu", "Blackwell", "Emerson", "Hickman", "English", "Branch",
    "Buck", "Hatch", "Barron", "Whitney", "Stewart", "Fritz", "Randolph", "Buckley", "Mcpherson", "Mckinney",
    "Lambert", "Figueroa", "Hardin", "Case", "Cisneros", "Benton", "Blevins", "Coates", "Roach", "Mcneil", "Vang",
    "Fry", "Delgado", "Golden", "Frye", "Guthrie", "Osborn", "Heath", "Crosby", "Valenzuela", "Reeves", "Maynard",
    "Hoffman", "Leblanc", "Bates", "Carr", "Dillard", "Quinn", "Yoder", "Roman", "Barry", "Munoz", "Garner",
    "Rich", "Santana", "Hale", "Richard", "Mcintyre", "Booth", "Rush", "Hardin", "Sloan", "Ratliff", "Richmond",
    "Yang", "Ibarra", "Valentine", "Sloan", "Winters", "Banks", "Fritz", "Pratt", "Sellers", "Todd", "Hewitt",
    "Buckner", "Gomez", "Hernandez", "Sanchez", "Miller", "Martinez", "Brown", "Jones", "Williams", "Wilson",
    "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor",
    "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez",
    "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
    "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Gomez",
    "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes", "Stewart", "Morris",
    "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper", "Peterson"];

const button = document.querySelector('.main__button');
const updateArrow = document.querySelector('.update-arrow');

const switchBlocks = document.getElementById('switch-blocks');
const switchList = document.getElementById('switch-list');

let globalResult = [];
let prevInputQty, prevInputGender, prevInputName, prevInputSurname;

const generateNames = () => {
    const contentHeight = document.body.scrollHeight;
    const inputQty = parseInt(document.querySelector('.qty').value);
    const inputGender = document.querySelector('.dropdown__input-hidden').value;
    const inputName = document.querySelector('.name').value;
    const inputSurname = document.querySelector('.surname').value;
    const mainSubtitle = document.querySelector('.main__subtitle');
    const mainTime = document.querySelector('.main__time');

    const mainContainer = document.getElementById('main-container');
    const errorNote = document.querySelector('.error-note');
    const note = document.querySelector('.note');

    prevInputQty = inputQty;
    prevInputGender = inputGender;
    prevInputName = inputName;
    prevInputSurname = inputSurname;

    contentHeight > 750 ? document.body.style.overflowY = "scroll" : document.body.style.overflowY = "hidden";
    mainContainer.innerHTML = '';
    let names = [];

    if ((inputQty < 1 || inputQty > 100) || (inputName.length >= 2 && inputSurname.length >= 2)) {
        note.innerHTML = '';
        errorNote.innerHTML = 'The quantity of names must be greater than 0 and less than 100. You can enter only the name or only the surname.';
    } else {
        errorNote.innerHTML = '';
        note.innerHTML = 'Click on element to copy.'
        if (inputName.length >= 2) {
            if (inputGender === 'male') {
                for (let i = 0; i < inputQty; i++) {
                    let result = '';

                    let randomSurnameIndex = Math.floor(Math.random() * SURNAMES.length);
                    result += `${inputName} ${SURNAMES[randomSurnameIndex]}`;
                    names.push(result);
                }
            } else {
                for (let i = 0; i < inputQty; i++) {
                    let result = '';

                    let randomSurnameIndex = Math.floor(Math.random() * SURNAMES.length);
                    result += `${inputName} ${SURNAMES[randomSurnameIndex]} `;
                    names.push(result);
                }
            }
        } else if (inputSurname.length >= 2) {
            if (inputGender === 'male') {
                for (let i = 0; i < inputQty; i++) {
                    let result = '';

                    let randomNameIndex = Math.floor(Math.random() * MALE_NAMES.length);
                    result += `${MALE_NAMES[randomNameIndex]} ${inputSurname}`;
                    names.push(result);
                };
            } else {
                for (let i = 0; i < inputQty; i++) {
                    let result = '';

                    let randomNameIndex = Math.floor(Math.random() * FEMALE_NAMES.length);
                    result += `${FEMALE_NAMES[randomNameIndex]} ${inputSurname} `;
                    names.push(result);
                };
            };
        } else {
            if (inputGender === 'male') {
                for (let i = 0; i < inputQty; i++) {
                    let result = '';

                    let randomNameIndex = Math.floor(Math.random() * MALE_NAMES.length);
                    let randomSurnameIndex = Math.floor(Math.random() * SURNAMES.length);
                    result += `${MALE_NAMES[randomNameIndex]} ${SURNAMES[randomSurnameIndex]}`;
                    names.push(result);
                };
            } else {
                for (let i = 0; i < inputQty; i++) {
                    let result = '';

                    let randomNameIndex = Math.floor(Math.random() * FEMALE_NAMES.length);
                    let randomSurnameIndex = Math.floor(Math.random() * SURNAMES.length);
                    result += `${FEMALE_NAMES[randomNameIndex]} ${SURNAMES[randomSurnameIndex]} `;
                    names.push(result);
                };
            };
        };
    };

    mainSubtitle.classList.remove('hidden');
    mainTime.innerHTML = formatTime(new Date());


    if (switchList.classList.contains('active')) {
        const mainContainer = document.getElementById('main-container');
        mainContainer.innerHTML = '';
        note.innerHTML = '';

        const textareaEl = document.createElement('textarea');
        textareaEl.classList.add('main__textarea');
        textareaEl.classList.add('created__textarea');
        textareaEl.setAttribute('rows', '10');
        textareaEl.textContent = names.join(', ').replace(/,/g, ', ');
        mainContainer.appendChild(textareaEl);

        const buttonEl = document.createElement('button');
        buttonEl.classList.add('main__button');
        buttonEl.classList.add('copy');
        buttonEl.textContent = 'Copy';
        mainContainer.appendChild(buttonEl);

        buttonEl.addEventListener('click', () => {
            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = globalResult.join(', ').replace(/,/g, ', ');
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextArea);;
        });
    } else {
        names.forEach(el => {
            const spanElement = document.createElement('span');
            spanElement.classList.add('numbers-span');
            spanElement.textContent = el;
            mainContainer.appendChild(spanElement);

            spanElement.addEventListener('click', () => {
                const tempTextArea = document.createElement('textarea');
                tempTextArea.value = el;
                document.body.appendChild(tempTextArea);
                tempTextArea.select();
                tempTextArea.setSelectionRange(0, 99999);
                document.execCommand('copy');
                document.body.removeChild(tempTextArea);
            });
        });
    }

    switchBlocks.classList.remove('hidden');
    switchList.classList.remove('hidden');

    globalResult.push(names);

    return names;
};

switchList.addEventListener('click', function () {
    const mainContainer = document.getElementById('main-container');
    const note = document.querySelector('.note');
    switchList.classList.add('active');
    switchBlocks.classList.remove('active');
    mainContainer.innerHTML = '';
    note.innerHTML = '';

    const textareaEl = document.createElement('textarea');
    textareaEl.classList.add('main__textarea');
    textareaEl.classList.add('created__textarea');
    textareaEl.setAttribute('rows', '10');
    textareaEl.textContent = globalResult.join(', ').replace(/,/g, ', ');
    mainContainer.appendChild(textareaEl);

    const buttonEl = document.createElement('button');
    buttonEl.classList.add('main__button');
    buttonEl.classList.add('copy');
    buttonEl.textContent = 'Copy';
    mainContainer.appendChild(buttonEl);

    buttonEl.addEventListener('click', () => {
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = globalResult.join(', ').replace(/,/g, ', ');
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);;
    });
});

switchBlocks.addEventListener('click', function () {
    const note = document.querySelector('.note');
    switchBlocks.classList.add('active');
    switchList.classList.remove('active');
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';
    note.innerHTML = 'Click on element to copy.';

    const latestResult = globalResult[globalResult.length - 1];

    if (latestResult) {
        latestResult.forEach(el => {
            if (el === '/^\s*[\r\n]/gm' || el === '/^\s*[\r\n]/gm') return;
            const spanElement = document.createElement('span');
            spanElement.classList.add('numbers-span');
            spanElement.textContent = el;
            mainContainer.appendChild(spanElement);

            spanElement.addEventListener('click', () => {
                const tempTextArea = document.createElement('textarea');
                tempTextArea.value = el;
                document.body.appendChild(tempTextArea);
                tempTextArea.select();
                tempTextArea.setSelectionRange(0, 99999);
                document.execCommand('copy');
                document.body.removeChild(tempTextArea);
            });
        });
    };
});

generateNames();

button.addEventListener('click', function () {
    globalResult = [];
    generateNames();
});

updateArrow.addEventListener('click', () => {
    document.querySelector('.qty').value = prevInputQty;
    document.querySelector('.dropdown__input-hidden').value = prevInputGender;
    document.querySelector('.name').value = prevInputName;
    document.querySelector('.surname').value = prevInputSurname;
    generateNames();
});
