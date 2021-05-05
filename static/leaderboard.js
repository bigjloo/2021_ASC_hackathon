window.addEventListener("DOMContentLoaded", function(){
    async function getLeaderboard() {
        let url = 'http://localhost:3000/leaderboard';
        try {
            let res = await fetch(url)
            return await res.json()
        } catch (err) {
            console.log(err)
        }
    }
    async function renderLeaderboard() {
        let leaderBoard = await getLeaderboard()
        let leaderBoardHTML = '<div><u><strong>LEADERBOARD</strong></u></div>'
        let count = 1
        leaderBoard.forEach(player => {
            leaderBoardHTML += `<div>${count}. ${player.name}, SCORE: ${player.score}</div>` 
            count ++
        });

        document.getElementById('leaderboard').innerHTML = leaderBoardHTML
    }
    
    renderLeaderboard()
})

