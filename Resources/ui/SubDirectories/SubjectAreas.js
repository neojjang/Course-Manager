// Create a table view for all the subject areas
(function(){
    
    // Working with the current window
    var table = require('lib/tables'), subject_area_table, data;
   
    data = [{
        title : "Aerospace Studies",
        className : "tableRow",
        hasChild : true,
        dataToPass : {
            "quarter_year" : "Spring 2012",
            "course" : "Aerospace Studies"
        },
        js : "Subjects.js"
    }, {
        title : "Anthropology",
        className : "tableRow",
        hasChild : true,
        dataToPass : {
            "quarter_year" : "Summer 2012",
            "course" : "Anthropology"
        },
        js : "Subjects.js"
    }, {
        title : "Art",
        className : "tableRow",
        hasChild : true,
        dataToPass : {
            "quarter_year" : "Winter 2012",
            "course" : "Art"
        },
        js : "Subjects.js"
    }, {
        title : "Computer Science",
        className : "tableRow",
        hasChild : true,
        dataToPass : {
            "quarter_year" : "Fall 2011",
            "course" : "Computer Science"
        },
        js : "Subjects.js"
    }];
    subject_area_table = new table.createDefaultTableView(data);

    //Add table view to the instance
    Ti.UI.currentWindow.add(subject_area_table);
    
})();
