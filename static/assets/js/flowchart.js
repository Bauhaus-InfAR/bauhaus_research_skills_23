
document.querySelector(".reveal").addEventListener("slidechanged", e => {    
	const flowchart = document.querySelector(".present #flowchart:not(.active)");
    if (!flowchart) return;
    document.addEventListener("keydown", e => { 
        const key = e.key
        // if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(key) ) return
        if (!['ArrowDown', 'ArrowRight'].includes(key) ) return
        e.stopPropagation();
        document.getElementById("flowchart").classList.add("active")
    }, {once: true, capture: true})
})