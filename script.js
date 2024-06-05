document.addEventListener('DOMContentLoaded', function() {
    const catBehaviors = [
        "ベットを占領して丸くなっています。",
        "窓の外をじっと見ています。",
        "おもちゃで遊んでいます。",
        "昼寝をしています。",
        "餌を食べています。",
        "毛づくろいをしています。",
        "家の中を走り回っています。",
    ];

    function updateClockAndBehavior() {
        const now = new Date();
        const hours = now.getUTCHours().toString().padStart(2, '0');
        const minutes = now.getUTCMinutes().toString().padStart(2, '0');
        const seconds = now.getUTCSeconds().toString().padStart(2, '0');
        const timeString = `UTC ${hours}:${minutes}:${seconds}`;
        document.getElementById('clock').textContent = timeString;

        // 20分ごとの更新
        const totalMinutes = Math.floor((now.getUTCHours() * 60 + now.getUTCMinutes()) / 20);
        const behaviorIndex = totalMinutes % catBehaviors.length;
        document.getElementById('behavior').textContent = catBehaviors[behaviorIndex];
    }

    updateClockAndBehavior();
    setInterval(updateClockAndBehavior, 1000); // 毎秒更新
});
