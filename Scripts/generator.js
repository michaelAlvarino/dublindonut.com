$(document).ready(function() {

	var nouns = "ball,bat,bed,book,boy,bun,can,cake,cap,car,cat,cow,cub,cup,dad,day,dog,doll,dust,fan,feet,girl,gun,hall,hat,hen,jar,kite,man,map,men,mom,pan,pet,pie,pig,pot,rat,son,sun,toe,tub,van,apple,arm,banana,bike,bird,book,chin,clam,class,clover,club,corn,crayon,crow,crown,crowd,crib,desk,dime,dirt,dress,fang,field,flag,flower,fog,game,heat,hill,home,horn,hose,joke,juice,kite,lake,maid,mask,mice,milk,mint,meal,meat,moon,mother,morning,name,nest,nose,pear,pen,pencil,plant,rain,river,road,rock,room,rose,seed,shape,shoe,shop,show,sink,snail,snake,snow,soda,sofa,star,step,stew,stove,straw,string,summer,swing,table,tank,team,tent,test,toes,tree,vest,water,wing,winter,woman,women,alarm,animal,aunt,bait,balloon,bath,bead,beam,bean,bedroom,boot,bread,brick,brother,camp,chicken,children,crook,deer,dock,doctor,downtown,drum,dust,eye,family,father,fight,flesh,food,frog,goose,grade,grandfather,grandmother,grape,grass,hook,horse,jail,jam,kiss,kitten,light,loaf,lock,lunch,lunchroom,meal,mother,notebook,owl,pail,parent,park,plot,rabbit,rake";

	var adjectives = "adorable,beautiful,clean,drab,elegant,fancy,glamorous,handsome,long,magnificent,old-fashioned,plain,quaint,sparkling,ugliest,unsightly,wide-eyed,red,orange,yellow,green,blue,purple,gray,black,white,alive,better,careful,clever,dead,easy,famous,gifted,helpful,important,inexpensive,mushy,odd,powerful,rich,shy,tender,uninterested,vast,wrong,angry,bewildered,clumsy,defeated,embarrassed,fierce,grumpy,helpless,itchy,jealous,lazy,mysterious,nervous,obnoxious,panicky,repulsive,scary,thoughtless,uptight,worried,agreeable,brave,calm,delightful,eager,faithful,gentle,happy,jolly,kind,lively,nice,obedient,proud,relieved,silly,thankful,victorious,witty,zealous,broad,chubby,crooked,curved,deep,flat,high,hollow,low,narrow,round,shallow,skinny,square,steep,straight,wide,big,colossal,fat,gigantic,great,huge,immense,large,little,mammoth,massive,miniature,petite,puny,scrawny,short,small,tall,teeny,teeny-tiny,tiny,cooing,deafening,faint,hissing,loud,melodic,noisy,purring,quiet,raspy,screeching,thundering,voiceless,whispering";

	var adverbs = "abnormally,absentmindedly,accidentally,acidly,actually,adventurously,afterwards,almost,always,angrily,annually,anxiously,arrogantly,awkwardly,fairly,faithfully,famously,far,fast,fatally,ferociously,fervently,fiercely,fondly,foolishly,fortunately,frankly,frantically,freely,frenetically,frightfully,fully,furiously,keenly,kiddingly,kindheartedly,kindly,kissingly,knavishly,knottily,knowingly,knowledgeably,kookily,painfully,partially,patiently,perfectly,physically,playfully,politely,poorly,positively,potentially,powerfully,promptly,properly,punctually,lazily,less,lightly,likely,limply,lively,loftily,longingly,loosely,lovingly,loudly,loyally,quaintly,quarrelsomely,queasily,queerly,questionably,questioningly,quicker,quickly,quietly,quirkily,quizzically,ultimately,unabashedly,unaccountably,unbearably,unethically,unexpectedly,unfortunately,unimpressively,unnaturally,unnecessarily,utterly,upbeat,upliftingly,upright,upside-down,upward,upwardly,urgently,usefully,uselessly,usually,utterly,badly,bashfully,beautifully,bitterly,bleakly,blindly,blissfully,boastfully,boldly,bravely,briefly,brightly,briskly,broadly,busily,generally,generously,gently,gladly,gleefully,gracefully,gratefully,greatly,greedily,calmly,carefully,carelessly,cautiously,certainly,cheerfully,clearly,cleverly,closely,coaxingly,colorfully,commonly,continually,coolly,correctly,courageously,crossly,cruelly,curiously,happily,hastily,healthily,heavily,helpfully,helplessly,highly,honestly,hopelessly,hourly,hungrily,vacantly,vaguely,vainly,valiantly,vastly,verbally,very,viciously,victoriously,violently,vivaciously,voluntarily,madly,majestically,meaningfully,mechanically,merrily,miserably,mockingly,monthly,more,mortally,mostly,mysteriously,rapidly,rarely,readily,really,reassuringly,recklessly,regularly,reluctantly,repeatedly,reproachfully,restfully,righteously,rightfully,rigidly,roughly,rudely,warmly,weakly,wearily,well,wetly,wholly,wildly,willfully,wisely,woefully,wonderfully,worriedly,wrongly,daily,daintily,dearly,deceivingly,delightfully,deeply,defiantly,deliberately,delightfully,diligently,dimly,doubtfully,dreamily,immediately,innocently,inquisitively,instantly,intensely,intently,interestingly,inwardly,irritably,naturally,nearly,neatly,needily,nervously,never,nicely,noisily,not,easily,elegantly,energetically,enormously,enthusiastically,equally,especially,even,evenly,eventually,exactly,excitedly,extremely,jaggedly,jealously,joshingly,joyfully,joyously,jovially,jubilantly,judgementally,justly,obediently,obnoxiously,oddly,offensively,officially,often,only,openly,optimistically,overconfidently,owlishly,shrilly,shyly,silently,sleepily,slowly,smoothly,softly,solemnly,solidly,sometimes,soon,speedily,stealthily,sternly,strictly,successfully,suddenly,surprisingly,suspiciously,sweetly,swiftly,sympathetically,yawningly,yearly,yearningly,yesterday,yieldingly,youthfully";

	var starter = "You are a,You have a, Your butt is like a";

	var colors = "lightblue,orange,lightpink,lightgreen,purple"

	var nounArray = nouns.split(",");
	var adjArray = adjectives.split(",");
	var advArray = adverbs.split(",");
	var staArray = starter.split(",");
	var colArray = colors.split(",");

	var nLen = nounArray.length;
	var adjLen = adjArray.length;
	var advLen = advArray.length;
	var sLen = staArray.length;
	var cLen = colArray.length;

	var wow = Math.random();
	var temp = "wow";

	function vowel(string){
		if((string[0] == "a") || (string[0] == "e") || (string[0] == "i") || (string[0] == "o") || (string[0] == "u")){
			return staArray[Math.floor(Math.random()*sLen)] + "n ";
		}
		return staArray[Math.floor(Math.random()*sLen)] + " ";
	}

	$('.clicker').on("click",function(){

		insult = advArray[Math.floor(Math.random()*advLen)]+" " + adjArray[Math.floor(Math.random()*adjLen)] + " " + nounArray[Math.floor(Math.random()*nLen)];

		temp = colArray[Math.floor(Math.random()*cLen)];
		$('.generator').css("background-color",temp);
		$('.clicker-main').css('background-color',temp);

		$('.insult-text').text(vowel(insult) + insult);

	});

});