
library(ggplot2)

knitr::opts_chunk$set(dev.args = list(bg="transparent"))

main_col <- "#1860ac"
update_geom_defaults("point", list(colour = main_col, size = 3))
update_geom_defaults("bar", list(colour = main_col, fill = paste0(main_col, "aa")))
my_theme <- theme(
        line = element_line(colour = main_col),
        text = element_text(colour = main_col),
        plot.background = element_blank(),
        panel.background = element_rect(
            fill = "white",
            colour = main_col),
        panel.grid.major = element_line(colour = paste0(main_col, "30")),
        panel.grid.minor = element_line(colour = paste0(main_col, "25")),
        axis.ticks = element_line(colour = "white"),
        axis.text = element_text(colour = "white", size = 12),
        axis.title = element_text(colour = "white", size = 18),
        axis.title.x.bottom = element_text(vjust=-0.5)
    )

theme_set(my_theme)

wrap <- function(x="", tag="div", class, attr, close=TRUE) {
    orig_tag = tag
    if (!missing(class)) {
        tag = paste0(tag, ' class="', class, '"')
    }
    if (!missing(attr)) {
        tag = paste(tag, attr)
    }
    out <- paste0("<", tag, ">", x)
    if (close) out <- paste0(out, "</", orig_tag, ">")
    return(out)
}

make_title <- function(title, include_title=FALSE, font_size) {
    paste(
        ifelse(include_title,
            paste0('<h2 class="hidden" auto-animate="true" auto-animate-easing="ease-in-out">', title, '</h2>'),
            '<h2 class="hidden" auto-animate="true" auto-animate-easing="ease-in-out"></h2>'
            ),
        wrap(title, class="animate-title", attr='data-id="animate-title"'),
        wrap(class = "timeline", attr=paste0('style="font-size:', font_size ,'px;"'), close = FALSE),
        sep = "\n")
}

make_timeline <- function(title, content, font_size = 25, highlight_last = TRUE) {

    formatted_content <- list()
    for (i in seq_along(content)) {
        formatted_content[[i]] <- wrap(
            wrap(
                paste(
                    wrap(content[[i]]$when, class = "when"),
                    wrap(content[[i]]$what, class = "what"),
                    wrap(content[[i]]$where, class = "where"),
                    sep = "\n"
                ), class = "timeline-item"
            ),
            tag = "li",
            class = ifelse(highlight_last & i == length(content), "last", ""),
            attr = paste0('data-id="p', i, '"')
        )
    }

    out <- ""
    for (i in seq_along(formatted_content)) {
        current_content <- paste(formatted_content[1:i], collapse = "")
        current_content <- paste(
            current_content, wrap(class = "line", attr = paste0('data-id="line" style="grid-row:1/', i+1, ';"')),
            sep = "\n"
            )
        out <- paste0(
            out,
            make_title(title, i == 1, font_size),
            wrap(
                current_content,
                tag = "ul",
                attr = paste0(
                    'style="grid-template-rows:repeat(', i + 1, ', 4em);"'
                    )
                ),
            "</alt-div>",
            sep = "\n")
    }
    cat("```{=html}\n", out, "\n```")
}