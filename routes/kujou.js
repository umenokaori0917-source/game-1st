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
    text:"踵を返した瞬間、肩にそっと影が差す。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"奏",
    text:"「無理に応じなくていい」",
    autoNext:"",
    autoDelay: 0
  };
    SCENES[""] = {
    name:"",
    text:"振り向くと、そこには篠宮 奏。彼女は私と九条の間に一歩入った。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"奏",
    text:"「彼女は疲れてます」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"九条は短く頷く。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「では、別の機会に」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"澪",
    text:"(助かった——けど、これで終わる気はしない)",
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
    text:"放課後の図書館は空調の音だけが低く響いていた。\n窓際の机に向かい合って座る。\n九条は手袋を外さない。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「質問します。昨夜の夢、覚えていますか」",
    choices:[
      {label:"「声がした。『誰かの代わりに生きろ』って」正直に話す", next:"K2_honest", setAffection:{"九条":+1}},
      {label:"(言いたくない)話をぼかす", next:"K2_avoid", setFlags:{avoidant:true}},
      {label:"「九条さんは、私を信じますか」と聞き返す", next:"K2_asktrust", setFlags:{askedTrust:true}}
    ]
  };
  
  SCENES["K2_honest"] = {
    name:"澪",
    bg:"library", music:"calm_day", sprite:[
      {char:"mio", pose:"speak", pos:"left"},
      {char:"kujyou", pose:"serious", pos:"right"}
    ],
    text:"「——『誰かの代わりに生きろ』」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"言葉にした瞬間、胸の奥で砂が落ちる音がした。\n九条は短く息を整える。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「誘導ではありません。あなたの記述です」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"ノートに走るペン先は一定のリズム。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"澪",
    text:"(観測、じゃない。これは救命の手順みたいだ)",
    choices:[{label:"さらに詳しく——夢の風景や温度を語る", next:"K2_detail"}]
  };
  SCENES["K2_detail"] = {
    name:"澪",
    bg:"library", music:"truth", sprite:[
      {char:"mio", pose:"think", pos:"left"},
      {char:"kujyou", pose:"neutral", pos:"right"}
    ],
    text:"「水の匂いがして、床は冷たいコンクリート。誰かが窓の外で笑ってるのに、顔が思い出せない」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"九条は目を伏せ、静かに頷いた。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「確認できました。あなたは“つぎ目”に触れている」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"澪",
    text:"「つぎ目？」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「世界の記録が継ぎ合わされた箇所、という意味です」",
    choices:[{label:"意味を飲み込み、続きを促す", next:"K3"}]
  };
  
  SCENES["K2_avoid"] = {
    name:"澪",
    bg:"library", music:"melancholy", sprite:[
      {char:"mio", pose:"neutral", pos:"left"},
      {char:"kujyou", pose:"soft", pos:"right"}
    ],
    text:"「……断片的で」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"曖昧な返事をすると、九条はそれ以上追及しなかった。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「分かりました。強要はしません」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"彼はノートを閉じ、窓の外に視線を逸らす。\nその横顔は、思ったより年相応だった。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"澪",
    text:"(優しいというより、距離の取り方が上手い人だ)",
    choices:[{label:"沈黙のまま席を立つ", next:"K3"}]
  };
  
  SCENES["K2_asktrust"] = {
    name:"澪",
    bg:"library", music:"calm_day", sprite:[
      {char:"mio", pose:"speak", pos:"left"},
      {char:"kujyou", pose:"serious", pos:"right"}
    ],
    text:"「九条さんは、私を信じますか」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"問いかけに、彼は一拍置いてから答えた。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「信じる/信じないは任務に含まれません」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「ただ、記録には責任がある」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"澪",
    text:"(それは、私を守るって意味？)",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"彼はそれ以上何も言わず、窓の外の雲を見た。",
    choices:[{label:"言葉の意味を考えながら席を立つ", next:"K3", setAffection:{"九条":+1}}]
  };
  
  SCENES["K3"] = {
    name:"",
    bg:"street_rain", music:"rain_walk", sprite:[
      {char:"mio", pose:"shock", pos:"center"},
      {char:"kujyou", pose:"serious", pos:"right"}
    ],
    se:"whoosh",
    text:"帰り道、空は再び降り出した。\n曲がり角の向こうから黒いバンが近づく。\nスライドドアが開き、無機質な光が路面を舐めた。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"九条が前に出る。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「乗らないで。——危険です」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"澪",
    text:"(選ばなきゃ――――)",
    choices:[
      {label:"促されるままに車へ乗る", next:"K3_car"},
      {label:"九条の手を掴んで走る", next:"K3_run", setAffection:{"九条":+1}},
      {label:"九条に視線を向ける", next:"K3_trust", setFlags:{trustTalk:true}}
    ]
  };
  
  SCENES["K3_car"] = {
    name:"",
    bg:"car_dark", music:"suspense", sprite:[
      {char:"mio", pose:"think", pos:"left"},
      {char:"kujyou", pose:"neutral", pos:"right"}
    ],
    text:"車内の空気は冷たく乾いていた。\n九条は私の隣に座り、手袋越しにシートベルトを確認する。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「一時的な保護です」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"澪",
    text:"(守られてるのか、監視されてるのか)",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"フロントガラスを叩く雨が、会話の隙間を埋めた。",
    choices:[{label:"保護先へ向かう", next:"K4"}]
  };
  SCENES["K3_run"] = {
    name:"",
    bg:"alley_rain", music:"run", sprite:[
      {char:"mio", pose:"shock", pos:"center"},
      {char:"kujyou", pose:"serious", pos:"right"}
    ],
    se:"run",
    text:"私は九条の手を掴み、濡れた商店街を駆けた。\n彼は規則正しく息を吐き、私の歩幅に合わせて速度を調整する。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「この選択は、報告書に書かれません」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"彼は今、規則を破っているのだ。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"澪",
    text:"「呑気にそんなことを言っている場合ですか？！」", 
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「――――はは、君は思っていたよりずっと面白い人だな」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"私は初めて彼の笑顔を見た。",
    choices:[{label:"路地を抜け、人気のない施設へ", next:"K4"}]
  };
  SCENES["K3_trust"] = {
    name:"澪",
    bg:"street_rain", music:"rain_walk", sprite:[
      {char:"mio", pose:"think", pos:"center"},
      {char:"kujyou", pose:"soft", pos:"right"}
    ],
    text:"「信じていいの？」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"問いは雨に紛れず届いた。\n九条は短く頷く。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「私を信じる必要はない。君が勝手に判断すればいい」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"澪",
    text:"(それ、ずるい)",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"でも、その言い方は、私に選ぶ自由を返してくれた。",
    choices:[{label:"九条に任せる", next:"K4", setAffection:{"九条":+1}}]
  };
  
  SCENES["K4"] = {
    name:"",
    bg:"public_hall", music:"tender", sprite:[
      {char:"mio", pose:"neutral", pos:"left"},
      {char:"kujyou", pose:"neutral", pos:"right"}
    ],
    text:"辿り着いたのは閉鎖中の公民館。\n非常灯だけが薄く床を照らす。\n九条は備品室から毛布を出し、机の端に並べた。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「触れ方について、先に伝えておきます」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"彼は手袋を少し持ち上げる。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「私が素手であなたに触れると、あなたの記憶へ侵入する可能性がある」",
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
    text:"毛布の上で向き合う。\n私が手を差し出すと、九条は長い沈黙ののち、手袋を外した。\n白い指先が震えている。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「——儀式です。過去を赦すための」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"澪",
    text:"(赦すのは、私？それとも彼自身？)",
    choices:[{label:"指先を重ねる", next:"K5a_prelude"}]
  };
  SCENES["K4_distance"] = {
    name:"澪",
    bg:"public_hall", music:"truth", sprite:[
      {char:"mio", pose:"neutral", pos:"left"},
      {char:"kujyou", pose:"serious", pos:"right"}
    ],
    text:"「今は距離を置こう」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"そう告げると、九条はわずかに目尻を緩めた。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「分別ある判断です」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"彼は封筒を差し出す。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「局の不正に関する記録。――――もし君が望むなら、終わらせられる」",
    choices:[{label:"封筒を受け取り、決意を固める", next:"K5b_prelude"}]
  };
  SCENES["K4_test"] = {
    name:"澪",
    bg:"public_hall", music:"suspense", sprite:[
      {char:"mio", pose:"think", pos:"left"},
      {char:"kujyou", pose:"serious", pos:"right"}
    ],
    text:"「安全なテスト方法は？」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"九条はハンカチを取り出し、手のひらに二重に重ねた。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「布越しに、三秒だけ。無理ならすぐ離れてください」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"澪",
    text:"(こわい。でも知りたい)",
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
    text:"素肌が触れ合った瞬間、微かな熱が往復する。\n遠い笑い声、濡れた廊下、誰かの靴音——断片が波のように押し寄せた。\n九条の睫毛が震える。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「……あなたは、よく頑張りました」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"澪",
    text:"(涙が出そう)",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"彼は私の手を包む力を、そっと強くした。",
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
    text:"指が離れた途端、音が遠のく。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「すみません、急ぎすぎましたね」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"九条は手袋を戻さず、距離だけを戻した。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「時間をかけてもいい」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"澪",
    text:"(それでも、もう分かってしまった。私はこの人のそばにいたい)",
    choices:[{label:"意を決して、もう一度触れる", next:"K6a", setFlags:{ED_Kujou_Love:true}}]
  };
  
  SCENES["K5b_prelude"] = {
    name:"",
    bg:"public_hall", music:"truth", sprite:[
      {char:"mio", pose:"think", pos:"left"},
      {char:"kujyou", pose:"serious", pos:"right"}
    ],
    text:"封筒の中には、改竄ログと署名の写しが綴じられていた。\nページの端に『M-0』のインデックス。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"澪",
    text:"「……私の名前は、この書類の中で記号だった」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"九条は言う。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「内部告発の窓口に出すなら、私が前に立ちます」",
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
    text:"夜のポストに封筒が吸い込まれる音は、思ったよりも軽い。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「——ありがとう」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"九条の声は、ほとんど聞こえないほど小さかった。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"終わりの始まり――――。そして私たちは、別々の道順で同じ駅へ歩いた。",
    choices:[{label:"それでも前を向くと決める", next:"K6b", setFlags:{ED_Kujou_Truth:true}}]
  };
  
  SCENES["K5c_trigger"] = {
    name:"",
    bg:"public_hall_dim", music:"suspense", sprite:[
      {char:"mio", pose:"shock", pos:"left"},
      {char:"kujyou", pose:"serious", pos:"right"}
    ],
    se:"pulse",
    text:"布越しの三秒。視界が反転し、過去と現在が互いの輪郭を侵食する。\n誰かの泣き声、手術灯の眩しさ、笑っているのに泣いている自分——――九条の指先が強張った。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「戻ってこい。……柊」",
    choices:[
      {label:"「九条、離れて！」と叫ぶ", next:"K5c_pullback"},
      {label:"このまま任せるしかない。", next:"K6c", setFlags:{ED_Kujou_Collapse:true}}
    ]
  };
  SCENES["K5c_pullback"] = {
    name:"",
    bg:"public_hall", music:"tender", sprite:[
      {char:"mio", pose:"think", pos:"left"},
      {char:"kujyou", pose:"soft", pos:"right"}
    ],
    text:"互いに跳ね退く。\n布が床に落ち、重たい呼吸が部屋に残る。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「——無理は、しないでください」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:" 九条は額に汗をにじませ、しかし微笑んだ。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"澪",
    text:"(危なかった。でも、彼は最後まで私を呼んでいた)",
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
    text:"【恋愛ED：赦し】",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"非常灯の薄い明かりの下、二人は練習するように何度も指を確かめた。\n触れるたび、過去のざらつきが細かく砕けていく。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「これからも、あなたの現在を記録させてください」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"澪",
    text:"「……はい」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"世界は急に優しくならない。\nでも、呼吸は確かに軽い。",
    choices:[{label:"記録してタイトルへ", next:"ED_Collector", setFlags:{ED_Kujou_Love:true}}]
  };
  SCENES["K6b"] = {
    name:"",
    bg:"press", music:"truth", sprite:[
      {char:"mio", pose:"neutral", pos:"left"},
      {char:"kujyou", pose:"serious", pos:"right"}
    ],
    text:"【真実ED：終止報告】",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"提出印の押された紙は、やけに薄く見えた。\n記者会見で九条は『個人より倫理を守る』と短く語る。\n私は客席から拍手をした。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"澪",
    text:"(私たちは同じ方向を見て歩く。でも並び方は選べる)",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"帰り道、彼は遠慮がちに微笑む。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"九条",
    text:"「いつか、仕事抜きでコーヒーでも」",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"澪",
    text:"「……考えておきます」",
    choices:[{label:"記録してタイトルへ", next:"ED_Collector", setFlags:{ED_Kujou_Truth:true}}]
  };
  SCENES["K6c"] = {
    name:"",
    bg:"public_hall_dark", music:"melancholy", sprite:[
      {char:"mio", pose:"think", pos:"center"}
    ],
    text:"【崩壊ED：共鳴】",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"境界は破れ、九条は私の“つぎ目”に沈んだ。\n朝、テーブルには黒い手袋だけが残る。\n触れると、微かな熱がまだ宿っている。",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"澪",
    text:"(赦しは届いたのかもしれない。ただ、もう確かめる方法がない)",
    autoNext:"",
    autoDelay: 0
  };

  SCENES[""] = {
    name:"",
    text:"窓の外で、昨日と同じ雨が降り始めた。",
    choices:[{label:"記録してタイトルへ", next:"ED_Collector", setFlags:{ED_Kujou_Collapse:true}}]
  };
