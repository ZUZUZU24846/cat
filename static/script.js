document.addEventListener('DOMContentLoaded', function() {
    function updateBehavior() {
        fetch('/behavior')
            .then(response => response.json())
            .then(data => {
                document.getElementById('behavior').textContent = data.behavior;
            });
    }

    function updateViewers() {
        fetch('/viewers')
            .then(response => response.json())
            .then(data => {
                document.getElementById('viewers').textContent = `現在${data.viewers}人が観察しています。`;
            });
    }

    updateBehavior();
    updateViewers();
    setInterval(updateBehavior, 1000 * 60 * 20); // 20分ごとに更新
    setInterval(updateViewers, 5000); // 5秒ごとに更新
});
