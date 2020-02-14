(this.webpackJsonplol=this.webpackJsonplol||[]).push([[7,10],{164:function(e,t,a){"use strict";a.r(t);var n=a(78),r=a(79),c=a(83),l=a(80),o=a(84),s=a(0),u=a.n(s),i=a(17),m=a(356),E=function(){return u.a.createElement(m.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:u.a.createElement(i.b,{to:"/#/",className:"ant-btn"},"Go Back to Home")})},p=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(E,null)}}]),t}(s.Component);t.default=p},352:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"jokeFetchRequest",(function(){return w})),a.d(n,"jokeFetchRequestSuccess",(function(){return A})),a.d(n,"jokeFetchRequestFailure",(function(){return S})),a.d(n,"jokeCleanRequest",(function(){return F}));var r={};a.r(r),a.d(r,"API_KEY",(function(){return G})),a.d(r,"fetchJoke",(function(){return z})),a.d(r,"fetchCustomJoke",(function(){return U}));var c=a(0),l=a.n(c),o=a(7),s=a(78),u=a(79),i=a(83),m=a(80),E=a(84),p=a(10),f=a(13),d=a(350),g=a(212),k=a(218),h=a(349),j=a(351),y=a(354),b=a(357),v=a(355),x=a(346),C=j.a.create()(Object(o.f)((function(e){var t=e.fetchJoke,a=e.jokeLoading,n=e.fetchCustomJoke,r=e.form,c=r.getFieldDecorator,o=r.validateFields,s=r.resetFields;return l.a.createElement(h.a,{className:"form-card"},l.a.createElement(j.a,{className:"joke-form",onSubmit:function(e){e.preventDefault(),o((function(e,t){e||n(t)}))}},l.a.createElement(g.a,{gutter:16},l.a.createElement(k.a,{xs:24,sm:24,md:24,lg:6,xl:6},l.a.createElement(j.a.Item,{label:"Joke Type"},c("type")(l.a.createElement(y.a.Group,{initialValue:"single",buttonStyle:"solid"},l.a.createElement(y.a.Button,{value:"single"},"Single"),l.a.createElement(y.a.Button,{value:"twopart"},"Two Part"))))),l.a.createElement(k.a,{xs:24,sm:24,md:24,lg:6,xl:6},l.a.createElement(j.a.Item,{label:"Category"},c("category")(l.a.createElement(y.a.Group,{initialValue:"misc",buttonStyle:"solid"},l.a.createElement(y.a.Button,{value:"Any"},"Any"),l.a.createElement(y.a.Button,{value:"Programming"},"Programming"),l.a.createElement(y.a.Button,{value:"Miscellaneous"},"Miscellaneous"),l.a.createElement(y.a.Button,{value:"Dark"},"Dark")))))," ",l.a.createElement(k.a,{xs:24,sm:24,md:24,lg:6,xl:6},l.a.createElement(j.a.Item,{label:"Flags"},c("flags")(l.a.createElement(b.a.Group,{style:{width:"100%"}},l.a.createElement(g.a,null,l.a.createElement(k.a,{span:8},l.a.createElement(b.a,{value:"nsfw"},"Nsfw")),l.a.createElement(k.a,{span:8},l.a.createElement(b.a,{value:"political"},"Political")),l.a.createElement(k.a,{span:8},l.a.createElement(b.a,{value:"religious"},"Religious")),l.a.createElement(k.a,{span:8},l.a.createElement(b.a,{value:"sexist"},"Sexist")),l.a.createElement(k.a,{span:8},l.a.createElement(b.a,{value:"racist"},"Racist")))))))," ",l.a.createElement(k.a,{xs:24,sm:24,md:24,lg:6,xl:6},l.a.createElement(j.a.Item,{label:"Contains"},c("contains")(l.a.createElement(v.a,{placeholder:"Enter Text"})))),l.a.createElement(k.a,{className:"gutter-row",span:24},l.a.createElement(k.a,{span:8}," ",l.a.createElement(j.a.Item,null,l.a.createElement(x.a,{type:"primary",className:"form-button",size:"large",icon:"sync",loading:a,onClick:function(e){e.preventDefault(),t()}},"Random"))),l.a.createElement(k.a,{span:8}," ",l.a.createElement(j.a.Item,null,l.a.createElement(x.a,{type:"primary",htmlType:"submit",className:"form-button",size:"large",icon:"search"},"Search"))," "),l.a.createElement(k.a,{span:8}," ",l.a.createElement(j.a.Item,null,l.a.createElement(x.a,{type:"primary",className:"form-button",size:"large",icon:"reload",onClick:function(e){e.preventDefault(),s()}},"Reset")))))))}))),O=a(348),J=a(360),N=d.a.Text,R=function(e){var t=e.jokes,a=e.jokeLoading;return console.log("jokes && jokes.flags :",t&&!1===t.error&&t.flags),l.a.createElement(O.a,{spinning:a},t&&!0===t.error?l.a.createElement("div",{className:"joke-message"}," ",l.a.createElement(N,{type:"danger"},"Sorry.",t.message,"!")):l.a.createElement("div",{className:"joke-show"},t&&t.setup&&l.a.createElement("h2",null,t.setup)," ",t&&t.delivery&&l.a.createElement("h3",null,"- ",t.delivery)," ",t&&t.joke&&l.a.createElement("h2",null,t.joke)),l.a.createElement(J.a,{className:"attributes"},t&&t.type&&l.a.createElement(J.a.Item,{label:"Type"},l.a.createElement(N,{code:!0},t.type))," ",t&&t.category&&l.a.createElement(J.a.Item,{label:"Category"},l.a.createElement(N,{code:!0},t.category))," ",t&&t.flags&&l.a.createElement(J.a.Item,{label:"Flags"}," ",l.a.createElement(b.a.Group,{style:{width:"100%"},disabled:!0},l.a.createElement(g.a,null,l.a.createElement(k.a,{span:8},l.a.createElement(b.a,{checked:t&&!1===t.error?t.flags.nsfw:null},"Nsfw")),l.a.createElement(k.a,{span:8},l.a.createElement(b.a,{checked:t&&!1===t.error?t.flags.political:null},"Political")),l.a.createElement(k.a,{span:8},l.a.createElement(b.a,{checked:t&&!1===t.error?t.flags.religious:null},"Religious")),l.a.createElement(k.a,{span:8},l.a.createElement(b.a,{checked:t&&!1===t.error?t.flags.sexist:null},"Sexist")),l.a.createElement(k.a,{span:8},l.a.createElement(b.a,{checked:t&&!1===t.error?t.flags.racist:null},"Racist")))))))},I=d.a.Title,P=function(e){var t=e.fetchJoke;return Object(c.useEffect)((function(){t()}),[t]),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(I,{className:"title",level:4},l.a.createElement("span",null,"Laugh Out Loud")),l.a.createElement(g.a,{gutter:16,className:"lol-main"},l.a.createElement(k.a,{lg:{span:24},xl:{span:24},className:"joke-item"},l.a.createElement(R,e),l.a.createElement(k.a,{lg:{span:24},xl:{span:24}},l.a.createElement(C,e))))))},T=a(15),w=function(){return{type:T.b}},A=function(e){return{type:T.d,data:e}},S=function(e){return{type:T.c,error:e}},F=function(){return{type:T.a}},_=a(328),B=a.n(_),L="".concat("https://sv443.net/jokeapi/v2/joke/"),D=function(){var e=B.a.create({baseURL:"".concat(L),headers:{Accept:"application/json","Content-Type":"application/json"},responseType:"json"});return e.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),e};function q(e,t){return D().get("/".concat(e),{params:t})}var G="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/redux-thunk-proj",REACT_APP_REST_API_HOST:"https://sv443.net/jokeapi/v2/joke/"}).REACT_APP_API_KEY),z=function(e){return function(e){return e(w()),q("Any").then((function(t){200===t.status&&e(A(t))})).catch((function(t){return e(S(t.Error))}))}},U=function(e){return function(t){return t(w()),q("".concat(e.category,"?blacklistFlags=").concat(e.flags,"&type=").concat(e.type,"&contains=").concat(e.contains)).then((function(e){200===e.status&&t(A(e))})).catch((function(e){return t(S(e.Error))}))}},V=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).fetchJoke=function(){a.props.actions.fetchJoke()},a.fetchCustomJoke=function(e){a.props.actions.fetchCustomJoke(e)},a.cleanJoke=function(){a.props.actions.jokeCleanRequest()},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(P,Object.assign({fetchJoke:this.fetchJoke,fetchCustomJoke:this.fetchCustomJoke,cleanJoke:this.cleanJoke},this.props))}}]),t}(c.Component),H=Object(f.c)((function(e){return{jokes:e.jokes.payload.data,jokeErrors:e.jokes.payload.data,jokeLoading:e.jokes.loading}}),(function(e){return{actions:Object(p.bindActionCreators)(Object.assign({},n,r),e)}}))(V),K=a(164);t.default=function(e){var t=e.match;return l.a.createElement(c.Fragment,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"".concat(t.url),component:H}),l.a.createElement(o.a,{component:K.default})))}}}]);
//# sourceMappingURL=7.5312a9ed.chunk.js.map