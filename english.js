// 英単語リスト（中学1年生レベル）
const wordList = [
    // 基本名詞
    { english: "apple", japanese: "りんご" },
    { english: "book", japanese: "本" },
    { english: "school", japanese: "学校" },
    { english: "teacher", japanese: "先生" },
    { english: "student", japanese: "生徒" },
    { english: "friend", japanese: "友達" },
    { english: "family", japanese: "家族" },
    { english: "house", japanese: "家" },
    { english: "cat", japanese: "猫" },
    { english: "dog", japanese: "犬" },
    { english: "car", japanese: "車" },
    { english: "bus", japanese: "バス" },
    { english: "train", japanese: "電車" },
    { english: "water", japanese: "水" },
    { english: "food", japanese: "食べ物" },
    { english: "time", japanese: "時間" },
    { english: "day", japanese: "日" },
    { english: "night", japanese: "夜" },
    { english: "morning", japanese: "朝" },
    { english: "evening", japanese: "夕方" },
    
    // 形容詞
    { english: "happy", japanese: "幸せ" },
    { english: "sad", japanese: "悲しい" },
    { english: "big", japanese: "大きい" },
    { english: "small", japanese: "小さい" },
    { english: "hot", japanese: "暑い" },
    { english: "cold", japanese: "寒い" },
    { english: "fast", japanese: "速い" },
    { english: "slow", japanese: "遅い" },
    { english: "easy", japanese: "簡単" },
    { english: "difficult", japanese: "難しい" },
    { english: "good", japanese: "良い" },
    { english: "bad", japanese: "悪い" },
    { english: "right", japanese: "正しい" },
    { english: "wrong", japanese: "間違った" },
    
    // 動詞（原形・過去形）
    { english: "go", past: "went", japanese: "行く" },
    { english: "come", past: "came", japanese: "来る" },
    { english: "see", past: "saw", japanese: "見る" },
    { english: "hear", past: "heard", japanese: "聞く" },
    { english: "speak", past: "spoke", japanese: "話す" },
    { english: "read", past: "read", japanese: "読む" },
    { english: "write", past: "wrote", japanese: "書く" },
    { english: "play", past: "played", japanese: "遊ぶ" },
    { english: "take", past: "took", japanese: "取る" },
    { english: "make", past: "made", japanese: "作る" },
    { english: "break", past: "broke", japanese: "壊す" },
    { english: "build", past: "built", japanese: "建てる" },
    { english: "keep", past: "kept", japanese: "保つ" },
    { english: "tell", past: "told", japanese: "話す" },
    { english: "show", past: "showed", japanese: "見せる" },
    { english: "help", past: "helped", japanese: "助ける" },
    { english: "start", past: "started", japanese: "始める" },
    { english: "finish", past: "finished", japanese: "終わる" },
    { english: "wait", past: "waited", japanese: "待つ" },
    { english: "sit", past: "sat", japanese: "座る" },
    { english: "stand", past: "stood", japanese: "立つ" },
    { english: "run", past: "ran", japanese: "走る" },
    { english: "jump", past: "jumped", japanese: "跳ぶ" },
    { english: "swim", past: "swam", japanese: "泳ぐ" },
    { english: "dance", past: "danced", japanese: "踊る" },
    { english: "sing", past: "sang", japanese: "歌う" },
  
    // 代名詞
    { english: "I", japanese: "私" },
    { english: "you", japanese: "あなた" },
    { english: "he", japanese: "彼" },
    { english: "she", japanese: "彼女" },
    { english: "it", japanese: "それ" },
    { english: "we", japanese: "私たち" },
    { english: "they", japanese: "彼ら" },
    { english: "me", japanese: "私を" },
    { english: "him", japanese: "彼を" },
    { english: "her", japanese: "彼女を" },
    { english: "us", japanese: "私たちを" },
    { english: "them", japanese: "彼らを" },
    
    // その他の動詞
    { english: "think", past: "thought", japanese: "考える" },
    { english: "believe", past: "believed", japanese: "信じる" },
    { english: "remember", past: "remembered", japanese: "覚えている" },
    { english: "forget", past: "forgot", japanese: "忘れる" },
    { english: "understand", past: "understood", japanese: "理解する" },
    { english: "ask", past: "asked", japanese: "尋ねる" },
    { english: "answer", past: "answered", japanese: "答える" },
    { english: "talk", past: "talked", japanese: "話す" },
    { english: "listen", past: "listened", japanese: "聞く" },
    { english: "watch", past: "watched", japanese: "見る" },
    { english: "visit", past: "visited", japanese: "訪れる" },
    { english: "travel", past: "traveled", japanese: "旅行する" },
    { english: "eat", past: "ate", japanese: "食べる" },
    { english: "drink", past: "drank", japanese: "飲む" },
    { english: "cook", past: "cooked", japanese: "料理する" },
    { english: "clean", past: "cleaned", japanese: "掃除する" },
    { english: "exercise", past: "exercised", japanese: "運動する" },
    { english: "study", past: "studied", japanese: "勉強する" },
    { english: "practice", past: "practiced", japanese: "練習する" }
  ];

  
const score = {
    correct: 0,
    incorrect: 0,
    history: []
};

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function startQuiz() {
    document.getElementById("startQuiz").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    nextQuestion();
}

function nextQuestion() {
    if (wordList.length === 0) {
        alert("単語リストが空です。単語を追加してください。");
        return;
    }

    const wordObj = getRandomElement(wordList);
    const questionElement = document.getElementById("question");
    questionElement.textContent = `${wordObj.english} の意味は？`;
    questionElement.classList.remove("grow"); // 前のアニメーションをリセット
    void questionElement.offsetWidth; // Reflowを発生させる
    questionElement.classList.add("grow"); // 新しいアニメーションを適用

    document.getElementById("answer").value = "";
    document.getElementById("result").textContent = "";

    let answered = false; // 回答フラグ

    // 「答える」ボタンのクリックイベントリスナー
    document.getElementById("submitAnswer").onclick = function () {
        if (!answered) { // まだ回答していない場合のみ処理
            answered = true; // 回答したフラグを立てる
            const userAnswer = document.getElementById("answer").value;
            checkAnswer(userAnswer, wordObj);
        }
    };

    // 7秒後に不正解として次の質問に進む
    setTimeout(() => {
        if (!answered) { // 回答がなかった場合
            checkAnswer("", wordObj); // 空の回答で不正解判定
        }
    }, 7000); // 7秒後
}




function checkAnswer(userAnswer, wordObj) {
    if (userAnswer === wordObj.japanese) {
        score.correct++;
        document.getElementById("result").textContent = "正解！";
    } else {
        score.incorrect++;
        score.history.push({ question: wordObj.english, answer: userAnswer, correct: wordObj.japanese });
        document.getElementById("result").textContent = `不正解。正しい意味は "${wordObj.japanese}" です。`;
    }
    
    if (wordList.length > 0) {
        setTimeout(nextQuestion, 1000); // 1秒後に次の質問
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("scoreContainer").style.display = "block";
    document.getElementById("correctAnswers").textContent = `正解数: ${score.correct}`;
    document.getElementById("incorrectAnswers").textContent = `不正解数: ${score.incorrect}`;
    document.getElementById("history").textContent = score.history.map(item => 
        `問題: ${item.question}, あなたの答え: ${item.answer}, 正解: ${item.correct}`).join("\n");
}

function restartQuiz() {
    score.correct = 0;
    score.incorrect = 0;
    score.history = [];
    
    document.getElementById("scoreContainer").style.display = "none";
    document.getElementById("startQuiz").style.display = "block";
}
