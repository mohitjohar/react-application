(this.webpackJsonptfifth=this.webpackJsonptfifth||[]).push([[0],{23:function(e,t,a){e.exports=a(33)},28:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),s=a.n(l),c=(a(28),a(3)),o=a(12),m=a(1),i=function(e){localStorage.token&&e.history.push("/");var t=Object(n.useState)(""),a=Object(m.a)(t,2),l=a[0],s=a[1],o=Object(n.useState)(""),i=Object(m.a)(o,2),u=i[0],d=i[1],p=Object(n.useState)(""),h=Object(m.a)(p,2);h[0],h[1];return console.log("email",l,"password",u),r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"maxw-500 mrtb-100",onSubmit:function(){try{fetch("https://reqres.in/api/login",{method:"POST",body:JSON.stringify({email:"eve.holt@reqres.in",password:"pestol"}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){t.token?(localStorage.setItem("token",t.token),console.log("token:",t.token),e.history.push("/"),window.location.reload(),alert("Login Successfully")):alert("Enter valid Email or Password")}))}catch(t){console.error("Error:",t)}},action:"javascript:simpleCart.checkout()"},r.a.createElement("fieldset",null,r.a.createElement("legend",null," Login"),r.a.createElement("input",{type:"text",name:"email",className:"form-control",placeholder:"Your Email",value:l,onChange:function(e){return s(e.target.value)}}),r.a.createElement("input",{type:"password",name:"password",className:"form-control",placeholder:"Password",value:u,onChange:function(e){return d(e.target.value)}}),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Log In")),"Don't have an Account? ",r.a.createElement(c.b,{to:"/register"},"SignUp Here")))},u=a(4),d=a(5),p=a(7),h=a(6),f=a(8),E=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={email:"",password:"",alert:""},a.handleSubmit=function(e){e.preventDefault();var t={email:a.state.email,password:a.state.password};try{fetch("https://reqres.in/api/register",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.token?(alert("Registration is Successfull."),a.setState({alert:r.a.createElement("div",{className:"alert alert-success"},"Register Successfully")}),a.props.history.push("/")):a.setState({alert:r.a.createElement("div",{className:"alert alert-danger"},"Somethong went wrong")})}))}catch(n){console.error("Error:",n)}},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"maxw-500 mrtb-100"},this.state.alert,r.a.createElement("fieldset",null,r.a.createElement("legend",null,r.a.createElement("solid",null," Registration")),r.a.createElement("input",{type:"text",name:"email",className:"form-control",placeholder:"Your Email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}}),r.a.createElement("input",{type:"password",name:"password",className:"form-control",placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Register")),"Already have an Account! ",r.a.createElement(c.b,{to:"/"},"LogIn")))}}]),t}(r.a.Component),g=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onChangeValue=function(e){a.setState({value:e.target.value})},a.onAddItem=function(){a.setState((function(e){return{list:e.list.concat(e.value),value:""}}))},a.onRemoveItem=function(e){a.setState((function(t){return{list:t.list.filter((function(t,a){return e!==a}))}}))},a.state={value:"",list:["Mohit","Aman","Lakhwinder"]},localStorage.token||a.props.history.push("/login"),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"main"},r.a.createElement("div",{class:"container maxw-700"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{id:"iss"},"Person Name: ",this.state.pname," "),r.a.createElement("input",{type:"text",placeholder:"Enter Person Name",className:"form-control",value:this.state.value,onChange:this.onChangeValue})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Add Name",className:"btn btn-primary",onClick:this.onAddItem,disabled:!this.state.value}))),r.a.createElement("ul",{class:"names-ul"},this.state.list.map((function(t,a){return r.a.createElement("li",{key:t},t,r.a.createElement("button",{class:"crs-btn",index:a,onClick:function(){return e.onRemoveItem(a)}},"x"))}))))))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",salary:"",age:"",data:"",alertn:"",alerts:"",alerta:""},a.handleSubmit=function(e){e.preventDefault();var t={name:a.state.name,salary:a.state.salary};try{fetch("https://reqres.in/api/users",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log("Response:",e),(a.state.name||a.state.salary)&&(a.setState({data:e}),a.setState({alertn:""}),a.setState({alerts:""})),""!=a.state.name&&""!=a.state.salary||a.setState({data:""}),""==a.state.name&&a.setState({alertn:r.a.createElement("div",{className:"alert alert-danger"},"Please Enter Name")}),""==a.state.salary&&a.setState({alerts:r.a.createElement("div",{className:"alert alert-danger"},"Please Enter Salary")})}))}catch(n){console.error("Error:",n)}},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"maxw-700 mrtb-100"},r.a.createElement("fieldset",null,r.a.createElement("legend",null," Create Form"),r.a.createElement("input",{type:"text",name:"name",placeholder:"Your Name",className:"form-control",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}}),this.state.alertn,r.a.createElement("input",{type:"number",name:"job",placeholder:"Your Salery",className:"form-control",value:this.state.salary,onChange:function(t){return e.setState({salary:t.target.value})}}),this.state.alerts,r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Add Data")),r.a.createElement("br",null),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Id"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Salary"),r.a.createElement("th",null,"Created At")),r.a.createElement("tr",null,r.a.createElement("td",null,this.state.data.id),r.a.createElement("td",null,this.state.data.name),r.a.createElement("td",null,this.state.data.salary),r.a.createElement("td",null,this.state.data.createdAt)))))}}]),t}(r.a.Component),v=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",job:"",id:"",data:"",alertn:"",alertj:"",alerti:""},a.handleSubmit=function(e){e.preventDefault();var t="https://reqres.in/api/users/".concat(a.state.id),n={name:a.state.name,job:a.state.job};try{fetch(t,{method:"PUT",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.error("Response:",e),(a.state.name||a.state.job||a.state.id)&&(a.setState({data:e}),a.setState({alertn:""}),a.setState({alertj:""}),a.setState({alerti:""})),""!=a.state.job&&""!=a.state.name&&""!=a.state.id||a.setState({data:""}),""==a.state.name&&a.setState({alertn:r.a.createElement("div",{className:"alert alert-danger"},"Please Enter Name")}),""==a.state.job&&a.setState({alertj:r.a.createElement("div",{className:"alert alert-danger"},"Please Enter Job")}),""==a.state.id&&a.setState({alerti:r.a.createElement("div",{className:"alert alert-danger"},"Please Enter Id")})}))}catch(l){console.error("Error:",l)}},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;if(this.state.data)var t=r.a.createElement("tr",null,r.a.createElement("td",null,this.state.data.name),r.a.createElement("td",null,this.state.data.job),r.a.createElement("td",null,this.state.data.updatedAt));else t="";return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"maxw-700 mrtb-100"},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Update Form"),r.a.createElement("input",{type:"number",name:"id",className:"form-control",placeholder:"Your Id",value:this.state.id,onChange:function(t){return e.setState({id:t.target.value})}}),this.state.alerti,r.a.createElement("input",{type:"text",name:"name",className:"form-control",placeholder:"Your Name",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}}),this.state.alertn,r.a.createElement("input",{type:"text",name:"job",className:"form-control",placeholder:"Your Job",value:this.state.job,onChange:function(t){return e.setState({job:t.target.value})}}),this.state.alertj,r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Update Data")),r.a.createElement("br",null),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Job"),r.a.createElement("th",null,"Updated at")),t)))}}]),t}(r.a.Component),y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={id:"",alert:""},a.handleSubmit=function(e){e.preventDefault();var t="https://reqres.in/api/users/".concat(a.state.id);try{fetch(t,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.status),204==e.status&&a.setState({alert:r.a.createElement("div",{className:"alert alert-success"},"Data Deleted")})}))}catch(n){console.error("Error:",n)}},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"maxw-700 mrtb-100"},this.state.alert,r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Delete Form"),r.a.createElement("input",{type:"number",name:"name",className:"form-control",placeholder:"Enter id",value:this.state.id,onChange:function(t){return e.setState({id:t.target.value})}}),r.a.createElement("button",{className:"btn btn-danger",type:"submit"},"Delete Data"))))}}]),t}(r.a.Component),N=function(e){var t=e.filterarr,a=e.setToggle1,n=e.toggle1,l=e.setId,s=e.setLoadertoggle,c=e.apiDatashow,o=e.setName,m=e.setAge,i=e.setSalary,u=t&&t.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",{className:"id"},e.id),r.a.createElement("td",{className:"name"},e.employee_name),r.a.createElement("td",null,e.employee_age),r.a.createElement("td",null,e.employee_salary),r.a.createElement("td",{className:"action"},r.a.createElement("button",{className:"btn btn-info",index:e.id,onClick:function(){return t=e.id,r=e.employee_name,s=e.employee_age,c=e.employee_salary,a(!n),l(t),o(r),m(s),void i(c);var t,r,s,c}},"Update")," ",r.a.createElement("button",{className:"btn btn-danger",index:e.id,onClick:function(){return function(e){var t="http://dummy.restapiexample.com/api/v1/delete/".concat(e);if(window.confirm("Do you want to delete this?")){s(!0);try{fetch(t,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log("Delelition Response",e),c(),alert("Data Deleted")}))}catch(a){console.error("Deletition Error:",a)}}}(e.id)}},"Delete")))}));return r.a.createElement("table",{className:"datalist"},r.a.createElement("tr",{className:"static-top"},r.a.createElement("th",{className:"id"},"Id"),r.a.createElement("th",{className:"name"},"Name"),r.a.createElement("th",null,"Age"),r.a.createElement("th",null,"Salary"),r.a.createElement("th",{className:"action"})),u)},j=function(e){var t=e.apiDatashow,a=e.setToggle,n=e.setLoadertoggle,l=e.salarya,s=e.agea,c=e.name,o=e.setName,m=e.age,i=e.setAge,u=e.salary,d=e.setSalary;return r.a.createElement("div",{className:"mrtb-30"},r.a.createElement("form",{onSubmit:function(e){n(!0),e.preventDefault();var r={name:c,salary:u,age:m};try{fetch("http://dummy.restapiexample.com/api/v1/create",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log("Creation Response:",e),t(),a(!1),alert("Date Submited")}))}catch(l){console.error("Creation Error:",l)}}},r.a.createElement("fieldset",null,r.a.createElement("legend",null," Create Form"),r.a.createElement("input",{type:"text",name:"name",className:"form-control",required:"required",placeholder:"Your Unique Name",value:c,onChange:function(e){return o(e.target.value)}}),r.a.createElement("input",{type:"number",name:"age",className:"form-control",required:"required",placeholder:"Your Age",value:m,pattern:"[0-9]{3}",maxlength:"8",size:"10",title:"Enter Valid age",onChange:function(e){return i(e.target.value)}}),r.a.createElement("div",{className:"alertred"},s),r.a.createElement("input",{type:"number",name:"salery",className:"form-control",required:"required",placeholder:"Your Salery",value:u,pattern:"[0-9]{10}",maxlength:"10",title:"Enter Valid salery",onChange:function(e){return d(e.target.value)}}),r.a.createElement("div",{className:"alertred"},l),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit"))))},S=function(e){var t=e.id,a=e.setToggle1,n=e.setLoadertoggle,l=e.apiDatashow,s=e.name,c=e.setName,o=e.age,m=e.setAge,i=e.salary,u=e.setSalary,d=e.agea,p=e.salarya;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"",onSubmit:function(e){e.preventDefault(),n(!0);var r="http://dummy.restapiexample.com/api/v1/update/".concat(t),c={name:s,salary:i,age:o};try{fetch(r,{method:"PUT",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.error("Updation Response:",e),l()}))}catch(m){console.error("Updattion Error:",m)}a(!1)}},r.a.createElement("div",{className:"label1"},"You have update this Id: ",r.a.createElement("span",null,t)),r.a.createElement("input",{type:"text",name:"name",className:"form-control",required:"required",placeholder:"Enter Unique Name",value:s,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"number",name:"age",className:"form-control",required:"required",placeholder:"Enter Age",value:o,onChange:function(e){return m(e.target.value)}}),r.a.createElement("div",{className:"alertred"},d),r.a.createElement("input",{type:"number",name:"salery",className:"form-control",required:"required",placeholder:"Enter Salary",value:i,onChange:function(e){return u(e.target.value)}}),r.a.createElement("div",{className:"alertred"},p),r.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Update"})))},O=function(){return r.a.createElement("div",{className:"loader pos-fixed"},r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-spinner fa-spin"})," Loading..."))},C=function(e){for(var t=e.data,a=e.maxitem,l=e.setFilterarr,s=e.maxbtn,c=Object(n.useState)(1),o=Object(m.a)(c,2),i=o[0],u=o[1],d=Object(n.useState)(1),p=Object(m.a)(d,2),h=p[0],f=p[1],E=Object(n.useState)(""),g=Object(m.a)(E,2),b=g[0],v=g[1],y=function(e,t,a){return--a,e.slice(a*t,(a+1)*t)},N=function(e,t){return e%t==0?e/t:parseInt(e/t)+1},j=N(t.length,a),S=[],O=1;O<=j;O++)S.push(O);var C=N(S.length,s);Object(n.useEffect)((function(){l(y(t,a,h)),v(y(S,s,i))}),[]);var w=function(e){f(e),l(y(t,a,e))},k=b&&b.map((function(e,t){return e==h?r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return w(e)}},e)):r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"btn btn-success",onClick:function(){return w(e)}},e))}));return r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return u(i-1),1==i&&(u(C),v(y(S,s,i+1))),void v(y(S,s,i))}},"Prev"),r.a.createElement("ul",{className:"pagination-ul"},k),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return u(i+1),i==C&&(u(1),v(y(S,s,i-1))),void v(y(S,s,i))}},"Next"),"page divider",j,r.a.createElement("br",null),"nav divider",C)},w=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(!1),c=Object(m.a)(s,2),o=c[0],i=c[1],u=Object(n.useState)(!0),d=Object(m.a)(u,2),p=d[0],h=d[1],f=Object(n.useState)(null),E=Object(m.a)(f,2),g=E[0],b=E[1],v=Object(n.useState)(""),y=Object(m.a)(v,2),w=y[0],k=y[1],x=Object(n.useState)(""),D=Object(m.a)(x,2),A=D[0],T=D[1],I=Object(n.useState)(""),q=Object(m.a)(I,2),P=q[0],U=q[1],L=Object(n.useState)(""),F=Object(m.a)(L,2),J=F[0],R=F[1],Y=Object(n.useState)(""),_=Object(m.a)(Y,2),V=_[0],B=_[1],H=Object(n.useState)(""),M=Object(m.a)(H,2),W=M[0],z=M[1],$=Object(n.useState)(""),G=Object(m.a)($,2),K=G[0],Q=G[1];A>110&&(R("Please Enter valid Age"),T("")),P>1e7&&(B("Please Enter valid Salary"),U(""));var X=function(){fetch("http://dummy.restapiexample.com/api/v1/employees").then((function(e){return e.json()})).then((function(e){z(e),Q(e.slice(0,10)),console.log("Data List",K),h(!1)}))};Object(n.useEffect)((function(){X()}),[]);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"overflow-auto"},r.a.createElement(N,{filterarr:K,name:w,setName:k,setLoadertoggle:h,age:A,setAge:T,salary:P,setSalary:U,data:W,apiDatashow:X,toggle1:o,setToggle1:i,setId:b})),r.a.createElement("div",{className:"position-absuform"},o&&r.a.createElement(S,{salarya:V,agea:J,name:w,setLoadertoggle:h,setName:k,age:A,setAge:T,salary:P,setSalary:U,apiDatashow:X,toggle1:o,setToggle1:i,id:g}))),r.a.createElement("div",{className:"col-md-4"},a&&r.a.createElement(j,{name:w,setName:k,age:A,setAge:T,salary:P,setSalary:U,salarya:V,agea:J,apiDatashow:X,setToggle:l,setLoadertoggle:h}),p&&r.a.createElement(O,null)),r.a.createElement("div",{className:"col-md-8"},r.a.createElement(C,{data:W,setFilterarr:Q,maxitem:10,maxbtn:4})),r.a.createElement("div",{className:"col-md-4 text-right"},r.a.createElement("button",{onClick:function(){l(!a)},className:"btn btn-primary"},"Add Item"))))},k=function(){Object(n.useEffect)((function(){e()}),[]);var e=function(){},t=Object(n.useState)(""),a=Object(m.a)(t,2),l=a[0],s=a[1],c=l&&l.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",null,e.id),r.a.createElement("td",{className:"name"},e.name),r.a.createElement("td",null,e.age),r.a.createElement("td",null,e.salary))}));return r.a.createElement("div",{className:"container"},r.a.createElement("h5",null,"Data 1"),r.a.createElement("table",{className:"datalist"},r.a.createElement("tr",{className:"static-top"},r.a.createElement("th",null,"Id"),r.a.createElement("th",{className:"name"},"Name"),r.a.createElement("th",null,"Age"),r.a.createElement("th",null,"Salary")),c),r.a.createElement(C,{data:[{id:1,name:"mohit",age:22,salary:6e5},{id:2,name:"mohifdt",age:22,salary:6e5},{id:3,name:"mogfghit",age:22,salary:6e5},{id:4,name:"mohigfgt",age:22,salary:6e5},{id:5,name:"mogfgfdhit",age:22,salary:6e5},{id:6,name:"mohdgit",age:22,salary:6e5},{id:7,name:"mofghit",age:22,salary:6e5},{id:8,name:"dddmohit",age:22,salary:6e5},{id:9,name:"msdohit",age:22,salary:6e5},{id:10,name:"mohifffft",age:22,salary:6e5},{id:10,name:"mohifffft",age:22,salary:6e5},{id:10,name:"mohifffft",age:22,salary:6e5},{id:10,name:"mohifffft",age:22,salary:6e5},{id:10,name:"mohifffft",age:22,salary:6e5},{id:10,name:"mohifffft",age:22,salary:6e5},{id:10,name:"mohifffft",age:22,salary:6e5},{id:10,name:"mohifffft",age:22,salary:6e5},{id:10,name:"mohifffft",age:22,salary:6e5},{id:10,name:"mohifffft",age:22,salary:6e5},{id:10,name:"mohifffft",age:22,salary:6e5},{id:10,name:"mohifffft",age:22,salary:6e5},{id:10,name:"mohifffft",age:22,salary:6e5},{id:10,name:"mohifffft",age:22,salary:6e5}],setFilterarr:s,maxitem:3,maxbtn:2}))},x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onUpdateItems=function(){var e=a.state.nvalue,t=a.state.uvalue;return a.setState((function(n){a.state.list[e]=t})),!0},a.state={list:[42,33,68],nvalue:"",uvalue:""},localStorage.token||a.props.history.push("/login"),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{class:"container"},r.a.createElement("ul",{class:"names-ul"},this.state.list.map((function(e){return r.a.createElement("li",{key:e},"The person is ",e," years old.")}))),r.a.createElement("form",{class:"update-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter value witch you  have to Update",value:this.state.nvalue,onChange:function(t){return e.setState({nvalue:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter value to Update",value:this.state.uvalue,onChange:function(t){return e.setState({uvalue:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:this.onUpdateItems},"Update"))))}}]),t}(n.Component),D=function(e){var t=e.match,a=Object(n.useState)("mohit"),l=Object(m.a)(a,2),s=l[0],c=l[1];return Object(n.useEffect)((function(){fetch("https://reqres.in/api/users/".concat(t.params.detailId)).then((function(e){return e.json()})).then((function(e){c(e.data)}))}),[]),console.log("list",s),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"porson-img-container"},r.a.createElement("img",{src:s.avatar,className:"person-img"})),r.a.createElement("p",null,r.a.createElement("strong",null,"User Name:")," ",s.first_name," ",s.last_name),r.a.createElement("p",null,r.a.createElement("strong",null,"User Email:")," ",s.email))))},A=function(e){return r.a.createElement("div",{className:"post-slider"},r.a.createElement(c.b,{to:"/details/".concat(e.id)},r.a.createElement("img",{src:e.avtar,className:"post-img"})),r.a.createElement("strong",null,"Name")," ",e.name,r.a.createElement("br",null),r.a.createElement("strong",null,"Email")," ",e.email)},T=function(e){var t=[{name:"mohit",email:"abc@123",avtar:"/img/bg.png"},{name:"Lakhwinder",email:"abc@123",avtar:"/img/Desert.jpg"},{name:"Vipin",email:"abc@123",avtar:"/img/Hydrangeas.jpg"},{name:"Aman",email:"abc@123",avtar:"/img/Jellyfish.jpg"},{name:"Jatin",email:"abc@123",avtar:"/img/Penguins.jpg"}].map((function(e,t){return r.a.createElement(A,{name:e.name,email:e.email,avtar:e.avtar})}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"blog-slider"},t))},I=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={data:[]},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://reqres.in/api/users/?results=500").then((function(e){return e.json()})).then((function(t){e.setState({data:t.data}),console.log("State",e.state.data)}))}},{key:"render",value:function(){var e=this.state.data.map((function(e,t){return r.a.createElement(A,{id:e.id,name:"".concat(e.first_name," ").concat(e.last_name),email:e.email,avtar:e.avatar})}));return r.a.createElement("div",{className:"blog-slider"},e)}}]),t}(n.Component),q=function(e){return localStorage.token||e.history.push("/login"),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"container"},r.a.createElement(I,null))))},P=function e(t){return localStorage.clear(),t.history.push("/"),e};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=function(){return localStorage.token?r.a.createElement("header",{class:"bg-info text-white main-header"},r.a.createElement("div",{class:"container"},r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light"},r.a.createElement("a",{class:"navbar-brand"},r.a.createElement(c.b,{to:"/"},r.a.createElement("img",{src:"logo.png"}))),r.a.createElement("button",{class:"navbar-toggler bg-light",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{class:"navbar-nav mr-left-auto"},r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link"},r.a.createElement(c.b,{to:"/postslider1"},"Dynamic Page"))),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link"},r.a.createElement(c.b,{to:"/apicrud"},"API Crud"))),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link"},r.a.createElement(c.b,{to:"/crudsystem"},"CRUDSystem"))),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link"},r.a.createElement(c.b,{to:"/createform"},"Create Form"))),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link"},r.a.createElement(c.b,{to:"/updateform"},"Update Form"))),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link"},r.a.createElement(c.b,{to:"/deleteform"},"Delete Form"))),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link"},r.a.createElement(c.b,{to:"/logout"},"logout")))))))):""},L=r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(U,null),r.a.createElement(o.a,{exact:!0,path:"/",component:q}),r.a.createElement(o.a,{path:"/login",component:i}),r.a.createElement(o.a,{path:"/register",component:E}),r.a.createElement(o.a,{path:"/logout",component:P}),r.a.createElement(o.a,{path:"/crudsystem",component:g}),r.a.createElement(o.a,{path:"/createform",component:b}),r.a.createElement(o.a,{path:"/updateform",component:v}),r.a.createElement(o.a,{path:"/deleteform",component:y}),r.a.createElement(o.a,{path:"/updateitem",component:x}),r.a.createElement(o.a,{path:"/pagination",component:k}),r.a.createElement(o.a,{path:"/apicrud",component:w}),r.a.createElement(o.a,{path:"/details/:detailId",component:D}),r.a.createElement(o.a,{path:"/postslider",component:T}),r.a.createElement(o.a,{path:"/postslider1",component:q})));s.a.render(L,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.27a42d85.chunk.js.map