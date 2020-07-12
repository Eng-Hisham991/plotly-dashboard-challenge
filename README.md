# Plot.ly Homework - Belly Button Biodiversity

![Bacteria by filterforge.com](Images/bacteria.jpg)

In this assignment, we have built an interactive dashboard to explore the 
[Belly Button Biodiversity dataset]
(http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the 
microbes that colonize human navels.

The dataset reveals that a small handful of microbial species 
(also called operational taxonomic units, or OTUs, in the study) were present 
in more than 70% of people, while the rest were relatively rare.

## Step 1: Plotly

1. Used the D3 library to read in `samples.json`.

2. Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs 
found in that individual.

* Used `sample_values` as the values for the bar chart.

* Used `otu_ids` as the labels for the bar chart.

* Used `otu_labels` as the hovertext for the chart.

  ![bar Chart](Images/hw01.png)

3. Created a bubble chart that displays each sample.

* Used `otu_ids` for the x values.

* Used `sample_values` for the y values.

* Used `sample_values` for the marker size.

* Used `otu_ids` for the marker colors.

* Used `otu_labels` for the text values.

![Bubble Chart](Images/bubble_chart.png)

4. Displayed the sample metadata, i.e., an individual's demographic information.

5. Displayed each key-value pair from the metadata JSON object somewhere on the page.

![hw](Images/hw03.png)

6. Updated all of the plots any time that a new sample is selected.


## Advanced Challenge Assignment (Optional)

The following task as follows:

* Adapted the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot 
the weekly washing frequency of the individual.

* Modified the example gauge code to account for values ranging from 
0 through 9.

* Update the chart whenever a new sample is selected.

![Weekly Washing Frequency Gauge](Images/gauge.png)

## Deployment

Deployed the app to a GitHub Pages. 


### About the Data

Hulcr, J. et al.(2012) _A Jungle in There: Bacteria in Belly Buttons are Highly 
Diverse, but Predictable_. Retrieved from: 
[http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/]
(http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)

- - -

© 2020 Hisham Elhassan
