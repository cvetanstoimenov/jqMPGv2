
document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {}


function onLoad(){

      $(document).ready(function() {

          var IdOfSelectedClan;
          var chosenTab;
      var mainArrayData =[];
      mainArrayData.push({ 'Firstname': 'Zvonimir', 'Lastname': 'Novoselec', 'ClanId': '5269F9D9-E45F-E211-9EE7-000C29919411', 'Years': '34', 'TaskStatus': 'open' });
      mainArrayData.push({' Firstname': 'Mišela', 'Lastname': 'Mustafic', 'ClanId': 'E668F9D9-E45F-E211-9EE7-000C29919411', 'Years': '63', 'TaskStatus': 'completed'});
      mainArrayData.push({ 'Firstname': 'test', 'Lastname': 'test1', 'ClanId': 'C0F6E344-319C-E211-88FC-000C29919411', 'Years': '22', 'TaskStatus': 'cancelled' });
      mainArrayData.push({ 'Firstname': 'Tomislav', 'Lastname': 'Ivić', 'ClanId': '1A69F9D9-E45F-E211-9EE7-000C29919411', 'Years': '33', 'TaskStatus': 'open' });
      mainArrayData.push({ 'Firstname': 'Nada', 'Lastname': 'Petek', 'ClanId': '821FFE3E-4856-E211-967B-000C29919411', 'Years': '55', 'TaskStatus': 'open' });
      mainArrayData.push({ 'Firstname': 'Nevenka', 'Lastname': 'Majdenić', 'ClanId': '0E69F9D9-E45F-E211-9EE7-000C29919411', 'Years': '28', 'TaskStatus': 'cancelled' });
      mainArrayData.push({ 'Firstname': 'Josip', 'Lastname': 'Funtek', 'ClanId': '3A69F9D9-E45F-E211-9EE7-000C29919411', 'Years': '44', 'TaskStatus': 'completed' });
      mainArrayData.push({ 'Firstname': 'Željko', 'Lastname': 'Stojanović', 'ClanId': '8669F9D9-E45F-E211-9EE7-000C29919411', 'Years': '32', 'TaskStatus': 'completed' });
      mainArrayData.push({ 'Firstname': 'Ivan', 'Lastname': 'Vučić', 'ClanId': '4269F9D9-E45F-E211-9EE7-000C29919411', 'Years': '26', 'TaskStatus': 'cancelled' });
      mainArrayData.push({ 'Firstname': 'Sanda', 'Lastname': 'Sesvečan', 'ClanId': 'F068F9D9-E45F-E211-9EE7-000C29919411', 'Years': '38', 'TaskStatus': 'open' });
      mainArrayData.push({ 'Firstname': 'Marjan', 'Lastname': 'Cavrić', 'ClanId': '3C69F9D9-E45F-E211-9EE7-000C29919411', 'Years': '68', 'TaskStatus': 'open' });
      mainArrayData.push({ 'Firstname': 'Divna', 'Lastname': 'Grcić', 'ClanId': '8469F9D9-E45F-E211-9EE7-000C29919411', 'Years': '41', 'TaskStatus': 'cancelled' });

    	

	$("#btn_ok").click(function(e){

    var idVotingPlace = 7141;
	var username = $("#inputEmail").val();

	if(username != "test")
	{
             e.preventDefault();
	}
	else{
             if(mainArrayData.length != 0) {
                 chosenTab = "svi";
      	        DisplayResult(mainArrayData);
                return;
      	     }
      	     else {
      			
             }
	     
	}



	});   // end of the function after login button click
      

     

	$('#second #contentConfirmation .btn-tab').click(function () {
	    chosenTab = $(this).attr('name');
	    DisplayResult(mainArrayData);
	});


	$("#second").on("click", "li", function () {
	    IdOfSelectedClan = $(this).attr('id');
	    var currentTaskStatusOfSelectedClan = $(this).attr('name');
	    SetDataOnModal(currentTaskStatusOfSelectedClan);
	    $.mobile.changePage('#dialog', 'pop', true, true);
	});

	
	    
	
	$('#dialog .ui-content a').on("click", function () {   // start of "click" event handler on selected Clan
	    var chosenTaskStatus = $(this).attr('name');
        ChangeTaskActivityStatusOfThisUser(mainArrayData,  chosenTaskStatus);      //this function change data directly in UI
	});





    function DisplayResult(array)
	{
      $("#result").html("");
      if (chosenTab == "svi")
      {
      $.each(array, function(index, element){
          $("#result").append('<li name="' + $.trim(element.TaskStatus) + '" id="' + $.trim(element.ClanId) + '" data-theme="c" class="ui-btn ui-li ui-li-has-count ui-li-has-icon ui-btn-up-c "><div class="ui-btn-inner ui-li" aria-hidden="true"><div class="ui-btn-text"><a href="#dialog"  class="ui-link-inherit li-my-style" data-rel="dialog" name="' + $.trim(element.TaskStatus) + '" ><div class="img-my-style ' + $.trim(element.TaskStatus) + '" >' + element.Firstname + ' ' + element.Lastname + ' (' + element.Years + ')</a></div></li>');
      });
      }
      else if (chosenTab == "preostali") {
          $.each(array, function (index, element) {
              if (element.TaskStatus == "open")
              {
                  $("#result").append('<li name="' + $.trim(element.TaskStatus) + '" id="' + $.trim(element.ClanId) + '" data-theme="c" class="ui-btn ui-li ui-li-has-count ui-li-has-icon ui-btn-up-c "><div class="ui-btn-inner ui-li" aria-hidden="true"><div class="ui-btn-text"><a href="#dialog"  class="ui-link-inherit li-my-style" data-rel="dialog" name="' + $.trim(element.TaskStatus) + '" ><div class="img-my-style ' + $.trim(element.TaskStatus) + '">' + element.Firstname + ' ' + element.Lastname + ' (' + element.Years + ')</a></div></li>');
              }
          });
      }
      else if (chosenTab == "evidentirani") {
          $.each(array, function (index, element) {
              if (element.TaskStatus == "completed" || element.TaskStatus == "cancelled")
              {
                  $("#result").append('<li name="' + $.trim(element.TaskStatus) + '" id="' + $.trim(element.ClanId) + '" data-theme="c" class="ui-btn ui-li ui-li-has-count ui-li-has-icon ui-btn-up-c "><div class="ui-btn-inner ui-li" aria-hidden="true"><div class="ui-btn-text"><a href="#dialog"  class="ui-link-inherit li-my-style" data-rel="dialog" name="' + $.trim(element.TaskStatus) + '" ><div class="img-my-style ' + $.trim(element.TaskStatus) + '">' + element.Firstname + ' ' + element.Lastname + ' (' + element.Years + ')</a></div></li>');
              }
          });
      }
      $('#result').listview('refresh');
      }
      

   


      function SetDataOnModal(currentTaskStatusOfSelectedClan) {
          if (currentTaskStatusOfSelectedClan == "open") {
              $("#dialog .ui-content #firstA").attr("name", "cancelled"); $("#firstImage").attr("src", "block.png"); $("#firstTextTd").html("cancelled");
              $("#dialog .ui-content #secondA").attr("name", "completed"); $("#secondImage").attr("src", "tick.png"); $("#secondTextTd").html("completed");
          }
          else if (currentTaskStatusOfSelectedClan == "completed") {
              $("#dialog .ui-content #firstA").attr("name", "open"); $("#firstImage").attr("src", "add.png"); $("#firstTextTd").html("open");
              $("#dialog .ui-content #secondA").attr("name", "cancelled"); $("#secondImage").attr("src", "block.png"); $("#secondTextTd").html("cancelled");
          }
          else if (currentTaskStatusOfSelectedClan == "cancelled") {
              $("#dialog .ui-content #firstA").attr("name", "open"); $("#firstImage").attr("src", "add.png"); $("#firstTextTd").html("open");
              $("#dialog .ui-content #secondA").attr("name", "completed"); $("#secondImage").attr("src", "tick.png"); $("#secondTextTd").html("completed");
          }
      }





      function ChangeTaskActivityStatusOfThisUser(array, chosenTaskStatus) {
       $('[data-role=dialog]').dialog("close");
       //   var chosenTabButton = $("#hiddenField").val();
          $.each(array, function (index, element) {
              if (element.ClanId == IdOfSelectedClan) {
                  element.TaskStatus = chosenTaskStatus;
              }
              //else {
              //    $.each(element.Family, function (index, elementChild) {
              //        if (elementChild.ClanId == IdOfSelectedClan) {
              //            elementChild.TaskStatus = chosenTaskStatus;
              //        }
              //    });
              //}     //end of else
          });   //end of first $.each
          DisplayResult(array,"svi");
        
      }

});   //end of ready function



}