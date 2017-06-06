(function() {
            $(document).scroll(function(){
                
                var scrollTop=$(document).scrollTop();
//                alert(scrollTop);
                    if(scrollTop>0){
                        $('.navbar').addClass("sticky");
//                        $('.row0').fadeOut(1000);
                    }else{
                        $('.navbar').removeClass("sticky");
                    }
            });
}).call(this);
