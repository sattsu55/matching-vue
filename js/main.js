var scroll = new SmoothScroll()

var app = new Vue({
  el: '#app',
  data: {
    order:false,
    comment:"",commentbox:false,
    id:4,
    like:false,
    create:true,
    show:false,
    show1:false,
    bottom_age:0,
    top_age:100,
    name:"花子",
    age:25,
    job:"会社員",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzdhqT2rN08Qpv4aeaAgSXF-QevEj7QgIS7ULEnD0Vt2Svp6qB",
    lists: [
      { id:0,like:true,name: 'はなこ', age: 10,job:"看護師",image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSBxTr5k8FpyLRe1e9Y-V59wdBMWVqWXBd2a0cdMTunXyPKW88' },
      { id:1,like:true,name: 'ちひろ', age: 20,job:"保育士",image:'https://amd.c.yimg.jp/amd/20171024-00000004-storyfulp-000-1-view.jpg' },
      { id:2,like:false,name: 'やすよ', age: 50,job:"農家",image:'http://livedoor.blogimg.jp/karapaia_zaeega/imgs/2/6/262dbe21.jpg' },
      { id:3,like:true,name:'ゆか',age:30,job:"会社員",image:'https://wired.jp/wp-content/uploads/2018/01/GettyImages-522585140.jpg' }
    ],
  },
  methods:{
    addlist(){
      var item = {
        id: this.id,
        like: false,
        name: this.name,
        age: this.age,
        job: this.job,
        image: this.image
      }
      this.lists.push(item);
      this.id += 1;
    },
    deletelist(index){
      if(confirm('are you sure?')){
        this.lists.splice(index, 1);
      }
    },
    scrollTop() {
      scroll.animateScroll(0)
    },
  },
  computed:{
    matched(){
      return this.lists.filter((el) => {
          return (el.age <= this.top_age && el.age >= this.bottom_age)
      },this)
    },
    sorted(){
      return _.orderBy(this.matched, 'age', this.order ? 'desc' : 'asc')
    },
  },
})
