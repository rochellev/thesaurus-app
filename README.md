# Thesaurus Web App: Answering the question of how to show the relationships between a word and its synonyms

## Rochelle Roberts Crain

## Description

Thesaurus in a fun visual form. I found myself using a thesaurus daily for many thing, writing emails, my resume, and naming in code. This app offers another way to look at how synonyms grow from one word.

## Software Design

### Planning

0. Early Stages:
   I am inspired by how Apple Watch makes use of scale transforms in their app drawer view to show all the apps by zooming in and out. My plan is to use the CSS function `scale()` to have this effect when rendering a growing number of bubbles representing synonyms of a given word.

<div align="center">

<img src="images/bubbles-init.jpeg" alt="input section" width="30%"/>
<br>
<img src="images/bubbles-one-level.jpeg" alt="output section" width="60%"/>
<br>
<img src="images/bubbles-two-levels.jpeg" alt="output section" width="100%"/>

</div>
<br>

1. Proof of Concept:
   Using [amCharts](https://www.amcharts.com/docs/v4/) to build a tree graph, I successfully generated a graph with sample word data.
   Now that I know how to make a basic graph, I can move on to more complex graph behavior. For example:
   - How will the graph grow?
   - How can users select the sense or definition of their search word?

<div align="center">
<img src="images/HomeView.png" alt="screenshot of a word tree graph" width="90%"/>
</div>
<br>
