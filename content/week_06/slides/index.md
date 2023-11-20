---
date: 2023-11-21
execute:
  echo: true
  fig-dpi: 600
includes:
  css: ./assets/css/stroop.css
  js: ./assets/js/stroop.js
title: Whole lotta love
toc-title: Table of contents
type: revealjs
---

## Today

::: incremental
-   Quantitative methodology
    -   What & why?
-   Experimental vs observational design
-   Between-subjects vs within-subjects
-   Cross-sectional vs longitudinal design
:::

## What's the point of quant research?

::: incremental
-   To obtain generalisable knowledge

    -   not only "true" for a given case
    -   with some abstraction, can be *generalised*

-   To test **hypotheses** and form **theories**

-   In contrast with *qualitative* research, it relies on

    -   measurement
    -   mathematical modelling
    -   statistical testing

-   It deals with questions that have *quantifiable* answers
:::

## Scientific theory

::: incremental
-   **Remember**: not theory in the *colloquial sense* (hunch,
    conjecture)
-   Logically coherent framework
    -   *supported by observation*
    -   **describes**, **explains**, and **predicts** some aspect of the
        natural world
-   Predictions based on theory are **hypotheses**
:::

## Research design

:::{.incremental} - The purpose of quantitative research studies is to
**test hypotheses** using *measurement*, *quantification*, and
*mathematical or statistical modelling*.

-   Different kinds of research design have been developed to answer
    different research questions

-   Which design to choose depends on

    -   The hypothesis to be tested
    -   Resources (time, money, facilities, personnel)
    -   Logistical considerations
    -   Ethical considerations :::

## Design categories

::: incremental
-   Study design can be categorised based on 3 criteria
    -   Presence or absence of manipulation
    -   Between/within-subjects measurement
    -   Time frame
:::

## Presence or absence of manipulation

::: incremental
-   *Manipulation* is the careful changing of an aspect of the study to
    see whether or not it affects the study's outcome
-   Designs that contain manipulations are called **experimental** (and
    **quasi-experimental**)
-   Designs that do not are called **observational** or *correlational*
:::

## Experiments

::: incremental
-   You saw a poster advertising a study about reading
-   They are looking for *native English speakers between 18 and 60
    years of age, with normal or corrected-to-normal vision, and without
    dyslexia*
-   You respond and tell you to come to the lab tomorrow at 2pm but to
    get a good rest tonight and to have lunch around noon
-   You get to the lab, they lead you to a dark room and sit you down in
    front of a computer screen.
-   They type in a code and leave
-   Instructions appear telling you that your task will be to focus on
    the '+' in the middle of the screen
-   You will be presented a series of words in different colours and
    your task is to say aloud the name of the colour in which the given
    word is displayed as quickly and accurately as you can.
:::

## 

::: {#stroop1 .stroop onclick="stroop1()"}
::: {#overlay1 .overlay}
Task 1`<br>`{=html}Click to start/stop
:::

::: {#stim1}
\+
:::
:::

## 

::: centered
After a short break, there come more words...
:::

## 

::: {#stroop2 .stroop onclick="stroop2()"}
::: {#overlay2 .overlay}
Task 2`<br>`{=html}Click to start/stop
:::

::: {#stim2}
\+
:::
:::

## Experiment

::: incremental
-   With that, the study is over; after a short chat with the
    researcher, you leave

-   On your way home you meet a friend

-   They tell you they took part in a similar study but for them, the
    colour words were printed in a colour that matched the words

 

::: {.text-center .large}
This was an **experiment**
:::
:::

## Experiment

Let's break down what happened

::: incremental
-   The *research question* is whether or not there is a difference in
    colour-naming performance when the colour words match the colours
    they are shown in versus when the words and colours do not match

-   The *hypothesis* is that there is one

-   To *test the hypothesis*, an experimental study was designed

-   Participants completed a **task** (a version of the [Stroop
    task](https://en.wikipedia.org/wiki/Stroop_effect)).

    -   They were presented a sequence of **stimuli**: colourful words
    -   They were instructed to **respond** by naming the colour in
        which the given stimulus is presented
    -   One stimulus-response pair is a **trial**
:::

## Experiment

::: text-center
*An experimental task consists of trials, where a stimulus is presented
and a response is recorded*
:::

::: incremental
-   The **experimental manipulation** was showing some people words in
    matching colours and others words in non-matching colours

    -   The two versions of the task are called **conditions**
    -   We can call the conditions *congruent* (matching) and
        *incongruent* (clashing).

-   Putting participants in groups by condition allows the research to
    manipulate a single characteristic of the task while **controlling**
    everything else (keeping everything else equal)

-   Any difference in responses between participants in the congruent
    condition and the participants in the incongruent condition is
    *caused* by the manipulation.
:::

## Controls

-   In the example, there were multiple controls

::: incremental
-   Participants screened for vision, age, native language, and dyslexia

-   They were instructed to get a good rest and come well fed but not
    too full

-   **Standardised settings** (dark room, position in front of the
    screen) to minimise distraction and variability

-   **Standardised instructions**
:::

## Randomisation

::: incremental
-   Differences between participants can introduce unwanted
    **variability** into the experiment

-   To deal with this, participants should be sorted into the groups
    **randomly**

    -   If the group allocation is *not randomised*, groups can differ
        on some unknown characteristic
    -   This can skew the results of the study
    -   For instance, if we put all blue-eyed people into one group and
        all brown-eyed people into another group, this would introduce
        **systematic variability** in the design
    -   We don't have to have a good explanation for how the systemic
        variability would influence the results
:::

## Randomisation

::: incremental
-   Participant allocation is random if each participant has an *equal
    chance to be in any of the groups*

-   A well-designed experiment *randomises both participant allocation
    and stimulus presentation order*
:::

## Blinding

::: incremental
-   Participants may, consciously or not, modify their behaviour in
    accordance with or contrary to the hypothesis

-   Because of that, it is crucial that they be kept unaware of what the
    hypothesis is

-   Also important that they don't know what conditions they have been
    allocated to
:::

## Blinding

::: incremental
-   If participants are *naïve* to group allocation, the study is said
    to be **single-blind**.

-   If neither the participants nor the researcher know which condition
    the participants are put in, the study design is known as
    **double-blind**

    -   Allocation is recorded but only revealed once the study is over
        and the data are being analysed

    -   By giving up knowledge about group allocation, the researcher is
        ensuring that they will not unwittingly influence the results
:::

## 

::: {.centered .large .text-center}
**Randomised double-blind experiments are the gold standard of
quantitative research with human participants!**
:::

## Experiment: summary

-   The researcher introduces an experimental **manipulation** of an
    aspect of the study
-   All other variables are **controlled** to prevent unwanted
    variability in the design
-   Participant allocation and stimulus presentation are **randomised**
-   Participants are naïve to the research hypothesis
-   Design is **double-blind**: neither participants nor researchers
    know which condition the participants is in before the data are
    analysed

## Experiment: evaluation

-   The experimental setting with its tight controls is always at least
    somewhat **artificial**
    -   It presents an abstraction from reality
    -   Just because something is true in the lab, doesn't *necessarily*
        mean it will be true in "the real world".
-   Experiments are **very effortful and time-consuming** for both the
    researcher and the participants
-   The experimental design provides the most rigorous methodology to
    investigate *causal relationships*
-   There are often methodological, logistic, and ethical obstacles to
    randomisation, manipulation, and controls that render designing an
    experiment infeasible.

## Quasi-experiment

::: incremental
-   Conforms to all the requirements of the experimental design **except
    for participant randomisation**

-   Used in situations where it is not possible to randomise the
    allocation of participants into group

-   Conditions should be **matched**

    -   Participants are allocated so that the groups don't differ on
        any relevant characteristics, other that the one being
        investigated
:::

## Natural experiment

::: {.tight .incremental}
-   Manipulation and randomisation occur through some **natural or
    socio-political** means

-   A good example are **twin studies**

    -   *Identical* twins share essentially 100% of their genes

    -   *"Fraternal"* twins share on average 50% of human-specific genes

    -   Both kinds of twins tend to share the same home environment
        (raised together)

    -   Comparing similarities between identical twins and similarities
        between fraternal twins, we can estimate the role of genes and
        environment in all sorts of things (physical/mental health,
        personality, cognitive ability, *etc.*).

-   Other kinds of natural experiments may be made possible due to
    policy changes (car access restriction, zoning changes...) or
    natural events.
:::

## 

::: {.centered .large .text-center}
Any questions?
:::

## 

 

 

 

 

::: {.large .text-center}
**Quasi-experiments and natural experiments are technically not
experiments!**
:::

 

 

::: incremental
They can't provide evidence of causality of the same strength as
experiments
:::

## Observational design

::: incremental
-   Also called **correlational**

-   Rely on observed data, not manipulated conditions and their aim is
    to assess **relationships** between things without talking about
    causes and effects.

-   Observation doesn't just mean *looking*, there is still measurement,
    questionnaires, laboratory tasks, *etc.*

-   What makes data observational is the lack of experimental
    manipulation

-   This makes it easier to collect large datasets

    -   There are studies with tens, even hundreds of thousands of
        participants.

-   They cannot provide strong evidence of a cause-and-effect
    relationship
:::

## Causal or not?

```{=html}
<!-- - There is a relationship between people who died in the USA by drowning in swimming pools every year between 1999 and 2009 and the number of movies starring Nicolas Cage -->
```
::: cell
``` {.r .cell-code}
library(ggplot2)
colors <- c("Drownings in swimming pool (USA)" = "#1860ac", "Movies starring Nick Cage" = "#f59f00")
coef = 10
shift = 80

data = tibble::tibble(
  Year = 1999:2009,
  deaths = c(109, 102, 102, 98, 85, 95, 96, 98, 123, 94, 102),
  movies = c(2, 2, 2, 3, 1, 1, 2, 3, 4, 1, 4)
)

data |>
  ggplot(aes(x = Year, y = deaths)) +
  geom_line(aes(colour="Drownings in swimming pool (USA)"), lwd=1) +
  geom_point(size = 3, shape = 21, colour="#1860ac", fill="white", stroke = 1) +
  geom_line(aes(y = movies * coef + shift, colour="Movies starring Nick Cage"), lwd=1) +
  geom_point(aes(y = movies * coef + shift), size = 3, shape = 21, colour="#f59f00", fill="white", stroke = 1) +
  labs(colour = "Legend") +
  scale_y_continuous(
    name = "Annual drownings",
    sec.axis = sec_axis(~(. - shift) / coef, name="Number of movies")
  ) +
  scale_color_manual(values = colors) +
  theme(legend.position="top", 
    legend.text=element_text(colour = "white"),
    legend.background=element_blank(),
    legend.title = element_blank())
```

::: cell-output-display
![Figure 1: Spurious
correlation](index_files/figure-markdown/fig-spur-1.png){#fig-spur}
:::
:::

## Causal or not?

::: incremental
-   Does A cause B?

-   Does B cause A?

-   Does some unknown common thing C cause bothe A and B?

-   Is this relationship even causal at all?

-   Observational design cannot *really* tell us

    -   *"Correlation does not equal causation"*

    -   Under certain circumstances it can *suggest* causation (*e.g.*,
        a very strong relationship, a lot of additional information
        about potential confounding factors) but, in human research,
        this is almost never the case
:::

## Just because we can doesn't mean we should

::: incremental
-   There can be ethical obstacles to experimental manipulation

-   In those cases, observational design is the only feasible one

-   Is cannabis a gateway drug?

    -   Does it cause people to take other drugs?
:::

```{=html}
<aside class="notes">
```
To establish a causal relationship, we would need to assign people of
all ages to experimental conditions where they are either required to
use marijuana or are prevented from doing so and then those people would
need to be closely monitored to see who tries other drugs and who
doesn't

This would not be ethical
```{=html}
</aside>
```
## Within/between subjects

::: incremental
-   Does manipulation or measurement of interest occur **between groups
    of participants** or **within each participant's** data?

-   In the colour-naming experiment, one participant only saw either
    congruent or incongruent stimuli; no-one saw both

    -   This is a **between-subjects** manipulation

-   The first block of stimuli didn't contain any colour words and this
    block was the same for everyone

    -   Everyone saw both colour words and this *control* condition
    -   This is a **within-subjects** manipulation
    -   Within-subjects design is susceptible to **order effects**
        (training, fatigue...)
:::

## Within/between subjects

::: incremental
-   One study can easily contain both between- and within-subjects
    design elements
    -   This is referred to as a **mixed-design** study
-   Other examples
    -   Comparing people who haven't used cannabis and those who have
        (between-subjects)
    -   Administering a drug use questionnaire on *multiple occasions*,
        for instance every 2 years (within-subjects)
-   Within-subject design, where several measurements of the same thing
    are taken several times, is also known as **repeated measures**
    design
    -   In the colour-naming study, we record multiple responses on the
        same kind of stimulus (multiple colour words): also a repeated
        measure
:::

## Time frame

::: incremental
-   Study design can also be categorised by the time frame in which the
    study takes place

-   Two types

    -   **Cross-sectional** design

    -   **Longitudinal** design
:::

## Cross-sectional

-   Hypothesis: *"Millenials like avocado toast more than other
    generations."*
-   Possible design:
    -   Ask people's year of birth and how much they like avocado toast,
        using an online questionnaire.
    -   Send this questionnaire out to a lot of people and collect their
        responses
    -   *Categorise* participants into generations according to their
        date of birth
        -   1946-1964: Baby boomers
        -   1965-1980: Generation X
        -   1981-1996: Millenials (GenY)
        -   1997-2012: Generation Z
    -   Look at whether millenials have a higher liking for avocado
        toast than other groups

## Cross-sectional design

-   This is a **cross-sectional** study
-   It takes a "cross-section" of a sample of a population **at a single
    time point**
-   There is no *temporal* dimension
    -   We are interested in looking at how things are *now*
    -   Not interested how they develop over time

## Potential isues with cross-sectional design

::: incremental
-   A temporal dimension may be *inherent* to the research question

-   Even if millenials like avocado toast more than other generations,
    that doesn't necessarily mean that the liking is characteristic of
    that generation

-   Maybe people develop a particular taste for it in their mid-twenties
    but by the time they turn 40, they lose it

-   Cross-sectional design is not able to distinguish between these two
    hypotheses
:::

## Longitudinal design

::: incremental
-   Involves *repeated measurement* of the same characteristic of the
    *same participants* at **multiple different time points**

-   For example, a longitudinal study would track people throughout
    their lives and ask them in regular intervals how much they like
    avocado toast

-   After a few decades, it would be possible to tell whether or not the
    millenials' liking of avocado toast is due to something inherent to
    this particular generation or whether it's just people in their
    mid-20s to 40s who like it, irrespective of what generation they
    belong to.
:::

## Longitudinal design

::: incremental
-   **Logistically very complex** and take a lot of time, money, and
    effort to run

-   **Involves a coordinated team of people**

-   *Only way how to study any situation where time is a potentially
    important factor*

-   Used in topics of **ageing and development** but also others
:::
