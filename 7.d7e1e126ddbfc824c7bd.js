(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{lIAz:function(l,n,a){"use strict";a.r(n);var u=a("CcnG"),e=function(){},t=a("zl1X"),c=a("+Xo0"),i=a("0G9f"),s=a("8KBR"),o=a("5lT0"),r=a("QkwE"),d=a("vAyd"),g=a("mrSG"),V='\n<clr-paged-search-result-list [clrItems]="pagedItems"\n                              [clrPage]="currentPage"\n                              [clrPageSize]="pageSize"\n                              [clrTotalItems]="allItems.length"\n                              (clrPageChange)="onPageChanged($event)">\n    <ng-template let-item="item">\n        <div class="col-xs-12">\n            <div class="card">\n                <div class="card-header">\n                    {{item}}\n                </div>\n                <div class="card-block">\n                    <div class="card-text">\n                        This is an example card.\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ng-template>\n</clr-paged-search-result-list>\n            \n',m=function(l){function n(){var n=l.call(this,"paged-search-result-list")||this;return n.htmlExample=V,n.allItems=["Nelson","Graham","Olene","Dorian","Nidia","Keenan","Luna","Letisha","Lenny","Jeana","Alica","Sheridan","Georgia","Brad","Ellen","Brynn","Roslyn","Rhona","Marcella","Sibyl","Shenika","Desirae","Beverly","Johnson","Kaitlin","Lucius","Darla","Debby","Lottie","Genoveva"],n.pageSize=3,n.pagedItems=[],n.currentPage=1,n}return Object(g.b)(n,l),n.prototype.onPageChanged=function(l){var n=this;this.currentPage=l;var a=(l-1)*this.pageSize,u=Math.min(a+this.pageSize-1,this.allItems.length-1);setTimeout(function(){return n.pagedItems=n.allItems.slice(a,u+1)},0)},n}(a("N+3j").a),p=u.La({encapsulation:2,styles:[],data:{}});function b(l){return u.hb(0,[(l()(),u.Na(0,0,null,null,6,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),u.Na(1,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(l()(),u.Na(2,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),u.fb(3,null,[" "," "])),(l()(),u.Na(4,0,null,null,2,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),u.Na(5,0,null,null,1,"div",[["class","card-text"]],null,null,null,null,null)),(l()(),u.fb(-1,null,[" This is an example card. "]))],null,function(l,n){l(n,3,0,n.context.item)})}function h(l){return u.hb(0,[(l()(),u.Na(0,0,null,null,60,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,c.b,c.a)),u.Ma(1,49152,null,0,i.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),u.Na(2,0,null,0,58,"article",[],null,null,null,null,null)),(l()(),u.Na(3,0,null,null,1,"h5",[["class","component-summary"],["id","search-result-list-header"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["The Paged Search Result List component is a basic component used to display a list of generic data including a pager above and below the list."])),(l()(),u.Na(5,0,null,null,4,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),u.Na(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.fb(-1,null,["Style"])),(l()(),u.Na(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.fb(-1,null,["You can style the list any way you want - this component allows you to use a custom template to show all items of your list. The custom template can range from a single line representing text to one or more completely new angular components."])),(l()(),u.Na(10,0,null,null,50,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),u.Na(11,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["Code & Examples"])),(l()(),u.fb(-1,null,[" To set a template for each item of your list simply add a "])),(l()(),u.Na(14,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["ng-template"])),(l()(),u.fb(-1,null,[" inside the "])),(l()(),u.Na(17,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["clr-paged-search-result-list"])),(l()(),u.fb(-1,null,[". By defining "])),(l()(),u.Na(20,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.fb(-1,null,['let-item="item"'])),(l()(),u.fb(-1,null,[" on your "])),(l()(),u.Na(23,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["ng-template"])),(l()(),u.fb(-1,null,[" you can get the context of each individual item. "])),(l()(),u.Na(26,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.fb(-1,null,[" Following interactions are available: "])),(l()(),u.Na(28,0,null,null,25,"ul",[],null,null,null,null,null)),(l()(),u.Na(29,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),u.fb(-1,null,[" To show items add a "])),(l()(),u.Na(31,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["[clrItems]"])),(l()(),u.fb(-1,null,[" input to the component. "])),(l()(),u.Na(34,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),u.fb(-1,null,[" To set the current page add a "])),(l()(),u.Na(36,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["[clrPage]"])),(l()(),u.fb(-1,null,[" input to the component. "])),(l()(),u.Na(39,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),u.fb(-1,null,[" To define the page size add a "])),(l()(),u.Na(41,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["[clrPageSize]"])),(l()(),u.fb(-1,null,[" input to the component. "])),(l()(),u.Na(44,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),u.fb(-1,null,[" To define the number of total items add a "])),(l()(),u.Na(46,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["[clrTotalItems]"])),(l()(),u.fb(-1,null,[" input to the component. "])),(l()(),u.Na(49,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),u.fb(-1,null,[" To react to page changes, bind to the event "])),(l()(),u.Na(51,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["(clrPageChange)"])),(l()(),u.fb(-1,null,[". "])),(l()(),u.Na(54,0,null,null,4,"div",[["class","margin-top-24"]],null,null,null,null,null)),(l()(),u.Na(55,0,null,null,3,"clr-paged-search-result-list",[],null,[[null,"clrPageChange"]],function(l,n,a){var u=!0;return"clrPageChange"===n&&(u=!1!==l.component.onPageChanged(a)&&u),u},s.f,s.b)),u.Ma(56,49152,null,1,o.d,[],{pageSize:[0,"pageSize"],currentPage:[1,"currentPage"],totalItems:[2,"totalItems"],items:[3,"items"]},{pageChange:"clrPageChange"}),u.db(335544320,1,{itemTemplate:0}),(l()(),u.Ea(0,[[1,2]],null,0,null,b)),(l()(),u.Na(59,0,null,null,1,"clr-code-snippet",[],null,null,null,r.b,r.a)),u.Ma(60,4243456,null,0,d.a,[],{code:[0,"code"]},null)],function(l,n){var a=n.component;l(n,1,0,a.title,a.newLayout,a.ui,a.ng),l(n,56,0,a.pageSize,a.currentPage,a.allItems.length,a.pagedItems),l(n,60,0,a.htmlExample)},function(l,n){l(n,0,0,!0)})}var f=u.Ja("clr-search-result-list-demo",m,function(l){return u.hb(0,[(l()(),u.Na(0,0,null,null,1,"clr-search-result-list-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,h,p)),u.Ma(1,49152,null,0,m,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})},{},{},[]),N=a("Ip0R"),v=a("KZfJ"),y=a("gIcY"),w=a("ZYjt"),I=a("NSYL"),P=a("wFw1"),x=a("ihYY"),S=a("XPsC"),C=a("ZYCi"),T=a("JsA7");a.d(n,"PagedSearchResultListDemoModuleNgFactory",function(){return L});var L=u.Ka(e,[],function(l){return u.Ua([u.Va(512,u.j,u.Z,[[8,[t.k,t.a,t.j,f]],[3,u.j],u.v]),u.Va(5120,u.s,u.Ia,[[3,u.s]]),u.Va(4608,N.q,N.p,[u.s,[2,N.F]]),u.Va(4608,v.Ab,v.Ab,[]),u.Va(4608,y.r,y.r,[]),u.Va(5120,v.qc,v.rc,[[3,v.qc]]),u.Va(4608,u.i,u.i,[]),u.Va(5120,u.c,u.Fa,[]),u.Va(5120,u.q,u.Ga,[]),u.Va(5120,u.r,u.Ha,[]),u.Va(4608,w.c,w.s,[N.d]),u.Va(6144,u.G,null,[w.c]),u.Va(4608,w.f,w.g,[]),u.Va(5120,w.d,function(l,n,a,u,e,t,c){return[new w.k(l,n,a),new w.o(u),new w.n(e,t,c)]},[N.d,u.x,[2,u.z],N.d,N.d,w.f,u.Aa]),u.Va(4608,w.e,w.e,[w.d,u.x]),u.Va(135680,w.m,w.m,[N.d]),u.Va(4608,w.l,w.l,[w.e,w.m]),u.Va(5120,I.a,P.e,[]),u.Va(5120,I.c,P.f,[]),u.Va(4608,I.b,P.d,[I.a,I.c]),u.Va(5120,u.E,P.g,[w.l,I.b,u.x]),u.Va(6144,w.p,null,[w.m]),u.Va(4608,u.M,u.M,[u.x]),u.Va(4608,w.h,w.h,[N.d]),u.Va(4608,w.i,w.i,[N.d]),u.Va(4608,x.b,P.c,[u.E,w.b]),u.Va(1073742336,N.b,N.b,[]),u.Va(1073742336,v.W,v.W,[]),u.Va(1073742336,v.Bb,v.Bb,[]),u.Va(1073742336,v.Nc,v.Nc,[]),u.Va(1073742336,v.P,v.P,[]),u.Va(1073742336,v.d,v.d,[]),u.Va(1073742336,v.R,v.R,[]),u.Va(1073742336,v.n,v.n,[]),u.Va(1073742336,v.Uc,v.Uc,[]),u.Va(1073742336,v.Wc,v.Wc,[]),u.Va(1073742336,v.I,v.I,[]),u.Va(1073742336,v.S,v.S,[]),u.Va(1073742336,y.o,y.o,[]),u.Va(1073742336,y.e,y.e,[]),u.Va(1073742336,v.Da,v.Da,[]),u.Va(1073742336,v.Ib,v.Ib,[]),u.Va(1073742336,v.ic,v.ic,[]),u.Va(1073742336,v.B,v.B,[]),u.Va(1073742336,v.Xa,v.Xa,[]),u.Va(1073742336,v.ib,v.ib,[]),u.Va(1073742336,v.s,v.s,[]),u.Va(1073742336,v.Ha,v.Ha,[]),u.Va(1073742336,v.Ca,v.Ca,[]),u.Va(1073742336,v.i,v.i,[]),u.Va(1073742336,v.j,v.j,[]),u.Va(1073742336,v.Ya,v.Ya,[]),u.Va(1073742336,v.q,v.q,[]),u.Va(1073742336,v.Fa,v.Fa,[]),u.Va(1073742336,v.Ka,v.Ka,[]),u.Va(1073742336,v.sc,v.sc,[]),u.Va(1073742336,v.db,v.db,[]),u.Va(1073742336,v.nb,v.nb,[]),u.Va(1073742336,v.Aa,v.Aa,[]),u.Va(1073742336,v.Qa,v.Qa,[]),u.Va(1073742336,v.gb,v.gb,[]),u.Va(1073742336,v.La,v.La,[]),u.Va(1073742336,v.rb,v.rb,[]),u.Va(1073742336,v.a,v.a,[]),u.Va(1073742336,S.a,S.a,[]),u.Va(1073742336,C.o,C.o,[[2,C.t],[2,C.l]]),u.Va(1073742336,T.a,T.a,[]),u.Va(1073742336,o.i,o.i,[]),u.Va(1073742336,o.g,o.g,[]),u.Va(1073742336,o.e,o.e,[]),u.Va(1024,u.l,w.r,[]),u.Va(1024,u.d,function(l){return[w.u(l)]},[[2,u.w]]),u.Va(512,u.e,u.e,[[2,u.d]]),u.Va(131584,u.g,u.g,[u.x,u.Aa,u.p,u.l,u.j,u.e]),u.Va(1073742336,u.f,u.f,[u.g]),u.Va(1073742336,w.a,w.a,[[3,w.a]]),u.Va(1073742336,P.b,P.b,[]),u.Va(1073742336,o.c,o.c,[]),u.Va(1073742336,o.a,o.a,[]),u.Va(1073742336,e,e,[]),u.Va(256,u.Y,!0,[]),u.Va(256,P.a,"BrowserAnimations",[]),u.Va(1024,C.j,function(){return[[{path:"",component:m}]]},[])])})}}]);