---
title: Introduction to Research Skills
date: "2023-10-08"
format: hugo-md
type: revealjs
execute:
  echo: true
---

## Welcome

<!-- these fences CANNOT be nested -->

::{.incremental}

-   something

**bold**

[some link](https://www.google.com)

::

## chrom

<img src="http://book.bionumbers.org/wp-content/uploads/2014/07/505-f2-HumanChimpChromosomes-1.png" class="frame rot" data-source="http://book.bionumbers.org/how-many-chromosomes-are-found-in-different-organisms/" height="500" alt="Human chromosome 2 and analogous chimp chromosomes, adapted from Yunis+&amp;+Prakash, Science, 215:1525, 1982" />

 <h2 class="hidden" auto-animate="true" auto-animate-easing="ease-in-out">Who am I?</h2>
<div class="animate-title" data-id="animate-title">Who am I?</div>
<div class="timeline">
<div class="line" data-id="line"></div><ul><li data-id="p1"><div class="when">2011-2015</div>
<div class="what">PhD Psychology</div>
<div class="where">University of Edinburgh</div></li></ul></alt-div>
<h2 class="hidden" auto-animate="true" auto-animate-easing="ease-in-out"></h2>
<div class="animate-title" data-id="animate-title">Who am I?</div>
<div class="timeline">
<div class="line" data-id="line"></div><ul><li data-id="p1"><div class="when">2011-2015</div>
<div class="what">PhD Psychology</div>
<div class="where">University of Edinburgh</div></li><li data-id="p2"><div class="when">2015-2017</div>
<div class="what">Psychometrics</div>
<div class="where">Royal College of Surgeons of Edinburgh</div></li></ul></alt-div>
<h2 class="hidden" auto-animate="true" auto-animate-easing="ease-in-out"></h2>
<div class="animate-title" data-id="animate-title">Who am I?</div>
<div class="timeline">
<div class="line" data-id="line"></div><ul><li data-id="p1"><div class="when">2011-2015</div>
<div class="what">PhD Psychology</div>
<div class="where">University of Edinburgh</div></li><li data-id="p2"><div class="when">2015-2017</div>
<div class="what">Psychometrics</div>
<div class="where">Royal College of Surgeons of Edinburgh</div></li><li data-id="p3"><div class="when">2017-2022</div>
<div class="what">Teacher/Lecturer in research methods & statistics</div>
<div class="where">Universities of Edinburgh and Sussex</div></li></ul></alt-div>
<h2 class="hidden" auto-animate="true" auto-animate-easing="ease-in-out"></h2>
<div class="animate-title" data-id="animate-title">Who am I?</div>
<div class="timeline">
<div class="line" data-id="line"></div><ul><li data-id="p1"><div class="when">2011-2015</div>
<div class="what">PhD Psychology</div>
<div class="where">University of Edinburgh</div></li><li data-id="p2"><div class="when">2015-2017</div>
<div class="what">Psychometrics</div>
<div class="where">Royal College of Surgeons of Edinburgh</div></li><li data-id="p3"><div class="when">2017-2022</div>
<div class="what">Teacher/Lecturer in research methods & statistics</div>
<div class="where">Universities of Edinburgh and Sussex</div></li><li data-id="p4"><div class="when">2022-present</div>
<div class="what">Research associate</div>
<div class="where">InfAR @ Bauhaus</div></li></ul></alt-div>
 

## scatter

``` r
df <- tibble::tibble(x = rnorm(100), y = x + rnorm(100))
df |>
    ggplot(aes(x, y)) +
    geom_point() +
    labs(x = "blah", y = "blee")
```

<img src="index.markdown_strict_files/figure-markdown_strict/unnamed-chunk-3-1.png" width="768" />

## Hist

``` r
df |>
    ggplot(aes(x)) + geom_histogram()
```

<img src="index.markdown_strict_files/figure-markdown_strict/unnamed-chunk-4-1.png" width="768" />
