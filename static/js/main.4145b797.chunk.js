(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(38)},24:function(e,t,a){},28:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),s=(a(24),a(10)),i=a.n(s),l=a(14),m=a(1),u=a(2),p=a(4),h=a(3),d=a(5),y=a(6),b=(a(28),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).displayWebsiteUrl=function(){return""===a.props.item.website_url?void 0:r.a.createElement("a",{className:"btn btn-primary",target:"_blank",rel:"noopener noreferrer",href:a.props.item.website_url},"Check Them Out")},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-10 mx-auto col-md-6 col-lg-4 my-3"},r.a.createElement("div",{className:"card h-100"},r.a.createElement("div",{className:"card-body flex-column h-100"},r.a.createElement("h5",{className:"Kreon-Text text-capitalize"},this.props.item.name),r.a.createElement("h6",{className:"text-capitalize"},r.a.createElement("strong",null,"Type: "),this.props.item.brewery_type),r.a.createElement("h6",{className:"text-capitalize"},this.props.item.street),r.a.createElement("h6",{className:"text-capitalize"},this.props.item.city,", ",this.props.item.state),this.displayWebsiteUrl()))))}}]),t}(n.Component)),f=a(8),v=a.n(f),w=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"onClick",value:function(){this.props.backToSearch()}},{key:"displayResult",value:function(e){return void 0===e[0]?r.a.createElement("h1",{className:"Kreon-Text text-center"},"We couldn't find anything in that location..."):e.map(function(e){return r.a.createElement(b,{key:e.id,item:e})})}},{key:"render",value:function(){var e=this,t=this.props.brewery;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pt-5"},r.a.createElement("nav",{className:"navbar fixed-top navbar-dark bg-dark py-2 mb-5"},r.a.createElement(v.a,{strings:["Time to drink","Time to party","Time to relax"],typeSpeed:70,startDelay:1200,backDelay:3e3,backSpeed:60,loop:!0,loopCount:30,showCursor:!0,className:"h4 mx-auto Quicksand-Text"}),r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("button",{type:"button",className:"btn btn-outline-info",onClick:function(){return e.onClick()}},"Back to Search")))),r.a.createElement("div",{className:"container my-5"},r.a.createElement("div",{className:"row"},this.displayResult(t))))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={search:"Boston"},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"updateSearch",value:function(e){this.setState({search:e.target.value})}},{key:"onSearchClick",value:function(){this.props.handleSearch(this.state.search)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",{className:"Quicksand-Text Glow"},"Brewery Finder"),r.a.createElement(v.a,{strings:["Find a brewery in your hometown","Find your new hangout","Find your new favorite beer","Find the answer to lifes mysteries"],typeSpeed:70,startDelay:1200,backDelay:3e3,backSpeed:60,loop:!0,loopCount:30,showCursor:!0,className:"h4"})))),r.a.createElement("div",{className:"container mb-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-8 mt-5 text-center"},r.a.createElement("h2",{className:"text-capitalize"},"search for breweries in your town"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Enter city name...",onChange:this.updateSearch.bind(this)}),r.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){return e.onSearchClick()}},"Search"))))),r.a.createElement("footer",{className:"mx-auto py-3"},r.a.createElement("div",{className:"container text-center"},"Powered By"," ",r.a.createElement("span",{className:"text-muted"},r.a.createElement("a",{href:"https://www.openbrewerydb.org/",target:"_blank",rel:"noopener noreferrer"},"Open Brewery DB")))))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={items:[],isLoaded:!1,url:"https://api.openbrewerydb.org/breweries",pageIndex:0},a.whatToDisplay=function(e){return 1===e?r.a.createElement(w,{brewery:a.state.items,backToSearch:function(){return a.backToSearch()}}):0===e?r.a.createElement(k,{handleSearch:a.handleSearch.bind(Object(y.a)(Object(y.a)(a)))}):void 0},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"fetchBreweryData",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(this.state.url);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n=this.filterResults(a),this.setState({isLoaded:!0,items:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"filterResults",value:function(e){return e.filter(function(e){return!e.name.toLowerCase().includes("Brewery In Planning".toLowerCase())})}},{key:"handleSearch",value:function(e){this.setState({url:"https://api.openbrewerydb.org/breweries?by_city=".concat(e),pageIndex:1}),console.log("App "+e),console.log("App state: "+this.state.url)}},{key:"backToSearch",value:function(){this.setState({pageIndex:0})}},{key:"componentDidUpdate",value:function(){}},{key:"componentDidMount",value:function(){this.fetchBreweryData()}},{key:"render",value:function(){return this.state.isLoaded?r.a.createElement(r.a.Fragment,null,this.whatToDisplay(this.state.pageIndex)):r.a.createElement("div",null,"Loading...")}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.4145b797.chunk.js.map