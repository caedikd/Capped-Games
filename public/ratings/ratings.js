

const gamecardData = [
    {
        title: "Devil Survivor 2: Record Breaker", publisher: "ATLUS",
        year: 2012, platforms: "3DS",
        expertScores: [95, 99, 98, 100, 96],
        userScores: [32, 22, 40, 50, 12],
        genres: ["RPG", "Strategy", "Turn-Based", "Visual Novel"],
        img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/3501f2e8a233c4273f0fe33f739378b0.jpg"
    },
    {
        title: "Granblue Fantasy", publisher: "Cygames",
        year: 2013, platforms: "Browser",
        expertScores: [23, 7, 29, 40, 10],
        userScores: [25, 10, 12, 38, 21],
        genres: ["RPG", "Co-op", "Turn-Based", "Visual Novel"],
        img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/ebc3c4ea708ba63d5d4779cd4586e4fb.jpg"
    },
    {
        title: "Granblue Fantasy", publisher: "Cygames",
        year: 2013, platforms: "Browser",
        expertScores: [23, 7, 29, 40, 10],
        userScores: [25, 10, 12, 38, 21],
        genres: ["RPG", "Co-op", "Turn-Based", "Visual Novel"],
        img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/ebc3c4ea708ba63d5d4779cd4586e4fb.jpg"

    }
];




$(function () {
    $('.dropdown-toggle').dropdown()

    displayScores(0);

    let ascending_switch = $("#filter_ascending");
    let filter_label = $("#filter_sort-by");
    let coverage_type_label = $("#filter_coverage-type");

    function displayScores(key) {
        $(".AuditoryScore").hide();
        $(".CognitiveScore").hide();
        $(".MotorScore").hide();
        $(".VisualScore").hide();
        $(".CoverageScore").hide();

        switch(key) {
            case 1: $(".AuditoryScore").show(); break;
            case 2: $(".CognitiveScore").show(); break;
            case 3: $(".MotorScore").show(); break;
            case 4: $(".VisualScore").show(); break;
            default: $(".CoverageScore").show();
        }

        //console.log("Elements hidden. Key: " + key);
    }

    const all_genre_options = [
        "optionACT", "optionADV", "optionCOO", "optionFPS", "optionPVP",
        "optionPLA", "optionPUZ", "optionCAR", "optionRHY", "optionRPG",
        "optionSPO", "optionSTR", "optionTPS", "optionTUR", "optionVN"
    ];
    //From Stackoverflow: https://stackoverflow.com/questions/5424488/how-to-search-for-a-string-inside-an-array-of-strings 
    function searchStringInArray (str, strArray) {
        for (let j=0; j<strArray.length; j++) {
            if (strArray[j].match(str)) return j;
        }
        return -1;
    }

    const all_genre_classes = [
        ".genre_ACT", ".genre_ADV", ".genre_COO", ".genre_FPS", ".genre_PVP",
        ".genre_PLA", ".genre_PUZ", ".genre_CAR", ".genre_RHY", ".genre_RPG",
        ".genre_SPO", ".genre_STR", ".genre_TPS", ".genre_TUR", ".genre_VN"
    ];
    const visible_genres = [];

    $(".btn-lg").click(function (e) {
        var idClicked = e.target.id;
        
        if (idClicked) {
            console.log("Button clicked: " + idClicked);
            //var index = searchStringInArray(idClicked, all_genre_options);

            var classname = idClicked.replace("option", "");
            classname = ".genre_" + classname;

            if (searchStringInArray(classname, visible_genres) != -1) {
                console.log("Genre found. Removing.");
                visible_genres.splice(visible_genres.indexOf(classname), 1);
            }
            else {
                visible_genres.push(classname);
            }
            console.log(visible_genres);
            filter_by_genre();

        }
        
    });

    function filter_by_genre() {
        if (visible_genres.length <= 0) { //show all if visible_genres is empty
            for (let i = 0; i < all_genre_classes.length; i++) {
                $(all_genre_classes[i]).show();
            }
            return;
        } else {
            for (let i = 0; i < all_genre_classes.length; i++) {
                $(all_genre_classes[i]).hide();
            }
            var showme = "";
            for (let i = 0; i < visible_genres.length; i++) {
                showme += visible_genres[i];
            }
            $(showme).show();
        }
        
    }

    $("#filter_sort-by").click(function (e) {
        console.log("Filter Sort clicked: " + e.target.id);
    });

    $("#filter_ascending").click(function (e) {
        console.log("Ascending toggle clicked");
    });

    $(".dropdown-menu").click(function (e) {
        //console.log("Menu item: " + e.target.id);
        
        option = e.target.id;
        var key = getOptionNumber(option);

        if (option.indexOf("option") != -1){
            displayScores(key);
            updateCoverageScoreLabel(key);
        }
        else if (option.indexOf("sort") != -1) {
            console.log("Not supported.");

        }
    });

    function getOptionNumber(option) {
        if (option.indexOf("TOTAL") != -1 || option.indexOf("Expert") != -1) {
            return 0;
        }
        if (option.indexOf("AUDI") != -1 || option.indexOf("Player") != -1) {
            return 1;
        }
        if (option.indexOf("COGN") != -1 || option.indexOf("Title") != -1) {
            return 2;
        }
        if (option.indexOf("MOTOR") != -1 || option.indexOf("Release") != -1) {
            return 3;
        }
        if (option.indexOf("VISU") != -1) {
            return 4;
        }
        return -1;
    }

    function updateCoverageScoreLabel(key) {
        const coverage_types = [
            $("#optionTOTAL"),
            $("#optionAUDITORY"),
            $("#optionCOGNITIVE"),
            $("#optionMOTOR"),
            $("#optionVISUAL")
        ];
        var optionToShow = coverage_types[key];
        //console.log(coverage_type_label.text() + " is the current label");
        //console.log(optionToShow.text() + ": show");
        coverage_type_label.text(optionToShow.text());
        for (let i = 0; i < coverage_types.length; i++) {
            coverage_types[i].show();
        }
        coverage_types[key].hide();

    }


});2