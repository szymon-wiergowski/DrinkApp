// lista drinków
function Drink ( id, name, alko, ingredients, img_url, power, description, recipe, origin){
    this.id= id;
    this.name=name;
    this.alko=alko;
    this.ingredients=ingredients
    this.img_url= img.url;
    this.power=power;
    this.description=description;
    this.recipe = recipe;
    this.origin= origin;
    }
    
    const drink1 = new Drink(1,"Mojito",true, "sok z limonki, cukier,listki mięty, rum, lód w kostkach", x1.img, "8%", "Do szkła wrzucić kilka listków mięty oraz cukier i utrzeć je muddlerem. Następnie dodać lód i wlać pozostałe składniki i dokładnie zamieszać. Udekorować listkami mięty.", "Kuba");
    const drink2 = new Drink(2,"Margarita",true, "srebrna tequila, cointreau, sok z limonki, sok z cytryny, syrop cukrowy", x2.img, "8%", " Najpierw przygotuj szkło: przetrzyj rant kieliszka cząstką limonki, a następnie delikatnie umocz zewnętrzną część brzegu kieliszka w soli. Stworzy to fantastyczny kontrast do słodko-kwaśnej margarity. Następnie wstrząśnij składniki w szejkerze i odcedź bez lodu do schłodzonego kieliszka.", "Hiszpania");
    const drink3 = new Drink(3,"Frog",false, "sok grejpfrutowy, sok ananasowy, bezalkoholowe blue curacao, wiórki kokosowe, plasterki limonki", x3.img, "0%", "Sok grejpfruitowy, ananasowy i blue curracao wymieszaj w shakerze. Brzegi kieliszka zanurz w wodzie, po czym przyłóż go dnem do góry do rozsypanych na talerzyku wiórków kokosowych i przyozdób limonką. Do przygotowanego kieliszka do margarity przelej ostrożnie drink z shakera", "Peru");
    const drink4 = new Drink(4,"Pinacolada",false, "sok ananasowy, syrop kokosowy, kruszony lód", x4.img, "0%","Składniki odmierzamy i mieszamy w shakerze. Wysoką szklankę napełniamy do połowy kruszonym lodem, a następnie przelewamy napój. Możemy udekorować go parasolką i słomką — drink bezalkoholowy gotowy!", "Portoryko");
    
    
    
    //Tablica składników (na podstawie ustaleń z 28.11)
    
    function Ingredient(id, name){
        this.id = id;
        this.name = name;
    }
    
    
    const lime= new Ingredient(1, "sok z limonki");
    const sugar = new Ingredient(2,"cukier");
    const ice = new Ingredient(3,"lód");
    const  rum= new Ingredient(4,"rum");
    const lemon= new Ingredient(5, "sok z cytryny");
    const pineapple = new Ingredient(6,"sok ananasowy");
    const grapefruit = new Ingredient(7,"sok grejpfrutowy");
    
    
    
    
//lista sklepów
    function Shop(id, name, localization, openHours){
    this.id=id;
    this.name= name;
    this.localization= localization;
    this.openHours = openHours;
    
    const shop1 = new Shop(1, "Żabka", "Gdynia", "6-23");
    const shop2 = new Shop(2, "Abc", "Sopot", "8-22");
    const shop3 = new Shop(3, "Carrefour","Gdańsk", "7-22");
    const shop4 =  new Shop(4, "Lidl", "Pruszcz Gdański", "7-22")
    
    }
    
    
    //lista użytkowników
    function User(name, id, age, weight, height, gender){
    this.name = name;
    this.id = id;
    this.age = age;
    this.weight =weight;
    this.height = height;
    this.gender = gender;
    
    }
    
    const user1 = new User("Jan Kowalski", "20", "85", "175", "male");
    const user2 = new User("Joanna Nowak", "22", "65", "165", "female");
    const user3 = new User("Marcin Wisniewski", "24", "90", "180", "male");
    const user4 = new User("Anna Kamińska", "26", "70", "170", "female");
    