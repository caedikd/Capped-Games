

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

        console.log("Elements hidden. Key: " + key);
    }

    $(".btn-lg").click(function (e) {
        var idClicked = e.target.id;
        console.log("Button clicked: " + idClicked);
    });

    $("#filter_sort-by").click(function (e) {
        console.log("Filter Sort clicked: " + e.target.id);
    });

    $("#filter_ascending").click(function (e) {
        console.log("Ascending toggle clicked");
    });

    $(".dropdown-menu").click(function (e) {
        console.log("Menu item: " + e.target.id);
        
        option = e.target.id;
        var key = getOptionNumber(option);

        if (option.indexOf("option") != -1){
            displayScores(key);
            updateCoverageScoreLabel(key);
        }
        else if (option.indexOf("sort") != -1) {

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
        console.log(coverage_type_label.text() + " is the current label");
        console.log(optionToShow.text() + ": show");
        coverage_type_label.text(optionToShow.text());
        for (let i = 0; i < coverage_types.length; i++) {
            coverage_types[i].show();
        }
        coverage_types[key].hide();

    }


});