// routes/kujou.js
(() => {
  // 安全策：SCENESがなければ作る（基本はmain.jsで作られているはず）
  window.SCENES = window.SCENES || {};

  Object.assign(window.SCENES, {
    "シーン名": {
    name:"",
    bg:"school_gate_rain", music:"rain_walk", sprite:[
      {char:"mio", pose:"neutral", pos:"center"},
      {char:"kujyou", pose:"serious", pos:"right"}
    ],
    se:"chime",
    text:"放課後の校門は雨上がりの匂いで満ちていた。\n黒い手袋の男が、濡れたアスファルトの境目に立つ。\n男はまっすぐこちらを見て、微かに顎を引いた。",
    autoNext:"遷移先",   // ←これを追加
    autoDelay: 0              // ←ミリ秒。省略可（デフォルト0）
  };
  
  SCENES[""] = {
    name:"？",
    text:"「柊 澪さん。——少し、お時間をいただけますか」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"澪",
    text:"（誰だろう。なぜ私の名前を……？）",
    autoNext:"",
    autoDelay: 0
  };
  
  SCENES[""] = {
    name:"九条",
    text:"「怪しいものではありません。九条と申します。以後、お見知りおきを」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"そう言って、九条と名乗った男は名刺を差し出してきた。私は差し出された名刺を受け取る。\nそこにはかつての研究所の名前があった。",
    autoNext:"",
    autoDelay: 0
  };
  
  SCENES[""] = {
    name:"澪",
    text:" (また“症状”の話だ。きっと、逃げられない)",
    choices:[
      {label:"立ち止まり、話を聞く", next:"K1_listen", setAffection:{"九条":+1}},
      {label:"無言で通り過ぎる", next:"K1_ignore", setFlags:{defendedByKanade:true}},
      {label:"「少しだけ」と答える", next:"K1_cautious"}
    ]
  };

  SCENES["K1_listen"] = {
    name:"",
    bg:"school_gate_rain", music:"suspense", sprite:[
      {char:"mio", pose:"think", pos:"center"},
      {char:"kujyou", pose:"neutral", pos:"right"}
    ],
    text:"歩道の端。\n男は鞄から透明なクリアファイルを出し、端を丁寧に揃えた。\n表紙には『神ノ原 記憶消失事件』の文字。",
    autoNext:"",
    autoDelay: 0
  };
      
  SCENES[""] = {
    name:"九条",
    text:"「十年前の資料です。あなたの名は被験者M-0として記録されています」",
    autoNext:"",
    autoDelay: 0
  };
  
  SCENES[""] = {
    name:"",
    text:"胸の奥に冷たい指が入ってくるような感じがした。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「確認させてください。最近、夢や聴覚に異常は」",
　　choices:[{label:"図書館で続きを聞くことを提案する", next:"K2_prelude"}]
  };
  
  SCENES["K1_ignore"] = {
    name:"",
    bg:"school_gate_rain", music:"rain_walk", sprite:[
      {char:"mio", pose:"neutral", pos:"center"}
    ],
    text:"踵を返した瞬間、肩にそっと影が差す。「無理に応じなくていい」振り向くと、そこには篠宮 奏。彼女は私と九条の間に一歩入った。「彼女は疲れてます」九条は短く頷く。「では、別の機会に」(助かった——けど、これで終わる気はしない)",
    choices:[{label:"少し落ち着いてから向き合う決意をする", next:"K2_prelude"}]
  };
  
  SCENES["K1_cautious"] = {
    name:"",
    bg:"school_gate_rain", music:"suspense", sprite:[
      {char:"mio", pose:"neutral", pos:"center"},
      {char:"kujyou", pose:"serious", pos:"right"}
    ],
    text:"二人分の距離を保ったまま、校門脇の屋根の下へ移動する。雨粒が看板から落ちる音が規則正しい。「仮説は一つ。あなたの“欠落”は誘発型の可能性がある」(誘発……私のせいで誰かに何かが起こる？)九条は言葉を選ぶように続けた。「安全のため、記録を取りたい」",
    choices:[{label:"人通りの少ない図書館へ移動する", next:"K2_prelude"}]
  };
  
  SCENES["K2_prelude"] = {
    name:"",
    bg:"library", music:"calm_day", sprite:[
      {char:"mio", pose:"think", pos:"left"},
      {char:"kujyou", pose:"neutral", pos:"right"}
    ],
    text:"放課後の図書館は空調の音だけが低く響いていた。窓際の机に向かい合って座る。九条は手袋を外さない。「質問します。昨夜の夢、覚えていますか」",
    choices:[
      {label:"「声がした。『誰かの代わりに生きろ』って」正直に話す", next:"K2_honest", setAffection:{"九条":+1}},
      {label:"(言いたくない)話をぼかす", next:"K2_avoid", setFlags:{avoidant:true}},
      {label:"「九条さんは、私を信じますか」と聞き返す", next:"K2_asktrust", setFlags:{askedTrust:true}}
    ]
  };
  
  SCENES["K2_honest"] = {
    name:"",
    bg:"library", music:"calm_day", sprite:[
      {char:"mio", pose:"speak", pos:"left"},
      {char:"kujyou", pose:"serious", pos:"right"}
    ],
    text:"「——『誰かの代わりに生きろ』」言葉にした瞬間、胸の奥で砂が落ちる音がした。九条は短く息を整える。「誘導ではありません。あなたの記述です」ノートに走るペン先は一定のリズム。(観測、じゃない。これは救命の手順みたいだ)",
    choices:[{label:"さらに詳しく——夢の風景や温度を語る", next:"K2_detail"}]
  };
  SCENES["K2_detail"] = {
    name:"",
    bg:"library", music:"truth", sprite:[
      {char:"mio", pose:"think", pos:"left"},
      {char:"kujyou", pose:"neutral", pos:"right"}
    ],
    text:"「水の匂いがして、床は冷たいコンクリート。誰かが窓の外で笑ってるのに、顔が思い出せない」九条は目を伏せ、静かに頷いた。「確認できました。あなたは“つぎ目”に触れている」(つぎ目？)「世界の記録が継ぎ合わされた箇所、という意味です」",
    choices:[{label:"意味を飲み込み、続きを促す", next:"K3"}]
  };
  
  SCENES["K2_avoid"] = {
    name:"",
    bg:"library", music:"melancholy", sprite:[
      {char:"mio", pose:"neutral", pos:"left"},
      {char:"kujyou", pose:"soft", pos:"right"}
    ],
    text:"「……断片的で」曖昧な返事をすると、九条はそれ以上追及しなかった。「分かりました。強要はしません」彼はノートを閉じ、窓の外に視線を逸らす。その横顔は、思ったより年相応だった。(優しいというより、距離の取り方が上手い人だ)",
    choices:[{label:"沈黙のまま席を立つ", next:"K3"}]
  };
  
  SCENES["K2_asktrust"] = {
    name:"",
    bg:"library", music:"calm_day", sprite:[
      {char:"mio", pose:"speak", pos:"left"},
      {char:"kujyou", pose:"serious", pos:"right"}
    ],
    text:"「九条さんは、私を信じますか」問いかけに、彼は一拍置いてから「信じる/信じないは任務に含まれない」と答えた。「ただ、記録には責任がある」(それは、私を守るって意味？)彼は答えず、窓の外の雲を見た。",
    choices:[{label:"言葉の意味を考えながら席を立つ", next:"K3", setAffection:{"九条":+1}}]
  };
  
  SCENES["K3"] = {
    name:"",
    bg:"street_rain", music:"rain_walk", sprite:[
      {char:"mio", pose:"shock", pos:"center"},
      {char:"kujyou", pose:"serious", pos:"right"}
    ],
    se:"whoosh",
    text:"帰り道、空は再び降り出した。曲がり角の向こうから黒いバンが近づく。スライドドアが開き、無機質な光が路面を舐めた。九条が前に出る。「乗らないで。——危険です」(選ばなきゃ)",
    choices:[
      {label:"言われるままに車へ乗る", next:"K3_car"},
      {label:"九条の手を掴んで走る", next:"K3_run", setAffection:{"九条":+1}},
      {label:"「信じていいの？」と立ち止まる", next:"K3_trust", setFlags:{trustTalk:true}}
    ]
  };
  
  SCENES["K3_car"] = {
    name:"",
    bg:"car_dark", music:"suspense", sprite:[
      {char:"mio", pose:"think", pos:"left"},
      {char:"kujyou", pose:"neutral", pos:"right"}
    ],
    text:"車内の空気は冷たく乾いていた。九条は私の隣に座り、手袋越しにシートベルトを確認する。「一時的な保護です」(守られてるのか、監視されてるのか)フロントガラスを叩く雨が、会話の隙間を埋めた。",
    choices:[{label:"保護先へ向かう", next:"K4"}]
  };
  SCENES["K3_run"] = {
    name:"",
    bg:"alley_rain", music:"run", sprite:[
      {char:"mio", pose:"shock", pos:"center"},
      {char:"kujyou", pose:"serious", pos:"right"}
    ],
    se:"run",
    text:"私は九条の手を掴み、濡れた商店街を駆けた。彼は規則正しく息を吐き、私の歩幅に合わせて速度を調整する。「この選択は、報告書に書かれません」(つまり、彼は今、規則を破っている)",
    choices:[{label:"路地を抜け、人気のない施設へ", next:"K4"}]
  };
  SCENES["K3_trust"] = {
    name:"",
    bg:"street_rain", music:"rain_walk", sprite:[
      {char:"mio", pose:"think", pos:"center"},
      {char:"kujyou", pose:"soft", pos:"right"}
    ],
    text:"「信じていいの？」問いは雨に紛れず届いた。九条は短く頷く。「私を信じる必要はない。状況判断だけでいい」(それ、ずるい)でも、その言い方は、私に選ぶ自由を返した。",
    choices:[{label:"九条に任せる", next:"K4", setAffection:{"九条":+1}}]
  };
  
  SCENES["K4"] = {
    name:"",
    bg:"public_hall", music:"tender", sprite:[
      {char:"mio", pose:"neutral", pos:"left"},
      {char:"kujyou", pose:"neutral", pos:"right"}
    ],
    text:"辿り着いたのは閉鎖中の公民館。非常灯だけが薄く床を照らす。九条は備品室から毛布を出し、机の端に並べた。「触れ方について、先に伝えておきます」彼は手袋を少し持ち上げる。「私が素手であなたに触れると、あなたの記憶へ侵入する可能性がある」",
    choices:[
      {label:"「それでもいい」手を差し出す", next:"K4_touch"},
      {label:"「今は距離を置こう」告げる", next:"K4_distance"},
      {label:"「安全なテスト方法は？」と相談する", next:"K4_test"}
    ]
  };
  
  SCENES["K4_touch"] = {
    name:"",
    bg:"public_hall_dim", music:"tender", sprite:[
      {char:"mio", pose:"think", pos:"left"},
      {char:"kujyou", pose:"serious", pos:"right"}
    ],
    se:"breath",
    text:"毛布の上で向き合う。私が手を差し出すと、九条は長い沈黙ののち、手袋を外した。白い指先が震えている。「——儀式です。過去を赦すための」(赦すのは、私？それとも彼自身？)",
    choices:[{label:"指先を重ねる", next:"K5a_prelude"}]
  };
  SCENES["K4_distance"] = {
    name:"",
    bg:"public_hall", music:"truth", sprite:[
      {char:"mio", pose:"neutral", pos:"left"},
      {char:"kujyou", pose:"serious", pos:"right"}
    ],
    text:"「今は距離を置こう」そう告げると、九条はわずかに目尻を緩めた。「分別ある判断です」彼は封筒を差し出す。「局の不正に関する記録。もしあなたが望むなら——終わらせられる」",
    choices:[{label:"封筒を受け取り、決意を固める", next:"K5b_prelude"}]
  };
  SCENES["K4_test"] = {
    name:"",
    bg:"public_hall", music:"suspense", sprite:[
      {char:"mio", pose:"think", pos:"left"},
      {char:"kujyou", pose:"serious", pos:"right"}
    ],
    text:"「安全なテスト方法は？」九条はハンカチを取り出し、手のひらに二重に重ねた。「布越しに、三秒だけ。無理ならすぐ離れてください」(こわい。でも知りたい)",
    choices:[
      {label:"テストを実行する", next:"K5c_trigger"},
      {label:"やはりやめる", next:"K4_distance"}
    ]
  };
  
  SCENES["K5a_prelude"] = {
    name:"",
    bg:"public_hall_dim", music:"warmth", sprite:[
      {char:"mio", pose:"smile", pos:"left"},
      {char:"kujyou", pose:"soft", pos:"right"}
    ],
    text:"素肌が触れ合った瞬間、微かな熱が往復する。遠い笑い声、濡れた廊下、誰かの靴音——断片が波のように押し寄せた。九条の睫毛が震える。「……あなたは、よく頑張りました」(涙が出そう)彼は私の手を包む力を、そっと強くした。",
    choices:[
      {label:"目を閉じて、その温度を受け入れる", next:"K6a", setFlags:{ED_Kujou_Love:true}},
      {label:"恥ずかしくて手を離す", next:"K5a_hesitate"}
    ]
  };
  SCENES["K5a_hesitate"] = {
    name:"",
    bg:"public_hall", music:"tender", sprite:[
      {char:"mio", pose:"think", pos:"left"},
      {char:"kujyou", pose:"soft", pos:"right"}
    ],
    text:"指が離れた途端、音が遠のく。「すみません、急ぎすぎましたね」九条は手袋を戻さず、距離だけを戻した。「時間をかけてもいい」(それでも、もう分かってしまった。私はこの人のそばにいたい)",
    choices:[{label:"意を決して、もう一度触れる", next:"K6a", setFlags:{ED_Kujou_Love:true}}]
  };
  
  SCENES["K5b_prelude"] = {
    name:"",
    bg:"public_hall", music:"truth", sprite:[
      {char:"mio", pose:"think", pos:"left"},
      {char:"kujyou", pose:"serious", pos:"right"}
    ],
    text:"封筒の中には、改竄ログと署名の写しが綴じられていた。ページの端に『M-0』のインデックス。(私の名前は、この書類の中で記号だった)九条は言う。「内部告発の窓口に出すなら、私が前に立つ」",
    choices:[
      {label:"正面から闘う（実名で告発）", next:"K6b", setFlags:{ED_Kujou_Truth:true}},
      {label:"匿名で投函する", next:"K5b_anon"}
    ]
  };
  SCENES["K5b_anon"] = {
    name:"",
    bg:"post_night", music:"melancholy", sprite:[
      {char:"mio", pose:"think", pos:"center"}
    ],
    text:"夜のポストに封筒が吸い込まれる音は、思ったよりも軽い。「——ありがとう」九条の声は、ほとんど聞こえないほど小さかった。(終わりの始まり)　そして私たちは、別々の道順で同じ駅へ歩いた。",
    choices:[{label:"それでも前を向くと決める", next:"K6b", setFlags:{ED_Kujou_Truth:true}}]
  };
  
  SCENES["K5c_trigger"] = {
    name:"",
    bg:"public_hall_dim", music:"suspense", sprite:[
      {char:"mio", pose:"shock", pos:"left"},
      {char:"kujyou", pose:"serious", pos:"right"}
    ],
    se:"pulse",
    text:"布越しの三秒。視界が反転し、過去と現在が互いの輪郭を侵食する。誰かの泣き声、手術灯の眩しさ、笑っているのに泣いている自分——九条の指先が強張った。「戻ってこい。……柊」",
    choices:[
      {label:"「九条、離れて！」と叫ぶ", next:"K5c_pullback"},
      {label:"(このまま任せるしかない)と目を閉じる", next:"K6c", setFlags:{ED_Kujou_Collapse:true}}
    ]
  };
  SCENES["K5c_pullback"] = {
    name:"",
    bg:"public_hall", music:"tender", sprite:[
      {char:"mio", pose:"think", pos:"left"},
      {char:"kujyou", pose:"soft", pos:"right"}
    ],
    text:"互いに跳ね退く。布が床に落ち、重たい呼吸が部屋に残る。「——無理は、しないでください」九条は額に汗をにじませ、しかし微笑んだ。(危なかった。でも、彼は最後まで私を呼んでいた)",
    choices:[
      {label:"距離を選び、告発の準備に移る", next:"K5b_prelude"},
      {label:"勇気を出して、もう一度だけ触れる", next:"K5a_prelude"}
    ]
  };
  
  /* ED */
  SCENES["K6a"] = {
    name:"",
    bg:"public_hall_dim", music:"warmth", sprite:[
      {char:"mio", pose:"smile", pos:"left"},
      {char:"kujyou", pose:"soft", pos:"right"}
    ],
    text:"【恋愛ED：赦し】非常灯の薄い明かりの下、二人は練習するように何度も指を確かめた。触れるたび、過去のざらつきが細かく砕けていく。「これからも、あなたの現在を記録させてください」「……はい」(世界は急に優しくならない。でも、呼吸は確かに軽い)",
    choices:[{label:"記録してタイトルへ", next:"ED_Collector", setFlags:{ED_Kujou_Love:true}}]
  };
  SCENES["K6b"] = {
    name:"",
    bg:"press", music:"truth", sprite:[
      {char:"mio", pose:"neutral", pos:"left"},
      {char:"kujyou", pose:"serious", pos:"right"}
    ],
    text:"【真実ED：終止報告】提出印の押された紙は、やけに薄く見えた。記者会見で九条は「個人より倫理を守る」と短く語る。私は客席から拍手をした。(私たちは同じ方向を見て歩く。でも並び方は選べる)帰り道、彼は遠慮がちに微笑む。「いつか、仕事抜きでコーヒーでも」「考えておきます」",
    choices:[{label:"記録してタイトルへ", next:"ED_Collector", setFlags:{ED_Kujou_Truth:true}}]
  };
  SCENES["K6c"] = {
    name:"",
    bg:"public_hall_dark", music:"melancholy", sprite:[
      {char:"mio", pose:"think", pos:"center"}
    ],
    text:"【崩壊ED：共鳴】境界は破れ、九条は私の“つぎ目”に沈んだ。朝、テーブルには黒い手袋だけが残る。触れると、微かな熱がまだ宿っている。(赦しは届いたのかもしれない。ただ、もう確かめる方法がない)窓の外で、昨日と同じ雨が降り始めた。",
    choices:[{label:"記録してタイトルへ", next:"ED_Collector", setFlags:{ED_Kujou_Collapse:true}}]
  };
