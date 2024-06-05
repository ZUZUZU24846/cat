from flask import Flask, render_template, jsonify
import random
import time
from threading import Thread

app = Flask(__name__)

# テキストのリスト
cat_behaviors = [
    "ベットを占領して丸くなっています。",
    "窓の外をじっと見ています。",
    "おもちゃで遊んでいます。",
    "昼寝をしています。",
    "餌を食べています。",
    "毛づくろいをしています。",
    "家の中を走り回っています。",
]

current_behavior = random.choice(cat_behaviors)
viewers_count = 0

def update_behavior():
    global current_behavior
    while True:
        time.sleep(random.randint(20, 30) * 60)  # 20〜30分ごとに更新
        current_behavior = random.choice(cat_behaviors)

# スレッドで行動更新を開始
thread = Thread(target=update_behavior)
thread.start()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/behavior')
def behavior():
    return jsonify(behavior=current_behavior)

@app.route('/viewers')
def viewers():
    global viewers_count
    return jsonify(viewers=viewers_count)

@app.before_request
def before_request():
    global viewers_count
    viewers_count += 1

@app.teardown_request
def teardown_request(exception=None):
    global viewers_count
    viewers_count -= 1

if __name__ == '__main__':
    app.run(debug=True)
