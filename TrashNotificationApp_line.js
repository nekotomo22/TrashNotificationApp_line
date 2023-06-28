function notyfyTakingOutTrash() {
    const url = 'https://api.line.me/v2/bot/message/push';
    const token = 'ここにトークンを入力'; //チャネルアクセストークン
  
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (日曜日) から 6 (土曜日) の範囲で取得
  
    let message;
  
   if (dayOfWeek === 0) {
      message = '■今日はお休みです！\n■明日は【資源ゴミの日！】ペットボトルや空き缶はあるかい？' //日曜日
    }else if(dayOfWeek === 1) {
      message = '■今日は【資源ゴミの日】\n■明日は【普通ゴミの日】だよ！'; // 月曜日
    } else if (dayOfWeek === 2) {
      message = '■今日は【普通ゴミの日】\n■明日はゴミの収集はないよ！'; // 火曜日
    } else if (dayOfWeek === 3) {
      message = '■今日はお休みです！\n■明日は【プラスチックゴミの日】だよ！'
    } else if (dayOfWeek === 4) {
      message = '■今日は【プラスチックゴミの日】\n■明日は【普通ゴミと古紙の日】だよ！'; // 木曜日
    } else if (dayOfWeek === 5) {
      message = '■今日は【古紙類と普通ゴミの日】'; // 金曜日
    } else {
      // 土曜日、日曜日は何も送らない
      
      return;
    }
  
    const payload = {
      to: 'ここにユーザーIDを入力',//ユーザーID
  
      messages: [
        { type: 'text', text: message + '\n\n■粗大ごみの収集はコチラ\n https://www.city.osaka.lg.jp/kankyo/page/0000009337.html#7' }
      ]
    };
  
    const params = {
      method: 'post',
      contentType: 'application/json',
      headers: {
        Authorization: 'Bearer ' + token
      },
      payload: JSON.stringify(payload)
    };
  
    UrlFetchApp.fetch(url, params);
  }