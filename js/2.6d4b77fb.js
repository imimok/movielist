(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"3cce":function(t,a,e){"use strict";e("e68e")},"925c":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{attrs:{padding:""}},[e("div",{staticClass:"q-pa-md row items-start q-gutter-md"},t._l(t.dataMovie.results,(function(a,s){return e("q-card",{key:s,staticClass:"my-card",on:{click:function(e){return t.showpopup(a)}}},[e("img",{attrs:{src:"https://image.tmdb.org/t/p/original"+a.poster_path}}),e("q-card-section",{staticClass:"section"},[e("div",{staticClass:"text-h6"},[t._v(t._s(a.title))]),e("q-rating",{attrs:{size:"20px",readonly:""},model:{value:a.vote_average,callback:function(e){t.$set(a,"vote_average",e)},expression:"MovieItem.vote_average"}})],1)],1)})),1),e("q-dialog",{attrs:{"full-width":""},model:{value:t.popup,callback:function(a){t.popup=a},expression:"popup"}},[e("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[e("q-card-section",{attrs:{horizontal:""}},[e("q-card-section",{staticClass:"col-5 flex flex-center"},[e("q-img",{attrs:{src:"https://image.tmdb.org/t/p/original"+t.popupdata.poster_path}})],1),e("q-card-section",{staticClass:"q-pt-xs"},[e("div",{staticClass:"text-h3 q-mt-sm q-mb-xs"},[t._v(t._s(t.popupdata.title))]),e("br"),e("q-rating",{attrs:{size:"32px",readonly:""},model:{value:t.popupdata.vote_average,callback:function(a){t.$set(t.popupdata,"vote_average",a)},expression:"popupdata.vote_average"}}),e("br"),e("br"),e("div",{staticClass:"text-h5 "},[t._v(t._s(t.popupdata.overview))])],1)],1),e("q-separator")],1)],1)],1)},o=[],i=e("ded3"),p=e.n(i),r=e("2f62"),c={name:"MainMovieList",data(){return{movieresult:[],page:1,popup:!1,popupdata:[]}},computed:p()({},Object(r["c"])("example",["dataMovie"])),mounted(){this.getmovielist(this.page)},methods:p()(p()({},Object(r["b"])("example",["getmovielist"])),{},{showpopup(t){this.popup=!0,this.popupdata=t}})},n=c,l=(e("3cce"),e("2877")),d=e("9989"),u=e("ef35"),v=e("f09f"),m=e("a370"),g=e("daf4"),f=e("24e8"),b=e("068f"),h=e("eb85"),q=e("eebe"),_=e.n(q),x=Object(l["a"])(n,s,o,!1,null,"37e5998f",null);a["default"]=x.exports;_()(x,"components",{QPage:d["a"],QInfiniteScroll:u["a"],QCard:v["a"],QCardSection:m["a"],QRating:g["a"],QDialog:f["a"],QImg:b["a"],QSeparator:h["a"]})},e68e:function(t,a,e){}}]);