(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(16),o=n.n(s),i=(n(25),n(17)),c=n(2),l=n(3),u=n(5),m=n(4),p=(n(26),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.showDetails;return r.a.createElement("div",{className:"event"},r.a.createElement("div",{className:"eventOverviewName"},r.a.createElement("p",null,this.props.event.name),r.a.createElement("p",null,this.props.event.local_date),r.a.createElement("button",{className:"detailsButton",onClick:function(){return e.handleShowDetails()}},"Show Details")),t&&r.a.createElement("div",{className:"eventDetails"},r.a.createElement("p",{className:"eventDetailsdescription"},this.props.event.description)))}}]),n}(a.Component)),v=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.events;return r.a.createElement("ul",{className:"EventList"},e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(p,{event:e}))})))}}]),n}(a.Component),d=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={locations:e.props.locations,query:"All",suggestions:[],showSuggestions:!1},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),r.a.createElement("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"}},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t,onClick:function(){return e.handleItemClicked(t)}},t)})),r.a.createElement("li",{key:"all",onClick:function(){return e.handleItemClicked("all")}},r.a.createElement("b",null,"See all cities"))))}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={numberofevents:32},e.handleInputChanged=function(t){var n=t.target.value;e.setState({numberofevents:n}),e.props.updateEvents(null,n)},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("label",null,"Number of Events:"),r.a.createElement("input",{type:"text",className:"events_input",value:this.state.numberofvents,onChange:this.handleInputChanged}))}}]),n}(a.Component),h=n(6),g=n.n(h),b=n(18),E=n(19),y=[{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}}],w=(n(28),function(e){var t=e.map((function(e){return e.location}));return Object(E.a)(new Set(t))}),j=function(){var e=Object(b.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=(n(46),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],currentLocation:"all",numberofevents:32},e.updateEvents=function(t,n){n||(n=e.state.numberofevents),t||(t=e.state.locations),j().then((function(a){var r="all"===t?a:a.filter((function(e){return e.location===t}));Object(i.a)("locationEvents"),r=r.slice(0,n),e.setState({events:r,currentLocation:t})}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,j().then((function(t){e.mounted&&e.setState({events:t,locations:w(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,{locations:this.state.locations,updateEvents:this.updateEvents}),r.a.createElement(f,{numberofevents:this.state.numberofevents,updateEvents:this.updateEvents}),r.a.createElement(v,{events:this.state.events}))}}]),n}(a.Component)),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),k()}},[[47,1,2]]]);
//# sourceMappingURL=main.d7db0696.chunk.js.map