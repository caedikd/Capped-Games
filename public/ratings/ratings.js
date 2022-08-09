

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

    function displayScores(key) {
        const scoreDivs = [
            document.getElementById("CoverageScore"),
            document.getElementById("AuditoryScore"),
            document.getElementById("CognitiveScore"),
            document.getElementById("MotorScore"),
            document.getElementById("VisualScore")
        ];

        scoreDivs.forEach(hideEle);
        function hideEle(element) {
            element.style.display = "none";
        }
        scoreDivs[key].style.display = "block";
    }

    $(".btn-lg").click(function (e) {
        var idClicked = e.target.id;
        console.log("Button clicked: " + idClicked);
    });

    $("#filter_sort-by").click(function (e) {
        console.log("Filter Sort clicked");
    });

    $("#filter_ascending").click(function (e) {
        console.log("Ascending toggle clicked");
    });

    $("#filter_coverage-type").click(function (e) {
        console.log("Coverage type clicked");
    });
});