document.addEventListener('DOMContentLoaded', function() {
    const catBehaviors = [
        "ベットを占領して丸くなっています。",
        "窓の外をじっと見ています。",
        "おもちゃで遊んでいます。",
        "昼寝をしています。",
        "ごはんを食べています。",
        "毛づくろいをしています。",
        "家の中を走り回っています。",
        "日向ぼっこをしています。",
        "ソファーの上で伸びをしています。",
        "毛布にくるまっています。",
        "お腹を見せて寝転がっています。",
        "キャットタワーでくつろいでいます。",
        "夢中で爪とぎをしています。",
        "テレビを見ています。",
        "ダンボール箱に入っています。",
        "紙袋の中で遊んでいます。",
        "ぬいぐるみと一緒に寝ています。",
        "猫草をかじっています。",
        "高い場所から見下ろしています。",
        "キッチンカウンターでおやつを待っています。",
        "リビングの絨毯の上でごろんとしています。",
        "しっぽを立てて歩いています。",
        "おもちゃのネズミを追いかけています。",
        "水を飲んでいます。",
        "ベッドの下に隠れています。",
        "鏡に映った自分を見ています。",
        "顔を洗っています。",
        "ソファーの背もたれの上に座っています。",
        "本棚の間に挟まっています。",
        "リモコンの上に座っています。",
        "テーブルの下でじっとしています。",
        "クッションの上でまどろんでいます。",
        "ソファーの角に顔を押し付けています。",
        "近所の猫と会議をしています。",
        "大きなあくびをしています。",
        "ゆっくりと瞬きをしています。",
        "揺れる洗濯物にじゃれついています。",
        "テーブルの上で香箱座りしています。",
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
