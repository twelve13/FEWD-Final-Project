//ok - super rough plan

//when Setup button is clicked, have the setup form slide down
$('#setup').click(function() {
  $('#show-on-click').slideDown();
});

$('#setup_done').click(function() {
  $('#show-on-click').slideUp();
});

//make forms functional

//(issue?) I was going to have separate buttons for Setup (setting up the item names, goals, and percentages)
//and for Income (specify income amount and add amounts to jars)
//but I'm realizing I don't know how to cross-reference the info from different submit events...

//when Setup form Submit button is clicked:
//create var labelItem1 that will take input from what's entered in form for name-item1
//target jar1 and change <p> from Label 1 to var labelItem1
//create var goalItem1 that will take input from what's entered in form for goal-item1
//figure out how I want to display goalItem1 value - would like to display as part of hover function if possible
//create var percentageJar1 that will take value from what's entered in form for percentage-item1 (issue?)
//repeat for all items

//when Income button is clicked, have income form slide down: will have field for income amount
//when Income form Submit button is clicked:
//create var incomeTotal that will take input from what's entered in income field
//create var incomeJar1 that will do incomeTotal * percentageJar1 (issue?)
//create var amountJar1 that will have an initial value of 0.  amountJar1 will = amountJar1 + incomeJar1 so that the amount adds up as Income button is clicked
//figure out how I want to display amountJar1 - would like to display as part of hover function along with goalItem1 value
//repeat for all items

//when you click on each jar, these will appear and will act like mini forms:
  //amount
  //add
  //subtract
  //log

  //when add button is clicked
  //amountJar# will = amountJar# + value entered in field
  //when subtract button is clicked
  //amountJar# will = amountJar# - value entered in field
  //when log button is clicked
  //field will appear to allow you to enter note (description of bill paid or purchase made) and this will get logged somewhere.  i have no idea how.