var testClick=true
document.addEventListener("mouseover",function myfunction(event)
{
    var changeBackground=document.getElementById("challenger-id")
    if(event.target.className=="palyer-hand rock" && testClick)
    {
        changeBackground.style = "background-image : url('https://yt3.ggpht.com/a-/AN66SAytYyy8uIBWxo9NUBhAYFhRtlUVExK3CRYcug=s288-mo-c-c0xffffffff-rj-k-no')"
    }
    else if(event.target.className=="palyer-hand paper" && testClick)
    {

        changeBackground.style = "background-image : url('http://www.trendenterprises.com/images/productmedium/T1095MED.jpg')"
    }
    else if(event.target.className=="palyer-hand scissors" && testClick)
    {
        changeBackground.style = "background-image : url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHoAlwMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQUGBwMECAL/xAA+EAABAwMBBgMEBwcDBQAAAAABAAIDBAURBhIhMUFRYQcTcYGRobEUIiMyQlJyJDNTYqLB8ENz0xY0gpLC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGhEBAQEBAQEBAAAAAAAAAAAAAAERMSFRAv/aAAwDAQACEQMRAD8A3gThcUdVBLI6OOVjnt3loO/C4rm1j6GaJ9UaXzWmMTNcGuYXbgQTz37lh1sqaihrWWW9nZqmuIoZogR5jABvDvmD6HPMM7ypVfT1jmAMqiByEo3A+vQ/D04Lv5QSihEEooRBKKEQSihEEooRBKKEQSihEEooRBUago5auGIsYJWROLnwkff3Y3emTu5rHqm2xV9D5MMzmsbkxB2fsXcMtPFh5EcORCzhVtwtbZ3OnpiIqg8T+GTs4f3G/wBeCgobPV1VMxtFd2NYWNayOoLyRMcY3k8D69cK9hkkptzRtx/w/wAo7H+3yVax+Xvp6iPYlH34ngHI6jkR3XIyOSAfs0n1f4UhJb7DxHxHZUXsMzJmbUbsjOD1B6HoVyKijqgZhxpqkjADuD+w5OHx9FZ01UJHeXI3Ym/Lnc7uDz+aDtIiICIiAiIgIiICIiAiIgIiICIiDrV1FDWxhkoILd7Ht3OYeoKp5BPQvEdbgsJwyoaMNd2d+U/D5LIV8yRslY5kjWuY4Yc1wyCO6CmcxkrdiRrXNI3tIyF1tl7NplPKJ2sxtQvf9ZnTZdxHt94XPU0U9uy+ka+opecGcvZ+nqP5ePToqc25snmV1oqpWSSuDiWuyAeY2T8Qd/t3KC/oLo1zjFO4gtG/bGHN/UP/AKG5WoII4rEaatbVyxUtzgMdV/pyxggOON5aeLTgZwrCOestnFpq6UcmD7Rg645+z3IL9Fw0tTDVwNmp5GyRu4Ef5uPZcyoIiICIiAiIgIiICIiAiIgIiICqq+0eZMaugkFNVne44yyX9Y6/zcR34K1RBjtNUN+leTVwfRa3GNh34x1afxD5c8KxaeC7dXSwVcJhqIw9h94PUHiD3CoKqWqsj81u1UW/lVAZdF2kHT+Ye3HEhyVDo2XDy6OV0VcWhztje0jltt4HOPXuvm7asptP291XfIJ4mNcGh9PG6Vjs8N4+77ce1dOKlezUMt0ic2SjqIWYc05LXDdjHTGPiruop4K2nkgqYmywytLXxvGQ4HkVcFVQ+IWmqxuRXOh/34nMHvxhW9Lf7NWD9ku1DN2jqGE/Na6v3h6aaN0tjJdG0boHHLgOg6/P1WDPjLXuiqGYe3iHDgspr0Y2eFwy2WMjs4Lr1F0t1N/3NfSxf7kzW/Mrz4IIhwaM9guGeGPBOyM+iaWt7VGttL05Iff7e4jiI52vP9OVRXPxUsVO0i3x1VweP4cflsHq5+B7srUFupG1kz2uxiMZ2evRZRoLQtPqyprK27TSOttJUeTHTRO2PNcACcuHADON2/uESVaO8aX+fsC0UIbng65Eux7IyFmeldeWrULmwtzTVLvusc8Oa89GuHH0OCrB+j9NvtptzrJRClIxsNiAPqCN+e+crQmsrTP4f6qkpKGZ76OaNs8G2d4bkjGfzNLTvHLHUor0uEWN+H+oP+o9N09ZIcztGxL3IHH/ADuiKyRERUEREBERAUFocCDvB5FSiDGa2zVNsc6osOPLztPonfdP6enouS1XqnrwWODqeobufDKMEeh5rIlhOqNAPv1ykrW3uqp9vH2BbtRtwMbgCOPE5ypwd266mtVu2mzVsHmD8AdtHPoMlYa+7aUvFzkmv7XOxjyp4IpIwRww8DeT36dOdZqLw9vlkpn1dNNFcaaMF0ghjMcjW9dnfn2LDjWRDZPmBwd1GCD0I/uNyaz63SzQOkrpTCajbMY3j6ssFY8595IWM6o8Kp6WkkqdNXCoqJGAuNHVlp2x0Y4AYPrn1Cwm1325Wqo8y01MsLzvc1hy13q07itgad8U3iRkGooIw3gammB3fqZv+B9iEsrU9uuUcVTl73U0zThwkBLT1a7G8e4raXg7doba+qsVU4MFTL9JopCQWyZADmZG4kYyOu/HArq+Ivh62/l+o9IOinfMNqamY4YmP52H83UHj68df3J7LZGWUz6mjMIHmUta0hwdzODjG9DleohwXnLxtucVw1w+OCQPZRUzKd2N4D8uc4f1AexVc+ur3V0wgkvlyhia3B8ipHDudzv6lz6P0jUahrmCip55oy7MlTM3ETN/E/mPbO9LV62t4HUUlLo8yygjz5y5oPRFnFot8NqttPQ0/wC7hYGg43uPMn1O9EV3ERFQREQEREBERAREQQRkHIXnzxk0vT6evNPWW5hjpLgHkxAfVjkGMhvY5zjlg+z0IsN8WbEb5oyrbFHt1NJ+0wgDJJaN4Hq3IUqVqHwtoIL3fW0Va5xjdxwcEjZJwDyzjGVn2rfC6OOIV+j9qCqiH2lJJK57Kgdi4nB9dx7cVrLwxu7LTrC3zSvAhkf5bncgHAjPxXp/kiR560/qGvtFe6OicaCtY7YnoZ8iKZ3TB+67lg8eRHBbX0zq61akIp6uGOnuLfqup5wDk8w0nj6cfmmudB2/VUJmGKa5MbiOqaOP8rx+IfEclpu4xV9grxbtUU8sErN0FfF9c4HDf/qMH/sPgo09AusVmfIJH2mgdIODjTMJHtwu+yNkbAyNjWNHBrRgBa40hr4Rww0l9lZJGfqxXGJ23G7s48QfXf16rY0UjJWNfG5r2OGWuacgjqtD7REQEREBERAREQEREBERAUEZGMAqUQebvE/R8mlr959GzFsrHl9O4D907iYz6cR29Fs3ww1xHeaGG3XGUNrowGse4/vgBw/V81m15tNFerdLQXKATU8o3tPEHkQeRHIrQusNDXjR1S6tomvrLbxM7W5LBnd5jRw/UN3opfEeiF0bxaKG9UL6O5U0c8D/AMLhw7g8Qe4WqNGeK7oo46W8B1REAAJM/bM/5B3+96raFo1HZ7wwOt9wglcRkx7Wy9vq04I9yK1RqfwuuNlE1fpmpkqIAMvp3DMmz0xjDwOnFVmgNe1Vun+jOewwYLjTvfiN36Cfuu7cCt9VE8NNE6aeVkUbRlz3uAAHqvKesKmhrtW3WpszcUc9QXQgDAdnGSB0Lsn2ofr69RWS7Ul6t0NdQv2oZBnfxaeYPdSsI8FbdXUWnXy1e02CctMLXc8ZyfTeB7FKaNiIpRUQiKUEIpRBCKUQQilEEIpRBChzQ4EHgeIX0iDB9Q+Fumry980VO631LskyUhDWknmWfd+Cwyq8GbtC79ivlLUMByxtTAWlvxd7xhbrRBpAeE2pKkhlbcKHys8ppnY/8dwWUaa8JLRapWT3GX6dK3eGBnlx+0ZJPvx2WxlKYbr4jY2NjWRtDWNADWgYAHQIvtEH/9k=')"
    }
}
);
document.addEventListener("mouseout",function()
{
    changeBackground=document.getElementById("challenger-id")
    if((event.target.className=="palyer-hand rock" || event.target.className=="palyer-hand paper" || event.target.className=="palyer-hand scissors")&& testClick)
    {
        changeBackground.style = "background-image : url('https://media0.giphy.com/media/DTywu7YYjWCVW/200.webp?cid=3640f6095c032986303966324954fde5')"
    }
})
var challengerScor=0
var computerScor=0
document.addEventListener("click",function myfunction(event)
{
    
    var changeBackgroundChallenger=document.getElementById("challenger-id")
    var changeBackgroundCumputer=document.getElementById("computer-id")
    var changeBackgroundGameDisplay=document.getElementById("game-display-id")
    var changeBackgroundResult=document.getElementById("result")
    var labelChallengerScor=document.getElementById("scor-challenger")
    var labelComputerScor=document.getElementById("scor-cumputer")
    var testShow=!document.getElementById("the-game-id").classList.contains("toggle-class")
    var valueSelected=null
    var randomSelect=null
    
    if(testShow)
    {
        if(event.target.className=="palyer-hand rock" )
        {
            randomSelect=randomPlayer()
            valueSelected=0
            testClick=false
            changeBackgroundChallenger.style = "background-image : url('https://yt3.ggpht.com/a-/AN66SAytYyy8uIBWxo9NUBhAYFhRtlUVExK3CRYcug=s288-mo-c-c0xffffffff-rj-k-no')"
        }
        else if(event.target.className=="palyer-hand paper" )
        {
            randomSelect=randomPlayer()
            valueSelected=1
            changeBackgroundChallenger.style = "background-image : url('http://www.trendenterprises.com/images/productmedium/T1095MED.jpg')"
            testClick=false
        }
        else if(event.target.className=="palyer-hand scissors" )
        {
            randomSelect=randomPlayer()
            valueSelected=2
            testClick=false
            changeBackgroundChallenger.style = "background-image : url('https://cf5.s3.souqcdn.com/item/2016/08/17/11/39/17/40/item_XL_11391740_15946721.jpg')"
        }
        

        if(randomSelect==valueSelected && randomSelect!=null)
        {
            challengerScor++
            computerScor++
            changeBackgroundGameDisplay.style = "background-image : url('https://media.giphy.com/media/xUOwG8ZJjbbT9nrVXq/giphy.gif')"
        }
        else if((randomSelect==0 && valueSelected==1)||(randomSelect==1 && valueSelected==2)||(randomSelect== 2 && valueSelected== 0)&& randomSelect!=null)
        {
            challengerScor++
            changeBackgroundGameDisplay.style = "background-image : url('https://media.giphy.com/media/ddHhhUBn25cuQ/giphy.gif')"
        }
        else if( testShow && randomSelect!=null)
        {
            computerScor++
            changeBackgroundGameDisplay.style = "background-image : url('https://media.giphy.com/media/3o6Zt8nXtveG25Rpba/giphy.gif')"
        }
        labelChallengerScor.innerHTML=challengerScor
        labelComputerScor.innerHTML=computerScor
        if(challengerScor==computerScor && challengerScor>4)
        {
            changeBackgroundResult.style = "background-image : url('https://media.giphy.com/media/tsgNNs93oIbwk/giphy.gif')"
            changeBackgroundResult.classList.remove("toggle-class");
            document.getElementById("the-game-id").classList.add("toggle-class")
        }
        else if (challengerScor>4)
        {
            changeBackgroundResult.style = "background-image : url('https://media.giphy.com/media/l0HUnQR733uhm48UM/giphy.gif')"
            changeBackgroundResult.classList.remove("toggle-class");
            document.getElementById("the-game-id").classList.add("toggle-class")
        }
        else if (computerScor >4)
        {
            changeBackgroundResult.style = "background-image : url('https://media.giphy.com/media/l3vR3gvEdsdJl26oU/giphy.gif')"
            changeBackgroundResult.classList.remove("toggle-class");
            document.getElementById("the-game-id").classList.add("toggle-class")
        }}

}
);
function randomPlayer()
{
    var v=Math.floor(Math.random() * 3)
    var changeBackgroundCumputer=document.getElementById("computer-id")

    switch (v)
        {
            case 0:changeBackgroundCumputer.style= "background-image : url('https://yt3.ggpht.com/a-/AN66SAytYyy8uIBWxo9NUBhAYFhRtlUVExK3CRYcug=s288-mo-c-c0xffffffff-rj-k-no')"
            break;
            case 1:changeBackgroundCumputer.style = "background-image : url('http://www.trendenterprises.com/images/productmedium/T1095MED.jpg')"
            break;
            case 2:changeBackgroundCumputer.style = "background-image : url('https://cf5.s3.souqcdn.com/item/2016/08/17/11/39/17/40/item_XL_11391740_15946721.jpg')"
            break;
        }
    return v
}
function showgame()
{
    document.getElementById("rolls-id").classList.add("toggle-class")
    document.getElementById("the-game-id").classList.remove("toggle-class")
}
function playAgain()
{
    document.getElementById("the-game-id").classList.remove("toggle-class")
    document.getElementById("result").classList.add("toggle-class")
    challengerScor=0
    computerScor=0
}
