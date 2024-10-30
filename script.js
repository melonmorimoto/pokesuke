const kanjiList = [
    { kanji: "憂鬱", reading: "ゆううつ" },
    { kanji: "挨拶", reading: "あいさつ" },
    { kanji: "謙遜", reading: "けんそん" },
    { kanji: "鬱陶しい", reading: "うっとうしい" },
    { kanji: "疎外", reading: "そがい" },
    { kanji: "侮辱", reading: "ぶじょく" },
    { kanji: "錯覚", reading: "さっかく" },
    { kanji: "緻密", reading: "ちみつ" },
    { kanji: "愚痴", reading: "ぐち" },
    { kanji: "憧憬", reading: "しょうけい" },
    { kanji: "懐古", reading: "かいこ" },
    { kanji: "不屈", reading: "ふくつ" },
    { kanji: "詭弁", reading: "きべん" },
    { kanji: "煩悩", reading: "ぼんのう" },
    { kanji: "驚愕", reading: "きょうがく" },
    { kanji: "緩慢", reading: "かんまん" },
    { kanji: "寛容", reading: "かんよう" },
    { kanji: "頑迷", reading: "がんめい" },
    { kanji: "斬新", reading: "ざんしん" },
    { kanji: "壮麗", reading: "そうれい" },
    { kanji: "幽玄", reading: "ゆうげん" },
    { kanji: "艶麗", reading: "えんれい" },
    { kanji: "清廉", reading: "せいれん" },
    { kanji: "厳粛", reading: "げんしゅく" },
    { kanji: "悠久", reading: "ゆうきゅう" },
    { kanji: "徹底", reading: "てってい" },
    { kanji: "冷徹", reading: "れいてつ" },
    { kanji: "誤解", reading: "ごかい" },
    { kanji: "強靭", reading: "きょうじん" },
    { kanji: "辛辣", reading: "しんらつ" },
    { kanji: "不祥事", reading: "ふしょうじ" },
    { kanji: "苛烈", reading: "かれつ" },
    { kanji: "機微", reading: "きび" },
    { kanji: "緊迫", reading: "きんぱく" },
    { kanji: "逆鱗", reading: "げきりん" },
    { kanji: "高邁", reading: "こうまい" },
    { kanji: "孤高", reading: "ここう" },
    { kanji: "複雑", reading: "ふくざつ" },
    { kanji: "威厳", reading: "いげん" },
    { kanji: "荘厳", reading: "そうごん" },
    { kanji: "典雅", reading: "てんが" },
    { kanji: "凛然", reading: "りんぜん" },
    { kanji: "潤滑", reading: "じゅんかつ" },
    { kanji: "崇高", reading: "すうこう" },
    { kanji: "愚弄", reading: "ぐろう" },
    { kanji: "虚偽", reading: "きょぎ" },
    { kanji: "華麗", reading: "かれい" },
    { kanji: "強壮", reading: "きょうそう" },
    { kanji: "克服", reading: "こくふく" },
    { kanji: "忍耐", reading: "にんたい" },
    { kanji: "慎重", reading: "しんちょう" },
    { kanji: "堅実", reading: "けんじつ" },
    { kanji: "潔癖", reading: "けっぺき" },
    { kanji: "妥当", reading: "だとう" },
    { kanji: "確固", reading: "かっこ" },
    { kanji: "権威", reading: "けんい" },
    { kanji: "勤勉", reading: "きんべん" },
    { kanji: "壮大", reading: "そうだい" },
    { kanji: "恐慌", reading: "きょうこう" },
    { kanji: "紛糾", reading: "ふんきゅう" },
    { kanji: "崩壊", reading: "ほうかい" },
    { kanji: "鎮圧", reading: "ちんあつ" },
    { kanji: "謹厳", reading: "きんげん" },
    { kanji: "叱責", reading: "しっせき" },
    { kanji: "修辞", reading: "しゅうじ" },
    { kanji: "阻害", reading: "そがい" },
    { kanji: "名誉", reading: "めいよ" },
    { kanji: "冷酷", reading: "れいこく" },
    { kanji: "懐柔", reading: "かいじゅう" },
    { kanji: "陰謀", reading: "いんぼう" },
    { kanji: "冷血", reading: "れいけつ" },
    { kanji: "重圧", reading: "じゅうあつ" },
    { kanji: "恐怖", reading: "きょうふ" },
    { kanji: "独裁", reading: "どくさい" },
    { kanji: "暗殺", reading: "あんさつ" },
    { kanji: "慈悲", reading: "じひ" },
    { kanji: "悲惨", reading: "ひさん" },
    { kanji: "怪我", reading: "けが" },
    { kanji: "解放", reading: "かいほう" },
    { kanji: "徴収", reading: "ちょうしゅう" },
    { kanji: "非道", reading: "ひどう" },
    { kanji: "究極", reading: "きゅうきょく" },
    { kanji: "憤怒", reading: "ふんぬ" },
    { kanji: "怒涛", reading: "どとう" },
    { kanji: "冥福", reading: "めいふく" },
    { kanji: "崇拝", reading: "すうはい" },
    { kanji: "孤独", reading: "こどく" },
    { kanji: "儚い", reading: "はかない" },
    { kanji: "感涙", reading: "かんるい" },
    { kanji: "致死", reading: "ちし" },
    { kanji: "破滅", reading: "はめつ" },
    { kanji: "軋轢", reading: "あつれき" },
    { kanji: "果敢", reading: "かかん" },
    { kanji: "鬼才", reading: "きさい" },
    { kanji: "献身", reading: "けんしん" },
    { kanji: "略奪", reading: "りゃくだつ" },
    { kanji: "粉砕", reading: "ふんさい" }
];
// スコア管理オブジェクト
const kanjiScore = {
    correct: 0,
    incorrect: 0,
    history: []
};

// ランダムな要素を取得
function getRandomKanji(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// 漢字クイズを開始
function startKanjiQuiz() {
    document.getElementById("startKanjiQuiz").style.display = "none";
    document.getElementById("kanjiQuizContainer").style.display = "block";
    nextKanjiQuestion();
}

// 次の問題を表示
function nextKanjiQuestion() {
    if (kanjiList.length === 0) {
        alert("漢字リストが空です。漢字を追加してください。");
        return;
    }

    const kanjiObj = getRandomKanji(kanjiList);
    document.getElementById("kanjiQuestion").textContent = `${kanjiObj.kanji} の読みは？`;
    document.getElementById("kanjiAnswer").value = "";
    document.getElementById("kanjiResult").textContent = "";

    document.getElementById("submitKanjiAnswer").onclick = function () {
        const userAnswer = document.getElementById("kanjiAnswer").value;
        checkKanjiAnswer(userAnswer, kanjiObj);
    };
}

// 答えをチェック
function checkKanjiAnswer(userAnswer, kanjiObj) {
    if (userAnswer === kanjiObj.reading) {
        kanjiScore.correct++;
        document.getElementById("kanjiResult").textContent = "正解！";
    } else {
        kanjiScore.incorrect++;
        kanjiScore.history.push({ question: kanjiObj.kanji, answer: userAnswer, correct: kanjiObj.reading });
        document.getElementById("kanjiResult").textContent = `不正解。正しい読みは "${kanjiObj.reading}" です。`;
    }

    setTimeout(nextKanjiQuestion, 500); // 1秒後に次の問題を表示
}

// クイズ終了後の処理
function endKanjiQuiz() {
    document.getElementById("kanjiQuizContainer").style.display = "none";
    document.getElementById("kanjiScoreContainer").style.display = "block";
    document.getElementById("kanjiScore").textContent = `得点: 正解 ${kanjiScore.correct} / 不正解 ${kanjiScore.incorrect}`;

    document.getElementById("restartKanjiQuiz").onclick = function () {
        restartKanjiQuiz();
    };
}

// クイズをリスタート
function restartKanjiQuiz() {
    kanjiScore.correct = 0;
    kanjiScore.incorrect = 0;
    kanjiScore.history = [];
    document.getElementById("kanjiScoreContainer").style.display = "none";
    document.getElementById("startKanjiQuiz").style.display = "block";
}

// イベントリスナーの設定
document.getElementById("startKanjiQuiz").onclick = startKanjiQuiz;
let usedKanji = [];

// 漢字リストからランダムに選択（重複しないように管理）
function getRandomKanji(array) {
    if (usedKanji.length === array.length) {
        alert("すべての問題が出題されました！");
        return null;
    }

    let kanjiObj;
    do {
        const randomIndex = Math.floor(Math.random() * array.length);
        kanjiObj = array[randomIndex];
    } while (usedKanji.includes(kanjiObj));

    usedKanji.push(kanjiObj);  // 使用済みリストに追加
    return kanjiObj;
}

// 次の問題を表示（重複なし）
function nextKanjiQuestion() {
    const kanjiObj = getRandomKanji(kanjiList);
    if (!kanjiObj) return;  // 全問出題済みの場合は終了
    document.getElementById("kanjiQuestion").textContent = `${kanjiObj.kanji} の読みは？`;
    document.getElementById("kanjiAnswer").value = "";
    document.getElementById("kanjiResult").textContent = "";

    document.getElementById("submitKanjiAnswer").onclick = function () {
        const userAnswer = document.getElementById("kanjiAnswer").value;
        checkKanjiAnswer(userAnswer, kanjiObj);
    };
}
