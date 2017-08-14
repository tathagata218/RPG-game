$(function(){
    var gokuHP=180;
    var cellHP=100;
    var firezaHP=120;
    var gohanHP=130;
    var imgSize="height='150px' width='95px'";
    var gokuImg="https://vignette3.wikia.nocookie.net/vsbattles/images/5/56/Goku_%28Base%29.png/revision/latest?cb=20160315175220' alt='charecter1Img";
    var cellImg="https://vignette2.wikia.nocookie.net/dragonball/images/6/64/Perfect_cell_by_noname37-d33a2d5.png/revision/latest?cb=20120124062858";
    var friezaImg="http://static.tvtropes.org/pmwiki/pub/images/6a1c3bbd1fa4dbd406150e869c890ef0.png";
    var gohanImg="http://img09.deviantart.net/4036/i/2017/073/3/e/gohan_ssj2__cell_saga____dragon_ball_z_by_zed_creations-db29j8g.png";
    var cellHPCountPow="enemyHealth='100' counterattackPower='33'";
    var gokuHPCountPow="enemyHealth='180' counterattackPower='35'";
    var friezaHPCountPow="enemyHealth='120' counterattackPower='30'";
    var gohanHPCountPow="enemyHealth='130' counterattackPower='32'";
//   -----------------------------------------------------------------------------------------------------------------------------
//   -----------------------------------------------------------------------------------------------------------------------------
//   -----------------------------------------------------------------------------------------------------------------------------  

    $("#char1").click(function(){
        var userPic="<h5>Goku</h5><img "+imgSize+" src="+gokuImg+" alt='GokuImg'><p id='gokuhpID' attackPoints=''>HP:"+gokuHP+"</p>";
        var enemyPic1="<h5>Cell</h5><img "+imgSize+" src="+cellImg+" alt='charecter1Img'><p id='cellhpID'>HP:"+cellHP+"</p>";
        var enemyPic2="<h5>Frieza</h5><img "+imgSize+" src="+friezaImg+" alt='charecter1Img'><p id='firezahpID'>HP:"+firezaHP+"</p>";
        var enemyPic3="<h5>Gohan</h5><img "+imgSize+" src="+gohanImg+" alt='charecter1Img'><p id='gohanID'>HP:"+gohanHP+"</p>";
        var listofenemyChar="<div class='container-fluid'><div class='row'><div class='col-md-2 col-md-offset-3 pictures'><div "+cellHPCountPow+" class='pictures enemyImg'>"+enemyPic1+"</div></div><div class='col-md-2 pictures'><div "+friezaHPCountPow+" class='pictures enemyImg'>"+enemyPic2+"</div></div><div class='col-md-2 pictures'><div "+gohanHPCountPow+" class='pictures enemyImg'>"+enemyPic3+"</div></div></div></div>";
        var gokuattackPts=4;
        //alert("click works");
        $("#charecterChoice").fadeOut();
        $("#userCharecter").append("<div id='finaluserCharecter'>"+userPic+"</div>").fadeIn();
        $("#compEnemy").html(listofenemyChar).fadeIn();
    
        $(".enemyImg").click(function(){
            console.log("works");
            var thisPicture=this;
            var newenemyHealth=0;            
            var enemycharHealth=$(this).attr("enemyHealth");
            var counterAttack=$(this).attr("counterattackPower");
            var mainusercharHealth=180;
            console.log(newenemyHealth+" "+enemycharHealth+" "+counterAttack);
            //$(this).fadeOut();
            $("#attackSection").append(this);
            //$('.enemyImg').off('click');
            $("#enemySection").fadeOut();
            $("#compEnemy").fadeOut();



            $("#attackBtn").click(function(){
                gokuattackPts=gokuattackPts+gokuattackPts;
                mainusercharHealth=mainusercharHealth-counterAttack;
                newenemyHealth=enemycharHealth-gokuattackPts;

                console.log(gokuattackPts+" "+mainusercharHealth+" "+newenemyHealth);

                $("#gokuhpID").html("<p>Update HP: "+mainusercharHealth+"</p>");
                $("#displayHP").html("<p>Update HP: "+newenemyHealth+"</p>");

                if(newenemyHealth<=0){
                    console.log(newenemyHealth);
                    $(thisPicture).fadeOut();
                    $("#displayHP").fadeOut();
                    //$(".enemyImg").click();
                        $("#enemySection").fadeIn();
                        $("#compEnemy").fadeIn();

                        
                }
                

                else if(mainusercharHealth<=0){
                    $("#enemySection").empty();
                    $("#attackSection").empty();
                    $("#attackSection").html("<h1>Game Over</h1> <br>");
                    $("#attackSection").append("<button class='btn btn-default' id='resetBtn'>Restart</button>");

                    $("#resetBtn").click(function(){
                        location.reload();
                    });
                }

                // if($("#enemySection").find("img").length==0){
                //         $("#enemySection").empty();
                //     $("#attackSection").empty();
                //     $("#attackSection").html("<h1>You Won!!!</h1> <br>");
                //     $("#attackSection").append("<button class='btn btn-default' id='resetBtn'>Restart</button>");

                //     $("#resetBtn").click(function(){
                //         location.reload();
                //     });    
                //         }

                //console.log(counterAttack+" "+mainusercharHelth+" "+newenemyHealth);
                
                });

            

        });
    });
    
//   -----------------------------------------------------------------------------------------------------------------------------
//   -----------------------------------------------------------------------------------------------------------------------------
//   ----------------------------------------------------------------------------------------------------------------------------- 


    $("#char2").click(function(){
     var userPic="<h5>Cell</h5><img "+imgSize+" src="+cellImg+" alt='GokuImg'><p id='cellhpID' attackPoints=''>HP:"+cellHP+"</p>";
        var enemyPic1="<h5>Cell</h5><img "+imgSize+" src="+gokuImg+" alt='charecter1Img'><p id='cellhpID'>HP:"+gokuHP+"</p>";
        var enemyPic2="<h5>Frieza</h5><img "+imgSize+" src="+friezaImg+" alt='charecter1Img'><p id='firezahpID'>HP:"+firezaHP+"</p>";
        var enemyPic3="<h5>Gohan</h5><img "+imgSize+" src="+gohanImg+" alt='charecter1Img'><p id='gohanID'>HP:"+gohanHP+"</p>";
        var listofenemyChar="<div class='container-fluid'><div class='row'><div class='col-md-2 col-md-offset-3 pictures'><div "+gokuHPCountPow+" class='pictures enemyImg'>"+enemyPic1+"</div></div><div class='col-md-2 pictures'><div "+friezaHPCountPow+" class='pictures enemyImg'>"+enemyPic2+"</div></div><div class='col-md-2 pictures'><div "+gohanHPCountPow+" class='pictures enemyImg'>"+enemyPic3+"</div></div></div></div>";
        var cellattackPts=3;
        //alert("click works");
        $("#charecterChoice").fadeOut();
        $("#userCharecter").append("<div id='finaluserCharecter'>"+userPic+"</div>").fadeIn();
        $("#compEnemy").html(listofenemyChar).fadeIn();
    
        $(".enemyImg").click(function(){
            var thisPicture=this;
            var newenemyHealth=0;            
            var enemycharHealth=$(this).attr("enemyHealth");
            var counterAttack=$(this).attr("counterattackPower");
            var mainusercharHealth=100;
            console.log(newenemyHealth+" "+enemycharHealth+" "+counterAttack);
            //$(this).fadeOut();
            $("#attackSection").append(this);
            //$('.enemyImg').off('click');
            $("#enemySection").fadeOut();
            $("#compEnemy").fadeOut();



            $("#attackBtn").click(function(){
                cellattackPts=cellattackPts+cellattackPts;
                mainusercharHealth=mainusercharHealth-counterAttack;
                newenemyHealth=enemycharHealth-cellattackPts;

                console.log(cellattackPts+" "+mainusercharHealth+" "+newenemyHealth);

                $("#cellhpID").html("<p>Update HP: "+mainusercharHealth+"</p>");
                $("#displayHP").html("<p>Update HP: "+newenemyHealth+"</p>");

                if(newenemyHealth<=0){
                    console.log(newenemyHealth);
                    $(thisPicture).fadeOut();
                    $("#displayHP").fadeOut();
                    //$(".enemyImg").click();
                        $("#enemySection").fadeIn();
                        $("#compEnemy").fadeIn();
                    
                    if($("#enemySection").find("img").length==0){
                        $("#enemySection").empty();
                    $("#attackSection").empty();
                    $("#attackSection").html("<h1>You Won!!!</h1> <br>");
                    $("#attackSection").append("<button class='btn btn-default' id='resetBtn'>Restart</button>");

                    $("#resetBtn").click(function(){
                        location.reload();
                    });    
                        }
                
                    }
                else if(mainusercharHealth<=0){
                    $("#enemySection").empty();
                    $("#attackSection").empty();
                    $("#attackSection").html("Game Over <br>");
                    $("#attackSection").append("<button class='btn btn-default' id='resetBtn'>Restart</button>");

                    $("#resetBtn").click(function(){
                        location.reload();
                    });
                }

                
                //console.log(counterAttack+" "+mainusercharHelth+" "+newenemyHealth);
                
                });

            

        });   
    });

//   -----------------------------------------------------------------------------------------------------------------------------
//   -----------------------------------------------------------------------------------------------------------------------------
//   ----------------------------------------------------------------------------------------------------------------------------- 

    $("#char3").click(function(){
        var userPic="<h5>Goku</h5><img "+imgSize+" src="+friezaImg+" alt='GokuImg'><p id='gokuhpID' attackPoints=''>HP:"+firezaHP+"</p>";
        var enemyPic1="<h5>Cell</h5><img "+imgSize+" src="+gokuImg+" alt='charecter1Img'><p id='cellhpID'>HP:"+gokuHP+"</p>";
        var enemyPic2="<h5>Frieza</h5><img "+imgSize+" src="+cellImg+" alt='charecter1Img'><p id='firezahpID'>HP:"+cellHP+"</p>";
        var enemyPic3="<h5>Gohan</h5><img "+imgSize+" src="+gohanImg+" alt='charecter1Img'><p id='gohanID'>HP:"+gohanHP+"</p>";
        var listofenemyChar="<div class='container-fluid'><div class='row'><div class='col-md-2 col-md-offset-3 pictures'><div "+gokuHPCountPow+" class='pictures enemyImg'>"+enemyPic1+"</div></div><div class='col-md-2 pictures'><div "+cellHPCountPow+" class='pictures enemyImg'>"+enemyPic2+"</div></div><div class='col-md-2 pictures'><div "+gohanHPCountPow+" class='pictures enemyImg'>"+enemyPic3+"</div></div></div></div>";
        var friezaattackPts=4;
        //alert("click works");
        $("#charecterChoice").fadeOut();
        $("#userCharecter").append("<div id='finaluserCharecter'>"+userPic+"</div>").fadeIn();
        $("#compEnemy").html(listofenemyChar).fadeIn();
    
        $(".enemyImg").click(function(){
            var thisPicture=this;
            var newenemyHealth=0;            
            var enemycharHealth=$(this).attr("enemyHealth");
            var counterAttack=$(this).attr("counterattackPower");
            var mainusercharHealth=120;
            console.log(newenemyHealth+" "+enemycharHealth+" "+counterAttack);
            //$(this).fadeOut();
            $("#attackSection").append(this);
            //$('.enemyImg').off('click');
            $("#enemySection").fadeOut();
            $("#compEnemy").fadeOut();



            $("#attackBtn").click(function(){
                friezaattackPts=friezaattackPts+friezaattackPts;
                mainusercharHealth=mainusercharHealth-counterAttack;
                newenemyHealth=enemycharHealth-friezaattackPts;

                console.log(friezaattackPts+" "+mainusercharHealth+" "+newenemyHealth);

                $("#gokuhpID").html("<p>Update HP: "+mainusercharHealth+"</p>");
                $("#displayHP").html("<p>Update HP: "+newenemyHealth+"</p>");

                if(newenemyHealth<=0){
                    console.log(newenemyHealth);
                    $(thisPicture).fadeOut();
                    $("#displayHP").fadeOut();
                    //$(".enemyImg").click();
                        $("#enemySection").fadeIn();
                        $("#compEnemy").fadeIn();

                        
                }
                

                else if(mainusercharHealth<=0){
                    $("#enemySection").empty();
                    $("#attackSection").empty();
                    $("#attackSection").html("<h1>Game Over</h1> <br>");
                    $("#attackSection").append("<button class='btn btn-default' id='resetBtn'>Restart</button>");

                    $("#resetBtn").click(function(){
                        location.reload();
                    });
                }

                // if($("#enemySection").find("img").length==0){
                //         $("#enemySection").empty();
                //     $("#attackSection").empty();
                //     $("#attackSection").html("<h1>You Won!!!</h1> <br>");
                //     $("#attackSection").append("<button class='btn btn-default' id='resetBtn'>Restart</button>");

                //     $("#resetBtn").click(function(){
                //         location.reload();
                //     });    
                //         }

                //console.log(counterAttack+" "+mainusercharHelth+" "+newenemyHealth);
                
                });

            

        });  });

//   -----------------------------------------------------------------------------------------------------------------------------
//   -----------------------------------------------------------------------------------------------------------------------------
//   ----------------------------------------------------------------------------------------------------------------------------- 


    $("#char4").click(function(){
       var userPic="<h5>Goku</h5><img "+imgSize+" src="+gohanImg+" alt='GokuImg'><p id='gokuhpID' attackPoints=''>HP:"+gohanHP+"</p>";
        var enemyPic1="<h5>Cell</h5><img "+imgSize+" src="+cellImg+" alt='charecter1Img'><p id='cellhpID'>HP:"+cellHP+"</p>";
        var enemyPic2="<h5>Frieza</h5><img "+imgSize+" src="+friezaImg+" alt='charecter1Img'><p id='firezahpID'>HP:"+firezaHP+"</p>";
        var enemyPic3="<h5>Gohan</h5><img "+imgSize+" src="+gokuImg+" alt='charecter1Img'><p id='gohanID'>HP:"+gokuHP+"</p>";
        var listofenemyChar="<div class='container-fluid'><div class='row'><div class='col-md-2 col-md-offset-3 pictures'><div "+cellHPCountPow+" class='pictures enemyImg'>"+enemyPic1+"</div></div><div class='col-md-2 pictures'><div "+friezaHPCountPow+" class='pictures enemyImg'>"+enemyPic2+"</div></div><div class='col-md-2 pictures'><div "+gokuHPCountPow+" class='pictures enemyImg'>"+enemyPic3+"</div></div></div></div>";
        var gohanattackPts=4;
        //alert("click works");
        $("#charecterChoice").fadeOut();
        $("#userCharecter").append("<div id='finaluserCharecter'>"+userPic+"</div>").fadeIn();
        $("#compEnemy").html(listofenemyChar).fadeIn();
    
        $(".enemyImg").click(function(){
            var thisPicture=this;
            var newenemyHealth=0;            
            var enemycharHealth=$(this).attr("enemyHealth");
            var counterAttack=$(this).attr("counterattackPower");
            var mainusercharHealth=130;
            console.log(newenemyHealth+" "+enemycharHealth+" "+counterAttack);
            //$(this).fadeOut();
            $("#attackSection").append(this);
            //$('.enemyImg').off('click');
            $("#enemySection").fadeOut();
            $("#compEnemy").fadeOut();



            $("#attackBtn").click(function(){
                gohanattackPts=gohanattackPts+gohanattackPts;
                mainusercharHealth=mainusercharHealth-counterAttack;
                newenemyHealth=enemycharHealth-gohanattackPts;

                console.log(gohanattackPts+" "+mainusercharHealth+" "+newenemyHealth);

                $("#gokuhpID").html("<p>Update HP: "+mainusercharHealth+"</p>");
                $("#displayHP").html("<p>Update HP: "+newenemyHealth+"</p>");

                if(newenemyHealth<=0){
                    console.log(newenemyHealth);
                    $(thisPicture).fadeOut();
                    $("#displayHP").fadeOut();
                    //$(".enemyImg").click();
                        $("#enemySection").fadeIn();
                        $("#compEnemy").fadeIn();

                        
                }
                

                else if(mainusercharHealth<=0){
                    $("#enemySection").empty();
                    $("#attackSection").empty();
                    $("#attackSection").html("<h1>Game Over</h1> <br>");
                    $("#attackSection").append("<button class='btn btn-default' id='resetBtn'>Restart</button>");

                    $("#resetBtn").click(function(){
                        location.reload();
                    });
                }

                // if($("#enemySection").find("img").length==0){
                //         $("#enemySection").empty();
                //     $("#attackSection").empty();
                //     $("#attackSection").html("<h1>You Won!!!</h1> <br>");
                //     $("#attackSection").append("<button class='btn btn-default' id='resetBtn'>Restart</button>");

                //     $("#resetBtn").click(function(){
                //         location.reload();
                //     });    
                //         }

                //console.log(counterAttack+" "+mainusercharHelth+" "+newenemyHealth);
                
                });

            

        });  });


});