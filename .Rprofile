
library(ggplot2)
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

make_title <- function(title, include_title=FALSE) {
    paste(
        ifelse(include_title,
            paste0('<h2 class="hidden" auto-animate="true" auto-animate-easing="ease-in-out">', title, '</h2>'),
            '<h2 class="hidden" auto-animate="true" auto-animate-easing="ease-in-out"></h2>'
            ),
        wrap(title, class="animate-title", attr='data-id="animate-title"'),
        wrap(class = "timeline", close = FALSE),
        wrap(class = "line", attr = 'data-id="line"'),
        sep = "\n")
}

make_timeline <- function(title, content) {

    formatted_content <- list()
    for (i in seq_along(content)) {
        formatted_content[[i]] = wrap(
            paste0(
                wrap(content[[i]]$when, class="when"),
                "\n",
                wrap(content[[i]]$what, class="what"),
                "\n",
                wrap(content[[i]]$where, class="where")
            ),
            tag = "li", attr = paste0('data-id="p', i, '"')
        )
    }

    out <- ""
    for (i in seq_along(formatted_content)) {
        out <- paste0(
            out,
            make_title(title, i==1),
            wrap(paste(formatted_content[1:i], collapse = ""), tag="ul"),
            "</alt-div>",
            sep = "\n")
    }
    cat("```{=html}\n", out, "\n```")
}