async function postScore(userName, userScore){
    let url = 'http://localhost:3000/leaderboard';

    const playerData = {
        name: userName,
        score: userScore,
    }

    const settings = {
        method: 'POST',
        body: JSON.stringify(playerData),
        headers: {
            'Content-Type': 'application/json',
        }
    }

    try {
        let res = await fetch(url, settings)
        const data = await res.json()
        return data;
    } catch (err) {
        console.log(err)
    }
}