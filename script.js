document.addEventListener('DOMContentLoaded', function() {
    const catBehaviors = [
        "ベットを占領して丸くなっています。",
        "窓の外をじっと見ています。",
        "おもちゃで遊んでいます。",
        "昼寝をしています。",
        "カリカリを食べています。",
        "毛づくろいをしています。",
        "家の中を走り回っています。",
    ];

    function updateBehavior() {
        const randomBehavior = catBehaviors[Math.floor(Math.random() * catBehaviors.length)];
        document.getElementById('behavior').textContent = randomBehavior;
    }

    updateBehavior();
    setInterval(updateBehavior, 1000 * 60 * 20); // 20分ごとに更新
});
