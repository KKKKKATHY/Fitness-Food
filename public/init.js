const REQ_INIT = "/api/init"

let socket = io()

socket.on('newConnection', msg => {
    console.log("server msg: ", msg);
})

//main
$(document).ready(() => {
    console.log('page ready');
    $.get(REQ_INIT, (res) => {
        console.log("??????");
        
        if(res.statusCode != 200) {
            console.log('page init failed!');
            return null
        }
        console.log('-> page init succeeded');
        
        let result = res.result
        //
        $("#hero_area").append(createHero(result))
        $("#nav_bar").load('./components/navbar.html', () => {
            $('.scrollspy').scrollSpy()
        })
        $("#footer").load('./components/footer.html')
    })
    
})