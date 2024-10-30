function loadScheduleSettings() {
    var savedSettings = localStorage.getItem('scheduleSettings');
    if (savedSettings) {
      var messages = JSON.parse(savedSettings);
      messages.forEach(item => {
        if (item.message) {
          var scheduleList = document.getElementById('scheduleItems');
          var itemElement = document.createElement('div');
          itemElement.innerText = item.event + ' - ' + item.time + ': ' + item.message;
          scheduleList.appendChild(itemElement);
        }
      });
    }
  }

  function saveUserSettings() {
    var userName = document.getElementById('userName').value;
    var userEmail = document.getElementById('userEmail').value;
    var nameColor = document.getElementById('nameColor').value;
    var nameFont = document.getElementById('nameFont').value;

    // ユーザー設定をlocalStorageに保存
    localStorage.setItem('userName', userName);
    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('nameColor', nameColor);
    localStorage.setItem('nameFont', nameFont);

    // 画面に反映
    document.getElementById('userNameDisplay').innerText = userName;
    document.getElementById('userNameDisplay').style.color = nameColor;
    document.getElementById('userNameDisplay').style.fontFamily = nameFont;
  }

  function loadUserSettings() {
    var userName = localStorage.getItem('userName') || 'Guest';
    var userEmail = localStorage.getItem('userEmail') || '';
    var nameColor = localStorage.getItem('nameColor') || 'black';
    var nameFont = localStorage.getItem('nameFont') || 'Arial, sans-serif';

    document.getElementById('userName').value = userName;
    document.getElementById('userEmail').value = userEmail;
    document.getElementById('nameColor').value = nameColor;
    document.getElementById('nameFont').value = nameFont;
    document.getElementById('userNameDisplay').innerText = userName;
    document.getElementById('userNameDisplay').style.color = nameColor;
    document.getElementById('userNameDisplay').style.fontFamily = nameFont;
  }

  // ページロード時に設定を読み込む
  window.onload = function() {
    loadScheduleSettings();
    loadUserSettings();
    setInterval(updateTime, 1000); // 1秒ごとに時計を更新
  };
  
  // 閉じるボタンのクリックイベント
  document.getElementById('closeSettingsBtn').addEventListener('click', function() {
    document.getElementById('userSettings').style.display = 'none'; // 設定画面を非表示
  });
  
  function openSettings(type) {
    if (type === 'schedule') {
        var scheduleSettings = document.getElementById('scheduleSettings');
        scheduleSettings.classList.toggle('active'); // 開閉トグル
    } else if (type === 'user') {
        var userSettings = document.getElementById('userSettings');
        userSettings.style.display = 'block'; // 開く
    }
}

document.getElementById('closeSettingsBtn').addEventListener('click', function() {
    var userSettings = document.getElementById('userSettings');
    userSettings.style.display = 'none'; // 閉じる
});

document.getElementById('openSettingsBtn').addEventListener('click', function() {
    var userSettings = document.getElementById('userSettings');
    userSettings.style.display = 'block'; // 再度開けるようにする
});
