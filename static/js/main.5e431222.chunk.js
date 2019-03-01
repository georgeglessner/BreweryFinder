(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(37)},23:function(e,t,a){},27:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),s=a.n(c),i=(a(23),a(9)),o=a.n(i),l=a(13),h=a(1),m=a(2),u=a(4),d=a(3),p=a(5),y=(a(27),function(e){function t(){return Object(h.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"displayWebsiteUrl",value:function(e){if(e)return r.a.createElement("a",{className:"btn btn-primary",target:"_blank",rel:"noopener noreferrer",href:e,onMouseDown:function(e){return e.preventDefault()}},"Check Them Out")}},{key:"render",value:function(){var e=this.props.item,t=e.city,a=e.name,n=e.brewery_type,c=e.street,s=e.state,i=e.website_url;return r.a.createElement("div",{className:"col-10 mx-auto col-md-6 col-lg-4 my-3"},r.a.createElement("div",{className:"card h-100"},r.a.createElement("div",{className:"card-body flex-column h-100"},r.a.createElement("h5",{className:"Kreon-Text text-capitalize"},a),r.a.createElement("h6",{className:"text-capitalize"},r.a.createElement("strong",null,"Type: "),n),r.a.createElement("h6",{className:"text-capitalize"},c),r.a.createElement("h6",{className:"text-capitalize"},t,", ",s),this.displayWebsiteUrl(i))))}}]),t}(n.Component)),f=a(7),b=a.n(f),v=function(e){function t(){return Object(h.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"onClick",value:function(){this.props.backToSearch()}},{key:"displayResult",value:function(e){return e.length?e.map(function(e){return r.a.createElement(y,{key:e.id,item:e})}):r.a.createElement("h1",{className:"Kreon-Text text-center"},"We couldn't find anything in that location...")}},{key:"render",value:function(){var e=this,t=this.props.brewery;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pt-5"},r.a.createElement("nav",{className:"navbar fixed-top navbar-dark bg-dark py-2 mb-5"},r.a.createElement(b.a,{strings:["Time to drink","Time to party","Time to relax"],typeSpeed:70,startDelay:1200,backDelay:3e3,backSpeed:60,loop:!0,loopCount:30,showCursor:!0,className:"h4 mx-auto Quicksand-Text"}),r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("button",{type:"button",className:"btn btn-outline-info",onClick:function(){return e.onClick()}},"Back to Search")))),r.a.createElement("div",{className:"container my-5"},r.a.createElement("div",{className:"row"},this.displayResult(t))))}}]),t}(n.Component),w=function(e){var t=e.val,a=e.searchBy,n=e.handleSearchChange;e.identifier;return r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"searchByOptions",id:"cityRadio",value:t,onChange:n,checked:a===t}),r.a.createElement("label",{className:"form-check-label text-capitalize",htmlFor:"cityRadio"},t))},E=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={search:"",searchBy:"city"},a.updateSearch=function(e){a.setState({search:e.target.value})},a.onSearchClick=function(){a.props.handleSearch(a.state.search)},a.onSearchChange=function(e){a.setState({searchBy:e.target.value}),a.props.searchBy(e.target.value)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",{className:"Quicksand-Text Glow"},"Brewery Finder"),r.a.createElement(b.a,{strings:["Find a brewery in your hometown","Find your new hangout","Find your new favorite beer","Find the answer to your problems"],typeSpeed:70,startDelay:1200,backDelay:3e3,backSpeed:60,loop:!0,loopCount:30,showCursor:!0,className:"h4"})))),r.a.createElement("div",{className:"container mb-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-8 mt-5 text-center"},r.a.createElement("h2",{className:"text-capitalize"},"search for breweries by ",this.state.searchBy),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search here...",onChange:this.updateSearch}),r.a.createElement("button",{className:"btn btn-primary mx-2",onClick:this.onSearchClick},"Search")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col text-center mt-2"},r.a.createElement(w,{val:"city",searchBy:this.state.searchBy,handleSearchChange:this.onSearchChange,identifier:"cityRadio"}),r.a.createElement(w,{val:"state",searchBy:this.state.searchBy,handleSearchChange:this.onSearchChange,identifier:"stateRadio"}),r.a.createElement(w,{val:"name",searchBy:this.state.searchBy,handleSearchChange:this.onSearchChange,identifier:"nameRadio"}),r.a.createElement(w,{val:"type",searchBy:this.state.searchBy,handleSearchChange:this.onSearchChange,identifier:"typeRadio"}),r.a.createElement(w,{val:"tag",searchBy:this.state.searchBy,handleSearchChange:this.onSearchChange,identifier:"tagRadio"})))),r.a.createElement("footer",{className:"mx-auto py-3"},r.a.createElement("div",{className:"container text-center"},"Powered By"," ",r.a.createElement("span",{className:"text-muted"},r.a.createElement("a",{href:"https://www.openbrewerydb.org/",target:"_blank",rel:"noopener noreferrer"},"Open Brewery DB")))))}}]),t}(n.Component),g="home",k="search_results",S=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={items:[],isLoaded:!1,url:"https://api.openbrewerydb.org/breweries",searchTerm:"Boston",searchByParam:"city",page:g},a.filterResults=function(e){return e.filter(function(e){return!e.name.toLowerCase().includes("Brewery In Planning".toLowerCase())})},a.backToSearch=function(){a.setState({searchByParam:"city",page:g})},a.handleSearch=function(e){var t=a.state.searchByParam;console.log(t),a.setState({url:"https://api.openbrewerydb.org/breweries?by_".concat(t,"=").concat(e),searchTerm:e,page:k})},a.searchBy=function(e){a.setState({searchByParam:e})},a.whatToDisplay=function(e){return e===k?r.a.createElement(v,{brewery:a.state.items,backToSearch:a.backToSearch}):e===g?r.a.createElement(E,{handleSearch:a.handleSearch,searchBy:a.searchBy}):void 0},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"fetchBreweryData",value:function(){var e=Object(l.a)(o.a.mark(function e(){var t,a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({isLoaded:!1}),e.next=4,fetch(this.state.url);case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,n=this.filterResults(a),this.setState({isLoaded:!0,items:n}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}},e,this,[[0,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t){this.state.url!==t.url&&this.fetchBreweryData()}},{key:"componentDidMount",value:function(){this.fetchBreweryData()}},{key:"render",value:function(){return this.state.isLoaded?r.a.createElement(r.a.Fragment,null,this.whatToDisplay(this.state.page)):r.a.createElement("div",null,"Loading...")}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.5e431222.chunk.js.map