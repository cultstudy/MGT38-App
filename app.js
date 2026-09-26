/* =====================================
   MGT38 APP DATA
===================================== */


const semesters = [

    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
    "Semester 7",
    "Semester 8"

];


const semesterCourses = {


    "Semester 1": [

        ["BCC 101", "Introduction to Business"],

        ["BCC 102", "Basic Accounting"],

        ["BCC 103", "Business Mathematics"],

        ["BCC 104", "Principles of Management"],

        ["BCC 105", "Business Communication"]

    ],


    "Semester 2": [

        ["BCC 106", "Principles of Marketing"],

        ["BCC 107", "Microeconomics"],

        ["BCC 108", "Business Statistics"],

        ["BCC 109", "Business Law"],

        ["BCC 110", "Information Technology in Business"]

    ],


    "Semester 3": [

        ["BCC 201", "Business Finance"],

        ["BCC 202", "Human Resource Management"],

        ["BCC 203", "Principles of Banking"],

        ["BCC 204", "Macroeconomics"],

        ["BCC 205", "Theory and Practices of Taxation"]

    ],


    "Semester 4": [

        ["BCC 206", "Insurance and Risk Management"],

        ["BCC 207", "Business Ethics"],

        ["BCC 208", "Entrepreneurship Development"],

        ["BCC 209", "Organizational Behavior"],

        [
            "BCC 210",
            "Bangladesh Studies and Economic Development"
        ]

    ],


    "Semester 5": [

        ["MGT 301", "Managerial Accounting"],

        ["MGT 302", "Seminars in Management"],

        ["MGT 303", "Service Management"],

        ["MGT 304", "Small Business Management"],

        ["MGT 305", "Management Information System"]

    ],


    "Semester 6": [

        ["MGT 306", "Operations Management"],

        ["MGT 307", "Managerial Economics"],

        ["MGT 308", "E-Business Management"],

        ["MGT 309", "Management of Change"],

        ["MGT 310", "Foreign Trade Management"]

    ],


    "Semester 7": [

        ["MGT 401", "Quality Management"],

        ["MGT 402", "Management Science"],

        ["MGT 403", "Leadership"],

        ["MGT 404", "Project Management"],

        ["MGT 405", "Business Environment"]

    ],


    "Semester 8": [

        ["MGT 406", "Supply Chain Management"],

        ["MGT 407", "Industrial Relations & Labor Law"],

        ["MGT 408", "Business Research Methods"],

        ["MGT 409", "Sustainability Management"],

        ["MGT 410", "Strategic Management"]

    ]

};



/* =====================================
   RESOURCE TYPES
===================================== */


const resources = [

    {
        name: "Syllabus",
        icon: "📋"
    },

    {
        name: "Question",
        icon: "❓"
    },

    {
        name: "Slide",
        icon: "▤"
    },

    {
        name: "CT Questions",
        icon: "✎"
    },

    {
        name: "Notes",
        icon: "📝"
    },

    {
        name: "Books",
        icon: "📚"
    },

    {
        name: "Question Analysis",
        icon: "📊"
    }

];



/* =====================================
   PAGE NAVIGATION
===================================== */


function showPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    const page =
        document.getElementById(pageId);


    if (page) {

        page.classList.add("active");

    }


    document
        .querySelectorAll(".nav-btn")
        .forEach(button => {

            button.classList.remove("active");

        });


    const navButton =
        document.querySelector(
            `.nav-btn[data-page="${pageId}"]`
        );


    if (navButton) {

        navButton.classList.add("active");

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* =====================================
   SEMESTER LIST
===================================== */


function loadSemesters() {

    const list =
        document.getElementById("semesterList");


    if (!list) return;


    list.innerHTML = "";


    semesters.forEach((semester, index) => {

        const item =
            document.createElement("div");


        item.className = "list-item";


        item.onclick = () => {

            openSemester(index);

        };


        item.innerHTML = `

            <div class="item-icon">
                📁
            </div>

            <div class="item-content">

                <h3>
                    ${semester}
                </h3>

                <p>
                    5 courses
                </p>

            </div>

            <div class="arrow">
                ›
            </div>

        `;


        list.appendChild(item);

    });

}



/* =====================================
   COURSE LIST
===================================== */


function openSemester(index) {

    const semester =
        semesters[index];


    document
        .getElementById("coursePageTitle")
        .textContent = semester;


    const list =
        document.getElementById("courseList");


    list.innerHTML = "";


    const courses =
        semesterCourses[semester] || [];


    courses.forEach(course => {

        const courseCode =
            course[0];

        const courseName =
            course[1];


        const item =
            document.createElement("div");


        item.className = "list-item";


        item.onclick = () => {

            openCourse(
                semester,
                courseCode,
                courseName
            );

        };


        item.innerHTML = `

            <div class="item-icon">
                📚
            </div>

            <div class="item-content">

                <h3>
                    ${courseCode}
                </h3>

                <p>
                    ${courseName}
                </p>

            </div>

            <div class="arrow">
                ›
            </div>

        `;


        list.appendChild(item);

    });


    showPage("courses");

}



/* =====================================
   COURSE RESOURCES
===================================== */


function openCourse(
    semester,
    courseCode,
    courseName
) {


    document
        .getElementById("resourcePageTitle")
        .textContent = courseCode;


    const subtitle =
        document.querySelector(
            "#resources .page-subtitle"
        );


    subtitle.textContent =
        courseName;


    const list =
        document.getElementById(
            "resourceList"
        );


    list.innerHTML = "";


    resources.forEach(resource => {

        const item =
            document.createElement("div");


        item.className = "resource";


        item.onclick = () => {

            openResource(
                semester,
                courseCode,
                courseName,
                resource.name
            );

        };


        item.innerHTML = `

            <div class="resource-icon">
                ${resource.icon}
            </div>

            <div class="resource-text">

                <h3>
                    ${resource.name}
                </h3>

                <p>
                    ${courseCode} · ${courseName}
                </p>

            </div>

            <div class="resource-arrow">
                ›
            </div>

        `;


        list.appendChild(item);

    });


    showPage("resources");

}



/* =====================================
   RESOURCE CLICK
===================================== */


function openResource(
    semester,
    courseCode,
    courseName,
    resourceName
) {


    showToast(
        resourceName +
        " files will be connected soon"
    );


}



/* =====================================
   GREETING
===================================== */


function updateGreeting() {

    const hour =
        new Date().getHours();


    let text =
        "Good evening 👋";


    if (hour < 12) {

        text =
            "Good morning 👋";

    }

    else if (hour < 17) {

        text =
            "Good afternoon 👋";

    }


    const greeting =
        document.getElementById(
            "greeting"
        );


    if (greeting) {

        greeting.textContent = text;

    }

}



/* =====================================
   TOAST
===================================== */


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    }, 2200);

}



/* =====================================
   START APP
===================================== */


loadSemesters();

updateGreeting();
