var myApp=angular.module( 'myApp', [] );
// controller whereMyPeeps
myApp.controller( 'assignmentController', [ '$scope', '$http', function( $scope, $http ){
  // $scope.date = now();
  $scope.addAssignment = function(){ // adds record on button click
    //event.preventDefault();
    var objectToSend ={  // package object to send, with inputs
      student_name: $scope.studentNameBinder,
      assignment_number: $scope.assnNumBinder,
      score: $scope.scoreBinder  // reference these in html
      // date: $scope.date
    };
    $http({  // sends object via POST
      method: 'POST',
      url: '/testPost',
      data: objectToSend
    });
    $scope.studentNameBinder =''; // clears input boxes
    $scope.assnNumBinder ='';
    $scope.scoreBinder ='';
  }; // end addRecord function

  $scope.getAssignments = function(){  // gets current recordset upon button click
  $http({   // gets recordset via GET
    method: 'GET',
    url: '/getAssignments',
  }).then( function( response ){  // success call - runs function with response parameter
    console.log(response);
      $scope.allTheAssignments = response.data;  // pulls the data from app.js and sets to allTheRecords
    }, function myError( response ){
    console.log( response.statusText );
  });
  };
}]);
