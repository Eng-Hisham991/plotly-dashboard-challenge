# Plot.ly Homework - Belly Button Biodiversity

-  This work consists 1 file and 4 files placed in one folder and this folder conatins
   2 folders. 
- The data stored in samples.json which placed in data folder under f folder.
- The Bacteria image stored inside f floder.
- The app.js and bonus.js sotred in js under static folder under f folder.

- The idea of this project is :
  - create an init function which provides basic output in terms of rendering the web 
    page with charts of horizontal bar chart, guage chart, bubble chart, dropdown menu
    which contains the top 10 ids of people's data and metdata information.
    Inside the init function the following defined:
     - d3.json to get the data from the samples.json file.
     - get the required data from the objects inside the mentioned file.
     - construct the metadata information which is stored under id="sample-metadata".
     - build the H bar chart with their ploting function.
     - buildd the bubble chart with their ploting function.
     - build the guage chart with their ploting function.  

  - Then created event linstener, build update function which is be called when the dropmenu
    selected. It contains 3 functions, which their ouputs change depend on the dropdown 
    menu selection, these functions are metadata function, h bar function, bubble bar 
    function and guage function. When update function is called all the other functions under it
    will generated.

  - Then build metadata function, h bar function, bubble bar function and guage function
    which is stored in bonus.js file.

  - Build modifyYaxisName function to rename the y ticks in terms of "OTU 1167".
  - Build modifyLabels function to get the label's name short in term of one word.
  

 
