/*

Looping a Triangle

Write a loop that displays the following triangle within a console window:

#
##
###
####
#####
######
#######

*/



let triangle = "";

for (let i = 0; i < 7; i++) {
    triangle += "#";
    console.log(triangle);
}
