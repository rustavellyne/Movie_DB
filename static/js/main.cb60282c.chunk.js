(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/poster_none.4c0c4e8d.png"},16:function(e,t,a){e.exports=a.p+"static/media/Spinner.ba39d28a.svg"},25:function(e,t,a){e.exports=a.p+"static/media/logo.27b65cb4.svg"},30:function(e,t,a){e.exports=a(58)},37:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},47:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(12),l=a.n(r),o=a(60),i=(a(35),a(37),a(4)),s=a(5),m=a(7),u=a(6),p=a(8),d=a(62),h=a(61),g=(a(39),a(15)),v=a(25),f=a.n(v),b=(a(41),"033555199cb9b772727c4fa1f410c488"),E="https://api.themoviedb.org/3",O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return fetch("".concat(E,"/movie/popular?api_key=").concat(b,"&page=").concat(e),{method:"GET"}).then(function(e){return e.json()})};var j=a(3),y=a(59),w=(a(43),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.suggests;return this.props.visible?c.a.createElement("ul",{className:"suggests-component"},e.map(function(e){return c.a.createElement(y.a,{key:e.id,to:"/Movie_DB"+"/TopMovies/".concat(e.id),target:"_blank"},c.a.createElement("li",{className:"suggests-component-item"},c.a.createElement("h5",null,e.original_title),c.a.createElement("div",null,e.release_date)))})):null}}]),t}(n.Component)),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).closeSuggest=function(){a.setState({isVisible:!1,inputText:""})},a.onChange=function(e){var t=e.target.value;t?function(e){return console.log("queryfrom API",e),fetch("".concat(E,"/search/movie?include_adult=true&query=").concat(e,"&api_key=").concat(b),{method:"GET"}).then(function(e){return e.json()})}(t).then(function(e){console.log("queryfrom event",t),a.setState({searchResults:e.results,isVisible:!0})}):(console.log("clear string"),a.setState({isVisible:!1}))},a.toggle=a.toggle.bind(Object(g.a)(Object(g.a)(a))),a.state={isOpen:!1,inputText:"",searchResults:[],isVisible:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.closeSuggest)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.closeSuggest)}},{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return c.a.createElement(j.i,{light:!0,expand:"md",className:"navbar-dark bg-dark",style:{position:"fixed",zIndex:99,width:"100vw"}},c.a.createElement(j.d,null,c.a.createElement(j.j,{className:"col-4 col-sm-4 col-md-2"},c.a.createElement("img",{src:f.a,alt:"TMDB"})),c.a.createElement(j.k,{onClick:this.toggle}),c.a.createElement(j.c,{isOpen:this.state.isOpen,navbar:!0},c.a.createElement(j.g,{className:"mr-auto",navbar:!0},c.a.createElement(j.h,null,c.a.createElement(y.a,{to:"/Movie_DB/TopMovies/",className:"nav-link links"},"Popular"))),c.a.createElement(j.f,{className:"ml-auto col-sm-12 col-md-8"},c.a.createElement(w,{suggests:this.state.searchResults,visible:this.state.isVisible}),c.a.createElement(j.e,{placeholder:"Search...",onChange:this.onChange})))))}}]),t}(n.Component),N=a(16),_=a.n(N),x=a(13),M=a.n(x),S=(a(47),a(17)),D=a.n(S),C=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.rate;return c.a.createElement(D.a,{rating:e,starDimension:"25px",starSpacing:"0px",starRatedColor:"rgb(1, 210, 119)",numberOfStars:10})}}]),t}(n.Component),T=a(27),B=a.n(T),H=(a(53),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){console.log("props of relatedMovieItem===",this.props.data);var e=this.props.data,t=e.original_title,a=e.vote_average,n=e.poster_path,r=e.id,l=n?"https://image.tmdb.org/t/p/w500".concat(n):"".concat(M.a);return c.a.createElement("div",{className:"related-movie-item-wrapper"},c.a.createElement(y.a,{to:"/Movie_DB"+"/TopMovies/".concat(r),target:"_blank"},c.a.createElement("img",{src:l,alt:"movie-poster"})),c.a.createElement("div",{className:"related-movie-info"},c.a.createElement("h5",null,t),c.a.createElement("div",{className:"rating-wrapper"},c.a.createElement("span",null,a),c.a.createElement(D.a,{rating:a,starDimension:"15px",starSpacing:"0px",starRatedColor:"rgb(1, 210, 119)",numberOfStars:1}))))}}]),t}(n.Component)),P=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data;console.log("dataRelatedArray===",e);return c.a.createElement(B.a,{slidesPerView:5,spaceBetween:5,rebuildOnUpdate:!0,slidesPerGroup:2,loop:!0,loopFillGroupWithBlank:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},e.map(function(e){return c.a.createElement("div",null,c.a.createElement(H,{data:e,key:e.id}))}))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={data:{},relatedData:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.match.params.id,fetch("".concat(E,"/movie/").concat(e,"?api_key=").concat(b,"&language=en-US"),{method:"GET"}).then(function(e){return e.json()})).then(function(e){t.setState({data:e})}),function(e){return fetch("".concat(E,"/movie/").concat(e,"/similar?api_key=").concat(b,"&page=1"),{method:"GET"}).then(function(e){return e.json()})}(this.props.match.params.id).then(function(e){t.setState({relatedData:e.results})})}},{key:"render",value:function(){var e=this.state.data,t=e.backdrop_path,a=e.original_title,n=e.tagline,r=e.overview,l=e.poster_path,o=e.vote_average,i=e.genres,s=l?"https://image.tmdb.org/t/p/w500".concat(l):"".concat(M.a),m=t?"https://image.tmdb.org/t/p/original".concat(t):"".concat(M.a);return Object.keys(this.state.data).length?c.a.createElement("Container-fluid",null,c.a.createElement("div",{className:"movieItem-wrapper",style:{backgroundImage:"url(".concat(m,")")}},c.a.createElement("div",{className:"overflow"}),c.a.createElement(j.d,null,c.a.createElement(j.l,{style:{padding:"0 15px"},className:"align-items"},c.a.createElement("div",{className:"col-12 col-sm-5 col-md-5 col-lg-4"},c.a.createElement("img",{src:s,alt:"poster FILM",width:"100%"})),c.a.createElement("div",{className:"col-12 col-sm-5 col-md-5 col-lg-4 film-info-wrapper"},c.a.createElement("div",{className:"row no-gutters"},c.a.createElement("h2",{className:"original-title"},a),c.a.createElement("span",{className:"tagline col-12"},n),c.a.createElement(C,{rate:o}),c.a.createElement("div",{className:"col-12 overview"},c.a.createElement("h3",null,"Overview"),c.a.createElement("p",null,r)),c.a.createElement("div",null,i.map(function(e){return c.a.createElement(j.a,{outline:!0,color:"success",className:"testClass",key:e.id},e.name)}))))))),c.a.createElement(j.l,{noGutters:!0},c.a.createElement(j.b,{className:"slider-wrapper"},c.a.createElement("h4",null,"Related Movies"),c.a.createElement(P,{data:this.state.relatedData})))):c.a.createElement("div",{className:"spinner-wrapper"},c.a.createElement("img",{src:_.a,alt:"img"}))}}]),t}(n.Component),G=a(29),R=(a(55),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"".concat(M.a);return c.a.createElement("div",{className:"col-12 col-sm-12 col-md-9 col-lg-6"},c.a.createElement("div",{className:"card movie-card"},c.a.createElement("div",{className:"row no-gutters"},c.a.createElement("div",{className:"col-12 col-sm-4 col-md-4 col-lg-5 col-xl-4"},c.a.createElement(y.a,{to:"/Movie_DB"+"/TopMovies/".concat(e.id),target:"_blank"},c.a.createElement("div",{className:"poster-list"},c.a.createElement("img",{className:"card-img-top",src:t,alt:"cards"})))),c.a.createElement("div",{className:"col-12 col-sm-8 col-md-8 col-lg-7 col-xl-8 d-flex flex-column justify-content-around"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},e.original_title),c.a.createElement("p",{className:"card-text"},e.overview)),c.a.createElement("div",{className:"card-footer text-muted"},c.a.createElement(y.a,{to:"/Movie_DB"+"/TopMovies/".concat(e.id),target:"_blank",className:"btn btn-primary"},"More Info"))))))}}]),t}(n.Component)),V=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={currentPage:1,list:[]},a.fetchMoreData=function(){var e=a.state,t=e.list,n=e.currentPage,c=n+1;O(c).then(function(e){e.results?a.setState({currentPage:c,list:t.concat(e.results)}):a.setState({currentPage:n,list:Object(G.a)(t)})})},a.handleScroll=function(e){var t=window,n=document,c=n.documentElement,r=n.getElementsByTagName("body")[0],l=t.innerHeight||c.clientHeight||r.clientHeight;Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.pageYOffset<=1.3*l&&a.fetchMoreData()},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;O(this.state.currentPage).then(function(t){e.setState({list:t.results})}),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state.list;return this.state.list.length?c.a.createElement(j.d,{style:{padding:"120px 0"}},c.a.createElement(j.l,{className:"justify-content-center"},e.map(function(e){return c.a.createElement(R,{key:e.id,data:e})}))):c.a.createElement("div",{className:"spinner-wrapper"},c.a.createElement("img",{src:_.a,alt:"img"}))}}]),t}(n.Component),A=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(k,null),c.a.createElement(d.a,null,c.a.createElement(h.a,{exact:!0,path:"/",component:V}),c.a.createElement(h.a,{path:"/Movie_DB/TopMovies/:id",component:I}),c.a.createElement(h.a,{path:"/Movie_DB/TopMovies/",component:V})))}}]),t}(n.Component);l.a.render(c.a.createElement(o.a,null,c.a.createElement(A,null)),document.getElementById("root"))}},[[30,2,1]]]);
//# sourceMappingURL=main.cb60282c.chunk.js.map