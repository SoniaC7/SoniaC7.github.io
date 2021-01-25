const easy = Vue.createApp({
    data(){
        return {
           index: 1,
           i_clicked: 1,
           total_images: 15,
           fol_name: '',
           score: 0,
           progress: 0,
           finish_level: false,
           badge_earned: false,
           msg_win: false,
           msg_lose: false,
           media_right: false
        }
    },
    computed:{
        progressed(){
            return this.progress.toFixed();
        }
    }, 
    methods:{
        log(message){
            console.log(message);
        },
        increment_score_win(index){
            if( this.i_clicked == index){
                this.score = this.score + 2;
                this.msg_win = true;
                this.increment_progress();
                this.i_clicked += 1;
            }
        },
        increment_score_lose(index){
            if( this.i_clicked == index){
                this.score = this.score + 1;
                this.msg_lose = true;
                this.increment_progress();
                this.i_clicked += 1;
            }
        },
        increment_progress(){
            if (this.progress < 100)
                this.progress = Math.round((this.score / this.total_images /2) * 100);
            
        },
        getImageMedia(index){
            in_string = index.toString();
            this.fol_name = './assets/images/media/easy/'+ in_string + '/media.png';
            return this.fol_name;
        },
        getImageReal(index){
            in_string = index.toString();
            this.fol_name = './assets/images/media/easy/'+ in_string + '/real.png';
            return this.fol_name;
        },
        next(){
            this.index = this.index + 1;
            this.log(this.index);
            this.log(this.score);
            
            this.msg_win = false;
            this.msg_lose = false;
            
            this.media_right= Math.random() < 0.5;
            this.log(this.media_right);

            if(this.index <= this.total_images){
                this.getImageMedia(this.index);
                this.getImageReal(this.index);
            }

            else{
                this.finish_level = true;
                if(this.progress == 100){
                    this.badge_earned = true;
                    
                    /*game.badges[0].earned = true;*/
                    /*this.log(game.data.badges);*/
                }
            }

            
        },
        go_to_levels(){
            window.location.href = "./instagram.html";
        },
        go_to_menu(){
            window.location.href = "./game.html";
        }
    }
})

