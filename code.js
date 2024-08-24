function onEdit(e) {
  var sheetName = e.source.getActiveSheet().getName();

  if (sheetName === "Fall 2024" || sheetName === "Spring 2025" || sheetName === "Summer 2025") { //modify for future terms as needed
    colorFinder(sheetName);
  }
}

function colorFinder(sheetName) {
  var sheetId = "put the end of the sheeturl here"; //example https://docs.google.com/spreadsheets/d/14TyVMZdfg3M7lreK5png6sl1Wf_WuxKAZDDg-oBtGZ/edit? you would put 14TyVMZdfg3M7lreK5png6sl1Wf_WuxKAZDDg-oBtGZ
  var targetSheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);

  var dataRange = targetSheet.getRange("D10:D");
  var cellBackgrounds = dataRange.getBackgrounds();
  var lightRedCount = 0;
  var lightCornflowerBlueCount = 0;
  var lightGreenCount = 0;
  var lightYellowCount = 0;
  var blackColorCount = 0;
  var lightRedColor = "#ea9999"; // Light red 2 color code
  var lightCornflowerBlueColor = "#a4c2f4"; // Light cornflower blue 2 color code
  var lightGreenColor = "#b6d7a8"; // Light green 2 color code
  var lightYellowColor = "#ffe599"; // Light yellow 2 color code
  var blackColor = "#000000"; // Black color code

  for (var i = 0; i < cellBackgrounds.length; i++) {
    if (cellBackgrounds[i][0] === lightRedColor) {
      lightRedCount++;
    } else if (cellBackgrounds[i][0] === lightCornflowerBlueColor) {
      lightCornflowerBlueCount++;
    } else if (cellBackgrounds[i][0] === lightGreenColor) {
      lightGreenCount++;
    } else if (cellBackgrounds[i][0] === lightYellowColor) {
      lightYellowCount++;
    } else if (cellBackgrounds[i][0] === blackColor) {
      blackColorCount++;
    }
  }

  var rejectCounterCell = targetSheet.getRange("B3");
  var counterB4Cell = targetSheet.getRange("B4");
  var counterB5Cell = targetSheet.getRange("B5");
  var counterB6Cell = targetSheet.getRange("B6");
  var counterB7Cell = targetSheet.getRange("B7");

  rejectCounterCell.setValue(lightRedCount);
  counterB4Cell.setValue(lightYellowCount);
  counterB5Cell.setValue(lightCornflowerBlueCount);
  counterB6Cell.setValue(lightGreenCount);
  counterB7Cell.setValue(blackColorCount);
}
//https://docs.google.com/spreadsheets/d/1Pgh8kwB6fY_76fJWtJ7LlRSHWdzOqgtlaq5N8JJRcSI/edit?gid=1972607511#gid=1972607511

//https://script.google.com/u/0/home/projects/1TNW82g5GkN537lrYc8idZwEAAzRtb1cl6wbPuvsHrgn899756Rsvpz4s
