(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{228:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchUser",(function(){return N})),n.d(a,"handleToken",(function(){return B})),n.d(a,"submitBlog",(function(){return C})),n.d(a,"fetchBlogs",(function(){return F})),n.d(a,"fetchBlog",(function(){return S}));n(99);var r=n(1),c=n.n(r),l=n(87),o=n.n(l),i=n(2),u=n(3),s=n(88),m=n.n(s),p=n(9),f=n(10),b=n(12),h=n(11),d=n(6),v=n(22),g=n(27),y=n(16),E=n.n(y),O=n(18),j=n.n(O),k="fetch_user",w="fetch_blogs",x="fetch_blog",N=function(){return function(){var e=Object(g.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/api/current_user");case 2:n=e.sent,t({type:k,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=function(e){return function(){var t=Object(g.a)(E.a.mark((function t(n){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.post("/api/stripe",e);case 2:a=t.sent,n({type:k,payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e,t,n){return function(){var a=Object(g.a)(E.a.mark((function a(r){var c,l;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,j.a.get("/api/upload");case 2:return c=a.sent,a.next=5,j.a.put(c.data.url,t,{headers:{ContentType:t.type}});case 5:return a.next=7,j.a.post("/api/blogs",Object(v.a)(Object(v.a)({},e),{},{imageUrl:c.data.key}));case 7:l=a.sent,n.push("/blogs"),r({type:x,payload:l.data});case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},F=function(){return function(){var e=Object(g.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/api/blogs");case 2:n=e.sent,t({type:w,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(g.a)(E.a.mark((function t(n){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("/api/blogs/".concat(e));case 2:a=t.sent,n({type:x,payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"renderContent",value:function(){switch(this.props.auth){case null:return;case!1:return c.a.createElement("li",null,c.a.createElement("a",{href:"/auth/google"},"Login With Google"));default:return[c.a.createElement("li",{key:"3",style:{margin:"0 10px"}},c.a.createElement(d.b,{to:"/blogs"},"My Blogs")),c.a.createElement("li",{key:"2"},c.a.createElement("a",{href:"/auth/logout"},"Logout"))]}}},{key:"render",value:function(){return c.a.createElement("nav",{className:"indigo"},c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement(d.b,{to:this.props.auth?"/blogs":"/",className:"left brand-logo",style:{marginLeft:"10px"}},"Blogster"),c.a.createElement("ul",{className:"right"},this.renderContent())))}}]),n}(r.Component);var U=Object(i.b)((function(e){return{auth:e.auth}}))(_),R=function(){return c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h1",null,"Blogster!"),"Write private blogs")},A=n(93),D=n.n(A),M=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchBlogs()}},{key:"renderBlogs",value:function(){return D()(this.props.blogs,(function(e){return c.a.createElement("div",{className:"card darken-1 horizontal",key:e._id},c.a.createElement("div",{className:"card-stacked"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},e.title),c.a.createElement("p",null,e.content)),c.a.createElement("div",{className:"card-action"},c.a.createElement(d.b,{to:"/blogs/".concat(e._id)},"Read"))))}))}},{key:"render",value:function(){return c.a.createElement("div",null,this.renderBlogs())}}]),n}(r.Component);var L=Object(i.b)((function(e){return{blogs:e.blogs}}),{fetchBlogs:F})(M),T=function(){return c.a.createElement("div",null,c.a.createElement(L,null),c.a.createElement("div",{className:"fixed-action-btn"},c.a.createElement(d.b,{to:"/blogs/new",className:"btn-floating btn-large red"},c.a.createElement("i",{className:"material-icons"},"add"))))},V=n(25),z=n(30),I=n.n(z),J=function(e){var t=e.input,n=e.label,a=e.meta,r=a.error,l=a.touched;return c.a.createElement("div",{className:t.name},c.a.createElement("label",null,n),c.a.createElement("input",Object.assign({},t,{style:{marginBottom:"5px"}})),c.a.createElement("div",{className:"red-text",style:{marginBottom:"20px"}},l&&r))},W=[{label:"Blog Title",name:"title"},{label:"Content",name:"content"}],q=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"renderFields",value:function(){return I.a.map(W,(function(e){var t=e.label,n=e.name;return c.a.createElement(V.a,{key:n,component:J,type:"text",label:t,name:n})}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.props.handleSubmit(this.props.onBlogSubmit)},this.renderFields(),c.a.createElement(d.b,{to:"/blogs",className:"red btn-flat white-text"},"Cancel"),c.a.createElement("button",{type:"submit",className:"teal btn-flat right white-text"},"Next",c.a.createElement("i",{className:"material-icons right"},"done"))))}}]),n}(r.Component);var G=Object(V.c)({validate:function(e){var t={};return I.a.each(W,(function(n){var a=n.name;e[a]||(t[a]="You must provide a value")})),t},form:"blogForm",destroyOnUnmount:!1})(q),P=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={file:null},e}return Object(f.a)(n,[{key:"renderFields",value:function(){var e=this.props.formValues;return I.a.map(W,(function(t){var n=t.name,a=t.label;return c.a.createElement("div",{key:n},c.a.createElement("label",null,a),c.a.createElement("div",null,e[n]))}))}},{key:"renderButtons",value:function(){var e=this.props.onCancel;return c.a.createElement("div",null,c.a.createElement("button",{className:"yellow darken-3 white-text btn-flat",onClick:e},"Back"),c.a.createElement("button",{className:"green btn-flat right white-text"},"Save Blog",c.a.createElement("i",{className:"material-icons right"},"email")))}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.props,n=t.dispatch,a=t.history,r=t.formValues;n(C(r,this.state.file,a))}},{key:"onFileChange",value:function(e){this.setState({file:e.target.files[0]})}},{key:"render",value:function(){var e=this;return c.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},c.a.createElement("h5",null,"Please confirm your entries"),this.renderFields(),c.a.createElement("h5",null,"Add an image"),c.a.createElement("input",{onChange:this.onFileChange.bind(this),type:"file",accept:"image/*"}),this.renderButtons())}}]),n}(r.Component),Y=Object(i.b)((function(e){return{formValues:e.form.blogForm.values}}))(Object(d.e)(P)),H=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showFormReview:!1},e}return Object(f.a)(n,[{key:"renderContent",value:function(){var e=this;return this.state.showFormReview?c.a.createElement(Y,{onCancel:function(){return e.setState({showFormReview:!1})}}):c.a.createElement(G,{onBlogSubmit:function(){return e.setState({showFormReview:!0})}})}},{key:"render",value:function(){return c.a.createElement("div",null,this.renderContent())}}]),n}(r.Component),K=Object(V.c)({form:"blogForm"})(H),Q=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchBlog(this.props.match.params._id)}},{key:"renderImage",value:function(){if(this.props.blog.imageUrl)return c.a.createElement("img",{src:"https://blog-for-everyone-33.s3.eu-west-3.amazonaws.com/"+this.props.blog.imageUrl})}},{key:"render",value:function(){if(!this.props.blog)return"";var e=this.props.blog,t=e.title,n=e.content;return c.a.createElement("div",null,c.a.createElement("h3",null,t),c.a.createElement("p",null,n),this.renderImage())}}]),n}(r.Component);var X=Object(i.b)((function(e,t){return{blog:e.blogs[t.match.params._id]}}),{fetchBlog:S})(Q),Z=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(d.a,null,c.a.createElement("div",null,c.a.createElement(U,null),c.a.createElement(d.d,null,c.a.createElement(d.c,{path:"/blogs/new",component:K}),c.a.createElement(d.c,{exact:!0,path:"/blogs/:_id",component:X}),c.a.createElement(d.c,{path:"/blogs",component:T}),c.a.createElement(d.c,{path:"/",component:R})))))}}]),n}(r.Component),$=Object(i.b)(null,a)(Z),ee=n(44),te=n(98),ne=n.n(te),ae=Object(u.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===k?t.payload||!1:e},form:V.b,blogs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:var n=t.payload;return Object(v.a)(Object(v.a)({},e),{},Object(ee.a)({},n._id,n));case w:return Object(v.a)(Object(v.a)({},e),ne()(t.payload,"_id"));default:return e}}});window.axios=j.a;var re=Object(u.d)(ae,{},Object(u.a)(m.a));o.a.render(c.a.createElement(i.a,{store:re},c.a.createElement($,null)),document.querySelector("#root"))}},[[228,1,2]]]);
//# sourceMappingURL=main.e6793e48.chunk.js.map