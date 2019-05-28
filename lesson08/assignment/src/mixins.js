export const toggleMixin ={
  data(){
    isActive:false;
  },
  methods: {
  toggle: function () {
    if(this.isActive){
            this.isActive = false;
          }else{
            this.isActive = true;
    }
  }
}
}
