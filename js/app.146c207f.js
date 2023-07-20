(function(){"use strict";var t={4168:function(t,e,a){var i=a(8935),n=a(4549),s=a.n(n),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("HelloWorld")],1)},r=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"font-family":"Times New Roman"},attrs:{id:"building"}},[i("div",{staticClass:"content"},[i("el-row",[i("el-col",[i("el-card",{staticClass:"box-card",attrs:{shadow:"always"}},[i("div",{staticStyle:{"text-align":"center!important"}},[i("h1",[t._v("Subject-Diffusion: Open Domain Personalized Text-to-Image ")]),i("h1",[t._v("Generation without Test-time Fine-tuning")])]),i("el-row",{staticClass:"row-bg",staticStyle:{"font-size":"medium","text-align":"center"},attrs:{type:"flex",justify:"center"}},[i("el-col",{attrs:{span:5}},[i("p",[i("strong",[t._v("Jian Ma ")])]),i("p",[t._v("OPPO Research Institute")]),i("p",[t._v("majian2@oppo.com")])]),i("el-col",{attrs:{span:5}},[i("p",[i("strong",[t._v(" Junhao Liang")])]),i("p",[t._v("OPPO Research Institute")]),i("p",[t._v("liangjunhao1@oppo.com")])]),i("el-col",{attrs:{span:5}},[i("p",[i("strong",[t._v(" Chen Chen ")])]),i("p",[t._v("OPPO Research Institute")]),i("p",[t._v("chenchen4@oppo.com")])]),i("el-col",{attrs:{span:5}},[i("p",[i("strong",[t._v("Haonan Lu")])]),i("p",[t._v(" OPPO Research Institute")]),i("p",[t._v("luhaonan@oppo.com")])])],1),i("el-row",{staticClass:"row-bg",staticStyle:{"text-align":"center"},attrs:{type:"flex",justify:"center"}},[i("el-col",{attrs:{span:4}},[i("a",{staticStyle:{"font-size":"30px",color:"#224b8d"},attrs:{target:"_blank"}},[t._v("Paper")])]),i("el-col",{attrs:{span:6}},[i("a",{staticStyle:{"font-size":"30px",color:"#224b8d"},attrs:{href:"https://github.com/OPPO-Mente-Lab/Subject-Diffusion",target:"_blank"}},[t._v("Code")])]),i("el-col",{attrs:{span:4}},[i("a",{staticStyle:{"font-size":"30px",color:"#224b8d"},attrs:{target:"_blank"}},[t._v("Demo")])])],1),i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("img",{staticStyle:{"object-fit":"contain",width:"80%","margin-top":"10px"},attrs:{src:a(7892)}})])],1)],1)],1)],1),i("div",{staticClass:"content"},[i("el-row",[i("el-col",[i("el-card",{staticClass:"box-card",attrs:{shadow:"always"}},[i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("h1",[t._v("Abstract ")])]),i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("el-col",[i("div",{staticStyle:{"font-size":"24px","text-align":"justify"}},[t._v(" "+t._s(t.AbstractText)+" ")])])],1)],1)],1)],1)],1),i("div",{staticClass:"content"},[i("el-row",[i("el-col",[i("el-card",{staticClass:"box-card",attrs:{shadow:"always"}},[i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("h1",[t._v("Qualitative Results")])]),i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("h2",[t._v("Single-subject Generation")])]),i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("img",{staticStyle:{"object-fit":"contain",width:"80%","margin-top":"10px"},attrs:{src:a(5388)}})]),i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("h2",[t._v("Multi-subject Generation")])]),i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("img",{staticStyle:{"object-fit":"contain",width:"80%","margin-top":"10px"},attrs:{src:a(3592)}})]),i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("h2",[t._v("Human Image Generation")])]),i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("img",{staticStyle:{"object-fit":"contain",width:"80%","margin-top":"10px"},attrs:{src:a(3310)}})]),i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("h2",[t._v("Text-image Interpolation")])]),i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("img",{staticStyle:{"object-fit":"contain",width:"80%","margin-top":"10px"},attrs:{src:a(3393)}})])],1)],1)],1)],1),i("div",{staticClass:"content"},[i("el-row",[i("el-col",[i("el-card",{staticClass:"box-card",attrs:{shadow:"always"}},[i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("h1",[t._v("Approach")])]),i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("h2",[t._v("Training Data Generation")])]),i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("el-col",[i("div",{staticStyle:{"font-size":"24px","text-align":"justify"}},[t._v(" The process of generating training data involves the following steps: (a) We utilize BLIP-2 to provide a caption for the input image, and spaCy is then applied to extract tags based on each word's part of speech in the caption sentence. (b) The extracted tags are utilized as input to Grounding DINO to obtain detection boxes for each object, which are then used as prompts for SAM to acquire the respective object masks. (c) All modalities are eventually combined into structured data to generate our multimodal dataset. ")])])],1),i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("img",{staticStyle:{"object-fit":"contain",width:"80%","margin-top":"10px"},attrs:{src:a(5453)}})]),i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("h2",[t._v("Model Design")])]),i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("el-col",[i("div",{staticStyle:{"font-size":"24px","text-align":"justify"}},[t._v(" Here is an overview of the proposed Stable Diffusion-based Subject-Diffusion method. The process entails multiple steps. Firstly, for the image latent part, we concatenate the image mask "),i("img",{staticStyle:{"object-fit":"contain"},attrs:{src:a(7709)}}),t._v(" to the image latent feature "),i("img",{staticStyle:{"object-fit":"contain"},attrs:{src:a(7540)}}),t._v(" . In the case of multiple subjects, the multi-subject image mask is superimposed. We then use the combined latent feature "),i("img",{staticStyle:{"object-fit":"contain"},attrs:{src:a(7240)}}),t._v(" as input to the UNet. Next, we construct a special prompts template for the text condition part. Then, at the embedding layer of the text encoder, the cls embedding of the segmented image replaces the corresponding token embedding. Furthermore, we apply the regular control to the cross-attention map of these embeddings and the shape of the actual image segmentation map. Finally, in the fusion part, the patch embedding of the segmented image and bounding box coordinate information are integrated and trained as a separate layer of the UNet. ")])])],1),i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("img",{staticStyle:{"object-fit":"contain",width:"80%","margin-top":"10px"},attrs:{src:a(6241)}})])],1)],1)],1)],1),i("div",{staticClass:"busuanzi"},[i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("span",{staticStyle:{display:"none"},attrs:{id:"busuanzi_container_site_pv"}},[t._v(" 本站总访问量 "),i("span",{attrs:{id:"busuanzi_value_site_pv"}}),t._v("次 "),i("span",{staticClass:"post-meta-divider"},[t._v("|")])]),i("span",{staticStyle:{display:"none"},attrs:{id:"busuanzi_container_site_uv"}},[t._v(" 本站访客数 "),i("span",{attrs:{id:"busuanzi_value_site_uv"}}),t._v("人 ")])])],1)])},c=[],h=a(6166),g=a.n(h),d={name:"showEntity",props:{msg:String},components:{},data(){return{autoResize:!0,fillBox:!1,col:6,imgsArr:[],imgsArrDisplay:[],Options:{inline:!1,button:!0,navbar:!1,title:!0,toolbar:!0,tooltip:!0,movable:!0,zoomable:!0,rotatable:!0,scalable:!0,transition:!0,fullscreen:!1,keyboard:!0,url:"data-source"},viewer:"",swiperImageList1:[],swiperShow:!1,tittleText:"",labelDisplay:!0,selectTab:"4",inputQuery:"熊猫在吃竹子",options:[{value:"2",label:"主题"},{value:"4",label:"壁纸"},{value:"12",label:"动态壁纸"},{value:"10",label:"视频铃声"}],loading:!1,componentKey:0,sliceIndex:0,imgPart1:[],imgPart2:[],imgEN0:[],imgEN1:[],infoMap:{"一辆汽车的侧面贴着“速度”":'"Speed" is pasted on the side of a car',"图书馆墙壁上贴着“请勿涂鸦”的标语":'There are slogans on the walls of the library that say "No Graffiti"',"“秋天来了”写在漂浮在湖面上的秋叶上":'"Autumn Comes" is written on autumn leaves floating on the lake',"一个手绘的菠萝形状的木制“菠萝俱乐部”标志，悬挂在酒吧外":'A hand-painted wooden "Pineapple Club" logo in the shape of a pineapple hung outside the bar',"一个红包,写了“新春快乐”的祝福":'A red envelope with the blessing of "Happy New Year"',"一件t恤，上面写着“没有行星”":'A T-shirt that says "No Planet"',"一只猫在读一本书，书的标题是“捉鼠大法”":'A cat is reading a book entitled "The Great Method of Catching Rats"',"一只猫在读一本书，标题是“捉鼠大法”":'A cat is reading a book entitled "The Great Method of Catching Rats"',"一辆车上写着“速度”的标语":'A car has a slogan with "speed" written on it',"书店里贴了“请勿涂鸦”的告示":'A notice "No Graffiti" was posted in the bookstore',"书店里贴了“请勿涂鸦”的告示 ":'A notice "No Graffiti" was posted in the bookstore',"图书馆里挂着“勿扰”的门牌":'There is a "Don\'t Disturb" sign hanging in the library',"在停车场里，一张写着“禁止停车”的牌子":'In the parking lot, a sign says "No Parking"',"在医院里，一张写着“请勿打扰”的牌子":'In the hospital, a sign says "Don\'t Disturb"',"在博物馆里，一块写着“禁止用闪光灯”的标牌":'In the museum, a sign says "No Flashing"',"博物馆里，展柜里有一个标记为“月亮岩”的标志":'In the museum, there is a sign labeled "Moon Rock" in the display cabinet',"在图书馆，一张写着“请勿喧哗”的标牌":'In the library, there is a sign that says "No Noise"',"在展览馆里，一张写着“请勿触摸”的标牌":'In the exhibition hall, a sign says "Do Not Touch"',"在火车站，一张写着“请排队购票”的牌子":'At the railway station, there is a sign saying "Please queue up to buy tickets"',"在火车站，一张写着“请排队购票”的牌子 ":'At the railway station, there is a sign saying "Please queue up to buy tickets"',"在超市里，一张写着“请勿触摸”的标识":'In a supermarket, a sign says "Do Not Touch"',"在音乐会现场，“摇滚”字样":'At the concert site, the words "rock"',"小乌龟举着牌子，上面显示“我要爬山”":'The little turtle held up a sign that said, "I want to climb the mountain."',"小乌龟举着牌子，上面显示“我要爬山” ":'The little turtle held up a sign that said, "I want to climb the mountain."',"小乌龟举着牌子，显示“我要爬山”  ":'The little turtle held up a sign that said, "I want to climb the mountain."',"小乌龟举着牌子，显示“我要爬山”":'The little turtle held up a sign that said, "I want to climb the mountain."',"小松鼠举着牌子，上面显示“我要储存粮食”":'The little squirrel held up a sign that said, "I want to store grain."',"小浣熊拿着牌子,“我要学习”":'The little raccoon held the sign and said, "I want to learn."',"小浣熊杯子上印着“浣”":'"Huan" is printed on the little raccoon cup',"小浣熊盯着“深度学习”思考着未来":'Little Raccoon Stares at "Deep Learning" Thinking about the Future',"小海豚举着牌子，上面显示“我要游泳”":'The little dolphin held up a sign that said, "I want to swim."',"小狐狸举着牌子，上面写着“我要食物”":'The little fox held up a sign that said, "I want food."',"小猫咪举着牌子，上面显示“我要吃鱼”":'Kitty holds up a sign that says "I want to eat fish"',"小猫咪举着牌子，上面显示“我要吃鱼”。":'The kitten held up a sign that said, "I want to eat fish.".',"小猴子举着牌子，上面写着“我要果子”":'The little monkey held up a sign that said, "I want fruit."',"小蜜蜂举着牌子，上面显示“我要采花”":'The little bee held up a sign that said, "I want to pick flowers."',"小鹿举着牌子，上面显示“我要奔跑”":'The deer held up a sign that said, "I want to run."',"校园里，一块写着“禁止乱扔垃圾”的标语":'On campus, a sign reads "No Littering"',"桌子上有本书，标题是“花园里的女孩”":'There is a book on the table entitled "The Girl in the Garden"',"海边有一个刻着“北戴河”的石碑":'There is a stone tablet engraved with "Beidaihe" on the seashore',"草地上贴着“禁止踩踏”的标识":'"No Treading" signs are pasted on the grass',"街边的路牌，内容显示“天道酬勤”":'A street sign displaying "Heavenly Way Rewards Diligence"',"课堂上，黑板上写着“知识改变命运”这句话":'In class, the sentence "knowledge changes fate" is written on the blackboard',"赌场门口挂着“拒绝赌博”的禁止牌":'There is a "No Gambling" sign hanging outside the casino',"这个垃圾桶上写着“环境保护”的字样":'The words "environmental protection" are written on this trash can',"这个旅行箱上写着“轻松出行”的字样":'The words "Easy Travel" are written on this suitcase',"这本书上写着“智慧启迪”的标语":'The book has a slogan "Wisdom and Enlightenment" written on it',"酒店里贴着“请勿打扰”的门牌":'There is a "Do Not Disturb" sign posted in the hotel',"饭盒上写了“健康饮食”的字样":'The words "healthy eating" are written on the lunch box',"No Picnics_ signs hang in the park73":'"No Picnics_ signs hang in the park',"Safety First_ slogan printed on school bus308":'"Safety First_ slogan printed on school bus',"A _No Smoking_ sign is placed in the hotel514":"A _No Smoking_ sign is placed in the hotel","a close up of a figurine of toothpaste tube, a 3D render, candy pastel, with text _brush your teeth_ on the tube107":"a close up of a figurine of toothpaste tube, a 3D render, candy pastel, with text _brush your teeth_ on the tube","A hand painted wooden _Pineapple Club_ sign in the shape of a pineapple, hanging outside a bar":"A hand painted wooden _Pineapple Club_ sign in the shape of a pineapple, hanging outside a bar","Kitten holding a sign that reads _I want fish_8":"Kitten holding a sign that reads _I want fish_","Little raccoon holding a sign that reads _I want to learn_225":"Little raccoon holding a sign that reads _I want to learn_","Photo of the restaurant _Gas Station_432":"Photo of the restaurant _Gas Station_","Play Fair Play_ sign on golf course326":'"Play Fair Play_ sign on golf course',"a 3d model of a 1980s-style computer with the text _my old habit_ on the screen85":"a 3d model of a 1980s-style computer with the text _my old habit_ on the screen","A brain sculpture made of wire and paper with _deep thoughts_ written in brain material345":"A brain sculpture made of wire and paper with _deep thoughts_ written into the material of the brain","A photographer wears a t-shirt with the word _Lens_ printed on it258":"A photographer wears a t-shirt with the word _Lens_ printed on it","A pink bottle that says _LOVE_220":"A pink bottle that says _LOVE_","a sign that reads _no dogs_ but with a dog smiling and wagging its tail1":"a sign that reads _no dogs_ but with a dog smiling and wagging its tail","A t-shirt with the message _There is no planet B_ written on it":"A t-shirt with the message _There is no planet B_ written on it.","A vintage image of the Las Vegas Strip with the words _Las Vegas_ in bold print131":"A vintage image of the Las Vegas Strip with the words _Las Vegas_ in bold print","An antique bottle labeled _Energy Tonic_":"An antique bottle labeled _Energy Tonic_.","Bananas arranged on a picnic table to form the message _That’s bananas_120":"Bananas arranged on a picnic table to form the message _That’s bananas!_","Little raccoon holding a bookmark that says _I love to read_240":"Little raccoon holding a bookmark that says _I love to read_","Minimal sculpture of word _this is the future_ made from light metallic iridescent chrome thin wire, 3-D 20 render, isom205":"Minimal sculpture of word _this is the future_ made from light metallic iridescent chrome thin wire, 3-D 20 render, isometric perspective, ultra-detailed, dark background.","On the campus, a sign that reads _No littering_30":"On the campus, a sign that reads _No littering_","photo of a sign with _one way_14":"photo of a sign with _one way_","There is a _Do Not Disturb_ sign in the hotel81":"There is a _Do Not Disturb_ sign in the hotel","T-shirt with the word _Dream_ printed on it42":"T-shirt with the word _Dream_ printed on it"},modelDesignsText:"",AbstractText:"The recent achievements in subject personalized image generation models based on diffusion models have been significant. However, progress in open-domain and non-fine-tuned personalized image generation has been relatively slow. In this paper, we propose Subject-Diffusion, a new open-domain personalized image generation model that not only does not require fine-tuning but also only needs a single reference image to support personalized generation of single or double subject in any domain. Firstly, we construct an automatic data labeling tool and use the LAION-Aesthetics dataset to construct 76M structured text descriptions and corresponding detection and segmentation images of subjects. Secondly, we design a new unified framework that combines text and image semantics to maximize subject fidelity and generalization, and adopt an attention control mechanism to support multi-subject generation. Our objective metric results currently outperform other model frameworks on the DreamBench data. Furthermore, to demonstrate the generality of our model, we propose more universal validation data. "}},mounted(){a(868);window.addEventListener("scroll",this.scrolling)},methods:{scrolling(){let t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.scrollHeight||document.body.scrollHeight;t/e>.7&&this.getData()},getData(){this.loading=!0,this.imgsArrDisplay=this.imgsArrDisplay.concat(this.imgsArr.slice(this.sliceIndex-50,this.sliceIndex)),this.sliceIndex+=50,console.log(this.imgsArrDisplay.length),this.loading=!1},loadmore(){this.loading=!0,setTimeout((()=>{this.imgsArrDisplay=this.imgsArrDisplay.concat(this.imgsArr.slice(this.sliceIndex-50,this.sliceIndex)),this.sliceIndex+=50,this.loading=!1,console.log(this.imgsArrDisplay.length)}),1e3)},scrollFn(){},imgClick(t){console.log(t),this.$viewer.full(),this.viewer.view(t)},inited(t){this.$viewer=t,this.viewer=t},selectChange(t){console.log(t)},onSubmit(){this.loading=!0,g()({method:"post",url:"/api/rongzhi-topic-image/topic-image/analysis/text/list",data:JSON.stringify({tab:this.selectTab,query:this.inputQuery,topk:2e3}),headers:{"Content-Type":"application/json;charset=UTF-8"}}).then((t=>{if(console.log(t),200==t.data.code){for(var e of(this.imgsArr=[],this.swiperImageList1=[],this.imgsArrDisplay=[],this.sliceIndex=50,t.data.data))-1!=e["id"]&&(this.imgsArr.push({url:e["url"],info:e["distance"],id:e["id"]}),this.swiperImageList1.push(e["url"]));this.getData(),this.$nextTick((()=>{}))}else this.$message({showClose:!0,message:t.data.msg,type:"error"}),this.loading=!1;this.loading=!1}))}}},p=d,u=a(1001),f=(0,u.Z)(p,l,c,!1,null,null,null),m=f.exports,b={name:"App",components:{HelloWorld:m}},w=b,y=(0,u.Z)(w,o,r,!1,null,null,null),A=y.exports;i["default"].config.productionTip=!1,i["default"].use(s()),document.title="展示",new i["default"]({render:t=>t(A)}).$mount("#app")},3310:function(t,e,a){t.exports=a.p+"img/human_viz.1ccd982a.png"},7709:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAXpJREFUOE+11D9I1VEUwPHPm4WairTGGgLBLdOWWhoiQcOMghAiEJQEo6mlXCyDBilByM2mICKIpqDnEA621CAOhSC2RIFTUEtx4Dy4BvIez593+XHOPb/vOff8q9mHUyuYT9Cd8jTq7foroZcxjrM4jq9VQIPxCZ043C4w/isjPYotvMZgVdB4/gvcweOqoPdxD/1YqQoaUQ7gIP5UBd3EOs7vBVgW6iTW8AB3q4JOYg7DeFkV9E02/TFsVwX9jbcYwhKuJ7gn9e8wiqeYQIxxdMtsdssqbjeCieaPsXyfhg+xjN40CP05/MUrXEp9yL/QUcgn8KUs1AY+JLArHcR9RBNOFnAh90GkKPo4XhNL53R+DzRasTGmF3EjAVGw8txCH66lMibvShY1VFM4havl85vV5Tk+41EazuMbZlL+iEUcyYjr5ULZDf4TNzOnYfMdY4Uc+T2T6TuEH61AY3xHCo//y+HwWaYgumDH6muWhpbvW4m0ZVjD8B9PYEkWE2I3WAAAAABJRU5ErkJggg=="},7540:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAVCAYAAABPPm7SAAAAAXNSR0IArs4c6QAAARpJREFUOE/t078rRmEYxvHPuyiTQQaK/NiwyKIM2CmDUAxsymCRlT/BpIwGUf4HUUY/BlFKsjAZTFa6356jp5wznN7VU6fTec5zfe/rXPd9GlpcjRb1/gH+ZDCMRXxiPwX8nfbOygLPQxzFfXZoDx3owXJVt3JAVFrFMcaxgDkEuHJVtbEPT2gvUYazi3SVzkEb7jBSUTaczlQBenGJwQpxhPyALnzEmfwTJnCCgUwcGUSAK7jFFybT+6aLAjCGK+ziGjcIN0dYwkvW0k0cFEUKwCnOMYSdzMEGDrPnN0zhOQdMYxbbaXMeW1jHaybuT84683zq/I1rCEeR1e901gFE/2PFPQBNbR1AN94TJGbksS6gdDTqOCgF/ADiRi4WUlsyAgAAAABJRU5ErkJggg=="},7240:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAAAXNSR0IArs4c6QAAAWBJREFUOE+d1D9LHFEUBfDffoBUVkFSCP5rYqGVnTY2YgpB06QSTMBGBFFQJAbxC4QQDMHOJIRACgOKCLpaGAuxDKjYKYHkE6SK3GVGXoZdNrMHppjhnvPOu/fcqSiHEezhEW6CWinHt4qX6MR1KwLbeIDh/OCyDm6xjretCPTgBL343YrAAvrwLO1bmSvsYgsfmgkM4QI/s8InOMUyZotTKzrYxFRWNIk/mMZYo3GnAu/wEOfoT0jh4Nv/CEzgS1IYgYm0hauGaNTErzjAm2ZJrSewhmPsNyPXi/InHGEjIXfjMnk/xCtUiwKf8bRwahR/x1Ly/W+Wxhj1/TbOYBFtOMuegYyUL07kI/AezxFC1ehBkMLOY7TjNcaziUQWcsRUYp0DOxjNHYTyL/xIiuNb7Y4FhLsVRKxrKLMLUR+2/+GUERjER3SkrsoIzCFiHU29QlfZK7zAfPY/jBzUGnoHdBk9FxSZB78AAAAASUVORK5CYII="},5388:function(t,e,a){t.exports=a.p+"img/single_viz.25f0b434.png"},3592:function(t,e,a){t.exports=a.p+"img/two_viz.6f40cc33.png"},7892:function(t,e,a){t.exports=a.p+"img/图片1.4abf816b.png"},3393:function(t,e,a){t.exports=a.p+"img/图片2.f9b986b1.png"},5453:function(t,e,a){t.exports=a.p+"img/图片3.6b36ac9f.png"},6241:function(t,e,a){t.exports=a.p+"img/图片4.d7b93e16.png"}},e={};function a(i){var n=e[i];if(void 0!==n)return n.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,i,n,s){if(!i){var o=1/0;for(h=0;h<t.length;h++){i=t[h][0],n=t[h][1],s=t[h][2];for(var r=!0,l=0;l<i.length;l++)(!1&s||o>=s)&&Object.keys(a.O).every((function(t){return a.O[t](i[l])}))?i.splice(l--,1):(r=!1,s<o&&(o=s));if(r){t.splice(h--,1);var c=n();void 0!==c&&(e=c)}}return e}s=s||0;for(var h=t.length;h>0&&t[h-1][2]>s;h--)t[h]=t[h-1];t[h]=[i,n,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/subject-diffusion.github.io/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,s,o=i[0],r=i[1],l=i[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(l)var h=l(a)}for(e&&e(i);c<o.length;c++)s=o[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(h)},i=self["webpackChunkclip_zsc_front"]=self["webpackChunkclip_zsc_front"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(4168)}));i=a.O(i)})();
//# sourceMappingURL=app.146c207f.js.map