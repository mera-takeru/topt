const personalityColors = {
    "C": { name: "ブライトレッド", code: "#FF3232" },
    "cm": { name: "ディープパープル", code: "#4C0099" },
    "D♭": { name: "ブライトアクア", code: "#3298FF" },
    "c♯m": { name: "ディープグリーン", code: "#009900" },
    "D": { name: "ブライトイエロー", code: "#FEFF32" },
    "dm": { name: "ディープローズ", code: "#99004C" },
    "E♭": { name: "ブライトパープル", code: "#9832FF" },
    "e♭m": { name: "ディープシアン", code: "#009899" },
    "E": { name: "ブライトグリーン", code: "#32FF32" },
    "em": { name: "ディープオレンジ", code: "#994C00" },
    "F": { name: "ブライトローズ", code: "#FF3299" },
    "fm": { name: "ディープブルー", code: "#000099" },
    "F♯": { name: "ブライトシアン", code: "#32FEFF" },
    "f♯m": { name: "ディープライム", code: "#4C9900" },
    "G": { name: "ブライトオレンジ", code: "#FF9932" },
    "gm": { name: "ディープマゼンタ", code: "#990098" },
    "A♭": { name: "ブライトブルー", code: "#3232FF" },
    "g♯m": { name: "ディープミント", code: "#00994C" },
    "A": { name: "ブライトライム", code: "#99FF32" },
    "am": { name: "ディープレッド", code: "#990000" },
    "B♭": { name: "ブライトマゼンタ", code: "#FF32FE" },
    "b♭m": { name: "ディープアクア", code: "#004C99" },
    "B": { name: "ブライトミント", code: "#32FF99" },
    "bm": { name: "ディープイエロー", code: "#989900" }
  };

  const characterDescriptions = {
    "C": `<span class="title" style="background-color: ${personalityColors['C'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【C型】騎士</span>
    <p class="result-description"><br>まるで騎士のように、強さと優しさを兼ね備えるあなた。<br><br>
一度決めた信念やルールを曲げることなく、どんなときも「正しいと思える道」をまっすぐに進んでいきます。<br><br>
言葉や行動に嘘がなく、ごまかしがきかないからこそ、時に不器用に見えることも。<br><br>
でもそのぶん、あなたの真剣さや誠実さが、信頼の土台になっています。<br><br>
困っている人を見たら、つい手を差し伸べたくなる。<br><br>
誰かの力になりたいという気持ちが、あなたの行動力の源です。<br><br>
必要とされる場面では、自然と前に出る勇気もある——それは“ヒーロー願望”というより、“責任感と優しさ”から来るもの。<br><br>
あなたにとって、仲間を裏切るような行為や不誠実な関係は、もっとも受け入れがたいもの。<br><br>
信頼関係を築くには時間がかかるけれど、いったん築いた絆は、ちょっとやそっとじゃ揺るがない。<br><br>
ただ、そこにいるだけで、空気が整って、安心できる。<br><br>
そんな影響力を持っているのが、あなたという人です。<br><br>
組織でもチームでも、あなたの存在は「秩序」と「安心感」の象徴。<br><br>
いざというときに頼られる、縁の下のヒーローです。</p>`,
    "cm": `<span class="title" style="background-color: ${personalityColors['cm'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【cm型】鍛冶屋</span>
<p class="result-description"><br>多くを語らなくても、あなたの中には強いこだわりと意思がちゃんと息づいています。<br><br>
細かい部分にまで目が届き、妥協せずに何度でもトライしながら、自分が「これだ」と思える完成形を目指していく。<br><br>
その姿勢はまるで、オンリーワンの一本を鍛え上げる刀鍛冶のよう。<br><br>
派手にアピールするのは得意じゃないかもしれないけど、あなたがつくるものには“本物”の説得力があります。<br><br>
誰かの期待に合わせるより、自分の納得を優先する——そんなブレない価値観を持っているからこそ、深い集中力と継続力が光ります。<br><br>
一人の時間を大切にし、自分のペースでじっくりと向き合うタイプ。<br><br>
孤独に強いというより、むしろ「一人で何かを深く追いかける時間」が、あなたにとってのエネルギー源なんです。<br><br>
そしてもう一つの強みは、目に見えない“感情”や“空気感”を作品や言葉に落とし込める表現力。<br><br>
あなたの手から生まれるものには、心に残る温度が確かに宿っています。<br><br>
着実に積み上げていけるあなたの生き方は、実は多くの人の憧れの的。<br><br>
一歩一歩を丁寧に歩むその姿が、誰かにとっての“本物”になる日も、きっと遠くないはずです。</p>`,
    "D♭": `<span class="title" style="background-color: ${personalityColors['D♭'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【D♭型】思想家</span>
<p class="result-description"><br>周りがスルーしてしまうような日常の違和感に、あなたは静かに目を留めます。<br><br>
「なんでこうなってるんだろう？」という問いが、いつもあなたの中にある。<br><br>
常識や空気に流されず、本質を突き止めようとするその姿勢は、まさに現代の“思想家”。<br><br>
頭の中は常に思考でフル稼働。<br><br>
複雑で繊細で、でもどこか落ち着いている。<br><br>
他人には理解されにくいかもしれないけど、あなたにとってはこの“深掘りする時間”が何より大事なんです。<br><br>
周囲とのズレを感じることもあるかもしれませんが、あなたは「わかってもらう」より「真理に近づく」ことを優先できる人。<br><br>
それは強さであり、独自の魅力でもあります。<br><br>
言葉を雑に扱わず、ひとつひとつに誠実さとロジックが宿るあなたの話は、聞いた人の思考や価値観に火を灯す力を持っています。<br><br>
感情に流されすぎず、冷静に物事を見つめられる視点は、混乱の中でも自分を見失わない軸となるでしょう。<br><br>
あなたは、すぐには答えが出ない問いにも向き合える。<br><br>
「深く考える力」こそが、あなたの最大の武器であり、これからの時代にこそ必要とされる才能です。</p>`,
    "c♯m": `<span class="title" style="background-color: ${personalityColors['c♯m'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【c♯m型】創造主</span>
<p class="result-description"><br>現実にとらわれず、自分だけの視点で世界を見つめているあなた。<br><br>
常に「今ここにない何か」を想像し、それをどうやってカタチにするかを考え続けています。<br><br>
そのひらめきは直感的でスケールが大きく、まるで未来から来たアイデアの種を育てているよう。<br><br>
だからこそ、ときに「何を考えているの？」と周囲から理解されにくいこともあるかもしれません。<br><br>
でもあなたにとって、創ることは“作品づくり”以上の意味を持つ——それは、自分だけのロジックで世界を再構築するような行為なのです。<br><br>
落ち着ける場所で自分の世界と向き合っているときこそが、あなたにとっての一番のリアル。<br><br>
イメージはふくらみ続け、まるで宇宙の地図を心の中で描いているようです。<br><br>
感情の波が大きくて、生きづらさや孤独を抱える瞬間もあるけれど、それすらあなたにとっては“創造の燃料”。<br><br>
誰かに合わせるより、自分の内側にある真実と向き合うことで、あなたは本当に価値のあるものをつくろうとします。<br><br>
あなたが生み出すアイデアや表現には、言葉では言い尽くせない深みがあります。<br><br>
それは人の心に静かに届き、世界の“見え方”そのものを変えてしまうことさえある。<br><br>
たとえ今すぐ理解されなくても大丈夫。<br><br>
あなたが描くそのビジョンは、まだ誰も見たことのない「可能性」そのものなのです。</p>`,
    "D": `<span class="title" style="background-color: ${personalityColors['D'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【D型】探検家</span>
<p class="result-description"><br>現状に甘んじることなく、「もっと先へ」「まだ見ぬ世界へ」と目を向け続けるあなた。<br><br>
ルールや常識に縛られるのは苦手で、自分の感覚と熱量を信じて、誰も通ったことのない道を選び取る勇気があります。<br><br>
新しいものや未知の体験に惹かれやすく、日常の中でも小さな“変化の兆し”を見逃さない。<br><br>
あなたにとって「変わること」は不安ではなく、むしろ生きている実感そのもの。<br><br>
リスクを恐れず一歩を踏み出せる行動力と、うまくいかないときも柔軟に視点を変えて方向転換できる機転——<br><br>
そのスタンスは、まわりに新しい風を送り込み、閉じた空気を一気に開く力を持っています。<br><br>
だからこそ、同じ場所にとどまり続けるよりも、常に「次のステージ」を探していたい。<br><br>
安定よりも、ワクワクする“可能性”を追いかけたくなるタイプです。<br><br>
そんなあなたの姿勢は、ときに他の誰かにとっての「突破口」や「道しるべ」にもなります。<br><br>
まだ誰も描いたことのない地図の、その先へ。<br><br>
あなたが示す矢印は、未来のはじまりを告げるサインなのかもしれません。</p>`,
    "dm": `<span class="title" style="background-color: ${personalityColors['dm'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【dm型】司書</span>
<p class="result-description"><br>まわりが気づかないような微妙な空気の変化や、小さな違和感に、あなたはふと目を留める人。<br><br>
言葉にされていない想いや、表に出てこない感情を、そっとすくい上げる繊細さがあります。<br><br>
誰かの心がゆらいでいるとき、無理に励ますのではなく、ちょうどいい距離感で寄り添える——<br><br>
その姿は、まるで“心の司書”のように静かでやさしい。<br><br>
あなたがいると、なぜか不思議と安心できる。<br><br>
その空気感は、あなたの「ちゃんと感じ取ろうとする姿勢」から生まれています。<br><br>
言葉を急がず、沈黙すら大切にできるあなたは、感情と言葉のあいだにある“間”を理解できる人。<br><br>
だからこそ、あなたが発するひとことには、深く届く力があります。<br><br>
心の中には、これまで積み重ねてきた思考と感情があって、それを“必要な人に必要なタイミングで”差し出せる——<br><br>
それがあなたのやさしさであり、見えない強さです。<br><br>
目立つタイプじゃないかもしれない。<br><br>
でも、誰かがそっと救われるような瞬間には、いつもあなたの存在がそばにある。<br><br>
あなたの繊細さは、時に世界をやさしく照らす光になるのです。</p>`,
    "E♭": `<span class="title" style="background-color: ${personalityColors['E♭'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【E♭型】賢者</span>
<p class="result-description"><br>感情やノイズに流されず、物事を一歩引いて俯瞰できるあなた。<br><br>
対立や混乱の中でも冷静さを失わず、「まず全体を見渡してから動く」というスタンスが自然にできている人です。<br><br>
誰かの意見が自分と違っていても、すぐに否定することなく、「そういう考えもあるよね」と一度受け止められる——<br><br>
その余白のある姿勢は、まさに今の時代に求められる“対話力”の持ち主。<br><br>
議論が白熱しても、あなたがいると不思議と空気が落ち着く。<br><br>
感情でぶつかり合うより、冷静に整理し、みんなが納得できる道を探そうとする。<br><br>
そのスタンスは、場に安心感をもたらす“空気の整備士”のような存在です。<br><br>
あなたの言葉は、派手ではないけれど深く届く。<br><br>
誰かを論破するためじゃなく、理解をひらくために発されているからこそ、相手の心にスッと染み込む力があります。<br><br>
知識や経験をひけらかさず、でも必要なときにはきちんと差し出せる。<br><br>
そのバランス感覚が、あなたの信頼の源です。<br><br>
「正しさ」より「理解」。<br><br>
「勝ち負け」より「つながり」。<br><br>
そんな視点で世界を見られるあなたは、いわば“調整の賢者”。<br><br>
まわりの人たちの心の軸を整えるような力を秘めています。</p>`,
    "e♭m": `<span class="title" style="background-color: ${personalityColors['e♭m'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【e♭m型】画家</span>
<p class="result-description"><br>見過ごされがちな風景や、誰かの心にひっそりと宿る感情。<br><br>
あなたはそんな「目に見えないもの」に自然と心を動かされ、それを丁寧に形にしていける人です。<br><br>
空気の色、ふとした表情、静かな揺れ——<br><br>
言葉にならない気持ちを、あなたは色や構図、質感として映し出していく。<br><br>
まさに“感情を訳す”クリエイターと言えるでしょう。<br><br>
まわりからは「感性が豊かだね」と言われることもあるかもしれませんが、あなたの中では、単なるひらめきではなく、何層もの感情や記憶が静かに折り重なっていて、それが作品に“深さ”や“余韻”を生み出しています。<br><br>
あなたにとって表現とは、ただの自己主張ではありません。<br><br>
それは、言葉にできない誰かの気持ちに、そっと名前をつけてあげるような行為。<br><br>
誰かの中にある「うまく言えない想い」を、作品というカタチで代弁できる優しさが、あなたの中にはあります。<br><br>
人とたくさん関わるよりも、自分の感覚に集中できる時間を大事にするあなた。<br><br>
それは「内向的」というより、むしろ「感性の深いチューニング」をしている状態。<br><br>
あなたが描き出すものは、“ふと心に残る豊かな風景”。<br><br>
時間が経ってから、誰かの記憶のなかでそっと息を吹き返すような、そんな力を秘めています。</p>`,
    "E": `<span class="title" style="background-color: ${personalityColors['E'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【E型】演奏家</span>
<p class="result-description"><br>その場にいるだけで空気がやわらぎ、なんとなく人が笑顔になっていく——<br><br>
あなたには、そんなムードを自然に生み出すセンスがあります。<br><br>
親しみやすくて壁をつくらない、でもちゃんと空気は読んでいる。<br><br>
誰かにとっての「話しかけやすい人」になれるって、実はすごいスキル。<br><br>
あなたの笑顔やちょっとしたリアクションが、まわりの雰囲気を一瞬で明るく変えていくんです。<br><br>
目立とうとしてるわけじゃないのに、いつの間にかみんなの中心にいることも。<br><br>
それはあなたの“雰囲気そのもの”が、安心感と楽しさを同時に持っているから。<br><br>
でも、ただ明るいだけじゃない。<br><br>
笑いの温度感、誰かを置いていかないバランス感覚、場の空気を読みながらの細やかな配慮——<br><br>
その裏には、あなたの繊細な気遣いがしっかり息づいています。<br><br>
あなたにとっての「表現」は、自分を目立たせるためではなく、みんなと“いい空気”を共有するためのもの。<br><br>
誰かの笑顔が自分の喜びとリンクしたとき、あなたは一番自然体で輝けます。<br><br>
明るくて、やさしくて、軽やか。<br><br>
あなたはまるで、日常に音楽を添えるように、人と人との間にリズムを運ぶ“演奏家”のような存在です。</p>`,
    "em": `<span class="title" style="background-color: ${personalityColors['em'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【em型】遊牧民</span>
<p class="result-description"><br>ルールや常識に縛られるよりも、自分の感覚を信じて、軽やかに生きたい。<br><br>
そんなあなたは、固定された型よりも「その時の心地よさ」に素直に従うことを大切にしている人です。<br><br>
人間関係や環境が変わっても、焦らず、自分のリズムでなじんでいく。<br><br>
まるで風のように、流れに逆らわずに柔らかく旅する遊牧民。<br><br>
他人の期待に合わせすぎると、本来のあなたらしさは息苦しくなってしまう。<br><br>
でも、自分が「これ好きだ」と感じるものに出会った瞬間、あなたの行動力や吸収力は一気に加速して、誰よりものびのびと成果を出せるタイプです。<br><br>
一見、気分屋に見られることもあるかもしれません。<br><br>
でも実は、それは“今この瞬間”にちゃんと誠実だからこそ。<br><br>
未来の予定よりも、今の直感に正直でいようとする——そんな生き方は、言い換えれば「瞬間を信じる強さ」です。<br><br>
変化は怖いものじゃなく、むしろあなたにとっての刺激と癒し。<br><br>
ずっと同じ場所にいるよりも、新しい空気を吸い込んだときにこそ、あなたの心はいきいきと息を吹き返します。<br><br>
あなたは、強く自己主張しなくても、気づけば誰かの心をそっと揺らしていく存在。<br><br>
“風のように通り過ぎる”のではなく、“その風があったことを、あとで思い出させる”ような印象を残します。<br><br>
枠にとらわれないそのスタイルが、実はまわりに新しい価値観の風を吹き込んでいるのです。</p>`,
    "F": `<span class="title" style="background-color: ${personalityColors['F'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【F型】発明家</span>
<p class="result-description"><br>「これって、もっと面白くできない？」<br><br>
そんなひらめきが、ふとした瞬間に頭をよぎる——あなたの脳内はいつだって発明モード。<br><br>
常識やルールに縛られず、むしろ“枠の外”から世界を眺められるあなたの視点は、まさに唯一無二。<br><br>
その発想は突飛に見えることもあるけれど、あなたにとっては論理と好奇心の掛け算から自然に導かれた「答え」なのです。<br><br>
現実と空想のあいだを自由に行き来しながら、試行錯誤すら楽しめるあなたは、夢見るだけじゃ終わらない人。<br><br>
アイデアを現実に“落とし込む”行動力が、何よりの武器です。<br><br>
興味を持ったことにはどこまでも没頭し、自分で道具を作り、仕組みを考え、ゼロから何かを立ち上げていく。<br><br>
「そんなの無理じゃない？」という声にも負けず、自分の好奇心を信じて突き進める強さが、あなたにはあります。<br><br>
たとえ今はまだ理解されなくても大丈夫。<br><br>
あなたの思いつきは、いつか誰かの「当たり前」になっていく。<br><br>
あなたがつくるのは、ただの作品じゃなく、“世界のルールそのものを変えるかもしれない仕組み”。<br><br>
そう、あなたの存在こそが、未来のはじまり。<br><br>
世界をちょっと面白くする方法を、誰よりも知っているのは間違いなく、あなたです。</p>`,
    "fm": `<span class="title" style="background-color: ${personalityColors['fm'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【fm型】小説家</span>
<p class="result-description"><br>誰かの気持ちをそのまま言語化するのではなく、あえてすこしだけ余白を残しながら、感情や記憶の輪郭をそっと浮かび上がらせる——<br><br>
そんな繊細な表現ができる、あなたはまさに“言葉で描く人”。<br><br>
にぎやかで派手なストーリーよりも、静かで奥行きのある語り口に惹かれがち。<br><br>
目には見えない気持ちや違和感、誰にも拾われなかった感情の「かけら」に敏感で、それを物語や文章というかたちでそっとすくい上げていくセンスがあります。<br><br>
あなたがつむぐ言葉は、読み手の“内側”に語りかける。<br><br>
読んだ人自身の記憶や体験と交差することで、物語が“誰かの人生の一部”になっていくような、不思議な力を持っているのです。<br><br>
あなたにとって、言葉はただのコミュニケーション手段ではありません。<br><br>
それは、「本音の奥」にあるもっと深いもの——<br><br>
現実をもう一度見つめ直すための“レンズ”のような存在です。<br><br>
ひとりで過ごす時間を大切にするのは、内省や創作のための大事なプロセス。<br><br>
誰にも見えないところで、あなたは思考と感情を密かに耕しています。<br><br>
あなたの物語は、読み終えたあとも心の中に残り続ける。<br><br>
そして、時間が経ってふと思い出されたとき、また違った意味で響いてくるような、そんな深さを持っています。<br><br>
それは、共感というよりも“共鳴”。<br><br>
誰かの中にあった「ことばにならない想い」に、そっと名前をつけてあげられる——<br><br>
それが、あなたの素晴らしい力です。</p>`,
    "F♯": `<span class="title" style="background-color: ${personalityColors['F♯'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【F♯型】建築士</span>
<p class="result-description"><br>感情に振り回されることなく、物事を冷静に、丁寧に組み立てていけるあなた。<br><br>
勢いだけで走るのではなく、「どうすれば実現可能か？」をちゃんと考えながら動けるタイプです。<br><br>
頭の中には、自分なりの設計図がしっかりある。<br><br>
一歩一歩を積み上げていくそのスタイルは、着実でブレがなく、まわりからも安心されやすい存在です。<br><br>
理想やアイデアを“現実で成立するかたち”に落とし込むのが得意。<br><br>
つまり、ふわっとした夢で終わらせず、「どうカタチにするか」まで見通せる視点を持っています。<br><br>
派手なアピールはしなくとも、計画性と安定感で自然と信頼を集める。<br><br>
丁寧に順序を整え、土台を固めてから進む——そんな堅実さが、あなたの強みです。<br><br>
実用性を大事にしながらも、「シンプルさの中にある美しさ」への感覚も忘れない。<br><br>
あなたが大事にしているのは、“ムダを削ぎ落とした先に残る本質”。<br><br>
突発的な変化や感情的な流れには慎重になることもありますが、それはあなたが「長く持つ構造」を本気で考えているからこそ。<br><br>
あなたにとって、創造とは“直感で爆発する”ことではなく、計算された積み重ねの中から、強くて美しいかたちをつくること。<br><br>
あなたが描くビジョンは、ただのアイデアではなく、人が集まり、育ち、安心できる“構造そのもの”。<br><br>
芯のある思考と美意識が、未来の土台を着実に築いていきます。</p>`,
    "f♯m": `<span class="title" style="background-color: ${personalityColors['f♯m'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【f♯m型】錬金術師</span>
<p class="result-description"><br>単純な正解に飛びつくよりも、その奥にある「まだ言葉になっていない真実」を探したくなるあなた。<br><br>
ひとつの視点だけじゃ満足できず、表と裏、矛盾や曖昧さの中にこそ、リアルな意味があると直感している人です。<br><br>
まわりからは落ち着いて見られるかもしれませんが、内側では常に思考が動き続けていて、まるで異なる要素をかけ合わせて“新しい答え”を練り出しているような感覚。<br><br>
それはまさに、現代の「錬金術」。<br><br>
あなたは、割り切れない感情や矛盾を拒まずに受け入れ、それすらもひとつのパズルとして再構成しようとする——その姿勢こそが、あなたの大きな強みです。<br><br>
哲学やアート、心理、科学など、抽象的で境界のあいまいな世界に惹かれやすいのも、“見えない何か”の仕組みを深く理解しようとする、あなたの探究心の表れ。<br><br>
人の言葉にならない感情や、見えない機微にも敏感で、自分の内面と向き合いながら、他者の心の奥にも静かにアクセスできる感性を持っています。<br><br>
ときに「不思議な人」「つかみどころがない」と思われるかもしれません。<br><br>
でもそれは、あなたが“ひとつの型”に収まらないだけ。<br><br>
むしろその曖昧さこそが、今の時代に必要とされる思考の柔軟性なんです。<br><br>
あなたの人生そのものが、静かな“実験”であり、“発見の旅”。<br><br>
混沌を怖がらず、自分の中にある多面性と折り合いをつけながら歩んでいく姿勢は、やがて深い洞察と、誰にも真似できない独自の世界観へとつながっていきます。</p>`,
    "G": `<span class="title" style="background-color: ${personalityColors['G'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【G型】狙撃手</span>
<p class="result-description"><br>あれこれ手を出さず、必要なときにだけ確実に動く——<br><br>
そんなあなたは、いつもまわりを見渡しながら、“ここぞ”というタイミングを逃さない人です。<br><br>
ひとたび狙いを定めたら、まっすぐに行動を起こせる集中力と決断力の持ち主。<br><br>
あなたにとって大切なのは、「量」より「質」。<br><br>
無駄を省いた言動や行動には、いつも芯のある意思が宿っています。<br><br>
感情をむやみに表に出すことは少なく、時にクールすぎると思われるかもしれません。<br><br>
でもそれは、冷たいわけじゃなく、“言葉や時間を大切にしている”あなたなりの優しさ。<br><br>
静かな人ほど、深く考え抜いてから行動する——その知的なスタンスがあなたの魅力です。<br><br>
人間関係も、広く浅くではなく“狭く深く”。<br><br>
信頼できる人にだけ心を開き、長く関係を築くことを選びます。<br><br>
群れないけど孤立もしない、“自分の軸で動ける”強さを、あなたはちゃんと持っています。<br><br>
どんなに周囲がざわついていても、あなたの狙いはブレない。<br><br>
確実に狙いを定め、しっかりと結果を出すその姿は、まさに凄腕のスナイパー。<br><br>
一撃で仕留める。<br><br>
それが、あなたらしいスタイルです。</p>`,
    "gm": `<span class="title" style="background-color: ${personalityColors['gm'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【gm型】探偵</span>
<p class="result-description"><br>誰もが見逃してしまうような小さな違和感や、空気の中に潜むヒントに気づけるあなた。<br><br>
感情に流されず、物事を丁寧に観察する目はまるで探偵のよう。<br><br>
まわりが混乱しているときでも、あなたは冷静に全体を見渡し、ひとつずつピースを拾い集めていきます。<br><br>
あなたの魅力は、声を張ることでも目立つことでもない。<br><br>
けれど、言葉の裏や空気の揺れを察知する感覚は抜群で、気づけば誰よりも深く“本質”に近づいている——そんなタイプです。<br><br>
無意識のうちにまわりを安心させたり、的確な一言で空気を整えたりするのは、その場を俯瞰できるあなたの知性と落ち着きがあるからこそ。<br><br>
「慎重すぎる」「考えすぎ」なんて言われることもあるかもしれません。<br><br>
でもそれは、曖昧なまま進まず、ちゃんと“根拠を持って動きたい”というあなたなりの誠実さ。<br><br>
あなたにとって大事なのは、単に「正解」を見つけることじゃなく、“なぜそうなったのか”を理解して納得すること。<br><br>
そのプロセスを経て導いた言葉には、深さと説得力があります。<br><br>
多くを語らなくても、あなたのまなざしには「本当のこと」が映っている。<br><br>
だからこそ、あなたは気づけば、誰かが抱えていた“見えない謎”をほどく鍵になっていることも。<br><br>
その目線が照らす真実は、誰かの視界をそっとひらいていくのです。</p>`,
    "A♭": `<span class="title" style="background-color: ${personalityColors['A♭'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【A♭型】舞踏家</span>
<p class="result-description"><br>感情や想いを、言葉じゃなく“動き”や“雰囲気”で伝える——<br><br>
そんなあなただからこそ、まわりの人の心をふっと揺らす力を持っています。<br><br>
頭で考えるよりも、心や身体の“感覚”を大事にするタイプ。<br><br>
自分の中から湧き上がってくる衝動やムードに素直に従うその姿は、どこかアーティスティックで、強い印象を残します。<br><br>
テンポやリズムを乱されることが苦手で、人に合わせすぎるとどこか疲れてしまう。<br><br>
でもそれは、自分の感覚を丁寧に守っている証拠。<br><br>
あなたにとって「無理をしない距離感」は、生きるうえでとても大切なバランスです。<br><br>
所作や空気づくりのセンスも抜群で、そこにいるだけで場の雰囲気が変わることも。<br><br>
言葉にしなくても、動きや目線、たたずまいそのもので“伝わってしまう”あなたは、まるで空間に溶け込んだ表現者。<br><br>
内面はとても繊細で、人の気配や場の空気にも敏感。<br><br>
だからこそ、嘘やごまかしがきかない“真っ直ぐさ”がにじみ出ていて、その“ありのままの存在感”が、あなたの最大の魅力になっています。<br><br>
あなたの表現は、いつもリアルで、飾らない。<br><br>
それは、頭で練られた言葉よりもずっと深く、誰かの心に届くもの。<br><br>
あなたが生きているだけで、空間がちょっとだけ柔らかくなる。<br><br>
それが、あなたという“生きたアート”の魅力なのです。</p>`,
    "g♯m": `<span class="title" style="background-color: ${personalityColors['g♯m'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【g♯m型】収集家</span>
<p class="result-description"><br>誰かが気にも留めないようなものにふと惹かれて、そこに意味や美しさを見つけてしまう——<br><br>
そんなあなただからこそ、世界はずっと豊かに、奥行きのあるものとして映っているはず。<br><br>
好きなものにはとことんハマるけど、ただ集めて満足するわけじゃない。<br><br>
「なんで自分はこれに惹かれるんだろう？」<br><br>
「この背景にはどんな物語があるんだろう？」<br><br>
そんな問いと一緒に、自分だけの“感性の地図”を少しずつ広げていく——それが、あなたらしい収集のカタチ。<br><br>
あなたにとって「好き」は、なんとなくじゃなく“必然”。<br><br>
そのこだわりは他の誰とも違っていて、だからこそ「人と同じじゃなくていい」と、どこか自然に思えている。<br><br>
周囲からは「マニアック」「独特」と言われるかもしれないけれど、自分の世界にちゃんと誇りを持っているあなたの姿勢は、むしろまわりにとって新鮮で魅力的に映っています。<br><br>
押しつけがましくないのに、自分の中には確かな軸がある。<br><br>
理解されないこともどこか受け入れていて、それでも価値観が重なる相手とは深くつながれる。<br><br>
そんな“静かな情熱”が、あなたの本質です。<br><br>
あなたが集めるのは、モノじゃなく“意味”や“時間”のかけら。<br><br>
それを通して、自分なりに世界を読み解き、つなぎなおしている——<br><br>
だからあなたの収集は、単なる趣味じゃなく「生き方」そのものなんです。</p>`,
    "A": `<span class="title" style="background-color: ${personalityColors['A'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【A型】参謀長</span>
<p class="result-description"><br>前に出るより、全体を見渡しながら流れを整えるあなた。<br><br>
感情に左右されず、いつも一歩引いた視点から「今、何が必要か」を見極められる。<br><br>
それが、あなたの持つ強さです。<br><br>
リーダーっぽく見られなくても、実は多くの人の動きや選択を、あなたの言葉や判断が支えています。<br><br>
誰かのアイデアを計画に変えたり、バラバラだった状況を整理したり——<br><br>
その手腕は、まさに「仕組みで動かす人」。<br><br>
論理的で構造的。<br><br>
話す言葉にムダがなく、判断にはきちんと根拠がある。<br><br>
だからこそ、あなたの一言は信頼され、迷っている誰かの背中をそっと押すことができるのです。<br><br>
派手な自己主張はしないけど、裏側から物事をスムーズに動かす力がある。<br><br>
そして何より、"誰かのために戦略を組む"ことにこそ、やりがいを感じられる人です。<br><br>
冷静すぎて「近寄りがたい」と言われることもあるかもしれないけど、実際はちゃんと人の気持ちも見ていて、感情の揺れやチームの空気も読めている。<br><br>
あなたの中には、知性と共にやさしさも根づいています。<br><br>
明確で合理的な構造を好むあなたは、混乱した場面でこそ輝く。<br><br>
複雑な状況を整理して、実行可能な道筋を描くとき、あなたの本領が発揮されます。<br><br>
目立たなくても、あなたがいるから全体が機能する。<br><br>
それはまさに、“信頼でまわりを動かす、優秀な司令塔”のような存在です。</p>`,
    "am": `<span class="title" style="background-color: ${personalityColors['am'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【am型】詩人</span>
<p class="result-description"><br>にぎやかな場所よりも、ふとした沈黙の中にある空気や感情に気づける人。<br><br>
目に見えない“心の揺れ”を感じ取り、それをことばに変えて届けることができる——<br><br>
あなたはまるで、誰かの気持ちを代弁する“優しい詩人”のような存在です。<br><br>
強く主張することよりも、静かに寄り添うことを選ぶあなた。<br><br>
控えめに見えるかもしれないけれど、内側には深い感受性と情熱が眠っていて、それがあなたの言葉に、あたたかくて静かな力を与えています。<br><br>
あなたにとって「ことば」は、ただのツールじゃない。<br><br>
自分自身を見つめ直す“鏡”でもあり、誰かの心へそっと架かる“やさしい橋”でもあるのです。<br><br>
SNSの投稿や、日記や詩、あるいは何気ない一言——<br><br>
その一語一語に、あなたの誠実さと繊細なまなざしが宿っていて、それが読む人の心にじんわりと染みわたるような安心感を生み出します。<br><br>
感情の機微に敏感で、共感力が高いからこそ、時に疲れてしまうこともあるかもしれません。<br><br>
でもそれでも、誰かの想いを「ちゃんと感じていたい」と思える、その優しさこそが、あなたのいちばんの強さです。<br><br>
自分らしくいられる静かな時間と、丁寧に言葉と向き合う姿勢。<br><br>
その積み重ねが、誰かの心を動かす“詩”になっていくのです。</p>`,
    "B♭": `<span class="title" style="background-color: ${personalityColors['B♭'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【B♭型】案内人</span>
<p class="result-description"><br>自分が前に出るより、誰かがその人らしくいられる場所へと、やわらかく導いていく——<br><br>
そんなあなたは、人と人、感情と場面を自然につなげていける、空気の読めるナビゲーター。<br><br>
強く押すんじゃなくて、「こういう道もあるよ」とやさしく差し出すタイプ。<br><br>
そのさりげなさが、誰かの迷いや不安をスッと軽くしてくれます。<br><br>
あなたは、相手のペースや空気感にあわせて、心の距離感をちゃんと調整できる人。<br><br>
だからこそ、気づけばまわりから「なんか安心する」「つい話しちゃう」と信頼を寄せられていることも多いはずです。<br><br>
困っている人がいたら、放っておけない。<br><br>
でも感情に流されすぎず、状況を一歩引いて見られる冷静さも持っている。<br><br>
ただ、自分のことを後回しにしがちなのも事実。<br><br>
がんばりすぎても疲れが表に出にくいからこそ、無理しすぎないように「自分の居場所」もちゃんと整えておくことが大切です。<br><br>
あなたにとって大切なのは、「誰かのために頑張ること」ではなく、「誰かと一緒に進むこと」。<br><br>
そのスタンスこそが、あなたのナチュラルな優しさをもっと活かす力になります。<br><br>
目立つ言葉や大きな行動じゃなくても、あなたがそっとかけたひと言、そばにいるという選択が、誰かにとっての大きな支えになっている。<br><br>
あなたの存在は、旅の途中に灯るあたたかな光。<br><br>
誰かの人生の道しるべになる、かけがえのない存在です。</p>`,
    "b♭m": `<span class="title" style="background-color: ${personalityColors['b♭m'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【b♭m型】看護師</span>
<p class="result-description"><br>誰かが落ち込んでいるとき、表情や雰囲気の変化をいち早くキャッチして、何も言わずに隣にいてくれる——<br><br>
そんなあなたの存在が、まわりにとってどれだけ安心感になっているか、実は本人がいちばん気づいていないのかもしれません。<br><br>
言葉よりも行動、正論よりも共感。<br><br>
「励ます」より「気づいてくれる」あなたのやさしさは、心の深いところにちゃんと届いています。<br><br>
あなたは、他人の感情の“ちょっとした揺れ”にも敏感で、それに合わせて自分のトーンや距離感を自然と調整できる人。<br><br>
まわりから「話しやすい」「つい甘えてしまう」と頼られるのも、その思慮深さゆえです。<br><br>
あまり自分のことを多く語らず、誰かの話を受け止める側に回ることが多いあなた。<br><br>
でもそのやさしさの裏側には、確かな観察力と、自分をしっかり保つ強さがちゃんと宿っています。<br><br>
常に冷静に見えるかもしれないけれど、その内側ではいつも「どうすれば、少しでも力になれるだろう」と考えている。<br><br>
それが、あなたの“寄り添う力”の源です。<br><br>
ただ、気づかれないまま疲れを抱え込んでしまうこともあるから、あなたにとっても“安心して甘えられる誰か”や“心を整える時間”はすごく大事。<br><br>
あなたの本質は、“癒す人”というより、“感じ取る人”。<br><br>
見えない感情を察し、そっと寄り添い、押しつけずに支えるその姿勢が、誰かにとって「ちゃんとわかってもらえた」という救いになるのです。</p>`,
    "B": `<span class="title" style="background-color: ${personalityColors['B'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【B型】剣闘士</span>
<p class="result-description"><br>挑戦から逃げず、勝ち負けがある世界に真正面から飛び込んでいける人。<br><br>
「どうせやるなら中途半端はイヤ」——そんな本気の姿勢が、あなたの魅力であり、武器です。<br><br>
リスクがあるからこそ燃える。<br><br>
自分で決めた目標にはとことん向き合い、途中で妥協せず、最後までやりきろうとする強さを持っています。<br><br>
そのストイックさは、まわりから見れば「熱すぎる」「頑固」なんて言われることもあるかもしれません。<br><br>
でも本当は、自分にも他人にもまっすぐで、真剣勝負の姿勢を崩さない“誠実な闘志”の持ち主。<br><br>
簡単に弱音を吐かないのは、カッコつけたいからじゃなくて、「甘えたくない」「責任を持ちたい」という自分なりの覚悟があるから。<br><br>
だからこそ、あなたの本気がまわりを動かし、いつの間にか周囲に勇気を与えていることも多いのです。<br><br>
たとえ孤独に感じる瞬間があっても、あなたが選んだ道を貫くその姿は、誰かにとって“尊敬”の対象になっている。<br><br>
あなたは、ただ勝つためだけに戦っているわけじゃない。<br><br>
「どうやってそこにたどり着いたか」というプロセスにこそ、自分の価値を見出すタイプ。<br><br>
その真っ直ぐさと、結果だけじゃ測れない“信念の強さ”は、深い絆や信頼を自然と引き寄せていきます。<br><br>
あなたが挑んでいるのは、他人ではなく“昨日の自分”。<br><br>
その熱さも、不器用さも、誇りも、全部あなたの「生きる力」になっているんです。</p>`,
    "bm": `<span class="title" style="background-color: ${personalityColors['bm'].code}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">【bm型】魔術師</span>
<p class="result-description"><br>一見バラバラに見えるものの中から、誰も気づいていないつながりや意味を見出す力。<br><br>
あなたの頭の中では、常に静かな“発見”が生まれ続けています。<br><br>
常識やルールに従うより、「自分なりに考えて、自分のやり方で答えを出したい」。<br><br>
そんな探究心と柔軟な発想力が、あなたの核にあります。<br><br>
散らかったメモ、複雑な思考フロー、整理されていないように見えるアイデア群——<br><br>
でもあなたにとっては、それが最高に“意味のある混沌”。<br><br>
そこから生まれるひらめきは、まるで思考の魔法のよう。<br><br>
あなたは、「普通にやる」ことにワクワクしないタイプ。<br><br>
だからこそ、自分だけのロジックやルートを編み出していく力に長けていて、まわりが思いつかない方法で問題を突破していける“思考の魔術師”です。<br><br>
ときに「ちょっと変わってる」と言われることもあるかもしれません。<br><br>
でもそれは、あなたが「世界を自分の視点で見ている」証拠であり、そのズレこそが、誰にも真似できない創造力の源なんです。<br><br>
さらにあなたは、人の微妙な変化や空気の温度にも敏感。<br><br>
感情の流れや“まだ言葉になっていない気配”を察知して、必要なときには驚くほど的確なアドバイスを出せる“知的共感力”も備えています。<br><br>
人と群れるのは得意じゃないかもしれないけれど、距離をとりながらも、ちゃんと周囲を見て貢献できるタイプ。<br><br>
あなたの“魔法”は、混乱を恐れずに素材に変えていける強さ。<br><br>
自分の内側で何度も思考することで、独自の世界を築き上げていく。<br><br>
そのスタイルこそが、あなたの知性とクリエイティビティの証です。</p>`
  };
  const customFirstLines = {
  "C": "あなたは、まっすぐに周りを支えるC型。",
  "cm": "あなたは、静かに燃える職人気質のcm型。",
  "D♭": "あなたは、物事を奥深くまで理解するD♭型。",
  "c♯m": "あなたは、新しい世界を創り出すc♯m型。",
  "D": "あなたは、まだ見ぬ未来を切り開くD型。",
  "dm": "あなたは、感情の余白を読み取るdm型。",
  "E♭": "あなたは、バランス感覚に優れたE♭型。",
  "e♭m": "あなたは、人々の共感を描き出すe♭m型。",
  "E": "あなたは、場の雰囲気を明るくするE型。",
  "em": "あなたは、風のように自由気ままなem型。",
  "F": "あなたは、誰にも出せない答えを持つF型。",
  "fm": "あなたは、言葉の余白で心を揺らすfm型。",
  "F♯": "あなたは、理想を設計図に書き起こすF♯型。",
  "f♯m": "あなたは、複雑な世界を楽しめるf♯m型。",
  "G": "あなたは、逃さずチャンスを掴み取るG型。",
  "gm": "あなたは、冷静に真実を追い求めるgm型。",
  "A♭": "あなたは、言語の壁を超えて表現するA♭型。",
  "g♯m": "あなたは、独自の視点で世界を捉えるg♯m型。",
  "A": "あなたは、戦略を立てて勝利に導くA型。",
  "am": "あなたは、誰かの想いを形にできるam型。",
  "B♭": "あなたは、優しくそっと道を指し示すB♭型。",
  "b♭m": "あなたは、相手の気持ちに寄り添うb♭m型。",
  "B": "あなたは、恐れずに本気で向き合うB型。",
  "bm": "あなたは、混沌から正解を見つけ出すbm型。"
};  const compatibleKeys = {
    "C": ["am", "G", "F", "cm"],
    "cm": ["E♭", "gm", "fm", "C"],
    "D♭": ["b♭m", "A♭", "F♯", "c♯m"],
    "c♯m": ["E", "g♯m", "f♯m", "D♭"],
    "D": ["bm", "A", "G", "dm"],
    "dm": ["F", "am", "gm", "D"],
    "E♭": ["cm", "B♭", "A♭", "e♭m"],
    "e♭m": ["F♯", "b♭m", "g♯m", "E♭"],
    "E": ["c♯m", "B", "A", "em"],
    "em": ["G", "bm", "am", "E"],
    "F": ["dm", "C", "B♭", "fm"],
    "fm": ["A♭", "cm", "b♭m", "F"],
    "F♯": ["e♭m", "D♭", "B", "f♯m"],
    "f♯m": ["A", "c♯m", "bm", "F♯"],
    "G": ["em", "D", "C", "gm"],
    "gm": ["B♭", "dm", "cm", "G"],
    "A♭": ["fm", "E♭", "D♭", "g♯m"],
    "g♯m": ["B", "e♭m", "c♯m", "A♭"],
    "A": ["f♯m", "E", "D", "am"],
    "am": ["C", "em", "dm", "A"],
    "B♭": ["gm", "F", "E♭", "b♭m"],
    "b♭m": ["D♭", "fm", "e♭m", "B♭"],
    "B": ["g♯m", "F♯", "E", "bm"],
    "bm": ["D", "f♯m", "em", "B"]
  };  
const famousSongs = {
    "C": [
      //"『チェリー』- スピッツ",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/Eze6-eHmtJg?si=1wYNI3D0gzoydvUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『ありがとう』- いきものがかり",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/VZBU8LvZ91Q?si=EfQtDmfj6FHzox13" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『キセキ』- GReeeeN",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/DwTinTO0o9I?si=36ZFrDzlm4Aj2yyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『silent』- SEKAI NO OWARI",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/03Xa38nfhGw?si=g7IFKQw4qFIOqCBH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『Star』- 星野源",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/SaMza0m209g?si=v2UVECC9-Y_nQRlj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『点描の唄 (feat. 井上苑子)』- Mrs. GREEN APPLE",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/sL-yJIyuEaM?si=byAEysKB8IEMWqKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『カメレオン』- King Gnu"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/BOrdMrh4uKg?si=9dNFGyC9V8aQ2rtY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "cm": [
      //"『残酷な天使のテーゼ』- 高橋洋子",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/o6wtDPVkKqI?si=BhqEj1SFuj2g9Yd7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『ピースサイン』- 米津玄師",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/9aJVr5tTTWk?si=scyVKNE7ifJuKDzO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『APT.』- ROSE & BRUNO MARS",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/ekr2nIex040?si=GzoL0j-D62wLgIxu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『Hachikō』- 藤井 風",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/OodEsjZ88TQ?si=0hVoWQmxbDANU3nH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『風の通り道』- 久石譲",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/-uNNWc0wJiw?si=dTXS6byOicRIQ17U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『Drop』- HANA",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/n2Rywx3g1PM?si=Fj0gjEkB_zi1uMbN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "D♭": [
      //"『若者のすべて』- フジファブリック",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/IPBXepn5jTA?si=bn7acsDGPw2yS4Zm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『天体観測』- BUMP OF CHICKEN",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/j7CDb610Bg0?si=IoDFfa1keY47Cfin" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『アイラブユー』- back number",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/_k0mJYct4UE?si=LL-qqu10JnA6yp-X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『Everything』- MISIA",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/aHIR33pOUv0?si=cJV1sm8YGy1XyM_1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『カタオモイ』- Aimer",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/kxs9Su_mbpU?si=gs6HUZAxaE-2RVFB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『恋人ごっこ』- マカロニえんぴつ"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/323j5BRFi7s?si=vjHRRzPsTIJipI4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "c♯m": [
      //"『クスシキ』- Mrs. GREEN APPLE",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/RCaTLn4qoz4?si=fGVwo-LfGvMY7rEq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『完全感覚Dreamer』- ONE OK ROCK",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/xGbxsiBZGPI?si=0IHMs_dlV2OKNQjr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『阿修羅ちゃん』- Ado",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/cyq5-StPISU?si=2U5OnhMJ_ENIq-rC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『太正浪漫』- YOASOBI",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/wJQ9ig_d8yY?si=ovPOaD7DjC1hHMs5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『火星人』- ヨルシカ"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/OLRbIc8KZ_8?si=xDAqqPi7OxHo_F7_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "D": [
      //"『何なんw』- 藤井 風",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/Nt6ZwuVzOS4?si=ebSY_exeEBekX9Kn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『マリーゴールド』- あいみょん",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/0xSiBpUdW4E?si=Kh-TefqhFvH9s6UP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『怪獣の花唄』- Vaundy",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/UM9XNpgrqVk?si=zFFfSOGC0mV8P0Z-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『ダンスホール』- Mrs. GREEN APPLE",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/x2rvSf0STBM?si=Gs_kdx623eIpdpZj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『花束』- back number"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/meZPD28Y7xE?si=JRpko-0DiUC2stpB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "dm": [
      //"『千本桜』- 黒うさP feat. 初音ミク",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/shs0rAiwsGQ?si=qXGvrzK30o6zfBer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『本能』- 椎名林檎",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/ECxBHhMc7oI?si=YGAoTEJQxg1kENws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『第ゼロ感』- 10-FEET",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/EsJGbHJyXYc?si=3ZuSymVORdxnIrTK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『不可幸力』- Vaundy",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/Gbz2C2gQREI?si=L0i50e2_-QbvaV6-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『UNDEAD』- YOASOBI"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/Jj1_mfUzjOs?si=7qaPYHXbuFEIYy_u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "E♭": [
      //"『カブトムシ』- aiko",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/wp2U40KI63A?si=V0b8Hx-qoJJzof_T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『丸の内サディスティック』- 椎名林檎",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/4tlUwgtgdZA?si=l1FAwpR05LlOY7KP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『115万キロのフィルム』- Official髭男dism",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/ReCnlwVZj1M?si=W1uZU6skIdegaZuE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『ウィーアー！』- きただにひろし",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/r7n-L5B0bBw?si=-URaCTfvthG4CLj9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『猫』- DISH//"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/1KgAear9rao?si=5JQGmrqckPEzFl09" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "e♭m": [
      //"『Subtitle』- Official髭男dism",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/hN5MBlGv2Ac?si=x5STWAOi6WLtgisw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『打上花火』- DAOKO × 米津玄師",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/-tKVN2mAKRI?si=HQKm4L-4pbrE2OSb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『Azalea』- 米津玄師",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/FqWBQv7h_3I?si=E14-FlMDj505oRSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『Monster』- 嵐"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/JedKBJVHhiE?si=cLVTYRMbNmY_oXTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "E": [
      //"『Dynamite』- BTS",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/gdZLi9oWNZg?si=hLhXpGjSRrbQWui6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『青と夏』- Mrs. GREEN APPLE",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/m34DPnRUfMU?si=aM36zlnhWMSnRYTt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『私は最強』- Ado",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/sk1Z-Hqwwog?si=54H_tc0zzk5HmJK9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『Wherever you are』- ONE OK ROCK",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/eoQAnGx4Pss?si=AUnB0J6o_2Fs3EhY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『栄光の架け橋』- ゆず",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/PRJoAPH0ZGo?si=n6mwuvlj-GdmqV04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『RPG』- SEKAI NO OWARI"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/Mi9uNu35Gmk?si=1stJw26qafdekBwk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "em": [
      //"『オトナブルー』- 新しい学校のリーダーズ",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/l446hUqQ7GY?si=WQeyk8DbnNIp38z8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『紅蓮華』- LiSA",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/x1FV6IrjZCY?si=aL-ImS7PPo-3yvhn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『さよーならまたいつか！』- 米津玄師",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/-wb2PAx6aEs?si=IhhgO35m8TnJEaYp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『三文小説』- King Gnu",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/Y8HeOA95UzQ?si=T9gULX2t3-wtfixi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『サウダージ』- ポルノグラフィティ",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/lzsB4eKPdJI?si=Y6VU6NsTfgKj6rlQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『テレパシ』- DECO*27"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/c56TpxfO9q0?si=ZTjLE0WxxAw1XTSH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "F": [
      //"『花火』- aiko",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/iqGHxcTPRfI?si=tMVAR1WUDR7qscHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『パプリカ』- 米津玄師",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/s582L3gujnw?si=DRFcVuhcHwvNn4yW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『宿命』- Official髭男dism",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/-kgOFJG881I?si=VX_nuV1766FihNx6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『アイデア』- 星野源",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/RlUb2F-zLxw?si=xRLyqo1Et48qlNUe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『３月９日』- レミオロメン"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/UNRJyBHziX4?si=mUB09v5WJIS5UafW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "fm": [
      //"『踊』- Ado",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/YnSW8ian29w?si=vyUcISxIYgKeV4-f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『Automatic』- 宇多田ヒカル",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/-9DxpPiE458?si=Wmd2nImj6BGoNGb_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『SAKURA』- いきものがかり",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/61z-cqg28R8?si=0aiMBoAubaYL9QJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『残酷な夜に輝け』- LiSA",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/ysdtX8kRTuQ?si=QhN8wrARf97gneVm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『三原色』- YOASOBI",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/nhOhFOoURnE?si=QBmSohjg-Du3d4IR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    　//"『Bunny Girl』- AKASAKI"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/RCltAg_iK0E?si=4oBkyv8Gw8KerNat" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "F♯": [
      //"『ミックスナッツ』- Official髭男dism",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/CbH2F0kXgTY?si=X8l798LumCPiNDoW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『愛♡スクリ～ム！』- AiScReam",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/L1mFVp9IM9c?si=rtX0ySY2cEKmtplw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『シュガーソングとビターステップ』- UNISON SQUARE GARDEN",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/ERLEeGVWYxg?si=3wjGL1teRk-_7atX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『なんでもないや』- RADWIMPS",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/U21F44aJD0E?si=My8fQi9BEN2mgn9v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『おにごっこ』- 優里"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/m3VnVRHOMZM?si=UTwhNffYsYQkvebg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "f♯m": [
      //"『一途』- King Gnu",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/hm1na9R2uYA?si=OVDr10KeShmvN2US" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『ブルーバード』- いきものがかり",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/KpsJWFuVTdI?si=KdwiCpehxx7mmGAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『かくれんぼ』- 優里",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/7W-6qJnza5w?si=k2jLi1Y5OIe5Irqv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『LOSER』- 米津玄師",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/Dx_fKPBPYUI?si=NYKxOjtPI6Svf5hF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『高嶺の花子さん』- back number"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/SII-S-zCg-c?si=JmTeRZ5DEkLugDkg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "G": [
      //"『新時代』- Ado",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/1FliVTcX8bQ?si=hRmQ7nFldCBmYdOR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『君はロックを聴かない』- あいみょん",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/ARwVe1MYAUA?si=ZpKKEeRwrQxEUmDK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『Magic』- Mrs. GREEN APPLE",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/CN-Ja6jCweA?si=JyOv9EZfr1eR8MRZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『First Love』- 宇多田ヒカル",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/o1sUaVJUeB0?si=LNBq6HLQVM-JYGEp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『ボーイフレンド』- aiko",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/9Jh-FBYGaU4?si=acxczA8ddJSqZj7K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『Family Song』- 星野源",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/Ucbp-Ej5RpI?si=w-DFyKSd_HrgByPA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『Chessboard』- Official髭男dism"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/qo55wGLXcOQ?si=v5Q-qg-QLh-HYlWD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "gm": [
      //"『廻廻奇譚』- Eve",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/1tk1pqwrOys?si=5dDd_RIXptXz_sQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『シャルル』- バルーン",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/TA5OFS_xX0c?si=4Lr-_2jXe6rfzFkl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『勇者』- YOASOBI",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/OIBODIPC_8Y?si=oYzVAfa0d8pF0yPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『神っぽいな』- ピノキオピー",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/EHBFKhLUVig?si=VrCpRCYGLbvTUEI7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "A♭": [
      //"『Pretender』- Official髭男dism",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/TQ8WlA2GXbk?si=E7xKQRpBKfHwEk37" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『Mela!』- 緑黄色社会",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/aRDURmIYBZ4?si=fOb3FebFj72RPaJo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『366日』- HY",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/glsH4Mgxz-g?si=FZPHS-bjyy7O3aGa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『キラキラ』- aiko"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/S0bXDRY1DGM?si=l0chNXtC3JT_0sqa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "g♯m": [
      //"『残響散歌』- Aimer",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/tLQLa6lM3Us?si=xt2IdVihEytbn4hf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『怪物』- YOASOBI",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/dy90tA3TT1c?si=EForXqjuiIO9df_h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『怪獣』- サカナクション",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/a8dgNdJVluc?si=BW6o8k1hlXd1V0Zg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『ちゅ、多様性。』- ano",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/-lec--FlSJ4?si=SOoJjXxDVzTOs4ME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『ルル』- Ado",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/0Z_YqhYHhpg?si=gO337VpQvWir5GPx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『Lemon』- 米津玄師"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/SX_ViT4Ra7k?si=kyLC4iPRZY11hAeu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "A": [
      //"『恋』- 星野源",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/jhOVibLEDhA?si=qRn08rL46aF7e12S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『I Love…』- Official髭男dism",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/bt8wNQJaKAk?si=GZDo7XN8Lpi-L90i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『ロビンソン』- スピッツ",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/51CH3dPaWXc?si=0O0E8LGAUNcVHyQV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『会いに行くのに』- あいみょん",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/iqSspWjCA6s?si=qKdGl7Y7iDZhj_bU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『愛にできることはまだあるかい』- RADWIMPS",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/EQ94zflNqn4?si=S-CGT3FYGSNRcT52" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『シンデレラボーイ』- SaucyDog"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/IVbY5edMfCA?si=A54L64nPwP-5-4MU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "am": [
      //"『Bling-Bang-Bang-Born』- Creepy Nuts",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/mLW35YMzELE?si=T_wGYCt6Ct5iHiOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『Plazma』- 米津玄師",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/fp3F6TqBsAU?si=aCEsT8DXiBOaexCF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『The Beginning』- ONE OK ROCK",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/Hh9yZWeTmVM?si=16BbPq-7IHvzebuU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『太陽が昇らない世界』- Aimer",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/DJOf0XtVpkI?si=JCxioE3OjaEaAFJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『TWILIGHT!!!』- King Gnu",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/qIcIpSyHcyM?si=G06aBDRCX1IVEsN3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『ROSE』- HANA",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/rGPd0FyjQ9w?si=-mA1dfnyDV2B3xdl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『けっかおーらい』- こっちのけんと"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/Ug0N4qGRp_w?si=it53feVbZKBLE1LK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "B♭": [
      //"『ライラック』- Mrs. GREEN APPLE",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/QjrkrVmC-8M?si=jtCsq_PGXl0BzACA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『ひまわりの約束』- 秦基博",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/rKsQ-3N-Bks?si=qajclDEUOYqD1ed2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『新宝島』- サカナクション",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/LIlZCmETvsY?si=-1F9SU-yfxaBp2re" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『群青』- YOASOBI",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/Y4nEEZwckuU?si=0jhF4KRg0T7cUVST" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『水平線』- back number",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/iqEr3P78fz8?si=bVVKYFUOlTwh-WVd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『愛の花』- あいみょん"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/JuyQQUqD64c?si=uIsn1_0XA093zhwd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "b♭m": [
      //"『KICK BACK』- 米津玄師",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/M2cckDmNLMI?si=APlAprwItps_cHNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『Habit』- SEKAI NO OWARI",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/8OZDgBmehbA?si=MQU9nv1Bbo5z6zxx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『青のすみか』- キタニタツヤ",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/zuoVd2QNxJo?si=NZYBJ3mtjAGIhC75" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『花になって』- 緑黄色社会",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/v-WcMQbXbKY?si=4wu_MtnceMbpnPwx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『Vinyl』- King Gnu",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/RLAw8Ct9k48?si=vXCfK9n-2EY31QdK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『さよならエレジー』- 菅田将暉"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/XSkpuDseenY?si=Xnvu7e2Qbl4ukfmu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "B": [
      //"『前前前世』- RADWIMPS",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/PDSkFeMVNFs?si=2vjCcDgQwr6D7j0C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『ソラニン』- ASIAN KUNG-FU GENERATION",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/XNURRmk8YrQ?si=qTLjjDiPz0kDdbxD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『雪の華』- 中島美嘉",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/mF5Qq2YheTg?si=-0x0j_L8XXiKbsFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『恋風』- 幾田りら"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/bWlknrhWjVw?si=6rdrtq_b3-G0TXxh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ],
    "bm": [
      //"『うっせぇわ』- Ado",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/Qp3b-RXtz4w?si=4HYLljom1lpyVXPF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『炎』- LiSA",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/4DxL6IKmXx4?si=DSC8UJ2PjEQC8z2G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『はいよろこんで』- こっちのけんと",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/jzi6RNVEOtA?si=JnFiSrFnPL-vc0Op" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『アポリア』- ヨルシカ",
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/fhTFysCtF6g?si=nLYH7Z0iO-Zb5Nfz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      //"『BOW AND ARROW』- 米津玄師"
        `<iframe width="100%" height="150" src="https://www.youtube.com/embed/M-Eyhjkepy0?si=djAn2jqfPv_FyMkD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ]
}; 

    const displayImageUrls = {
    "C": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/4.webp",
    "cm": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/5.webp",
    "D♭": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/6.webp",
    "c♯m": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/7.webp",
    "D": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/8.webp",
    "dm": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/9.webp",
    "E♭": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/10.webp",
    "e♭m": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/11.webp",
    "E": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/12.webp",
    "em": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/13.webp",
    "F": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/14.webp",
    "fm": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/15.webp",
    "F♯": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/16.webp",
    "f♯m": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/17.webp",
    "G": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/18.webp",
    "gm": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/19.webp",
    "A♭": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/20.webp",
    "g♯m": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/21.webp",
    "A": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/22.webp",
    "am": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/23.webp",
    "B♭": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/24.webp",
    "b♭m": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/25.webp",
    "B": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/26.webp",
    "bm": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeih3cctlhnvhbbyquagajpymxaalobhrmjwd5nhzzb7rkruez2tujy/27.webp"
  };
      const shareImageUrls = {
      "C": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/1.webp",
      "cm": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/2.webp",
      "D♭": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/3.webp",
      "c♯m": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/4.webp",
      "D": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/5.webp",
      "dm": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/6.webp",
      "E♭": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/7.webp",
      "e♭m": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/8.webp",
      "E": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/9.webp",
      "em": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/10.webp",
      "F": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/11.webp",
      "fm": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/12.webp",
      "F♯": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/13.webp",
      "f♯m": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/14.webp",
      "G": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/15.webp",
      "gm": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/16.webp",
      "A♭": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/17.webp",
      "g♯m": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/18.webp",
      "A": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/19.webp",
      "am": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/20.webp",
      "B♭": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/21.webp",
      "b♭m": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/22.webp",
      "B": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/23.webp",
      "bm": "https://gray-magnificent-deer-836.mypinata.cloud/ipfs/bafybeiajlyrjug2azind7u7pwz36f2roqbzwdn5qpqzufzynwptktahqv4/24.webp"
    };
  const questions = [
  {
    "id": "Q1",
    "text": "Q1. SNSで友人が落ち込んでいたら？",
    "options": [
      {"text": "「大丈夫？」とDMで心配する", "points": {"B♭": 3, "b♭m": 1}},
      {"text": "おバカなミームで笑顔にさせる", "points": {"em": 3, "A♭": 1}}, 
      {"text": "直接会う約束をして相談に乗る", "points": {"C": 3, "B": 1}},
      {"text": "ユニークなメッセージで励ます", "points": {"F": 3, "E": 1}} 
    ]
  },
  {
    "id": "Q2",
    "text": "Q2. 週末の空いた時間をどう過ごす？",
    "options": [
      {"text": "新しいスポットを自由に巡る", "points": {"D": 3, "em": 1}},
      {"text": "予定を立てて効率よく楽しむ", "points": {"A": 3, "F♯": 1}},
      {"text": "趣味を極めるために没頭する", "points": {"cm": 3, "g♯m": 1}},
      {"text": "本や動画などで知識を深める", "points": {"dm": 3, "D♭": 1}} 
    ]
  },
  {
    "id": "Q3",
    "text": "Q3. ゲーム中、自分が負けそうになったら？",
    "options": [
      {"text": "戦略を立て直して逆転を狙う", "points": {"B": 3, "G": 1}},
      {"text": "ウケ狙いで派手にプレイする", "points": {"E": 3, "F": 1}},
      {"text": "相手の動きを冷静に分析する", "points": {"gm": 3, "A": 1}},
      {"text": "意外性のある戦法を生み出す", "points": {"bm": 3, "c♯m": 1}}
    ]
  },
  {
    "id": "Q4",
    "text": "Q4. グループチャットで意見が対立したら？",
    "options": [
      {"text": "間に入って仲直りのアシスト", "points": {"E♭": 3, "B♭": 1}},
      {"text": "温かい言葉で空気を和らげる", "points": {"am": 3, "dm": 1}},
      {"text": "別の視点から議論を展開する", "points": {"f♯m": 3, "D": 1}},
      {"text": "的確な意見で皆の賛同を得る", "points": {"G": 3, "C": 1}}
    ]
  },
  {
    "id": "Q5",
    "text": "Q5. 好きなアニメの新シーズン、どう楽しむ？",
    "options": [
      {"text": "物語の奥深さを味わう", "points": {"e♭m": 3, "fm": 1}},
      {"text": "考察をSNSに投稿する", "points": {"c♯m": 3, "bm": 1}},
      {"text": "伏線やテーマ性を分析", "points": {"D♭": 3, "gm": 1}},
      {"text": "情報やグッズを集める", "points": {"g♯m": 3, "cm": 1}}
    ]
  },
  {
    "id": "Q6",
    "text": "Q6. ストレスが溜まった時の解消法は？",
    "options": [
      {"text": "本や音楽で落ち着かせる", "points": {"A♭": 3, "e♭m": 1}},
      {"text": "気持ちを言葉にして残す", "points": {"fm": 3, "am": 1}},
      {"text": "スケジュールを整理する", "points": {"F♯": 3, "E♭": 1}},
      {"text": "友人との会話で気分転換", "points": {"b♭m": 3, "B♭": 1}} 
    ]
  },
  {
    "id": "Q7",
    "text": "Q7. 大事なテストの前日、どう準備する？",
    "options": [
      {"text": "合格への道筋を組み立てる", "points": {"F♯": 4, "A": 1}},
      {"text": "気合いを入れて根性で復習", "points": {"B": 4, "C": 1}},
      {"text": "要点ノートで最終チェック", "points": {"fm": 4, "B": 1}}, 
      {"text": "苦手な部分を徹底的に対策", "points": {"G": 4, "g♯m": 1}}
    ]
  },
  {
    "id": "Q8",
    "text": "Q8. SNSで発信するなら、どんな内容？",
    "options": [
      {"text": "明るい話題で楽しい空気を", "points": {"E": 4, "em": 1}},
      {"text": "個性的な視点でバズを狙う", "points": {"F": 4, "A♭": 1}}, 
      {"text": "直感的に今の気持ちを表現", "points": {"A♭": 4, "fm": 1}}, 
      {"text": "オシャレな写真と短い文章", "points": {"e♭m": 4, "am": 1}}
    ]
  },
  {
    "id": "Q9",
    "text": "Q9. 家族が大きな決断で悩んでいたら？",
    "options": [
      {"text": "話を聞いて選択肢をまとめる", "points": {"B♭": 4, "E♭": 1}},
      {"text": "全力で勇気づけて背中を押す", "points": {"C": 4, "D": 1}},
      {"text": "新たな可能性を見つけて応援", "points": {"em": 4, "b♭m": 1}}, 
      {"text": "的確なアドバイスでサポート", "points": {"gm": 4, "G": 1}}
    ]
  },
  {
    "id": "Q10",
    "text": "Q10. 新しいゲームを始めるなら、どう遊ぶ？",
    "options": [
      {"text": "攻略法を予習して完璧に", "points": {"cm": 4, "F♯": 1}},
      {"text": "背景や設定をよく調べる", "points": {"D♭": 4, "f♯m": 1}},
      {"text": "自由にプレイして楽しむ", "points": {"D": 4, "E": 1}},
      {"text": "独自ルールで縛って挑む", "points": {"c♯m": 4, "bm": 1}} 
    ]
  },
  {
    "id": "Q11",
    "text": "Q11. チームで動く時のあなたの役割は？",
    "options": [
      {"text": "流れを予測してゴールに導く", "points": {"A": 4, "gm": 1}},
      {"text": "異なる意見を認めて調整する", "points": {"E♭": 4, "B♭": 1}},
      {"text": "新しい提案をして課題を突破", "points": {"f♯m": 4, "F": 1}}, 
      {"text": "メンバーの気持ちに寄り添う", "points": {"b♭m": 4, "dm": 1}}
    ]
  },
  {
    "id": "Q12",
    "text": "Q12. タイムマシンがあったら、どこに行く？",
    "options": [
      {"text": "大昔の謎を解きに行く", "points": {"dm": 4, "D♭": 1}},
      {"text": "未来の都市を見に行く", "points": {"bm": 4, "c♯m": 1}},
      {"text": "思い出深い場所に行く", "points": {"g♯m": 4, "cm": 1}},
      {"text": "感動のあの瞬間に行く", "points": {"am": 4, "e♭m": 1}} 
    ]
  }
];
