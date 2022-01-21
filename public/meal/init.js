const REQ_INIT = "/api/mealInit"

let socket = io()

socket.on('newConnection', msg => {
    console.log("server msg: ", msg);
})

//main
$(document).ready(() => {
    console.log('page ready');
    $.get(REQ_INIT, (res) => {
        if(res.statusCode != 200) {
            console.log('page init failed!');
            return null
        }
        let result = res.result
        //
        $("#hero_area").append(createHero(result))
        $("#daily_area").append(createDailyTable(result))
        $("#weekly_area").append(createWeeklyTable(result))
        $("#nav_bar").load('../components/navbar.html', () => {
            $('.scrollspy').scrollSpy()
        })
        $("#footer").load('../components/footer.html')
    })
    
})