function lib_bwcheck(){  //Browsercheck (needed)
    this.ver=navigator.appVersion
    this.agent=navigator.userAgent
    this.dom=document.getElementById?1:0
    this.opera5=this.agent.indexOf("Opera 5")>-1
    this.ie5=(this.ver.indexOf("MSIE 5")>-1 && this.dom && !this.opera5)?1:0;
    this.ie6=(this.ver.indexOf("MSIE 6")>-1 && this.dom && !this.opera5)?1:0;
    this.ie4=(document.all && !this.dom && !this.opera5)?1:0;
    this.ie=this.ie4||this.ie5||this.ie6
    this.mac=this.agent.indexOf("Mac")>-1
    this.ns6=(this.dom && parseInt(this.ver) >= 5) ?1:0;
    this.ns4=(document.layers && !this.dom)?1:0;
    this.bw=(this.ie6 || this.ie5 || this.ie4 || this.ns4 || this.ns6 || this.opera5)
    return this
}
var bw=new lib_bwcheck()
var oWin=new Array; oWin.zIndex=10; oWin.dragobj=-1; oWin.resizeobj=-1; oWin.zIndex=100
oWin.bordercolor="#935591"  //���̾��׵θ��÷�
oWin.bgcolor="#a1d545"  //���̾�1����÷�
oWin.bgcoloron="#76ab1a"  //�巹�׽ù���÷�
oWin.bgscroll="#C1A9C0"  //��ũ�ѹ���÷�
oWin.bottomh=10 //The height of the bottom "border"
oWin.headh=15 //The height of the head "border"
oWin.bordersize=1 //The left and right bordersize
oWin.scrollw=13 //The width of the scroll area
oWin.scrollimgh=12 //The width of the scroll images
oWin.buttonsw=39 //The width of the buttons image
oWin.resizeh=9 //The width of the resize img
oWin.resizew=13 //The height of the resize img
oWin.starty=5 //If you have a header or something on the page that you want the setWindows and the dragdrop to care about set it here.
oWin.defwidth=200 //Default width for the windows if nothing is spesified
oWin.defheight=200 //Default height for the windows if nothing is spesified
oWin.between=15 //This variable controls how much space there will be between the windows when you use setWindows
oWin.keepinside=0 //VALUE: 1 || 0
    oWin.maxX=500 //This is the maximum X value the windows can go to. Set this to "winpage.x2" to keep them inside the window. VALUE: "winpage.x2" || px
    oWin.maxY=500 //This is the maximum Y value the windows can go to. Set this to "winpage.y2" to keep them inside the window. VALUE: "winpage.y2" || px
    oWin.minX=50 //This is the minimun X value the windows can go to. Set to 0 to keep them inside the window. VALUE: px
    oWin.minY=50 //This is the minimum Y value the windows can go to. Set to 0 to keep them inside the window. VALUE: px
function lib_bwcheck(){ //Browsercheck (needed)
    this.ver=navigator.appVersion
    this.agent=navigator.userAgent
    this.dom=document.getElementById?1:0
    this.ie5=(this.ver.indexOf("MSIE 5")>-1 && this.dom)?1:0;
    this.ie6=(this.ver.indexOf("MSIE 6")>-1 && this.dom)?1:0;
    this.ie4=(document.all && !this.dom)?1:0;
    this.ie=this.ie4||this.ie5||this.ie6
    this.mac=this.agent.indexOf("Mac")>-1
    this.opera5=this.agent.indexOf("Opera 5")>-1
    this.ns6=(this.dom && parseInt(this.ver) >= 5) ?1:0;
    this.ns4=(document.layers && !this.dom)?1:0;
    this.bw=(this.ie6 || this.ie5 || this.ie4 || this.ns4 || this.ns6 || this.opera5)
    return this
}
var bw=new lib_bwcheck();
function lib_doc_size(){ //Page positions - needed!
    this.x=0;this.x2=bw.ie && document.body.offsetWidth-20||innerWidth||0;
    if(bw.ns6) this.x2-=2
    this.y=0;this.y2=bw.ie && document.body.offsetHeight-5||innerHeight||0;
    if(bw.ns6) this.y2-=4
    if(!this.x2||!this.y2) return message('Document has no width or height')
    this.x50=this.x2/2;    this.y50=this.y2/2;
    this.x10=(this.x2*10)/100;this.y10=(this.y2*10)/100
    this.ytop=140*100/this.y2
    this.avail=(this.y2*(100-this.ytop))/100
    this.origy=this.y2
    return this;
}
function lib_moveIt(x,y){this.x=x;this.y=y; this.css.left=x;this.css.top=y}
function lib_moveBy(x,y){this.moveIt(this.x+x,this.y+y)}
function lib_showIt(){this.css.visibility="visible"}
function lib_hideIt(){this.css.visibility="hidden"}
function lib_bg(color){
    if(bw.opera5) this.css.background=color
    else if(bw.dom || bw.ie4) this.css.backgroundColor=color
    else if(bw.ns4) this.css.bgColor=color
}
function lib_clipTo(t,r,b,l,setwidth){
    if(t<0)t=0;if(r<0)r=0;if(b<0)b=0;if(b<0)b=0
    this.ct=t; this.cr=r; this.cb=b; this.cl=l
    if(bw.ns4){
        this.css.clip.top=t;this.css.clip.right=r
        this.css.clip.bottom=b;this.css.clip.left=l
    }else if(bw.opera5){this.css.pixelWidth=r; this.css.pixelHeight=b; this.w=r; this.h=b
    }else{
        this.css.clip="rect("+t+","+r+","+b+","+l+")";
        if(setwidth){this.css.width=r; this.css.height=b; this.w=r; this.h=b}
    }
}
function lib_writeIt(text,startHTML,endHTML){
    if(bw.ns4){
        if(!startHTML){startHTML=""; endHTML=""}
        this.ref.open("text/html"); this.ref.write(startHTML+text+endHTML); this.ref.close()
    }else this.evnt.innerHTML=text
}
//Default lib functions
function lib_obj(obj,nest,dnest,ddnest,num){
    if(!bw.bw) return lib_message('Old browser')
    if(!bw.ns4) this.evnt=bw.dom && document.getElementById(obj)||bw.ie4 && document.all[obj]
    else{
        if(ddnest){this.evnt=document[nest].document[dnest].document[ddnest].document[obj]?document[nest].document[dnest].document[ddnest].document[obj]:0;
        }else if(dnest){this.evnt=document[nest].document[dnest].document[obj]?document[nest].document[dnest].document[obj]:0;
        }else if(nest){this.evnt=document[nest].document[obj]?document[nest].document[obj]:0;
        }else{this.evnt=document.layers[obj]?document.layers[obj]:0;}
    }
    if(!this.evnt) return lib_message('The layer does not exist ('+obj+') - Exiting script\n\nIf your using Netscape please check the nesting of your tags!')
    this.css=bw.dom||bw.ie4?this.evnt.style:this.evnt;
    this.ref=bw.dom||bw.ie4?document:this.css.document;
    this.moveIt=lib_moveIt; this.moveBy=lib_moveBy;
    this.showIt=lib_showIt; this.hideIt=lib_hideIt;
    this.bg=lib_bg; this.num=num; this.writeIt=lib_writeIt;
    this.clipTo=lib_clipTo;    this.obj = obj + "Object";    eval(this.obj + "=this")
    return this
}
function create_window(i,x,y,w,h,bg,bga){
    if(!w) w=oWin.defwidth; if(!h) h=oWin.defheight
    if(!bg) bg=oWin.bgcolor; if(!bga) bga=oWin.bgcoloron
    oWin[i]=new lib_obj('divWin'+i,"","","",i)
    oWin[i].oWindow=new lib_obj('divWindow'+i,'divWin'+i)
    oWin[i].oWindow.moveIt(oWin.bordersize,oWin.headh)
    oWin[i].oText=new lib_obj('divWinText'+i,'divWin'+i,'divWindow'+i)
    oWin[i].oHead=new lib_obj('divWinHead'+i,'divWin'+i)
    oWin[i].oButtons=new lib_obj('divWinButtons'+i,'divWin'+i)
    oWin[i].oResize=new lib_obj('divWinResize'+i,'divWin'+i)
    oWin[i].oHead.evnt.onmouseover=new Function("w_mmover("+i+")")
    oWin[i].oHead.evnt.onmouseout=new Function("w_mmout()")
    if(!bw.ns4) oWin[i].oHead.evnt.ondblclick=new Function("mdblclick(0,"+i+")")
    oWin[i].oResize.evnt.onmouseover=new Function("w_mmover("+i+",1)")
    oWin[i].oResize.evnt.onmouseout=new Function("w_mmout()")
    if(!bw.ns4){
        oWin[i].oHead.css.cursor="move"; oWin[i].oResize.css.cursor="w-resize"
        oWin[i].oWindow.css.overflow="hidden"; oWin[i].css.overflow="hidden"
        oWin[i].oText.css.overflow="hidden"
    }
    oWin[i].defbg=bg; oWin[i].defbga=bga
    oWin[i].bg(oWin.bordercolor); oWin[i].oWindow.bg(oWin[i].defbg)
    oWin[i].oUp=new lib_obj('divWinUp'+i,'divWin'+i); oWin[i].oDown=new lib_obj('divWinDown'+i,'divWin'+i)
    oWin[i].oUp.bg(oWin.bgscroll); oWin[i].oDown.bg(oWin.bgscroll);
    oWin[i].lastx=x;oWin[i].lasty=y;oWin[i].origw=w; oWin[i].origh=h
    oWin[i].resize=win_resize;    oWin[i].close=win_close; oWin[i].maximize=win_maximize;
    oWin[i].minimize=win_minimize;    oWin[i].regwin=win_regwin; oWin[i].checkscroll=win_checkscroll;
    oWin[i].up=win_up;    oWin[i].down=win_down;    oWin[i].addZ=win_addZ;    oWin[i].state="reg"
    oWin[i].moveIt(x,y); oWin[i].resize(w,h); oWin[i].checkscroll();
    if(bw.opera5) setTimeout("oWin["+i+"].resize("+w+","+h+"); oWin["+i+"].showIt()",10)
    else oWin[i].showIt()
}
function win_regwin(){
    this.oResize.css.visibility="inherit"
    this.resize(this.origw,this.origh)
    this.moveIt(this.lastx,this.lasty)
    this.state="reg"; this.addZ()
    this.checkscroll()
}
function win_maximize(){
    if(this.state!="max"){
        if(this.state!="min"){this.lastx=this.x; this.lasty=this.y}
        mw=winpage.x2 - 10; mh=winpage.y2 - 10 - oWin.starty
        this.moveIt(5,5+oWin.starty,30,10)
        this.resize(mw,mh); this.oResize.showIt(); this.state="max"
        this.addZ()
    }else this.regwin()
}
function win_minimize(){
    if(this.state!="min"){ couns=0
        if(this.state!="max"){this.lastx=this.x; this.lasty=this.y}
        y=winpage.y2-oWin.headh; ox=winpage.x2-126; a=0
        for(i=0;i<wins;i++){
            x=i*125; ok=a
            if(a*125>ox){if(ox>126) i=0; a=0; y-=oWin.headh; x=0}
            for(j=0;j<wins;j++){
                couns++; if(oWin[j].x==x && oWin[j].y==y) a++
            }if(a==ok) break;
        }x=a*125;
        this.moveIt(x,y); this.oResize.hideIt()
        this.state="min"; this.resize(125,oWin.headh)
    }else this.regwin()
}
function win_close(){this.hideIt(); this.oUp.hideIt(); this.oDown.hideIt()}
function win_resize(w,h){
    this.oButtons.moveIt(w-oWin.buttonsw,0); this.oResize.moveIt(w-oWin.resizew,h-oWin.resizeh)
    this.oWindow.clipTo(0,w-oWin.bordersize*2,h-oWin.bottomh-oWin.headh,0,1); this.clipTo(0,w,h,0,1)
    this.oHead.clipTo(0,w,oWin.headh,0,1); this.oText.moveIt(2,3)
    this.oUp.hideIt(); this.oDown.hideIt()
}
function win_checkscroll(w,h){
    this.oText.height=this.oText.evnt.offsetHeight||this.oText.css.pixelHeight||this.oText.ref.height||0
    w=this.cr; h=this.cb
    if(this.oText.height>h-oWin.bottomh-oWin.headh && this.state!="min"){
        this.oWindow.clipTo(0,w-oWin.scrollw-oWin.bordersize*2,h-oWin.bottomh-oWin.headh,0,1);
        this.oUp.moveIt(w-oWin.scrollw,oWin.headh)
        this.oUp.clipTo(0,oWin.scrollw-oWin.bordersize,h-oWin.bottomh-oWin.scrollimgh-oWin.headh,0,1);
        this.oDown.moveIt(w-oWin.scrollw,h-oWin.bottomh-oWin.scrollimgh)
        this.oDown.clipTo(0,oWin.scrollw-oWin.bordersize,oWin.scrollimgh,0,1); this.oUp.showIt()
        this.oDown.showIt()
    }else{this.oUp.hideIt(); this.oDown.hideIt()}
}
var sctim=100;
var winScroll;
function win_up(){
    clearTimeout(sctim);
    if(this.oText.y>=this.oWindow.cb-this.oText.height-10 && winScroll){
        this.oText.moveBy(0,-8);
        setTimeout(this.obj+".up()",30)
    }
}
function win_down(){
    clearTimeout(sctim);
    if(this.oText.y<=0 && winScroll){
        this.oText.moveBy(0,8);
        setTimeout(this.obj+".down()",30)
    }
}
function noScroll(){clearTimeout(sctim);winScroll=false}
function win_addZ(){oWin.zIndex++; this.css.zIndex=oWin.zIndex}
function win_init(){
    if(document.layers){
        document.captureEvents(Event.MOUSEMOVE | Event.MOUSEDOWN | Event.MOUSEUP | Event.DBLCLICK)
        document.ondblclick=mdblclick;
    }
    document.onmousemove=mmove;document.onmousedown=mdown;document.onmouseup=mup;
}
function w_mmover(num,resize){if(!resize) oWin.dragover=num; else oWin.resizeover=num}
function w_mmout(){oWin.dragover=-1; oWin.resizeover=-1}
function mup(e){  //Mouseup
    if((oWin.dragobj!=-1 || oWin.resizeobj!=-1) && oWin.setposition) setPos();
    if(oWin.dragobj!=-1){oWin[oWin.dragobj].lastx=oWin[oWin.dragobj].x; oWin[oWin.dragobj].lasty=oWin[oWin.dragobj].y}
    oWin.dragobj=-1
    if(oWin.resizeobj!=-1){
        oWin[oWin.resizeobj].checkscroll()
        oWin[oWin.resizeobj].origw=oWin[oWin.resizeobj].cr
        oWin[oWin.resizeobj].origh=oWin[oWin.resizeobj].cb
    }else if(bw.ns4) routeEvent(e)
    oWin.resizeobj=-1
}
function mdown(e){  //Mousedown
    x=(bw.ns4 || bw.ns6)?e.pageX:event.x||event.clientX
    y=(bw.ns4 || bw.ns6)?e.pageY:event.y||event.clientY
    if(bw.ie5 || bw.ie6) y+=document.body.scrollTop
    id1=oWin.dragover
    id2=oWin.resizeover
    if(id1>-1 || id2>-1){
        if(id2>-1){ id=id2; oWin.resizeobj=id;
        }else{
            id=id1; oWin.dragobj=id
            oWin.clickedX=x-oWin[id].x;
            oWin.clickedY=y-oWin[id].y
        }
        oWin[id].addZ()
        //Setting background-colors
        for(i=0;i<wins;i++){
            if(i!=id1&&i!=id2){
                oWin[i].oWindow.bg(oWin[i].defbg)
            }else oWin[i].oWindow.bg(oWin[i].defbga)
        }
    }else if(bw.ns4) routeEvent(e)
    if(!bw.ns4) return false
}
function mmove(e,y,rresize){ //Mousemove
    x=(bw.ns4 || bw.ns6)?e.pageX:event.x||event.clientX
    y=(bw.ns4 || bw.ns6)?e.pageY:event.y||event.clientY
    if(bw.ie5 || bw.ie6) y+=document.body.scrollTop
    id1=oWin.dragobj
    id2=oWin.resizeobj
    if(id2>-1){  //Resize
        nx=x; ny=y
        oldw=oWin[id2].cr; oldh=oWin[id2].cb
        cw= nx -oWin[id2].x; ch= ny - oWin[id2].y
        if(cw<120) cw=120; if(ch<100) ch=100
        oWin[id2].resize(cw,ch)
    }else if(id1>-1){ //Move
        nx=x-oWin.clickedX; ny=y-oWin.clickedY
        if(ny<oWin.starty) ny=oWin.starty
        if(oWin.keepinside){
            if(nx+oWin[id1].cr>eval(oWin.maxX)) nx=eval(oWin.maxX)-oWin[id1].cr
            else if(nx<eval(oWin.minX)) nx=eval(oWin.minX)
            if(ny+oWin[id1].cb>eval(oWin.maxY)) ny=eval(oWin.maxY)-oWin[id1].cb
            else if(ny<eval(oWin.minY)) ny=eval(oWin.minY)
        }
        oWin[id1].moveIt(nx,ny)
        if(oWin[id].state==0){oWin[id].lastx=nx; oWin[id].lasty=ny}
    }
    if(!bw.ns4) return false
}
function mdblclick(e,num){if(num>-1) oWin[num].maximize(); else if(oWin.dragover>-1) oWin[oWin.dragover].maximize()}
function setWindows(placeit,rez){
    between=oWin.between
    oWin.rows=Math.round((wins/3)+0.2)
    oWin.columns=1
    j=0;a=0;c=0;
    for(i=0;i<wins;i++){
        if(j==oWin.columns-1){
            oWin.columns=wins-a<3?wins-a:wins-a==4?2:3
            if(wins!=1 && a!=0) c++; j=0
        }else if(a!=0) j++
        oWin[i].origw=(winpage.x2-between-(between*oWin.columns))/oWin.columns
        oWin[i].origh=((winpage.y2-3-oWin.starty-(between*oWin.rows))/oWin.rows)
        oWin[i].lastx=oWin[i].origx=oWin[i].origw*(j)+(between*j)+between
        oWin[i].lasty=oWin[i].origy=oWin[i].origh*c+(between*c) + oWin.starty
        oWin[i].resize(oWin[i].origw,oWin[i].origh); oWin[i].moveIt(oWin[i].lastx,oWin[i].lasty)
        oWin[i].showIt(); a++;
    }
}
var lastx,lasty,lastw,lasth
function addWindow(heading,content,x,y,w,h,bg,bga){
    var num=oWin.length; wins=num+1; var str=""
    str+='<div id="divWin'+num+'" class="clWin">\n'
    str+='<div class="clLogo"></div>\n'
    +'<div id="divWinHead'+num+'" class="clWinHead">      '+heading+'</div>\n'
    +'<div id="divWinButtons'+num+'" class="clWinButtons">\n'
        +'<map name="map'+num+'">\n'
            +'<area shape="rect" coords="26,2,35,11" href="#" alt="Window Script from DHTMLCentral.com"  onclick="oWin['+num+'].close(); return false">\n'
            +'<area shape="rect" coords="14,2,23,11" href="#" alt="Window Script from DHTMLCentral.com"  onClick="oWin['+num+'].maximize(); return false">\n'
            +'<area shape="rect" coords="2,2,11,11" href="#" alt="Window Script from DHTMLCentral.com"  onClick="oWin['+num+'].minimize(); return false">\n'
        +'</map>\n'
        +'<img usemap="#map'+num+'" alt="Window Script from DHTMLCentral.com"  src="buttons.gif" width="38" height="14" alt="" border="0">\n'
    +'</div>\n'
    +'<div id="divWinResize'+num+'" class="clWinResize">\n'
    +'</div>\n'
    +'<div id="divWindow'+num+'" class="clWindow">\n'
        +'<div id="divWinText'+num+'" class="clText">'
    if(content){
        str+=content+'</div>\n'
        +'</div>\n'
        +'<div id="divWinUp'+num+'" class="clUp"><a href="#" onclick="return false" onmouseover="winScroll=1; oWin['+num+'].down();"  onmouseout="noScroll()"><img src="arrow_up.gif" width="11" height="12" alt="" border="0"></a></div>\n'
        +'<div id="divWinDown'+num+'" class="clDown"><a href="#" onclick="return false" onmouseover="winScroll=1; oWin['+num+'].up();" onmouseout="noScroll()"><img src="arrow_down.gif" width="11" height="12" alt="" border="0"></a></div>\n'
        +'</div>'
    }
    document.write(str)
    if(content) create_window(num,x,y,w,h,bg,bga)
}
function endWin(){
    num=wins-1
    str='\n</div>\n'
    +'</div>\n'
    +'</div>'
    return str
}
