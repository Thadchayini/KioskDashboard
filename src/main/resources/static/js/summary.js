var SUMMARY = {

/*Makes the AJAX calll (synchronous) to load a Summary Data*/
    loadSummaryData: function() {
    var responseArray = [];
        $.ajax({

          async: false,
          url: "StudentJsonDataServlet",
          success: function(studentJsonData) {
            console.log(studentJsonData);
             $.each(studentJsonData,function(index,aStudent){

                  responseArray.push([12,10,8],[20,18,15]);

           });

          }

        });

       return responseArray;
    },

    var highSatisfaction = {
      label: 'High Satisfaction',
      data: [5427, 5243],
      backgroundColor: 'rgba(0, 99, 132, 0.6)',
      borderColor: 'rgba(0, 99, 132, 1)',
      yAxisID: "y-axis-hs"
    };

    var mediumSatisfaction = {
      label: 'Medium Satsfaction',
      data: [3.7, 8.9],
      backgroundColor: 'rgba(99, 132, 0, 0.6)',
      borderColor: 'rgba(99, 132, 0, 1)',
      yAxisID: "y-axis-ms"
    };

    var lowSatisfaction = {
     label: 'Low Satsfaction',
     data: [3.7, 8.9],
     backgroundColor: 'rgba(99, 132, 0, 0.6)',
     borderColor: 'rgba(99, 132, 0, 1)',
     yAxisID: "y-axis-ls"
    };

    /*Crate the custom Object with the data*/
      createChartData : function(jsonData){

      console.log(jsonData);

       return {

        labels : ["High Satisfaction", "Medium Satisfaction", "Low Satisfaction"],

        datasets: [highSatisfaction, mediumSatisfaction,lowSatisfaction]

       };

      },
}