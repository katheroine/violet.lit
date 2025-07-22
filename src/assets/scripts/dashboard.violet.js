function handleDashboard()
{
    let detachmentObserver = new IntersectionObserver(handleDetachment);
    let cover = document.getElementById("cover");
    
    detachmentObserver.observe(cover);

    function handleDetachment(elements)
    {
        let cover = elements[0];
        let dashboard = document.getElementById("dashboard");
        let board = document.getElementById("board");

        if (cover.intersectionRatio == 0 && (! dashboard.classList.contains("detached"))) {
            let dashboardHeight = dashboard.getBoundingClientRect().height;
            dashboard.classList.add("detached");
            board.style.paddingTop = dashboardHeight + "px";
        } else if ((cover.intersectionRatio <= 1) && dashboard.classList.contains("detached")) {
            dashboard.classList.remove("detached");
        }
    }
}
