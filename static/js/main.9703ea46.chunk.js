(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var i=n(2),r=n.n(i),a=n(15),c=n.n(a),o=(n(23),n(8)),l=n(9),s=n(3),d=n(4),p=n(10),u=n(6),j=n(5),b=(n(24),n(7)),h=n.n(b),m=(n(25),n(0)),x=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"navbarContainer",children:Object(m.jsx)("h3",{children:"I am Navbar.js. Build me."})})}}]),n}(i.Component),O=x,y=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.updateInputField,n=e.personalInformation;return Object(m.jsxs)("div",{className:"personalInformationForm",style:{borderStyle:"solid",borderRadius:2,borderColor:"purple",borderWidth:10},children:[Object(m.jsx)("h3",{children:"I am personalInformationForm.js. I take all of the personal information fields and keep them in one place!"}),Object(m.jsxs)("div",{className:"nameFieldContainer",children:["Name: ",Object(m.jsx)("input",{className:"inputField",type:"text",placeholder:"Ferris Bueller",onChange:function(e){return t(e,n,"name")},value:n.name})]}),Object(m.jsxs)("div",{className:"titleFieldContainer",children:["Title: ",Object(m.jsx)("input",{className:"inputField",type:"text",placeholder:"Front-end Developer",onChange:function(e){return t(e,n,"title")},value:n.title})]}),Object(m.jsxs)("div",{className:"photoFieldContainer",children:["Photo URL: ",Object(m.jsx)("input",{className:"inputField",type:"url",placeholder:"ttps://giphy.com/embed/BzyTuYCmvSORqs1ABM",onChange:function(e){return t(e,n,"photoURL")},value:n.photoURL}),Object(m.jsx)("button",{type:"button",children:"Get Photo"})]}),Object(m.jsxs)("div",{className:"addressFieldContainer",children:["Address: ",Object(m.jsx)("input",{className:"inputField",type:"text",placeholder:"137 Trench Run, Death Star",onChange:function(e){return t(e,n,"address")},value:n.address})]}),Object(m.jsxs)("div",{className:"phoneFieldContainer",children:["Phone: ",Object(m.jsx)("input",{className:"inputField",type:"tel",placeholder:"123-456-1337",onChange:function(e){return t(e,n,"phone")},value:n.phone})]}),Object(m.jsxs)("div",{className:"emailFieldContainer",children:["Email: ",Object(m.jsx)("input",{className:"inputField",type:"tel",placeholder:"developer_who_says_NI@email.com",onChange:function(e){return t(e,n,"email")},value:n.email})]}),Object(m.jsxs)("div",{className:"linkedInFieldContainer",children:["LinkedIn: ",Object(m.jsx)("input",{className:"inputField",type:"url",placeholder:"linkedin.com/McClane-John",onChange:function(e){return t(e,n,"linkedIn")},value:n.linkedIn})]}),Object(m.jsxs)("div",{className:"gitHubFieldContainer",children:["GitHub: ",Object(m.jsx)("input",{className:"inputField",type:"url",placeholder:"github.com/github",onChange:function(e){return t(e,n,"gitHub")},value:n.gitHub})]}),Object(m.jsx)("p",{}),Object(m.jsx)("p",{})]})}}]),n}(i.Component),f=y,v=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.workExperienceArr,n=e.updateInputField,i=e.createExperience,r=e.deleteExperience,a=e.elementType,c=[];return t.forEach((function(e){c.push(Object(m.jsx)(k,{workExperience:e,updateInputField:n,deleteExperience:r},e.key))})),Object(m.jsxs)("div",{className:"workExperienceField",style:{borderStyle:"solid",borderRadius:2,borderColor:"navy",borderWidth:10},children:[Object(m.jsx)("h3",{children:"I am workExperienceForm.js. I take all of the work experience fields and keep them together! I am one wrapper field with an add button, and an interating subcomponent for variable numbers of workExperienceField"}),c,Object(m.jsx)("p",{}),Object(m.jsx)("button",{type:"submit",onClick:function(e){return i(e,a)},children:"Add Work Experience"}),Object(m.jsx)("p",{})]})}}]),n}(i.Component),k=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.workExperience,n=e.updateInputField,i=e.deleteExperience;return Object(m.jsxs)("form",{className:"workExperienceSlot",style:{borderStyle:"dotted",borderRadius:2,borderColor:"magenta",borderWidth:10},children:[Object(m.jsx)("p",{children:"I am an individual WorkExperienceSlot. There can be several or none of me, and are determined variably by state management in app!"}),Object(m.jsxs)("div",{className:"positionFieldContainer",children:["Position: ",Object(m.jsx)("input",{className:"inputField",type:"text",placeholder:"Stormtrooper, 2nd Battalion",onChange:function(e){return n(e,t,"position")},value:t.position})]}),Object(m.jsxs)("div",{className:"companyFieldContainer",children:["Company: ",Object(m.jsx)("input",{className:"inputField",type:"text",placeholder:"The Empire, LLC",onChange:function(e){return n(e,t,"company")},value:t.company})]}),Object(m.jsxs)("div",{className:"locationFieldContainer",children:["Location: ",Object(m.jsx)("input",{className:"inputField",type:"text",placeholder:"Star, Death, The",onChange:function(e){return n(e,t,"location")},value:t.location})]}),Object(m.jsxs)("div",{className:"startDateFieldContainer",children:["Start Date: ",Object(m.jsx)("input",{className:"inputField",type:"month",onChange:function(e){return n(e,t,"startDate")},value:t.startDate})]}),Object(m.jsxs)("div",{className:"endDateFieldContainer",children:["End Date: ",Object(m.jsx)("input",{className:"inputField",type:"month",onChange:function(e){return n(e,t,"endDate")},value:t.endDate})]}),Object(m.jsxs)("div",{className:"descriptionFieldContainer",children:["Description of Duties: ",Object(m.jsx)("textarea",{className:"inputField",placeholder:"Kept workspace free of filthy Rebel scum, organized weekly Stormtrooper Socials",onChange:function(e){return n(e,t,"descriptionOfDuties")},value:t.descriptionOfDuties})]}),Object(m.jsx)("button",{type:"button",onClick:function(e){return i(e,t)},children:" Delete this Entry "}),Object(m.jsx)("p",{})]})}}]),n}(i.Component),E=v,g=n(12),C=n(11),S=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.skillArr,n=e.updateInputField,i=e.createExperience,r=e.deleteExperience,a=e.toggleSkillEdit,c=[];return t.forEach((function(e){c.push(Object(m.jsx)(F,{skill:e,updateInputField:n,toggleSkillEdit:a,deleteExperience:r},e.key))})),Object(m.jsxs)("div",{className:"SkillForm",style:{borderStyle:"solid",borderRadius:2,borderColor:"red",borderWidth:10},children:[Object(m.jsx)("div",{className:"skillsHeaderText",children:"Skills"}),c,Object(m.jsx)("button",{type:"submit",onClick:function(e){return i(e,"skill")},children:"Add Another Skill"}),Object(m.jsx)("p",{})]})}}]),n}(i.Component),F=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.skill,n=e.updateInputField,i=e.toggleSkillEdit,r=e.deleteExperience;return t.edit?Object(m.jsxs)("form",{className:"skillEditForm",children:[Object(m.jsx)("input",{type:"text",className:"inputField",placeholder:"Shooting womp rats in Beggar's Canyon",onChange:function(e){return n(e,t,t)},onKeyDown:function(e){"Enter"===e.key&&i(e,t)},value:t.skill}),Object(m.jsx)(g.a,{icon:C.a,onClick:function(e){return i(e,t)}}),Object(m.jsx)(g.a,{icon:C.c,onClick:function(e){return r(e,t)}})]}):Object(m.jsxs)("form",{className:"skillForm",children:[t.skill," |",Object(m.jsx)(g.a,{icon:C.b,onClick:function(e){return i(e,t)}}),Object(m.jsx)(g.a,{icon:C.c,onClick:function(e){return r(e,t)}})]})}}]),n}(i.Component),N=S,w=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.educationalExperienceArr,n=e.updateInputField,i=e.createExperience,r=e.deleteExperience,a=e.elementType,c=[];return t.forEach((function(e){c.push(Object(m.jsx)(D,{educationalExperience:e,updateInputField:n,deleteExperience:r},e.key))})),Object(m.jsxs)("div",{className:"educationExperienceField",style:{borderStyle:"solid",borderRadius:2,borderColor:"brown",borderWidth:10},children:[Object(m.jsx)("h3",{children:"I am EducationalExperienceForm.js. I take all of the educational experience fields and keep them together! I am one wrapper field with an add button, and an interating subcomponent for variable numbers of educationExperienceField"}),c,Object(m.jsx)("p",{}),Object(m.jsx)("button",{type:"submit",onClick:function(e){return i(e,a)},children:"Add More Educational Experience"}),Object(m.jsx)("p",{})]})}}]),n}(i.Component),D=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.educationalExperience,n=e.updateInputField,i=e.deleteExperience;return Object(m.jsxs)("form",{className:"educationExperienceSlot",style:{borderStyle:"dotted",borderRadius:2,borderColor:"aqua",borderWidth:10},children:[Object(m.jsx)("p",{children:"I am an individual EducationExperienceSlot. There can be several or none of me, and are determined variably by state management in app!"}),Object(m.jsxs)("div",{className:"institutionFieldContainer",children:["Institution: ",Object(m.jsx)("input",{className:"inputField",type:"text",placeholder:"Hogwarts School of Witchcraft and Wizardry",onChange:function(e){return n(e,t,"institution")},value:t.institution})]}),Object(m.jsxs)("div",{className:"degreeFieldContainer",children:["Degree: ",Object(m.jsx)("input",{className:"inputField",type:"text",placeholder:"Master of The Dark Arts",onChange:function(e){return n(e,t,"degree")},value:t.degree})]}),Object(m.jsxs)("div",{className:"startDateFieldContainer",children:["Start Datey: ",Object(m.jsx)("input",{className:"inputField",type:"month",onChange:function(e){return n(e,t,"startDate")},value:t.startDate})]}),Object(m.jsxs)("div",{className:"endDateFieldContainer",children:["End Date: ",Object(m.jsx)("input",{className:"inputField",type:"month",onChange:function(e){return n(e,t,"endDate")},value:t.endDate})]}),Object(m.jsxs)("div",{className:"detailsFieldContainer",children:["Additional Details: ",Object(m.jsx)("textarea",{className:"inputField",placeholder:"First Hufflepuff to graduate in The Dark Arts",onChange:function(e){return n(e,t,"details")},value:t.details})]}),Object(m.jsx)("button",{type:"button",onClick:function(e){return i(e,t)},children:" Delete this Entry "}),Object(m.jsx)("p",{})]})}}]),n}(i.Component),I=w,A=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.updateInputField,n=e.appState,i=e.createExperience,r=e.deleteExperience,a=e.toggleSkillEdit,c=e.setSampleState;return Object(m.jsxs)("div",{className:"FormContainer",style:{borderStyle:"solid",borderRadius:2,borderColor:"green",borderWidth:10},children:[Object(m.jsx)("h3",{children:"I am FormContainer.js. I contain forms. Let's put something together"}),Object(m.jsx)("button",{type:"submit",onClick:c,className:"sampleStateButton",children:"Generate Sample CV"}),Object(m.jsx)(f,{updateInputField:t,personalInformation:n.personalInformation}),Object(m.jsx)(E,{workExperienceArr:n.workExperience.workExperienceArr,elementType:n.workExperience.type,updateInputField:t,createExperience:i,deleteExperience:r}),Object(m.jsx)(N,{skillArr:n.skillArr,createExperience:i,deleteExperience:r,toggleSkillEdit:a,updateInputField:t}),Object(m.jsx)(I,{educationalExperienceArr:n.educationalExperience.educationalExperienceArr,elementType:n.educationalExperience.type,updateInputField:t,createExperience:i,deleteExperience:r})]})}}]),n}(i.Component),R=A,T=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.appState,t=e.personalInformation,n=e.workExperience.workExperienceArr,i=e.skillArr,r=e.educationalExperience.educationalExperienceArr,a=[];n.forEach((function(e){a.push(Object(m.jsxs)("div",{className:"previewWorkSlot",children:[Object(m.jsx)("text",{className:"previewWorkPosition",children:e.position.toUpperCase()})," ",e.startDate?"  ||  ":""," ",e.startDate," ",e.endDate?"to":""," ",e.endDate,Object(m.jsxs)("div",{className:"previewWorkCompany",children:[e.company,e.location?"  ||  ":"",e.location]}),Object(m.jsx)("div",{className:"previewWorkDetails",children:e.descriptionOfDuties})," ","\n"]},e.key))}));var c=[];i.forEach((function(e){c.push(Object(m.jsx)("li",{className:"previewSkillSlot",children:e.skill},e.key))}));var o=[];return r.forEach((function(e){o.push(Object(m.jsxs)("div",{className:"previewEducationalExperienceSlot",children:[Object(m.jsx)("text",{className:"previewEducationInstitution",children:e.institution})," ",e.degree?" || ":""," ",e.degree," ",Object(m.jsx)("div",{}),Object(m.jsxs)("div",{className:"previewEducationDates",children:[e.startDate," ",e.endDate?"to":""," ",e.endDate]}),Object(m.jsx)("div",{className:"previewEducationDetails",children:e.details})]},e.key))})),Object(m.jsxs)("div",{className:"previewContainer",style:{borderStyle:"solid",borderRadius:3,borderWidth:1,borderColor:"lightgrey",whiteSpace:"pre-wrap"},children:[Object(m.jsxs)("div",{className:"previewPersonal",children:[Object(m.jsx)("div",{className:"previewPersonalName",children:t.name}),Object(m.jsx)("div",{className:"previewPersonalTitle",children:t.title}),Object(m.jsx)("div",{className:"previewPersonalAddress",children:t.address}),Object(m.jsxs)("div",{className:"previewPersonalPhoneEmail",children:[t.email?Object(m.jsxs)("a",{href:"mailto:"+t.email,children:[" ",t.email," "]}):"",t.phone?" || ":"",t.phone]}),Object(m.jsxs)("div",{className:"previewPersonalLinks",children:[Object(m.jsx)("a",{href:t.linkedIn,children:t.linkedIn}),t.gitHub?"  ||  ":"",Object(m.jsx)("a",{href:t.gitHub,children:t.gitHub})]}),Object(m.jsx)("div",{className:"previewPersonalDivider",children:"- - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - "})]}),a[0]?Object(m.jsxs)("div",{className:"previewWorkContainer",children:[Object(m.jsx)("div",{className:"previewHeaderText",children:"Work Experience"}),a]}):"",c[0]?Object(m.jsxs)("div",{className:"previewSkillContainer",children:[Object(m.jsx)("div",{className:"previewHeaderText",children:"Skills"}),Object(m.jsx)("ul",{className:"previewSkillList",children:c})]}):"",o[0]?Object(m.jsxs)("div",{className:"previewEducationalContainer",children:[Object(m.jsx)("div",{className:"previewHeaderText",children:"Educational Experience"}),o]}):""]})}}]),n}(i.Component),L=T,P=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this,e)).updateInputField=i.updateInputField.bind(Object(p.a)(i)),i.createExperience=i.createExperience.bind(Object(p.a)(i)),i.deleteExperience=i.deleteExperience.bind(Object(p.a)(i)),i.setSampleState=i.setSampleState.bind(Object(p.a)(i)),i.toggleSkillEdit=i.toggleSkillEdit.bind(Object(p.a)(i)),i.state={personalInformation:{name:"",title:"",photoURL:"",address:"",phone:"",email:"",linkedIn:"",gitHub:"",type:"personalInformation"},workExperience:{type:"workExperience",workExperienceArr:[{position:"Stormtrooper, 2nd Battalion",company:"",location:"",startDate:"",endDate:"",descriptionOfDuties:"",key:h()(),type:"workExperience"}]},skillArr:[{skill:"TESTFOOBARSKILL",key:h()(),type:"skill",edit:!0}],educationalExperience:{type:"educationalExperience",educationalExperienceArr:[{type:"educationalExperience",institution:"1",degree:"",startDate:"",endDate:"",details:"",key:h()()}]}},i}return Object(d.a)(n,[{key:"updateInputField",value:function(e,t,n){e.preventDefault(),console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"),"personalInformation"===t.type?this.setState(Object(o.a)({},t.type,Object(l.a)(Object(l.a)({},this.state[t.type]),{},Object(o.a)({},n,e.target.value)))):"workExperience"===t.type||"educationalExperience"===t.type?this.setState(Object(o.a)({},t.type,Object(o.a)({type:t.type},t.type+"Arr",this.state[t.type][t.type+"Arr"].map((function(i){return i===t?Object(l.a)(Object(l.a)({},t),{},Object(o.a)({},n,e.target.value)):i}))))):"skill"===t.type&&this.setState({skillArr:this.state.skillArr.map((function(t){return t===n?Object(l.a)(Object(l.a)({},n),{},{skill:e.target.value}):t}))})}},{key:"createExperience",value:function(e,t){e.preventDefault(),"workExperience"===t?this.setState(Object(o.a)({},t,Object(o.a)({type:t},t+"Arr",this.state[t][t+"Arr"].concat([{position:"Sample",company:"",location:"",startDate:"",endDate:"",descriptionOfDuties:"",key:h()(),type:"workExperience"}])))):"educationalExperience"===t?this.setState(Object(o.a)({},t,Object(o.a)({type:t},t+"Arr",this.state[t][t+"Arr"].concat([{type:"educationalExperience",institution:"",degree:"",startDate:"",endDate:"",details:"",key:h()()}])))):"skill"===t&&this.setState({skillArr:this.state.skillArr.concat({type:"skill",key:h()(),skill:"I AM A NEW SKILL, FEAR ME",edit:!1})})}},{key:"deleteExperience",value:function(e,t){e.preventDefault(),"skill"===t.type?this.setState({skillArr:this.state.skillArr.filter((function(e){return e!==t}))}):this.setState(Object(o.a)({},t.type,Object(o.a)({type:t.type},t.type+"Arr",this.state[t.type][t.type+"Arr"].filter((function(e){return e!==t})))))}},{key:"setSampleState",value:function(e){e.preventDefault(),this.setState({personalInformation:{name:'Dominic "D" Roemer',title:"Front-end Developer",photoURL:"",address:"9337 Stargaze Ave, San Diego, CA",phone:"XXX-XXX-9407",email:"dominicroemer@gmail.com",linkedIn:"linkedin.com/in/dominicroemer",gitHub:"github.com/dominicroemer",type:"personalInformation"},workExperience:{type:"workExperience",workExperienceArr:[{position:"Front-end Developer",company:"Self Employed",location:"San Diego, California",startDate:"2021-05",endDate:"Present",descriptionOfDuties:"Entirely self-taught from web resources (TheOdinProject && StackOverflow). Established strong fundamental Javascript knowledge for easy integration into existing work-flows",key:h()(),type:"workExperience"},{position:"Executive Producer",company:"The Esports Channel",location:"Miami, Florida",startDate:"2019-04",endDate:"2019-08",descriptionOfDuties:"Acted as on-air talent, writer, editor, graphics, and more for esports startup. Used extensive knowledge of broadcast to level-up existing broadcast from a once weekly broadcast to a daily show",key:h()(),type:"workExperience"},{position:"Esports Commentator",company:"Riot Games",location:"Los Angeles, USA  &&  Sydney, AUS  &&  Shanghai, CN",startDate:"2015-01",endDate:"2018-12",descriptionOfDuties:"On-air commentator for LCS, LPL, and Collegiate competitive esports broadcasts. Required in depth knowledge of game, mechanics, players, competitive narrative, and broadcast fundamentals, to be communicated in on-the-fly dictation",key:h()(),type:"workExperience"}]},skillArr:[{skill:"Javascript, HTML, CSS",key:h()(),type:"skill",edit:!1},{skill:"React",key:h()(),type:"skill",edit:!1},{skill:"Git and Github",key:h()(),type:"skill",edit:!1},{skill:"Excellent Public Speaker",key:h()(),type:"skill",edit:!1}],educationalExperience:{type:"educationalExperience",educationalExperienceArr:[{type:"educationalExperience",institution:"University of California at San Diego",degree:"Computer Science, B.S.",startDate:"2010-09",endDate:"2014-12",details:"Studied Bioenginering for 1.5 years, Comp Sci for 2 years. Left before graduating to pursue esports commentary with Riot Games in late 2014.",key:h()()}]}})}},{key:"toggleSkillEdit",value:function(e,t){e.preventDefault(),this.setState({skillArr:this.state.skillArr.map((function(e){return e===t?Object(l.a)(Object(l.a)({},t),{},{edit:!t.edit}):e}))})}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"AppContainer",style:{borderStyle:"solid",borderRadius:2,borderColor:"blue",borderWidth:10},children:[Object(m.jsx)(O,{}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)(R,{updateInputField:this.updateInputField,createExperience:this.createExperience,deleteExperience:this.deleteExperience,setSampleState:this.setSampleState,toggleSkillEdit:this.toggleSkillEdit,appState:this.state}),Object(m.jsx)(L,{appState:this.state,className:"previewContainer"})]})]})}}]),n}(i.Component),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),r(e),a(e),c(e)}))};c.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(P,{})})),W()}},[[29,1,2]]]);
//# sourceMappingURL=main.9703ea46.chunk.js.map